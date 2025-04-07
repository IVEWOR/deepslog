"use client";
import React from "react";
import { gsap } from "gsap";
import { motion } from "framer-motion";
import Link from "next/link";
import { IoMdArrowDown } from "react-icons/io";

function FlowingProjects({ items = [] }) {
  return (
    <div className="w-full h-full overflow-hidden">
      <nav className="flex flex-col h-full m-0 p-0">
        {items.map((item, idx) => (
          <MenuItem key={idx} {...item} />
        ))}
      </nav>
    </div>
  );
}

function MenuItem({
  link,
  text,
  image,
  year = 2020,
  tags = ["Shopify", "JavaScript"],
}) {
  const itemRef = React.useRef(null);
  const marqueeRef = React.useRef(null);
  const marqueeInnerRef = React.useRef(null);

  const animationDefaults = { duration: 0.6, ease: "expo" };

  const findClosestEdge = (mouseX, mouseY, width, height) => {
    const topEdgeDist = (mouseX - width / 2) ** 2 + mouseY ** 2;
    const bottomEdgeDist = (mouseX - width / 2) ** 2 + (mouseY - height) ** 2;
    return topEdgeDist < bottomEdgeDist ? "top" : "bottom";
  };

  const handleMouseEnter = (ev) => {
    if (!itemRef.current || !marqueeRef.current || !marqueeInnerRef.current)
      return;
    const rect = itemRef.current.getBoundingClientRect();
    const edge = findClosestEdge(
      ev.clientX - rect.left,
      ev.clientY - rect.top,
      rect.width,
      rect.height
    );

    gsap
      .timeline({ defaults: animationDefaults })
      .set(marqueeRef.current, { y: edge === "top" ? "-101%" : "101%" })
      .set(marqueeInnerRef.current, { y: edge === "top" ? "101%" : "-101%" })
      .to([marqueeRef.current, marqueeInnerRef.current], { y: "0%" });
  };

  const handleMouseLeave = (ev) => {
    if (!itemRef.current || !marqueeRef.current || !marqueeInnerRef.current)
      return;
    const rect = itemRef.current.getBoundingClientRect();
    const edge = findClosestEdge(
      ev.clientX - rect.left,
      ev.clientY - rect.top,
      rect.width,
      rect.height
    );

    gsap
      .timeline({ defaults: animationDefaults })
      .to(marqueeRef.current, { y: edge === "top" ? "-101%" : "101%" })
      .to(marqueeInnerRef.current, { y: edge === "top" ? "101%" : "-101%" });
  };

  const repeatedMarqueeContent = Array.from({ length: 6 }).map((_, idx) => (
    <React.Fragment key={idx}>
      <span className="text-[#060606] uppercase font-normal block text-3xl md:text-[2vh] leading-[1.2] p-[1vh_1vw_0]">
        {text}
      </span>
      <div
        className="w-[200px] h-[7vh] my-[2em] mx-[2vw] p-[1em_0] rounded-[50px] bg-cover bg-center"
        style={{ backgroundImage: `url(${image})` }}
      />
    </React.Fragment>
  ));

  return (
    <motion.div
      initial={{ y: 48, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ ease: "easeInOut", duration: 0.75 }}
    >
      <div
        className="flex-1 relative overflow-hidden shadow-[0_-1px_0_0_#fff]"
        ref={itemRef}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <Link
          className="h-full flex justify-between items-center relative cursor-pointer uppercase no-underline font-semibold text-white  hover:text-[#060606] focus:text-white focus-visible:text-[#060606] px-6 py-8"
          href={link}
        >
          <span className=" w-11/12">
            <span className="block text-2xl md:text-[2vh]">{text}</span>
            <span className="block md:text-[calc(2vh-12px)] text-zinc-400 font-normal">
              {year}
            </span>
            <span className="flex flex-wrap gap-5 mt-4 text-[#40ffaa]/50 capitalize">
              {tags.map((tag, index) => (
                <span
                  className="text-xs rounded-xl border border-[#40ffaa]/50 px-2 py-1"
                  key={index}
                >
                  {tag}
                </span>
              ))}
            </span>
          </span>
          <IoMdArrowDown size="2em" className="rotate-225 w-1/12" />
        </Link>
        <div
          className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none bg-white translate-y-[101%]"
          ref={marqueeRef}
        >
          <div className="h-full w-[200%] flex" ref={marqueeInnerRef}>
            <div className="flex items-center relative h-full w-[200%] will-change-transform animate-marquee">
              {repeatedMarqueeContent}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default FlowingProjects;
