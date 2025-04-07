"use client";

import Navbar from "@/components/sections/Navbar";
import Waves from "@/components/ui/Waves/Waves";
import { motion } from "framer-motion";
import { VscQuote } from "react-icons/vsc";
import CTA from "./CTA";
import Footer from "./Footer";

export default function ProjectClient({ meta, html }) {
  return (
    <div className="bg-zinc-900 relative z-0 min-h-screen">
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
      <div className="max-w-5xl text-white mx-auto pt-10 md:pt-24 py-8 px-6 projects">
        <motion.h1
          initial={{ y: 48, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ ease: "easeInOut", duration: 0.75 }}
          className="text-4xl font-bold mb-6"
        >
          {meta.title}
        </motion.h1>
        <motion.img
          initial={{ y: 48, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ ease: "easeInOut", duration: 0.75 }}
          src={meta.featured_image}
          width={1200}
          height={"auto"}
          alt={meta.title}
          className="rounded-xl shadow-2xl bg-zinc-950/30 outline outline-zinc-700/80"
        />

        {meta.testimonial ? (
          <motion.div
            initial={{ y: 48, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ ease: "easeInOut", duration: 0.75 }}
            className="relative text-2xl font-semibold my-6 border border-zinc-700 rounded-lg bg-zinc-800/70 py-4 px-5"
          >
            <VscQuote size="25" className="absolute" />
            <div className="ml-8">
              <div>{meta.testimonial}</div>
              <div className="text-lg mt-3 italic">~ {meta.client}</div>
            </div>
          </motion.div>
        ) : (
          ""
        )}

        <article className="mt-5" dangerouslySetInnerHTML={{ __html: html }} />
      </div>
      <CTA />
      <Footer />
    </div>
  );
}
