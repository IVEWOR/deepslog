import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactModal from "@/components/ContactModal";
import SocialProof from "@/components/SocialProof";
import { SITE_URL } from "@/lib/site";

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
    "@graph": [
      {
        "@type": "Service",
        "@id": `${SITE_URL}/rescue/vibe-coding#service`,
        name: "AI Codebase Refactoring",
        provider: {
          "@id": `${SITE_URL}/#person`,
        },
        areaServed: "Global",
        serviceType: "Software Architecture Refactoring",
        offers: {
          "@type": "Offer",
          price: "2000.00",
          priceCurrency: "USD",
          priceValidUntil: "2026-12-31",
          availability: "https://schema.org/InStock",
        },
      },
      {
        "@type": "FAQPage",
        "@id": `${SITE_URL}/rescue/vibe-coding#faq`,
        mainEntity: [
          {
            "@type": "Question",
            name: "What is vibe coding cleanup?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Vibe coding cleanup is the process of refactoring AI-generated code from tools like Cursor, Copilot, or v0 into production-ready, scalable applications. I specialize in stabilizing these codebases without rebuilding from scratch.",
            },
          },
          {
            "@type": "Question",
            name: "How much does a codebase audit cost?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "My 48-hour codebase audit is $2,000. This includes a comprehensive review of your repository, identification of critical issues, and a step-by-step roadmap for remediation.",
            },
          },
        ],
      },
    ],
  };

  const symptoms = [
    {
      number: "01",
      title: "The Monolith",
      description:
        "Your entire app logic is stuffed into a single, terrifyingly large file.",
    },
    {
      number: "02",
      title: "Hydration Errors",
      description:
        "React complains about UI mismatches every time you reload the page.",
    },
    {
      number: "03",
      title: "Laggy State",
      description:
        "You type in an input field and the whole page re-renders and lags.",
    },
    {
      number: "04",
      title: "Ghost Packages",
      description:
        "AI imported libraries that don't exist, are deprecated, or conflict.",
    },
  ];

  const fixes = [
    {
      title: "Component Extraction",
      description:
        "Breaking massive files into clean, reusable React components.",
    },
    {
      title: "State Management",
      description:
        "Implementing proper Context, Zustand, or Redux to fix performance bottlenecks.",
    },
    {
      title: "Database Optimization",
      description:
        "Rewriting hallucinated database queries into secure, efficient Prisma/Drizzle calls.",
    },
    {
      title: "Security Patching",
      description:
        "Fixing exposed API keys, insecure routes, and authentication flaws.",
    },
  ];

  const faqs = [
    {
      q: "What is vibe coding cleanup?",
      a: "Refactoring AI-generated code from tools like Cursor, Copilot, or v0 into production-ready, scalable applications. I specialize in stabilizing these codebases without rebuilding from scratch.",
    },
    {
      q: "How much does a codebase audit cost?",
      a: "The 48-hour codebase audit is $2,000. That includes a full review of your repository, identification of critical issues, and a step-by-step roadmap for remediation.",
    },
  ];

  return (
    <main className="min-h-screen bg-[var(--color-paper)] text-[var(--color-ink)] selection:bg-[var(--color-accent)] selection:text-[var(--color-paper)]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navbar />

      {/* Hero */}
      <section className="border-b border-[color:var(--color-line)] px-[clamp(2.5rem,4vw,4rem)] py-16 lg:py-24">
        <span className="label animate-fade-in-up">
          System Architecture Rescue
        </span>

        <h1
          className="mt-4 max-w-3xl animate-fade-in-up [animation-delay:100ms]"
          style={{ fontWeight: "var(--weight-display-black)" }}
        >
          AI built your prototype.{" "}
          <span className="accent">I build the production app.</span>
        </h1>

        <p className="body-lg mt-6 max-w-xl animate-fade-in-up [animation-delay:200ms]">
          Tools like Cursor and v0 are incredible for getting off the ground.
          But when your 2,000-line{" "}
          <code className="font-[family-name:var(--font-mono)] text-[color:var(--color-accent)]">
            page.tsx
          </code>{" "}
          file starts crashing and features become impossible to add, you need a
          senior engineer.
        </p>

        <div className="mt-10 animate-fade-in-up [animation-delay:300ms]">
          <ContactModal
            triggerText="Book Codebase Audit"
            triggerStyle="btn btn-primary"
            title="Book a Codebase Audit."
            subtitle="Let's review your AI-generated prototype and map out a production-ready architecture."
            subject="AI Codebase Audit Request"
            fields={[
              { name: "name", label: "Name", type: "text", required: true },
              { name: "email", label: "Email", type: "email", required: true },
              {
                name: "website",
                label: "Repo or Live Demo URL",
                type: "text",
                placeholder: "https://github.com/you/repo or a live link",
                required: false,
              },
              {
                name: "message",
                label: "Project Context",
                type: "textarea",
                placeholder:
                  "What tools did you use (Cursor, v0, etc.), and where is the app currently breaking?",
                required: true,
              },
            ]}
            calTitle="Need immediate triage?"
            calSubtitle="Grab a slot on my calendar to walk through the repo together."
          />
        </div>
      </section>

      <SocialProof />

      {/* Diagnosis */}
      <section className="border-b border-[color:var(--color-line)]">
        <div className="border-b border-[color:var(--color-line)] px-[clamp(2.5rem,4vw,4rem)] py-14 lg:py-20">
          <span className="label animate-fade-in-up">The Diagnosis</span>
          <h2 className="mt-4 max-w-xl animate-fade-in-up [animation-delay:100ms]">
            Does your codebase look like this?
          </h2>
          <p className="body-lg mt-4 max-w-md animate-fade-in-up [animation-delay:200ms]">
            The classic symptoms of &ldquo;vibe coding&rdquo; hitting a wall.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
          {symptoms.map((symptom, index) => (
            <div
              key={symptom.number}
              className={`animate-fade-in-up border-[color:var(--color-line)] px-[clamp(2.5rem,4vw,4rem)] py-10 md:px-10 lg:py-14 ${
                index % 2 === 0 ? "md:border-r" : ""
              } ${index < 2 ? "border-b md:border-b-0" : ""} ${
                index % 4 !== 0 ? "lg:border-l" : ""
              }`}
              style={{ animationDelay: `${300 + index * 100}ms` }}
            >
              <span className="stat-number text-[1.5rem] text-[color:var(--color-muted)]">
                {symptom.number}
              </span>
              <h4 className="mt-4">{symptom.title}</h4>
              <p className="body-sm mt-3">{symptom.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Solution + code panel */}
      <section className="border-b border-[color:var(--color-line)] px-[clamp(2.5rem,4vw,4rem)] py-14 lg:py-20">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="animate-fade-in-up">
            <span className="label">The Fix</span>
            <h2 className="mt-4 max-w-md">
              I untangle the mess without{" "}
              <span className="accent">breaking the features.</span>
            </h2>
            <p className="body-lg mt-6 max-w-md">
              You don&rsquo;t need to throw the MVP away. I take your
              AI-generated codebase and systematically refactor it into a
              scalable, enterprise-grade architecture.
            </p>

            <ul className="mt-10 flex flex-col gap-6">
              {fixes.map((fix) => (
                <li
                  key={fix.title}
                  className="border-t border-[color:var(--color-line)] pt-4"
                >
                  <span style={{ fontWeight: "var(--weight-display-bold)" }}>
                    {fix.title}:
                  </span>{" "}
                  <span className="body-md">{fix.description}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Code comparison — the only intentionally dark surface on this
              page, since it's literally rendering as a code editor, not
              decorative theming. */}
          <div className="animate-fade-in-up [animation-delay:150ms] surface-inverted mx-auto w-full max-w-lg self-start border border-[color:var(--color-ink-surface-line)]">
            <div className="flex items-center gap-2 border-b border-[color:var(--color-ink-surface-line)] px-4 py-3">
              <span className="stat-caption text-[color:var(--color-ink-surface-muted)]">
                refactor.tsx
              </span>
            </div>
            <div className="overflow-x-auto p-6 font-[family-name:var(--font-mono)] text-[length:var(--text-body-sm)] leading-relaxed">
              <div className="mb-4 text-[color:var(--color-ink-surface-muted)] line-through opacity-70">
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
              <div className="text-[color:var(--color-ink-surface-text)]">
                // Senior refactor
                <br />
                import &#123; useStore &#125; from &apos;@/store&apos;;
                <br />
                import &#123; DashboardLayout &#125; from
                &apos;@/components&apos;;
                <br />
                <br />
                export default function App() &#123;
                <br />
                &nbsp;&nbsp;return (
                <br />
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

      {/* FAQ */}
      <section className="border-b border-[color:var(--color-line)] px-[clamp(2.5rem,4vw,4rem)] py-14 lg:py-20">
        <span className="label animate-fade-in-up">
          Questions People Actually Ask
        </span>
        <div className="mt-10 max-w-2xl border-t border-[color:var(--color-line)]">
          {faqs.map((faq, index) => (
            <div
              key={faq.q}
              className="animate-fade-in-up border-b border-[color:var(--color-line)] py-8"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <h3>{faq.q}</h3>
              <p className="body-md mt-3">{faq.a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Final CTA */}
      <section id="audit" className="surface-inverted">
        <div className="px-[clamp(2.5rem,4vw,4rem)] py-20 text-center lg:py-28">
          <h2 className="mx-auto max-w-2xl text-[color:var(--color-ink-surface-text)] animate-fade-in-up [animation-delay:100ms]">
            Stop fighting the AI.{" "}
            <span className="accent">Let&rsquo;s fix the foundation.</span>
          </h2>
          <p className="body-lg mx-auto mt-6 max-w-md animate-fade-in-up [animation-delay:200ms]">
            Book a 48-hour codebase audit. I will review your repository and
            give you a step-by-step roadmap of exactly what needs to be
            refactored for production scale.
          </p>
          <div className="mt-10 flex justify-center animate-fade-in-up [animation-delay:300ms]">
            <ContactModal
              triggerText="Book Your Codebase Audit"
              triggerStyle="btn btn-primary"
              title="48-Hour Codebase Audit."
              subtitle="Send your repo and I'll map out what needs to be refactored for production."
              subject="AI Codebase Audit Request (Final CTA)"
              fields={[
                { name: "name", label: "Name", type: "text", required: true },
                {
                  name: "email",
                  label: "Email",
                  type: "email",
                  required: true,
                },
                {
                  name: "website",
                  label: "Repo or Live Demo URL",
                  type: "text",
                  placeholder: "https://github.com/you/repo or a live link",
                  required: false,
                },
                {
                  name: "message",
                  label: "What is broken?",
                  type: "textarea",
                  placeholder:
                    "What tools did you use, and where is the app currently breaking?",
                  required: true,
                },
              ]}
              calTitle="Need immediate triage?"
              calSubtitle="Grab the next available slot on my calendar. Let's look at the codebase together."
            />
          </div>
          <p className="stat-caption mt-8 animate-fade-in-up [animation-delay:400ms]">
            This service also covers Shopify Hydrogen and custom app codebases
            built with AI tools like Cursor or v0.
          </p>
        </div>
      </section>

      <Footer />
    </main>
  );
}
