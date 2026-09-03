export const SITE_URL = "https://deepakj.dev";

export const CONTACT_EMAIL = "howdy@deepslog.com";

export const ORG_NAME = "Deepak Jangra Independent Developer";

export const DEFAULT_ROLE = "Toptal-Rated Shopify Plus Developer";

// JSON-LD `Offer.priceValidUntil` needs some future date - computing it
// relative to build time (rather than hardcoding a fixed date) means it
// never silently goes stale between redeploys. Since the site rebuilds on
// every deploy, this always reads as "valid a year out from the last
// deploy" without anyone needing to remember to bump it.
export function priceValidUntil() {
  const d = new Date();
  d.setFullYear(d.getFullYear() + 1);
  return d.toISOString().split("T")[0];
}

export const SAME_AS = [
  "https://github.com/IVEWOR",
  "https://linkedin.com/in/thedeepakjangra",
  "https://upwork.com/freelancers/shopifydeveloperdeepak",
  "https://www.toptal.com/developers/resume/deepak-jangra",
  "https://en.wikipedia.org/wiki/User:Dpkjangra",
];

export const KNOWS_ABOUT = [
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
  "Shopify Design",
  "Shopify Plus",
  "Shopify Development",
  "Shopify Liquid",
  "Headless Shopify Development",
  "Shopify Hydrogen Development",
  "Shopify Checkout Extensibility",
  "Shopify Performance Optimization",
  "React.js",
  "Next.js",
  "Node.js",
  "WordPress Development",
  "White-Label Website Development",
];
