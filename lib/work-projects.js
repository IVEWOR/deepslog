// lib/work-projects.js
//
// Single source of truth for every case study on /work.
// app/work/page.jsx renders the grid from this list.
// app/sitemap.js maps this same list into sitemap entries.
// Add a new project here once — it shows up in both places automatically.

export const featuredProjects = [
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

export const additionalProjects = [
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

export const workProjects = [...featuredProjects, ...additionalProjects];
