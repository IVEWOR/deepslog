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
      title: `${meta.title} — Case Study | Deepak Jangra`,
      description,
      keywords: keywords.join(", "),
      authors: [{ name: "Deepak Jangra", url: SITE_URL }],
      creator: "Deepak Jangra",
      publisher: "Deepak Jangra",
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
        title: `${meta.title} Case Study | Deepak Jangra`,
        description,
        url: `${SITE_URL}/work/${params.slug}`,
        siteName: `Deepak Jangra — ${meta.role || DEFAULT_ROLE}`,
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
        title: `${meta.title} Case Study | Deepak Jangra`,
        description,
        creator: "@deepakjangra",
        images: [
          meta.featured_image
            ? `${SITE_URL}${meta.featured_image}`
            : `${SITE_URL}/deepak.jpg`,
        ],
      },
      other: {
        "article:author": "Deepak Jangra",
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
    name: "Deepak Jangra",
    url: SITE_URL,
    jobTitle: meta.role || DEFAULT_ROLE,
    worksFor: {
      "@type": "Organization",
      name: "Deepak Jangra Independent Developer",
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
    <main className="min-h-screen bg-[var(--color-paper)] text-[var(--color-ink)] selection:bg-[var(--color-accent)] selection:text-[var(--color-paper)]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navbar />

      {/* Back link + breadcrumb */}
      <div className="animate-fade-in-up flex flex-wrap items-center justify-between gap-4 border-b border-[color:var(--color-border-light)] px-[clamp(1.5rem,4vw,4rem)] py-4">
        <Link
          href="/work"
          className="ui-text link-row text-[color:var(--color-muted)]! flex gap-1"
        >
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
            <path d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          <span className="link-underline">Back to All Work</span>
        </Link>

        <nav aria-label="Breadcrumb">
          <ol className="ui-text flex items-center gap-2 text-[color:var(--color-muted)]!">
            <li>
              <Link
                href="/"
                className="link-underline hover:text-[color:var(--color-ink)]!"
              >
                Home
              </Link>
            </li>
            <li aria-hidden="true">/</li>
            <li>
              <Link
                href="/work"
                className="link-underline hover:text-[color:var(--color-ink)]!"
              >
                Work
              </Link>
            </li>
            <li aria-hidden="true">/</li>
            <li aria-current="page" className="text-[color:var(--color-ink)]!">
              {meta.title}
            </li>
          </ol>
        </nav>
      </div>

      {/* Header */}
      <header className="px-[clamp(1.5rem,4vw,4rem)] py-8 lg:py-20">
        <h1
          className="max-w-3xl animate-fade-in-up [animation-delay:100ms]"
          style={{ fontWeight: "var(--weight-display-black)" }}
        >
          {meta.title}
        </h1>

        <div
          id="project-summary"
          className="ui-text mt-6 flex flex-wrap items-center gap-3 text-[color:var(--color-muted)] animate-fade-in-up [animation-delay:200ms]"
        >
          {publishYear && (
            <>
              <time dateTime={publishedISO}>{publishYear}</time>
              <span aria-hidden="true">/</span>
            </>
          )}
          <span>{meta.location}</span>
          {meta.result_summary && (
            <>
              <span aria-hidden="true">/</span>
              <span className="accent">{meta.result_summary}</span>
            </>
          )}
        </div>
      </header>

      {/* Hero image */}
      <section className="px-[clamp(1.5rem,4vw,4rem)] pb-14 lg:pb-20 animate-fade-in-up [animation-delay:300ms]">
        <figure className="relative aspect-[16/9] w-full overflow-hidden border border-[color:var(--color-border-light)] bg-[var(--color-ink-surface)]">
          {meta.featured_image ? (
            <Image
              src={meta.featured_image}
              alt={`${meta.title} project preview — ${meta.platform} development by Deepak Jangra`}
              fill
              className="object-cover object-top"
              priority
              fetchPriority="high"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 1200px"
            />
          ) : (
            <div className="flex h-full w-full items-center justify-center">
              <span className="stat-caption text-[color:var(--color-ink-surface-muted)]">
                Project preview
              </span>
            </div>
          )}
        </figure>
      </section>

      {/* Content grid */}
      <section className="border-t border-[color:var(--color-border-light)] px-[clamp(1.5rem,4vw,4rem)] py-14 lg:py-20">
        <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Sidebar */}
          <aside className="order-2 flex flex-col gap-10 lg:sticky lg:top-24 lg:order-1 lg:col-span-4">
            {meta.website && (
              <a
                href={meta.website}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary w-full"
              >
                Visit Live Site
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
                  <path d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            )}

            <div className="border-t border-[color:var(--color-border-light)]">
              <div className="border-b border-[color:var(--color-border-light)] py-5">
                <span className="stat-caption">Client</span>
                <p
                  className="mt-2"
                  style={{ fontWeight: "var(--weight-display-bold)" }}
                >
                  {meta.client}
                </p>
              </div>

              {techStack.length > 0 && (
                <div className="border-b border-[color:var(--color-border-light)] py-5">
                  <span className="stat-caption">Tech Stack</span>
                  <p className="ui-text mt-2 font-normal tracking-normal normal-case text-[color:var(--color-muted)]">
                    {techStack.join(" / ")}
                  </p>
                </div>
              )}

              {meta.industry && (
                <div className="border-b border-[color:var(--color-border-light)] py-5">
                  <span className="stat-caption">Industry</span>
                  <p className="body-sm mt-2 text-[color:var(--color-ink)]">
                    {meta.industry}
                  </p>
                </div>
              )}

              {meta.duration && (
                <div className="py-5">
                  <span className="stat-caption">Duration</span>
                  <p className="body-sm mt-2 text-[color:var(--color-ink)]">
                    {meta.duration}
                  </p>
                </div>
              )}
            </div>

            {meta.testimonial && (
              <blockquote className="border-t border-[color:var(--color-line)] pt-6">
                <p className="text-[length:var(--text-display-sm)] leading-[1.6] text-[color:var(--color-ink)]">
                  &ldquo;{meta.testimonial}&rdquo;
                </p>
                <footer className="body-sm mt-4">&mdash; {meta.client}</footer>
              </blockquote>
            )}
          </aside>

          {/* Article body */}
          <article className="order-1 lg:order-2 lg:col-span-8 case-study-content">
            <div
              className="prose max-w-none
                         prose-headings:font-[family-name:var(--font-display)] prose-headings:font-semibold prose-headings:tracking-[-0.01em] prose-headings:text-[color:var(--color-ink)]
                         prose-h2:text-[length:var(--text-display-lg)] prose-h2:mt-14 prose-h2:mb-6
                         prose-h3:text-[length:var(--text-display-md)] prose-h3:mt-10 prose-h3:mb-4
                         prose-p:text-[color:var(--color-muted)] prose-p:leading-[1.7] prose-p:mb-5
                         prose-a:text-[color:var(--color-accent)] prose-a:font-medium prose-a:no-underline hover:prose-a:text-[color:var(--color-ink)]
                         prose-img:border prose-img:border-[color:var(--color-border-light)] prose-img:rounded-none
                         prose-figure:my-8
                         prose-figcaption:stat-caption prose-figcaption:mt-2 prose-figcaption:text-center
                         prose-blockquote:border-l prose-blockquote:border-l-[color:var(--color-line)] prose-blockquote:bg-transparent prose-blockquote:py-1 prose-blockquote:px-6 prose-blockquote:not-italic prose-blockquote:text-[color:var(--color-ink)]
                         prose-strong:text-[color:var(--color-ink)] prose-strong:font-medium
                         prose-code:font-[family-name:var(--font-mono)] prose-code:text-[color:var(--color-accent)] prose-code:bg-transparent prose-code:before:content-none prose-code:after:content-none
                         prose-pre:bg-[var(--color-ink-surface)] prose-pre:text-[color:var(--color-ink-surface-text)] prose-pre:rounded-none prose-pre:border prose-pre:border-[color:var(--color-line)]
                         prose-ul:marker:text-[color:var(--color-accent)] prose-ol:marker:text-[color:var(--color-accent)]
                         prose-table:border-collapse prose-table:w-full
                         prose-th:font-[family-name:var(--font-mono)] prose-th:text-[length:var(--text-label)] prose-th:uppercase prose-th:tracking-[var(--tracking-label)] prose-th:text-[color:var(--color-muted)] prose-th:p-3 prose-th:text-left prose-th:border prose-th:border-[color:var(--color-line)]
                         prose-td:p-3 prose-td:border prose-td:border-[color:var(--color-line)] prose-td:text-[color:var(--color-muted)]"
              dangerouslySetInnerHTML={{ __html: html }}
            />
          </article>
        </div>
      </section>

      {/* Bottom CTA — per-project copy via frontmatter (cta_heading,
          cta_body, cta_modal_title), falls back to generic copy for
          older .md files that don't set these fields. */}
      <section className="surface-inverted">
        <div className="px-[clamp(1.5rem,4vw,4rem)] py-20 text-center lg:py-28">
          <h2 className="mx-auto max-w-2xl text-[color:var(--color-ink-surface-text)] animate-fade-in-up [animation-delay:100ms]">
            {meta.cta_heading || "Building something similar?"}
          </h2>
          <p className="body-lg mx-auto mt-6 max-w-md animate-fade-in-up [animation-delay:200ms]">
            {meta.cta_body ||
              "I help businesses fix slow, broken websites and turn them into something their team can actually run. Let's talk about your project."}
          </p>
          <div className="mt-10 flex justify-center animate-fade-in-up [animation-delay:300ms]">
            <ContactModal
              triggerText="Start a Project"
              triggerStyle="btn btn-primary"
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
        </div>
      </section>

      <Footer />
    </main>
  );
}
