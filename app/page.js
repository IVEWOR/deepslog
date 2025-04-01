import CircularText from "@/components/ui/CircularText/CircularText";
import FadeContent from "@/components/ui/FadeContent/FadeContent";

// Hero
export function Hero() {
  return (
    <div className="relative h-[100vh]">
      <div className="absolute top-1/2 left-1/2 translate-y-[-50%] translate-x-[-50%]">
        <div className="text-center max-w-[990px] mx-auto">
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
          <div className="mt-5">
            <FadeContent
              blur={true}
              duration={1400}
              easing="ease-out"
              initialOpacity={0}
            >
              <CircularText
                text="LETS TALK * LETS TALK * LETS TALK * "
                onHover="speedUp"
                spinDuration={30}
                className="w-[125px] h-[125px]"
                letterClassName="text-sm font-semibold"
              />
            </FadeContent>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <div className="bg-zinc-900">
      <Hero />
      <div className="h-[100vh]"></div>
    </div>
  );
}
