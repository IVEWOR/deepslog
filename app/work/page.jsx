import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactModal from "@/components/ContactModal";
import WorkGrid from "@/components/WorkGrid";
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
  // Curated flagship work — always visible first.
  const featuredProjects = [
    {
      title: "Prime Peptides / PsiFi Integration",
      year: "2026",
      description:
        "Custom high-risk payment gateway integration for Wix E-commerce using PsiFi and Simplex with automated 5% fee logic.",
      tech: ["Wix Velo", "Node.js", "REST API", "HMAC Security"],
      link: "prime-peptides",
      image: "/primepeptides.png",
    },
    {
      title: "LEO Eyewear",
      year: "2026",
      description:
        "Full Shopify redesign for a tech eyewear brand — fixed 100vh video homepage, adaptive transparent header, full pixel tracking, technical SEO, and Razorpay + Shiprocket integration.",
      tech: ["Shopify", "Liquid", "Figma", "Razorpay"],
      link: "leoeyewear",
      image: "/leoeyewear.png",
    },
    {
      title: "Merkbart",
      year: "2024",
      description:
        "Rebuilt a slow, freezing WooCommerce store from scratch, custom pricing, discount, and invoicing plugins. Sales doubled within three months.",
      tech: ["WooCommerce", "WordPress", "Custom Plugin", "AWS"],
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
      year: "2021",
      description:
        "Full custom Shopify build for an Indian hosiery brand — every core page built from scratch, Shiprocket integrated for fulfillment and order tracking.",
      tech: ["Shopify", "Liquid", "Shiprocket", "Judge.me"],
      link: "next2skin",
      image: "/next2skin.png",
    },
  ];

  // Remaining case studies, sorted newest → oldest by date_published.
  const additionalProjects = [
    {
      title: "University Lawns",
      year: "2023",
      description:
        "Diagnosed a third-party form tracking gap blocking Google and Facebook Ads conversions for a landscaping company.",
      tech: ["WordPress", "Jobber.com", "Ad Tracking"],
      link: "university-lawns",
      image: "/university-lawns.png",
    },
    {
      title: "Bloom Bras",
      year: "2023",
      description:
        "Reusable Shopify product page template — visible size selector, size-guide modal, and Shop Pay integration.",
      tech: ["Shopify", "Liquid"],
      link: "bloom-bras",
      image: "/bloom-bras.png",
    },
    {
      title: "Theatre Projects",
      year: "2022",
      description:
        "WordPress accessibility and SEO overhaul for a global theatre design consultancy — zero critical accessibility issues, custom geotagging across three offices.",
      tech: ["WordPress", "AWS S3", "CloudFront"],
      link: "theatre-projects",
      image: "/theatre-projects.png",
    },
    {
      title: "Solutions by It Works!",
      year: "2022",
      description:
        "10+ Shopify product landing pages built from Figma for a health supplement brand, with a rebuilt slider and checkout fixes.",
      tech: ["Shopify", "Liquid", "Figma-to-Code"],
      link: "solutions-by-it-works",
      image: "/solutions-by-it-works.png",
    },
    {
      title: "GoAmplifi",
      year: "2022",
      description:
        "Webinar registration templates and Salesforce lead-capture integration for a data consultancy.",
      tech: ["WordPress", "WP Engine", "Salesforce"],
      link: "goamplifi",
      image: "/goamplifi.png",
    },
    {
      title: "Alpenature",
      year: "2022",
      description:
        "7+ custom multi-step booking forms with Stripe payments and dynamic pricing for an Austrian adventure tour company.",
      tech: ["WordPress", "Gravity Forms", "Stripe"],
      link: "alpenature",
      image: "/alpenature.png",
    },
    {
      title: "WomenCann",
      year: "2022",
      description:
        "Complete WordPress rebuild for a women's cannabis nonprofit — custom team post type, volunteer portal, 8+ pages under a hard deadline.",
      tech: ["WordPress", "Custom Post Types", "Connecteam"],
      link: "womencann",
      image: "/womencann.png",
    },
    {
      title: "GreenCurve Studio",
      year: "2022",
      description:
        "Homepage rebuild for an award-winning interior design studio — interactive project map and SEO landing pages for three specialties.",
      tech: ["WordPress", "Custom Slider", "Interactive Map"],
      link: "greencurve-studio",
      image: "/greencurve-studio.png",
    },
    {
      title: "Shofar Shoshanna",
      year: "2022",
      description:
        "Homepage rebuild and technical SEO fix for a Judaica brand — resolved Google mobile usability errors and reindexed the site.",
      tech: ["WordPress", "SEO", "Google Search Console"],
      link: "shofar-shoshanna",
      image: "/shofar-shoshanna.png",
    },
    {
      title: "House Haven",
      year: "2022",
      description:
        "Full Shopify store build for a home goods brand — product copywriting, reviews, and an admin-editable FAQ.",
      tech: ["Shopify"],
      link: "house-haven",
      image: "/house-haven.png",
    },
    {
      title: "Classic Car Dealer",
      year: "2022",
      description:
        "Custom vehicle listing system on WordPress with self-service admin and dealer-grade design.",
      tech: ["WordPress", "Custom Post Types"],
      link: "classic-car-dealer",
      image: "/classic-car-dealer.png",
    },
    {
      title: "Instead of Flowers",
      year: "2022",
      description:
        "Diagnosed and fixed Facebook Pixel over-reporting on a WooCommerce store caused by a double-firing tracking path.",
      tech: ["WooCommerce", "Facebook Pixel", "GTM"],
      link: "instead-of-flowers",
      image: "/instead-of-flowers.png",
    },
    {
      title: "Light Up Your Holidays",
      year: "2022",
      description:
        "Salesforce CRM integration across 6 site forms for a holiday lighting service, resolving API and OAuth blockers.",
      tech: ["WordPress", "Ninja Forms", "Salesforce"],
      link: "light-up-your-holidays",
      image: "/light-up-your-holidays.png",
    },
    {
      title: "Mila4u.com",
      year: "2022",
      description:
        "Diagnosed and scoped a Safari-specific navigation bug for a leather bag brand's Shopify store.",
      tech: ["Shopify"],
      link: "mila4u",
      image: "/mila4u.png",
    },
    {
      title: "Chasin' Unicorns",
      year: "2022",
      description:
        "Shopify subscription store rebuild — custom Recharge checkout routing, automated monthly timers, fixed social-share previews.",
      tech: ["Shopify", "Recharge", "Klaviyo"],
      link: "chasin-unicorns",
      image: "/chasin-unicorns.png",
    },
    {
      title: "Sentry Roofing NH",
      year: "2022",
      description:
        "Full Divi rebuild for a roofing company — interactive service-area map, financing calculator, and GoDaddy migration.",
      tech: ["WordPress", "Divi", "WP Forms"],
      link: "sentry-roofing-nh",
      image: "/sentry-roofing-nh.png",
    },
    {
      title: "ABWMS",
      year: "2022",
      description:
        "Custom PHP admin tooling for a medical certification board — filterable CSV export and a security-hardened password reset.",
      tech: ["PHP", "MySQL", "Bootstrap"],
      link: "abwms",
      image: "/abwms.png",
    },
    {
      title: "Dead Atlantic",
      year: "2022",
      description:
        "Custom Shopify lookbook page preserving native image aspect ratios for a streetwear brand.",
      tech: ["Shopify", "Liquid"],
      link: "dead-atlantic",
      image: "/dead-atlantic.png",
    },
    {
      title: "Beryll",
      year: "2022",
      description:
        "Reusable Shopify blog template with standardized image ratios and brand-matched typography.",
      tech: ["Shopify", "Liquid"],
      link: "beryll",
      image: "/beryll.png",
    },
    {
      title: "Citizen PD",
      year: "2022",
      description:
        "Diagnosed Contact Form 7 limitations and scoped an ACF Pro rebuild for a citizen journalism video platform.",
      tech: ["WordPress", "ACF", "Contact Form 7"],
      link: "citizen-pd",
      image: "/citizen-pd.png",
    },
  ];

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
