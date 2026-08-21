---
title: Capes Sokol
website: https://capessokol.com/
platform: WordPress, Beaver Builder, Advanced Custom Fields, Search and Filter Pro, MetaBox
location: United States
featured_image: /capes-sokol.png
industry: Legal Services / Law Firm
duration: April 2022 initial build sprint, expanded into a broader site-wide engagement
date: "2022"
date_published: "2022-04"
client: Ty Thomas, Creative Mischief
role: WordPress Developer (Beaver Builder / ACF)
excerpt: Started as a 3-page trial for a law firm site under construction — attorney and practice-area templates, content-relationship architecture, and a custom mega menu that replaced a plugin crashing the site — and grew into a full site-wide engagement covering performance, navigation, and dynamic content templates.
testimonial: "Great progress! It looks very consistent. Glad to hear everything is working again."
cta_heading: Need someone who thinks through the data model before writing code?
cta_body: I don't just build the pages you show me — I ask what's actually driving the content underneath them, so the site holds up as it grows instead of needing a rebuild in a year.
result_summary: 2 of 3 initial pages delivered within 24 hours, custom mega menu replacing a crashing plugin, later performance overhaul. PageSpeed 49 → 84, CLS 2.8 → 0, LCP 5.28s → 300ms.
---

## The problem

Capes Sokol is a law firm with a large, content-heavy site, and I came in through Ty Thomas at Creative Mischief, the agency building it, for three specific pages, Attorney Detail, Practice Detail, and Practice Archive, on a stack of WordPress, Beaver Builder, and Advanced Custom Fields. Ty was explicit about the structure from the start: this was a trial for three pages, meant to find the right long-term developer for the rest of the build. Beyond those three pages, the site had a real technical obstacle already in the way, the agency's usual mega menu plugin crashed the site every time it was installed, with no clear cause.

<!-- MEDIA: Hero/intro screenshot
Caption: The Capes Sokol homepage, live.
Alt: Capes Sokol law firm homepage showing global navigation and hero section.
Description: A clean shot of the live homepage as it looks today, to anchor the case study visually before diving into the build detail.
Show: Full-page or above-the-fold screenshot of capessokol.com homepage, desktop viewport.
-->

## What I built

### Phase 1: Attorney and Practice templates, built from design files

**Attorney Detail Page** — a custom post type template with dynamic fields for each attorney, an accordion section breaking down practice areas and services per person, and tiered search and filtering surfacing related content, articles, blogs, podcasts, tied to that specific person.

**Practice Detail Page** — an individual practice-area template (Business and Finance was the first built), with relationship mapping connecting practice areas to services to the attorneys who provide them.

**Practice Archive Page** — an archive template listing every practice area, built to match the global design system Ty's team had already established, so it read as part of the same site rather than a bolted-on addition.

Two of the three pages were delivered within 24 hours of the contract starting, with all three fully responsive shortly after.

<!-- MEDIA: Attorney Detail page
Caption: The Attorney Detail template, with per-person practice areas and related content.
Alt: Capes Sokol attorney profile page showing accordion-style practice area breakdown and related articles.
Description: Screenshot of a live attorney profile page, ideally showing the accordion expanded and the tiered search/related-content section below it.
Show: Full attorney detail page, desktop, with accordion in expanded state if possible.
-->

<!-- MEDIA: Practice Archive page
Caption: Practice Archive, listing every practice area against the firm's global design system.
Alt: Capes Sokol practice area archive page listing all legal practice categories.
Description: Screenshot of the archive/listing view showing the full set of practice areas.
Show: Full practice archive page, desktop viewport.
-->

### Content architecture, decided before any code

Before building, I pushed on how practice areas, services, and attorneys should actually relate to each other, since that decision shapes everything downstream. Two real options existed: treat practice areas as shared categories with services as subcategories used identically across every attorney, or give each attorney genuinely unique service pages even where the service name overlapped with a colleague's. Getting this right before building meant the template structure didn't need to be redone once real content started going in.

### A mega menu built around a plugin that kept crashing the site

The agency's usual mega menu plugin broke the site on every install, an unresolved, recurring problem by the time I got involved. Rather than keep forcing the plugin, I proposed and built the mega menu natively, using Beaver Builder saved rows, a shortcode, and targeted CSS, so the site got the mega menu design it needed without depending on a plugin that had already proven unstable.

<!-- MEDIA: Mega menu
Caption: The custom mega menu, built without the plugin that kept crashing the site.
Alt: Capes Sokol website mega navigation menu open, showing practice area categories.
Description: Screenshot or short screen-recording of the mega menu in its open state, ideally hovering/clicking to show the dropdown structure.
Show: Desktop nav bar with mega menu expanded.
-->

### Phase 2: Performance and template overhaul

As the relationship grew past the initial three pages into a full site-wide engagement, the site had accumulated real performance debt, PageSpeed sitting in the 40s, Cumulative Layout Shift at 2.8, and Largest Contentful Paint taking 5.28 seconds, on top of scattered design elements and inefficient content management. Beaver Builder had to stay in place for the internal team's static-page editing, so this wasn't a rebuild, it was a hybrid: custom PHP templates powered by MetaBox for dynamic content (attorney profiles, practice areas, resources, firm news), while Beaver Builder kept handling static pages exactly as the team already knew how to use it.

Performance work brought PageSpeed from 49 to 84, Cumulative Layout Shift from 2.8 to 0, and Largest Contentful Paint from 5.28 seconds to 300 milliseconds, through critical CSS optimization, streamlined image handling, and a full rebuild of the global navigation for accessibility and responsiveness.

<!-- MEDIA: Performance before/after
Caption: PageSpeed and Core Web Vitals, before and after.
Alt: Before and after comparison of Capes Sokol PageSpeed scores and Core Web Vitals metrics.
Description: Side-by-side or stacked screenshots of the PageSpeed Insights report, ideally the actual before (49 score) and after (84 score) reports if archived, or a clean recreation of the metric comparison as a simple graphic.
Show: PageSpeed score, CLS, and LCP figures, before vs. after.
-->

## What actually changed

| What changed              | Before                             | After                                                             |
| ------------------------- | ---------------------------------- | ----------------------------------------------------------------- |
| Attorney & practice pages | None built                         | Custom templates with dynamic fields, accordions, tiered search   |
| Content relationships     | Undecided                          | Mapped: practice areas → services → attorneys                     |
| Mega menu                 | Plugin crashed the site on install | Custom-built with Beaver Builder saved rows, no plugin dependency |
| Initial page delivery     | N/A                                | 2 of 3 pages within 24 hours of contract start                    |
| PageSpeed score           | 49                                 | 84                                                                |
| Cumulative Layout Shift   | 2.8                                | 0                                                                 |
| Largest Contentful Paint  | 5.28s                              | 300ms                                                             |
| Navigation (site-wide)    | Outdated                           | Rebuilt, accessible, responsive                                   |
| Content management        | Scattered, editorially rigid       | MetaBox-powered dynamic templates alongside Beaver Builder        |

## What the client said

"Great progress! It looks very consistent. Glad to hear everything is working again."

— Ty Thomas, Creative Mischief

## The engagement

What started as a three-page trial, explicitly framed by the client as a test case for a longer relationship, grew into ongoing, site-wide work: templates, navigation, and eventually a full performance pass, all while working inside an agency's existing design system rather than around it.
