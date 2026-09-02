"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

const LOAD_MORE_STEP = 6;
const ROOT_MARGIN = "400px"; // start loading before the sentinel is actually on screen

export default function WorkGrid({ projects, initialVisible }) {
  const [visibleCount, setVisibleCount] = useState(
    initialVisible ?? projects.length,
  );
  const sentinelRef = useRef(null);

  const visibleProjects = projects.slice(0, visibleCount);
  const hasMore = visibleCount < projects.length;
  const reachedEnd = !hasMore && visibleCount > (initialVisible ?? 0);

  useEffect(() => {
    if (!hasMore) return;
    const node = sentinelRef.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setVisibleCount((count) =>
            Math.min(count + LOAD_MORE_STEP, projects.length),
          );
        }
      },
      { rootMargin: ROOT_MARGIN },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [hasMore, projects.length]);

  return (
    <>
      <div className="grid grid-cols-1 gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-4 lg:gap-x-8 lg:gap-y-16">
        {visibleProjects.map((project, index) => (
          <Link
            href={`/work/${project.link}`}
            key={project.link}
            className="group animate-fade-in-up flex flex-col"
            style={{ animationDelay: `${200 + (index % 4) * 100}ms` }}
          >
            {/* Image */}
            <div className="relative aspect-[5/3] w-full overflow-hidden border border-[color:var(--color-border-light)] bg-[var(--color-ink-surface)]">
              <Image
                src={project.image}
                alt={`${project.title} preview`}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
              />
            </div>

            {/* Meta */}
            <div className="mt-5 flex grow flex-col">
              <span className="stat-caption tabular-nums">{project.year}</span>

              <h4 className="mt-2 transition-transform duration-[var(--duration-fast)] group-hover:translate-x-1">
                {project.title}
              </h4>

              <p className="body-sm mt-2 line-clamp-2">{project.description}</p>

              {project.tech.length > 0 && (
                <span className="ui-text mt-auto pt-4 font-normal! tracking-normal! normal-case! text-[color:var(--color-muted)]">
                  {project.tech.join(" / ")}
                </span>
              )}

              <span className="ui-text mt-5 flex items-center gap-2 transition-colors duration-[var(--duration-fast)] group-hover:text-[color:var(--color-accent)]">
                View Project
                <svg
                  className="h-3.5 w-3.5 transition-transform duration-[var(--duration-fast)] group-hover:translate-x-1"
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
              </span>
            </div>
          </Link>
        ))}
      </div>

      {/* Sentinel */}
      {hasMore && (
        <div
          ref={sentinelRef}
          className="mt-16 flex justify-center border-t border-[color:var(--color-line)] pt-8"
        >
          <span className="stat-caption animate-pulse">
            Loading more projects&hellip;
          </span>
        </div>
      )}

      {reachedEnd && (
        <div className="mt-16 border-t border-[color:var(--color-line)] pt-8 text-center">
          <span className="stat-caption">
            You&rsquo;ve reached the end &mdash; that&rsquo;s all{" "}
            {projects.length} projects.
          </span>
        </div>
      )}
    </>
  );
}
