---
title: ABWMS
website: https://abwms.org
platform: Custom PHP, MySQL, Bootstrap Admin Dashboard
location: USA
featured_image: /abwms.png
industry: Medical Certification / Professional Association
duration: September 2022 – January 2023
date: "2022"
date_published: "2022-09-01"
client: ABWMS
role: PHP Developer
excerpt: Custom CSV export tool and security-hardened password reset for a medical certification board's admin dashboard, with year-range filtering and email-based authentication.
cta_heading: Need custom admin tools for your membership database?
cta_body: I build secure PHP admin dashboards with custom export tools, data filtering, and authentication that protects sensitive member information.
result_summary: Custom CSV export with year filtering, email-based password reset, security vulnerability fixed.
---

## The problem

ABWMS is a medical certification board, and their admin dashboard needed to export diplomate records filtered by year range, which it couldn't do. The password reset flow was a real security gap, it only required a member ID and certificate number, both of which could be publicly accessible information rather than anything genuinely private. And CSV exports would silently generate blank files whenever no records matched the filter, with no indication to the admin that anything had gone wrong.

## What I built

### A CSV export tool that actually filters

I built a filterable export by start and end year, with a guard against generating blank files when nothing matches. The export includes the username field but deliberately excludes the password column, which is MD5-hashed and not retrievable anyway, and I explained that reasoning to the client directly so it wasn't a mystery why that column was missing.

### Security-hardened password reset

The original reset flow only checked member ID and certificate number, both of which could be exposed. I redesigned it into an email-based reset with a link, the same pattern used by Facebook or Gmail, and flagged the original weakness to the client so they understood exactly what had been fixed and why it mattered.

### Building on the existing dashboard

The admin panel runs on a Bootstrap template, and I built the new functionality directly on top of it rather than replacing it, keeping the existing data-upload and edit workflows intact and confirmed working throughout.

## What actually changed

| What changed | Before | After |
| --- | --- | --- |
| Export | No filtering | Year-range CSV with blank-file guard |
| Password reset | Insecure, ID-based | Email-based with reset link |
| Security | Vulnerable to unauthorized resets | Hardened |
