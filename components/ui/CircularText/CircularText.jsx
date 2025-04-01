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

  // Calculate how much to shift from center to bottom-right.
  // The circle is 200px wide/height; we want it to end up with a margin (e.g., 20px) from the viewport’s edges.
  useEffect(() => {
    const margin = 20;
    const circleSize = 200; // same as width & height below
    const halfSize = circleSize / 2;
    const finalX =
      window.innerWidth - margin - halfSize - window.innerWidth / 2;
    const finalY =
      window.innerHeight - margin - halfSize - window.innerHeight / 2;
    setFinalOffsets({ x: finalX, y: finalY });
  }, []);

  // Map scroll values to x and y offsets.
  // Here, when scrollY goes from 0 to 300, x/y will interpolate from 0 to the computed final offsets.
  const x = useTransform(scrollY, [0, 300], [0, finalOffsets.x]);
  const y = useTransform(scrollY, [0, 300], [0, finalOffsets.y]);

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
      initial={{ rotate: 0 }}
      className={`rounded-full text-white font-black text-center cursor-pointer origin-center ${className} mx-auto w-[125px] h-[125px] sticky`}
      animate={controls}
      style={{
        position: "sticky",
        x: x,
        y: y,
      }}
      onUpdate={(latest) => setCurrentRotation(Number(latest.rotate))}
      onMouseEnter={handleHoverStart}
      onMouseLeave={handleHoverEnd}
    >
      {letters.map((letter, i) => {
        const rotation = (360 / letters.length) * i;
        const factor = Number((Math.PI / letters.length).toFixed(0));
        const xVal = factor * i;
        const yVal = factor * i;
        const transform = `rotateZ(${rotation}deg) translate3d(${xVal}px, ${yVal}px, 0)`;

        return (
          <span
            key={i}
            className={`absolute inline-block inset-0 transition-all duration-500 ease-[cubic-bezier(0,0,0,1)] ${letterClassName}`}
            style={{ transform, WebkitTransform: transform }}
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
          // The icon rotation on hover remains as in the previous implementation.
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
