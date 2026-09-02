// app/page.jsx
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import SocialProof from "@/components/SocialProof";
import Work from "@/components/Work";
import Expertise from "@/components/Expertise";
import Process from "@/components/Process";
import AboutMe from "@/components/AboutMe";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import { SITE_URL, ORG_NAME, SAME_AS, KNOWS_ABOUT } from "@/lib/site";

export const metadata = {
  title: "Deepak Jangra — Independent Shopify Plus Developer",
  description:
    "Deepak Jangra is an independent contractor and Shopify Plus developer with 9+ years of experience building fast, revenue-driving Shopify stores for merchants and agencies. Available for new projects.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Deepak Jangra — Independent Shopify Plus Developer",
    description:
      "Independent contractor specializing in Shopify Plus: custom builds, performance optimization, store rescue, and subscription commerce.",
    url: SITE_URL,
    siteName: "Deepak Jangra",
    images: [
      {
        // TODO: og-image.jpg doesn't exist yet (was marked "pending" in
        // the original). Falling back to /deepak.jpg, which is real and
        // already used as the fallback elsewhere. Swap this back to a
        // dedicated OG image once one exists.
        url: `${SITE_URL}/deepak.jpg`,
        width: 1200,
        height: 630,
        alt: "Deepak Jangra - Independent Shopify Plus Developer",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Deepak Jangra — Independent Shopify Plus Developer",
    description:
      "Independent contractor specializing in Shopify Plus: custom builds, performance optimization, store rescue, and subscription commerce.",
    images: [`${SITE_URL}/deepak.jpg`],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": `${SITE_URL}/#person`,
        name: "Deepak Jangra",
        jobTitle: "Independent Shopify Developer",
        description:
          "Independent contractor and Shopify developer with 9+ years of experience building and rescuing high-performance Shopify stores for merchants and agencies.",
        url: SITE_URL,
        image: `${SITE_URL}/og-about.png`,
        sameAs: SAME_AS,
        knowsAbout: KNOWS_ABOUT,
        worksFor: {
          "@id": `${SITE_URL}/#organization`,
        },
      },
      {
        "@type": "Organization",
        "@id": `${SITE_URL}/#organization`,
        name: ORG_NAME,
        url: SITE_URL,
        logo: `${SITE_URL}/logo.png`,
        founder: { "@id": `${SITE_URL}/#person` },
        employee: { "@id": `${SITE_URL}/#person` },
        sameAs: SAME_AS.filter((url) => !url.includes("wikipedia")),
        makesOffer: [
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Shopify Development",
              description:
                "Custom Shopify builds, Hydrogen storefronts, checkout extensibility, and performance optimization.",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "White-Label Development",
              description: "Silent technical partner for agencies.",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Store Rescue & Migrations",
              description:
                "Stabilizing broken Shopify stores and migrating acquired brands without starting from scratch.",
            },
          },
        ],
      },
      {
        "@type": "WebSite",
        "@id": `${SITE_URL}/#website`,
        url: SITE_URL,
        name: "Deepak Jangra — Independent Shopify Developer",
        description:
          "Portfolio and services of Deepak Jangra, independent Shopify developer.",
        inLanguage: "en-US",
        publisher: {
          "@id": `${SITE_URL}/#organization`,
        },
      },
    ],
  };
  return (
    <main className="min-h-screen bg-white selection:bg-indigo-100 selection:text-indigo-900">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navbar />
      <Hero />
      <SocialProof />
      <Work />
      <Expertise />
      <Process />
      <AboutMe />
      <CTA />
      <Footer />
    </main>
  );
}
