export default function Process() {
  const steps = [
    {
      number: "01",
      title: "Store Audit & Discovery",
      description:
        "I review your current storefront, theme, and apps, and flag performance and conversion bottlenecks before writing a line of code.",
    },
    {
      number: "02",
      title: "Staging & Setup",
      description:
        "I review your current storefront, theme, and apps, and flag performance and conversion bottlenecks before writing a line of code.",
    },
    {
      number: "03",
      title: "Agile Build",
      description:
        "Modular Liquid and Hydrogen components, weekly async updates, and a staging link that always works.",
    },
    {
      number: "04",
      title: "QA & Handoff",
      description:
        "Lighthouse auditing, cross-browser QA, and accessibility checks before I hand over fully documented code.",
    },
  ];

  return (
    <section id="process" className="py-24 lg:py-32 bg-white relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-left sm:text-center max-w-3xl mx-0 sm:mx-auto mb-16 lg:mb-24">
          <h2 className="text-sm font-semibold text-indigo-600 tracking-widest uppercase mb-3 animate-fade-in-up [animation-delay:100ms]">
            How I Work
          </h2>
          <h3 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight mb-6 leading-tight animate-fade-in-up [animation-delay:200ms]">
            A transparent process <br className="hidden sm:block" />
            <span className="text-transparent bg-clip-text bg-linear-to-r from-indigo-600 to-blue-500">
              with zero surprises.
            </span>
          </h3>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed animate-fade-in-up [animation-delay:300ms]">
            I don't disappear for weeks and deliver spaghetti code. My workflow
            is designed for merchants who need to keep selling while their store
            gets rebuilt.
          </p>
        </div>

        {/* Process Steps */}
        <div className="relative">
          {/* Desktop Connecting Line */}
          <div className="hidden lg:block absolute top-[2.75rem] left-0 w-full h-[2px] bg-slate-100 z-0"></div>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-10 lg:gap-8 relative z-10">
            {steps.map((step, index) => (
              <div
                key={index}
                className="animate-fade-in-up group relative flex flex-col items-start text-left"
                style={{ animationDelay: `${400 + index * 150}ms` }}
              >
                {/* Step Number Badge */}
                <div className="w-20 h-20 lg:w-24 lg:h-24 rounded-full bg-white border-[6px] border-white shadow-xl shadow-slate-200/50 flex items-center justify-center mb-6 lg:mb-8 relative z-10 group-hover:-translate-y-2 transition-transform duration-300">
                  <div className="w-full h-full rounded-full bg-slate-50 border border-slate-100 flex items-center justify-center group-hover:bg-indigo-600 group-hover:border-indigo-600 transition-colors duration-300">
                    <span className="text-2xl font-bold text-slate-400 group-hover:text-white transition-colors duration-300">
                      {step.number}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <h4 className="text-xl md:text-2xl font-bold text-slate-900 mb-3 leading-snug group-hover:text-indigo-600 transition-colors duration-300">
                  {step.title}
                </h4>
                <p className="text-slate-600 leading-relaxed text-base sm:text-lg">
                  {step.description}
                </p>

                {/* Mobile Connecting Line (Downwards arrow on small screens) */}
                {index !== steps.length - 1 && (
                  <div className="lg:hidden mt-8 ml-10 w-[2px] h-12 bg-gradient-to-b from-slate-200 to-transparent"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
