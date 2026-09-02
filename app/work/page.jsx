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
        url: `${SITE_URL}/og-work.png`,
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
        creator: { "@id": `${SITE_URL}/#person` },
        copyrightHolder: { "@id": `${SITE_URL}/#person` },
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
    <main className="min-h-screen bg-[var(--color-paper)] text-[var(--color-ink)] selection:bg-[var(--color-accent)] selection:text-[var(--color-paper)]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navbar />

      {/* Header */}
      <section className="border-b border-[color:var(--color-line)] px-[clamp(1.5rem,4vw,4rem)] py-16 lg:py-24">
        <span className="label animate-fade-in-up [animation-delay:100ms]">
          Portfolio
        </span>
        <h1
          className="mt-4 max-w-2xl animate-fade-in-up [animation-delay:200ms]"
          style={{ fontWeight: "var(--weight-display-black)" }}
        >
          Code that <span className="accent">drives revenue.</span>
        </h1>
        <p className="body-lg mt-6 max-w-md animate-fade-in-up [animation-delay:300ms]">
          A selection of production-grade Shopify and custom web applications
          built for agencies, startups, and ambitious brands over the last 9
          years.
        </p>
      </section>

      {/* Portfolio grid — WorkGrid.jsx still needs its own pass; see note above */}
      <section className="px-[clamp(1.5rem,4vw,4rem)] py-16 lg:py-20">
        <WorkGrid projects={projects} initialVisible={8} />
      </section>

      {/* Closing CTA — single inverted surface, no gradient/grid decoration */}
      <section className="surface-inverted">
        <div className="px-[clamp(1.5rem,4vw,4rem)] py-20 text-center lg:py-28">
          <span className="label animate-fade-in-up [animation-delay:100ms]">
            Get In Touch
          </span>

          <h2 className="mx-auto mt-4 max-w-2xl text-[color:var(--color-ink-surface-text)] animate-fade-in-up [animation-delay:200ms]">
            Like what you see?{" "}
            <span className="accent">Let&rsquo;s build yours next.</span>
          </h2>

          <p className="body-lg mx-auto mt-6 max-w-md animate-fade-in-up [animation-delay:300ms]">
            Currently accepting new projects for Q1. Whether you&rsquo;re an
            agency needing overflow help or a brand needing a rebuild, I&rsquo;m
            ready to ship.
          </p>

          <div className="mt-10 flex justify-center animate-fade-in-up [animation-delay:400ms]">
            <ContactModal
              triggerText="Start Conversation"
              triggerStyle="btn btn-primary"
              title="Let's build yours next."
              subtitle="Currently accepting new projects for Q1."
              subject="New Project Inquiry (From Portfolio)"
              fields={[
                {
                  name: "name",
                  label: "Name / Agency",
                  type: "text",
                  required: true,
                },
                {
                  name: "email",
                  label: "Email",
                  type: "email",
                  required: true,
                },
                {
                  name: "website",
                  label: "Current Site (if any)",
                  type: "url",
                  placeholder: "https://yourstore.com",
                  required: false,
                },
                {
                  name: "message",
                  label: "Project Overview",
                  type: "textarea",
                  placeholder:
                    "Are you an agency needing overflow help, or a brand needing a rebuild?",
                  required: true,
                },
              ]}
            />
          </div>

          <div className="mt-12 flex items-center justify-center gap-3 animate-fade-in-up [animation-delay:500ms]">
            <span className="relative flex h-2.5 w-2.5">
              <span
                className="absolute inline-flex h-full w-full animate-ping rounded-full opacity-75"
                style={{ background: "var(--color-status-live)" }}
              />
              <span
                className="relative inline-flex h-2.5 w-2.5 rounded-full"
                style={{ background: "var(--color-status-live)" }}
              />
            </span>
            <span className="stat-caption text-[color:var(--color-ink-surface-muted)]">
              Available for new projects
            </span>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
