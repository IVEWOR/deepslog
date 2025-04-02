import Hero from "@/components/sections/Hero";
import Navbar from "@/components/sections/Navbar";
import Projects from "@/components/sections/Projects";
import { SmoothScrollHero } from "@/components/ui/SmoothScrollHero/SmoothScrollHero";
import Waves from "@/components/ui/Waves/Waves";

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
      <SmoothScrollHero />
    </div>
  );
}
