"use client";
import React, { useRef } from "react";
import { AnimatedBeam } from "../magicui/animated-beam";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

const Node = React.forwardRef(({ className, children }, ref) => {
  return (
    <motion.div
      initial={{ y: 48, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ ease: "easeInOut", duration: 0.75 }}
      ref={ref}
      className={cn(
        "z-10 max-w-lg rounded-xl border border-zinc-600 bg-zinc-800 px-6 py-3 shadow-lg text-sm font-medium text-gray-800",
        className
      )}
    >
      {children}
    </motion.div>
  );
});

Node.displayName = "Node";

export default function ExperienceTree() {
  const containerRef = useRef(null);
  const ref1 = useRef(null);
  const ref2 = useRef(null);
  const ref3 = useRef(null);
  const ref4 = useRef(null);
  const ref5 = useRef(null);
  const ref6 = useRef(null);
  const ref7 = useRef(null);

  return (
    <div
      className="relative flex flex-col items-center justify-start container lg:max-w-[1020px] px-10 mx-auto mt-28 "
      ref={containerRef}
    >
      <Node ref={ref1}>
        <div className="flex justify-between mb-2">
          <div className="font-bold uppercase text-[16px] text-white">
            🧠 Beginning
          </div>
          <div className="font-bold uppercase text-[15px] text-zinc-500">
            2016
          </div>
        </div>
        <div className=" text-zinc-200 text-[15px]">
          Got curious about how websites work and started learning HTML and CSS
          after watching a GoDaddy ad. This marked the start of my journey into
          web development.
        </div>
      </Node>

      <div className="flex justify-start w-full mt-40">
        <Node ref={ref2}>
          <div className="flex justify-between mb-2">
            <div className="font-bold uppercase text-[16px] text-white">
              👨‍💻 Internship
            </div>
            <div className="font-bold uppercase text-[15px] text-zinc-500">
              Mar 2017 - Jun 2017
            </div>
          </div>
          <div className=" text-zinc-200 text-[15px]">
            Joined a local web development firm as an intern. Spent three months
            building WordPress websites for clients and learning how real-world
            web projects are handled in a team environment.
          </div>
        </Node>
      </div>

      <div className="flex justify-end w-full mt-40">
        <Node ref={ref3}>
          <div className="flex justify-between mb-2">
            <div className="font-bold uppercase text-[16px] text-white">
              👨‍💻 Junior Developer
            </div>
            <div className="font-bold uppercase text-[15px] text-zinc-500">
              Nov 2017 - Jan 2018
            </div>
          </div>
          <div className=" text-zinc-200 text-[15px]">
            Got hired by the same company after the internship. Built custom
            WordPress websites from scratch — not just templates — and handled
            multiple client projects, gaining hands-on experience with real
            deliverables.
          </div>
        </Node>
      </div>

      <div className="flex justify-start w-full mt-40">
        <Node ref={ref4}>
          <div className="flex justify-between mb-2">
            <div className="font-bold uppercase text-[16px] text-white">
              🌍 Freelancing
            </div>
            <div className="font-bold uppercase text-[15px] text-zinc-500">
              Feb 2019 - Jul 2019
            </div>
          </div>
          <div className=" text-zinc-200 text-[15px]">
            Started working independently with local businesses. Delivered full
            websites using WordPress and Shopify, including custom themes,
            plugins, and app development. Focused on real client outcomes, not
            just visual design.
          </div>
        </Node>
      </div>

      <div className="flex justify-end w-full mt-40">
        <Node ref={ref5}>
          <div className="flex justify-between mb-2">
            <div className="font-bold uppercase text-[16px] text-white">
              🤝 White Label / Contracting
            </div>
            <div className="font-bold uppercase text-[15px] text-zinc-500">
              Aug 2019 - Aug 2021
            </div>
          </div>
          <div className=" text-zinc-200 text-[15px]">
            Joined NXPRO, a marketing agency, as a white-label developer. Worked
            on high-volume web projects across Shopify and WordPress. Built
            custom solutions, managed junior developers, and helped scale the
            agency's dev capacity significantly.
          </div>
        </Node>
      </div>

      <div className="flex justify-start w-full mt-40">
        <Node ref={ref6}>
          <div className="flex justify-between mb-2">
            <div className="font-bold uppercase text-[16px] text-white">
              🧠 Senior Web Developer
            </div>
            <div className="font-bold uppercase text-[15px] text-zinc-500">
              Jun 2022 - Jul 2023
            </div>
          </div>
          <div className=" text-zinc-200 text-[15px]">
            Came back full-time to lead the development team. Managed three
            developers, handled high-priority projects, and improved internal
            workflows. Contributed to company growth by delivering scalable tech
            and better team structure. In one year, agency's development revenue
            grew by 7x.
          </div>
        </Node>
      </div>

      <div className="flex justify-end w-full mt-40">
        <Node ref={ref7}>
          <div className="flex justify-between mb-2">
            <div className="font-bold uppercase text-[15px] text-white">
              🚀 White Label Services
            </div>
            <div className="font-bold uppercase text-[15px] text-zinc-500">
              Jul 2023 - Present
            </div>
          </div>
          <div className=" text-zinc-200 text-[15px]">
            Started my own white-label web dev agency, partnering with marketing
            and SEO firms. Focused on full-stack custom development — including
            WordPress, Shopify, React, Next.js, Node, and more. Delivering
            reliable backend and frontend solutions that agencies can
            confidently resell to their clients.
          </div>
        </Node>
      </div>

      {/* Beams */}
      <AnimatedBeam
        duration={2.5}
        containerRef={containerRef}
        fromRef={ref1}
        toRef={ref2}
        curvature={40}
        reverse={true}
      />
      <AnimatedBeam
        duration={2.5}
        containerRef={containerRef}
        fromRef={ref2}
        toRef={ref3}
        curvature={-40}
      />
      <AnimatedBeam
        duration={2.5}
        containerRef={containerRef}
        fromRef={ref3}
        toRef={ref4}
        curvature={40}
        reverse={true}
      />
      <AnimatedBeam
        duration={2.5}
        containerRef={containerRef}
        fromRef={ref4}
        toRef={ref5}
        curvature={-40}
      />
      <AnimatedBeam
        duration={2.5}
        containerRef={containerRef}
        fromRef={ref5}
        toRef={ref6}
        curvature={40}
        reverse={true}
      />
      <AnimatedBeam
        duration={2.5}
        containerRef={containerRef}
        fromRef={ref6}
        toRef={ref7}
        curvature={-40}
      />
    </div>
  );
}
