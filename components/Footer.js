// components/Footer.js
"use client";

import { motion } from "framer-motion";

export default function Footer() {
  return (
    <motion.footer
      className="py-6 bg-gray-900"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className="max-w-7xl mx-auto px-6 text-center">
        <p className="text-gray-500 text-sm">
          &copy; {new Date().getFullYear()} MyPortfolio. All rights reserved.
        </p>
      </div>
    </motion.footer>
  );
}
