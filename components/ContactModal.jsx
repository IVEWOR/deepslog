"use client";

import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import Cal, { getCalApi } from "@calcom/embed-react";

export default function ContactModal({
  // Trigger Button Props
  triggerText = "Let's Talk",
  triggerStyle = "btn btn-primary",

  // OVERRIDE PROPS (With Standard Defaults)
  title = "Send a brief.",
  subtitle = "I typically reply within 2-4 hours.",
  subject = "New Project Inquiry via Deepslog",
  inputLabel = "Project Details",
  inputPlaceholder = "What are we building?",
  calTitle = "Ready to move fast?",
  calSubtitle = "Skip the email back-and-forth. Grab 15 minutes to see if we're a fit.",

  // Dynamic form fields. Defaults to the classic Name / Email / Details
  // trio (built from inputLabel/inputPlaceholder above) so existing call
  // sites that don't pass `fields` keep working unchanged. Pass a custom
  // array to match whatever a given CTA actually needs (e.g. a website
  // field for audit requests).
  fields,
}) {
  const formFields = fields || [
    { name: "name", label: "Name / Agency", type: "text", required: true },
    { name: "email", label: "Email", type: "email", required: true },
    {
      name: "message",
      label: inputLabel,
      type: "textarea",
      placeholder: inputPlaceholder,
      required: true,
    },
  ];
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [showCalendar, setShowCalendar] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (showCalendar) {
      (async function () {
        const cal = await getCalApi();
        cal("ui", {
          theme: "light",
          styles: { branding: { brandColor: "#9a3a24" } },
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
      setTimeout(() => {
        setShowCalendar(false);
        setIsSuccess(false);
      }, 300);
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(e.target);
    formData.append("access_key", process.env.NEXT_PUBLIC_WEB3FORMS_KEY);
    formData.append("subject", subject); // Uses the passed prop

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });
      const data = await response.json();
      if (data.success) {
        setIsSuccess(true);
      } else {
        alert("Something went wrong. Please try again.");
      }
    } catch (error) {
      alert("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const modalUI = isOpen ? (
    <div
      className="fixed inset-0 z-9999 overflow-y-auto overscroll-none"
      style={{ position: "fixed" }}
    >
      <div
        className="fixed inset-0 backdrop-blur-sm transition-opacity"
        style={{ background: "rgba(23, 20, 15, 0.6)" }}
        onClick={() => setIsOpen(false)}
      ></div>

      <div className="flex min-h-full flex-col justify-center p-4 sm:p-8 relative">
        <div
          className="surface-inverted relative mx-auto my-auto flex w-full max-w-4xl animate-fade-in-up flex-col overflow-hidden border md:h-150 md:max-h-[85vh] md:flex-row"
          style={{ borderColor: "var(--color-ink-surface-line)" }}
        >
          <button
            onClick={() => setIsOpen(false)}
            className="absolute top-3 right-4 z-30 p-2 text-[color:var(--color-ink-surface-muted)] transition-colors hover:text-[color:var(--color-ink-surface-text)] cursor-pointer"
            aria-label="Close"
          >
            <svg
              className="h-4 w-4"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              viewBox="0 0 24 24"
            >
              <path d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {/* LEFT SIDE: Form */}
          <div
            className={`relative z-10 w-full flex-col justify-center overflow-y-auto border-b p-6 md:h-full md:w-1/2 md:border-b-0 md:border-r md:p-8 ${
              showCalendar ? "hidden md:flex" : "flex"
            }`}
            style={{ borderColor: "var(--color-ink-surface-line)" }}
          >
            {isSuccess ? (
              <div className="flex h-full animate-fade-in-up flex-col items-center justify-center text-center">
                <svg
                  className="mb-6 h-10 w-10"
                  style={{ color: "var(--color-status-live)" }}
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  viewBox="0 0 24 24"
                >
                  <path d="M5 13l4 4L19 7" />
                </svg>
                <h3
                  className="text-[length:var(--text-display-md)]"
                  style={{ color: "var(--color-ink-surface-text)" }}
                >
                  Message Received
                </h3>
                <p
                  className="stat-caption mt-3 max-w-[250px] normal-case tracking-normal"
                  style={{ color: "var(--color-ink-surface-muted)" }}
                >
                  I&rsquo;ll review the details and get back to you shortly.
                </p>
              </div>
            ) : (
              <>
                <h3 style={{ color: "var(--color-ink-surface-text)" }}>
                  {title}
                </h3>
                <p
                  className="stat-caption mt-2 mb-6 normal-case tracking-normal"
                  style={{ color: "var(--color-ink-surface-muted)" }}
                >
                  {subtitle}
                </p>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <input
                    type="checkbox"
                    name="botcheck"
                    className="hidden"
                    style={{ display: "none" }}
                  />

                  {formFields.map((field) => (
                    <div key={field.name}>
                      <label
                        className="stat-caption mb-2 block"
                        style={{ color: "var(--color-ink-surface-muted)" }}
                      >
                        {field.label}
                        {field.required === false && (
                          <span className="normal-case"> (optional)</span>
                        )}
                      </label>
                      {field.type === "textarea" ? (
                        <textarea
                          required={field.required !== false}
                          name={field.name}
                          rows={field.rows || 3}
                          className="w-full border px-4 py-3 text-[length:var(--text-body-md)] outline-none transition-colors resize-none"
                          style={{
                            background: "var(--color-ink)",
                            borderColor: "var(--color-ink-surface-line)",
                            color: "var(--color-ink-surface-text)",
                          }}
                          onFocus={(e) =>
                            (e.target.style.borderColor =
                              "var(--color-accent-dim)")
                          }
                          onBlur={(e) =>
                            (e.target.style.borderColor =
                              "var(--color-ink-surface-line)")
                          }
                          placeholder={field.placeholder}
                        ></textarea>
                      ) : (
                        <input
                          required={field.required !== false}
                          type={field.type || "text"}
                          name={field.name}
                          placeholder={field.placeholder}
                          className="w-full border px-4 py-3 text-[length:var(--text-body-md)] outline-none transition-colors"
                          style={{
                            background: "var(--color-ink)",
                            borderColor: "var(--color-ink-surface-line)",
                            color: "var(--color-ink-surface-text)",
                          }}
                          onFocus={(e) =>
                            (e.target.style.borderColor =
                              "var(--color-accent-dim)")
                          }
                          onBlur={(e) =>
                            (e.target.style.borderColor =
                              "var(--color-ink-surface-line)")
                          }
                        />
                      )}
                    </div>
                  ))}

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="btn btn-primary mt-2 w-full disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? "Sending…" : "Send Message"}
                  </button>
                </form>
              </>
            )}
          </div>

          {/* RIGHT SIDE: Calendar */}
          <div
            className={`relative z-10 flex w-full flex-col items-center justify-center transition-all duration-500 ${
              showCalendar
                ? "h-[85vh] p-0 md:h-full md:w-1/2"
                : "p-6 text-center md:h-full md:w-1/2 md:p-8"
            }`}
            style={{ background: "var(--color-ink)" }}
          >
            {showCalendar ? (
              <div className="relative flex h-full w-full animate-fade-in-up flex-col overflow-hidden bg-white">
                <div
                  className="absolute top-0 left-0 right-0 z-20 flex items-center border-b p-4 md:hidden"
                  style={{
                    background: "var(--color-paper)",
                    borderColor: "var(--color-line)",
                  }}
                >
                  <button
                    onClick={() => setShowCalendar(false)}
                    className="ui-text flex items-center gap-1.5 transition-colors hover:text-[color:var(--color-accent)]"
                  >
                    <svg
                      className="h-3.5 w-3.5"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      viewBox="0 0 24 24"
                    >
                      <path d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                    </svg>
                    Back
                  </button>
                </div>
                <div
                  className="grow w-full h-full pt-15 md:pt-0 overflow-y-auto overscroll-contain"
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
              <>
                <svg
                  className="mb-5 h-6 w-6"
                  style={{ color: "var(--color-accent-dim)" }}
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  viewBox="0 0 24 24"
                >
                  <path d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <h3 style={{ color: "var(--color-ink-surface-text)" }}>
                  {calTitle}
                </h3>
                <p
                  className="stat-caption mt-3 mb-6 max-w-xs normal-case tracking-normal"
                  style={{ color: "var(--color-ink-surface-muted)" }}
                >
                  {calSubtitle}
                </p>
                <button
                  onClick={() => setShowCalendar(true)}
                  className="btn w-full max-w-60 cursor-pointer"
                  style={{
                    background: "var(--color-paper)",
                    color: "var(--color-ink)",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = "var(--color-accent)";
                    e.currentTarget.style.color = "var(--color-paper)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = "var(--color-paper)";
                    e.currentTarget.style.color = "var(--color-ink)";
                  }}
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
      <button onClick={() => setIsOpen(true)} className={triggerStyle}>
        {triggerText}
        <svg
          className="h-3.5 w-3.5"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          viewBox="0 0 24 24"
        >
          <path d="M5 12h14M13 5l7 7-7 7" />
        </svg>
      </button>
      {mounted && createPortal(modalUI, document.body)}
    </>
  );
}
