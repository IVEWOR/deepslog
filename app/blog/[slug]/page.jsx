import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactModal from "@/components/ContactModal";
import { getPostBySlug, getPostSlugs, getAllPosts } from "@/lib/posts";
import markdownToHtml from "@/lib/markdownToHtml";
import { SITE_URL, DEFAULT_ROLE, SAME_AS, KNOWS_ABOUT } from "@/lib/site";

export async function generateStaticParams() {
  const slugs = getPostSlugs();
  return slugs.map((slug) => ({ slug: slug.replace(/\.md$/, "") }));
}

export async function generateMetadata(props) {
  const params = await props.params;
  try {
    const post = getPostBySlug(params.slug);
    const meta = post.meta;
    const description = meta.excerpt || `Read "${meta.title}" on Deepak Jangra`;

    return {
      title: `${meta.title} | Deepak Jangra Blog`,
      description,
      alternates: {
        canonical: `/blog/${params.slug}`,
      },
      openGraph: {
        title: meta.title,
        description,
        url: `${SITE_URL}/blog/${params.slug}`,
        siteName: "Deepak Jangra",
        type: "article",
        publishedTime: meta.date,
        modifiedTime: meta.date_modified || meta.date,
        images: [
          {
            url: meta.featured_image
              ? `${SITE_URL}${meta.featured_image}`
              : `${SITE_URL}/og-blog.png`,
            width: 1200,
            height: 630,
            alt: meta.title,
          },
        ],
      },
      twitter: {
        card: "summary_large_image",
        title: meta.title,
        description,
        images: [
          meta.featured_image
            ? `${SITE_URL}${meta.featured_image}`
            : `${SITE_URL}/og-blog.png`,
        ],
      },
    };
  } catch (error) {
    return {
      title: "Post Not Found",
      robots: { index: false, follow: false },
    };
  }
}

export default async function BlogPostPage(props) {
  const params = await props.params;

  let post;
  try {
    post = getPostBySlug(params.slug);
  } catch (error) {
    return notFound();
  }

  if (!post || !post.meta) return notFound();

  const html = await markdownToHtml(post.content);
  const meta = post.meta;

  // "More posts" — up to 2 others, excluding the current one.
  const otherPosts = getAllPosts()
    .filter((p) => p.slug !== post.slug)
    .slice(0, 2);

  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": `${SITE_URL}/#person`,
    name: "Deepak Jangra",
    url: SITE_URL,
    jobTitle: DEFAULT_ROLE,
    knowsAbout: KNOWS_ABOUT,
    sameAs: SAME_AS,
  };

  const blogPostingSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "@id": `${SITE_URL}/blog/${params.slug}#article`,
    headline: meta.title,
    description: meta.excerpt || meta.title,
    author: { "@id": `${SITE_URL}/#person` },
    publisher: { "@id": `${SITE_URL}/#person` },
    datePublished: meta.date,
    dateModified: meta.date_modified || meta.date,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${SITE_URL}/blog/${params.slug}`,
    },
    image: meta.featured_image
      ? `${SITE_URL}${meta.featured_image}`
      : `${SITE_URL}/og-blog.png`,
    inLanguage: "en-US",
    isAccessibleForFree: true,
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
      {
        "@type": "ListItem",
        position: 2,
        name: "Blog",
        item: `${SITE_URL}/blog`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: meta.title,
        item: `${SITE_URL}/blog/${params.slug}`,
      },
    ],
  };

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [personSchema, blogPostingSchema, breadcrumbSchema],
  };

  return (
    <main className="min-h-screen bg-(--color-paper) text-(--color-ink) selection:bg-(--color-accent) selection:text-(--color-paper)">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navbar />

      {/* Back link - the full breadcrumb trail stays in JSON-LD for SEO;
          repeating the whole post title in this thin top bar is what was
          wrapping into a squished two-line mess for longer titles. */}
      <div className="animate-fade-in-up border-b border-(--color-border-light) px-[clamp(1.5rem,4vw,4rem)] py-6">
        <Link
          href="/blog"
          className="ui-text link-row link-underline text-(--color-muted)"
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
          Back to Blog
        </Link>
      </div>

      {/* Header */}
      <header className="px-[clamp(1.5rem,4vw,4rem)] pt-14 lg:pt-20">
        <div className="mx-auto max-w-4xl">
          <span className="label animate-fade-in-up">Blog</span>
          <h1
            className="mt-4 animate-fade-in-up [animation-delay:100ms]"
            style={{ fontWeight: "var(--weight-display-black)" }}
          >
            {meta.title}
          </h1>

          <div className="ui-text mt-6 flex flex-wrap items-center gap-3 text-(--color-muted) animate-fade-in-up [animation-delay:200ms]">
            <time dateTime={meta.date}>
              {new Date(meta.date).toLocaleDateString("en-US", {
                month: "long",
                day: "numeric",
                year: "numeric",
              })}
            </time>
            <span aria-hidden="true">/</span>
            <span>{post.readingTime} min read</span>
            {meta.tags?.length > 0 && (
              <>
                <span aria-hidden="true">/</span>
                <span className="text-(--color-accent)">
                  {meta.tags.join(" / ")}
                </span>
              </>
            )}
          </div>
        </div>
      </header>

      <section
        className={`border-b border-(--color-line) px-[clamp(1.5rem,4vw,4rem)] pb-14 lg:pb-20 animate-fade-in-up [animation-delay:300ms] ${
          meta.featured_image ? "pt-10 lg:pt-14" : "pt-8"
        }`}
      >
        <div className="mx-auto max-w-4xl">
          {meta.featured_image && (
            <figure className="relative aspect-[40/21] w-full overflow-hidden border border-(--color-border-light) bg-(--color-ink-surface)">
              <Image
                src={meta.featured_image}
                alt={meta.title}
                fill
                className="object-cover"
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 1200px"
              />
            </figure>
          )}
        </div>
      </section>

      <section className="px-[clamp(1.5rem,4vw,4rem)] py-14 lg:py-20">
        <article className="mx-auto max-w-4xl">
          <div
            className="prose max-w-none
                       prose-headings:font-display prose-headings:font-semibold prose-headings:tracking-[-0.01em] prose-headings:text-(--color-ink)
                       prose-h2:text-(length:--text-display-lg) prose-h2:mt-14 prose-h2:mb-6
                       prose-h3:text-(length:--text-display-md) prose-h3:mt-10 prose-h3:mb-4
                       prose-p:text-(--color-muted) prose-p:leading-[1.7] prose-p:mb-5
                       prose-a:text-(--color-accent) prose-a:font-medium prose-a:no-underline hover:prose-a:text-(--color-ink)
                       prose-img:border prose-img:border-(--color-border-light) prose-img:rounded-none
                       prose-figure:my-8
                       prose-figcaption:stat-caption prose-figcaption:mt-2
                       prose-blockquote:border-l prose-blockquote:border-l-(--color-border-light) prose-blockquote:bg-transparent prose-blockquote:py-1 prose-blockquote:px-6 prose-blockquote:not-italic prose-blockquote:text-(--color-ink)
                       prose-strong:not-[th strong]:text-(--color-ink) prose-strong:font-medium
                       prose-code:font-mono prose-code:text-(--color-accent) prose-code:bg-transparent prose-code:before:content-none prose-code:after:content-none
                       prose-pre:bg-(--color-ink-surface) prose-pre:text-(--color-ink-surface-text) prose-pre:rounded-none prose-pre:border prose-pre:border-(--color-border-light)
                       prose-ul:marker:text-(--color-accent) prose-ol:marker:text-(--color-accent)
                       prose-table:block md:prose-table:table prose-table:overflow-x-auto prose-table:border-collapse prose-table:w-full prose-table:my-6
                       prose-thead:bg-(--color-ink-surface)
                       prose-th:font-mono prose-th:text-(length:--text-label) prose-th:uppercase prose-th:tracking-(--tracking-label) prose-th:text-(--color-ink-surface-text)! prose-th:p-3 prose-th:text-left prose-th:border prose-th:border-(--color-ink-surface-line) prose-th:whitespace-nowrap
                       prose-td:p-3 prose-td:border prose-td:border-(--color-border-light) prose-td:text-(--color-muted) prose-td:whitespace-nowrap 
                       prose-figcaption:ui-text prose-figcaption:text-left"
            dangerouslySetInnerHTML={{ __html: html }}
          />

          {/* Author blurb */}
          <div className="mt-16 flex items-start gap-4 border-t border-(--color-border-light) pt-8">
            <div>
              <p style={{ fontWeight: "var(--weight-display-bold)" }}>
                Written by Deepak Jangra
              </p>
              <p className="body-sm mt-1 max-w-md">
                Shopify developer with 9 years of experience building custom
                apps, checkout extensions, and headless storefronts for scaling
                merchants.
              </p>
            </div>
          </div>
        </article>
      </section>

      {/* More posts */}
      {otherPosts.length > 0 && (
        <section className="border-t border-(--color-line) px-[clamp(1.5rem,4vw,4rem)] py-14 lg:py-20">
          <span className="label">More Posts</span>
          <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2">
            {otherPosts.map((p) => (
              <Link
                key={p.slug}
                href={`/blog/${p.slug}`}
                className="group border-t border-(--color-border-light) pt-6"
              >
                <span className="stat-caption tabular-nums">
                  {new Date(p.meta.date).toLocaleDateString("en-US", {
                    month: "short",
                    year: "numeric",
                  })}
                </span>
                <h4 className="mt-2 transition-transform duration-(--duration-fast) group-hover:translate-x-1">
                  {p.meta.title}
                </h4>
                <p className="body-sm mt-2">{p.meta.excerpt}</p>
              </Link>
            ))}
          </div>
        </section>
      )}

      {/* Closing CTA */}
      <section className="surface-inverted">
        <div className="px-[clamp(1.5rem,4vw,4rem)] py-20 text-center lg:py-28">
          <h2 className="mx-auto max-w-2xl text-(--color-ink-surface-text) animate-fade-in-up [animation-delay:100ms]">
            Building something <span className="accent">similar?</span>
          </h2>
          <p className="body-lg mx-auto mt-6 max-w-md animate-fade-in-up [animation-delay:200ms]">
            I help businesses fix slow, broken websites and turn them into
            something their team can actually run. Let&rsquo;s talk about your
            project.
          </p>
          <div className="mt-10 flex justify-center animate-fade-in-up [animation-delay:300ms]">
            <ContactModal
              triggerText="Start a Project"
              triggerStyle="btn btn-primary"
              title="Start a project."
              subtitle="Tell me about your project and I'll respond within 24 hours."
              subject={`Project Inquiry (From Blog: ${meta.title})`}
              fields={[
                { name: "name", label: "Name", type: "text", required: true },
                {
                  name: "email",
                  label: "Email",
                  type: "email",
                  required: true,
                },
                {
                  name: "message",
                  label: "Your Project",
                  type: "textarea",
                  placeholder:
                    "What are we building? Share your timeline, budget, and must-have features.",
                  required: true,
                },
              ]}
            />
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
