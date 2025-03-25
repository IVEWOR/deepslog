// components/HeroSection.js
"use client";

import dynamic from "next/dynamic";
import { motion } from "framer-motion";

// Load the interactive particle background only on the client
const InteractiveThreeScene = dynamic(() => import("./InteractiveThreeScene"), {
  ssr: false,
});

export default function HeroSection() {
  return (
    <section
      id="home"
      className="relative w-full h-screen bg-gradient-to-b from-gray-900 to-black"
    >
      <InteractiveThreeScene />
      <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-4">
        <motion.h1
          className="text-5xl md:text-8xl font-extrabold text-white drop-shadow-lg"
          initial={{ opacity: 0, y: -60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        >
          Create. Innovate. Inspire.
        </motion.h1>
        <motion.p
          className="mt-6 text-xl md:text-2xl text-gray-300 max-w-3xl"
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
        >
          I build interactive digital experiences that merge cutting‑edge code
          with stunning design.
        </motion.p>
      </div>
    </section>
  );
}
