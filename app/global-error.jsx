"use client";

import { Funnel_Display } from "next/font/google";

const funnelDisplay = Funnel_Display({ subsets: ["latin"] });

export default function GlobalError({ error, reset }) {
  return (
    <html lang="en">
      <body
        className={`${funnelDisplay.className} bg-slate-950 text-white min-h-screen flex items-center justify-center px-6`}
      >
        <div className="text-center max-w-md">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-red-500/10 border border-red-500/20 text-red-400 font-semibold text-sm mb-6">
            <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></span>
            Critical Error
          </div>

          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-4">
            Something went seriously wrong.
          </h1>

          <p className="text-slate-400 mb-8 leading-relaxed">
            The app failed to load. It's been logged — try reloading, or
            check back in a few minutes.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <button
              onClick={() => reset()}
              className="w-full sm:w-auto cursor-pointer px-6 py-3 text-sm font-bold text-slate-900 bg-white rounded-xl hover:bg-slate-200 transition-colors"
            >
              Reload
            </button>
            <a
              href="/"
              className="w-full sm:w-auto px-6 py-3 text-sm font-bold text-white bg-slate-800 border border-slate-700 rounded-xl hover:bg-slate-700 transition-colors"
            >
              Go Home
            </a>
          </div>

          {error?.digest && (
            <p className="mt-6 text-xs text-slate-600 font-mono">
              Reference: {error.digest}
            </p>
          )}
        </div>
      </body>
    </html>
  );
}
