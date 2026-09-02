import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactModal from "@/components/ContactModal";
import SocialProof from "@/components/SocialProof";
import { SITE_URL } from "@/lib/site";

export const metadata = {
  title: "White-Label Development Services",
  description:
    "Your silent, senior-level technical partner. Scale your agency's development capacity with Next.js and Shopify, strictly under NDA.",
  alternates: {
    canonical: "/agency",
  },
  openGraph: {
    title: "White-Label Development Services | deepakj.",
    description:
      "Scale your agency's development capacity with Next.js and Shopify, strictly under NDA.",
    url: "/agency",
  },
};

export default function AgencyPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${SITE_URL}/agency#service`,
    name: "White-Label Development Services",
    provider: {
      "@id": `${SITE_URL}/#person`,
    },
    areaServed: "Global",
    serviceType: "White-Label Web Development",
    // Hourly rate, expressed as a proper UnitPriceSpecification rather
    // than a flat price — a bare `price` field would tell Google the
    // whole service costs $45, not that it's the hourly rate.
    offers: {
      "@type": "Offer",
      priceSpecification: {
        "@type": "UnitPriceSpecification",
        price: "45.00",
        priceCurrency: "USD",
        unitCode: "HUR",
      },
      priceValidUntil: "2026-12-31",
      availability: "https://schema.org/InStock",
    },
    // aggregateRating and review removed. reviewCount: "50" had no basis
    // anywhere in this project, and the one review was a quote attributed
    // to Filip J (MerkBart's founder, a direct e-commerce client) that
    // doesn't match his real, documented testimonial and doesn't fit an
    // agency-partnership context at all. Fabricating structured review
    // data, or misattributing a real quote out of context to a real
    // named person, isn't a "fix it later" issue — see the note in chat.
  };

  const features = [
    {
      number: "01",
      title: "100% White-Labeled",
      description:
        'Strict NDA compliance. I use your email domain, jump on client calls as your "Lead Engineer," and never claim the work publicly.',
    },
    {
      number: "02",
      title: "Seamless Integration",
      description:
        "I drop right into your existing workflows. Add me to your Slack, Jira, or Asana and I operate exactly like an in-house team member.",
    },
    {
      number: "03",
      title: "Agency-Grade Code",
      description:
        "I deliver clean, documented, component-based architectures that your juniors can easily maintain long after handoff.",
    },
  ];

  const steps = [
    {
      number: "01",
      title: "The Scope",
      description:
        "We pick a small-to-medium project. I review your Figma and provide a fixed-price quote and timeline.",
    },
    {
      number: "02",
      title: "Integration",
      description:
        "I join your Slack channel, set up the staging server, and establish the CI/CD pipeline for total visibility.",
    },
    {
      number: "03",
      title: "Execution",
      description:
        "I build the project, providing async updates. No chasing required. You get a pixel-perfect staging link.",
    },
    {
      number: "04",
      title: "Handoff & Partnership",
      description:
        "Strict QA, launch, and code documentation. If you love the result, we discuss a retainer or ongoing flow.",
    },
  ];

  const tiers = [
    {
      label: null,
      title: "Project-Based",
      description:
        "Best for agencies needing overflow capacity on a specific client build.",
      points: [
        "Fixed-price quotes (protects your margin)",
        "Guaranteed delivery timelines",
        "30 days of post-launch bug support",
      ],
    },
    {
      label: "Recommended",
      title: "Fractional Retainer",
      description:
        "Best for agencies needing a reliable, ongoing technical lead.",
      points: [
        "Dedicated weekly hours/availability",
        "Client-facing calls included",
        "Priority turnaround on all tasks",
      ],
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
        <div className="flex items-center gap-3 animate-fade-in-up">
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
          <span className="label">Accepting 2 New Agency Partners</span>
        </div>

        <h1
          className="mt-6 max-w-2xl animate-fade-in-up [animation-delay:100ms]"
          style={{ fontWeight: "var(--weight-display-black)" }}
        >
          Your silent, senior-level{" "}
          <span className="accent">technical partner.</span>
        </h1>

        <p className="body-lg mt-6 max-w-xl animate-fade-in-up [animation-delay:200ms]">
          Scale your output without hiring overhead. I build high-performance
          Shopify Plus and Next.js sites under your brand, strictly under NDA.
        </p>

        <div className="mt-10 animate-fade-in-up [animation-delay:300ms]">
          <ContactModal
            triggerText="Discuss a Pilot Project"
            triggerStyle="btn btn-primary"
            title="Discuss a Pilot Project."
            subtitle="Let's test the waters. Send me the details of a small, fixed-price build."
            subject="Agency Pilot Project Inquiry"
            fields={[
              {
                name: "name",
                label: "Name / Agency",
                type: "text",
                required: true,
              },
              { name: "email", label: "Email", type: "email", required: true },
              {
                name: "techStack",
                label: "Tech Stack",
                type: "text",
                placeholder: "Next.js, Shopify, WordPress, etc.",
                required: true,
              },
              {
                name: "message",
                label: "Pilot Scope",
                type: "textarea",
                placeholder:
                  "What's the project, and what's the expected timeline?",
                required: true,
              },
            ]}
            calTitle="Skip to a quick chat."
            calSubtitle="Grab 15 minutes to discuss the pilot scope and my current availability."
          />
        </div>

        {/* Testimonial */}
        <div className="mt-16 max-w-xl border-t border-[color:var(--color-line)] pt-8 animate-fade-in-up [animation-delay:400ms]">
          <span className="label">Client Note</span>
          <p className="mt-4 text-[length:var(--text-display-sm)] leading-[1.6]">
            &ldquo;3+ years working with Deepak. He converts vague client ideas
            into functional websites — zero hand-holding required.&rdquo;
          </p>
          <p className="body-sm mt-4">
            <span
              style={{
                fontWeight: "var(--weight-display-bold)",
                color: "var(--color-ink)",
              }}
            >
              Dev Kumar A.
            </span>{" "}
            &mdash; Business Manager @ NXPRO
          </p>
        </div>
      </section>

      <SocialProof />

      {/* Why me */}
      <section className="border-b border-[color:var(--color-line)]">
        <div className="grid grid-cols-1 md:grid-cols-3">
          {features.map((feature, index) => (
            <div
              key={feature.number}
              className={`animate-fade-in-up border-[color:var(--color-line)] px-[clamp(2.5rem,4vw,4rem)] py-14 lg:py-20 ${
                index < 2 ? "border-b md:border-b-0 md:border-r" : ""
              }`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <span className="stat-number text-[1.5rem] text-[color:var(--color-muted)]">
                {feature.number}
              </span>
              <h3 className="mt-5">{feature.title}</h3>
              <p className="body-sm mt-3">{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Process */}
      <section className="border-b border-[color:var(--color-line)] px-[clamp(2.5rem,4vw,4rem)] py-16 lg:py-24">
        <span className="label animate-fade-in-up">The Process</span>
        <h2 className="mt-4 max-w-xl animate-fade-in-up [animation-delay:100ms]">
          How the Pilot Project works.
        </h2>
        <p className="body-lg mt-4 max-w-md animate-fade-in-up [animation-delay:200ms]">
          Testing the waters with zero long-term risk.
        </p>

        <div className="mt-12 grid grid-cols-1 border-t border-[color:var(--color-line)] sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => (
            <div
              key={step.number}
              className={`animate-fade-in-up py-8 ${
                index % 2 !== 0
                  ? "sm:border-l sm:border-[color:var(--color-line)] sm:pl-8"
                  : ""
              } ${index < steps.length - 2 ? "border-b sm:border-b-0 border-[color:var(--color-line)]" : ""} ${
                index === 2 ? "lg:border-l lg:pl-8" : ""
              }`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <span className="stat-number text-[1.5rem]">{step.number}</span>
              <h4 className="mt-4">{step.title}</h4>
              <p className="body-sm mt-3">{step.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section className="border-b border-[color:var(--color-line)] px-[clamp(2.5rem,4vw,4rem)] py-16 lg:py-24">
        <span className="label animate-fade-in-up">Transparent Engagement</span>
        <h2 className="mt-4 max-w-xl animate-fade-in-up [animation-delay:100ms]">
          No hidden hours, no bloated agency fees.
        </h2>

        <div className="mt-12 grid grid-cols-1 border-t border-[color:var(--color-line)] md:grid-cols-2">
          {tiers.map((tier, index) => (
            <div
              key={tier.title}
              className={`animate-fade-in-up border-[color:var(--color-line)] py-10 md:py-14 ${
                index === 0
                  ? "border-b md:border-b-0 md:border-r md:pr-12"
                  : "md:pl-12"
              }`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {tier.label && <span className="label">{tier.label}</span>}
              <h3 className={tier.label ? "mt-3" : ""}>{tier.title}</h3>
              <p className="body-md mt-3 max-w-sm">{tier.description}</p>

              <ul className="mt-8 flex flex-col gap-3 border-t border-[color:var(--color-line)] pt-6">
                {tier.points.map((point) => (
                  <li key={point} className="body-sm flex items-baseline gap-3">
                    <span className="font-[family-name:var(--font-mono)] text-[color:var(--color-accent)]">
                      &mdash;
                    </span>
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Final CTA */}
      <section id="contact" className="surface-inverted">
        <div className="px-[clamp(2.5rem,4vw,4rem)] py-20 text-center lg:py-28">
          <h2 className="mx-auto max-w-2xl text-[color:var(--color-ink-surface-text)] animate-fade-in-up [animation-delay:100ms]">
            Ready to scale <span className="accent">without hiring?</span>
          </h2>
          <p className="body-lg mx-auto mt-6 max-w-md animate-fade-in-up [animation-delay:200ms]">
            Send me a message with a brief overview of your agency and current
            overflow needs. I&rsquo;ll get back to you within 24 hours to
            schedule a quick alignment call.
          </p>
          <div className="mt-10 flex justify-center animate-fade-in-up [animation-delay:300ms]">
            <ContactModal
              triggerText="Book Free Alignment Call"
              triggerStyle="btn btn-primary"
              title="Book an Alignment Call."
              subtitle="Let's discuss your agency's workflow and overflow needs."
              subject="Agency Alignment Call Request"
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
                  name: "volume",
                  label: "Monthly Volume / Team Size",
                  type: "text",
                  placeholder: "e.g. 2-3 client builds per month",
                  required: false,
                },
                {
                  name: "message",
                  label: "Agency Details",
                  type: "textarea",
                  placeholder:
                    "What is your current stack, and what kind of overflow work are you looking to offload?",
                  required: true,
                },
              ]}
              calTitle="Ready to lock in a time?"
              calSubtitle="Pick a slot on my calendar to discuss how I can slot in as your technical partner."
            />
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
