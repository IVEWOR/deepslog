import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { getProjectBySlug, getProjectSlugs } from "@/lib/projects";
import markdownToHtml from "@/lib/markdownToHtml";
import ContactModal from "@/components/ContactModal";
import { SITE_URL, DEFAULT_ROLE, SAME_AS, KNOWS_ABOUT } from "@/lib/site";

// Normalizes a date value from frontmatter into a full ISO 8601 datetime
// with a UTC offset — Google's Rich Results validator flags bare dates
// (e.g. "2024-01-15") as missing a time zone. Accepts a bare 4-digit year
// ("2024"), a full date ("2024-01-15"), or an already-complete datetime
// (left untouched if it contains "T").
function normalizeDate(value) {
  if (!value) return undefined;
  if (value.includes("T")) return value;
  if (/^\d{4}$/.test(value)) return `${value}-01-15T00:00:00+00:00`;
  return `${value}T00:00:00+00:00`;
}

// `date_published` / `date_modified` are independent frontmatter fields
// so an ongoing case study can have a real, distinct "last updated" date
// instead of always matching the original publish date. Both fall back
// through to `date` (bare year) so older .md files keep working.
function getPublishInfo(meta) {
  return {
    year: meta.date,
    publishedISO: normalizeDate(meta.date_published || meta.date),
    modifiedISO: normalizeDate(
      meta.date_modified || meta.date_published || meta.date,
    ),
  };
}

export async function generateStaticParams() {
  const slugs = getProjectSlugs();
  return slugs.map((slug) => ({
    slug: slug.replace(/\.md$/, ""),
  }));
}

export async function generateMetadata(props) {
  const params = await props.params;
  try {
    const project = getProjectBySlug(params.slug);
    const meta = project.meta;
    const { publishedISO, modifiedISO } = getPublishInfo(meta);
    const description =
      meta.excerpt ||
      `Case study: how ${meta.title} was rebuilt with ${meta.platform}. Performance, UX, and business results.`;

    const keywords = [
      meta.title,
      ...(meta.platform ? meta.platform.split(",").map((s) => s.trim()) : []),
      "case study",
      "web development",
      "portfolio",
      meta.location || "",
    ].filter(Boolean);

    return {
      title: `${meta.title} — Case Study | deepakj.`,
      description,
      keywords: keywords.join(", "),
      authors: [{ name: "deepakj.", url: SITE_URL }],
      creator: "deepakj.",
      publisher: "deepakj.",
      robots: {
        index: true,
        follow: true,
        "max-image-preview": "large",
        "max-snippet": -1,
        "max-video-preview": -1,
      },
      alternates: {
        canonical: `/work/${params.slug}`,
      },
      openGraph: {
        title: `${meta.title} Case Study | deepakj.`,
        description,
        url: `${SITE_URL}/work/${params.slug}`,
        siteName: `deepakj. — ${meta.role || DEFAULT_ROLE}`,
        type: "article",
        publishedTime: publishedISO,
        modifiedTime: modifiedISO,
        authors: [SITE_URL],
        section: "Portfolio",
        tags: keywords,
        images: [
          {
            url: meta.featured_image
              ? `${SITE_URL}${meta.featured_image}`
              : `${SITE_URL}/deepak.jpg`,
            width: 1200,
            height: 630,
            alt: `${meta.title} project preview — built with ${meta.platform}`,
            type: "image/png",
          },
        ],
      },
      twitter: {
        card: "summary_large_image",
        title: `${meta.title} Case Study | deepakj.`,
        description,
        creator: "@deepakjangra",
        images: [
          meta.featured_image
            ? `${SITE_URL}${meta.featured_image}`
            : `${SITE_URL}/deepak.jpg`,
        ],
      },
      other: {
        "article:author": "deepakj.",
        "article:section": "Portfolio",
        "article:tag": keywords.join(", "),
        ...(publishedISO ? { "article:published_time": publishedISO } : {}),
        ...(modifiedISO ? { "article:modified_time": modifiedISO } : {}),
      },
    };
  } catch (error) {
    return {
      title: "Project Not Found",
      robots: { index: false, follow: false },
    };
  }
}

export default async function ProjectPage(props) {
  const params = await props.params;

  let contentData;
  try {
    contentData = getProjectBySlug(params.slug);
  } catch (error) {
    return notFound();
  }

  if (!contentData || !contentData.meta) {
    return notFound();
  }

  const html = await markdownToHtml(contentData.content);
  const meta = contentData.meta;
  const { year: publishYear, publishedISO, modifiedISO } = getPublishInfo(meta);
  const techStack = meta.platform
    ? meta.platform.split(",").map((item) => item.trim())
    : [];

  // Build comprehensive JSON-LD schemas. This is the ONLY structured
  // data on the page — the JSX below has zero itemScope/itemType/
  // itemProp microdata left in it on purpose. Having both was producing
  // duplicate Article/Breadcrumb items in Google's Rich Results test,
  // and the microdata copy was misattributing the article's author to
  // the client's name via a stray itemProp="author" that was only ever
  // meant to visually label the sidebar. If you ever add a new visible
  // itemProp/itemScope to this file for some reason, it'll create the
  // same duplication again — don't.
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": `${SITE_URL}/#person`,
    name: "deepakj.",
    url: SITE_URL,
    jobTitle: meta.role || DEFAULT_ROLE,
    worksFor: {
      "@type": "Organization",
      name: "deepakj. Independent Developer",
      url: SITE_URL,
    },
    knowsAbout: KNOWS_ABOUT,
    sameAs: SAME_AS,
  };

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "TechArticle",
    "@id": `${SITE_URL}/work/${params.slug}#article`,
    headline: `${meta.title} — Web Development Case Study`,
    description:
      meta.excerpt ||
      `Read how ${meta.title} was rebuilt with ${meta.platform}.`,
    author: {
      "@id": `${SITE_URL}/#person`,
    },
    publisher: {
      "@id": `${SITE_URL}/#person`,
    },
    datePublished: publishedISO,
    dateModified: modifiedISO,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${SITE_URL}/work/${params.slug}`,
    },
    image: meta.featured_image
      ? `${SITE_URL}${meta.featured_image}`
      : `${SITE_URL}/deepak.jpg`,
    articleSection: "Portfolio",
    wordCount: contentData.content?.split(/\s+/).length || 500,
    inLanguage: "en-US",
    isAccessibleForFree: true,
    speakable: {
      "@type": "SpeakableSpecification",
      cssSelector: [".case-study-content", "#project-summary"],
    },
    ...(meta.website && {
      about: {
        "@type": "Organization",
        name: meta.title,
        url: meta.website,
      },
    }),
    // Generic "Thing" rather than "SoftwareApplication" — the latter
    // requires at least two of offers/aggregateRating/applicationCategory/
    // operatingSystem to validate, which a bare tech-stack name will
    // never have. That mismatch was exactly what Google's Rich Results
    // test was flagging as 7 invalid items.
    mentions: techStack.map((software) => ({
      "@type": "Thing",
      name: software,
    })),
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: SITE_URL,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Work",
        item: `${SITE_URL}/work`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: meta.title,
        item: `${SITE_URL}/work/${params.slug}`,
      },
    ],
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Web Development",
    provider: {
      "@id": `${SITE_URL}/#person`,
    },
    areaServed: {
      "@type": "Place",
      name: meta.location || "Global",
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Web Development Services",
      itemListElement: techStack.map((tech) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: `${tech} Development`,
        },
      })),
    },
  };

  const schemas = [
    personSchema,
    articleSchema,
    breadcrumbSchema,
    serviceSchema,
  ];

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": schemas,
  };

  return (
    <main className="min-h-screen bg-white text-slate-900 selection:bg-indigo-100 selection:text-indigo-900">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navbar />

      {/* BACK LINK + BREADCRUMB */}
      <div className="pt-28 pb-6 px-6 lg:px-8 max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-4 animate-fade-in-up">
        <Link
          href="/work"
          className="inline-flex items-center gap-2 text-sm font-semibold text-slate-500 hover:text-indigo-600 transition-colors"
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
            />
          </svg>
          Back to All Work
        </Link>

        <nav aria-label="Breadcrumb">
          <ol className="flex items-center gap-2 text-sm text-slate-400">
            <li>
              <Link
                href="/"
                className="hover:text-indigo-600 transition-colors"
              >
                <span>Home</span>
              </Link>
            </li>
            <li className="text-slate-300">/</li>
            <li>
              <Link
                href="/work"
                className="hover:text-indigo-600 transition-colors"
              >
                <span>Work</span>
              </Link>
            </li>
            <li className="text-slate-300">/</li>
            <li>
              <span className="text-slate-600 font-medium" aria-current="page">
                {meta.title}
              </span>
            </li>
          </ol>
        </nav>
      </div>

      {/* 1. PROJECT HEADER */}
      <header className="pt-2 pb-10 lg:pb-16 px-6 lg:px-8 max-w-7xl mx-auto">
        <h1 className="text-4xl md:text-5xl lg:text-7xl font-extrabold tracking-tight mb-6 text-slate-900 leading-[1.1] animate-fade-in-up [animation-delay:100ms]">
          {meta.title}
        </h1>

        <div
          id="project-summary"
          className="flex flex-wrap items-center gap-4 text-slate-500 font-medium animate-fade-in-up [animation-delay:200ms]"
        >
          {publishYear && (
            <>
              <time
                dateTime={publishedISO}
                className="flex items-center gap-1.5"
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
                    d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
                {publishYear}
              </time>
              <span className="text-slate-300">•</span>
            </>
          )}
          <span className="flex items-center gap-1.5">
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
                d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
              />
            </svg>
            {meta.location}
          </span>
          {meta.result_summary && (
            <>
              <span className="text-slate-300">•</span>
              <span className="text-indigo-600 font-semibold">
                {meta.result_summary}
              </span>
            </>
          )}
        </div>
      </header>

      {/* 2. HERO IMAGE */}
      <section className="px-6 lg:px-8 max-w-7xl mx-auto mb-10 lg:mb-20 animate-fade-in-up [animation-delay:300ms]">
        <figure className="relative w-full aspect-[16/9] bg-slate-50 rounded-xl overflow-hidden border border-slate-200 shadow-lg">
          {meta.featured_image ? (
            <Image
              src={meta.featured_image}
              alt={`${meta.title} project preview — ${meta.platform} development by deepakj.`}
              fill
              className="object-cover object-top"
              priority
              fetchPriority="high"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 1200px"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center text-slate-400">
              <span className="text-lg font-medium">Project preview</span>
            </div>
          )}
        </figure>
      </section>

      {/* 3. CONTENT GRID */}
      <section className="px-6 lg:px-8 max-w-7xl mx-auto pb-24 lg:pb-32">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
          {/* Left Sidebar */}
          <aside className="lg:col-span-4 flex flex-col gap-6 order-2 lg:order-1 lg:sticky lg:top-24">
            {meta.website && (
              <a
                href={meta.website}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-4 px-6 bg-slate-900 text-white text-center font-bold rounded-xl hover:bg-indigo-600 transition-colors shadow-lg shadow-slate-900/10 flex items-center justify-center gap-2 group"
              >
                Visit Live Site
                <svg
                  className="w-4 h-4 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                  />
                </svg>
              </a>
            )}

            <div className="p-8 bg-slate-50 border border-slate-100 rounded-2xl space-y-8">
              <div>
                <h3 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">
                  Client
                </h3>
                <p className="text-slate-900 font-bold">{meta.client}</p>
              </div>

              {techStack.length > 0 && (
                <div>
                  <h3 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-3">
                    Tech Stack
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {techStack.map((tag, idx) => (
                      <span
                        key={idx}
                        className="text-xs font-semibold px-3 py-1.5 rounded-lg bg-white border border-slate-200 text-slate-600 shadow-sm"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {meta.industry && (
                <div>
                  <h3 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">
                    Industry
                  </h3>
                  <p className="text-slate-900 font-medium">{meta.industry}</p>
                </div>
              )}

              {meta.duration && (
                <div>
                  <h3 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">
                    Duration
                  </h3>
                  <p className="text-slate-900 font-medium">{meta.duration}</p>
                </div>
              )}
            </div>

            {meta.testimonial && (
              <blockquote className="p-8 bg-indigo-50 border border-indigo-100 rounded-2xl relative overflow-hidden">
                <svg
                  className="absolute top-4 left-4 w-12 h-12 text-indigo-200 opacity-40"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z" />
                </svg>
                <div className="relative z-10">
                  <p className="text-indigo-900 font-medium leading-relaxed mb-4">
                    &ldquo;{meta.testimonial}&rdquo;
                  </p>
                  <footer>
                    <p className="text-sm font-bold text-indigo-700">
                      — {meta.client}
                    </p>
                  </footer>
                </div>
              </blockquote>
            )}
          </aside>

          {/* Right Column: Parsed Markdown Content */}
          <article className="lg:col-span-8 order-1 lg:order-2 case-study-content">
            <div
              className="prose prose-slate prose-lg max-w-none
                         prose-headings:font-extrabold prose-headings:tracking-tight prose-headings:text-slate-900
                         prose-h2:text-3xl prose-h2:mt-14 prose-h2:mb-6
                         prose-h3:text-2xl prose-h3:mt-10 prose-h3:mb-4
                         prose-p:text-slate-600 prose-p:leading-relaxed prose-p:mb-5
                         prose-a:text-indigo-600 hover:prose-a:text-indigo-500 prose-a:font-semibold prose-a:no-underline hover:prose-a:underline
                         prose-img:rounded-xl prose-img:shadow-md prose-img:border prose-img:border-slate-200
                         prose-figure:my-8
                         prose-figcaption:text-sm prose-figcaption:text-slate-500 prose-figcaption:mt-2 prose-figcaption:text-center
                         prose-blockquote:border-l-4 prose-blockquote:border-indigo-500 prose-blockquote:bg-indigo-50/50 prose-blockquote:py-4 prose-blockquote:px-6 prose-blockquote:rounded-r-xl
                         prose-strong:text-slate-900 prose-strong:font-bold
                         prose-code:text-indigo-700 prose-code:bg-indigo-50 prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded-md prose-code:text-sm prose-code:font-mono
                         prose-pre:bg-slate-900 prose-pre:text-slate-100 prose-pre:rounded-xl prose-pre:p-5
                         prose-ul:space-y-2 prose-li:marker:text-indigo-400
                         prose-ol:space-y-2
                         prose-table:border-collapse prose-table:w-full
                         prose-th:bg-slate-50 prose-th:font-bold prose-th:text-slate-700 prose-th:p-3 prose-th:text-left prose-th:border prose-th:border-slate-200
                         prose-td:p-3 prose-td:border prose-td:border-slate-200 prose-td:text-slate-600"
              dangerouslySetInnerHTML={{ __html: html }}
            />
          </article>
        </div>
      </section>

      {/* 4. BOTTOM CTA — heading/body/modal title are per-project via
          frontmatter (cta_heading, cta_body, cta_modal_title), each with a
          sane generic fallback so older .md files without these fields
          still render fine. */}
      <section className="py-24 bg-slate-950 text-center border-t border-slate-900 relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-150 h-75 bg-indigo-600/10 blur-[100px] rounded-full pointer-events-none" />
        <div className="max-w-3xl mx-auto px-6 lg:px-8 relative z-10">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight mb-6 animate-fade-in-up [animation-delay:100ms] leading-tight">
            {meta.cta_heading || "Building something similar?"}
          </h2>
          <p className="text-lg text-slate-400 mb-10 max-w-xl mx-auto">
            {meta.cta_body ||
              "I help businesses fix slow, broken websites and turn them into something their team can actually run. Let's talk about your project."}
          </p>
          <ContactModal
            triggerText="Start a Project"
            triggerStyle="w-full sm:w-auto flex items-center justify-center gap-2 cursor-pointer px-8 py-4 text-base font-bold text-slate-900 bg-white rounded-xl hover:bg-slate-200 transition-colors mx-auto"
            title={
              meta.cta_modal_title ||
              `Interested in a ${meta.title}-style build?`
            }
            subtitle="Tell me about your project and I'll respond within 24 hours."
            subject={`Project Inquiry: Similar to ${meta.title}`}
            inputLabel="Your Project"
            inputPlaceholder="What are we building? Share your timeline, budget, and must-have features."
          />
        </div>
      </section>

      <Footer />
    </main>
  );
}
