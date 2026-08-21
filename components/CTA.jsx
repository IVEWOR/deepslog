import ContactModal from "./ContactModal";
import { CONTACT_EMAIL } from "@/lib/site";

export default function CTA() {
  return (
    <section
      id="contact"
      className="relative py-24 lg:py-32 bg-slate-900 overflow-hidden"
    >
      {/* Premium Dark Background Effects */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-size-[4rem_4rem] opacity-20"></div>

      {/* Subtle Indigo Glow in the center */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-150 h-150 bg-indigo-600/20 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="relative z-10 max-w-4xl mx-0 sm:mx-auto px-6 lg:px-8 text-left sm:text-center">
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight mb-6 animate-fade-in-up [animation-delay:100ms] leading-tight">
          Ready to fix or scale your <br className="hidden sm:block" />
          <span className="text-transparent bg-clip-text bg-linear-to-r from-indigo-400 to-blue-400">
            Shopify Plus store?
          </span>
        </h2>

        <p className="text-base sm:text-lg md:text-xl text-slate-300 mb-10 max-w-2xl mx-0 sm:mx-auto leading-relaxed animate-fade-in-up [animation-delay:200ms]">
          Stop losing sales to slow checkouts and fragile themes. Let's build
          something that converts.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up [animation-delay:300ms]">
          {/* Primary High-Contrast Button */}
          <ContactModal
            triggerText={<>Get a Shopify Plus Audit</>}
            triggerStyle="w-full sm:w-auto flex items-center justify-center gap-2 cursor-pointer px-8 py-4 text-base font-bold text-slate-900 bg-white rounded-xl hover:bg-slate-200 transition-colors"
          />

          {/* Secondary Button */}
          <a
            href={`mailto:${CONTACT_EMAIL}`}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-8 py-4 text-base font-semibold text-white bg-slate-800/50 border border-slate-700 rounded-xl hover:bg-slate-700 hover:border-slate-600 transition-all duration-300 flex items-center justify-center gap-2"
          >
            Email Me Directly
          </a>
        </div>

        <div className="mt-12 flex items-center justify-center gap-3 animate-fade-in-up [animation-delay:400ms]">
          <span className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
          </span>
          <span className="text-sm font-medium text-slate-300 tracking-wide uppercase">
            Available for new projects
          </span>
        </div>
      </div>
    </section>
  );
}
