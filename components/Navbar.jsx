"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import ContactModal from "./ContactModal";
import Image from "next/image";

function Wordmark() {
  return (
    <span className="accent ui-text">
      <Image
        src="/logo.png"
        width={70}
        height={70}
        alt="Deepak Jangra Independent Shopify Developer"
        className="mt-8"
      />
      <span className="sr-only">Independent Shopify Developer</span>
    </span>
  );
}

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const [prevPathname, setPrevPathname] = useState(pathname);
  if (pathname !== prevPathname) {
    setPrevPathname(pathname);
    setIsOpen(false);
  }

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Work", href: "/work" },
    { name: "Rescue", href: "/rescue" },
    { name: "About", href: "/about" },
    { name: "Blog", href: "/blog" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-(--color-paper) border-b border-(--color-line)">
      <div className="flex items-center justify-between h-14 px-[clamp(1.5rem,4vw,4rem)]">
        <Link
          href="/"
          aria-label="Home"
          onClick={() => setIsOpen(false)}
          className="z-60"
        >
          <Wordmark />
        </Link>

        <nav className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => {
            const isActive =
              link.href === "/"
                ? pathname === "/"
                : pathname.startsWith(link.href);
            return (
              <Link
                key={link.name}
                href={link.href}
                className="ui-text link-underline transition-colors duration-(--duration-fast)"
                style={{
                  color: isActive ? "var(--color-accent)" : "var(--color-ink)",
                }}
              >
                {link.name}
              </Link>
            );
          })}
        </nav>

        <div className="hidden md:block">
          <ContactModal
            triggerText="Let's Talk"
            triggerStyle="btn"
            triggerStyleOverride={{
              background: "var(--color-ink)",
              color: "var(--color-paper)",
            }}
          />
        </div>

        <button
          className="md:hidden p-2 -mr-2 focus:outline-none"
          style={{ color: "var(--color-ink)" }}
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
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {isOpen && (
        <div
          className="md:hidden border-t border-(--color-line) animate-fade-in-up"
          style={{ background: "var(--color-paper)" }}
        >
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
                  className="text-xl"
                  style={{
                    fontFamily: "var(--font-display)",
                    fontWeight: "var(--weight-display-bold)",
                    color: isActive
                      ? "var(--color-accent)"
                      : "var(--color-ink)",
                  }}
                >
                  {link.name}
                </Link>
              );
            })}

            <div
              className="pt-6 mt-2 border-t"
              style={{ borderColor: "var(--color-line)" }}
            >
              <ContactModal
                triggerText="Let's Talk"
                triggerStyle="btn w-full"
                triggerStyleOverride={{
                  background: "var(--color-accent)",
                  color: "var(--color-paper)",
                }}
              />
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
