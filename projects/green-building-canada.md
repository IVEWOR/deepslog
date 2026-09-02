---
title: Green Building Canada
website: https://greenbuildingcanada.ca
platform: WordPress, Custom Plugin Development, Theme Development
location: Canada
featured_image: /green-building-canada.png
industry: Job Portal / Green & Sustainable Employment
duration: 2024 engagement
date: "2024"
date_published: "2024"
client: Kiva B
role: WordPress Developer
excerpt: Custom WordPress job portal for the green employment sector, automatically syncing and cleaning listings from a Canadian government feed while giving admins and outside users their own submission and moderation tools.
testimonial: "It was a joy working with Deepak. He delivered what I asked for, patiently working through all issues to arrive at the desired outcome. He is thorough and cares about his work."
cta_heading: Need messy external data turned into something usable?
cta_body: I build custom WordPress plugins that pull in external feeds, clean up inconsistent data automatically, and give your team real submission and moderation tools.
result_summary: Automated government feed sync, structured custom fields, frontend job submission system with moderation tools.
---

## The problem

Green Building Canada is a Canadian job portal focused specifically on eco-friendly, sustainable employment, and the client needed a WordPress site that could pull job listings from a Canadian government feed while still giving them full control over manually posted listings. The real challenge wasn't the integration itself, it was that the government feed came with malformed fields and scattered information, and none of it was usable or searchable without real structure imposed on top of it.

## What I built

### A plugin that turns a messy government feed into structured content

I built a custom plugin that fetches job data from the government feed and integrates it into WordPress in a clean, structured format, using a combination of PHP and JavaScript to extract and assign the fields that actually mattered.

### Automated cleanup running on every save

Using WordPress's `save_post`, `before_save`, and `after_save` hooks, I set up a system where each job post gets processed automatically after it's saved. The system scans the job description for relevant data, salary, company name, location, and populates the corresponding custom fields on its own. If needed, the post resaves itself with the updated structured information, so every listing ends up with clean, searchable metadata without anyone doing that work by hand.

### Submission and moderation for outside users

Beyond the automated feed, I built custom submission forms, account management views, and moderation tools so logged-in users can submit their own job listings, with the admin team keeping full control over what goes live.

## What actually changed

| What changed       | Before              | After                                            |
| ------------------ | ------------------- | ------------------------------------------------ |
| Listings source    | Manual only         | Automated government feed sync + manual          |
| Job data           | Messy, unstructured | Clean, structured, searchable custom fields      |
| Content moderation | Fully manual        | Significantly automated                          |
| Submissions        | Admin-only          | Frontend submission system with moderation tools |

## What the client said

"It was a joy working with Deepak. He delivered what I asked for, patiently working through all issues to arrive at the desired outcome. He is thorough and cares about his work."

- Kiva B, Green Building Canada
