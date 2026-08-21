import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactModal from "@/components/ContactModal";
import WorkGrid from "@/components/WorkGrid";
import { featuredProjects, additionalProjects } from "@/lib/work-projects";
import { SITE_URL } from "@/lib/site";

export const metadata = {
  title: "Work & Case Studies | Deepak Jangra | 100+ Projects",
  description:
    "Production-grade Shopify, Next.js, and WordPress builds for agencies. 4× speed improvements, 2× conversion increases. 9 years, 100+ projects delivered.",
  alternates: {
    canonical: "/work",
  },
  openGraph: {
    title: "Portfolio | Deepak Jangra | High-Performance Web Apps",
    description:
      "Case studies: 4× faster loads, 2× sales increases. Shopify, Next.js, WordPress for ambitious brands.",
    url: `${SITE_URL}/work`,
    siteName: "Deepak Jangra",
    images: [
      {
        // TODO: og-work.png doesn't exist yet ("Create this: collage of
        // project screenshots" in the original). Using a real project
        // screenshot as a stopgap instead of a broken image link — swap
        // this back once the actual collage exists.
        url: `${SITE_URL}/merkbart.png`,
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
  const projects = [...featuredProjects, ...additionalProjects];

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "CollectionPage",
        "@id": `${SITE_URL}/work#webpage`,
        name: "Selected Work & Portfolio | Deepak Jangra",
        description:
          "Production-grade web applications built for agencies and startups",
        url: `${SITE_URL}/work`,
        isPartOf: { "@id": `${SITE_URL}/#website` },
        about: { "@id": `${SITE_URL}/#person` },
        creator: {
          "@id": `${SITE_URL}/#person`,
        },
        copyrightHolder: {
          "@id": `${SITE_URL}/#person`,
        },
        mainEntity: {
          "@type": "ItemList",
          "@id": `${SITE_URL}/work#projects`,
          itemListElement: projects.map((project, index) => ({
            "@type": "ListItem",
            position: index + 1,
            name: project.title,
            description: project.description,
            url: `${SITE_URL}/work/${project.link}`,
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
            <span className="text-transparent bg-clip-text bg-linear-to-r from-indigo-600 to-blue-500">
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
        <WorkGrid projects={projects} initialVisible={8} />
      </section>

      {/* 3. FINAL CTA (Umbrella Style - Dark) */}
      <section className="relative py-24 lg:py-32 bg-slate-950 overflow-hidden text-center">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-size-[4rem_4rem] opacity-20"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-150 h-150 bg-indigo-600/20 rounded-full blur-[120px] pointer-events-none"></div>

        <div className="relative z-10 max-w-3xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight mb-6 animate-fade-in-up [animation-delay:100ms] leading-tight">
            Like what you see? <br />
            <span className="text-transparent bg-clip-text bg-linear-to-r from-indigo-400 to-blue-400">
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
            triggerStyle="w-full sm:w-auto min-w-[200px] flex items-center justify-center gap-2 cursor-pointer px-8 py-4 text-base font-bold text-slate-900 bg-white rounded-xl hover:bg-slate-200 transition-colors mx-auto"
            title="Let's build yours next."
            subtitle="Currently accepting new projects for Q1."
            subject="New Project Inquiry (From Portfolio)"
            inputLabel="Project Overview"
            inputPlaceholder="Are you an agency needing overflow help, or a brand needing a rebuild?"
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
