"use client";
import { ReactLenis } from "lenis/dist/lenis-react";
import {
  motion,
  useMotionTemplate,
  useScroll,
  useTransform,
} from "framer-motion";
import { SiSpacex } from "react-icons/si";
import { FiArrowRight, FiMapPin } from "react-icons/fi";
import { useRef } from "react";
import FlowingProjects from "../ui/FlowingMenu/FlowingProjects";

const demoItems = [
  {
    link: "/projects/merkbart",
    text: "Merkbart",
    image: "./merkbart.png",
    year: "2025",
    tags: [
      "WordPress",
      "Custom Plugin Development",
      "Custom Design",
      "JavaScript",
    ],
  },
  {
    link: "/projects/elegance-originals",
    text: "Elegance Originals",
    image: "./eleganceoriginals.png",
    year: "2024",
    tags: [
      "Shopify",
      "JavaScript",
      "Custom Blocks",
      "Custom Theme App Extension",
      "Liquid",
    ],
  },
  {
    link: "/projects/green-building-canada",
    text: "Green Building Canada",
    image: "./green-building-canada.png",
    year: "2024",
    tags: ["WordPress", "Php", "Plugin Development", "JavaScript"],
  },

  {
    link: "/projects/faire",
    text: "Faire",
    image: "./Faire.png",
    year: "2023",
    tags: ["WordPress", "Php", "JavaScript"],
  },
  {
    link: "/appspace",
    text: "Appspace",
    image: "./appspace.png",
    year: "2022",
    tags: ["WordPress", "Custom Theme", "Php", "JavaScript"],
  },
  {
    link: "/projects/capes-sokol",
    text: "Capes Sokol",
    image: "./capes-sokol.png",
    year: "2022",
    tags: ["JavaScript", "WordPress", "Php", "Custom Theme"],
  },
  {
    link: "/projects/graymattersnyc",
    text: "Gray Matters Nyc",
    image: "./graymattersnyc.png",
    year: "2021",
    tags: [
      "Shopify",
      "JavaScript",
      "Custom Blocks",
      "Custom Theme App Extension",
      "Liquid",
    ],
  },
  {
    link: "/projects/darkestfox",
    text: "Darkest Fox",
    image: "./darkestfox.png",
    year: "2021",
    tags: ["Shopify", "JavaScript", "Custom Blocks", "Liquid"],
  },

  {
    link: "/projects/next2skin",
    text: "Next2Skin",
    image: "./next2skin.png",
    year: "2020",
    tags: ["WordPress", "Custom Theme", "WooCommerce", "JavaScript"],
  },
  {
    link: "/projects/leoeyewear",
    text: "LEO Eyewear",
    image: "./leoeyewear.png",
    year: "2020",
    tags: ["Shopify", "JavaScript", "Custom Blocks", "Liquid"],
  },
];

export const Projects = () => {
  return (
    <ReactLenis
      root
      options={{
        // Learn more -> https://github.com/darkroomengineering/lenis?tab=readme-ov-file#instance-settings
        lerp: 0.05,
        //   infinite: true,
        //   syncTouch: true,
      }}
    >
      <motion.h2
        initial={{ y: 48, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ ease: "easeInOut", duration: 0.75 }}
        className="text-4xl lg:text-5xl xl:text-6xl leading-normal text-white font-bold text-center"
        id="work"
      >
        WORK
      </motion.h2>
      <Hero />
      <div className="relative container mx-auto">
        <FlowingProjects items={demoItems} />
      </div>
    </ReactLenis>
  );
};

const Nav = () => {
  return (
    <nav className="fixed left-0 right-0 top-0 z-50 flex items-center justify-between px-6 py-3 text-white">
      <SiSpacex className="text-3xl mix-blend-difference" />
      <button
        onClick={() => {
          document.getElementById("launch-schedule")?.scrollIntoView({
            behavior: "smooth",
          });
        }}
        className="flex items-center gap-1 text-xs text-zinc-400"
      >
        LAUNCH SCHEDULE <FiArrowRight />
      </button>
    </nav>
  );
};

const SECTION_HEIGHT = 1200;

const Hero = () => {
  return (
    <div className="relative w-full">
      <CenterImage />

      <ParallaxImages />
    </div>
  );
};

const CenterImage = () => {
  const { scrollY } = useScroll();

  const clip1 = useTransform(scrollY, [0, 1500], [25, 0]);
  const clip2 = useTransform(scrollY, [0, 1500], [75, 100]);

  const clipPath = useMotionTemplate`polygon(${clip1}% ${clip1}%, ${clip2}% ${clip1}%, ${clip2}% ${clip2}%, ${clip1}% ${clip2}%)`;

  const backgroundSize = useTransform(
    scrollY,
    [0, SECTION_HEIGHT + 500],
    ["170%", "100%"]
  );
  const opacity = useTransform(
    scrollY,
    [SECTION_HEIGHT, SECTION_HEIGHT + 500],
    [1, 0]
  );

  return (
    <motion.div
      className="sticky top-0 h-screen w-full"
      style={{
        clipPath,
        backgroundSize,
        opacity,
        backgroundImage: "url(./darkestfox.png)",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    />
  );
};

const ParallaxImages = () => {
  return (
    <div className="mx-auto max-w-5xl px-4 pt-[200px]">
      <ParallaxImg
        src="./Faire.png"
        alt="Faire"
        start={-200}
        end={200}
        className="w-4/5"
      />
      <ParallaxImg
        src="./eleganceoriginals.png"
        alt="eleganceoriginals"
        start={200}
        end={-250}
        className="mx-auto w-2/3"
      />
      <ParallaxImg
        src="./graymattersnyc.png"
        alt="graymattersnyc"
        start={-200}
        end={200}
        className="ml-auto w-4/5"
      />
      <ParallaxImg
        src="./capes-sokol.png"
        alt="Capes Sokol"
        start={0}
        end={-500}
        className="ml-24 w-7/12"
      />
    </div>
  );
};

const ParallaxImg = ({ className, alt, src, start, end }) => {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: [`${start}px end`, `end ${end * -1}px`],
  });

  const opacity = useTransform(scrollYProgress, [0.75, 1], [1, 0]);
  const scale = useTransform(scrollYProgress, [0.75, 1], [1, 0.85]);

  const y = useTransform(scrollYProgress, [0, 1], [start, end]);
  const transform = useMotionTemplate`translateY(${y}px) scale(${scale})`;

  return (
    <motion.img
      src={src}
      alt={alt}
      className={className}
      ref={ref}
      style={{ transform, opacity }}
    />
  );
};

// const Schedule = () => {
//   return (
//     <section
//       id="launch-schedule"
//       className="mx-auto max-w-5xl px-4 pt-0 py-48 text-white"
//     >
//       <motion.h1
//         initial={{ y: 48, opacity: 0 }}
//         whileInView={{ y: 0, opacity: 1 }}
//         transition={{ ease: "easeInOut", duration: 0.75 }}
//         className="mb-20 text-4xl font-black uppercase text-zinc-50"
//       >
//         Launch Schedule
//       </motion.h1>
//       <ScheduleItem title="MERKBART" date="2024" location="Florida" />
//       <ScheduleItem title="GRAYMATTERSNYC" date="Dec 20th" location="Texas" />
//       <ScheduleItem title="Starlink" date="Jan 13th" location="Florida" />
//       <ScheduleItem title="Turksat 6A" date="Feb 22nd" location="Florida" />
//       <ScheduleItem title="NROL-186" date="Mar 1st" location="California" />
//       <ScheduleItem title="GOES-U" date="Mar 8th" location="California" />
//       <ScheduleItem title="ASTRA 1P" date="Apr 8th" location="Texas" />
//       <TextButtonWithArrow text="MORE PROJECTS" link={"#"} />
//     </section>
//   );
// };

// const ScheduleItem = ({ title, date, location }) => {
//   return (
//     <motion.div
//       initial={{ y: 48, opacity: 0 }}
//       whileInView={{ y: 0, opacity: 1 }}
//       transition={{ ease: "easeInOut", duration: 0.75 }}
//       className="mb-9 flex items-center justify-between border-b border-zinc-800 px-3 pb-9"
//     >
//       <div>
//         <p className="mb-1.5 text-xl text-zinc-50">{title}</p>
//         <p className="text-sm uppercase text-zinc-500">{date}</p>
//       </div>
//       <div className="flex items-center gap-1.5 text-end text-sm uppercase text-zinc-500">
//         <p>{location}</p>
//         <FiMapPin />
//       </div>
//     </motion.div>
//   );
// };
