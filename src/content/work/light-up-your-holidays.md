---
title: Light Up Your Holidays
website: https://lightupyourholidays.com
platform: WordPress, Ninja Forms, Salesforce CRM
location: USA
featured_image: /light-up-your-holidays.png
industry: Holiday Lighting Services
duration: October–November 2022
date: "2022"
date_published: "2022-10-01"
client: Kelly
role: WordPress Developer / CRM Integrator
excerpt: Salesforce CRM integration for 6 site forms via Ninja Forms, diagnosing API access limitations and escalating to Ninja Forms support for resolution.
cta_heading: Struggling to connect your WordPress forms to Salesforce?
cta_body: I diagnose CRM integration issues, walk clients through API access setup, and escalate to plugin support teams when needed to get your lead flow working.
result_summary: Diagnosed Salesforce API limitation, enabled API access, escalated to Ninja Forms support, integration resolved.
---

## The problem

Light Up Your Holidays had six forms across the site that needed to feed leads into Salesforce through Ninja Forms, and the integration simply wasn't working. Ninja Forms' own documentation was written against an older version of Salesforce than what the client was actually running.

## What I built

### Diagnosing the real limitation

I traced the failure back to Salesforce's plan tiers, API access is only available by default on Enterprise, Unlimited, Developer, and Performance editions, and the client was on the Professional plan, which doesn't include it.

### Walking the client through the fix

Rather than treating this as unfixable, I walked Kelly through enabling API access via Salesforce Permission Sets, specifically the System Permissions → API Enabled setting, so the integration had something to actually connect to.

### Escalating what was left

I configured the Ninja Forms Salesforce CRM extension across all six forms, then escalated a remaining issue directly to Ninja Forms support with temporary login credentials, working with their team through Customer Success and engineering to resolve an OAuth error reading "user is not admin approved to access this app," fixed by enabling admin approval on the connected app.

## What actually changed

| What changed | Before | After |
| --- | --- | --- |
| Integration | Broken | Working, after API access + OAuth fix |
| Documentation gap | Outdated plugin docs | Resolved via direct support escalation |
| Client understanding | Unaware of Salesforce API tier limits | Guided through permission setup |
