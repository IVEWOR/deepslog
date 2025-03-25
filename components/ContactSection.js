// components/ContactSection.js
"use client";

import { motion } from "framer-motion";

export default function ContactSection() {
  return (
    <section
      id="contact"
      className="py-20 bg-gradient-to-b from-gray-800 to-black"
    >
      <div className="max-w-4xl mx-auto px-6 text-center">
        <motion.h2
          className="text-4xl font-bold text-white mb-6"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          Let’s Collaborate
        </motion.h2>
        <motion.p
          className="text-gray-300 text-lg mb-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          viewport={{ once: true }}
        >
          Have a project or idea in mind? Let's bring it to life together.
        </motion.p>
        <motion.a
          href="mailto:your.email@example.com"
          className="inline-block bg-white text-gray-900 font-bold py-3 px-8 rounded-full shadow-lg hover:bg-gray-100 transition"
          initial={{ scale: 0.9 }}
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
        >
          Get in Touch
        </motion.a>
      </div>
    </section>
  );
}
