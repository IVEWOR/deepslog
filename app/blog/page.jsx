import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactModal from "@/components/ContactModal";
import { getAllPosts } from "@/lib/posts";
import { SITE_URL } from "@/lib/site";

export const metadata = {
  title: "Blog | Shopify Development Notes | Deepak Jangra",
  description:
    "Notes on Shopify, performance, checkout extensibility, and building stores that scale - written from actual client work, not theory.",
  alternates: {
    canonical: "/blog",
  },
  openGraph: {
    title: "Blog | Deepak Jangra",
    description:
      "Shopify Development notes from actual client work - performance, checkout, migrations, and what breaks at scale.",
    url: `${SITE_URL}/blog`,
    siteName: "Deepak Jangra",
    images: [
      {
        url: `${SITE_URL}/og-blog.png`,
        width: 1200,
        height: 630,
        alt: "Deepak Jangra Blog - Shopify Development",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function BlogIndex() {
  const posts = getAllPosts();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Blog",
    "@id": `${SITE_URL}/blog#blog`,
    name: "Deepak Jangra Blog",
    description: "Shopify Development notes from actual client work.",
    url: `${SITE_URL}/blog`,
    author: { "@id": `${SITE_URL}/#person` },
    blogPost: posts.map((post) => ({
      "@type": "BlogPosting",
      headline: post.meta.title,
      url: `${SITE_URL}/blog/${post.slug}`,
      datePublished: post.meta.date,
    })),
  };

  return (
    <main className="min-h-screen bg-(--color-paper) text-(--color-ink) selection:bg-(--color-accent) selection:text-(--color-paper)">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navbar />

      {/* Header */}
      <section className="border-b border-(--color-line) px-[clamp(1.5rem,4vw,4rem)] py-16 lg:py-24">
        <span className="label animate-fade-in-up">Blog</span>
        <h1
          className="mt-4 max-w-2xl animate-fade-in-up [animation-delay:100ms]"
          style={{ fontWeight: "var(--weight-display-black)" }}
        >
          Notes from <span className="accent">actual client work.</span>
        </h1>
        <p className="body-lg mt-6 max-w-md animate-fade-in-up [animation-delay:200ms]">
          Shopify, performance, checkout extensibility, and what actually breaks
          at scale - not theory, just what I&rsquo;ve run into building real
          stores.
        </p>
      </section>

      {/* Column labels - desktop only */}
      <div className="hidden border-b border-(--color-border-light) px-[clamp(1.5rem,4vw,4rem)] py-4 lg:grid lg:grid-cols-[110px_1fr_200px_32px] lg:gap-8">
        <span className="stat-caption">Date</span>
        <span className="stat-caption">Post</span>
        <span className="stat-caption">Topics</span>
        <span></span>
      </div>

      {/* Rows */}
      <div className="px-[clamp(1.5rem,4vw,4rem)]">
        {posts.length === 0 && (
          <p className="body-md py-16">
            No posts published yet. Check back soon.
          </p>
        )}

        {posts.map((post) => (
          <Link
            key={post.slug}
            href={`/blog/${post.slug}`}
            className="group flex flex-col gap-4 border-b border-(--color-border-light) py-8 transition-colors duration-(--duration-fast) hover:bg-(--color-ink)/3 lg:grid lg:grid-cols-[110px_1fr_200px_32px] lg:items-start lg:gap-8 lg:py-10"
          >
            <span className="stat-caption tabular-nums lg:pt-1">
              {new Date(post.meta.date).toLocaleDateString("en-US", {
                month: "short",
                year: "numeric",
              })}
            </span>

            <div className="flex flex-col gap-2">
              <h4 className="transition-transform duration-(--duration-fast) group-hover:translate-x-1">
                {post.meta.title}
              </h4>
              <p className="body-sm max-w-md">{post.meta.excerpt}</p>
              <span className="stat-caption lg:hidden">
                {post.readingTime} min read
              </span>
            </div>

            <span className="ui-text font-normal tracking-normal normal-case text-(--color-muted) lg:pt-1">
              {post.meta.tags?.join(" / ")}
            </span>

            <svg
              className="hidden h-4 w-4 text-(--color-muted) transition-all duration-(--duration-fast) group-hover:translate-x-1 group-hover:text-(--color-accent) lg:block lg:pt-1"
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
        ))}
      </div>

      {/* Closing CTA */}
      <section className="surface-inverted mt-20">
        <div className="px-[clamp(1.5rem,4vw,4rem)] py-20 text-center lg:py-28">
          <h2 className="mx-auto max-w-2xl text-(--color-ink-surface-text) animate-fade-in-up [animation-delay:100ms]">
            Have a project instead of{" "}
            <span className="accent">a question?</span>
          </h2>
          <p className="body-lg mx-auto mt-6 max-w-md animate-fade-in-up [animation-delay:200ms]">
            I write about what I run into building stores - if that sounds like
            your problem, let&rsquo;s talk about it directly.
          </p>
          <div className="mt-10 flex justify-center animate-fade-in-up [animation-delay:300ms]">
            <ContactModal
              triggerText="Start a Project"
              triggerStyle="btn btn-primary"
              title="Start a project."
              subtitle="Tell me what you're building or what's broken. I'll reply within a day."
              subject="New Project Inquiry (From Blog)"
              fields={[
                { name: "name", label: "Name", type: "text", required: true },
                {
                  name: "email",
                  label: "Email",
                  type: "email",
                  required: true,
                },
                {
                  name: "website",
                  label: "Shopify Store URL",
                  type: "url",
                  placeholder: "https://yourstore.com",
                  required: false,
                },
                {
                  name: "message",
                  label: "What do you need?",
                  type: "textarea",
                  placeholder:
                    "New build, replatform, performance, checkout, custom app - what's the priority?",
                  required: true,
                },
              ]}
              calTitle="Rather talk it through?"
              calSubtitle="Grab 15 minutes and we'll go over what to tackle first."
            />
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
