"use client";

import { animate, stagger } from "motion";
import { splitText } from "motion-plus";
import { useEffect, useRef } from "react";
import FadeContent from "@/components/ui/FadeContent/FadeContent";
import CircularText from "@/components/ui/CircularText/CircularText";
import ScrollVelocity from "@/components/ui/ScrollVelocity/ScrollVelocity";
import techs from "@/components/Logos";
import { motion } from "framer-motion";
import { PopupButton } from "@typeform/embed-react";

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
    <div className="flex flex-col justify-center h-screen" ref={containerRef}>
      <div className="container mx-auto px-6 ">
        <motion.h1
          initial={{ y: 48, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ ease: "easeInOut", duration: 0.75 }}
          className="text-[26px] sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl leading-normal font-semibold text-center z-10 text-white"
        >
          Helping agencies deliver high-performance websites their clients love
          — optimized for SEO, speed, and conversions.
        </motion.h1>
      </div>

      <FadeContent
        blur
        duration={1200}
        easing="ease-out"
        initialOpacity={0}
        className="py-24"
      >
        <ScrollVelocity
          texts={[
            [
              <div className="flex gap-2" key="1">
                {techs.map((tech, index) => (
                  <div
                    className={`p-2 px-3 flex items-center ${
                      index === 0 ? "ml-2" : ""
                    }`}
                    key={index}
                  >
                    <div className="mr-2">{tech.icon}</div>
                    <div className="text-[16px] tracking-normal text-zinc-400">
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

      <motion.div
        initial={{ y: 48, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ ease: "easeInOut", duration: 0.75 }}
      >
        <PopupButton id="Bw20TurD" className="z-1 cursor-pointer w-full">
          <CircularText
            text="LETS TALK * LETS TALK * LETS TALK * "
            onHover="speedUp"
            spinDuration={20}
          />
        </PopupButton>
      </motion.div>
    </div>
  );
}
