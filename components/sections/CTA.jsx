"use client";
import { motion } from "framer-motion";
import LetterGlitch from "../ui/LetterGlitch/LetterGlitch";

export default function CTA() {
  return (
    <motion.div
      initial={{ y: 48, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ ease: "easeInOut", duration: 0.75 }}
    >
      <div className="px-4">
        <LetterGlitch
          glitchSpeed={50}
          centerVignette={true}
          outerVignette={true}
          smooth={true}
        />
      </div>
    </motion.div>
  );
}
