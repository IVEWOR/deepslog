// components/InteractiveThreeScene.js
"use client";

import React, { useRef, useEffect } from "react";
import * as THREE from "three";

export default function InteractiveThreeScene() {
  const mountRef = useRef(null);

  useEffect(() => {
    const mount = mountRef.current;
    let width = mount.clientWidth;
    let height = mount.clientHeight;

    // Create scene and camera
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, width / height, 1, 1000);
    camera.position.z = 50;

    // Create renderer
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(width, height);
    mount.appendChild(renderer.domElement);

    // Create particles
    const particlesCount = 1500;
    const positions = new Float32Array(particlesCount * 3);
    for (let i = 0; i < particlesCount * 3; i++) {
      positions[i] = (Math.random() - 0.5) * 200;
    }
    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));

    const material = new THREE.PointsMaterial({
      color: 0xffffff,
      size: 1,
      transparent: true,
      opacity: 0.5,
    });

    const particles = new THREE.Points(geometry, material);
    scene.add(particles);

    // Interactivity: Change rotation based on mouse position
    const onMouseMove = (event) => {
      const mouseX = (event.clientX / window.innerWidth - 0.5) * 2;
      const mouseY = (event.clientY / window.innerHeight - 0.5) * 2;
      particles.rotation.x = mouseY * 0.2;
      particles.rotation.y = mouseX * 0.2;
    };

    window.addEventListener("mousemove", onMouseMove);

    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate);
      // Slow rotation for continuous motion
      particles.rotation.z += 0.0005;
      renderer.render(scene, camera);
    };
    animate();

    // Handle window resize
    const handleResize = () => {
      width = mount.clientWidth;
      height = mount.clientHeight;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    };
    window.addEventListener("resize", handleResize);

    // Cleanup on unmount
    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", onMouseMove);
      mount.removeChild(renderer.domElement);
      renderer.dispose();
    };
  }, []);

  return (
    <div ref={mountRef} className="absolute top-0 left-0 w-full h-full -z-10" />
  );
}
