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
      title="Something broke."
      titleAccent="Not on your end."
      description="An unexpected error occurred while rendering this page. It's been logged — try again, or head back home."
      primaryAction={
        <button
          onClick={() => reset()}
          className="btn btn-primary w-full sm:w-auto"
        >
          Try Again
        </button>
      }
      secondaryAction={
        <Link
          href="/"
          className="ui-text link-underline text-[color:var(--color-ink)]"
        >
          Back to Homepage
        </Link>
      }
      extra={
        error?.digest && (
          <p className="stat-caption font-[family-name:var(--font-mono)]">
            Reference: {error.digest}
          </p>
        )
      }
    />
  );
}
