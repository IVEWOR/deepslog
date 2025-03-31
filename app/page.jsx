"use client";

import React, { useRef, useEffect } from "react";
import * as THREE from "three";
import { motion, useScroll, useTransform, useAnimation } from "framer-motion";
import { Code } from "lucide-react";

export default function PortfolioPage() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll();

  // Three.js background effect (same as previous version)
  useEffect(() => {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    const renderer = new THREE.WebGLRenderer({ alpha: true });

    renderer.setSize(window.innerWidth, window.innerHeight);
    document
      .getElementById("threejs-background")
      .appendChild(renderer.domElement);

    // Line network creation (same as previous version)
    const lines = [];
    for (let i = 0; i < 50; i++) {
      const geometry = new THREE.BufferGeometry();
      const positions = new Float32Array(6);

      positions[0] = Math.random() * 20 - 10;
      positions[1] = Math.random() * 20 - 10;
      positions[2] = Math.random() * -10;

      positions[3] = positions[0] + (Math.random() * 4 - 2);
      positions[4] = positions[1] + (Math.random() * 4 - 2);
      positions[5] = positions[2] - 5;

      geometry.setAttribute(
        "position",
        new THREE.BufferAttribute(positions, 3)
      );

      const material = new THREE.LineBasicMaterial({
        color: 0xffffff,
        transparent: true,
        opacity: 0.2,
      });

      const line = new THREE.Line(geometry, material);
      scene.add(line);
      lines.push(line);
    }

    camera.position.z = 5;

    const animate = () => {
      requestAnimationFrame(animate);

      lines.forEach((line) => {
        line.rotation.x += 0.001;
        line.rotation.y += 0.001;
      });

      renderer.render(scene, camera);
    };

    animate();

    // Cleanup
    return () => {
      renderer.dispose();
    };
  }, []);

  // Scroll-based animation variants
  const scrollVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <div
      ref={containerRef}
      className="relative min-h-screen bg-black text-white overflow-x-hidden"
    >
      {/* Three.js Background */}
      <div id="threejs-background" className="fixed inset-0 z-0 opacity-50" />

      {/* Navigation (Previous version) */}
      <motion.nav
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="fixed top-0 left-0 right-0 z-50 p-6 bg-black/30 backdrop-blur-md"
      >
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="text-2xl font-bold">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">
              Your Name
            </span>
          </div>
          <div className="space-x-6">
            {["Home", "Services", "Work", "Contact"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="hover:text-pink-400 transition-colors"
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </motion.nav>

      {/* Header (with enhanced gradient) */}
      <motion.header className="relative z-10 min-h-screen flex items-center justify-center text-center px-4">
        <div className="max-w-4xl">
          <motion.h1
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={scrollVariants}
            className="text-6xl md:text-8xl font-bold mb-6"
          >
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 animate-gradient-x">
              Software Developer
            </span>
          </motion.h1>
          <motion.p
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              ...scrollVariants,
              visible: {
                ...scrollVariants.visible,
                transition: {
                  ...scrollVariants.visible.transition,
                  delay: 0.3,
                },
              },
            }}
            className="text-xl md:text-2xl text-gray-300 mb-10"
          >
            Transforming Ideas into Elegant Digital Solutions
          </motion.p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={scrollVariants}
            className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-3 rounded-full text-lg font-semibold hover:shadow-xl transition-all"
          >
            Explore My Work
          </motion.button>
        </div>
      </motion.header>

      {/* Services Section - Redesigned */}
      <motion.section
        id="services"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="relative z-10 py-24 bg-black/50 backdrop-blur-md"
      >
        <div className="max-w-7xl mx-auto px-4">
          <motion.h2
            variants={scrollVariants}
            className="text-4xl font-bold text-center mb-16"
          >
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">
              Web Development Services
            </span>
          </motion.h2>

          <motion.div
            variants={scrollVariants}
            className="grid md:grid-cols-1 gap-12"
          >
            <div className="flex flex-col md:flex-row items-center justify-between bg-black/30 rounded-2xl p-8 space-y-6 md:space-y-0 md:space-x-12">
              <div className="md:w-1/2">
                <Code className="w-16 h-16 text-pink-500 mb-6 mx-auto md:mx-0" />
                <h3 className="text-2xl font-bold mb-4 text-center md:text-left">
                  Custom Web Development
                </h3>
                <p className="text-gray-300 text-center md:text-left">
                  Crafting scalable, high-performance web applications tailored
                  to your unique business needs. From single-page applications
                  to complex enterprise solutions.
                </p>
              </div>
              <div className="md:w-1/2 w-full h-64 bg-gradient-to-br from-purple-600/30 to-pink-600/30 rounded-xl transform hover:scale-105 transition-transform"></div>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Work Section - Alternating Layout */}
      <motion.section
        id="work"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="relative z-10 py-24 bg-black/30 backdrop-blur-md"
      >
        <div className="max-w-7xl mx-auto px-4">
          <motion.h2
            variants={scrollVariants}
            className="text-4xl font-bold text-center mb-16"
          >
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">
              Selected Projects
            </span>
          </motion.h2>

          {[
            {
              title: "E-Commerce Platform",
              description:
                "Full-stack solution with microservices architecture, integrating advanced payment systems and real-time inventory management.",
              side: "left",
            },
            {
              title: "AI-Powered Analytics Dashboard",
              description:
                "Responsive dashboard with machine learning integration, providing actionable insights through intuitive data visualization.",
              side: "right",
            },
            {
              title: "Blockchain Verification System",
              description:
                "Secure, decentralized verification platform leveraging smart contract technology for transparent record-keeping.",
              side: "left",
            },
          ].map((project, index) => (
            <motion.div
              key={index}
              variants={scrollVariants}
              className={`flex flex-col ${project.side === "right" ? "md:flex-row-reverse" : "md:flex-row"
                } items-center mb-16 bg-black/20 rounded-2xl overflow-hidden`}
            >
              <div className="md:w-1/2 h-[400px] bg-gradient-to-br from-purple-600/30 to-pink-600/30"></div>
              <div className="md:w-1/2 p-8 space-y-4">
                <h3 className="text-2xl font-bold text-center md:text-left">
                  {project.title}
                </h3>
                <p className="text-gray-300 text-center md:text-left">
                  {project.description}
                </p>
                <div className="flex justify-center md:justify-start">
                  <button className="px-6 py-2 border border-pink-500 text-pink-500 rounded-full hover:bg-pink-500 hover:text-white transition-colors">
                    View Project
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Contact Section (Previous version) */}
      <section
        id="contact"
        className="relative z-10 py-24 bg-black/30 backdrop-blur-md"
      >
        <div className="max-w-2xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">
            Let's Collaborate
          </h2>
          <p className="text-xl text-gray-300 mb-10">
            Ready to bring your digital vision to life?
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-10 py-4 rounded-full text-lg font-semibold hover:shadow-xl transition-all"
          >
            Get in Touch
          </motion.button>
        </div>
      </section>
    </div>
  );
}
