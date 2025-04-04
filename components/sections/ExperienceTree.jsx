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
        "z-10 max-w-md rounded-xl border border-zinc-600 bg-zinc-800 px-6 py-3 shadow-lg text-sm font-medium text-gray-800"
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
      className="relative flex flex-col items-center justify-start max-w-[1020px] px-10 mx-auto mt-28 "
      ref={containerRef}
    >
      <motion.h2
        initial={{ y: 48, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ ease: "easeInOut", duration: 0.75 }}
        className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl leading-normal text-white font-bold text-center mb-20"
      >
        Experience
      </motion.h2>
      <Node ref={ref1}>
        <div className="flex justify-between mb-2">
          <div className="font-bold uppercase text-[15px] text-white">
            Beginning
          </div>
          <div className="font-bold uppercase text-[15px] text-zinc-500">
            2016
          </div>
        </div>
        <div className=" text-zinc-200">
          My journey into tech began with curiosity. In 2016, I discovered
          domain and hosting platforms like GoDaddy and started building static
          sites using HTML and CSS. This hands-on learning sparked a deep
          interest in how the web works and laid the foundation for my
          development career.
        </div>
      </Node>

      <div className="flex justify-start w-full mt-40">
        <Node ref={ref2}>
          <div className="flex justify-between mb-2">
            <div className="font-bold uppercase text-[15px] text-white">
              Internship
            </div>
            <div className="font-bold uppercase text-[15px] text-zinc-500">
              Mar 2017 - Jun 2017
            </div>
          </div>
          <div className=" text-zinc-200">
            Completed a 3-month internship at Websoftrix, Chandigarh, where I
            worked on real-world WordPress websites for clients. I contributed
            to frontend development, plugin integration, and page optimizations,
            getting my first taste of professional collaboration and delivery.
          </div>
        </Node>
      </div>

      <div className="flex justify-end w-full mt-40">
        <Node ref={ref3}>
          <div className="flex justify-between mb-2">
            <div className="font-bold uppercase text-[15px] text-white">
              Junior Developer
            </div>
            <div className="font-bold uppercase text-[15px] text-zinc-500">
              Nov 2017 - Jan 2018
            </div>
          </div>
          <div className=" text-zinc-200">
            Hired as a Junior WordPress Developer after the internship. I
            created 10+ responsive websites from scratch, implemented custom
            features using PHP and JavaScript, and gained deep exposure to theme
            and plugin development for client-specific needs.
          </div>
        </Node>
      </div>

      <div className="flex justify-start w-full mt-40">
        <Node ref={ref4}>
          <div className="flex justify-between mb-2">
            <div className="font-bold uppercase text-[15px] text-white">
              Freelancing
            </div>
            <div className="font-bold uppercase text-[15px] text-zinc-500">
              Feb 2019 - Jul 2019
            </div>
          </div>
          <div className=" text-zinc-200">
            Started my freelance journey, delivering 15+ websites for local
            businesses. Expanded my stack to Shopify, custom PHP, and
            JavaScript. Built ecommerce stores, landing pages, and business
            sites — and handled everything from UI to deployment.
          </div>
        </Node>
      </div>

      <div className="flex justify-end w-full mt-40">
        <Node ref={ref5}>
          <div className="flex justify-between mb-2">
            <div className="font-bold uppercase text-[15px] text-white">
              White Label / Contracting
            </div>
            <div className="font-bold uppercase text-[15px] text-zinc-500">
              Aug 2019 - Aug 2021
            </div>
          </div>
          <div className=" text-zinc-200">
            Joined NXPRO (a marketing agency) as a white-label web developer.
            Worked on 50+ projects using WordPress and Shopify. Built custom
            themes, plugins, and reusable components. Scaled their development
            offering from 1 to 5 simultaneous projects and mentored two junior
            developers.
          </div>
        </Node>
      </div>

      <div className="flex justify-start w-full mt-40">
        <Node ref={ref6}>
          <div className="flex justify-between mb-2">
            <div className="font-bold uppercase text-[15px] text-white">
              Senior Web Developer
            </div>
            <div className="font-bold uppercase text-[15px] text-zinc-500">
              Jun 2022 - Jul 2023
            </div>
          </div>
          <div className=" text-zinc-200">
            Returned to NXPRO in a senior role. Led a dev team of 3 and improved
            delivery speed by 40%. Oversaw high-stakes WordPress and Shopify
            projects, introduced Git-based workflows, and helped boost revenue
            by 700% through better tech processes.
          </div>
        </Node>
      </div>

      <div className="flex justify-end w-full mt-40">
        <Node ref={ref7}>
          <div className="flex justify-between mb-2">
            <div className="font-bold uppercase text-[15px] text-white">
              White Label Services
            </div>
            <div className="font-bold uppercase text-[15px] text-zinc-500">
              Jul 2023 - Present
            </div>
          </div>
          <div className=" text-zinc-200">
            Launched my own white-label development agency. Partnered with SEO
            and marketing firms to deliver custom full-stack solutions — from
            advanced WordPress builds to Shopify apps to scalable web apps using
            React, Next.js, and Node.js. Supporting 12+ clients across 3
            countries.
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
