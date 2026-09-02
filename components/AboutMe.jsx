import Link from "next/link";
import Image from "next/image";

export default function AboutMe() {
  return (
    <section className="bg-[var(--color-paper)] border-b border-[color:var(--color-line)]">
      <div className="grid grid-cols-1 lg:grid-cols-[42%_58%]">
        {/* LEFT: photo */}
        <div className="animate-fade-in-up [animation-delay:100ms] border-b border-[color:var(--color-border-light)] p-6 sm:p-10 lg:border-b-0 lg:border-r lg:p-14">
          <div className="relative aspect-[100/110] overflow-hidden border border-[color:var(--color-border-light)] bg-[var(--color-ink-surface)]">
            <Image
              src="/deepak.jpeg"
              alt="Deepak Jangra, Shopify Plus developer"
              fill
              className="object-cover center-top grayscale transition-[filter] duration-500 hover:grayscale-0"
            />
          </div>
        </div>

        {/* RIGHT: content */}
        <div className="flex flex-col justify-center px-[clamp(1.5rem,4vw,4rem)] py-14 lg:py-20">
          <span className="label animate-fade-in-up [animation-delay:200ms]">
            Who You&rsquo;re Working With
          </span>

          <h2 className="mt-4 max-w-xl animate-fade-in-up [animation-delay:300ms]">
            You&rsquo;re not hiring an agency. You&rsquo;re{" "}
            <span className="accent">hiring me.</span>
          </h2>

          <p className="body-lg mt-6 max-w-md animate-fade-in-up [animation-delay:400ms]">
            I&rsquo;m Deepak, a Shopify Plus developer with 9 years of
            experience. I&rsquo;ve rebuilt luxury fashion stores, migrated
            acquired brands, and fixed checkouts that were losing thousands in
            revenue.
          </p>

          <p
            className="body-lg mt-5 max-w-md text-[color:var(--color-ink)] animate-fade-in-up [animation-delay:500ms]"
            style={{ fontWeight: "var(--weight-body-medium)" }}
          >
            I don&rsquo;t outsource your project to a junior team. When you hire
            me, you get me.
          </p>

          <Link
            href="/about"
            className="ui-text mt-8 inline-flex items-center gap-2 text-[color:var(--color-ink)] animate-fade-in-up [animation-delay:600ms]"
          >
            <span className="link-underline">Read My Full Story</span>
            <svg
              className="h-3.5 w-3.5"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path d="M5 12h14M13 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
