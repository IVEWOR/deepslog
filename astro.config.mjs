import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import remarkGfm from "remark-gfm";
import rehypeSlug from "rehype-slug";

// Adds target/rel to external links in markdown content.
function rehypeExternalLinks() {
  return (tree) => {
    const walk = (node) => {
      if (node.tagName === "a") {
        const href = String(node.properties?.href || "");
        if (href.startsWith("http://") || href.startsWith("https://")) {
          node.properties.target = "_blank";
          node.properties.rel = "noopener noreferrer";
        }
      }
      for (const child of node.children || []) {
        if (child.type === "element") walk(child);
      }
    };
    walk(tree);
  };
}

// Article images: lazy + async + Swiss flat border. Supports captions via
// " | " in alt text, e.g. ![Alt text | Caption text](/image.png),
// rendered as figure/figcaption (same as the old Next.js pipeline).
function rehypeArticleMedia() {
  return (tree) => {
    const walk = (node, parent) => {
      const children = node.children || [];
      for (let i = 0; i < children.length; i++) {
        const child = children[i];
        if (child.type !== "element") continue;
        if (child.tagName === "img") {
          const props = child.properties || {};
          const alt = String(props.alt || "");
          const pipe = alt.indexOf(" | ");
          const imageAlt = pipe === -1 ? alt : alt.slice(0, pipe);
          const caption = pipe === -1 ? "" : alt.slice(pipe + 3);
          props.alt = imageAlt.trim();
          props.loading = "lazy";
          props.decoding = "async";
          props.className = ["border", "border-(--color-border-light)", "w-full", "h-auto"];
          child.properties = props;
          if (caption.trim()) {
            children[i] = {
              type: "element",
              tagName: "figure",
              properties: { className: ["my-8"] },
              children: [
                child,
                {
                  type: "element",
                  tagName: "figcaption",
                  properties: { className: ["stat-caption", "mt-2", "text-center"] },
                  children: [{ type: "text", value: caption.trim() }],
                },
              ],
            };
          }
        } else {
          walk(child, node);
        }
      }
    };
    walk(tree, null);
  };
}

// Wraps markdown tables in a scroll container so wide data tables
// (theme benchmarks, before/after comparisons) scroll horizontally on
// narrow screens instead of breaking the layout.
function rehypeTableWrap() {
  return (tree) => {
    const walk = (node) => {
      const children = node.children || [];
      for (let i = 0; i < children.length; i++) {
        const child = children[i];
        if (child.type !== "element") continue;
        if (child.tagName === "table") {
          children[i] = {
            type: "element",
            tagName: "div",
            properties: { className: ["table-scroll"] },
            children: [child],
          };
        } else {
          walk(child);
        }
      }
    };
    walk(tree);
  };
}

// https://astro.build/config
// Static output for Cloudflare Pages. All routes prerendered at build time;
// only islands (contact modal, work grid filter, mobile nav) ship JS.
export default defineConfig({
  site: "https://deepakj.dev",
  output: "static",
  trailingSlash: "never",
  build: {
    // Inline all CSS into each HTML file. Kills the render-blocking
    // stylesheet request (~1.3s on Slow 4G per PSI): text paints as soon
    // as the document arrives. Right trade at 60KB shared CSS on a
    // 10-route static site — caching a separate file would cost a
    // round trip on every first view instead.
    inlineStylesheets: "always",
  },
  // NOTE: no @astrojs/sitemap — it only emits sitemap-index.xml +
  // sitemap-0.xml. We serve a single hand-rolled /sitemap.xml instead
  // (src/pages/sitemap.xml.ts) with deliberate priorities.
  integrations: [],
  vite: {
    plugins: [tailwindcss()],
  },
  markdown: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [rehypeSlug, rehypeExternalLinks, rehypeArticleMedia, rehypeTableWrap],
    shikiConfig: {
      theme: "github-light",
      wrap: true,
    },
  },
});
