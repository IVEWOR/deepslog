"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import ContactModal from "./ContactModal";

// I included the Modern Spark Logo directly here to keep it simple!
function ModernSparkLogo() {
  return (
    <div className="group flex items-baseline gap-0.5">
      <span className="text-2xl md:text-3xl font-black tracking-tighter text-slate-950 transition-colors">
        deepak
      </span>
      <svg
        className="w-5 h-5 md:w-6 md:h-6 transition-all duration-500 ease-[cubic-bezier(0.87,0,0.13,1)] group-hover:rotate-90 group-hover:scale-110"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient
            id="iridescent-spark"
            x1="0%"
            y1="0%"
            x2="100%"
            y2="100%"
          >
            <stop offset="0%" stopColor="lab(54.1736% 13.3369 -74.6839)" />
            <stop offset="100%" stopColor="lab(38.4009% 52.6132 -92.3857)" />
          </linearGradient>
        </defs>
        <path
          d="M12 0C12 6.62742 17.3726 12 24 12C17.3726 12 12 17.3726 12 24C12 17.3726 6.62742 12 0 12C6.62742 12 12 6.62742 12 0Z"
          fill="url(#iridescent-spark)"
        />
        <path
          d="M12 6C12 9.31371 14.6863 12 18 12C14.6863 12 12 14.6863 12 18C12 14.6863 9.31371 12 6 12C9.31371 12 12 9.31371 12 6Z"
          fill="white"
          className="opacity-40"
        />
      </svg>
    </div>
  );
}

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname(); // Used to highlight the active page

  // Close the mobile menu automatically when the route changes
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  const navLinks = [
    { name: "Shopify", href: "/" },
    { name: "Work", href: "/work" },
    { name: "Rescue", href: "/rescue" },
    { name: "About", href: "/about" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* 1. LOGO */}
          <Link href="/" aria-label="Home" onClick={() => setIsOpen(false)}>
            <ModernSparkLogo />
          </Link>

          {/* 2. DESKTOP NAVIGATION */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => {
              const isActive =
                link.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(link.href);
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`text-sm font-bold transition-colors ${isActive ? "text-indigo-600" : "text-slate-500 hover:text-slate-900"}`}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>

          {/* 3. DESKTOP CTA BUTTON */}
          <div className="hidden md:block">
            <ContactModal
              triggerText="Let's Talk"
              triggerStyle="px-6 py-2.5 text-sm font-bold text-white bg-slate-900 rounded-xl hover:bg-indigo-600 transition-colors shadow-sm flex gap-2 cursor-pointer"
            />
          </div>

          {/* 4. MOBILE HAMBURGER BUTTON */}
          <button
            className="md:hidden p-2 -mr-2 text-slate-600 hover:text-slate-900 focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle Menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                /> // X icon
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                /> // Hamburger icon
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* 5. MOBILE MENU DROPDOWN */}
      {isOpen && (
        <div className="md:hidden absolute top-20 left-0 right-0 bg-white border-b border-slate-100 shadow-2xl animate-fade-in-up">
          <div className="px-6 py-8 flex flex-col gap-6">
            {navLinks.map((link) => {
              const isActive =
                link.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(link.href);
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`text-xl font-black tracking-tight ${isActive ? "text-indigo-600" : "text-slate-900"}`}
                >
                  {link.name}
                </Link>
              );
            })}

            <div className="pt-6 mt-2 border-t border-slate-100">
              {/* Full-width Contact Modal button for mobile */}
              <ContactModal
                triggerText="Let's Talk"
                triggerStyle="w-full py-4 text-base font-bold text-white bg-indigo-600 rounded-xl hover:bg-indigo-500 transition-colors shadow-lg flex justify-center items-center gap-2"
              />
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
