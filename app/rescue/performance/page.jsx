import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactModal from "@/components/ContactModal";
import SocialProof from "@/components/SocialProof";
import { SITE_URL } from "@/lib/site";

export const metadata = {
  title: "Core Web Vitals & Speed Optimization",
  description:
    "Stop losing customers to a slow website. I rewrite bloated frontends and configure edge networks to guarantee sub-2-second load times.",
  alternates: {
    canonical: "/rescue/performance",
  },
  openGraph: {
    title: "Core Web Vitals Optimization Expert",
    description:
      "Guarantee sub-2-second load times for your Shopify or Custom site.",
    url: "/rescue/performance",
  },
};

export default function PerformanceRescue() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${SITE_URL}/rescue/performance#service`,
    name: "Core Web Vitals Optimization",
    provider: {
      "@id": `${SITE_URL}/#person`,
    },
    areaServed: "Global",
    serviceType: "Web Performance Optimization",
    offers: {
      "@type": "Offer",
      price: "1500.00",
      priceCurrency: "USD",
      priceValidUntil: "2026-12-31",
      availability: "https://schema.org/InStock",
    },
  };

  const diagnosis = [
    {
      number: "01",
      title: "Bloated JavaScript",
      description:
        "Most themes load every single script on the initial page load. We defer non-critical JS and implement strict code-splitting to free up the main thread.",
    },
    {
      number: "02",
      title: "Unoptimized Assets",
      description:
        "Serving 5MB uncompressed PNGs kills mobile performance. We migrate assets to modern formats (WebP/AVIF) and serve them via advanced Edge CDNs.",
    },
    {
      number: "03",
      title: "Third-Party App Bloat",
      description:
        "Shopify and WordPress plugins inject tracking codes that block rendering. I audit, consolidate, and asynchronously load your marketing stack.",
    },
  ];

  const beforeMetrics = [
    { label: "First Contentful Paint", value: "4.2s" },
    { label: "Time to Interactive", value: "8.1s" },
    { label: "Cumulative Layout Shift", value: "0.45" },
  ];
  const afterMetrics = [
    { label: "First Contentful Paint", value: "0.8s" },
    { label: "Time to Interactive", value: "1.1s" },
    { label: "Cumulative Layout Shift", value: "0.01" },
  ];

  return (
    <main className="min-h-screen bg-[var(--color-paper)] text-[var(--color-ink)] selection:bg-[var(--color-accent)] selection:text-[var(--color-paper)]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navbar />

      {/* Hero */}
      <section className="border-b border-[color:var(--color-line)] px-[clamp(2.5rem,4vw,4rem)] py-16 lg:py-24">
        <span className="label animate-fade-in-up">
          Core Web Vitals Optimization
        </span>

        <h1
          className="mt-4 max-w-3xl animate-fade-in-up [animation-delay:100ms]"
          style={{ fontWeight: "var(--weight-display-black)" }}
        >
          Stop losing customers to{" "}
          <span className="accent">a slow website.</span>
        </h1>

        <p className="body-lg mt-6 max-w-xl animate-fade-in-up [animation-delay:200ms]">
          A 1-second delay in page load time reduces conversions by 7%. I
          rewrite bloated frontends and configure edge networks to guarantee
          sub-2-second load times.
        </p>

        <div className="mt-10 flex flex-col items-start gap-6 animate-fade-in-up [animation-delay:300ms] sm:flex-row sm:items-center">
          <ContactModal
            triggerText="Get Free Performance Audit"
            triggerStyle="btn btn-primary"
            title="Book a Performance Audit."
            subtitle="Let's diagnose your Core Web Vitals and map out a sub-second optimization plan."
            subject="Performance Audit Request"
            fields={[
              { name: "name", label: "Name", type: "text", required: true },
              { name: "email", label: "Email", type: "email", required: true },
              {
                name: "website",
                label: "Website URL",
                type: "url",
                placeholder: "https://yoursite.com",
                required: true,
              },
              {
                name: "message",
                label: "What's failing?",
                type: "textarea",
                placeholder:
                  "Which metrics are failing (e.g., LCP, CLS), and any context that helps?",
                required: false,
              },
            ]}
            calTitle="Ready to review metrics?"
            calSubtitle="Grab a slot on my calendar so we can look at your Lighthouse scores together."
          />
          <Link
            href="/work"
            className="ui-text link-underline text-[color:var(--color-ink)]"
          >
            See Case Studies
          </Link>
        </div>
      </section>

      <SocialProof />

      {/* Before / After */}
      <section
        id="proof"
        className="border-b border-[color:var(--color-line)] px-[clamp(2.5rem,4vw,4rem)] py-14 lg:py-20"
      >
        <span className="label animate-fade-in-up">The Difference</span>
        <h2 className="mt-4 max-w-xl animate-fade-in-up [animation-delay:100ms]">
          The difference between bouncing and buying.
        </h2>
        <p className="body-lg mt-4 max-w-md animate-fade-in-up [animation-delay:200ms]">
          Actual results from a recent Shopify headless migration.
        </p>

        <div className="mt-12 grid grid-cols-1 border-t border-[color:var(--color-line)] md:grid-cols-2">
          {/* Before */}
          <div className="animate-fade-in-up border-b border-[color:var(--color-line)] py-10 md:border-b-0 md:border-r md:py-14 md:pr-12">
            <span className="stat-caption">Before Audit</span>
            <div className="mt-6 flex items-baseline gap-3">
              <span className="stat-number text-[3.5rem] text-[color:var(--color-muted)]">
                32
              </span>
              <span className="stat-caption">Lighthouse Score</span>
            </div>
            <div className="mt-8 flex flex-col gap-3 border-t border-[color:var(--color-line)] pt-6">
              {beforeMetrics.map((m) => (
                <div
                  key={m.label}
                  className="flex items-center justify-between"
                >
                  <span className="body-sm">{m.label}</span>
                  <span className="ui-text font-normal tracking-normal normal-case text-[color:var(--color-muted)]">
                    {m.value}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* After */}
          <div className="animate-fade-in-up [animation-delay:100ms] py-10 md:py-14 md:pl-12">
            <span className="label">After Optimization</span>
            <div className="mt-6 flex items-baseline gap-3">
              <span className="stat-number text-[3.5rem]">99</span>
              <span className="stat-caption">Lighthouse Score</span>
            </div>
            <div className="mt-8 flex flex-col gap-3 border-t border-[color:var(--color-line)] pt-6">
              {afterMetrics.map((m) => (
                <div
                  key={m.label}
                  className="flex items-center justify-between"
                >
                  <span className="body-sm text-[color:var(--color-ink)]">
                    {m.label}
                  </span>
                  <span className="ui-text font-normal tracking-normal normal-case text-[color:var(--color-accent)]">
                    {m.value}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <p className="body-sm mt-12 max-w-2xl animate-fade-in-up [animation-delay:200ms]">
          Recent result: a Shopify Plus store reduced Time to Interactive from
          8.1s to 1.1s after stripping third-party app bloat and implementing
          edge caching.
        </p>
      </section>

      {/* Diagnosis */}
      <section className="border-b border-[color:var(--color-line)]">
        <div className="border-b border-[color:var(--color-line)] px-[clamp(2.5rem,4vw,4rem)] py-14 lg:py-20">
          <span className="label animate-fade-in-up">The Diagnosis</span>
          <h2 className="mt-4 max-w-xl animate-fade-in-up [animation-delay:100ms]">
            Why your current setup is failing Core Web Vitals.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3">
          {diagnosis.map((item, index) => (
            <div
              key={item.number}
              className={`animate-fade-in-up border-[color:var(--color-line)] px-[clamp(2.5rem,4vw,4rem)] py-10 lg:py-14 ${
                index < 2 ? "border-b md:border-b-0 md:border-r" : ""
              }`}
              style={{ animationDelay: `${200 + index * 100}ms` }}
            >
              <span className="stat-number text-[1.5rem] text-[color:var(--color-muted)]">
                {item.number}
              </span>
              <h4 className="mt-4">{item.title}</h4>
              <p className="body-sm mt-3">{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Named proof: MerkBart */}
      <section className="border-b border-[color:var(--color-line)] px-[clamp(2.5rem,4vw,4rem)] py-14 lg:py-20">
        <span className="label animate-fade-in-up">
          Same Pattern, Different Platform
        </span>
        <h2 className="mt-4 max-w-xl animate-fade-in-up [animation-delay:100ms]">
          The Shopify example above isn&rsquo;t a one-off.
        </h2>

        <div className="mt-12 grid grid-cols-1 gap-10 lg:grid-cols-[1fr_220px] lg:gap-16">
          <div className="animate-fade-in-up [animation-delay:200ms]">
            <span className="label">WooCommerce, Norway</span>
            <h4 className="mt-3 max-w-lg">
              MerkBart moved off shared hosting onto AWS Lightsail with S3 +
              CloudFront for uploads.
            </h4>
            <p className="body-md mt-4 max-w-lg">
              The admin panel used to freeze for minutes on every order with
              multiple logo uploads. Now it doesn&rsquo;t freeze at all, and
              pages load roughly 4&times; faster.
            </p>
            <Link
              href="/work/merkbart"
              className="ui-text link-row link-underline mt-6 text-[color:var(--color-accent)] hover:text-[color:var(--color-ink)]"
            >
              Read the Full Case Study
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
          </div>

          <div className="animate-fade-in-up [animation-delay:300ms] border-t border-[color:var(--color-line)] pt-6 lg:border-l lg:border-t-0 lg:pl-8 lg:pt-0">
            <div className="stat-number">~4&times;</div>
            <div className="stat-caption mt-2">Faster page loads</div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section id="audit" className="surface-inverted">
        <div className="px-[clamp(2.5rem,4vw,4rem)] py-20 text-center lg:py-28">
          <h2 className="mx-auto max-w-2xl text-[color:var(--color-ink-surface-text)] animate-fade-in-up [animation-delay:100ms]">
            Let&rsquo;s <span className="accent">find the bottlenecks.</span>
          </h2>
          <p className="body-lg mx-auto mt-6 max-w-md animate-fade-in-up [animation-delay:200ms]">
            Send me your URL. I will run a deep-dive performance diagnostic and
            send you a custom report outlining exactly what is slowing your site
            down and how much it will cost to fix it.
          </p>
          <div className="mt-10 flex justify-center animate-fade-in-up [animation-delay:300ms]">
            <ContactModal
              triggerText="Get Free Diagnostic Report"
              triggerStyle="btn btn-primary"
              title="Emergency Speed Rescue."
              subtitle="Stop bleeding conversions. Let's fix your frontend."
              subject="URGENT: Performance Rescue Request"
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
                  label: "Website URL",
                  type: "url",
                  placeholder: "https://yoursite.com",
                  required: true,
                },
                {
                  name: "message",
                  label: "Bottlenecks",
                  type: "textarea",
                  placeholder:
                    "Any specific issues (e.g., bloated JavaScript, slow third-party scripts)...",
                  required: false,
                },
              ]}
              calTitle="Need immediate triage?"
              calSubtitle="Grab the next available slot on my calendar to look at the codebase together."
            />
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
