// components/AboutSection.js
"use client";

import { motion } from "framer-motion";

export default function AboutSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center">
        <motion.div
          className="md:w-1/2 mb-8 md:mb-0"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
          <p className="text-gray-700 mb-4">
            I’m a developer and designer with a passion for creating engaging
            digital experiences. With expertise in modern web technologies, I
            blend creativity and technology to build interactive projects.
          </p>
          <p className="text-gray-700">
            Whether it’s through 3D visuals, dynamic animations, or intuitive
            interfaces, I bring ideas to life.
          </p>
        </motion.div>
        <motion.div
          className="md:w-1/2"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {/* Replace this with your own image */}
          <img
            src="/profile-placeholder.jpg"
            alt="Profile"
            className="rounded-lg shadow-lg w-full"
          />
        </motion.div>
      </div>
    </section>
  );
}
