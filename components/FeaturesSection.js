// components/FeaturesSection.js
"use client";

import { motion } from "framer-motion";

const features = [
  {
    title: "Immersive Experiences",
    description: "Merging creative design with interactive technology.",
    icon: "🚀",
  },
  {
    title: "Innovative Code",
    description: "Building robust and scalable web solutions.",
    icon: "💻",
  },
  {
    title: "Modern Design",
    description: "Focusing on minimalism and intuitive interfaces.",
    icon: "🎨",
  },
];

export default function FeaturesSection() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <motion.h2
          className="text-4xl font-bold text-center mb-12 text-gray-800"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          What I Do
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="flex flex-col items-center text-center p-6 border rounded-xl shadow hover:shadow-xl transition"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <div className="text-5xl mb-4">{feature.icon}</div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
