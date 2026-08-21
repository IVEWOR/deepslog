import Link from "next/link";

export default function Work() {
  const projects = [
    {
      year: "2026",
      title: "The Business Fashion",
      metric: "+3x Collection Speed",
      description:
        "Rebuilt homepage with custom theme sections, and improved collection page load speed by 3x.",
      tech: ["Shopify", "Liquid", "JavaScript"],
      link: "thebusinessfashion",
    },
    {
      year: "2026",
      title: "Footware Brand Migration",
      metric: "Full Data Preserved",
      description:
        "Created export runbook and migration plan for an acquired footwear brand's Shopify Plus store. Products, orders, customers, Klaviyo lists, SMS consent, and SEO redirects, all scoped for zero data loss.",
      tech: ["Shopify Plus", "Klaviyo", "Data Migration"],
      link: "footwear-acquisition-migration",
    },
    {
      year: "2023",
      title: "Chasin Unicorns",
      metric: "Subscription Live",
      description:
        "Configured Recharge prepaid tiers, built Klaviyo lifecycle flows, and implemented GA4 + Meta Pixel tracking for a wellness subscription box brand.",
      tech: ["Shopify", "Recharge", "Klaviyo", "GA4"],
      link: "chasin-unicorns",
    },
    {
      year: "2019",
      title: "The Collection",
      metric: "Sub-4s Page Loads",
      description:
        "Debugged and extended a US fashion store with lazy-loaded pages, fixed QuickView swatches, built Recently Viewed carousel, and enhanced search with subcategory showcases.",
      tech: ["Shopify", "Liquid", "JavaScript"],
      link: "Darkestfox",
    },
  ];

  return (
    <section
      id="work"
      className="py-24 lg:py-32 bg-white relative border-t border-slate-100"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-16 md:mb-24 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="max-w-2xl">
            <h2 className="text-sm font-semibold text-indigo-600 tracking-widest uppercase mb-3">
              Selected Work
            </h2>
            <h3 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-tight">
              <span className="text-transparent bg-clip-text bg-linear-to-r from-indigo-600 to-blue-500">
                Revenue-driving{" "}
              </span>
              Shopify experiences
            </h3>
          </div>
          <p className="text-base sm:text-lg text-slate-500 leading-relaxed md:text-right max-w-sm">
            Custom builds for scaling Shopify merchants, B2B and DTC brands
          </p>
        </div>

        {/* Projects List Container */}
        <div className="flex flex-col border-t border-slate-200">
          {projects.map((project, index) => (
            <Link
              href={`/work/${project.link}`}
              key={index}
              className="group block border-b border-slate-200 py-8 lg:py-10 hover:bg-slate-50 transition-colors duration-300 relative overflow-hidden"
            >
              {/* Subtle indigo gradient that fades in on hover */}
              <div className="absolute inset-0 bg-linear-to-r from-indigo-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>

              <div className="relative z-10 grid grid-cols-1 md:grid-cols-12 gap-6 items-start md:items-center px-4">
                {/* 1. Year & Title (Col span 4) */}
                <div className="md:col-span-4 flex flex-col">
                  <span className="text-sm font-medium text-slate-400 mb-1">
                    {project.year}
                  </span>
                  <h4 className="text-xl sm:text-2xl lg:text-3xl font-bold text-slate-900 leading-snug group-hover:text-indigo-600 transition-colors duration-300">
                    {project.title}
                  </h4>
                </div>

                {/* 2. Metric & Description (Col span 4) */}
                <div className="md:col-span-4 flex flex-col">
                  {/* The exact detail agencies want to see */}
                  <span className="text-sm font-bold text-emerald-600 bg-emerald-50 w-fit px-3 py-1 rounded-full mb-2">
                    {project.metric}
                  </span>
                  <span className="text-base text-slate-600 leading-relaxed">
                    {project.description}
                  </span>
                </div>

                {/* 3. Tech Stack & Arrow (Col span 4) */}
                <div className="md:col-span-4 flex flex-wrap items-center justify-start md:justify-end gap-2 lg:gap-3">
                  <div className="flex flex-wrap gap-2 mr-auto md:mr-4">
                    {project.tech.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="text-xs font-medium px-3 py-1.5 rounded-lg bg-white border border-slate-200 text-slate-600 shadow-sm"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Animated Arrow */}
                  <div className="hidden sm:flex items-center justify-center w-12 h-12 rounded-full border border-slate-200 bg-white group-hover:border-indigo-600 group-hover:bg-indigo-600 transition-all duration-300">
                    <svg
                      className="w-5 h-5 text-slate-400 group-hover:text-white transform group-hover:-rotate-45 transition-all duration-300"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M14 5l7 7m0 0l-7 7m7-7H3"
                      ></path>
                    </svg>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* View All Button */}
        <div className="mt-16 text-center">
          <Link
            href="/work"
            className="inline-flex items-center gap-2 text-base font-semibold text-slate-600 hover:text-indigo-600 transition-colors underline-offset-4 hover:underline"
          >
            View More Work
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              ></path>
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
