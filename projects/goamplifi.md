---
title: GoAmplifi
website: https://www.goamplifi.com
platform: WordPress, WP Engine, Ubermenu, WebinarNinja, Salesforce
location: USA
featured_image: /goamplifi.png
industry: Information Management / Data Consultancy
duration: November 2022
date: "2022"
date_published: "2022-11-01"
client: Tracy Zettinig
role: WordPress Developer
excerpt: Webinar registration page templates and Salesforce lead capture integration for a data consultancy, plus mobile menu fixes on WP Engine.
cta_heading: Need webinar pages that convert?
cta_body: I build webinar registration systems and CRM integrations that capture leads without the usual plugin headaches.
result_summary: Reusable webinar templates, Salesforce OAuth integration, mobile menu fix.
---

## The problem

GoAmplifi runs webinars through WebinarNinja but needed registration pages that lived natively on their WordPress site instead. Their mobile menu had a black background that made it effectively disappear on some devices. And their Salesforce lead capture wasn't working at all, every submission was silently failing.

## What I built

### Reusable webinar registration templates

I recreated the WebinarNinja registration page design directly in WordPress as a reusable template, so it could be spun up for each new webinar without rebuilding from scratch, "How First Party Data Helps Build Authentic Relationships" and "3 Key Steps to Build a Data Culture in Manufacturing" both launched on it.

### Fixing the mobile menu

The Ubermenu background color was the direct cause of the disappearing menu, but tracking it down was complicated by WP Engine's server-side caching interfering with the customizer. I fixed the CSS and worked around the caching to get the change to actually take.

### Getting Salesforce lead capture working

The integration was failing with a "user is not admin approved to access this app" error, an OAuth permissions issue on the Salesforce side. I diagnosed it and resolved it by enabling admin approval on the connected app.

## What actually changed

| What changed | Before | After |
| --- | --- | --- |
| Webinar pages | External only, via WebinarNinja | Reusable WordPress templates |
| Mobile menu | Broken, disappearing background | Fixed |
| Lead capture | OAuth error, silently failing | Working Salesforce integration |
