---
title: Petit Nord
website: https://petitnord.com
platform: Shopify Plus, Klaviyo, Shopify Flow, Checkout Blocks, SPY ERP, Webshipper
location: Denmark
featured_image: /petitnord.png
industry: Fashion / Premium Children's Footwear
duration: 8-hour paid assessment, plus a separate Shopify Scripts migration (June 2026)
date: "2026"
date_published: "2026-06"
client: Christian
role: Shopify Plus Consultant
excerpt: Selected as one of three finalists for a paid 8-hour Shopify Plus consolidation assessment across four regional stores — real Klaviyo data, a per-store app matrix, and a migration risk register — plus a separate Shopify Scripts migration completed ahead of Shopify's June 30, 2026 checkout.liquid deprecation deadline.
cta_heading: Weighing a Shopify Plus multi-store consolidation?
cta_body: I deliver data-backed Shopify Plus assessments — real API counts, per-store app matrices, and a migration risk register — not a quote based on a five-minute look at your storefronts.
result_summary: Delivered a full consolidation assessment (audit, risk register, migration plan, timeline & budget) across 4 Shopify Plus stores; completed the store's Shopify Scripts → Checkout Blocks migration ahead of the June 30, 2026 deprecation deadline.
---

## The problem

Petit Nord is a Danish premium children's footwear brand running four separate Shopify Plus stores, EU, Denmark, France, and Global, each independently wired into SPY ERP as the system of record, Webshipper for fulfillment, and its own Klaviyo account. With their Shopify Plus renewal approaching, the team wanted to know whether consolidating into a single store on Shopify Markets was actually the right call, and needed someone to verify what was genuinely different across the four stores rather than assume they were near-identical. Separately, on a hard deadline, the stores were still running an active Shopify Script and checkout.liquid customizations that Shopify was deprecating on June 30, 2026, work that had to move regardless of what happened with consolidation.

## What I built

### An audit built on real numbers, not a five-minute look

I was one of three candidates selected for a paid, fixed eight-hour assessment. Rather than working from screenshots or assumptions, I got direct access to all four stores and pulled real data: Klaviyo profile counts across all five accounts (Global 61,001, EU 38,390, France 25,479, Denmark 10,406, 135,276 profiles total), a per-store app matrix that surfaced France running Klarna Payments and Global running KNO Post Purchase Surveys, neither present on the other stores, and confirmation that all four stores actually route through Cozy GeoIP rather than Shopify Markets natively, despite looking market-segmented on the surface.

### A full assessment: audit, risk register, migration plan, timeline and budget

I delivered a structured document covering the current-state audit, a risk register flagging what actually mattered, Klarna on France, the EU Klaviyo account's 69% suppression rate that would need cleanup before any list merge, KNO surveys on Global, a phased migration plan, and a timeline and budget for the full consolidation.

### Completing the Shopify Scripts migration ahead of the deadline

Separately from the consolidation assessment, I migrated the stores' active Shopify Scripts logic off the deprecated checkout before Shopify's June 30, 2026 cutoff. That meant identifying exactly what was running, a free-shipping discount script, FREECARE on the Global store, FREESHIPPINGFORYOU on EU, Denmark, and France, matching on partial rate-name text like "Home," "Shop," or, for France, "point," and rebuilding the same logic natively in Shopify's Checkout Blocks app using contains-based option-title filtering, so the discount behavior carried over exactly rather than approximately. On the Global store, the new discount briefly conflicted with an existing expired native discount sharing the same name, resolved by creating it deactivated under a placeholder name pending the client's confirmation to activate.

## What actually changed

| What changed | Before | After |
| --- | --- | --- |
| Consolidation risk | Unknown, assumed similar across 4 stores | Quantified: Klarna, KNO surveys, and a 69% Klaviyo suppression rate identified as the real risks |
| Klaviyo visibility | Scattered across 5 accounts | Consolidated profile counts and suppression data in one document |
| Shopify Scripts | Active, on a hard June 30, 2026 deprecation deadline | Migrated to Checkout Blocks, deadline met |
| Checkout customizations | Running on deprecated checkout.liquid | Migrated off ahead of cutoff |

## Where this landed

The assessment was delivered in full, and Christian was clear the choice came down to relationship as much as anything. In the end, the main consolidation build went to a different vendor who came in at a lower rate. The separately-agreed Shopify Scripts migration was completed as scoped, and the contract closed cleanly with payment released.
