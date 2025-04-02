"use client";

import { animate, stagger } from "motion";
import { splitText } from "motion-plus";
import { useEffect, useRef } from "react";
import FadeContent from "@/components/ui/FadeContent/FadeContent";
import CircularText from "@/components/ui/CircularText/CircularText";
import ScrollVelocity from "@/components/ui/ScrollVelocity/ScrollVelocity";
import techs from "@/components/Logos";
import Waves from "../ui/Waves/Waves";
import GradientText from "../ui/GradientText/GradientText";

export default function Hero() {
  const containerRef = useRef(null);

  useEffect(() => {
    document.fonts.ready.then(() => {
      if (!containerRef.current) return;

      // Hide the container until the fonts are loaded
      containerRef.current.style.visibility = "visible";

      const { words } = splitText(containerRef.current.querySelector("h1"));

      // Animate the words in the h1
      animate(
        words,
        { opacity: [0, 1], y: [10, 0] },
        {
          type: "spring",
          duration: 2,
          bounce: 0,
          delay: stagger(0.05),
        }
      );
    });
  }, []);

  return (
    <div className="flex flex-col" ref={containerRef}>
      <div className="container mx-auto px-6 pt-42 pb-24">
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl leading-normal font-semibold text-center z-10 text-white">
          I help agencies build websites with Shopify, WordPress, or custom{" "}
          solutions
        </h1>
      </div>

      <FadeContent blur duration={1200} easing="ease-out" initialOpacity={0}>
        <ScrollVelocity
          texts={[
            [
              <div className="flex gap-2" key="1">
                {techs.map((tech, index) => (
                  <div
                    className={`p-2 px-3 flex items-center rounded-full ${
                      index === 0 ? "ml-2" : ""
                    }`}
                    key={index}
                  >
                    <div className="mr-2">{tech.icon}</div>
                    <div className="text-[16px] tracking-normal">
                      {tech.text}
                    </div>
                  </div>
                ))}
              </div>,
            ],
          ]}
          velocity={20}
          className="text-2xl font-[400]"
        />
      </FadeContent>

      <FadeContent
        className="pt-26"
        easing="ease-in-out"
        initialOpacity={0}
        duration={1600}
      >
        <CircularText
          text="LETS TALK * LETS TALK * LETS TALK * "
          onHover="speedUp"
          spinDuration={20}
          className="z-1 cursor-pointer"
        />
      </FadeContent>
    </div>
  );
}
