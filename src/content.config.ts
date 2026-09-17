import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

// Single source of truth for case studies. These fields drive the /work
// grid, /work/[slug] pages, sitemap lastmod, and JSON-LD — add a file here
// once and it shows up everywhere. `result_summary` and `featured_image`
// are required so no page ever renders (or shares) without proof + image.
const work = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/work" }),
  schema: z.object({
    title: z.string(),
    seo_title: z.string().optional(),
    website: z.string().optional(),
    platform: z.string().optional(),
    location: z.string().optional(),
    featured_image: z.string(),
    industry: z.string().optional(),
    duration: z.string().optional(),
    date: z.coerce.string(),
    date_published: z.coerce.string().optional(),
    date_modified: z.coerce.string().optional(),
    client: z.string().optional(),
    role: z.string().optional(),
    excerpt: z.string(),
    testimonial: z.string().optional(),
    cta_heading: z.string().optional(),
    cta_body: z.string().optional(),
    result_summary: z.string(),
    tags: z.array(z.string()).optional(),
  }),
});

const blog = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/blog" }),
  schema: z.object({
    title: z.string(),
    seo_title: z.string().optional(),
    excerpt: z.string(),
    date: z.coerce.string(),
    date_modified: z.coerce.string().optional(),
    tags: z.array(z.string()).optional(),
    featured_image: z.string().optional(),
  }),
});

export const collections = { work, blog };
