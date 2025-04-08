"use client";
import Link from "next/link";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Squash as Hamburger } from "hamburger-react";
import GradientText from "../ui/GradientText/GradientText";
import { PopupButton } from "@typeform/embed-react";

const Navbar = () => {
  const [isOpen, setOpen] = useState(false);

  const menuVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
  };

  const links = [
    { name: "Home", href: "/" },
    { name: "Work", href: "/#work" },
    { name: "About", href: "/#about" },
    { name: "Experience", href: "/#experience" },
    { name: "Testimonials", href: "/#testimonials" },
  ];

  return (
    <nav className="sticky w-full top-0 z-50 bg-transparent backdrop-blur-md">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <Link href="/" className="text-xl font-semibold text-white">
          deepslog
        </Link>

        <div className="hidden md:flex space-x-8">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-white hover:text-gray-300 transition-colors"
            >
              {link.name}
            </Link>
          ))}
        </div>
        <motion.div
          initial={{ y: 48, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ ease: "easeInOut", duration: 0.75 }}
        >
          <PopupButton id="Bw20TurD">
            <GradientText
              colors={["#40ffaa", "#008B7F", "#40ffaa", "#4079ff", "#40ffaa"]}
              animationSpeed={6}
              showBorder={true}
              className="md:px-8 md:py-[12px] py-2 px-4 md:text-lg"
            >
              Let's Connect
            </GradientText>
          </PopupButton>
        </motion.div>

        <div className="md:hidden">
          <Hamburger toggled={isOpen} toggle={setOpen} color="#fff" />
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={menuVariants}
            className="md:hidden h-screen backdrop-blur-md "
          >
            <div className="flex flex-col py-4 space-y-3 z-50 ">
              {links.map((link) => (
                <div key={link.href}>
                  <Link
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="text-white hover:text-gray-400 transition-colors px-6 text-xl"
                  >
                    {link.name}
                  </Link>
                  <br />
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
