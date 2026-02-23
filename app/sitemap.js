// app/sitemap.js
export default function sitemap() {
  return [
    { url: "https://deepslog.com", lastModified: new Date(), priority: 1 },
    {
      url: "https://deepslog.com/about",
      lastModified: new Date(),
      priority: 0.8,
    },
    {
      url: "https://deepslog.com/work",
      lastModified: new Date(),
      priority: 0.8,
    },
    {
      url: "https://deepslog.com/agency",
      lastModified: new Date(),
      priority: 0.9,
    },
    {
      url: "https://deepslog.com/rescue",
      lastModified: new Date(),
      priority: 0.9,
    },
    {
      url: "https://deepslog.com/rescue/vibe-coding",
      lastModified: new Date(),
      priority: 0.9,
    },
    {
      url: "https://deepslog.com/rescue/performance",
      lastModified: new Date(),
      priority: 0.9,
    },
    // Add all work projects dynamically
  ];
}
