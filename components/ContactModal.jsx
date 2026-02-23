"use client";

import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import Cal, { getCalApi } from "@calcom/embed-react";

export default function ContactModal({ triggerText, triggerStyle }) {
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [showCalendar, setShowCalendar] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Initialize Cal.com UI settings
  useEffect(() => {
    if (showCalendar) {
      (async function () {
        const cal = await getCalApi();
        cal("ui", {
          theme: "light",
          styles: { branding: { brandColor: "#4F46E5" } },
          hideEventTypeDetails: false,
          layout: "month_view",
        });
      })();
    }
  }, [showCalendar]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
      setTimeout(() => setShowCalendar(false), 300);
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const modalUI = isOpen ? (
    <div
      className="fixed inset-0 z-[9999] overflow-y-auto overscroll-none"
      style={{ position: "fixed" }}
    >
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-slate-950/60 backdrop-blur-sm transition-opacity"
        onClick={() => setIsOpen(false)}
      ></div>

      {/* Scrollable Wrapper */}
      <div className="flex min-h-full flex-col justify-center p-4 sm:p-8 relative">
        {/* MODAL CONTAINER
            FIX: Added `md:h-[600px] md:max-h-[85vh]` to strictly limit the desktop height.
        */}
        <div className="relative w-full max-w-4xl mx-auto bg-slate-900 border border-slate-800 rounded-3xl shadow-2xl flex flex-col md:flex-row animate-fade-in-up my-auto overflow-hidden md:h-[600px] md:max-h-[85vh]">
          {/* Global Close Button */}
          <button
            onClick={() => setIsOpen(false)}
            className="absolute top-4 right-4 p-2 text-slate-400 hover:text-white bg-slate-800/80 rounded-full hover:bg-slate-700 transition-colors z-30 backdrop-blur-sm"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              ></path>
            </svg>
          </button>

          {/* LEFT SIDE: The Quick Form 
              FIX: Added `flex flex-col justify-center md:h-full overflow-y-auto` so it centers vertically in the new locked height.
          */}
          <div
            className={`w-full md:w-1/2 p-6 md:p-8 border-b md:border-b-0 md:border-r border-slate-800 relative z-10 bg-slate-900 flex-col justify-center md:h-full overflow-y-auto ${showCalendar ? "hidden md:flex" : "flex"}`}
          >
            <h3 className="text-2xl font-bold text-white mb-1">
              Send a brief.
            </h3>
            <p className="text-slate-400 mb-5 text-sm">
              I typically reply within 2-4 hours.
            </p>

            <form
              action="https://api.web3forms.com/submit"
              method="POST"
              className="space-y-3"
            >
              <input
                type="hidden"
                name="access_key"
                value="YOUR_ACCESS_KEY_HERE"
              />

              <div>
                <label className="block text-xs font-semibold text-slate-500 uppercase tracking-wider mb-1">
                  Name / Agency
                </label>
                <input
                  required
                  type="text"
                  name="name"
                  className="w-full bg-slate-950 border border-slate-800 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-500 uppercase tracking-wider mb-1">
                  Email
                </label>
                <input
                  required
                  type="email"
                  name="email"
                  className="w-full bg-slate-950 border border-slate-800 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-500 uppercase tracking-wider mb-1">
                  Project Details
                </label>
                <textarea
                  required
                  name="message"
                  rows="2"
                  className="w-full bg-slate-950 border border-slate-800 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all resize-none"
                  placeholder="What are we building?"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full py-3 mt-3 bg-indigo-600 hover:bg-indigo-500 text-white font-bold rounded-lg transition-colors shrink-0"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* RIGHT SIDE: Dynamic Cal.com / CTA Area 
              FIX: Changed to `md:h-full` so it stops at 600px.
          */}
          <div
            className={`w-full bg-slate-950 flex flex-col justify-center items-center relative z-10 transition-all duration-500 ${showCalendar ? "p-0 h-[85vh] md:h-full md:w-1/2" : "p-6 md:p-8 text-center md:w-1/2 md:h-full"}`}
          >
            {showCalendar ? (
              // The Live Cal.com Embed
              <div className="w-full h-full bg-white animate-fade-in-up md:rounded-r-3xl flex flex-col relative overflow-hidden">
                {/* Mobile 'Back to Form' Header */}
                <div className="md:hidden w-full bg-slate-50 border-b border-slate-200 p-4 flex items-center z-20 absolute top-0 left-0 right-0 shadow-sm">
                  <button
                    onClick={() => setShowCalendar(false)}
                    className="text-sm font-bold text-slate-600 flex items-center gap-1.5 hover:text-indigo-600 transition-colors"
                  >
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M10 19l-7-7m0 0l7-7m-7 7h18"
                      ></path>
                    </svg>
                    Back to Form
                  </button>
                </div>

                {/* Cal.com component */}
                <div
                  className="flex-grow w-full h-full pt-[60px] md:pt-0 overflow-y-auto overscroll-contain"
                  style={{ WebkitOverflowScrolling: "touch" }}
                >
                  <Cal
                    calLink="deepslog/meet"
                    style={{ width: "100%", height: "100%" }}
                    config={{ layout: "month_view" }}
                  />
                </div>
              </div>
            ) : (
              // The "Ready to move fast" Marketing CTA
              <>
                <div className="w-12 h-12 bg-indigo-500/10 rounded-2xl flex items-center justify-center mb-4 text-indigo-400 border border-indigo-500/20">
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                      d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                    ></path>
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">
                  Ready to move fast?
                </h3>
                <p className="text-slate-400 mb-6 text-sm max-w-xs">
                  Skip the email back-and-forth. Grab 15 minutes on my calendar
                  to see if we're a fit.
                </p>

                <button
                  onClick={() => setShowCalendar(true)}
                  className="px-8 py-3 bg-white text-slate-900 font-bold rounded-lg hover:bg-slate-200 transition-colors w-full max-w-[240px]"
                >
                  Load Calendar
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  ) : null;

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className={
          triggerStyle ||
          "px-8 py-4 text-base font-bold text-slate-900 bg-white rounded-xl hover:bg-indigo-50 hover:scale-105 transition-all shadow-xl flex items-center gap-2"
        }
      >
        {triggerText || "Let's Talk"}
        {typeof triggerText === "string" && (
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M14 5l7 7m0 0l-7 7m7-7H3"
            ></path>
          </svg>
        )}
      </button>

      {mounted && createPortal(modalUI, document.body)}
    </>
  );
}
