import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { getProjectBySlug, getProjectSlugs } from "@/lib/projects";
import markdownToHtml from "@/lib/markdownToHtml";

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
    const description =
      meta.excerpt ||
      `Case study on how I built ${meta.title} using ${meta.platform}.`;

    return {
      title: `${meta.title} Case Study`,
      description: description,
      alternates: {
        canonical: `/work/${params.slug}`,
      },
      openGraph: {
        title: `${meta.title} Case Study | Deepak Jangra`,
        description: description,
        url: `/work/${params.slug}`,
        type: "article",
        publishedTime: `${meta.date}-01-01T00:00:00.000Z`,
        authors: ["Deepak Jangra"],
        images: [
          {
            url: meta.featured_image || "/deepak.jpg",
            width: 1200,
            height: 630,
            alt: `${meta.title} website interface`,
          },
        ],
      },
      twitter: {
        card: "summary_large_image",
        title: `${meta.title} Case Study`,
        description: description,
        images: [meta.featured_image || "/deepak.jpg"],
      },
    };
  } catch (error) {
    return { title: "Project Not Found" };
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
  const techStack = meta.platform
    ? meta.platform.split(",").map((item) => item.trim())
    : [];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    "@id": `https://deepslog.com/work/${params.slug}#article`,
    headline: `${meta.title} Case Study`,
    description:
      meta.excerpt || `Read how I built ${meta.title} using ${meta.platform}.`,
    author: {
      "@id": "https://deepslog.com/#person",
    },
    // Assuming date is a year like "2025", we format it safely. Adjust if you use full dates.
    datePublished: `${meta.date}-01-15`,
    dateModified: `${meta.date}-01-15`,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://deepslog.com/work/${params.slug}`,
    },
    ...(meta.website && {
      about: {
        "@type": "Organization",
        name: meta.title,
        url: meta.website,
      },
    }),
    mentions: techStack.map((software) => ({
      "@type": "SoftwareApplication",
      name: software,
    })),
  };

  return (
    <main className="min-h-screen bg-white text-slate-900 selection:bg-indigo-100 selection:text-indigo-900">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navbar />

      {/* 1. PROJECT HEADER */}
      <section className="pt-32 pb-10 lg:pt-40 lg:pb-12 px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="mb-8 animate-fade-in-up">
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
              ></path>
            </svg>
            Back to All Work
          </Link>
        </div>

        <h1 className="text-4xl md:text-5xl lg:text-7xl font-extrabold tracking-tight mb-6 text-slate-900 leading-[1.1] animate-fade-in-up [animation-delay:100ms]">
          {meta.title}
        </h1>

        <div className="flex flex-wrap items-center gap-4 text-slate-500 font-medium animate-fade-in-up [animation-delay:200ms]">
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
                d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
              ></path>
            </svg>
            {meta.date}
          </span>
          <span className="text-slate-300">•</span>
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
              ></path>
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
              ></path>
            </svg>
            {meta.location}
          </span>
        </div>
      </section>

      {/* 2. HERO IMAGE */}
      <section className="px-6 lg:px-8 max-w-7xl mx-auto mb-16 lg:mb-24 animate-fade-in-up [animation-delay:300ms]">
        <div className="relative w-full aspect-video md:aspect-[5/3] bg-slate-50 rounded-[2rem] overflow-hidden border border-slate-200 shadow-xl shadow-slate-200/50">
          {meta.featured_image && (
            <Image
              src={meta.featured_image}
              alt={`${meta.title} Interface Preview`}
              fill
              className="object-cover object-top"
              priority
            />
          )}
        </div>
      </section>

      {/* 3. CONTENT GRID */}
      <section className="px-6 lg:px-8 max-w-7xl mx-auto pb-32">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
          {/* Left Sidebar: Live Site, Tech Stack, Testimonial */}
          <aside className="lg:col-span-4 flex flex-col gap-6 order-2 lg:order-1 sticky top-24">
            {meta.website && (
              <a
                href={meta.website}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-4 px-6 bg-slate-900 text-white text-center font-bold rounded-2xl hover:bg-indigo-600 transition-colors shadow-lg shadow-slate-900/10 flex items-center justify-center gap-2 group"
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
                  ></path>
                </svg>
              </a>
            )}

            <div className="p-8 bg-slate-50 border border-slate-100 rounded-3xl space-y-8">
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
            </div>

            {meta.testimonial && (
              <div className="p-8 bg-indigo-50 border border-indigo-100 rounded-3xl relative overflow-hidden">
                <svg
                  className="absolute top-4 left-4 w-12 h-12 text-indigo-200 opacity-40"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z" />
                </svg>
                <div className="relative z-10">
                  <p className="text-indigo-900 font-medium leading-relaxed mb-4">
                    "{meta.testimonial}"
                  </p>
                  <p className="text-sm font-bold text-indigo-700">
                    — {meta.client}
                  </p>
                </div>
              </div>
            )}
          </aside>

          {/* Right Column: Parsed Markdown Content */}
          <article className="lg:col-span-8 order-1 lg:order-2">
            {/* The 'prose' class relies on @tailwindcss/typography being imported in globals.css */}
            <div
              className="prose prose-slate prose-lg max-w-none 
                         prose-headings:font-extrabold prose-headings:tracking-tight prose-headings:text-slate-900
                         prose-h2:text-3xl prose-h2:mt-12 prose-h2:mb-6
                         prose-p:text-slate-600 prose-p:leading-relaxed
                         prose-a:text-indigo-600 hover:prose-a:text-indigo-500 prose-a:font-semibold
                         prose-li:marker:text-indigo-400 prose-ul:space-y-2
                         prose-strong:text-slate-900 prose-strong:font-bold"
              dangerouslySetInnerHTML={{ __html: html }}
            />
          </article>
        </div>
      </section>

      {/* 4. BOTTOM CTA */}
      <section className="py-24 bg-slate-950 text-center border-t border-slate-900 relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-indigo-600/10 blur-[100px] rounded-full pointer-events-none"></div>
        <div className="max-w-3xl mx-auto px-6 lg:px-8 relative z-10">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight mb-6 animate-fade-in-up [animation-delay:100ms] leading-tight">
            Need a similar solution?
          </h2>
          <p className="text-lg text-slate-400 mb-10">
            Let's discuss how we can apply these same principles to your next
            build.
          </p>
          <Link
            href={`mailto:hello@deepslog.com?subject=Inquiry regarding ${meta.title} Case Study`}
            className="px-10 py-4 text-base font-bold text-slate-900 bg-white rounded-xl hover:bg-indigo-50 hover:scale-105 transition-all shadow-xl flex items-center justify-center gap-2 mx-auto w-fit"
          >
            Let's Talk Project Specs
            <svg
              className="w-5 h-5"
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
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}
