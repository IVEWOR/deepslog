---
title: Theatre Projects
website: https://theatreprojects.com
platform: WordPress, AWS S3, CloudFront, Custom Geotagging (IP-based), Schema Markup
location: USA / UK / Global
featured_image: /theatre-projects.png
industry: Performing Arts / Theatre Design Consulting
duration: Ongoing maintenance & optimization
date: "2022"
date_published: "2022-11-15"
client: Theatre Projects
role: WordPress Developer & SEO Specialist
excerpt: Comprehensive WordPress maintenance and optimization for a global theatre design consultancy. Fixed accessibility violations, resolved Google indexing errors, offloaded media to AWS, and built a custom IP-based geotagging system routing visitors to NYC, Denver, or London contact blocks.
cta_heading: Is your WordPress site accumulating technical debt?
cta_body: I clean up slow, broken WordPress sites and turn them into fast, search-visible platforms that your team can manage without calling a developer every week.
result_summary: Zero critical accessibility issues, resolved Google indexing errors, custom geotagging system live.
---

## The problem

Theatre Projects is a global theatre design consultancy, offices in New York, Denver, and London, with clients everywhere in between. By the time I got involved, the site had years of accumulated technical debt sitting on top of it. A WAVE accessibility audit flagged critical issues, missing labels, poor contrast, broken keyboard navigation. W3C validation came back with broken markup throughout. Every page loaded every script and stylesheet regardless of whether it needed them. Mobile navigation was broken on key devices. Worse, Google was actively reporting indexing errors that were keeping pages out of search results. The media library was bloated, and there was no systematic approach to SEO or performance underneath any of it.

## What I built

### Fixing the accessibility and standards debt

I went through the WAVE audit line by line and fixed every violation, labels, contrast ratios, keyboard navigation, ARIA attributes. Alongside that I repaired the broken HTML flagged by W3C validation and cleaned up script and stylesheet loading so each page only pulls in what it actually needs, instead of the whole site's asset library on every load.

### Performance and media offload

I added lazy loading and WebP fallback images, minified CSS and JS with critical-path inlining so the page renders fast before the rest loads in behind it. The media library itself moved off the server entirely, onto AWS S3 with CloudFront in front of it, so images load from a global CDN instead of a single origin server.

### SEO and structured data

I implemented schema markup across the site, Organization, LocalBusiness, Article, BreadcrumbList, and went through Google's indexing errors one by one until they were resolved. Metadata, OG tags, and Twitter Cards got a full pass, and I built out location-based landing pages with their own unique schema for each geographic market the firm serves.

### A geotagging system that routes visitors to the right office

With three offices on two continents, showing every visitor the same generic contact block didn't make sense. I built a custom IP-based geotagging system that routes visitors to the right regional contact information automatically, NYC for the Americas east of the Mississippi, Denver for the western US states, London for Europe, Africa, Asia, and Australia. There's a manual override for anyone who lands in the wrong bucket, and each regional block pulls its content from a custom post type so the office details stay editable without a developer.

### Mobile and content architecture

I rebuilt mobile navigation from scratch and fixed news pagination that was broken on mobile devices, added CTAs to the site's highest-traffic pages, and made sure touch targets met minimum size requirements throughout. The location pages themselves run on a custom post type with their own metadata, and the template logic automatically applies the correct regional schema based on which location page it is.

## What actually changed

| What changed | Before | After |
| --- | --- | --- |
| WAVE critical accessibility issues | 12+ | 0 |
| W3C validation errors | Multiple per page | Clean |
| Google indexing errors | Active, blocking pages | Resolved |
| Page load blocking resources | Heavy, unoptimized | Critical path only |
| Media delivery | Server-bound | S3 + CloudFront, global |
| Mobile navigation | Broken | Fully functional |

## The engagement

This was a maintenance and optimization engagement rather than a ground-up rebuild, going through the site's accumulated technical debt systematically, then handling plugin updates, AWS infrastructure, and new features as they came up.
