export default function Expertise() {
  const features = [
    {
      title: "Shopify Plus & Hydrogen",
      description:
        "Checkout Extensibility, Liquid, custom Plus builds, and headless Hydrogen storefronts. Hands-on experience shipping on the Plus platform.",
      icon: (
        <svg
          className="w-6 h-6 text-indigo-600 group-hover:text-white"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
            d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
          />
        </svg>
      ),
    },
    {
      title: "Performance & CWV",
      description:
        "99+ Lighthouse scores and sub-2s loads. Core Web Vitals built in from day one, not bolted on after.",
      icon: (
        <svg
          className="w-6 h-6 text-indigo-600 group-hover:text-white"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
            d="M13 10V3L4 14h7v7l9-11h-7z"
          />
        </svg>
      ),
    },
    {
      title: "Store Rescue & Migrations",
      description:
        "Broken checkout? Messy app stack? Acquired brand with a dead store? I stabilize existing stores and plan complex migrations without starting from scratch.",
      icon: (
        <svg
          className="w-6 h-6 text-indigo-600 group-hover:text-white"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
            d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
          />
        </svg>
      ),
    },
    {
      title: "Subscription & Retention",
      description:
        "Recharge, Klaviyo lifecycle flows, and event tracking. I build the backend that keeps subscribers paying.",
      icon: (
        <svg
          className="w-6 h-6 text-indigo-600 group-hover:text-white"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
            d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
          />
        </svg>
      ),
    },
  ];

  return (
    <section
      id="expertise"
      className="py-24 lg:py-32 bg-slate-50 relative border-t border-slate-200"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-left sm:text-center max-w-3xl mx-0 sm:mx-auto mb-16 lg:mb-24">
          <h2 className="text-sm font-semibold text-indigo-600 tracking-widest uppercase mb-3 animate-fade-in-up [animation-delay:100ms]">
            THE PLUS ADVANTAGE
          </h2>
          <h3 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight mb-6 leading-tight animate-fade-in-up [animation-delay:200ms]">
            Why
            <span className="text-transparent bg-clip-text bg-linear-to-r from-indigo-600 to-blue-500">
              &nbsp;Shopify Plus
            </span>
            <br className="hidden sm:block" />
            &nbsp;merchants hire me.
          </h3>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed animate-fade-in-up [animation-delay:300ms]">
            I don't install apps and hope. I build the custom layer that lets
            you scale without replatforming.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              // The staggered animation delay math: 400ms + (index * 150ms)
              className={`animate-fade-in-up group relative bg-white p-8 lg:p-10 rounded-4xl border border-slate-200 hover:border-indigo-100 hover:shadow-2xl hover:shadow-indigo-500/5 transition-all duration-300`}
              style={{ animationDelay: `${400 + index * 150}ms` }}
            >
              {/* Subtle hover gradient at the top of the card */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-linear-to-r from-indigo-500 to-blue-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-t-4xl"></div>

              <div className="mb-6 inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-indigo-50 border border-indigo-100 text-indigo-600 group-hover:scale-110 group-hover:bg-linear-to-r group-hover:from-indigo-600 group-hover:to-blue-500 group-hover:text-white transition-all duration-300 shadow-sm">
                {feature.icon}
              </div>

              <h4 className="text-xl md:text-2xl font-bold text-slate-900 mb-4 leading-snug">
                {feature.title}
              </h4>

              <p className="text-slate-600 leading-relaxed text-base sm:text-lg">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
