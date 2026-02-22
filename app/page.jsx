import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import SocialProof from "@/components/SocialProof";
import Work from "@/components/Work";
import Expertise from "@/components/Expertise";
import Process from "@/components/Process";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": "https://deepslog.com/#person",
        name: "Deepak Jangra",
        jobTitle: "Senior Full-Stack Developer",
        description:
          "9+ years building high-performance web applications for agencies and startups",
        url: "https://deepslog.com",
        image: "https://deepslog.com/deepak.jpg",
        sameAs: [
          "https://www.linkedin.com/in/deepakjangra",
          "https://github.com/deepakjangra",
          "https://www.upwork.com/freelancers/~013532ef81f0edafea",
          "https://www.toptal.com/resume/deepak-jangra",
        ],
        knowsAbout: [
          "React.js",
          "Next.js",
          "Node.js",
          "Shopify Development",
          "WordPress Development",
          "AI Code Rescue",
          "Web Performance Optimization",
        ],
        worksFor: {
          "@id": "https://deepslog.com/#organization",
        },
      },
      {
        "@type": "Organization",
        "@id": "https://deepslog.com/#organization",
        name: "Deepak Jangra Development",
        url: "https://deepslog.com",
        logo: "https://deepslog.com/logo.png",
        sameAs: ["https://www.linkedin.com/in/deepakjangra"],
        makesOffer: [
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "White-Label Development",
              description: "Silent technical partner for agencies",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "AI Code Rescue",
              description: "Rescue AI-generated codebases",
            },
          },
        ],
      },
      {
        "@type": "WebSite",
        "@id": "https://deepslog.com/#website",
        url: "https://deepslog.com",
        name: "Deepak Jangra - Full-Stack Developer",
        publisher: {
          "@id": "https://deepslog.com/#organization",
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
      <CTA />
      <Footer />
    </main>
  );
}
