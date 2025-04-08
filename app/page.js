import About from "@/components/sections/About";
import CTA from "@/components/sections/CTA";
import ExperienceTree from "@/components/sections/ExperienceTree";
import Footer from "@/components/sections/Footer";
import Form from "@/components/sections/Form";
import Hero from "@/components/sections/Hero";
import Navbar from "@/components/sections/Navbar";
import { Projects } from "@/components/sections/Projects";
import Proof from "@/components/sections/Proof";
import Waves from "@/components/ui/Waves/Waves";

export const metadata = {
  title: "White Label Developer for Agencies - Deepak Jangra",
  description:
    "Helping agencies deliverhigh-performance websites their clientslove — optimized for SEO, speed, andconversions",
};

export default function Home() {
  return (
    <div className="bg-zinc-900 relative z-0">
      <Waves
        lineColor="#333"
        waveSpeedX={0.02}
        waveSpeedY={0.01}
        waveAmpX={40}
        waveAmpY={20}
        friction={0.9}
        tension={0.01}
        maxCursorMove={120}
        xGap={12}
        yGap={36}
        className="z-[-1]"
      />
      <Navbar />
      <Hero />
      <Projects />
      <About />
      <ExperienceTree />
      <Proof />
      <CTA />
      <Form />
      <Footer />
    </div>
  );
}
