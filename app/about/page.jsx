import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactModal from "@/components/ContactModal";
import { SITE_URL, CONTACT_EMAIL, SAME_AS, KNOWS_ABOUT } from "@/lib/site";

export const metadata = {
  title: "deepakj. | Shopify Plus Developer | 9 Years Experience",
  description:
    "deepakj. is a Shopify Plus developer with 9 years of experience. Custom apps, checkout extensions, headless storefronts, and store rescues for scaling merchants.",
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    title: "deepakj. | Shopify Plus Developer",
    description:
      "9 years building custom apps, checkout extensions, and headless storefronts for scaling Shopify Plus merchants.",
    url: `${SITE_URL}/about`,
    siteName: "deepakj.",
    images: [
      {
        url: `${SITE_URL}/headshot.png`,
        width: 800,
        height: 800,
        alt: "deepakj. - Shopify Plus Developer",
      },
    ],
    locale: "en_US",
    type: "profile",
    profile: {
      firstName: "Deepak",
      lastName: "Jangra",
    },
  },
  twitter: {
    card: "summary_large_image",
    title: "deepakj. | Shopify Plus Developer",
    // TODO: "100+ projects" — same unverified claim flagged on /work.
    // Confirm the real count before this ships; keep it consistent across
    // every page that states it.
    description: "9 years, 100+ projects, Shopify Plus merchants",
    images: [`${SITE_URL}/headshot.png`],
  },
};

export default function AboutPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": `${SITE_URL}/#person`,
        name: "deepakj.",
        givenName: "Deepak",
        familyName: "Jangra",
        jobTitle: "Shopify Plus Developer",
        description:
          "Shopify Plus developer with 9+ years of experience building custom apps, checkout extensions, and headless storefronts for scaling merchants.",
        url: SITE_URL,
        image: {
          "@type": "ImageObject",
          url: `${SITE_URL}/headshot.png`,
          width: 800,
          height: 800,
        },
        knowsAbout: KNOWS_ABOUT,
        worksFor: {
          "@id": `${SITE_URL}/#organization`,
        },
        alumniOf: {
          "@type": "Organization",
          name: "NXPRO",
        },
        sameAs: SAME_AS,
      },
      {
        "@type": "WebPage",
        "@id": `${SITE_URL}/about#webpage`,
        name: "About deepakj.",
        description:
          "9+ year journey building high-performance web applications",
        url: `${SITE_URL}/about`,
        mainEntity: {
          "@id": `${SITE_URL}/#person`,
        },
      },
    ],
  };

  const timeline = [
    {
      year: "2023 — Present",
      role: "Independent Shopify Plus Developer",
      description:
        "Working directly with scaling merchants on custom builds, checkout extensions, and store rescues. Building GearSync, a Shopify app for auto parts merchants. Supporting select agency partners on Plus-level projects.",
      current: true,
    },
    {
      year: "2022 — 2023",
      role: "Senior Web Developer @ NXPRO",
      description:
        "Led a team of 3 and oversaw high-stakes Shopify and WordPress projects. Introduced Git-based workflows and improved delivery speed by 40%.",
    },
    {
      year: "2019 — 2021",
      role: "White-Label Partner @ NXPRO",
      description:
        "Built 50+ projects using Shopify and WordPress. Custom themes, plugins, and reusable components. Scaled the development offering from 1 to 5 simultaneous projects.",
    },
    {
      year: "2019",
      role: "Independent Freelancer",
      description:
        "Delivered 15+ websites for local businesses. Expanded into Shopify, custom PHP, and JavaScript. Built ecommerce stores, landing pages, and business sites, handling everything from UI to deployment.",
    },
    {
      year: "2017 — 2018",
      role: "Junior Web Developer",
      description:
        "Created 10+ responsive WordPress websites from scratch. Custom PHP and JavaScript features. Deep exposure to theme and plugin development.",
    },
    {
      year: "2016",
      role: "Where it began",
      description:
        "Discovered domain and hosting platforms. Built static sites with HTML and CSS. Realized I enjoyed making things that other people used to make money.",
    },
  ];

  const principles = [
    {
      number: "01",
      title: "I don't install apps and hope.",
      description:
        "Most Shopify merchants hit a wall where themes and apps can't do what they need. I build the custom layer — private apps, checkout extensions, headless architectures — that lets them scale without replatforming.",
    },
    {
      number: "02",
      title: "I treat your store like it's mine.",
      description:
        "I've built my own Shopify app (GearSync) and managed stores that process real transactions. I understand that every millisecond of load time and every broken checkout flow costs you money.",
    },
    {
      number: "03",
      title: "I document everything.",
      description:
        "You shouldn't be dependent on me forever. I write clean code, set up staging environments, and hand over documentation so your team — or the next developer — can pick up where I left off.",
    },
    {
      number: "04",
      title: "I don't disappear.",
      description:
        'Weekly async updates. A staging link that always works. Direct communication, no account managers, no junior devs passed off as "the team."',
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
      <section className="border-b border-[color:var(--color-line)]">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <div className="flex flex-col justify-center border-b border-[color:var(--color-line)] px-[clamp(2.5rem,4vw,4rem)] py-14 lg:border-b-0 lg:border-r lg:py-20">
            <span className="label animate-fade-in-up [animation-delay:100ms]">
              About
            </span>
            <h1
              className="mt-4 max-w-lg animate-fade-in-up [animation-delay:200ms]"
              style={{ fontWeight: "var(--weight-display-black)" }}
            >
              9 years of <span className="accent">engineering the web.</span>
            </h1>

            <p className="body-lg mt-6 max-w-md animate-fade-in-up [animation-delay:300ms]">
              I&rsquo;m Deepak, a Shopify Plus developer with 9 years of
              experience. I help merchants who&rsquo;ve outgrown their theme fix
              what&rsquo;s broken, scale what&rsquo;s working, and build what
              off-the-shelf apps can&rsquo;t touch.
            </p>

            <p className="body-lg mt-4 max-w-md animate-fade-in-up [animation-delay:350ms]">
              Before going independent, I led development teams and shipped 100+
              projects for agencies and direct clients across the UK, US,
              Norway, and India. Now I work directly with Shopify Plus merchants
              and select agency partners.
            </p>

            {/* Photo — mobile only, sits between copy and links */}
            <div className="mt-10 flex justify-center lg:hidden animate-fade-in-up [animation-delay:400ms]">
              <div className="relative aspect-[3/4] w-full max-w-[320px] overflow-hidden border border-[color:var(--color-line)] bg-[var(--color-ink-surface)]">
                <Image
                  src="/AAdeepak.png"
                  alt="Deepak Jangra, Shopify Plus developer"
                  fill
                  priority
                  className="object-cover grayscale transition-[filter] duration-500 hover:grayscale-0"
                />
              </div>
            </div>

            <div className="mt-10 animate-fade-in-up [animation-delay:500ms]">
              <a
                href="https://linkedin.com/in/thedeepakjangra/"
                target="_blank"
                rel="noopener noreferrer"
                className="ui-text link-row link-underline text-[color:var(--color-ink)]"
              >
                <svg
                  className="h-4 w-4"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
                <span className="link-underline">Connect on LinkedIn</span>
              </a>
            </div>
          </div>

          {/* Photo — desktop only */}
          <div className="hidden items-center justify-center p-14 lg:flex animate-fade-in-up [animation-delay:400ms]">
            <div className="relative aspect-[3/4] w-full max-w-[360px] overflow-hidden border border-[color:var(--color-line)] bg-[var(--color-ink-surface)]">
              <Image
                src="/AAdeepak.png"
                alt="Deepak Jangra, Shopify Plus developer"
                fill
                priority
                className="object-cover grayscale transition-[filter] duration-500 hover:grayscale-0"
              />
            </div>
          </div>
        </div>
      </section>

      <span className="sr-only">
        I&rsquo;m deepakj., a Shopify Plus developer with 9 years of experience.
        I help merchants who&rsquo;ve outgrown their theme fix what&rsquo;s
        broken, scale what&rsquo;s working, and build custom apps, checkout
        extensions, and headless storefronts that off-the-shelf apps can&rsquo;t
        touch.
      </span>

      {/* Timeline */}
      <section className="border-b border-[color:var(--color-line)] px-[clamp(2.5rem,4vw,4rem)] py-16 lg:py-24">
        <span className="label animate-fade-in-up">The Journey</span>
        <h2 className="mt-4 max-w-lg animate-fade-in-up [animation-delay:100ms]">
          A decade of building the web.
        </h2>

        <div className="mt-12 max-w-3xl border-t border-[color:var(--color-line)]">
          {timeline.map((item, index) => (
            <div
              key={item.year}
              className="animate-fade-in-up grid grid-cols-1 gap-2 border-b border-[color:var(--color-line)] py-8 sm:grid-cols-[180px_1fr] sm:gap-8"
              style={{ animationDelay: `${150 + index * 80}ms` }}
            >
              <span className={item.current ? "label" : "stat-caption"}>
                {item.year}
                {item.current ? " · Current" : ""}
              </span>
              <div>
                <h4>{item.role}</h4>
                <p className="body-sm mt-2 max-w-lg">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <span className="sr-only">
        deepakj. is a Shopify Plus developer specializing in custom apps,
        checkout extensions, headless storefronts, and store rescues. 9 years
        experience. 100+ projects delivered.
      </span>

      {/* What I actually do */}
      <section className="border-b border-[color:var(--color-line)]">
        <div className="border-b border-[color:var(--color-line)] px-[clamp(2.5rem,4vw,4rem)] py-14 lg:py-20">
          <span className="label animate-fade-in-up">How I Work</span>
          <h2 className="mt-4 max-w-lg animate-fade-in-up [animation-delay:100ms]">
            What I actually do.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2">
          {principles.map((item, index) => (
            <div
              key={item.number}
              className={`animate-fade-in-up border-[color:var(--color-line)] px-[clamp(2.5rem,4vw,4rem)] py-10 lg:py-14 ${
                index % 2 === 0 ? "md:border-r" : ""
              } ${index < 2 ? "border-b" : ""}`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <span className="stat-number text-[1.5rem] text-[color:var(--color-muted)]">
                {item.number}
              </span>
              <h3 className="mt-5 max-w-sm">{item.title}</h3>
              <p className="body-sm mt-3 max-w-sm">{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Final CTA */}
      <section className="surface-inverted">
        <div className="px-[clamp(2.5rem,4vw,4rem)] py-20 text-center lg:py-28">
          <h2 className="mx-auto max-w-2xl text-[color:var(--color-ink-surface-text)] animate-fade-in-up [animation-delay:100ms]">
            Ready to fix or scale your{" "}
            <span className="accent">Shopify Plus store?</span>
          </h2>
          <p className="body-lg mx-auto mt-6 max-w-md animate-fade-in-up [animation-delay:200ms]">
            Not sure if your store needs a rescue or a rebuild? I&rsquo;ll tell
            you honestly. Send me your store URL and I&rsquo;ll reply with what
            I&rsquo;d fix first, no pitch, no obligation.
          </p>

          <div className="mt-10 flex flex-col items-center gap-6 animate-fade-in-up [animation-delay:300ms] sm:flex-row sm:justify-center">
            <ContactModal
              triggerText="Get a Free Store Audit"
              triggerStyle="btn btn-primary"
              title="Send me your store URL."
              subtitle="I'll reply with what I'd fix first. No pitch, no obligation."
              subject="Free Store Audit Request (From About Page)"
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
                  label: "Store URL",
                  type: "url",
                  placeholder: "https://yourstore.com",
                  required: true,
                },
                {
                  name: "message",
                  label: "Anything else I should know?",
                  type: "textarea",
                  placeholder:
                    "Rescue, rebuild, or just not sure yet — tell me where you're at.",
                  required: false,
                },
              ]}
              calTitle="Want to talk it through instead?"
              calSubtitle="Grab 15 minutes and we'll go over what I'd fix first."
            />
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              target="_blank"
              rel="noopener noreferrer"
              className="ui-text link-underline text-[color:var(--color-ink-surface-text)]"
            >
              Email Me Directly
            </a>
          </div>

          <Link
            href="/agency"
            className="ui-text link-underline mt-10 inline-block text-[color:var(--color-ink-surface-muted)] animate-fade-in-up [animation-delay:400ms]"
          >
            I also partner with select agencies on white-label development.
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}
