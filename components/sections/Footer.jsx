"use client";
import Link from "next/link";
import { LiaLinkedinIn } from "react-icons/lia";
import { FaGithub } from "react-icons/fa";
import { SiUpwork } from "react-icons/si";
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <motion.div
      initial={{ y: 48, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ ease: "easeInOut", duration: 0.75 }}
    >
      <div className="container mx-auto px-6 py-4 text-zinc-300 flex justify-between items-center">
        <span>
          Deepak Jangra - No Rights Reserved - Free to copy this deign.
        </span>
        <div className="flex items-center gap-4">
          <Link href="https://www.linkedin.com/in/thedeepakjangra/">
            <LiaLinkedinIn size="26" />
          </Link>
          <Link href="https://github.com/IVEWOR">
            <FaGithub size="22" />
          </Link>
          <Link href="https://www.upwork.com/freelancers/deepakjangra">
            <SiUpwork size="22" />
          </Link>
        </div>
      </div>
    </motion.div>
  );
}
