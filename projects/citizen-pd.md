---
title: Citizen PD
website: https://citizenpd.com
platform: WordPress, Advanced Custom Fields (ACF), Contact Form 7
location: USA
featured_image: /citizen-pd.png
industry: Video Platform / Citizen Journalism
duration: September 2022
date: "2022"
date_published: "2022-09-01"
client: Citizen PD
role: WordPress Developer
excerpt: Attempted multiple-image upload integration for a citizen journalism video platform. Diagnosed Contact Form 7 limitations and recommended ACF Pro for repeater fields. Scope was limited by a 10-hour cap and complex legacy code.
cta_heading: Have a complex form that needs custom fields?
cta_body: I diagnose form limitations and recommend the right architecture - whether that's custom code, ACF Pro, or a complete rebuild.
result_summary: Diagnosed CF7 limitations, recommended ACF Pro, scoped custom rebuild approach.
---

## The problem

Citizen PD's video submission form needed multiple-image upload support, and the form was built on Contact Form 7, which doesn't support repeatable fields without ACF Pro layered on top. The codebase underneath it had been heavily customized over time and was fragile enough that small changes carried real risk.

## What I built

### An honest diagnosis of the real constraint

I identified that Contact Form 7 simply can't support repeatable fields like multiple images without the ACF Pro premium add-on, and rather than patching around that limitation, recommended rebuilding the submission page as custom rather than continuing to force CF7 into a shape it wasn't built for.

### A scoped path forward

I documented an approach for syncing CF7 field data to post meta via a webhook, though it wasn't confirmed resolved within the engagement's time constraints. I also flagged two separate, unrelated bugs along the way, Google and Facebook social login not working in production, and Google address autocomplete failing on the video upload form.

### Working honestly within a hard cap

This engagement was explicitly capped at 10 hours, and the legacy codebase made most changes genuinely risky, hundreds of lines of code for what should have been small changes, with a real chance that touching one thing would break another. I scoped the work and the risk honestly rather than overpromising what could get done in the time available.

## What actually changed

| What changed   | Before                     | After                                          |
| -------------- | -------------------------- | ---------------------------------------------- |
| Diagnosis      | Unclear why uploads failed | Root cause identified (CF7 limitations)        |
| Recommendation | No clear path              | ACF Pro + custom rebuild scoped                |
| Scope          | Unbounded risk             | Honest assessment of time and risk constraints |
