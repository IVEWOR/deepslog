import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactModal from "@/components/ContactModal";
import ClientLogos from "@/components/ClientLogos";
import { SITE_URL } from "@/lib/site";

export const metadata = {
  title: "Emergency Code Rescue | AI Cleanup & Speed Optimization | deepakj.",
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
    siteName: "deepakj.",
    images: [
      {
        // TODO: og-rescue.png doesn't exist yet ("Before/after visual" in
        // the original). Using a real screenshot as a stopgap.
        url: `${SITE_URL}/merkbart.png`,
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
                // Was "rescue/speed#service" — didn't match any real page.
                // The actual route is /rescue/performance.
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
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900 selection:bg-indigo-100 selection:text-indigo-900">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navbar />

      {/* 1. HERO SECTION: The Triage Center */}
      <section className="relative pt-40 pb-16 lg:pt-48 lg:pb-24 overflow-hidden border-b border-slate-100 bg-white">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#f1f5f9_1px,transparent_1px),linear-gradient(to_bottom,#f1f5f9_1px,transparent_1px)] bg-size-[4rem_4rem]"></div>
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-200 h-100 bg-red-50/50 blur-[120px] rounded-full pointer-events-none"></div>

        <div className="relative z-10 max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-50 border border-red-100 text-red-600 font-bold text-sm mb-8 animate-fade-in-up shadow-sm">
            <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></span>
            Emergency Development Services
          </div>

          <h1 className="animate-fade-in-up [animation-delay:100ms] text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight mb-6 leading-[1.1] text-slate-900">
            Did your last developer <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-linear-to-r from-red-500 to-orange-500">
              leave a mess?
            </span>
          </h1>

          <p className="animate-fade-in-up [animation-delay:200ms] text-lg md:text-xl text-slate-600 mb-10 leading-relaxed max-w-2xl mx-auto">
            Whether your Shopify store is breaking at scale, your AI-generated
            checkout extension is a mess, or your previous developer disappeared
            — I step in, stabilize the codebase, and get you back to selling.
          </p>
        </div>
      </section>

      {/* 1.5 SOCIAL PROOF (Work Logos) */}
      <section className="py-12 bg-white relative z-20 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <p className="text-center text-xs font-semibold text-slate-400 uppercase tracking-widest mb-8 animate-fade-in-up [animation-delay:300ms]">
            TRUSTED BY TEAMS BUILDING AT SCALE
          </p>
          <div className="flex flex-nowrap justify-start sm:justify-center items-center gap-x-6 lg:gap-x-12 mb-10 w-full overflow-x-auto [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden opacity-60 grayscale hover:grayscale-0 transition-all duration-500 animate-fade-in-up [animation-delay:400ms]">
            <ClientLogos variant="light" />

            {/* "+30 more" Badge */}
            <div className="flex items-center justify-center px-4 py-1.5 rounded-full border border-slate-200 bg-slate-50 text-xs font-bold text-slate-500 whitespace-nowrap shrink-0">
              +30 MORE
            </div>
          </div>
        </div>
      </section>

      {/* 2. THE PATHWAYS (Routing to the Sniper Pages) */}
      <section className="py-24 bg-slate-50 relative z-10">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-8">
            {/* Pathway 1: Vibe Coding / AI Rescue (Dark Theme Card) */}
            <div className="animate-fade-in-up [animation-delay:500ms] group relative bg-slate-950 p-10 lg:p-12 rounded-[2.5rem] overflow-hidden border border-slate-800 shadow-2xl hover:shadow-[0_0_40px_rgba(99,102,241,0.15)] transition-all duration-500 flex flex-col h-full">
              <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-size-[2rem_2rem] opacity-20"></div>

              <div className="relative z-10 grow">
                <div className="w-14 h-14 bg-indigo-500/20 rounded-2xl flex items-center justify-center mb-8 border border-indigo-500/30 text-indigo-400 group-hover:scale-110 transition-transform duration-300">
                  <svg
                    className="w-7 h-7"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                      d="M14.25 9.75L16.5 12l-2.25 2.25m-4.5 0L7.5 12l2.25-2.25M6 20.25h12A2.25 2.25 0 0020.25 18V6A2.25 2.25 0 0018 3.75H6A2.25 2.25 0 003.75 6v12A2.25 2.25 0 006 20.25z"
                    ></path>
                  </svg>
                </div>
                <h2 className="text-3xl font-extrabold text-white mb-4">
                  Architecture & AI Rescue
                </h2>
                <p className="text-slate-400 text-lg leading-relaxed mb-8">
                  You built a prototype using Cursor or v0, but now it's a
                  monolithic mess of spaghetti code that crashes when you try to
                  scale. I refactor it into enterprise-grade React/Next.js.
                </p>
              </div>

              <div className="relative z-10 mt-auto pt-8 border-t border-slate-800">
                <Link
                  href="/rescue/vibe-coding"
                  className="inline-flex items-center gap-2 text-indigo-400 font-bold hover:text-indigo-300 transition-colors text-lg"
                >
                  Explore AI Code Rescue
                  <svg
                    className="w-5 h-5 group-hover:translate-x-1 transition-transform"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    ></path>
                  </svg>
                </Link>
              </div>
            </div>

            {/* Pathway 2: Performance Rescue (Light/Emerald Theme Card) */}
            <div className="animate-fade-in-up [animation-delay:600ms] group relative bg-white p-10 lg:p-12 rounded-[2.5rem] overflow-hidden border border-slate-200 shadow-xl hover:shadow-[0_20px_40px_rgba(16,185,129,0.1)] transition-all duration-500 flex flex-col h-full">
              <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-50 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2 opacity-50 group-hover:opacity-100 transition-opacity duration-500"></div>

              <div className="relative z-10 grow">
                <div className="w-14 h-14 bg-emerald-50 rounded-2xl flex items-center justify-center mb-8 border border-emerald-100 text-emerald-600 group-hover:scale-110 transition-transform duration-300">
                  <svg
                    className="w-7 h-7"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                      d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z"
                    ></path>
                  </svg>
                </div>
                <h2 className="text-3xl font-extrabold text-slate-900 mb-4">
                  Speed & Core Web Vitals
                </h2>
                <p className="text-slate-600 text-lg leading-relaxed mb-8">
                  Your Shopify or WordPress site is painfully slow, tanking your
                  SEO and killing conversion rates. I strip out the bloat and
                  guarantee sub-2-second load times.
                </p>
              </div>

              <div className="relative z-10 mt-auto pt-8 border-t border-slate-100">
                <Link
                  href="/rescue/performance"
                  className="inline-flex items-center gap-2 text-emerald-600 font-bold hover:text-emerald-700 transition-colors text-lg"
                >
                  Explore Performance Rescue
                  <svg
                    className="w-5 h-5 group-hover:translate-x-1 transition-transform"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    ></path>
                  </svg>
                </Link>
              </div>
            </div>

            {/* Pathway 3: Shopify Store Rescue (Light/Indigo Theme Card) */}
            <div className="animate-fade-in-up [animation-delay:700ms] group relative bg-white p-10 lg:p-12 rounded-[2.5rem] overflow-hidden border border-slate-200 shadow-xl hover:shadow-[0_20px_40px_rgba(99,102,241,0.1)] transition-all duration-500 flex flex-col h-full">
              <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-50 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2 opacity-50 group-hover:opacity-100 transition-opacity duration-500"></div>

              <div className="relative z-10 grow">
                <div className="w-14 h-14 bg-indigo-50 rounded-2xl flex items-center justify-center mb-8 border border-indigo-100 text-indigo-600 group-hover:scale-110 transition-transform duration-300">
                  <svg
                    className="w-7 h-7"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                      d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                    ></path>
                  </svg>
                </div>
                <h2 className="text-3xl font-extrabold text-slate-900 mb-4">
                  Shopify Store Rescue
                </h2>
                <p className="text-slate-600 text-lg leading-relaxed mb-8">
                  Broken checkout? Theme falling apart after too many app
                  installs? Previous developer used a page builder that slowed
                  your store to a crawl? I audit, stabilize, and document — so
                  your team can maintain it without me.
                </p>
              </div>

              <div className="relative z-10 mt-auto pt-8 border-t border-slate-100">
                <ContactModal
                  triggerText={
                    <>
                      Get a Store Audit
                      <svg
                        className="w-5 h-5 group-hover:translate-x-1 transition-transform"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M17 8l4 4m0 0l-4 4m4-4H3"
                        ></path>
                      </svg>
                    </>
                  }
                  triggerStyle="inline-flex items-center gap-2 text-indigo-600 font-bold hover:text-indigo-700 transition-colors text-lg cursor-pointer"
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
                        "Broken checkout, overloaded theme, messy app stack — what's going on?",
                      required: true,
                    },
                  ]}
                  calTitle="Need immediate triage?"
                  calSubtitle="Grab the next available slot on my calendar. Let's look at the store together."
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2.5 PROOF: NAMED RESCUE-STYLE WORK */}
      <section className="py-24 bg-white relative border-t border-slate-100">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-sm font-semibold text-indigo-600 tracking-widest uppercase mb-3">
              Recent Work
            </h2>
            <h3 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
              This isn't theoretical.
            </h3>
          </div>

          <div className="bg-slate-50 border border-slate-200 rounded-[2.5rem] p-10 lg:p-14 flex flex-col lg:flex-row gap-10 lg:gap-16 items-center">
            <div className="flex-1">
              <span className="inline-block px-3 py-1 rounded-full text-xs font-bold mb-4 tracking-widest uppercase bg-indigo-100 text-indigo-700">
                WooCommerce, Norway
              </span>
              <h4 className="text-2xl font-extrabold text-slate-900 mb-4">
                MerkBart's admin panel froze for minutes every time a customer
                uploaded logos.
              </h4>
              <p className="text-slate-600 text-lg leading-relaxed mb-6">
                Invoice generation timed out on bigger orders. Setting a sale
                price meant editing hundreds of variants by hand. I rebuilt the
                store from scratch, moved it off shared hosting onto AWS, and
                replaced the broken plugins with custom ones built around how
                the team actually works.
              </p>
              <Link
                href="/work/merkbart"
                className="inline-flex items-center gap-2 text-indigo-600 font-bold hover:text-indigo-700 transition-colors"
              >
                Read the full case study
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
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  ></path>
                </svg>
              </Link>
            </div>
            <div className="flex lg:flex-col gap-6 lg:gap-8 shrink-0">
              <div className="text-center">
                <div className="text-4xl font-black text-indigo-600">~4×</div>
                <div className="text-sm text-slate-500 font-medium mt-1">
                  faster page loads
                </div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-black text-indigo-600">2×</div>
                <div className="text-sm text-slate-500 font-medium mt-1">
                  sales, 3 months post-launch
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2.75 HOW A RESCUE ENGAGEMENT WORKS */}
      <section className="py-24 bg-slate-50 border-t border-slate-200">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-sm font-semibold text-indigo-600 tracking-widest uppercase mb-3">
              The Process
            </h2>
            <h3 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
              How a rescue engagement actually works.
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div>
              <div className="w-10 h-10 rounded-full bg-indigo-100 text-indigo-600 font-bold flex items-center justify-center mb-4">
                1
              </div>
              <h4 className="text-xl font-bold text-slate-900 mb-2">Audit</h4>
              <p className="text-slate-600 leading-relaxed">
                A real review of your repo or store, not a sales call. You get a
                written list of what's actually broken, ranked by what's costing
                you the most.
              </p>
            </div>
            <div>
              <div className="w-10 h-10 rounded-full bg-indigo-100 text-indigo-600 font-bold flex items-center justify-center mb-4">
                2
              </div>
              <h4 className="text-xl font-bold text-slate-900 mb-2">
                Stabilize
              </h4>
              <p className="text-slate-600 leading-relaxed">
                I fix what's actively bleeding money or breaking first, without
                a ground-up rewrite unless one is genuinely needed. You keep
                selling while it happens.
              </p>
            </div>
            <div>
              <div className="w-10 h-10 rounded-full bg-indigo-100 text-indigo-600 font-bold flex items-center justify-center mb-4">
                3
              </div>
              <h4 className="text-xl font-bold text-slate-900 mb-2">
                Document & Hand Off
              </h4>
              <p className="text-slate-600 leading-relaxed">
                You get documentation and a staging environment either way,
                whether we keep working together or your team takes it from
                here.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. GENERAL RESCUE CTA (For everything else) */}
      <section className="py-24 bg-slate-900 border-t border-slate-800 relative overflow-hidden text-center">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#1e293b,transparent)] opacity-100"></div>
        <div className="max-w-3xl mx-auto px-6 lg:px-8 relative z-10">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight mb-6 animate-fade-in-up [animation-delay:100ms] leading-tight">
            Have a different kind of emergency?
          </h2>
          <p className="text-lg text-slate-400 mb-10 leading-relaxed">
            Abandoned migrations, broken APIs, or security vulnerabilities?
            Don't let a bad codebase sink your business. Send me the details and
            I'll review it within 24 hours.
          </p>
          <ContactModal
            triggerText="Get Immediate Help"
            triggerStyle="w-full sm:w-auto flex items-center justify-center gap-2 cursor-pointer px-8 py-4 text-base font-bold text-slate-900 bg-white rounded-xl hover:bg-slate-200 transition-colors mx-auto"
            title="Emergency Rescue."
            subtitle="Stop the bleeding. Tell me what's going wrong."
            subject="URGENT: General Rescue Request"
            fields={[
              { name: "name", label: "Name", type: "text", required: true },
              { name: "email", label: "Email", type: "email", required: true },
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
      </section>

      <Footer />
    </main>
  );
}
