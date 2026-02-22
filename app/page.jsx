import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import SocialProof from "@/components/SocialProof";
import Work from "@/components/Work";
import Expertise from "@/components/Expertise";
import Process from "@/components/Process";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export const metadata = {
  title: "White Label Developer for Agencies - Deepak Jangra",
  description:
    "Helping agencies deliverhigh-performance websites their clientslove — optimized for SEO, speed, andconversions",
};

export default function Home() {
  return (
    <main className="min-h-screen bg-white selection:bg-indigo-100 selection:text-indigo-900">
      <Navbar />
      <Hero />
      <SocialProof />
      <Work />
      <Expertise />
      <Process />
      <CTA />
      <Footer />

      {/* Next sections will go here: 
          <LogoCloud />
          <Services />
          <Work /> 
      */}
    </main>
  );
}
