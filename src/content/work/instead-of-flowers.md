---
title: Instead of Flowers
website: https://www.insteadofflowers.com
platform: WooCommerce, Facebook Pixel, Google Tag Manager
location: USA
featured_image: /instead-of-flowers.png
industry: E-commerce / Gift Baskets
duration: October 2022
date: "2022"
date_published: "2022-10-01"
client: Eric
role: WooCommerce Developer / Pixel Specialist
excerpt: Diagnosed and fixed Facebook Pixel over-reporting on a WooCommerce store by removing the double-firing path through Google Tag Manager and implementing direct pixel placement.
cta_heading: Is your Facebook Pixel reporting incorrect conversion data?
cta_body: I diagnose and fix pixel over-reporting, implement Conversions API, and set up clean tracking that gives you accurate ad performance data.
result_summary: Identified double-firing path, recommended direct pixel implementation, resolved over-reporting.
---

## The problem

Instead of Flowers' Facebook Pixel was over-reporting conversions, which meant the ad account's numbers couldn't be trusted, and without trustworthy numbers, there was no real way to tell which ads were actually working.

## What I built

### Diagnosing the double-firing path

I traced the over-reporting back to its root cause, the Pixel was firing both through Google Tag Manager with custom site-triggered events and through a second path simultaneously, effectively counting the same conversion twice.

### Moving to a direct implementation

I recommended and began moving the Pixel to fire directly on the site instead of routing through Tag Manager, removing the duplicate-firing path at the source rather than trying to filter it out downstream.

### Scoping the next step

I discussed adding Facebook's Conversions API for server-side tracking as the logical next step, and evaluated the PixelYourSite plugin as an alternative implementation route.

## What actually changed

| What changed | Before | After |
| --- | --- | --- |
| Tracking accuracy | Over-reporting | Root cause identified |
| Implementation | Complex, dual-firing GTM path | Direct, single pixel |
| Next steps | None | Conversions API scoped |
