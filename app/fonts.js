// ============================================================
// FONT LOADING - next/font (self-hosted, zero layout shift)
// ------------------------------------------------------------
// next/font inlines an optimized @font-face, generates a
// size-adjusted fallback to kill CLS, and self-hosts every
// file at build time (no request to Google, no external CSS).
// Each loader exposes a CSS custom property via `variable`,
// which we hang off <html> in app/layout.js. globals.css then
// maps the design tokens (--font-display / --font-body /
// --font-mono) onto these.
//
// NOTE: next/font requires every option to be an inline literal
// - you cannot hoist the fallback array into a shared const.
// ============================================================

import localFont from "next/font/local";
import { Geist_Mono } from "next/font/google";

// ---- PP Neue Montreal - DISPLAY cut ----------------------------------
// Headings (h1–h4), card titles, big numerals.
// Shipped weights: 400 Regular · 600 Semibold · 800 Extrabold (+ italics).
// There is no true 700 file - see the weight note in globals.css.
export const ppNeueMontreal = localFont({
  src: [
    {
      path: "../public/fonts/PPNeueMontreal-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/PPNeueMontreal-Italic.woff2",
      weight: "400",
      style: "italic",
    },
    {
      path: "../public/fonts/PPNeueMontreal-Semibold.woff2",
      weight: "600",
      style: "normal",
    },
    {
      path: "../public/fonts/PPNeueMontreal-SemiboldItalic.woff2",
      weight: "600",
      style: "italic",
    },
    {
      path: "../public/fonts/PPNeueMontreal-Extrabold.woff2",
      weight: "800",
      style: "normal",
    },
    {
      path: "../public/fonts/PPNeueMontreal-ExtraboldItalic.woff2",
      weight: "800",
      style: "italic",
    },
  ],
  display: "swap",
  variable: "--font-pp-display",
  fallback: [
    "ui-sans-serif",
    "system-ui",
    "-apple-system",
    "Segoe UI",
    "Roboto",
    "Helvetica Neue",
    "Arial",
    "sans-serif",
  ],
});

// ---- PP Neue Montreal Text - READING cut -----------------------------
// Paragraphs and descriptions. The "Text" optical size has a taller
// x-height and looser spacing tuned for small sizes.
export const ppNeueMontrealText = localFont({
  src: [
    {
      path: "../public/fonts/PPNeueMontrealText-Book.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/PPNeueMontrealText-BookItalic.woff2",
      weight: "400",
      style: "italic",
    },
  ],
  display: "swap",
  variable: "--font-pp-text",
  fallback: [
    "ui-sans-serif",
    "system-ui",
    "-apple-system",
    "Segoe UI",
    "Roboto",
    "Helvetica Neue",
    "Arial",
    "sans-serif",
  ],
});

// ---- Geist Mono - LABELS / UI / MONO --------------------------------
// Eyebrows, nav, buttons, tags, stat captions. Variable font, so the
// full 100–900 weight axis is available without listing weights.
export const geistMono = Geist_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-geist-mono",
  fallback: [
    "JetBrains Mono",
    "ui-monospace",
    "SFMono-Regular",
    "Menlo",
    "Consolas",
    "monospace",
  ],
});
