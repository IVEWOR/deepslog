// app/sitemap.js
import { workProjects } from "@/lib/work-projects";

export default function sitemap() {
  const staticPages = [
    { url: "https://deepakj.dev", lastModified: new Date(), priority: 1 },
    {
      url: "https://deepakj.dev/about",
      lastModified: new Date(),
      priority: 0.8,
    },
    {
      url: "https://deepakj.dev/work",
      lastModified: new Date(),
      priority: 0.8,
    },
    {
      url: "https://deepakj.dev/agency",
      lastModified: new Date(),
      priority: 0.9,
    },
    {
      url: "https://deepakj.dev/rescue",
      lastModified: new Date(),
      priority: 0.9,
    },
    {
      url: "https://deepakj.dev/rescue/vibe-coding",
      lastModified: new Date(),
      priority: 0.9,
    },
    {
      url: "https://deepakj.dev/rescue/performance",
      lastModified: new Date(),
      priority: 0.9,
    },
  ];

  // One entry per case study, generated from the same list that drives
  // the /work grid (lib/work-projects.js) - add a project there once,
  // it shows up here automatically, no manual sitemap edits needed.
  const workPages = workProjects.map((project) => ({
    url: `https://deepakj.dev/work/${project.link}`,
    // Case studies are static once published - using Jan 1 of the
    // project's year as a stand-in "last changed" date is more honest
    // than stamping every single one with today's build time. Swap in
    // a real per-project updated date later if you start tracking one.
    lastModified: new Date(Number(project.year), 0, 1),
    priority: 0.7,
  }));

  return [...staticPages, ...workPages];
}
