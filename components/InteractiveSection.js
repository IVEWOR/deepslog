// components/InteractiveSection.js
"use client";

import React, { useRef, useEffect } from "react";
import { motion, useViewportScroll, useTransform } from "framer-motion";
import * as THREE from "three";

export default function InteractiveSection() {
  const mountRef = useRef(null);
  const { scrollY } = useViewportScroll();
  // Map scroll progress to a rotation value (in radians)
  const rotation = useTransform(scrollY, [0, 500], [0, Math.PI * 2]);

  useEffect(() => {
    const mount = mountRef.current;
    let width = mount.clientWidth;
    let height = mount.clientHeight;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
    camera.position.z = 5;

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(width, height);
    mount.appendChild(renderer.domElement);

    const geometry = new THREE.BoxGeometry();
    const material = new THREE.MeshStandardMaterial({
      color: 0x0077ff,
      metalness: 0.5,
      roughness: 0.2,
    });
    const cube = new THREE.Mesh(geometry, material);
    scene.add(cube);

    const ambientLight = new THREE.AmbientLight(0xffffff, 0.8);
    scene.add(ambientLight);
    const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
    directionalLight.position.set(5, 5, 5);
    scene.add(directionalLight);

    const animate = () => {
      requestAnimationFrame(animate);
      renderer.render(scene, camera);
    };
    animate();

    const handleResize = () => {
      width = mount.clientWidth;
      height = mount.clientHeight;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    };
    window.addEventListener("resize", handleResize);

    // Cleanup
    return () => {
      window.removeEventListener("resize", handleResize);
      mount.removeChild(renderer.domElement);
      renderer.dispose();
    };
  }, []);

  return (
    <section
      id="work"
      className="relative w-full h-screen bg-gray-100 flex items-center justify-center"
    >
      <div className="relative w-full h-full">
        <div ref={mountRef} className="absolute top-0 left-0 w-full h-full" />
        <motion.div
          className="relative z-10 text-center p-8 bg-white/80 rounded-xl shadow-xl max-w-xl mx-auto"
          style={{ rotate: rotation }}
        >
          <h2 className="text-3xl font-bold mb-4">Interactive Work</h2>
          <p className="text-lg text-gray-700">
            Scroll to see how interactivity and motion can bring digital
            experiences to life.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
