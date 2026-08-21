import Link from "next/link";
import Image from "next/image";

export default function AboutMe() {
  return (
    <section className="py-24 lg:py-32 bg-slate-50 relative border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 flex flex-col lg:flex-row items-center gap-16 lg:gap-20">
        {/* Left Column: Photo */}
        <div className="animate-fade-in-up [animation-delay:100ms] flex-1 w-full max-w-sm lg:max-w-none mx-0 relative">
          <div className="relative aspect-square rounded-4xl overflow-hidden border border-slate-200 shadow-2xl bg-white">
            <Image
              src="/AAdeepak.png"
              alt="Deepak Jangra, Shopify Plus developer"
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* Right Column: Content */}
        <div className="flex-1 text-left">
          <h2 className="text-sm font-semibold text-indigo-600 tracking-widest uppercase mb-3 animate-fade-in-up [animation-delay:200ms]">
            Who You're Working With
          </h2>
          <h3 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight mb-6 leading-tight animate-fade-in-up [animation-delay:300ms]">
            You're not hiring an agency.
            <br className="hidden sm:block" /> You're{" "}
            <span className="text-transparent bg-clip-text bg-linear-to-r from-indigo-600 to-blue-500">
              hiring me.
            </span>
          </h3>

          <p className="text-base sm:text-lg text-slate-600 leading-relaxed mb-6 animate-fade-in-up [animation-delay:400ms]">
            I'm Deepak, a Shopify Plus developer with 9 years of experience.
            I've rebuilt luxury fashion stores, migrated acquired brands, and
            fixed checkouts that were losing thousands in revenue.
          </p>

          <p className="text-base sm:text-lg font-semibold text-slate-900 leading-relaxed mb-8 animate-fade-in-up [animation-delay:500ms]">
            I don't outsource your project to a junior team. When you hire me,
            you get me.
          </p>

          <Link
            href="/about"
            className="animate-fade-in-up [animation-delay:600ms] inline-flex items-center justify-center gap-2 text-base font-medium text-slate-600 hover:text-slate-900 transition-colors underline-offset-4 hover:underline"
          >
            <span>Read my full story</span>
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
