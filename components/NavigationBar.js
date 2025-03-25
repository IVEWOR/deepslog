// components/NavigationBar.js
"use client";

import { motion } from "framer-motion";

export default function NavigationBar() {
  return (
    <motion.nav
      className="fixed top-0 left-0 w-full z-50 flex justify-between items-center px-10 py-4 bg-transparent"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className="text-white text-2xl font-extrabold">MyPortfolio</div>
      <ul className="flex space-x-10 text-white text-lg">
        {["Home", "Work", "About", "Contact"].map((item, index) => (
          <motion.li
            key={index}
            whileHover={{ scale: 1.1, color: "#F3F4F6" }}
            className="cursor-pointer"
          >
            <a href={`#${item.toLowerCase()}`}>{item}</a>
          </motion.li>
        ))}
      </ul>
    </motion.nav>
  );
}
