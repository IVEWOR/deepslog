import FadeContent from "@/components/ui/FadeContent/FadeContent";
import SplitText from "@/components/ui/SplitText/SplitText";
import Link from "next/link";

// Hero
export function Hero() {
  return (
    <div className="max-w-[990px] text-center mx-auto">
      <div className="pt-20 pb-3">
        <FadeContent
          blur={true}
          duration={1000}
          easing="ease-out"
          initialOpacity={0}
          className="text-4xl leading-normal font-semibold"
        >
          Helping Agencies with High-Converting, SEO-Optimized Websites |
          Shopify, WordPress & Custom Development
        </FadeContent>
        <FadeContent
          blur={true}
          duration={1200}
          easing="ease-out"
          initialOpacity={0}
        >
          <div className="flex gap-2 uppercase font-bold tracking-wider justify-center mt-4">
            <Link href="#">LinkedIn</Link>
            <Link href="#">Github</Link>
          </div>
        </FadeContent>
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <div className="bg-zinc-900">
      <Hero />
    </div>
  );
}
