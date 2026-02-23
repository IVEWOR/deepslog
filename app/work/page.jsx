import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactModal from "@/components/ContactModal";

export const metadata = {
  title: "Work & Case Studies | Deepak Jangra | 100+ Projects",
  description:
    "Production-grade Shopify, Next.js, and WordPress builds for agencies. 4× speed improvements, 2× conversion increases. 9 years, 100+ projects delivered.",
  alternates: {
    canonical: "https://deepslog.com/work",
  },
  openGraph: {
    title: "Portfolio | Deepak Jangra | High-Performance Web Apps",
    description:
      "Case studies: 4× faster loads, 2× sales increases. Shopify, Next.js, WordPress for ambitious brands.",
    url: "https://deepslog.com/work",
    siteName: "Deepak Jangra",
    images: [
      {
        url: "https://deepslog.com/og-work.png", // Create this: collage of project screenshots
        width: 1200,
        height: 630,
        alt: "Deepak Jangra Portfolio - 100+ Projects",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function WorkPage() {
  const projects = [
    {
      title: "Merkbart",
      year: "2025",
      description:
        "Custom WordPress plugin architecture and high-performance design implementation.",
      tech: ["WordPress", "Custom Plugin", "JavaScript", "Custom Design"],
      link: "merkbart",
      image: "/merkbart.png",
    },
    {
      title: "Elegance Originals",
      year: "2024",
      description:
        "Headless-ready Shopify build with custom app extensions and liquid blocks.",
      tech: ["Shopify", "Liquid", "JavaScript", "Theme App Extension"],
      link: "elegance-originals",
      image: "/eleganceoriginals.png",
    },
    {
      title: "Green Building Canada",
      year: "2024",
      description:
        "Complex WordPress architecture with custom PHP plugin development.",
      tech: ["WordPress", "PHP", "Plugin Dev", "JavaScript"],
      link: "green-building-canada",
      image: "/green-building-canada.png",
    },
    {
      title: "Faire",
      year: "2023",
      description:
        "High-traffic resource hub built for scale and sub-second load times.",
      tech: ["WordPress", "PHP", "JavaScript"],
      link: "faire",
      image: "/Faire.png",
    },
    {
      title: "Appspace",
      year: "2022",
      description:
        "Enterprise custom theme development prioritizing SEO and Core Web Vitals.",
      tech: ["WordPress", "Custom Theme", "PHP", "JavaScript"],
      link: "appspace",
      image: "/appspace.png",
    },
    {
      title: "Capes Sokol",
      year: "2022",
      description:
        "Legal firm frontend overhaul with a focus on accessibility and speed.",
      tech: ["JavaScript", "WordPress", "PHP", "Custom Theme"],
      link: "capes-sokol",
      image: "/capes-sokol.png",
    },
    {
      title: "Gray Matters NYC",
      year: "2021",
      description:
        "Premium Shopify storefront with custom liquid block architecture.",
      tech: ["Shopify", "Liquid", "JavaScript", "Custom Blocks"],
      link: "graymattersnyc",
      image: "/graymattersnyc.png",
    },
    {
      title: "Darkest Fox",
      year: "2021",
      description:
        "High-conversion eCommerce build focused on mobile checkout flows.",
      tech: ["Shopify", "JavaScript", "Liquid", "Custom Blocks"],
      link: "darkestfox",
      image: "/darkestfox.png",
    },
    {
      title: "Next2Skin",
      year: "2020",
      description: "Custom WooCommerce setup and tailored theme modifications.",
      tech: ["WordPress", "Custom Theme", "WooCommerce", "JavaScript"],
      link: "next2skin",
      image: "/next2skin.png",
    },
    {
      title: "LEO Eyewear",
      year: "2020",
      description:
        "Bespoke Shopify store with dynamic custom blocks and liquid architecture.",
      tech: ["Shopify", "JavaScript", "Custom Blocks", "Liquid"],
      link: "leoeyewear",
      image: "/leoeyewear.png",
    },
  ];

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "CollectionPage",
        "@id": "https://deepslog.com/work#webpage",
        name: "Selected Work & Portfolio | Deepak Jangra",
        description:
          "Production-grade web applications built for agencies and startups",
        url: "https://deepslog.com/work",
        isPartOf: { "@id": "https://deepslog.com/#website" },
        about: { "@id": "https://deepslog.com/#person" },
        creator: {
          "@id": "https://deepslog.com/#person",
        },
        copyrightHolder: {
          "@id": "https://deepslog.com/#person",
        },
        mainEntity: {
          "@type": "ItemList",
          "@id": "https://deepslog.com/work#projects",
          itemListElement: projects.map((project, index) => ({
            "@type": "ListItem",
            position: index + 1,
            name: project.title,
            description: project.description,
            url: `https://deepslog.com/work/${project.link}`,
          })),
        },
      },
    ],
  };

  return (
    <main className="min-h-screen bg-slate-50 text-slate-900 selection:bg-indigo-100 selection:text-indigo-900">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
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
              href={`/work/${project.link}`}
              key={index}
              className="group animate-fade-in-up flex flex-col"
              style={{ animationDelay: `${200 + (index % 4) * 100}ms` }}
            >
              {/* Image Container */}
              <div className="relative w-full aspect-[4/3] rounded-3xl overflow-hidden mb-6 bg-slate-100 border border-slate-200 shadow-sm group-hover:shadow-2xl group-hover:shadow-indigo-500/10 transition-all duration-500">
                {/* Real Screenshot using next/image */}
                <Image
                  src={project.image}
                  alt={`${project.title} Preview`}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />

                {/* Overlay "View Project" Button that slides up on hover */}
                <div className="absolute inset-0 bg-slate-900/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-[2px]">
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
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight mb-6 animate-fade-in-up [animation-delay:100ms] leading-tight">
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
          <ContactModal
            triggerText="Start Conversation"
            triggerStyle="w-full px-8 py-4 text-base font-bold text-slate-900 bg-white rounded-xl hover:bg-slate-200 hover:scale-105 transition-all shadow-[0_0_40px_-10px_rgba(255,255,255,0.3)] flex items-center justify-center gap-2"
          />

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
