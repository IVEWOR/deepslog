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
      <div className="grid grid-cols-1 md:grid-cols-2 gap-y-16 gap-x-12">
        {visibleProjects.map((project, index) => (
          <Link
            href={`/work/${project.link}`}
            key={project.link}
            className="group animate-fade-in-up flex flex-col"
            style={{ animationDelay: `${200 + (index % 4) * 100}ms` }}
          >
            {/* Image Container */}
            <div className="relative w-full aspect-5/3 rounded-3xl overflow-hidden mb-6 bg-slate-100 border border-slate-200 shadow-sm group-hover:shadow-2xl group-hover:shadow-indigo-500/10 transition-all duration-500">
              <Image
                src={project.image}
                alt={`${project.title} Preview`}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
                sizes="(max-width: 768px) 100vw, 50vw"
              />

              {/* Overlay "View Project" Button that slides up on hover */}
              <div className="absolute inset-0 bg-slate-900/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-[2px]">
                <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-300 bg-white text-slate-900 px-6 py-3 rounded-full font-bold text-sm shadow-xl flex items-center gap-2">
                  View Project Details
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
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    ></path>
                  </svg>
                </div>
              </div>
            </div>

            {/* Meta Information */}
            <div className="flex flex-col grow">
              <div className="flex items-center justify-between mb-3">
                <h2 className="text-2xl font-bold text-slate-900 group-hover:text-indigo-600 transition-colors duration-300">
                  {project.title}
                </h2>
                <span className="text-sm font-mono font-medium text-slate-400 bg-slate-100 px-3 py-1 rounded-full">
                  {project.year}
                </span>
              </div>

              <p className="text-slate-600 mb-6 line-clamp-2">
                {project.description}
              </p>

              {/* Tech Stack Pills */}
              {project.tech.length > 0 && (
                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.tech.map((tag, tagIdx) => (
                    <span
                      key={tagIdx}
                      className="text-xs font-semibold px-3 py-1.5 rounded-lg bg-white border border-slate-200 text-slate-600 shadow-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </Link>
        ))}
      </div>

      {/* Sentinel: crossing into view triggers the next batch to load */}
      {hasMore && (
        <div ref={sentinelRef} className="mt-16 flex justify-center">
          <div className="flex items-center gap-3 text-sm text-slate-400">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-slate-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-slate-400"></span>
            </span>
            Loading more projects…
          </div>
        </div>
      )}

      {reachedEnd && (
        <div className="mt-16 text-center text-sm text-slate-400">
          You've reached the end — that's all {projects.length} projects.
        </div>
      )}
    </>
  );
}
