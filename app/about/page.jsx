import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactModal from "@/components/ContactModal";
import { SITE_URL, CONTACT_EMAIL, SAME_AS, KNOWS_ABOUT } from "@/lib/site";

export const metadata = {
  title: "Deepak Jangra | Shopify Plus Developer | 9 Years Experience",
  description:
    "Deepak Jangra is a Shopify Plus developer with 9 years of experience. Custom apps, checkout extensions, headless storefronts, and store rescues for scaling merchants.",
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    title: "Deepak Jangra | Shopify Plus Developer",
    description:
      "9 years building custom apps, checkout extensions, and headless storefronts for scaling Shopify Plus merchants.",
    url: `${SITE_URL}/about`,
    siteName: "Deepak Jangra",
    images: [
      {
        url: `${SITE_URL}/headshot.png`,
        width: 800,
        height: 800,
        alt: "Deepak Jangra - Shopify Plus Developer",
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
    title: "Deepak Jangra | Shopify Plus Developer",
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
        name: "Deepak Jangra",
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
        name: "About Deepak Jangra",
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
      year: "2023 - Present",
      role: "Independent Shopify Plus Developer",
      description:
        "Working directly with scaling merchants on custom builds, checkout extensions, and store rescues. Building GearSync, a Shopify app for auto parts merchants. Supporting select agency partners on Plus-level projects.",
      highlight: true,
    },
    {
      year: "2022 - 2023",
      role: "Senior Web Developer @ NXPRO",
      description:
        "Led a team of 3 and oversaw high-stakes Shopify and WordPress projects. Introduced Git-based workflows and improved delivery speed by 40%.",
    },
    {
      year: "2019 - 2021",
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
      year: "2017 - 2018",
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

  return (
    <main className="min-h-screen bg-white text-slate-900 selection:bg-indigo-100 selection:text-indigo-900">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navbar />

      {/* 1. HERO SECTION */}
      <section className="relative pt-40 pb-20 lg:pt-48 lg:pb-32 overflow-hidden border-b border-slate-100">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#f8fafc_1px,transparent_1px),linear-gradient(to_bottom,#f8fafc_1px,transparent_1px)] bg-size-[4rem_4rem]"></div>

        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10 flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          <div className="flex-1 text-left">
            <h1 className="animate-fade-in-up [animation-delay:100ms] text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight mb-5 sm:mb-6 leading-[1.1] text-slate-900">
              9 years of <br className="hidden md:block" />
              <span className="text-transparent bg-clip-text bg-linear-to-r from-indigo-600 to-blue-500">
                engineering the web.
              </span>
            </h1>

            <p className="animate-fade-in-up [animation-delay:200ms] text-base sm:text-lg lg:text-xl text-slate-600 mb-4 leading-relaxed max-w-2xl mx-0">
              I'm Deepak, a Shopify Plus developer with 9 years of experience. I
              help merchants who've outgrown their theme fix what's broken,
              scale what's working, and build what off-the-shelf apps can't
              touch.
            </p>

            <p className="animate-fade-in-up [animation-delay:225ms] text-base sm:text-lg lg:text-xl text-slate-600 mb-8 leading-relaxed max-w-2xl mx-0">
              Before going independent, I led development teams and shipped 100+
              projects for agencies and direct clients across the UK, US,
              Norway, and India. Now I work directly with Shopify Plus merchants
              and select agency partners.
            </p>

            <div className="flex-1 lg:hidden w-full max-w-md mx-0 lg:max-w-none relative animate-fade-in-up [animation-delay:400ms] mb-12">
              <div className="relative aspect-square rounded-4xl overflow-hidden border border-slate-200 md:shadow-2xl bg-white">
                <Image
                  src="/AAdeepak.png"
                  alt="Deepak Jangra"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>

            <div className="animate-fade-in-up [animation-delay:300ms] flex flex-wrap items-center justify-start gap-4">
              <a
                href="https://linkedin.com/in/thedeepakjangra/"
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-3 text-sm md:text-base rounded-xl bg-slate-50 border border-slate-200 text-slate-700 font-bold hover:bg-slate-100 transition-colors flex items-center gap-2 shadow-sm"
              >
                <svg
                  className="w-5 h-5 text-blue-600"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
                Connect on LinkedIn
              </a>
            </div>
          </div>

          <div className="hidden lg:block flex-1 w-full max-w-md mx-auto lg:max-w-none relative animate-fade-in-up [animation-delay:400ms]">
            <div className="relative aspect-square rounded-4xl overflow-hidden border border-slate-200 shadow-2xl bg-white">
              <Image
                src="/AAdeepak.png"
                alt="Deepak Jangra"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      <span className="sr-only">
        I'm Deepak Jangra, a Shopify Plus developer with 9 years of experience.
        I help merchants who've outgrown their theme fix what's broken, scale
        what's working, and build custom apps, checkout extensions, and headless
        storefronts that off-the-shelf apps can't touch.
      </span>

      {/* 2. THE EXPERIENCE TIMELINE */}
      <section className="py-24 lg:py-32 bg-slate-50 border-b border-slate-200 relative">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="text-left sm:text-center mb-16 lg:mb-24">
            <h2 className="text-sm font-semibold text-indigo-600 tracking-widest uppercase mb-3">
              The Journey
            </h2>
            <h3 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-tight">
              A decade of building the web.
            </h3>
          </div>

          <div className="relative border-l-2 border-slate-200 ml-4 md:ml-0 md:border-l-0">
            {/* Desktop Center Line */}
            <div className="hidden md:block absolute top-0 bottom-0 left-1/2 w-0.5 bg-slate-200 -translate-x-1/2"></div>

            <div className="space-y-12 lg:space-y-0">
              {timeline.map((item, index) => {
                const isEven = index % 2 === 0;
                return (
                  <div
                    key={index}
                    className="relative flex flex-col md:flex-row items-start md:items-center w-full group"
                  >
                    {/* The Dot */}
                    <div className="absolute -left-1.25 md:left-1/2 w-3 h-3 bg-white border-2 border-slate-300 rounded-full md:-translate-x-1/2 mt-1.5 md:mt-0 group-hover:border-indigo-600 group-hover:bg-indigo-600 transition-colors duration-300 z-10">
                      {item.highlight && (
                        <div className="absolute inset-0 rounded-full bg-indigo-600 animate-ping opacity-20"></div>
                      )}
                    </div>

                    {/* Content Block */}
                    <div
                      className={`w-full md:w-1/2 pl-8 md:pl-0 ${isEven ? "md:pr-16 md:text-right" : "md:pl-16 md:ml-auto"}`}
                    >
                      <div
                        className={`p-6 md:p-8 rounded-3xl transition-all duration-300 ${item.highlight ? "bg-white shadow-xl shadow-indigo-500/5 border border-indigo-100" : "hover:bg-white hover:shadow-lg border border-transparent hover:border-slate-200"}`}
                      >
                        <span
                          className={`inline-block px-3 py-1 rounded-full text-xs font-bold mb-4 tracking-widest uppercase ${item.highlight ? "bg-indigo-100 text-indigo-700" : "bg-slate-100 text-slate-500"}`}
                        >
                          {item.year}
                        </span>
                        <h4 className="text-xl font-bold text-slate-900 mb-3 leading-snug group-hover:text-indigo-600 transition-colors">
                          {item.role}
                        </h4>
                        <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <span className="sr-only">
        Deepak Jangra is a Shopify Plus developer specializing in custom apps,
        checkout extensions, headless storefronts, and store rescues. 9 years
        experience. 100+ projects delivered.
      </span>

      {/* 3. WHAT I ACTUALLY DO */}
      <section className="py-24 lg:py-32 bg-white relative border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-left sm:text-center max-w-2xl mx-0 sm:mx-auto mb-16 lg:mb-20">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
              What I actually do.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            <div className="p-8 rounded-3xl bg-slate-50 border border-slate-100">
              <div className="w-12 h-12 bg-white rounded-xl shadow-sm border border-slate-200 flex items-center justify-center mb-6 text-indigo-600">
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                  ></path>
                </svg>
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-slate-900 mb-3 leading-snug">
                I don't install apps and hope.
              </h3>
              <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
                Most Shopify merchants hit a wall where themes and apps can't do
                what they need. I build the custom layer, private apps, checkout
                extensions, headless architectures, that lets them scale without
                replatforming.
              </p>
            </div>

            <div className="p-8 rounded-3xl bg-slate-50 border border-slate-100">
              <div className="w-12 h-12 bg-white rounded-xl shadow-sm border border-slate-200 flex items-center justify-center mb-6 text-indigo-600">
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  ></path>
                </svg>
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-slate-900 mb-3 leading-snug">
                I treat your store like it's mine.
              </h3>
              <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
                I've built my own Shopify app (GearSync) and managed stores that
                process real transactions. I understand that every millisecond
                of load time and every broken checkout flow costs you money.
              </p>
            </div>

            <div className="p-8 rounded-3xl bg-slate-50 border border-slate-100">
              <div className="w-12 h-12 bg-white rounded-xl shadow-sm border border-slate-200 flex items-center justify-center mb-6 text-indigo-600">
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                  ></path>
                </svg>
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-slate-900 mb-3 leading-snug">
                I document everything.
              </h3>
              <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
                You shouldn't be dependent on me forever. I write clean code,
                set up staging environments, and hand over documentation so your
                team (or the next developer) can pick up where I left off.
              </p>
            </div>

            <div className="p-8 rounded-3xl bg-slate-50 border border-slate-100">
              <div className="w-12 h-12 bg-white rounded-xl shadow-sm border border-slate-200 flex items-center justify-center mb-6 text-indigo-600">
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                  ></path>
                </svg>
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-slate-900 mb-3 leading-snug">
                I don't disappear.
              </h3>
              <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
                Weekly async updates. A staging link that always works. Direct
                communication, no account managers, no junior devs passed off as
                "the team."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. FINAL CTA */}
      <section className="relative py-24 lg:py-32 bg-slate-950 overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-size-[4rem_4rem] opacity-20"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-150 h-150 bg-indigo-600/20 rounded-full blur-[120px] pointer-events-none"></div>

        <div className="relative z-10 max-w-3xl mx-0 sm:mx-auto px-6 lg:px-8 text-left sm:text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight mb-6 animate-fade-in-up [animation-delay:100ms] leading-tight">
            Ready to fix or scale your <br className="hidden sm:block" />
            <span className="text-transparent bg-clip-text bg-linear-to-r from-indigo-400 to-blue-400">
              Shopify Plus store?
            </span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-slate-400 mb-10 leading-relaxed max-w-xl mx-0 sm:mx-auto">
            Not sure if your store needs a rescue or a rebuild? I'll tell you
            honestly. Send me your store URL and I'll reply with what I'd fix
            first, no pitch, no obligation.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-start sm:justify-center gap-4">
            <ContactModal
              triggerText="Get a Free Store Audit"
              triggerStyle="w-full sm:w-auto flex items-center justify-center gap-2 cursor-pointer px-8 py-4 text-base font-bold text-slate-900 bg-white rounded-xl hover:bg-slate-200 transition-colors"
              title="Send me your store URL."
              subtitle="I'll reply with what I'd fix first. No pitch, no obligation."
              subject="Free Store Audit Request (From About Page)"
              inputLabel="Store URL"
              inputPlaceholder="https://yourstore.com. Anything else I should know?"
              calTitle="Want to talk it through instead?"
              calSubtitle="Grab 15 minutes and we'll go over what I'd fix first."
            />
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-8 py-4 text-base font-semibold text-white bg-slate-800/50 border border-slate-700 rounded-xl hover:bg-slate-700 hover:border-slate-600 transition-all duration-300 flex items-center justify-center gap-2"
            >
              Email Me Directly
            </a>
          </div>

          <Link
            href="/agency"
            className="mt-8 inline-block text-sm text-slate-500 hover:text-slate-300 transition-colors underline-offset-4 hover:underline"
          >
            I also partner with select agencies on white-label development.
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}
