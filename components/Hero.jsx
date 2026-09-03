import Link from "next/link";
import ContactModal from "./ContactModal";

const STATS = [
  { value: "9+", label: "Years of Experience" },
  { value: "30+", label: "Shopify Stores Shipped" },
  { value: "40+", label: "Checkout Optimizations" },
];

export default function Hero() {
  return (
    <section className="bg-(--color-paper) border-b border-(--color-line)">
      <div className="grid grid-cols-1 lg:grid-cols-2">
        {/* LEFT: pitch */}
        <div className="flex flex-col border-b border-(--color-line) py-6 sm:py-10 lg:border-b-0 lg:border-r border-r-(--color-border-light) lg:py-14 px-[clamp(1.5rem,4vw,4rem)]">
          <span className="label animate-fade-in-up [animation-delay:100ms]">
            Shopify Development
          </span>

          <h1
            className="mt-6 max-w-[820px] animate-fade-in-up [animation-delay:150ms] uppercase"
            style={{ fontWeight: "var(--weight-display-black)" }}
          >
            I build <span className="accent block">Shopify stores</span> that
            scale.
          </h1>

          <p className="body-lg mt-6 max-w-[560px] animate-fade-in-up [animation-delay:250ms]">
            I help Shopify merchants build, rebuild, and fix stores where
            performance, conversion, and custom functionality actually matter.
          </p>

          <div className="mt-10 flex flex-col items-start gap-6 animate-fade-in-up [animation-delay:350ms] sm:flex-row sm:items-center">
            <ContactModal
              triggerText="Start a Project"
              triggerStyle="btn btn-primary w-full sm:w-auto"
              title="Start a project."
              subtitle="Tell me what you're building or what's broken. I'll reply within a day."
              subject="New Project Inquiry (Homepage Hero)"
              fields={[
                { name: "name", label: "Name", type: "text", required: true },
                {
                  name: "email",
                  label: "Email",
                  type: "email",
                  required: true,
                },
                {
                  name: "website",
                  label: "Shopify Store URL",
                  type: "url",
                  placeholder: "https://yourstore.com",
                  required: false,
                },
                {
                  name: "message",
                  label: "What do you need?",
                  type: "textarea",
                  placeholder:
                    "New build, replatform, performance, checkout, custom app - what's the priority?",
                  required: true,
                },
              ]}
              calTitle="Rather talk it through?"
              calSubtitle="Grab 15 minutes and we'll go over what to tackle first."
            />

            <Link
              href="/work"
              className="ui-text link-underline text-(--color-ink)"
            >
              See Case Studies
            </Link>
          </div>

          <div className="md:mt-12 flex md:items-end gap-3 pt-8 lg:mt-auto">
            <svg
              className="mt-px h-4 w-4 shrink-0 text-(--color-ink)"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.6"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
              <circle cx="9" cy="7" r="4" />
              <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
              <path d="M16 3.13a4 4 0 0 1 0 7.75" />
            </svg>
            <span className="font-mono text-(length:--text-label) uppercase leading-(--leading-label) tracking-(--tracking-label) text-(--color-ink)">
              For DTC brands and growing stores that have outgrown their current
              setup
            </span>
          </div>
        </div>

        {/* RIGHT: proof */}
        <div className="flex flex-col py-6 sm:py-10 lg:py-14 px-[clamp(1.5rem,4vw,4rem)]">
          <span className="label animate-fade-in-up [animation-delay:200ms]">
            Client Note
          </span>

          <blockquote className="mt-6 max-w-[560px] font-body text-(length:--text-display-sm) leading-[1.6] text-(--color-ink) animate-fade-in-up [animation-delay:300ms]">
            &ldquo;He understood the problem quickly, solved the complex parts,
            and delivered exactly what we needed. The result: a store
            that&rsquo;s faster, easier to manage, and built to scale.&rdquo;
          </blockquote>

          <p className="mt-5 text-(length:--text-body-md) animate-fade-in-up [animation-delay:350ms]">
            <span className="font-body font-medium text-(--color-ink)">
              Filip J.
            </span>
            <span className="text-(--color-muted)"> - Merkbart</span>
          </p>

          <div className="mt-12 grid grid-cols-3 border-y border-(--color-border-light) mx-[-1.5rem] md:mx-0">
            {STATS.map((stat, i) => (
              <div
                key={stat.label}
                className={`py-7 px-4 md:pr-4 ${
                  i > 0 ? "border-l border-(--color-border-light)" : ""
                }`}
              >
                <div className="stat-number">{stat.value}</div>
                <div className="stat-caption mt-4 leading-[1.5]">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>

          <div className="pt-8">
            <div className="flex items-end gap-4">
              <div className="stat-number text-[2.75rem] leading-none">
                2&times;
              </div>
              <div className="uppercase text-sm">
                Conversion rate in 90 days
              </div>
            </div>
            <Link
              href="/work/merkbart"
              className="ui-text link-underline mt-12 text-(--color-accent) transition-colors duration-(--duration-fast) hover:text-(--color-ink)"
            >
              View Case Study
              <svg
                className="h-3.5 w-3.5"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M5 12h14M13 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
