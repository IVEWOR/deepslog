"use client";

import { ppNeueMontreal, ppNeueMontrealText, geistMono } from "./fonts";
import "./globals.css";

const fontVars = [
  ppNeueMontreal.variable,
  ppNeueMontrealText.variable,
  geistMono.variable,
].join(" ");

export default function GlobalError({ error, reset }) {
  return (
    <html lang="en" className={fontVars}>
      <body
        className={ppNeueMontrealText.className}
        style={{
          background: "#17140f",
          color: "#f6f3ec",
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "0 24px",
        }}
      >
        <div style={{ textAlign: "center", maxWidth: "420px" }}>
          <span
            style={{
              fontFamily: "var(--font-mono, monospace)",
              fontSize: "11px",
              letterSpacing: "0.14em",
              textTransform: "uppercase",
              color: "#b8543a",
            }}
          >
            Critical Error
          </span>

          <h1
            style={{
              fontFamily: "var(--font-display, sans-serif)",
              fontWeight: 800,
              fontSize: "clamp(1.75rem, 5vw, 2.25rem)",
              lineHeight: 1.1,
              marginTop: "16px",
              marginBottom: "16px",
            }}
          >
            Something went seriously wrong.
          </h1>

          <p
            style={{ color: "#a89f8f", lineHeight: 1.7, marginBottom: "32px" }}
          >
            The app failed to load. It&rsquo;s been logged - try reloading, or
            check back in a few minutes.
          </p>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "12px",
              alignItems: "center",
            }}
          >
            <button
              onClick={() => reset()}
              style={{
                cursor: "pointer",
                width: "100%",
                padding: "14px 28px",
                fontFamily: "var(--font-mono, monospace)",
                fontWeight: 600,
                fontSize: "12px",
                letterSpacing: "0.05em",
                textTransform: "uppercase",
                background: "#f6f3ec",
                color: "#17140f",
                border: "1px solid #f6f3ec",
              }}
            >
              Reload
            </button>
            <a
              href="/"
              style={{
                width: "100%",
                padding: "14px 28px",
                fontFamily: "var(--font-mono, monospace)",
                fontWeight: 600,
                fontSize: "12px",
                letterSpacing: "0.05em",
                textTransform: "uppercase",
                background: "transparent",
                color: "#f6f3ec",
                border: "1px solid #3a352a",
                textAlign: "center",
                display: "block",
                textDecoration: "none",
              }}
            >
              Go Home
            </a>
          </div>

          {error?.digest && (
            <p
              style={{
                marginTop: "24px",
                fontFamily: "var(--font-mono, monospace)",
                fontSize: "11px",
                letterSpacing: "0.02em",
                color: "#3a352a",
              }}
            >
              Reference: {error.digest}
            </p>
          )}
        </div>
      </body>
    </html>
  );
}
