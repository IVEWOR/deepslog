import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function AgencyPage() {
  return (
    <main className="min-h-screen bg-white selection:bg-indigo-100 selection:text-indigo-900">
      <Navbar />

      {/* 1. HERO SECTION (Updated with Social Proof & Copy) */}
      <section className="relative pt-34 pb-20 lg:pt-48 lg:pb-24 overflow-hidden bg-slate-50 border-b border-slate-200">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#f1f5f9_1px,transparent_1px),linear-gradient(to_bottom,#f1f5f9_1px,transparent_1px)] bg-size-[4rem_4rem]"></div>

        <div className="relative z-10 max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-indigo-100 text-indigo-700 font-semibold text-sm mb-6 animate-fade-in-up">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
            </span>
            Accepting 2 new agency partners
          </div>

          <h1 className="animate-fade-in-up [animation-delay:100ms] text-[38px] md:text-6xl lg:text-7xl font-extrabold text-slate-900 tracking-tight mb-6 leading-[1.1]">
            Your silent, senior-level
            <span className="text-transparent bg-clip-text bg-linear-to-r from-indigo-600 to-blue-500">
              &nbsp; technical partner.
            </span>
          </h1>

          <p className="animate-fade-in-up [animation-delay:200ms] text-lg md:text-xl text-slate-600 mb-10 leading-relaxed max-w-2xl mx-auto">
            Scale your output without hiring overhead. I build high-performance
            Next.js and Shopify sites under your brand, strictly under NDA.
          </p>

          <div className="animate-fade-in-up [animation-delay:300ms] mb-10 md:mb-16">
            <Link
              href="#contact"
              className="px-8 py-4 text-base font-bold text-white bg-indigo-600 rounded-xl hover:bg-indigo-700 shadow-lg shadow-indigo-600/20 transition-all inline-flex items-center gap-2"
            >
              Discuss a Pilot Project
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

          {/* Social Proof Above the Fold */}
          <div className="animate-fade-in-up [animation-delay:400ms] pt-8 border-t border-slate-200/60 flex flex-col items-center">
            <p className="text-xs font-semibold text-slate-400 uppercase tracking-widest mb-6">
              Trusted by leading agencies
            </p>
            <div className="flex flex-wrap justify-center items-center gap-6 md:gap-12 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
              <span className="font-bold text-xl tracking-tighter text-slate-800">
                NXPRO
              </span>
              <span className="font-serif italic text-xl text-slate-800">
                GRAY_MATTERS
              </span>
              <span className="font-light tracking-widest text-xl text-slate-800">
                FAIRE
              </span>
              <span className="flex items-center justify-center px-3 py-1 rounded-full border border-slate-300 bg-slate-100 text-xs font-bold text-slate-500">
                +12 MORE
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* 3. INTEGRATION FEATURES (The "Why Me") */}
      <section className="py-24 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {/* Feature 1 */}
            <div className="p-8 rounded-3xl bg-white border border-slate-200 shadow-sm hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-indigo-50 rounded-xl flex items-center justify-center mb-6 text-indigo-600">
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                  ></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">
                100% White-Labeled
              </h3>
              <p className="text-slate-600">
                Strict NDA compliance. I use your email domain, jump on client
                calls as your "Lead Engineer," and never claim the work
                publicly.
              </p>
            </div>
            {/* Feature 2 */}
            <div className="p-8 rounded-3xl bg-white border border-slate-200 shadow-sm hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-indigo-50 rounded-xl flex items-center justify-center mb-6 text-indigo-600">
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z"
                  ></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">
                Seamless Integration
              </h3>
              <p className="text-slate-600">
                I drop right into your existing workflows. Add me to your Slack,
                Jira, or Asana and I operate exactly like an in-house team
                member.
              </p>
            </div>
            {/* Feature 3 */}
            <div className="p-8 rounded-3xl bg-white border border-slate-200 shadow-sm hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-indigo-50 rounded-xl flex items-center justify-center mb-6 text-indigo-600">
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                  ></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">
                Agency-Grade Code
              </h3>
              <p className="text-slate-600">
                I deliver clean, documented, component-based architectures that
                your juniors can easily maintain long after handoff.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. THE PROCESS (How the Pilot works) */}
      <section className="py-24 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4">
              How the Pilot Project works
            </h2>
            <p className="text-lg text-slate-600">
              Testing the waters with zero long-term risk.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="border-l-2 border-indigo-100 pl-6 relative">
              <div className="absolute -left-2.25 top-0 w-4 h-4 rounded-full bg-indigo-600"></div>
              <span className="text-sm font-bold text-indigo-600 mb-2 block">
                Step 01
              </span>
              <h4 className="text-lg font-bold text-slate-900 mb-2">
                The Scope
              </h4>
              <p className="text-slate-600 text-sm">
                We pick a small-to-medium project. I review your Figma and
                provide a fixed-price quote and timeline.
              </p>
            </div>
            <div className="border-l-2 border-indigo-100 pl-6 relative">
              <div className="absolute -left-2.25 top-0 w-4 h-4 rounded-full bg-indigo-600"></div>
              <span className="text-sm font-bold text-indigo-600 mb-2 block">
                Step 02
              </span>
              <h4 className="text-lg font-bold text-slate-900 mb-2">
                Integration
              </h4>
              <p className="text-slate-600 text-sm">
                I join your Slack channel, set up the staging server, and
                establish the CI/CD pipeline for total visibility.
              </p>
            </div>
            <div className="border-l-2 border-indigo-100 pl-6 relative">
              <div className="absolute -left-2.25 top-0 w-4 h-4 rounded-full bg-indigo-600"></div>
              <span className="text-sm font-bold text-indigo-600 mb-2 block">
                Step 03
              </span>
              <h4 className="text-lg font-bold text-slate-900 mb-2">
                Execution
              </h4>
              <p className="text-slate-600 text-sm">
                I build the project, providing async updates. No chasing
                required. You get a pixel-perfect staging link.
              </p>
            </div>
            <div className="border-l-2 border-indigo-100 pl-6 relative">
              <div className="absolute -left-2.25 top-0 w-4 h-4 rounded-full bg-indigo-600"></div>
              <span className="text-sm font-bold text-indigo-600 mb-2 block">
                Step 04
              </span>
              <h4 className="text-lg font-bold text-slate-900 mb-2">
                Handoff & Partnership
              </h4>
              <p className="text-slate-600 text-sm">
                Strict QA, launch, and code documentation. If you love the
                result, we discuss a retainer or ongoing flow.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. PRICING / ENGAGEMENT MODEL */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4">
              Transparent Engagement
            </h2>
            <p className="text-lg text-slate-600">
              No hidden hours. No bloated agency fees. Just high-margin
              execution.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Per Project */}
            <div className="bg-white p-10 rounded-3xl border border-slate-200 shadow-sm relative overflow-hidden">
              <h3 className="text-2xl font-bold text-slate-900 mb-2">
                Project-Based
              </h3>
              <p className="text-slate-600 mb-8 h-12">
                Best for agencies needing overflow capacity on a specific client
                build.
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center gap-3 text-slate-700">
                  <svg
                    className="w-5 h-5 text-emerald-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    ></path>
                  </svg>
                  Fixed-price quotes (protects your margin)
                </li>
                <li className="flex items-center gap-3 text-slate-700">
                  <svg
                    className="w-5 h-5 text-emerald-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    ></path>
                  </svg>
                  Guaranteed delivery timelines
                </li>
                <li className="flex items-center gap-3 text-slate-700">
                  <svg
                    className="w-5 h-5 text-emerald-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    ></path>
                  </svg>
                  30 days of post-launch bug support
                </li>
              </ul>
            </div>

            {/* Retainer */}
            <div className="bg-slate-900 p-10 rounded-3xl border border-slate-800 shadow-xl relative overflow-hidden text-white">
              <div className="absolute top-0 right-0 px-4 py-1 bg-indigo-600 text-xs font-bold uppercase tracking-wider rounded-bl-xl">
                Most Popular
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">
                Fractional Retainer
              </h3>
              <p className="text-slate-400 mb-8 h-12">
                Best for agencies needing a reliable, ongoing technical lead.
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center gap-3 text-slate-300">
                  <svg
                    className="w-5 h-5 text-indigo-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    ></path>
                  </svg>
                  Dedicated weekly hours/availability
                </li>
                <li className="flex items-center gap-3 text-slate-300">
                  <svg
                    className="w-5 h-5 text-indigo-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    ></path>
                  </svg>
                  Client-facing calls included
                </li>
                <li className="flex items-center gap-3 text-slate-300">
                  <svg
                    className="w-5 h-5 text-indigo-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    ></path>
                  </svg>
                  Priority turnaround on all tasks
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 6. FINAL CTA (Dark Mode) */}
      <section
        id="contact"
        className="relative py-24 lg:py-32 bg-slate-950 overflow-hidden"
      >
        <div className="absolute top-0 left-0 w-full h-px bg-linear-to-r from-transparent via-indigo-500/50 to-transparent"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-125 h-125 bg-indigo-600/10 rounded-full blur-[100px] pointer-events-none"></div>

        <div className="relative z-10 max-w-3xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-6">
            Ready to scale <br />
            <span className="text-transparent bg-clip-text bg-linear-to-r from-indigo-400 to-blue-400">
              without hiring?
            </span>
          </h2>
          <p className="text-lg text-slate-400 mb-10">
            Send me a message with a brief overview of your agency and current
            overflow needs. I'll get back to you within 24 hours to schedule a
            quick alignment call.
          </p>

          <Link
            href="mailto:hello@deepslog.com?subject=Agency%20Partnership"
            className="w-full sm:w-auto px-10 py-4 text-base font-bold text-slate-900 bg-white rounded-xl hover:bg-indigo-50 hover:scale-105 transition-all shadow-xl flex items-center justify-center gap-2 mx-auto"
          >
            Book Free Alignment Call
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

          {/* Testimonial right at the point of action */}
          <div className="mt-16 pt-10 border-t border-slate-800/50">
            <p className="text-slate-300 italic mb-4">
              "3+ years working with Deepak. He converts vague client ideas into
              functional websites—zero hand-holding required."
            </p>
            <p className="text-sm font-bold text-slate-500">
              — Dev Kumar A., Business Manager @ NXPRO
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
