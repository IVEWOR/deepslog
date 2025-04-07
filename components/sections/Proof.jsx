"use client";
import { motion } from "framer-motion";
import SpotlightCard from "../ui/SpotlightCard/SpotlightCard";
import { VscQuote } from "react-icons/vsc";
import FadeContent from "../ui/FadeContent/FadeContent";
import ScrollVelocity from "../ui/ScrollVelocity/ScrollVelocity";
import Image from "next/image";

const clientLogos = [
  "/logos/merkbart.svg",
  "/logos/df_no_background.png",
  "/logos/Capes-Sokol_white_fixed.svg",
  "/logos/faire_white.svg",
  "/logos/gmn_white.png",
];

export default function Proof() {
  return (
    <div className="container mx-auto px-6 pt-32" id="testimonials">
      <motion.h2
        initial={{ y: 48, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ ease: "easeInOut", duration: 0.75 }}
        className="text-4xl lg:text-5xl leading-normal text-white font-bold text-center mb-3"
      >
        Trusted by clients and agency partners
      </motion.h2>
      <motion.div
        initial={{ y: 48, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ ease: "easeInOut", duration: 0.75 }}
        className="block text-zinc-300 mb-10 text-center text-lg"
      >
        Here's what they say about working with me
      </motion.div>
      <div className="flex md:flex-row flex-col gap-10">
        <SpotlightCard
          className="text-zinc-300"
          spotlightColor="rgba(64, 255, 170, 0.2)"
        >
          <VscQuote size="25" className="absolute" />
          <div className="ml-10">
            <motion.div
              initial={{ y: 48, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ ease: "easeInOut", duration: 0.75 }}
              className="text-xl block mb-2 italic"
            >
              He made our website from the bottom, both backend and front end.
              Very happy with the result. Quick and very good at finding
              soultions for the issue we found.
            </motion.div>
            <motion.div
              initial={{ y: 48, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ ease: "easeInOut", duration: 0.75 }}
              className="block"
            >
              ~ Filip J, MERKBART
            </motion.div>
          </div>
        </SpotlightCard>
        <SpotlightCard
          className="text-zinc-300"
          spotlightColor="rgba(64, 255, 170, 0.2)"
        >
          <VscQuote size="25" className="absolute" />
          <div className="ml-10">
            <motion.div
              initial={{ y: 48, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ ease: "easeInOut", duration: 0.75 }}
              className="text-xl block mb-2 italic"
            >
              It was a joy working with Deepak. He delivered what I asked for,
              patiently working through all issues to arrive at the desired
              outcome. He is thorough and cares about his work.
            </motion.div>
            <motion.div
              initial={{ y: 48, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ ease: "easeInOut", duration: 0.75 }}
              className="block"
            >
              ~ Kiva B, Green Building Canada
            </motion.div>
          </div>
        </SpotlightCard>
      </div>
      <FadeContent
        blur
        duration={1200}
        easing="ease-out"
        initialOpacity={0}
        className="pt-24"
      >
        <ScrollVelocity
          texts={[
            [
              <div className="flex gap-2" key="1">
                {clientLogos.map((item, index) => (
                  <div
                    className={`p-2 px-10 flex items-center justify-center rounded-md ${
                      index === 0 ? "ml-2" : ""
                    }`}
                    style={{ height: "40px", width: "auto", minWidth: "100px" }}
                    key={index}
                  >
                    <Image
                      src={item}
                      alt={`Client logo ${index}`}
                      width={0}
                      height={0}
                      sizes="100vw"
                      className="h-full w-auto object-contain"
                    />
                  </div>
                ))}
              </div>,
            ],
          ]}
          velocity={20}
          className="text-2xl font-[400]"
        />
      </FadeContent>
    </div>
  );
}
