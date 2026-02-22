import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function WorkPage() {
  // Pulled directly from your live deepslog.com/#work data
  const projects = [
    {
      title: "Merkbart",
      year: "2025",
      description:
        "Custom WordPress plugin architecture and high-performance design implementation.",
      tech: ["WordPress", "Custom Plugin", "JavaScript", "Custom Design"],
      link: "#",
      // Placeholder colors for the image blocks until you add actual screenshots
      color: "from-blue-500/20 to-indigo-500/20",
    },
    {
      title: "Elegance Originals",
      year: "2024",
      description:
        "Headless-ready Shopify build with custom app extensions and liquid blocks.",
      tech: ["Shopify", "Liquid", "JavaScript", "Theme App Extension"],
      link: "#",
      color: "from-emerald-500/20 to-teal-500/20",
    },
    {
      title: "Green Building Canada",
      year: "2024",
      description:
        "Complex WordPress architecture with custom PHP plugin development.",
      tech: ["WordPress", "PHP", "Plugin Dev", "JavaScript"],
      link: "#",
      color: "from-emerald-600/20 to-green-500/20",
    },
    {
      title: "Faire",
      year: "2023",
      description:
        "High-traffic resource hub built for scale and sub-second load times.",
      tech: ["WordPress", "PHP", "JavaScript"],
      link: "#",
      color: "from-slate-500/20 to-slate-400/20",
    },
    {
      title: "Appspace",
      year: "2022",
      description:
        "Enterprise custom theme development prioritizing SEO and Core Web Vitals.",
      tech: ["WordPress", "Custom Theme", "PHP", "JavaScript"],
      link: "#",
      color: "from-indigo-500/20 to-purple-500/20",
    },
    {
      title: "Capes Sokol",
      year: "2022",
      description:
        "Legal firm frontend overhaul with a focus on accessibility and speed.",
      tech: ["JavaScript", "WordPress", "PHP", "Custom Theme"],
      link: "#",
      color: "from-orange-500/20 to-red-500/20",
    },
    {
      title: "Gray Matters NYC",
      year: "2021",
      description:
        "Premium Shopify storefront with custom liquid block architecture.",
      tech: ["Shopify", "Liquid", "JavaScript", "Custom Blocks"],
      link: "#",
      color: "from-slate-800/20 to-slate-600/20",
    },
    {
      title: "Darkest Fox",
      year: "2021",
      description:
        "High-conversion eCommerce build focused on mobile checkout flows.",
      tech: ["Shopify", "JavaScript", "Liquid", "Custom Blocks"],
      link: "#",
      color: "from-red-900/20 to-red-700/20",
    },
  ];

  return (
    <main className="min-h-screen bg-slate-50 text-slate-900 selection:bg-indigo-100 selection:text-indigo-900">
      <Navbar />

      {/* 1. HEADER SECTION */}
      <section className="pt-40 pb-20 lg:pt-48 lg:pb-24 px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="max-w-3xl">
          <h1 className="animate-fade-in-up [animation-delay:100ms] text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight mb-6 text-slate-900 leading-[1.1]">
            Code that <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-blue-500">
              drives revenue.
            </span>
          </h1>
          <p className="animate-fade-in-up [animation-delay:200ms] text-lg md:text-xl text-slate-600 leading-relaxed">
            A selection of production-grade Shopify and custom web applications
            built for agencies, startups, and ambitious brands over the last 9
            years.
          </p>
        </div>
      </section>

      {/* 2. THE PORTFOLIO GRID */}
      <section className="pb-32 px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-y-16 gap-x-12">
          {projects.map((project, index) => (
            <Link
              href={project.link}
              key={index}
              className="group animate-fade-in-up flex flex-col"
              style={{ animationDelay: `${300 + index * 100}ms` }}
            >
              {/* Image Container */}
              <div className="relative w-full aspect-[4/3] rounded-3xl overflow-hidden mb-6 bg-white border border-slate-200 shadow-sm group-hover:shadow-2xl group-hover:shadow-indigo-500/10 transition-all duration-500">
                {/* Replace this gradient div with your actual project screenshots.
                  Example: <Image src={`/projects/${project.title.toLowerCase().replace(/\s+/g, '-')}.jpg`} fill className="object-cover" alt={project.title} /> 
                */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-50 group-hover:opacity-100 transition-opacity duration-500`}
                ></div>
                <div className="absolute inset-0 flex items-center justify-center text-slate-400 font-medium text-sm">
                  [ Screenshot: {project.title} ]
                </div>

                {/* Overlay "View Project" Button that slides up on hover */}
                <div className="absolute inset-0 bg-slate-900/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-[2px]">
                  <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-300 bg-white text-slate-900 px-6 py-3 rounded-full font-bold text-sm shadow-xl flex items-center gap-2">
                    View Project Details
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
                  </div>
                </div>
              </div>

              {/* Meta Information */}
              <div className="flex flex-col flex-grow">
                <div className="flex items-center justify-between mb-3">
                  <h2 className="text-2xl font-bold text-slate-900 group-hover:text-indigo-600 transition-colors duration-300">
                    {project.title}
                  </h2>
                  <span className="text-sm font-mono font-medium text-slate-400 bg-slate-100 px-3 py-1 rounded-full">
                    {project.year}
                  </span>
                </div>

                <p className="text-slate-600 mb-6 line-clamp-2">
                  {project.description}
                </p>

                {/* Tech Stack Pills */}
                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.tech.map((tag, tagIdx) => (
                    <span
                      key={tagIdx}
                      className="text-xs font-semibold px-3 py-1.5 rounded-lg bg-white border border-slate-200 text-slate-600 shadow-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* 3. FINAL CTA (Umbrella Style - Dark) */}
      <section className="relative py-24 lg:py-32 bg-slate-950 overflow-hidden text-center">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-20"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-indigo-600/20 rounded-full blur-[120px] pointer-events-none"></div>

        <div className="relative z-10 max-w-3xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-6">
            Like what you see? <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-blue-400">
              Let's build yours next.
            </span>
          </h2>
          <p className="text-lg text-slate-400 mb-10 leading-relaxed max-w-xl mx-auto">
            Currently accepting new projects for Q1. Whether you are an agency
            needing overflow help or a brand needing a rebuild, I'm ready to
            ship.
          </p>
          <Link
            href="mailto:hello@deepslog.com?subject=Project%20Inquiry%20from%20Portfolio"
            className="w-full sm:w-auto px-10 py-4 text-base font-bold text-slate-900 bg-white rounded-xl hover:bg-indigo-50 hover:scale-105 transition-all shadow-xl flex items-center justify-center gap-2 mx-auto"
          >
            Start a Conversation
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

          <div className="mt-12 flex items-center justify-center gap-3">
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

      <Footer />
    </main>
  );
}
