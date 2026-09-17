---
title: Chasin' Unicorns
website: https://chasinunicorns.com
platform: Shopify, Liquid, Recharge, Klaviyo
location: USA
featured_image: /chasin-unicorns.png
industry: Crystal Lifestyle / Subscription Boxes
duration: September–October 2022
date: "2022"
date_published: "2022-09-01"
client: Samantha
role: Shopify Developer
excerpt: Rebuilt a crystal lifestyle brand's Shopify store with custom subscription checkout routing, automated monthly countdown timers, and fixed broken social-share previews that were showing the wrong brand image.
cta_heading: Running a subscription business on Shopify?
cta_body: I build custom Shopify flows for subscription brands - checkout routing, automated timers, and social-share fixes that actually represent your brand.
result_summary: Custom subscription checkout, automated monthly timers, fixed social-share previews.
---

## The problem

Chasin' Unicorns sells a monthly crystal subscription box, and the store's subscription flow was quietly working against the business. The "Choose" button on subscription products wasn't routing customers to Recharge checkout the way it should have, it was falling back to default Shopify checkout instead. Anyone who shared the site on Facebook saw a preview for "girl meets box," a completely different brand, instead of Chasin' Unicorns. The homepage was built on Zipify Pages and kept breaking on mobile. And every month, someone on the team had to manually update the countdown timer and the box name text by hand.

## What I built

### Fixing the checkout routing

I rewired the subscription "Choose" button so it sends customers directly into Recharge checkout instead of falling through to the default Shopify flow, which matters a lot for a subscription business where the whole point is recurring billing set up correctly the first time.

### Automating the monthly cycle

The countdown timer now resets itself on the 17th of every month, and the box-name text updates automatically along with it, so October becomes "October Ritual Box" without anyone touching the theme editor.

### Fixing the social-share preview

The Facebook-specific preview was pulling in the wrong image and text entirely. I corrected the OG metadata so the brand name and description display properly wherever the site gets shared.

### Rebuilding the homepage off Zipify

The homepage had been built on Zipify Pages, and the conflicts between the builder's CSS and the theme's own styles were what caused the mobile breakage. I migrated it onto the native theme to resolve that at the root instead of patching symptoms.

### Instagram and Klaviyo

I connected the Instagram account for an API-based feed display on the site, and integrated Klaviyo for email marketing automation.

## What actually changed

| What changed                 | Before                               | After                    |
| ---------------------------- | ------------------------------------ | ------------------------ |
| Subscription checkout        | Broken routing to default checkout   | Direct Recharge checkout |
| Social-share preview         | Wrong brand image ("girl meets box") | Correct brand metadata   |
| Monthly countdown & box name | Manual update every month            | Automated                |
| Mobile homepage              | Breaking on Zipify Pages             | Stable on native theme   |
