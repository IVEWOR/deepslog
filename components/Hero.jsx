import Link from "next/link";
import Image from "next/image";
import ContactModal from "./ContactModal";

export default function Hero() {
  return (
    <section className="relative pt-28 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
      {/* Subtle Background Grid & Glow */}
      <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#f1f5f9_1px,transparent_1px),linear-gradient(to_bottom,#f1f5f9_1px,transparent_1px)] bg-size-[4rem_4rem]">
        <div className="absolute bottom-0 left-0 right-0 top-0 bg-[radial-gradient(circle_600px_at_50%_100px,#e0e7ff,transparent)]"></div>
      </div>

      {/* Changed flex-col-reverse to flex-col to allow custom ordering */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 flex flex-col lg:flex-row items-center gap-16 lg:gap-8">
        {/* Left Column: Copy & Buttons (Kept flex-3, added flex-col for ordering) */}
        <div className="flex-3 text-left flex flex-col w-full">
          {/* 1. TEXT SECTION (order-1) */}
          <div className="order-1">
            <h1 className="animate-fade-in-up [animation-delay:100ms] text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-slate-900 tracking-tight mb-5 sm:mb-6 leading-[1.1]">
              I build
              <span className="text-transparent bg-clip-text bg-linear-to-r from-indigo-600 to-blue-500">
                &nbsp;Shopify Plus stores{" "}
              </span>
              <br className="hidden sm:block" />
              that scale.
            </h1>

            <p className="animate-fade-in-up [animation-delay:250ms] text-base sm:text-lg lg:text-xl text-slate-600 mb-8 max-w-2xl mx-0 leading-relaxed">
              Senior full-stack engineering for Shopify merchants who need
              speed, checkout conversion, and code that holds up at Plus-level
              traffic.
            </p>

            <div className="animate-fade-in-up [animation-delay:400ms] flex items-center justify-start gap-2.5 sm:gap-3 mb-10 text-sm font-medium text-slate-500 flex-wrap">
              <span className="bg-slate-100 px-3 py-1 rounded-full text-slate-700">
                9 Years
              </span>
              <span>•</span>
              <span className="bg-slate-100 px-3 py-1 rounded-full text-slate-700">
                Shopify Plus
              </span>
              <span>•</span>
              <span>Hydrogen, Checkout Extensibility, Liquid</span>
            </div>
          </div>

          {/* 2. MOBILE IMAGE (order-2: Visible only on mobile, hidden on lg screens) */}
          {/* <div className="order-2 lg:hidden animate-fade-in [animation-delay:300ms] w-full max-w-60 mx-auto mb-10 relative">
            <div className="relative aspect-square rounded-full overflow-hidden border border-slate-100 bg-white">
              <Image
                src="/AAdeepak.png"
                alt="Deepak Jangra"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div> */}

          {/* 3. ACTION BUTTONS (order-3: Kept your exact classes and SVG updates) */}
          <div className="order-3 animate-fade-in-up [animation-delay:550ms] flex flex-col sm:flex-row items-center justify-start gap-4">
            <ContactModal
              triggerText="Get a Shopify Audit"
              triggerStyle="w-full sm:w-auto flex items-center justify-center gap-2 cursor-pointer px-8 py-4 text-base font-bold text-white bg-indigo-600 rounded-xl hover:bg-indigo-500 transition-colors shadow-lg shadow-indigo-500/30"
              title="Discuss a partnership."
              subtitle="Let's scale your capacity. All work is strictly NDA."
              subject="Agency Partnership Inquiry"
              inputLabel="Agency Details & Needs"
              inputPlaceholder="What is your current tech stack, and what kind of overflow volume are you looking to offload?"
              calTitle="Book an alignment call."
              calSubtitle="Let's discuss your agency's workflow and how I can slot in."
            />

            <Link
              href="/work"
              className="w-full sm:w-auto px-8 py-4 text-base font-medium text-slate-600 hover:text-slate-900 transition-colors underline-offset-4 hover:underline flex gap-2 items-center justify-center border border-transparent"
            >
              <span>See Case Studies</span>
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

        {/* Right Column: DESKTOP IMAGE (Kept flex-2, hidden on mobile) */}
        {/* <div className="hidden lg:block animate-fade-in [animation-delay:300ms] flex-2 w-full max-w-md lg:max-w-none relative">
          <div className="relative aspect-square rounded-4xl overflow-hidden border border-slate-100 bg-white">
            <div className="w-full h-full bg-slate-50 flex items-center justify-center text-slate-400">
              <Image
                src="/AAdeepak.png"
                alt="Deepak Jangra"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div> */}
      </div>
    </section>
  );
}
