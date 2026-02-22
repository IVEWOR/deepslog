import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// Simple SVG Icons for Performance
const SpeedometerIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className="w-10 h-10 text-emerald-500"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z"
    />
  </svg>
);

const ChartIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className="w-10 h-10 text-emerald-500"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941"
    />
  </svg>
);

const SearchIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className="w-10 h-10 text-emerald-500"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M15.75 15.75l-2.489-2.489m0 0a3.375 3.375 0 10-4.773-4.773 3.375 3.375 0 004.774 4.774zM21 12a9 9 0 11-18 0 9 9 0 0118 0z"
    />
  </svg>
);

export default function PerformanceRescue() {
  return (
    <main className="min-h-screen bg-white text-slate-900 selection:bg-emerald-100 selection:text-emerald-900">
      <Navbar />

      {/* 1. HERO SECTION (Analytical & Urgent) */}
      <section className="relative pt-40 pb-20 lg:pt-48 lg:pb-32 overflow-hidden border-b border-slate-100">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#f8fafc_1px,transparent_1px),linear-gradient(to_bottom,#f8fafc_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-emerald-50 blur-[120px] rounded-full pointer-events-none"></div>

        <div className="relative z-10 max-w-5xl mx-auto px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 font-semibold text-sm mb-8 animate-fade-in-up shadow-sm">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
            Core Web Vitals Optimization
          </div>

          <h1 className="animate-fade-in-up [animation-delay:100ms] text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight mb-6 leading-[1.1]">
            Stop losing customers to <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-teal-500">
              a slow website.
            </span>
          </h1>

          <p className="animate-fade-in-up [animation-delay:200ms] text-lg md:text-xl text-slate-600 mb-10 leading-relaxed max-w-2xl mx-auto">
            A 1-second delay in page load time reduces conversions by 7%. I
            rewrite bloated frontends and configure edge networks to guarantee
            sub-2-second load times.
          </p>

          <div className="animate-fade-in-up [animation-delay:300ms] flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="#audit"
              className="w-full sm:w-auto px-8 py-4 text-base font-bold text-white bg-slate-900 rounded-xl hover:bg-slate-800 shadow-xl shadow-slate-900/10 transition-all inline-flex items-center justify-center gap-2"
            >
              Get Free Speed Audit
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
            <Link
              href="#proof"
              className="w-full sm:w-auto px-8 py-4 text-base font-bold text-emerald-700 bg-emerald-50 rounded-xl hover:bg-emerald-100 transition-all inline-flex items-center justify-center"
            >
              See Case Studies
            </Link>
          </div>
        </div>
      </section>

      {/* 1.5 SOCIAL PROOF (Added Work Icons) */}
      <section className="py-12 bg-white border-b border-slate-100 relative z-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <p className="text-center text-xs font-semibold text-slate-400 uppercase tracking-widest mb-8 animate-fade-in-up [animation-delay:400ms]">
            TRUSTED BY TEAMS BUILDING AT SCALE
          </p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 animate-fade-in-up [animation-delay:500ms]">
            <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-50 hover:opacity-100 transition-all duration-500 animate-fade-in-up [animation-delay:500ms]">
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
        </div>
      </section>

      {/* 2. THE VISUAL PROOF (Before/After Lighthouse Scores - Fixed Circles) */}
      <section
        id="proof"
        className="py-24 bg-slate-50 border-b border-slate-200 relative overflow-hidden"
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4">
              The difference between bouncing and buying.
            </h2>
            <p className="text-lg text-slate-600">
              Actual results from a recent Shopify headless migration.
            </p>
          </div>

          <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16">
            {/* BEFORE SCORE */}
            <div className="bg-white p-8 rounded-3xl border border-red-100 shadow-lg shadow-red-100/50 flex flex-col items-center w-full max-w-sm relative overflow-hidden group">
              <div className="absolute top-0 left-0 w-full h-2 bg-red-500"></div>
              <h3 className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-6">
                Before Audit
              </h3>

              {/* Fixed Circular Progress - Score 32 */}
              <div className="relative w-40 h-40 rounded-full flex items-center justify-center mb-6 bg-red-50/50">
                <svg
                  className="absolute inset-0 w-full h-full transform -rotate-90"
                  viewBox="0 0 160 160"
                >
                  <circle
                    cx="80"
                    cy="80"
                    r="70"
                    stroke="currentColor"
                    strokeWidth="12"
                    fill="none"
                    className="text-red-100"
                  ></circle>
                  <circle
                    cx="80"
                    cy="80"
                    r="70"
                    stroke="currentColor"
                    strokeWidth="12"
                    fill="none"
                    className="text-red-500"
                    strokeDasharray="440"
                    strokeDashoffset="299.2"
                    strokeLinecap="round"
                  ></circle>
                </svg>
                <span className="text-5xl font-black text-red-500 absolute">
                  32
                </span>
              </div>

              <div className="w-full space-y-3">
                <div className="flex justify-between text-sm">
                  <span className="text-slate-500">First Contentful Paint</span>
                  <span className="font-mono font-bold text-red-500">
                    4.2s 🔺
                  </span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-slate-500">Time to Interactive</span>
                  <span className="font-mono font-bold text-red-500">
                    8.1s 🔺
                  </span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-slate-500">
                    Cumulative Layout Shift
                  </span>
                  <span className="font-mono font-bold text-red-500">
                    0.45 🔺
                  </span>
                </div>
              </div>
            </div>

            {/* ARROW */}
            <div className="hidden md:flex text-slate-300">
              <svg
                className="w-12 h-12"
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
            </div>

            {/* AFTER SCORE */}
            <div className="bg-white p-8 rounded-3xl border border-emerald-100 shadow-2xl shadow-emerald-500/10 flex flex-col items-center w-full max-w-sm relative overflow-hidden scale-105">
              <div className="absolute top-0 left-0 w-full h-2 bg-emerald-500"></div>
              <h3 className="text-sm font-bold text-emerald-600 uppercase tracking-widest mb-6">
                After Optimization
              </h3>

              {/* Fixed Circular Progress - Score 99 */}
              <div className="relative w-40 h-40 rounded-full flex items-center justify-center mb-6 bg-emerald-50/50">
                <svg
                  className="absolute inset-0 w-full h-full transform -rotate-90"
                  viewBox="0 0 160 160"
                >
                  <circle
                    cx="80"
                    cy="80"
                    r="70"
                    stroke="currentColor"
                    strokeWidth="12"
                    fill="none"
                    className="text-emerald-100"
                  ></circle>
                  <circle
                    cx="80"
                    cy="80"
                    r="70"
                    stroke="currentColor"
                    strokeWidth="12"
                    fill="none"
                    className="text-emerald-500 transition-all duration-1000"
                    strokeDasharray="440"
                    strokeDashoffset="4.4"
                    strokeLinecap="round"
                  ></circle>
                </svg>
                <span className="text-5xl font-black text-emerald-500 absolute">
                  99
                </span>
              </div>

              <div className="w-full space-y-3">
                <div className="flex justify-between text-sm">
                  <span className="text-slate-600 font-medium">
                    First Contentful Paint
                  </span>
                  <span className="font-mono font-bold text-emerald-600">
                    0.8s 🔽
                  </span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-slate-600 font-medium">
                    Time to Interactive
                  </span>
                  <span className="font-mono font-bold text-emerald-600">
                    1.1s 🔽
                  </span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-slate-600 font-medium">
                    Cumulative Layout Shift
                  </span>
                  <span className="font-mono font-bold text-emerald-600">
                    0.01 🔽
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. THE DIAGNOSIS (Why is their site slow?) */}
      <section className="py-24 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="mb-16 md:mb-24 flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="max-w-2xl">
              <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight">
                Why your current setup is failing Core Web Vitals.
              </h2>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div className="group">
              <div className="mb-6 p-4 bg-slate-50 rounded-2xl w-fit group-hover:bg-emerald-50 transition-colors">
                <SpeedometerIcon />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">
                Bloated JavaScript
              </h3>
              <p className="text-slate-600 leading-relaxed">
                Most themes load every single script on the initial page load.
                We defer non-critical JS and implement strict code-splitting to
                free up the main thread.
              </p>
            </div>

            <div className="group">
              <div className="mb-6 p-4 bg-slate-50 rounded-2xl w-fit group-hover:bg-emerald-50 transition-colors">
                <ChartIcon />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">
                Unoptimized Assets
              </h3>
              <p className="text-slate-600 leading-relaxed">
                Serving 5MB uncompressed PNGs kills mobile performance. We
                migrate assets to modern formats (WebP/AVIF) and serve them via
                advanced Edge CDNs.
              </p>
            </div>

            <div className="group">
              <div className="mb-6 p-4 bg-slate-50 rounded-2xl w-fit group-hover:bg-emerald-50 transition-colors">
                <SearchIcon />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">
                Third-Party App Bloat
              </h3>
              <p className="text-slate-600 leading-relaxed">
                Shopify and WordPress plugins inject tracking codes that block
                rendering. I audit, consolidate, and asynchronously load your
                marketing stack.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. FINAL CTA */}
      <section
        id="audit"
        className="relative py-24 bg-slate-900 text-center overflow-hidden"
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#0f172a,transparent)] opacity-100"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-emerald-500/10 blur-[100px] rounded-full pointer-events-none"></div>

        <div className="max-w-3xl mx-auto px-6 lg:px-8 relative z-10">
          <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-6">
            Let's find the bottlenecks.
          </h2>
          <p className="text-lg text-slate-400 mb-10 leading-relaxed">
            Send me your URL. I will run a deep-dive performance diagnostic and
            send you a custom report outlining exactly what is slowing your site
            down and how much it will cost to fix it.
          </p>
          <Link
            href="mailto:hello@deepslog.com?subject=Performance%20Diagnostic%20Request"
            className="px-10 py-4 text-base font-bold text-slate-900 bg-emerald-400 rounded-xl hover:bg-emerald-300 hover:scale-105 transition-all shadow-[0_0_25px_rgba(52,211,153,0.2)] flex items-center justify-center gap-2 mx-auto w-fit"
          >
            Get Free Diagnostic Report
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
