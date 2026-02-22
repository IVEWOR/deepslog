import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title:
    "Emergency Code Rescue | AI Cleanup & Speed Optimization | Deepak Jangra",
  description:
    "Vibe coding cleanup, AI-generated code rescue, and Core Web Vitals optimization. I stabilize Cursor/Copilot MVPs and fix slow Shopify/WordPress sites. 48-hour audit available.",
  alternates: {
    canonical: "https://deepslog.com/rescue",
  },
  openGraph: {
    title: "Emergency Code Rescue | Vibe Coding Cleanup & Speed Optimization",
    description:
      "Rescue AI-generated codebases and fix slow websites. 4× speed improvements, production-ready results.",
    url: "https://deepslog.com/rescue",
    siteName: "Deepak Jangra",
    images: [
      {
        url: "https://deepslog.com/og-rescue.png", // Before/after visual
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
        "@id": "https://deepslog.com/rescue#service",
        name: "Emergency Web Development & Code Rescue",
        description:
          "Specialized rescue services for broken codebases, AI-generated messes, and performance failures",
        provider: {
          "@id": "https://deepslog.com/#person",
        },
        serviceType: [
          "AI Code Rescue",
          "Vibe Coding Cleanup",
          "Performance Optimization",
          "Technical Debt Reduction",
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
                "@id": "https://deepslog.com/rescue/vibe-coding#service",
                name: "Vibe Coding Cleanup",
                description:
                  "Refactor AI-generated code from Cursor, Copilot, v0 into production-ready applications",
              },
              price: "2500.00",
              priceCurrency: "USD",
              priceValidUntil: "2026-12-31",
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                "@id": "https://deepslog.com/rescue/speed#service",
                name: "Speed & Core Web Vitals Rescue",
                description:
                  "Fix slow websites, optimize Shopify/WordPress, guarantee sub-2-second loads",
              },
              price: "1500.00",
              priceCurrency: "USD",
              priceValidUntil: "2026-12-31",
            },
          ],
        },
      },
      {
        "@type": "WebPage",
        "@id": "https://deepslog.com/rescue#webpage",
        name: "Emergency Code Rescue Services",
        description: "Stabilize broken codebases and fix slow websites",
        url: "https://deepslog.com/rescue",
        mainEntity: {
          "@id": "https://deepslog.com/rescue#service",
        },
      },
      {
        "@type": "FAQPage",
        "@id": "https://deepslog.com/rescue#faq",
        mainEntity: [
          {
            "@type": "Question",
            name: "What is vibe coding cleanup?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Vibe coding cleanup is the process of refactoring AI-generated code from tools like Cursor, Copilot, or v0 into production-ready, scalable applications. I specialize in stabilizing these codebases without rebuilding from scratch.",
            },
          },
          {
            "@type": "Question",
            name: "How much does a codebase audit cost?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "My 48-hour codebase audit is $2,500. This includes a comprehensive review of your repository, identification of critical issues, and a step-by-step roadmap for remediation.",
            },
          },
        ],
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
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#f1f5f9_1px,transparent_1px),linear-gradient(to_bottom,#f1f5f9_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-red-50/50 blur-[120px] rounded-full pointer-events-none"></div>

        <div className="relative z-10 max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-50 border border-red-100 text-red-600 font-bold text-sm mb-8 animate-fade-in-up shadow-sm">
            <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></span>
            Emergency Development Services
          </div>

          <h1 className="animate-fade-in-up [animation-delay:100ms] text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight mb-6 leading-[1.1] text-slate-900">
            Did your last developer <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-500">
              leave a mess?
            </span>
          </h1>

          <p className="animate-fade-in-up [animation-delay:200ms] text-lg md:text-xl text-slate-600 mb-10 leading-relaxed max-w-2xl mx-auto">
            Whether your AI-generated MVP is collapsing, your site is failing
            Core Web Vitals, or your previous agency vanished—I step in,
            stabilize the codebase, and get you to production.
          </p>
        </div>
      </section>

      {/* 1.5 SOCIAL PROOF (Work Logos) */}
      <section className="py-12 bg-white relative z-20 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <p className="text-center text-xs font-semibold text-slate-400 uppercase tracking-widest mb-8 animate-fade-in-up [animation-delay:300ms]">
            TRUSTED BY TEAMS BUILDING AT SCALE
          </p>
          <div className="flex justify-center items-center gap-8 md:gap-16 animate-fade-in-up [animation-delay:400ms]">
            <div className="font-bold text-xl tracking-tighter text-slate-800">
              NXPRO
            </div>
            <div className="font-semibold text-xl text-slate-800">
              GRAYMATTERS
            </div>
            <div className="font-light font-serif tracking-widest text-xl text-slate-800">
              FAIRE
            </div>
            <div className="font-black text-xl text-slate-800 uppercase tracking-tight">
              Merkbart
            </div>

            {/* "+50 more" Badge */}
            <div className="flex items-center justify-center px-4 py-1.5 rounded-full border border-slate-200 bg-slate-50 text-xs font-bold text-slate-500">
              +50 MORE
            </div>
          </div>
        </div>
      </section>

      {/* 2. THE PATHWAYS (Routing to the Sniper Pages) */}
      <section className="py-24 bg-slate-50 relative z-10">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {/* Pathway 1: Vibe Coding / AI Rescue (Dark Theme Card) */}
            <div className="animate-fade-in-up [animation-delay:500ms] group relative bg-slate-950 p-10 lg:p-12 rounded-[2.5rem] overflow-hidden border border-slate-800 shadow-2xl hover:shadow-[0_0_40px_rgba(99,102,241,0.15)] transition-all duration-500 flex flex-col h-full">
              <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:2rem_2rem] opacity-20"></div>

              <div className="relative z-10 flex-grow">
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

              <div className="relative z-10 flex-grow">
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
          <Link
            href="mailto:hello@deepslog.com?subject=General%20Project%20Rescue"
            className="px-10 py-4 text-base font-bold text-slate-900 bg-white rounded-xl hover:bg-slate-100 hover:scale-105 transition-all shadow-xl flex items-center justify-center gap-2 mx-auto w-fit"
          >
            Get Immediate Help
            <svg
              className="w-5 h-5"
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
      </section>

      <Footer />
    </main>
  );
}
