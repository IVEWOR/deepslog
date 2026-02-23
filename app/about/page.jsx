import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactModal from "@/components/ContactModal";

export const metadata = {
  title: "Deepak Jangra | Senior Full-Stack Developer | 9 Years Experience",
  description:
    "Full-stack developer specializing in Shopify, WordPress, and React/Next.js. 100+ projects, 40% faster delivery. White-label agency partner. Former senior dev at NXPRO.",
  alternates: {
    canonical: "https://deepslog.com/about", // Full URL, not relative
  },
  openGraph: {
    title: "Deepak Jangra | 9 Years Engineering the Web",
    description:
      "Senior developer for ambitious agencies. White-label partner, AI rescue specialist, performance optimizer.",
    url: "https://deepslog.com/about",
    siteName: "Deepak Jangra",
    images: [
      {
        url: "https://deepslog.com/headshot.png", // Full URL
        width: 800,
        height: 800,
        alt: "Deepak Jangra - Full-Stack Developer",
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
    title: "Deepak Jangra | Senior Full-Stack Developer",
    description: "9 years, 100+ projects, 40% faster delivery",
    images: ["https://deepslog.com/headshot.png"],
  },
};

export default function AboutPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": "https://deepslog.com/#person",
        name: "Deepak Jangra",
        givenName: "Deepak",
        familyName: "Jangra",
        jobTitle: "Senior Full-Stack Developer",
        description: "Full-stack developer with 9+ years experience...",
        url: "https://deepslog.com",
        image: {
          "@type": "ImageObject",
          url: "https://deepslog.com/headshot.png",
          width: 800,
          height: 800,
        },
        knowsAbout: [
          {
            "@type": "Thing",
            name: "Vibe Coding Cleanup",
            description:
              "Refactoring AI-generated code from tools like Cursor and Copilot",
          },
          {
            "@type": "Thing",
            name: "AI Code Rescue",
            description: "Stabilizing AI-built MVPs for production deployment",
          },
          "React.js",
          "Next.js",
          "Node.js",
          "Shopify Development",
          "WordPress Development",
          "Web Performance Optimization",
          "White-Label Development",
        ],
        // END HERE ↑↑↑
        worksFor: {
          "@id": "https://deepslog.com/#organization",
        },
        alumniOf: {
          "@type": "Organization",
          name: "NXPRO",
        },
        sameAs: [
          "https://www.linkedin.com/in/deepakjangra",
          "https://github.com/IVEWOR",
        ],
        hasOccupation: {
          "@type": "Occupation",
          name: "Full-Stack Developer",
          skills: "React, Next.js, Shopify, WordPress, Node.js",
        },
      },
      {
        "@type": "WebPage",
        "@id": "https://deepslog.com/about#webpage",
        name: "About Deepak Jangra",
        description:
          "9+ year journey building high-performance web applications",
        url: "https://deepslog.com/about",
        mainEntity: {
          "@id": "https://deepslog.com/#person",
        },
      },
    ],
  };

  const timeline = [
    {
      year: "2023 - Present",
      role: "Founder, White-Label Dev Agency",
      description:
        "Launched my own white-label development agency. Partnered with SEO and marketing firms to deliver custom full-stack solutions — from advanced WordPress builds to Shopify apps to scalable Next.js architectures. Currently supporting 12+ clients across 3 countries.",
      highlight: true,
    },
    {
      year: "2022 - 2023",
      role: "Senior Web Developer @ NXPRO",
      description:
        "Returned to NXPRO in a senior leadership role. Led a development team of 3 and improved delivery speed by 40%. Oversaw high-stakes WordPress and Shopify projects, introduced Git-based workflows, and helped boost revenue by 700% through better tech processes.",
    },
    {
      year: "2019 - 2021",
      role: "White-Label Partner @ NXPRO",
      description:
        "Joined as a white-label web developer. Worked on 50+ projects using WordPress and Shopify. Built custom themes, plugins, and reusable components. Scaled their development offering from 1 to 5 simultaneous projects.",
    },
    {
      year: "2019",
      role: "Independent Freelancer",
      description:
        "Started my freelance journey, delivering 15+ websites for local businesses. Expanded my stack to Shopify, custom PHP, and JavaScript. Built ecommerce stores, landing pages, and business sites — handling everything from UI to deployment.",
    },
    {
      year: "2017 - 2018",
      role: "Junior Web Developer",
      description:
        "Hired as a Junior WordPress Developer. Created 10+ responsive websites from scratch, implemented custom features using PHP and JavaScript, and gained deep exposure to theme and plugin development.",
    },
    {
      year: "2016",
      role: "Where it began",
      description:
        "My journey into tech began with curiosity. Discovered domain and hosting platforms and started building static sites using HTML and CSS. This sparked a deep interest in how the web works.",
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
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#f8fafc_1px,transparent_1px),linear-gradient(to_bottom,#f8fafc_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>

        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10 flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          <div className="flex-1 text-center lg:text-left">
            <h1 className="animate-fade-in-up [animation-delay:100ms] text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight mb-6 leading-[1.1] text-slate-900">
              9 years of <br className="hidden md:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-blue-500">
                engineering the web.
              </span>
            </h1>

            <p className="animate-fade-in-up [animation-delay:200ms] text-lg md:text-xl text-slate-600 mb-8 leading-relaxed max-w-2xl mx-auto lg:mx-0">
              I am a full-stack developer specializing in Shopify, WordPress, &
              custom React/Next.js builds. I partner with agencies & individuals
              to deliver beautiful, fast, and highly scalable architectures
              under strict NDA.
            </p>

            <div className="flex-1 lg:hidden w-full max-w-md mx-auto lg:max-w-none relative animate-fade-in-up [animation-delay:400ms] mb-12">
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

            <div className="animate-fade-in-up [animation-delay:300ms] flex flex-wrap items-center justify-center lg:justify-start gap-4">
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
              <a
                href="https://github.com/IVEWOR"
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-3 text-sm md:text-base rounded-xl bg-slate-50 border border-slate-200 text-slate-700 font-bold hover:bg-slate-100 transition-colors flex items-center gap-2 shadow-sm"
              >
                <svg
                  className="w-5 h-5 text-slate-900"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
                View GitHub
              </a>
            </div>
          </div>

          <div className="hidden lg:block flex-1 w-full max-w-md mx-auto lg:max-w-none relative animate-fade-in-up [animation-delay:400ms]">
            <div className="relative aspect-square rounded-[2rem] overflow-hidden border border-slate-200 shadow-2xl bg-white">
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
        I'm Deepak Jangra, a senior full-stack developer with 9 years of
        experience building high-performance web applications. I specialize in
        Shopify, WordPress, and React/Next.js development for ambitious
        agencies. From AI code rescue to white-label partnerships, I deliver
        scalable architectures under strict NDA with 40% faster delivery than
        typical agencies.
      </span>

      {/* 2. THE EXPERIENCE TIMELINE */}
      <section className="py-24 lg:py-32 bg-slate-50 border-b border-slate-200 relative">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16 lg:mb-24">
            <h2 className="text-sm font-semibold text-indigo-600 tracking-widest uppercase mb-3">
              The Journey
            </h2>
            <h3 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
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
                    <div className="absolute left-[-5px] md:left-1/2 w-3 h-3 bg-white border-2 border-slate-300 rounded-full md:-translate-x-1/2 mt-1.5 md:mt-0 group-hover:border-indigo-600 group-hover:bg-indigo-600 transition-colors duration-300 z-10">
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
                        <h4 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-indigo-600 transition-colors">
                          {item.role}
                        </h4>
                        <p className="text-slate-600 leading-relaxed text-sm md:text-base">
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
        Deepak Jangra is a full-stack developer specializing in vibe coding
        cleanup, AI code rescue, Shopify development, WordPress development, and
        Next.js applications. 9 years experience. 100+ projects delivered.
      </span>

      {/* 3. CORE VALUES / PHILOSOPHY */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight mb-4">
              Why agencies partner with me.
            </h2>
            <p className="text-lg text-slate-600">
              Writing code is only 50% of the job. The other 50% is
              communication, reliability, and business acumen.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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
                    d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                  ></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">
                Total Discretion
              </h3>
              <p className="text-slate-600 leading-relaxed">
                I operate strictly under NDA. Your clients remain your clients.
                I use your email domain and represent your agency with total
                professionalism.
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
              <h3 className="text-xl font-bold text-slate-900 mb-3">
                Zero Hand-Holding
              </h3>
              <p className="text-slate-600 leading-relaxed">
                You don't need to micromanage me. I anticipate edge cases, set
                up CI/CD pipelines, and provide async updates so you always know
                where the project stands.
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
              <h3 className="text-xl font-bold text-slate-900 mb-3">
                Performance Obsessed
              </h3>
              <p className="text-slate-600 leading-relaxed">
                I don't just make it look like the Figma file; I engineer it to
                load in under 2 seconds. Clean code, semantic HTML, and
                optimized database queries.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. FINAL CTA */}
      <section className="relative py-24 lg:py-32 bg-slate-950 overflow-hidden text-center">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-20"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-indigo-600/20 rounded-full blur-[120px] pointer-events-none"></div>

        <div className="relative z-10 max-w-3xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight mb-6 animate-fade-in-up [animation-delay:100ms] leading-tight">
            Looking for a reliable <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-blue-400">
              technical partner?
            </span>
          </h2>
          <p className="text-lg text-slate-400 mb-10 leading-relaxed max-w-xl mx-auto">
            Stop rolling the dice on unvetted freelancers. Let's build scalable,
            high-performance sites that your clients will love—delivered on
            time, every time.
          </p>
          <ContactModal
            triggerText="Let's Talk Project Specs"
            triggerStyle="w-full sm:w-auto px-10 py-4 text-base font-bold text-slate-900 bg-white rounded-xl hover:bg-indigo-50 hover:scale-105 transition-all shadow-xl flex items-center justify-center gap-2 mx-auto"
          />
        </div>
      </section>

      <Footer />
    </main>
  );
}
