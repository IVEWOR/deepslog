import Link from "next/link";

export default function Footer() {
  return (
    <footer className="">
      <div className="flex flex-col items-start gap-6 px-[clamp(1.5rem,4vw,4rem)] py-8 sm:flex-row sm:items-center sm:justify-between sm:gap-4">
        <p className="stat-caption text-[color:var(--color-ink-surface-muted)]">
          © 2026 Deepak Jangra - Shopify Developer
        </p>

        <div className="flex items-center gap-6">
          <Link
            href="/agency"
            className="ui-text link-underline text-[color:var(--color-ink-surface-muted)]!"
          >
            Agency Partners
          </Link>
          <a
            href="https://linkedin.com/in/thedeepakjangra"
            target="_blank"
            rel="noopener noreferrer"
            className="ui-text link-underline text-[color:var(--color-ink-surface-muted)]!"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/IVEWOR"
            target="_blank"
            rel="noopener noreferrer"
            className="ui-text link-underline text-[color:var(--color-ink-surface-muted)]!"
          >
            GitHub
          </a>
          <a
            href="#"
            className="ui-text link-underline text-[color:var(--color-ink-surface-muted)]!"
            aria-label="Back to top"
          >
            Top
          </a>
        </div>
      </div>
    </footer>
  );
}
