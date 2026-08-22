"use client";

import { useEffect } from "react";
import Link from "next/link";
import ErrorPage from "@/components/ErrorPage";

export default function Error({ error, reset }) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <ErrorPage
      code="500"
      eyebrow="System Error"
      tone="red"
      title="Something broke."
      titleAccent="Not on your end."
      description="An unexpected error occurred while rendering this page. It's been logged — try again, or head back home."
      primaryAction={
        <button
          onClick={() => reset()}
          className="w-full sm:w-auto cursor-pointer flex items-center justify-center gap-2 px-8 py-4 text-base font-bold text-white bg-slate-900 rounded-xl hover:bg-slate-800 transition-colors shadow-lg"
        >
          Try Again
        </button>
      }
      secondaryAction={
        <Link
          href="/"
          className="w-full sm:w-auto px-8 py-4 text-base font-medium text-slate-600 hover:text-slate-900 transition-colors underline-offset-4 hover:underline flex items-center justify-center gap-2"
        >
          Back to Homepage
        </Link>
      }
      extra={
        error?.digest && (
          <p className="text-xs text-slate-400 font-mono">
            Reference: {error.digest}
          </p>
        )
      }
    />
  );
}
