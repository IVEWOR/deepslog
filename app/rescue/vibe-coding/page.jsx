import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactModal from "@/components/ContactModal";

export const metadata = {
  title: "AI Codebase Rescue & Refactoring",
  description:
    "AI built your prototype. I build the production app. Get your Cursor, v0, or ChatGPT generated codebase refactored for enterprise scale.",
  alternates: {
    canonical: "/rescue/vibe-coding",
  },
  openGraph: {
    title: "AI Codebase Refactoring Services",
    description:
      "Turn your AI-generated prototype into a scalable production app.",
    url: "/rescue/vibe-coding",
  },
};

export default function VibeCodingRescue() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": "https://deepslog.com/rescue/vibe-coding#service",
    name: "AI Codebase Refactoring",
    provider: {
      "@id": "https://deepslog.com/#person",
    },
    areaServed: "Global",
    serviceType: "Software Architecture Refactoring",
    offers: {
      "@type": "Offer",
      price: "1000.00", // Example audit/starting price
      priceCurrency: "USD",
      availability: "https://schema.org/InStock",
    },
  };
  return (
    <main className="min-h-screen bg-slate-950 text-slate-50 selection:bg-indigo-500/30 selection:text-indigo-200">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navbar />

      {/* 1. HERO SECTION (Dark & Technical Theme) */}
      <section className="relative pt-40 pb-20 lg:pt-48 lg:pb-32 overflow-hidden border-b border-slate-800/30">
        {/* Hacker/Code aesthetic background */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:3rem_3rem] opacity-20"></div>
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-indigo-600/20 blur-[120px] rounded-full pointer-events-none"></div>

        <div className="relative z-10 max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-900 border border-indigo-500/30 text-indigo-300 font-mono text-sm mb-8 animate-fade-in-up">
            <span className="w-2 h-2 rounded-full bg-indigo-400 animate-pulse"></span>
            System Architecture Rescue
          </div>

          <h1 className="animate-fade-in-up [animation-delay:100ms] text-[38px] md:text-6xl lg:text-7xl font-extrabold tracking-tight mb-6 leading-[1.1] text-white">
            <span>AI built your prototype. </span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400">
              I build the production app.
            </span>
          </h1>

          <p className="animate-fade-in-up [animation-delay:200ms] text-lg md:text-xl text-slate-400 mb-10 leading-relaxed max-w-2xl mx-auto">
            Tools like Cursor and v0 are incredible for getting off the ground.
            But when your 2,000-line{" "}
            <code className="text-indigo-300 bg-slate-900 px-1 py-0.5 rounded">
              page.tsx
            </code>{" "}
            file starts crashing and features become impossible to add, you need
            a senior engineer.
          </p>

          <div className="animate-fade-in-up [animation-delay:300ms] flex flex-col sm:flex-row items-center justify-center gap-4">
            <ContactModal
              triggerText="Book Codebase Audit"
              triggerStyle="w-full sm:w-auto px-8 py-4 text-base font-bold text-slate-950 bg-indigo-400 rounded-xl hover:bg-indigo-300 shadow-[0_0_20px_rgba(129,140,248,0.3)] transition-all inline-flex items-center justify-center gap-2 cursor-pointer"
            />
          </div>
          <div className="animate-fade-in-up [animation-delay:400ms] flex flex-col gap-4 mt-20">
            <p className="text-center text-xs font-semibold text-slate-500 uppercase tracking-widest mb-6 animate-fade-in-up [animation-delay:400ms]">
              Trusted by teams building at scale
            </p>
            <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-50 hover:opacity-100 transition-all duration-500 animate-fade-in-up [animation-delay:500ms]">
              <span className="font-bold text-xl tracking-tighter text-slate-300 hover:text-white transition-colors">
                NXPRO
              </span>
              <span className="font-serif italic text-xl text-slate-300 hover:text-white transition-colors">
                GRAY_MATTERS
              </span>
              <span className="font-light tracking-widest text-xl text-slate-300 hover:text-white transition-colors">
                FAIRE
              </span>
              <span className="flex items-center justify-center px-3 py-1 rounded-full border border-slate-700 bg-slate-900 text-xs font-bold text-slate-400">
                +12 MORE
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* 2. THE DIAGNOSIS (Symptom Checker) */}
      <section className="py-24 bg-slate-950 border-b border-slate-800 relative">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">
              Does your codebase look like this?
            </h2>
            <p className="text-lg text-slate-400">
              The classic symptoms of "Vibe Coding" hitting a wall.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: "🤯",
                title: "The Monolith",
                desc: "Your entire app logic is stuffed into a single, terrifyingly large file.",
              },
              {
                icon: "🔄",
                title: "Hydration Errors",
                desc: "React complains about UI mismatches every time you reload the page.",
              },
              {
                icon: "🐢",
                title: "Laggy State",
                desc: "You type in an input field and the whole page re-renders and lags.",
              },
              {
                icon: "👻",
                title: "Ghost Packages",
                desc: "AI imported libraries that don't exist, are deprecated, or conflict.",
              },
            ].map((symptom, idx) => (
              <div
                key={idx}
                className="bg-slate-900 border border-slate-800 p-6 rounded-2xl hover:border-indigo-500/50 transition-colors"
              >
                <div className="text-3xl mb-4">{symptom.icon}</div>
                <h3 className="text-xl font-bold text-slate-200 mb-2">
                  {symptom.title}
                </h3>
                <p className="text-slate-400 text-sm">{symptom.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. THE SOLUTION (How I fix it) */}
      <section className="py-24 bg-slate-900 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 flex flex-col lg:flex-row gap-16 items-center">
          <div className="flex-1 lg:pr-8">
            <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-6">
              I untangle the mess without <br className="hidden sm:block" />{" "}
              breaking the features.
            </h2>
            <p className="text-lg text-slate-400 mb-8 leading-relaxed">
              You don't need to throw the MVP away. I take your AI-generated
              codebase and systematically refactor it into a scalable,
              enterprise-grade architecture.
            </p>

            <ul className="space-y-6">
              {[
                "Component Extraction: Breaking massive files into clean, reusable React components.",
                "State Management: Implementing proper Context, Zustand, or Redux to fix performance bottlenecks.",
                "Database Optimization: Rewriting hallucinated database queries into secure, efficient Prisma/Drizzle calls.",
                "Security Patching: Fixing exposed API keys, insecure routes, and authentication flaws.",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-4">
                  <div className="mt-1 flex-shrink-0 w-6 h-6 rounded-full bg-indigo-500/20 flex items-center justify-center text-indigo-400">
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
                        d="M5 13l4 4L19 7"
                      ></path>
                    </svg>
                  </div>
                  <span className="text-slate-300">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Code comparison visual */}
          <div className="flex-1 w-full max-w-lg mx-auto bg-slate-950 rounded-2xl border border-slate-800 overflow-hidden shadow-2xl">
            <div className="flex items-center gap-2 px-4 py-3 border-b border-slate-800 bg-slate-900">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
              <span className="ml-2 text-xs text-slate-500 font-mono">
                refactor.tsx
              </span>
            </div>
            <div className="p-6 font-mono text-sm text-slate-400 overflow-x-auto">
              <div className="text-red-400 line-through opacity-70 mb-4">
                // AI generated code (1,200 lines)
                <br />
                export default function App() &#123;
                <br />
                &nbsp;&nbsp;const [data1, setData1] = useState();
                <br />
                &nbsp;&nbsp;const [data2, setData2] = useState();
                <br />
                &nbsp;&nbsp;/* 50 more unmanaged states */
                <br />
                &#125;
              </div>
              <div className="text-emerald-400">
                // Senior refactor
                <br />
                import &#123; useStore &#125; from '@/store';
                <br />
                import &#123; DashboardLayout &#125; from '@/components';
                <br />
                <br />
                export default function App() &#123;
                <br />
                &nbsp;&nbsp;return (<br />
                &nbsp;&nbsp;&nbsp;&nbsp;&lt;DashboardLayout&gt;
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;DataGrid /&gt;
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;&lt;/DashboardLayout&gt;
                <br />
                &nbsp;&nbsp;);
                <br />
                &#125;
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. FINAL CTA (Audit Focus) */}
      <section id="audit" className="relative py-24 bg-slate-950 text-center">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight mb-6 animate-fade-in-up [animation-delay:100ms] leading-tight">
            Stop fighting the AI. Let's fix the foundation.
          </h2>
          <p className="text-lg text-slate-400 mb-10">
            Book a 48-hour codebase audit. I will review your repository and
            give you a step-by-step roadmap of exactly what needs to be
            refactored for production scale.
          </p>
          <ContactModal
            triggerText="Request Codebase Audit"
            triggerStyle="mx-auto w-fit px-10 py-4 text-base font-bold text-slate-900 bg-white rounded-xl hover:bg-slate-200 hover:scale-105 transition-all shadow-[0_0_40px_-10px_rgba(255,255,255,0.3)] flex items-center justify-center gap-2 cursor-pointer"
          />
        </div>
      </section>

      <Footer />
    </main>
  );
}
