"use client";
import { useEffect, useState } from "react";
import { motion, useAnimation, useScroll, useTransform } from "framer-motion";

const getRotationTransition = (duration, from, loop = true) => ({
  from: from,
  to: from + 360,
  ease: "linear",
  duration: duration,
  type: "tween",
  repeat: loop ? Infinity : 0,
});

const getTransition = (duration, from) => ({
  rotate: getRotationTransition(duration, from),
  scale: {
    type: "spring",
    damping: 20,
    stiffness: 300,
  },
});

const CircularText = ({
  text,
  spinDuration = 20,
  onHover = "speedUp",
  className = "",
  letterClassName = "text-2xl", // default letter size
}) => {
  const letters = Array.from(text);
  const controls = useAnimation();
  const { scrollY } = useScroll();
  const [currentRotation, setCurrentRotation] = useState(0);
  const [finalOffsets, setFinalOffsets] = useState({ x: 0, y: 0 });

  useEffect(() => {
    // Calculate how far from center to bottom-right we want to move.
    // Circle is 200px. We'll place it near bottom-right with a small margin:
    const margin = 20;
    const circleSize = 200;
    const halfSize = circleSize / 2;

    // The center is at (50vw, 50vh).
    // We want final position to be near bottom-right, i.e. (windowWidth - margin - halfSize, windowHeight - margin - halfSize)
    // But in the coordinate space of "top:50%, left:50%", we need an offset from center:
    const finalX =
      window.innerWidth / 2 - (window.innerWidth - margin - halfSize);
    const finalY =
      window.innerHeight / 2 - (window.innerHeight - margin - halfSize);

    // Note: finalX, finalY will be negative since we’re going from center -> bottom-right
    setFinalOffsets({ x: -finalX, y: -finalY });
  }, []);

  // Smoothly animate from 0 offset (center) to finalOffsets (bottom-right) over the first 300px of scroll.
  // Using clamp: true so it stays pinned in the bottom-right after that.
  const x = useTransform(scrollY, [0, 300], [0, finalOffsets.x], {
    clamp: true,
  });
  const y = useTransform(scrollY, [0, 300], [100, finalOffsets.y + 0], {
    clamp: true,
  });

  useEffect(() => {
    controls.start({
      rotate: currentRotation + 360,
      scale: 1,
      transition: getTransition(spinDuration, currentRotation),
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [spinDuration, controls, onHover, text]);

  const handleHoverStart = () => {
    if (!onHover) return;
    switch (onHover) {
      case "slowDown":
        controls.start({
          rotate: currentRotation + 360,
          scale: 1,
          transition: getTransition(spinDuration * 2, currentRotation),
        });
        break;
      case "speedUp":
        controls.start({
          rotate: currentRotation + 360,
          scale: 1,
          transition: getTransition(spinDuration / 4, currentRotation),
        });
        break;
      case "pause":
        controls.start({
          rotate: currentRotation,
          scale: 1,
          transition: {
            rotate: { type: "spring", damping: 20, stiffness: 300 },
            scale: { type: "spring", damping: 20, stiffness: 300 },
          },
        });
        break;
      case "goBonkers":
        controls.start({
          rotate: currentRotation + 360,
          scale: 0.8,
          transition: getTransition(spinDuration / 20, currentRotation),
        });
        break;
      default:
        break;
    }
  };

  const handleHoverEnd = () => {
    controls.start({
      rotate: currentRotation + 360,
      scale: 1,
      transition: getTransition(spinDuration, currentRotation),
    });
  };

  return (
    <motion.div
      // Start it centered via top/left=50% and translation. Then let x/y move it around.
      style={{
        position: "fixed",
        top: "50%",
        left: "50%",
        x,
        y,
        width: 120,
        height: 120,
        // You could use transform: translate(-50%, -50%) in CSS, but
        // with Framer x/y it’s easier to do it this way:
        marginLeft: -60,
        marginTop: -60,
      }}
      initial={{ rotate: 0 }}
      animate={controls}
      onUpdate={(latest) => setCurrentRotation(Number(latest.rotate))}
      onMouseEnter={handleHoverStart}
      onMouseLeave={handleHoverEnd}
      className={`rounded-full text-white font-black text-center cursor-pointer origin-center ${className}`}
    >
      {letters.map((letter, i) => {
        const rotation = (360 / letters.length) * i;
        const transform = `rotateZ(${rotation}deg) translate3d(0, 0, 0)`;

        return (
          <span
            key={i}
            className={`absolute inset-0 ${letterClassName}`}
            style={{
              transform,
              WebkitTransform: transform,
            }}
          >
            {letter}
          </span>
        );
      })}
      {/* Icon in the center */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <motion.svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
          animate={{ rotate: 0 }}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
          />
        </motion.svg>
      </div>
    </motion.div>
  );
};

export default CircularText;
