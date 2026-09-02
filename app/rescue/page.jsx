import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactModal from "@/components/ContactModal";
import SocialProof from "@/components/SocialProof";
import { SITE_URL } from "@/lib/site";

export const metadata = {
  title:
    "Emergency Code Rescue | AI Cleanup & Speed Optimization | Deepak Jangra",
  description:
    "Vibe coding cleanup, AI-generated code rescue, and Core Web Vitals optimization. I stabilize Cursor/Copilot MVPs and fix slow Shopify/WordPress sites. 48-hour audit available.",
  alternates: {
    canonical: "/rescue",
  },
  openGraph: {
    title: "Emergency Code Rescue | Vibe Coding Cleanup & Speed Optimization",
    description:
      "Rescue AI-generated codebases and fix slow websites. 4× speed improvements, production-ready results.",
    url: `${SITE_URL}/rescue`,
    siteName: "Deepak Jangra",
    images: [
      {
        url: `${SITE_URL}/og-rescue.png`,
        width: 1200,
        height: 630,
        alt: "Code Rescue Services - AI Cleanup & Speed Optimization",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function RescueHub() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": `${SITE_URL}/rescue#service`,
        name: "Emergency Web Development & Code Rescue",
        description:
          "Specialized rescue services for broken codebases, AI-generated messes, and performance failures",
        provider: {
          "@id": `${SITE_URL}/#person`,
        },
        serviceType: [
          "AI Code Rescue",
          "Vibe Coding Cleanup",
          "Performance Optimization",
          "Technical Debt Reduction",
          "Shopify Store Rescue",
        ],
        areaServed: {
          "@type": "Place",
          name: "Global",
        },
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Rescue Services",
          itemListElement: [
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                "@id": `${SITE_URL}/rescue/vibe-coding#service`,
                name: "Vibe Coding Cleanup",
                description:
                  "Refactor AI-generated code from Cursor, Copilot, v0 into production-ready applications",
              },
              price: "2000.00",
              priceCurrency: "USD",
              priceValidUntil: "2026-12-31",
              availability: "https://schema.org/InStock",
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                "@id": `${SITE_URL}/rescue/performance#service`,
                name: "Speed & Core Web Vitals Rescue",
                description:
                  "Fix slow websites, optimize Shopify/WordPress, guarantee sub-2-second loads",
              },
              price: "1500.00",
              priceCurrency: "USD",
              priceValidUntil: "2026-12-31",
              availability: "https://schema.org/InStock",
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                "@id": `${SITE_URL}/rescue#shopify-service`,
                name: "Shopify Store Rescue",
                description:
                  "Audit, stabilize, and document broken checkouts, overloaded themes, and messy app stacks on Shopify Plus stores",
              },
              price: "1500.00",
              priceCurrency: "USD",
              priceValidUntil: "2026-12-31",
              availability: "https://schema.org/InStock",
            },
          ],
        },
      },
      {
        "@type": "WebPage",
        "@id": `${SITE_URL}/rescue#webpage`,
        name: "Emergency Code Rescue Services",
        description: "Stabilize broken codebases and fix slow websites",
        url: `${SITE_URL}/rescue`,
        mainEntity: {
          "@id": `${SITE_URL}/rescue#service`,
        },
      },
    ],
  };

  const pathways = [
    {
      number: "01",
      title: "Architecture & AI Rescue",
      description:
        "You built a prototype using Cursor or v0, but now it's a monolithic mess of spaghetti code that crashes when you try to scale. I refactor it into enterprise-grade React/Next.js.",
      href: "/rescue/vibe-coding",
      cta: "Explore AI Code Rescue",
    },
    {
      number: "02",
      title: "Speed & Core Web Vitals",
      description:
        "Your Shopify or WordPress site is painfully slow, tanking your SEO and killing conversion rates. I strip out the bloat and guarantee sub-2-second load times.",
      href: "/rescue/performance",
      cta: "Explore Performance Rescue",
    },
    {
      number: "03",
      title: "Shopify Store Rescue",
      description:
        "Broken checkout? Theme falling apart after too many app installs? Previous developer used a page builder that slowed your store to a crawl? I audit, stabilize, and document - so your team can maintain it without me.",
      cta: "Get a Store Audit",
      modal: true,
    },
  ];

  const steps = [
    {
      number: "01",
      title: "Audit",
      description:
        "A real review of your repo or store, not a sales call. You get a written list of what's actually broken, ranked by what's costing you the most.",
    },
    {
      number: "02",
      title: "Stabilize",
      description:
        "I fix what's actively bleeding money or breaking first, without a ground-up rewrite unless one is genuinely needed. You keep selling while it happens.",
    },
    {
      number: "03",
      title: "Document & Hand Off",
      description:
        "You get documentation and a staging environment either way, whether we keep working together or your team takes it from here.",
    },
  ];

  return (
    <main className="min-h-screen bg-[var(--color-paper)] text-[var(--color-ink)] selection:bg-[var(--color-accent)] selection:text-[var(--color-paper)]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navbar />

      {/* Hero */}
      <section className="border-b border-[color:var(--color-line)] px-[clamp(1.5rem,4vw,4rem)] py-16 lg:py-24">
        <span className="label animate-fade-in-up">
          Emergency Development Services
        </span>

        <h1
          className="mt-4 max-w-3xl animate-fade-in-up [animation-delay:100ms]"
          style={{ fontWeight: "var(--weight-display-black)" }}
        >
          Did your last developer <span className="accent">leave a mess?</span>
        </h1>

        <p className="body-lg mt-6 max-w-xl animate-fade-in-up [animation-delay:200ms]">
          Whether your Shopify store is breaking at scale, your AI-generated
          checkout extension is a mess, or your previous developer disappeared -
          I step in, stabilize the codebase, and get you back to selling.
        </p>
      </section>

      {/* Reuses the homepage marquee component for consistency -
          see note below the code about why this replaced ClientLogos. */}
      <SocialProof />

      {/* Pathways */}
      <section className="border-b border-[color:var(--color-line)]">
        <div className="grid grid-cols-1 lg:grid-cols-3">
          {pathways.map((path, index) => (
            <div
              key={path.number}
              className={`animate-fade-in-up flex flex-col border-[color:var(--color-line)] px-[clamp(1.5rem,4vw,4rem)] py-14 lg:py-20 ${
                index < 2 ? "border-b lg:border-b-0 lg:border-r" : ""
              }`}
              style={{ animationDelay: `${300 + index * 100}ms` }}
            >
              <span className="stat-number text-[1.5rem] text-[color:var(--color-muted)]">
                {path.number}
              </span>
              <h3 className="mt-5">{path.title}</h3>
              <p className="body-sm mt-3 grow">{path.description}</p>

              <div className="mt-8 border-t border-[color:var(--color-line)] pt-6">
                {path.modal ? (
                  <ContactModal
                    triggerText={path.cta}
                    triggerStyle="ui-text link-underline text-[color:var(--color-ink)] cursor-pointer"
                    title="Get a Store Audit."
                    subtitle="Broken checkout, slow theme, or a messy app stack? Tell me what's going on."
                    subject="Shopify Store Audit Request"
                    fields={[
                      {
                        name: "name",
                        label: "Name",
                        type: "text",
                        required: true,
                      },
                      {
                        name: "email",
                        label: "Email",
                        type: "email",
                        required: true,
                      },
                      {
                        name: "website",
                        label: "Store URL",
                        type: "url",
                        placeholder: "https://yourstore.com",
                        required: true,
                      },
                      {
                        name: "message",
                        label: "What's broken or slow?",
                        type: "textarea",
                        placeholder:
                          "Broken checkout, overloaded theme, messy app stack - what's going on?",
                        required: true,
                      },
                    ]}
                    calTitle="Need immediate triage?"
                    calSubtitle="Grab the next available slot on my calendar. Let's look at the store together."
                  />
                ) : (
                  <Link
                    href={path.href}
                    className="ui-text link-row link-underline text-[color:var(--color-ink)]"
                  >
                    {path.cta}
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
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Proof: MerkBart */}
      <section className="border-b border-[color:var(--color-line)] px-[clamp(1.5rem,4vw,4rem)] py-16 lg:py-24">
        <span className="label animate-fade-in-up">Recent Work</span>
        <h2 className="mt-4 max-w-xl animate-fade-in-up [animation-delay:100ms]">
          This isn&rsquo;t theoretical.
        </h2>

        <div className="mt-12 grid grid-cols-1 gap-10 lg:grid-cols-[1fr_260px] lg:gap-16">
          <div className="animate-fade-in-up [animation-delay:200ms]">
            <span className="label">WooCommerce, Norway</span>
            <h4 className="mt-3 max-w-lg">
              MerkBart&rsquo;s admin panel froze for minutes every time a
              customer uploaded logos.
            </h4>
            <p className="body-md mt-4 max-w-lg">
              Invoice generation timed out on bigger orders. Setting a sale
              price meant editing hundreds of variants by hand. I rebuilt the
              store from scratch, moved it off shared hosting onto AWS, and
              replaced the broken plugins with custom ones built around how the
              team actually works.
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

          <div className="grid animate-fade-in-up grid-cols-2 gap-6 border-t border-[color:var(--color-line)] pt-6 [animation-delay:300ms] lg:grid-cols-1 lg:border-l lg:border-t-0 lg:pl-8 lg:pt-0">
            <div>
              <div className="stat-number">~4&times;</div>
              <div className="stat-caption mt-2">Faster page loads</div>
            </div>
            <div>
              <div className="stat-number">2&times;</div>
              <div className="stat-caption mt-2">
                Sales, 3 months post-launch
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="border-b border-[color:var(--color-line)] px-[clamp(1.5rem,4vw,4rem)] py-16 lg:py-24">
        <span className="label animate-fade-in-up">The Process</span>
        <h2 className="mt-4 max-w-xl animate-fade-in-up [animation-delay:100ms]">
          How a rescue engagement actually works.
        </h2>

        <div className="mt-12 grid grid-cols-1 border-t border-[color:var(--color-line)] sm:grid-cols-3">
          {steps.map((step, index) => (
            <div
              key={step.number}
              className={`animate-fade-in-up py-8 ${
                index > 0
                  ? "sm:border-l sm:border-[color:var(--color-line)] sm:pl-8"
                  : ""
              } ${index < steps.length - 1 ? "border-b sm:border-b-0 border-[color:var(--color-line)]" : ""}`}
              style={{ animationDelay: `${200 + index * 100}ms` }}
            >
              <span className="stat-number text-[1.5rem]">{step.number}</span>
              <h4 className="mt-4">{step.title}</h4>
              <p className="body-sm mt-3">{step.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Closing CTA */}
      <section className="surface-inverted">
        <div className="px-[clamp(1.5rem,4vw,4rem)] py-20 text-center lg:py-28">
          <h2 className="mx-auto max-w-2xl text-[color:var(--color-ink-surface-text)] animate-fade-in-up [animation-delay:100ms]">
            Have a <span className="accent">different kind</span> of emergency?
          </h2>
          <p className="body-lg mx-auto mt-6 max-w-md animate-fade-in-up [animation-delay:200ms]">
            Abandoned migrations, broken APIs, or security vulnerabilities?
            Don&rsquo;t let a bad codebase sink your business. Send me the
            details and I&rsquo;ll review it within 24 hours.
          </p>
          <div className="mt-10 flex justify-center animate-fade-in-up [animation-delay:300ms]">
            <ContactModal
              triggerText="Get Immediate Help"
              triggerStyle="btn btn-primary"
              title="Emergency Rescue."
              subtitle="Stop the bleeding. Tell me what's going wrong."
              subject="URGENT: General Rescue Request"
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
                  label: "Site or Repo URL",
                  type: "text",
                  placeholder: "https://yoursite.com or a repo link",
                  required: false,
                },
                {
                  name: "message",
                  label: "What is broken?",
                  type: "textarea",
                  placeholder:
                    "Share details about the bugs, security flaws, or bad migrations so I can review it ASAP.",
                  required: true,
                },
              ]}
              calTitle="Need immediate triage?"
              calSubtitle="Grab the next available slot on my calendar. Let's look at the codebase together."
            />
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
