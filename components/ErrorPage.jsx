import Navbar from "./Navbar";
import Footer from "./Footer";

const TONES = {
  indigo: {
    badgeBg: "bg-indigo-50",
    badgeBorder: "border-indigo-100",
    badgeText: "text-indigo-700",
    dot: "bg-indigo-500",
    glow: "bg-indigo-50/70",
    gradient: "from-indigo-600 to-blue-500",
  },
  red: {
    badgeBg: "bg-red-50",
    badgeBorder: "border-red-100",
    badgeText: "text-red-600",
    dot: "bg-red-500",
    glow: "bg-red-50/70",
    gradient: "from-red-500 to-orange-500",
  },
};

export default function ErrorPage({
  code = "404",
  eyebrow = "Page Not Found",
  tone = "indigo",
  title,
  titleAccent,
  description,
  primaryAction,
  secondaryAction,
  extra,
}) {
  const t = TONES[tone] || TONES.indigo;

  return (
    <main className="min-h-screen bg-white selection:bg-indigo-100 selection:text-indigo-900 flex flex-col">
      <Navbar />
      <section className="relative flex-1 flex items-center justify-center pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,#f1f5f9_1px,transparent_1px),linear-gradient(to_bottom,#f1f5f9_1px,transparent_1px)] bg-size-[4rem_4rem]"></div>
        <div
          className={`absolute top-0 left-1/2 -translate-x-1/2 w-200 h-100 ${t.glow} blur-[120px] rounded-full pointer-events-none`}
        ></div>

        <div className="relative z-10 max-w-2xl mx-auto px-6 lg:px-8 text-center">
          <div
            aria-hidden="true"
            className={`select-none font-black text-transparent bg-clip-text bg-linear-to-r ${t.gradient} text-7xl sm:text-8xl leading-none mb-2 animate-fade-in-up`}
          >
            {code}
          </div>

          <div
            className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full ${t.badgeBg} border ${t.badgeBorder} ${t.badgeText} font-semibold text-sm mb-6 animate-fade-in-up [animation-delay:50ms]`}
          >
            <span className={`w-2 h-2 rounded-full ${t.dot} animate-pulse`}></span>
            {eyebrow}
          </div>

          <h1 className="animate-fade-in-up [animation-delay:100ms] text-4xl sm:text-5xl md:text-6xl font-extrabold text-slate-900 tracking-tight mb-6 leading-[1.1]">
            {title}{" "}
            {titleAccent && (
              <span
                className={`text-transparent bg-clip-text bg-linear-to-r ${t.gradient}`}
              >
                {titleAccent}
              </span>
            )}
          </h1>

          <p className="animate-fade-in-up [animation-delay:200ms] text-base sm:text-lg text-slate-600 mb-10 leading-relaxed max-w-xl mx-auto">
            {description}
          </p>

          <div className="animate-fade-in-up [animation-delay:300ms] flex flex-col sm:flex-row items-center justify-center gap-4">
            {primaryAction}
            {secondaryAction}
          </div>

          {extra && (
            <div className="mt-10 animate-fade-in-up [animation-delay:400ms]">
              {extra}
            </div>
          )}
        </div>
      </section>
      <Footer />
    </main>
  );
}
