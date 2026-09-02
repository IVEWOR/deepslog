import Link from "next/link";

const PROJECTS = [
  {
    year: "2026",
    metric: "+3× Collection Speed",
    title: "The Business Fashion",
    description:
      "Rebuilt the homepage with custom theme sections and tripled collection page load speed.",
    stack: ["Shopify", "Liquid", "JavaScript"],
    link: "thebusinessfashion",
  },
  {
    year: "2026",
    metric: "Zero Data Loss",
    title: "Footwear Brand Migration",
    description:
      "Migrated an acquired Shopify Plus store without losing products, orders, customers, marketing data, or SEO equity.",
    stack: ["Shopify Plus", "Klaviyo", "Data Migration"],
    link: "footwear-acquisition-migration",
  },
  {
    year: "2023",
    metric: "Subscription Live",
    title: "Chasin Unicorns",
    description:
      "Launched Recharge subscriptions with Klaviyo lifecycle flows and full funnel tracking for a wellness brand.",
    stack: ["Shopify", "Recharge", "Klaviyo", "GA4"],
    link: "chasin-unicorns",
  },
  {
    year: "2019",
    metric: "Sub-4s Page Loads",
    title: "The Collection",
    description:
      "Rebuilt a slow fashion storefront: faster page loads, working product previews, and smarter product discovery.",
    stack: ["Shopify", "Liquid", "JavaScript"],
    link: "darkestfox",
  },
];

export default function Work() {
  return (
    <section
      id="work"
      className="bg-[var(--color-paper)] border-y border-[color:var(--color-line)]"
    >
      {/* Header */}
      <div className="flex flex-col gap-6 border-b border-[color:var(--color-border-light)] px-[clamp(1.5rem,4vw,4rem)] py-14 lg:flex-row lg:items-end lg:justify-between lg:py-20">
        <div>
          <span className="label">Selected Work</span>
          <h2 className="mt-4 max-w-xl">
            <span className="accent">Revenue-driving</span> Shopify experiences.
          </h2>
        </div>
        <p className="body-sm max-w-xs text-[color:var(--color-muted)] lg:text-right">
          Custom builds for scaling Shopify merchants, B2B and DTC brands.
        </p>
      </div>

      {/* Column labels — desktop only */}
      <div className="hidden lg:grid lg:grid-cols-[64px_260px_1fr_200px_32px] lg:gap-8 border-b border-[color:var(--color-border-light)] px-[clamp(1.5rem,4vw,4rem)] py-4">
        <span className="stat-caption">Year</span>
        <span className="stat-caption">Project</span>
        <span className="stat-caption">Result</span>
        <span className="stat-caption">Stack</span>
        <span />
      </div>

      {/* Rows */}
      <div className="flex flex-col">
        {PROJECTS.map((project) => (
          <Link
            key={project.link}
            href={`/work/${project.link}`}
            className="group flex flex-col gap-4 border-b border-[color:var(--color-border-light)] px-[clamp(1.5rem,4vw,4rem)] py-8 transition-colors duration-[var(--duration-fast)] hover:bg-[color:var(--color-ink)]/[0.03] lg:grid lg:grid-cols-[64px_260px_1fr_200px_32px] lg:items-start lg:gap-8 lg:py-10"
          >
            {/* Year */}
            <span className="stat-caption tabular-nums lg:pt-1">
              {project.year}
            </span>

            {/* Metric + title */}
            <div className="flex flex-col gap-2">
              <span className="label">{project.metric}</span>
              <h4 className="transition-transform duration-[var(--duration-fast)] group-hover:translate-x-1">
                {project.title}
              </h4>
            </div>

            {/* Description */}
            <p className="body-sm max-w-md text-[color:var(--color-muted)] lg:pt-1">
              {project.description}
            </p>

            {/* Stack */}
            <span className="ui-text font-normal tracking-normal normal-case text-[color:var(--color-muted)] lg:pt-1">
              {project.stack.join(" / ")}
            </span>

            {/* Arrow */}
            <svg
              className="hidden h-4 w-4 text-[color:var(--color-muted)] transition-all duration-[var(--duration-fast)] group-hover:translate-x-1 group-hover:text-[color:var(--color-accent)] lg:block lg:pt-1"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path d="M5 12h14M13 5l7 7-7 7" />
            </svg>
          </Link>
        ))}
      </div>

      {/* View all */}
      <Link
        href="/work"
        className="ui-text link-underline flex items-center gap-2 px-[clamp(1.5rem,4vw,4rem)] py-8 text-[color:var(--color-ink)]"
      >
        View All Work
        <svg
          className="h-3.5 w-3.5"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path d="M5 12h14M13 5l7 7-7 7" />
        </svg>
      </Link>
    </section>
  );
}
