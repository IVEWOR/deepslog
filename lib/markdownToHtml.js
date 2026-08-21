import { unified } from "unified";
import remarkParse from "remark-parse";
import remarkGfm from "remark-gfm";
import remarkRehype from "remark-rehype";
import rehypeRaw from "rehype-raw";
import rehypeStringify from "rehype-stringify";
import { visit } from "unist-util-visit";
import path from "path";
import sizeOf from "image-size";

// Width breakpoints requested from Next's built-in image optimizer
// (/_next/image) — a trimmed version of Next's default `deviceSizes`.
// Widths larger than the source image are dropped in buildSrcSet so we
// never ask Next to upscale a small screenshot.
const IMAGE_BREAKPOINTS = [640, 828, 1080, 1200, 1920];
const DEFAULT_QUALITY = 75;

function nextImageUrl(src, width, quality = DEFAULT_QUALITY) {
  return `/_next/image?url=${encodeURIComponent(src)}&w=${width}&q=${quality}`;
}

function buildSrcSet(src, actualWidth) {
  const widths = IMAGE_BREAKPOINTS.filter((w) => w <= actualWidth);
  if (widths.length === 0 || widths[widths.length - 1] !== actualWidth) {
    widths.push(actualWidth);
  }
  return widths.map((w) => `${nextImageUrl(src, w)} ${w}w`).join(", ");
}

// Reads real width/height for a local (/public) image so we can build a
// correct srcset and set width/height attributes for layout-shift
// prevention. Returns null for anything that isn't a root-relative local
// path, or that fails to read (missing file, unsupported format, etc.) —
// callers fall back to a plain, unoptimized <img> in that case.
function getLocalImageDimensions(src) {
  if (!src.startsWith("/") || src.startsWith("//")) return null;
  try {
    const filePath = path.join(process.cwd(), "public", src);
    const { width, height } = sizeOf(filePath);
    if (!width || !height) return null;
    return { width, height };
  } catch {
    return null;
  }
}

/**
 * Rehype plugin for content-body images.
 *
 * This output is an HTML string inserted via dangerouslySetInnerHTML, so
 * it can never contain a real next/image React component — data-* hints
 * for a client-side hydration step do nothing unless something actually
 * consumes them, and nothing does here. Instead, for local (/public)
 * images, this builds the same URLs next/image would build internally,
 * hitting Next's built-in /_next/image optimizer directly. The browser
 * still gets resized, WebP/AVIF-negotiated images with zero extra config
 * — Next serves whichever format the request's Accept header supports.
 *
 * External (http/https) images are left as plain <img> tags: Next's
 * optimizer returns a 400 for any domain not allowlisted in
 * next.config.js, so routing unknown external sources through it would
 * just break the image.
 *
 * Adds figure/figcaption support via " | " in alt text, e.g.:
 *   ![Alt text | Caption text](/image.png)
 */
function rehypeArticleImages() {
  return (tree) => {
    const imageNodes = [];
    visit(tree, "element", (node, index, parent) => {
      if (node.tagName === "img") imageNodes.push({ node, index, parent });
    });

    for (const { node, index, parent } of imageNodes) {
      const src = node.properties?.src || "";
      const alt = node.properties?.alt || "";
      const title = node.properties?.title || "";

      const [imageAlt, captionText] = alt.includes(" | ")
        ? alt.split(" | ")
        : [alt, ""];

      const dimensions = getLocalImageDimensions(src);

      const imgProps = {
        alt: imageAlt.trim(),
        loading: "lazy",
        decoding: "async",
        className: "rounded-xl shadow-md border border-slate-200 w-full h-auto",
        ...(title && { title }),
      };

      if (dimensions) {
        const { width, height } = dimensions;
        const fallbackWidth = Math.min(1200, width);
        imgProps.src = nextImageUrl(src, fallbackWidth);
        imgProps.srcSet = buildSrcSet(src, width);
        imgProps.sizes = "(max-width: 1024px) 100vw, 800px";
        imgProps.width = width;
        imgProps.height = height;
      } else {
        // External image, or a local one we couldn't read dimensions
        // for — render unoptimized rather than risk a broken
        // /_next/image request or a wrong aspect ratio.
        imgProps.src = src;
      }

      const imgNode = {
        type: "element",
        tagName: "img",
        properties: imgProps,
        children: [],
      };

      if (captionText) {
        parent.children[index] = {
          type: "element",
          tagName: "figure",
          properties: { className: "my-8" },
          children: [
            imgNode,
            {
              type: "element",
              tagName: "figcaption",
              properties: {
                className: "text-sm text-slate-500 mt-2 text-center",
              },
              children: [{ type: "text", value: captionText.trim() }],
            },
          ],
        };
      } else {
        parent.children[index] = imgNode;
      }
    }
  };
}

/**
 * Custom rehype plugin to add IDs to headings for anchor linking.
 */
function rehypeHeadingIds() {
  return (tree) => {
    visit(tree, "element", (node) => {
      if (!/^h[2-6]$/.test(node.tagName)) return;
      const text = node.children
        .filter((child) => child.type === "text")
        .map((child) => child.value)
        .join("");
      if (text) {
        const id = text
          .toLowerCase()
          .replace(/[^a-z0-9\s-]/g, "")
          .replace(/\s+/g, "-")
          .substring(0, 60);
        node.properties = node.properties || {};
        node.properties.id = id;
      }
    });
  };
}

/**
 * Custom rehype plugin to add rel="noopener noreferrer" to external links.
 */
function rehypeExternalLinks() {
  return (tree) => {
    visit(tree, "element", (node) => {
      if (node.tagName !== "a") return;
      const href = node.properties?.href || "";
      if (href.startsWith("http://") || href.startsWith("https://")) {
        node.properties.target = "_blank";
        node.properties.rel = "noopener noreferrer";
      }
    });
  };
}

export default async function markdownToHtml(markdown) {
  const result = await unified()
    .use(remarkParse)
    .use(remarkGfm)
    .use(remarkRehype, { allowDangerousHtml: true })
    .use(rehypeRaw)
    .use(rehypeHeadingIds)
    .use(rehypeExternalLinks)
    .use(rehypeArticleImages)
    .use(rehypeStringify)
    .process(markdown);

  return String(result);
}
