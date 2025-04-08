"use client";
import { motion } from "framer-motion";
import GradientText from "../ui/GradientText/GradientText";
import { PopupButton } from "@typeform/embed-react";

export default function About() {
  return (
    <div className="container mx-auto py-20 px-6" id="about">
      <motion.h2
        initial={{ y: 48, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ ease: "easeInOut", duration: 0.75 }}
        className="text-4xl lg:text-5xl xl:text-6xl leading-normal text-white font-bold mb-20 text-center"
      >
        About
      </motion.h2>
      <div className="flex md:flex-row flex-col gap-10 md:gap-20 md:items-center">
        <motion.img
          initial={{ y: 48, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ ease: "easeInOut", duration: 0.75 }}
          src="./deepak.png"
          width={400}
          height={"auto"}
          alt="deepak"
          className="rounded-xl shadow-2xl bg-zinc-950/30 outline outline-zinc-700/80"
        />
        <div>
          <motion.h3
            initial={{ y: 48, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ ease: "easeInOut", duration: 0.75 }}
            className="text-2xl md:text-4xl font-semibold text-white mb-2 md:mb-4"
          >
            Deepak Jangra
          </motion.h3>
          <motion.div
            initial={{ y: 48, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ ease: "easeInOut", duration: 0.75 }}
            className="text-white md:text-lg"
          >
            <div className="mb-3">
              I’m a full-stack developer with 9+ years of experience helping SEO
              and marketing agencies deliver beautiful, fast, and scalable
              websites.{" "}
            </div>
            <div>
              I specialize in Shopify, WordPress, and custom builds — always
              focused on performance, clean architecture, and results that drive
              traffic and conversions.
            </div>
          </motion.div>
          <motion.div
            initial={{ y: 48, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ ease: "easeInOut", duration: 0.75 }}
          >
            <PopupButton id="Bw20TurD">
              <GradientText
                colors={["#40ffaa", "#008B7F", "#40ffaa", "#4079ff", "#40ffaa"]}
                animationSpeed={6}
                showBorder={true}
                className="px-8 py-[12px] mt-5 ml-0 text-lg"
              >
                Let's Connect
              </GradientText>
            </PopupButton>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
