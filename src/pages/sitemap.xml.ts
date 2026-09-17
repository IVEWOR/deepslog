import type { APIRoute } from "astro";
import { getCollection } from "astro:content";
import { SITE_URL } from "../lib/site";

// Single /sitemap.xml (no index wrapper): homepage 1.0, all main pages
// and individual blog posts 0.9, case studies 0.6. lastmod uses real
// frontmatter dates where they exist and is omitted for dateless
// section pages rather than stamping every build time.
const STATIC_PAGES: Array<{
  path: string;
  priority: number;
  changefreq: string;
}> = [
  { path: "/", priority: 1.0, changefreq: "weekly" },
  { path: "/about", priority: 0.9, changefreq: "monthly" },
  { path: "/work", priority: 0.9, changefreq: "monthly" },
  { path: "/agency", priority: 0.9, changefreq: "monthly" },
  { path: "/blog", priority: 0.9, changefreq: "monthly" },
  { path: "/rescue", priority: 0.9, changefreq: "monthly" },
  { path: "/rescue/performance", priority: 0.9, changefreq: "monthly" },
  { path: "/rescue/vibe-coding", priority: 0.9, changefreq: "monthly" },
];

function lastmodOf(value?: string): string | null {
  if (!value) return null;
  if (/^\d{4}$/.test(value.trim())) return `${value.trim()}-01-15`;
  const d = new Date(value);
  if (Number.isNaN(d.getTime())) return null;
  return d.toISOString().slice(0, 10);
}

function urlEntry(
  loc: string,
  priority: number,
  changefreq: string,
  lastmod: string | null
): string {
  return (
    "  <url>\n" +
    `    <loc>${loc}</loc>\n` +
    (lastmod ? `    <lastmod>${lastmod}</lastmod>\n` : "") +
    `    <changefreq>${changefreq}</changefreq>\n` +
    `    <priority>${priority.toFixed(1)}</priority>\n` +
    "  </url>"
  );
}

export const GET: APIRoute = async () => {
  const entries: string[] = STATIC_PAGES.map((p) =>
    urlEntry(`${SITE_URL}${p.path === "/" ? "" : p.path}`, p.priority, p.changefreq, null)
  );

  const posts = await getCollection("blog");
  for (const post of posts) {
    const slug = post.id.replace(/\.md$/, "");
    entries.push(
      urlEntry(
        `${SITE_URL}/blog/${slug}`,
        0.9,
        "monthly",
        lastmodOf(post.data.date_modified || post.data.date)
      )
    );
  }

  const projects = await getCollection("work");
  for (const project of projects) {
    const slug = project.id.replace(/\.md$/, "");
    entries.push(
      urlEntry(
        `${SITE_URL}/work/${slug}`,
        0.6,
        "monthly",
        lastmodOf(
          project.data.date_modified ||
            project.data.date_published ||
            project.data.date
        )
      )
    );
  }

  const xml =
    '<?xml version="1.0" encoding="UTF-8"?>\n' +
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n' +
    entries.join("\n") +
    "\n</urlset>\n";

  return new Response(xml, {
    headers: { "Content-Type": "application/xml; charset=utf-8" },
  });
};
