export default function Process() {
  const steps = [
    {
      number: "01",
      title: "Technical Discovery",
      description:
        "We review your Figma files, architecture requirements, and business goals. I identify potential technical bottlenecks early and propose the most scalable stack.",
    },
    {
      number: "02",
      title: "Environment Setup",
      description:
        "No cowboys here. I set up staging environments, version control (Git), and CI/CD pipelines right away so your team has complete visibility from day one.",
    },
    {
      number: "03",
      title: "Agile Execution",
      description:
        "I build in modular, reusable components. You get weekly async updates, clean commit messages, and a staging link that is always functional and up-to-date.",
    },
    {
      number: "04",
      title: "QA & Handoff",
      description:
        "Before launch, the site undergoes strict Lighthouse auditing, cross-browser QA, and accessibility checks. I hand over the code with full documentation.",
    },
  ];

  return (
    <section id="process" className="py-24 lg:py-32 bg-white relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-24">
          <h2 className="text-sm font-semibold text-indigo-600 tracking-widest uppercase mb-3 animate-fade-in-up [animation-delay:100ms]">
            How I Work
          </h2>
          <h3 className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight mb-6 animate-fade-in-up [animation-delay:200ms]">
            A transparent process <br className="hidden sm:block" />
            <span className="text-transparent bg-clip-text bg-linear-to-r from-indigo-600 to-blue-500">
              with zero surprises.
            </span>
          </h3>
          <p className="text-lg text-slate-600 leading-relaxed animate-fade-in-up [animation-delay:300ms]">
            I don't disappear into a cave and emerge weeks later with spaghetti
            code. My workflow is designed for agencies that require complete
            visibility and enterprise-level reliability.
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
                className="animate-fade-in-up group relative flex flex-col items-center lg:items-start text-center lg:text-left"
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
                <h4 className="text-xl md:text-2xl font-bold text-slate-900 mb-3 group-hover:text-indigo-600 transition-colors duration-300">
                  {step.title}
                </h4>
                <p className="text-slate-600 leading-relaxed text-base">
                  {step.description}
                </p>

                {/* Mobile Connecting Line (Downwards arrow on small screens) */}
                {index !== steps.length - 1 && (
                  <div className="lg:hidden mt-8 w-[2px] h-12 bg-gradient-to-b from-slate-200 to-transparent"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
