// app/sitemap.js
import { workProjects } from "@/lib/work-projects";
import { getAllPosts } from "@/lib/posts";
import { SITE_URL } from "@/lib/site";

export default function sitemap() {
  const staticPages = [
    { url: SITE_URL, lastModified: new Date(), priority: 1 },
    { url: `${SITE_URL}/about`, lastModified: new Date(), priority: 0.8 },
    { url: `${SITE_URL}/work`, lastModified: new Date(), priority: 0.8 },
    { url: `${SITE_URL}/agency`, lastModified: new Date(), priority: 0.9 },
    { url: `${SITE_URL}/rescue`, lastModified: new Date(), priority: 0.9 },
    {
      url: `${SITE_URL}/rescue/vibe-coding`,
      lastModified: new Date(),
      priority: 0.9,
    },
    {
      url: `${SITE_URL}/rescue/performance`,
      lastModified: new Date(),
      priority: 0.9,
    },
    { url: `${SITE_URL}/blog`, lastModified: new Date(), priority: 0.8 },
  ];

  // One entry per case study, generated from the same list that drives
  // the /work grid (lib/work-projects.js) - add a project there once,
  // it shows up here automatically, no manual sitemap edits needed.
  const workPages = workProjects.map((project) => ({
    url: `${SITE_URL}/work/${project.link}`,
    // Case studies are static once published - using Jan 1 of the
    // project's year as a stand-in "last changed" date is more honest
    // than stamping every single one with today's build time. Swap in
    // a real per-project updated date later if you start tracking one.
    lastModified: new Date(Number(project.year), 0, 1),
    priority: 0.6,
  }));

  // Same idea for the blog - every post in blog/*.md shows up here
  // automatically the moment it's published, using its real
  // date_modified (falling back to date) as the sitemap's lastmod.
  const blogPages = getAllPosts().map((post) => ({
    url: `${SITE_URL}/blog/${post.slug}`,
    lastModified: new Date(post.meta.date_modified || post.meta.date),
    priority: 0.8,
  }));

  return [...staticPages, ...workPages, ...blogPages];
}
