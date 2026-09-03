---
title: "I Tested 17 Popular Shopify Themes: Real Load Times & Speed Scores (2026)"
excerpt: "I installed 17 top Shopify themes on identical demo stores and measured actual page speed, page weight, and Core Web Vitals. See the full data tables to find the fastest theme for your store."
date: 2026-09-03
date_modified: 2026-09-03
tags:
  - Shopify
  - Performance
featured_image: /blog/fastest-shopify-themes/fastest-shopify-themes.png
---

A few months ago, a client asked me a deceptively simple question: _Which Shopify theme is actually the fastest?_

I went to Google expecting to find a definitive, data-backed answer comparing homepage and product page speeds. Instead, I found marketing fluff and outdated listicles. Nobody was publishing concrete, out-of-the-box performance metrics.

So, I built a controlled environment and tested 17 popular Shopify themes myself.

I ran over 204 individual Lighthouse audits across 17 of the most used free and premium Shopify themes. I am making this data public so store owners and developers can choose their next theme based on real metrics—all raw audit reports are linked in the public repository.

_**TL;DR:**_ _If you just want the final numbers,_ _**scroll straight down to the tables**_ _at the bottom of this post._

## Testing Methodology

To ensure the data is unbiased and accurate, I tested every theme under the exact same conditions.

![LightHouse Script Running and Testing 17 Shopify Themes - Completed Cases over 204](/blog/fastest-shopify-themes/Lighthouse-Script-Testing-Shopify-Themes-Speed.avif)

- **The Environment:** A fresh Shopify Development store populated with Shopify's default test data (13 demo products). Zero third-party apps were installed to prevent script interference.
- **The Pages Tested:** The Homepage and a standard Product Page for every theme.
- **The Audits:** I ran 3 consecutive Lighthouse tests per page, per viewport (Mobile and Desktop). To eliminate network anomalies or random CPU spikes, I discarded the highest and lowest scores and recorded the **median** result.
- **The Tool:** Because Shopify development stores are password-protected, standard browser-based PageSpeed Insights URLs will not work. I used the Lighthouse CLI via a custom Node.js script to bypass the password wall and audit the raw storefront.

> **Disclaimer:** Your mileage will vary. These scores represent the absolute baseline performance of a theme. Once you add high-resolution banners, tracking pixels, and third-party apps, these numbers will change—but this data reveals which themes give you the best foundational head start.

### Themes Tested

I picked a combination of themes which are widely used in Shopify. Some of these are paid and others are free.

| #   | Theme         | Free/Paid |
| --- | ------------- | --------- |
| 1   | **Broadcast** | Paid      |
| 2   | **Dawn**      | Free      |
| 3   | **Craft**     | Free      |
| 4   | **Spotlight** | Free      |
| 5   | **Studio**    | Free      |
| 6   | **Origin**    | Free      |
| 7   | **Sense**     | Free      |
| 8   | **Refresh**   | Free      |
| 9   | **Expanse**   | Paid      |
| 10  | **Horizon**   | Free      |
| 11  | **Impact**    | Paid      |
| 12  | **Be Yours**  | Paid      |
| 13  | **Impulse**   | Paid      |
| 14  | **Prestige**  | Paid      |
| 15  | **Symmetry**  | Paid      |
| 16  | **Palo Alto** | Paid      |
| 17  | **Motion**    | Paid      |

## Overall Rankings (Mobile vs Desktop)

While premium themes often boast about their heavy feature sets, the data proves that you don't necessarily have to sacrifice speed for functionality.

The baseline scores reveal a tight race, with several free Shopify 2.0 framework themes matching the performance of high-end paid options.

<figure aria-label="Top 5 Shopify themes by mobile LCP performance" style="margin: 2rem 0;">
  <figcaption class="label" style="margin-bottom: 1.25rem;">Top 5 Mobile LCP Times &mdash; Lower Is Better</figcaption>
  <div role="list" aria-label="Bar chart of LCP values" style="display: flex; flex-direction: column; gap: 0.75rem;">
    <div role="listitem" style="display: flex; align-items: center; gap: 0.875rem;">
      <span style="width: 5.5rem; flex-shrink: 0; font-family: var(--font-mono); font-size: var(--text-body-sm); color: var(--color-ink);">Expanse</span>
      <span style="flex: 1; background: var(--color-border-light); height: 6px;" aria-hidden="true">
        <span style="display: block; width: 64%; height: 100%; background: var(--color-accent);"></span>
      </span>
      <span style="width: 3rem; flex-shrink: 0; text-align: right; font-family: var(--font-mono); font-size: var(--text-body-sm); color: var(--color-muted);">1.23s</span>
    </div>
    <div role="listitem" style="display: flex; align-items: center; gap: 0.875rem;">
      <span style="width: 5.5rem; flex-shrink: 0; font-family: var(--font-mono); font-size: var(--text-body-sm); color: var(--color-ink);">Broadcast</span>
      <span style="flex: 1; background: var(--color-border-light); height: 6px;" aria-hidden="true">
        <span style="display: block; width: 70%; height: 100%; background: var(--color-accent);"></span>
      </span>
      <span style="width: 3rem; flex-shrink: 0; text-align: right; font-family: var(--font-mono); font-size: var(--text-body-sm); color: var(--color-muted);">1.34s</span>
    </div>
    <div role="listitem" style="display: flex; align-items: center; gap: 0.875rem;">
      <span style="width: 5.5rem; flex-shrink: 0; font-family: var(--font-mono); font-size: var(--text-body-sm); color: var(--color-ink);">Symmetry</span>
      <span style="flex: 1; background: var(--color-border-light); height: 6px;" aria-hidden="true">
        <span style="display: block; width: 78%; height: 100%; background: var(--color-accent);"></span>
      </span>
      <span style="width: 3rem; flex-shrink: 0; text-align: right; font-family: var(--font-mono); font-size: var(--text-body-sm); color: var(--color-muted);">1.50s</span>
    </div>
    <div role="listitem" style="display: flex; align-items: center; gap: 0.875rem;">
      <span style="width: 5.5rem; flex-shrink: 0; font-family: var(--font-mono); font-size: var(--text-body-sm); color: var(--color-ink);">Sense</span>
      <span style="flex: 1; background: var(--color-border-light); height: 6px;" aria-hidden="true">
        <span style="display: block; width: 90%; height: 100%; background: var(--color-accent);"></span>
      </span>
      <span style="width: 3rem; flex-shrink: 0; text-align: right; font-family: var(--font-mono); font-size: var(--text-body-sm); color: var(--color-muted);">1.73s</span>
    </div>
    <div role="listitem" style="display: flex; align-items: center; gap: 0.875rem;">
      <span style="width: 5.5rem; flex-shrink: 0; font-family: var(--font-mono); font-size: var(--text-body-sm); color: var(--color-ink);">Craft</span>
      <span style="flex: 1; background: var(--color-border-light); height: 6px;" aria-hidden="true">
        <span style="display: block; width: 90%; height: 100%; background: var(--color-accent);"></span>
      </span>
      <span style="width: 3rem; flex-shrink: 0; text-align: right; font-family: var(--font-mono); font-size: var(--text-body-sm); color: var(--color-muted);">1.73s</span>
    </div>
  </div>
  <figcaption class="stat-caption" style="margin-top: 1.25rem; text-align: left; text-transform: none; letter-spacing: normal;">
    Mobile Largest Contentful Paint (LCP) for the 5 fastest themes tested. Lower LCP means a faster visual load for mobile shoppers &mdash; a Core Web Vital that directly affects Shopify SEO and conversion rate.
  </figcaption>
</figure>

Here is how they stack up when combining both mobile and desktop scores.

| **Rank** | **Theme**                                                                  | **Mobile Score** | **Desktop Score** | **Mobile LCP** | **Desktop LCP** |
| :------: | :------------------------------------------------------------------------- | :--------------: | :---------------: | :------------: | :-------------: |
|    🥇    | [Expanse](https://themes.shopify.com/themes/expanse/presets/expanse)       |       100        |        100        |     1.23s      |      0.57s      |
|    🥈    | [Origin](https://themes.shopify.com/themes/origin/presets/origin)          |       100        |        100        |     1.74s      |      0.52s      |
|    🥉    | [Broadcast](https://themes.shopify.com/themes/broadcast/presets/broadcast) |        99        |        100        |     1.34s      |      0.33s      |
|    4     | [Symmetry](https://themes.shopify.com/themes/symmetry/presets/symmetry)    |        99        |        96         |     1.50s      |      0.59s      |
|    5     | [Sense](https://themes.shopify.com/themes/sense/presets/sense)             |        99        |        100        |     1.73s      |      0.53s      |
|    6     | [Craft](https://themes.shopify.com/themes/craft/presets/craft)             |        99        |        100        |     1.73s      |      0.52s      |
|    7     | [Spotlight](https://themes.shopify.com/themes/spotlight/presets/spotlight) |        99        |        100        |     1.73s      |      0.52s      |
|    8     | [Studio](https://themes.shopify.com/themes/studio/presets/studio)          |        99        |        100        |     1.73s      |      0.52s      |
|    9     | [Impact](https://themes.shopify.com/themes/impact/presets/impact)          |        99        |        99         |     1.73s      |      0.72s      |
|    10    | [Dawn](https://themes.shopify.com/themes/dawn/presets/dawn)                |        99        |        100        |     1.74s      |      0.52s      |
|    11    | [Horizon](https://themes.shopify.com/themes/horizon/presets/horizon)       |        99        |        100        |     1.92s      |      0.58s      |
|    12    | [Refresh](https://themes.shopify.com/themes/refresh/presets/refresh)       |        98        |        100        |     1.89s      |      0.57s      |
|    13    | [Impulse](https://themes.shopify.com/themes/impulse/presets/impulse)       |        97        |        98         |     2.32s      |      0.97s      |
|    14    | [Prestige](https://themes.shopify.com/themes/prestige/presets/prestige)    |        94        |        97         |     1.78s      |      0.71s      |
|    15    | [Motion](https://themes.shopify.com/themes/motion/presets/motion)          |        94        |        85         |     2.62s      |      1.25s      |
|    16    | [Be Yours](https://themes.shopify.com/themes/be-yours/presets/be-yours)    |        89        |        98         |     3.08s      |      0.60s      |
|    17    | [Palo Alto](https://themes.shopify.com/themes/palo-alto/presets/palo-alto) |        72        |        94         |     2.16s      |      0.97s      |

## Mobile Performance (Detailed)

The mobile speed test for these is where themes actually break. Overall scores are great for a quick glance, but mobile performance is the only metric that truly dictates your bounce rate.

<figure>
  <img src="/blog/fastest-shopify-themes/Expanse-Mobile-Speed.webp" alt="Shopify Theme Expanse LightHouse Score Report" loading="lazy">
  <figcaption class="stat-caption">
    <strong>The Proof is in the Data: Expanse's Perfect Mobile Score</strong>
    <p>If you have ever battled Shopify mobile optimization, you know how incredibly rare it is to see a perfect 100 Lighthouse score on a feature-heavy premium theme. The screenshot above is the raw mobile audit for our top performer, the Expanse theme.</p>
    <p>It achieved a lightning-fast 1.2-second Largest Contentful Paint (LCP) and kept the Total Blocking Time (TBT) to a negligible 90 milliseconds. This is the gold standard. It represents the absolute best-case foundation you can give your store before you start layering on third-party marketing apps, tracking pixels, and high-resolution lifestyle imagery.</p>
  </figcaption>
</figure>

Google uses mobile-first indexing, and over 70% of Shopify traffic comes from smartphones. This is where heavy JavaScript payloads expose poorly optimized themes. When reviewing the mobile data below, pay close attention to Total Blocking Time (TBT).

A high TBT means the store might look loaded, but the customer’s phone is completely frozen while background scripts finish executing.

| **Rank** | **Theme**     | **Score** | **LCP (s)** | **CLS** | **TBT (ms)** | **Page Size (MB)** | **Requests** | **Fully Loaded (s)** |
| :------: | :------------ | :-------: | :---------: | :-----: | :----------: | :----------------: | :----------: | :------------------: |
|    1     | **Expanse**   |  **100**  |    1.23     |  0.001  |      89      |        0.20        |     222      |         2.26         |
|    2     | **Origin**    |  **100**  |    1.74     |  0.000  |      33      |        0.07        |     163      |         1.74         |
|    3     | **Broadcast** |  **99**   |    1.34     |  0.000  |      78      |        0.10        |     112      |         1.77         |
|    4     | **Symmetry**  |  **99**   |    1.50     |  0.000  |      79      |        0.14        |     143      |         2.76         |
|    5     | **Sense**     |  **99**   |    1.73     |  0.000  |      25      |        0.07        |     159      |         1.73         |
|    6     | **Craft**     |  **99**   |    1.73     |  0.000  |      0       |        0.07        |     152      |         1.73         |
|    7     | **Spotlight** |  **99**   |    1.73     |  0.000  |     122      |        0.14        |     162      |         2.23         |
|    8     | **Studio**    |  **99**   |    1.73     |  0.000  |      29      |        0.07        |     149      |         1.87         |
|    9     | **Impact**    |  **99**   |    1.73     |  0.000  |      77      |        0.14        |     129      |         2.53         |
|    10    | **Dawn**      |  **99**   |    1.74     |  0.000  |      20      |        0.24        |     161      |         1.89         |
|    11    | **Horizon**   |  **99**   |    1.92     |  0.000  |      54      |        0.15        |     299      |         2.24         |
|    12    | **Refresh**   |  **98**   |    1.89     |  0.000  |      0       |        0.07        |     160      |         1.89         |
|    13    | **Impulse**   |  **97**   |    2.32     |  0.000  |     104      |        0.10        |     128      |         2.89         |
|    14    | **Prestige**  |  **94**   |    1.78     |  0.000  |     221      |        0.14        |     119      |         3.14         |
|    15    | **Motion**    |  **94**   |    2.62     |  0.000  |      65      |        0.13        |     135      |         2.89         |
|    16    | **Be Yours**  |  **89**   |    3.08     |  0.000  |     186      |        0.16        |     215      |         3.08         |
|    17    | **Palo Alto** |  **72**   |    2.16     |  0.000  |     972      |        0.15        |     117      |         3.91         |

## Desktop Performance (Detailed)

While Desktop performance doesn't impact many stores since B2C ecommerce traffic is overwhelmingly mobile but it matters a lot in B2B, where the high-ticket advantage stays for store owners.

Desktop shoppers might make up a smaller percentage of total traffic, but they typically carry a much higher Average Order Value (AOV). Desktop is also where complex mega-menus, heavy filtering, and high-resolution lifestyle imagery come out to play.

Fortunately, modern web browsers handle desktop rendering beautifully, but this data highlights which themes maintain absolute perfect visual stability (0.00 CLS) while loading heavy assets.

| **Rank** | **Theme**     | **Score** | **LCP (s)** | **CLS** | **TBT (ms)** | **Page Size (MB)** | **Requests** | **Fully Loaded (s)** |
| :------: | :------------ | :-------: | :---------: | :-----: | :----------: | :----------------: | :----------: | :------------------: |
|    1     | **Broadcast** |  **100**  |    0.33     |  0.000  |      0       |        0.10        |     108      |         0.33         |
|    2     | **Dawn**      |  **100**  |    0.52     |  0.000  |      0       |        0.43        |     160      |         0.52         |
|    3     | **Craft**     |  **100**  |    0.52     |  0.000  |      0       |        0.07        |     150      |         0.52         |
|    4     | **Spotlight** |  **100**  |    0.52     |  0.000  |      0       |        0.06        |     156      |         0.52         |
|    5     | **Studio**    |  **100**  |    0.52     |  0.000  |      0       |        0.07        |     148      |         0.52         |
|    6     | **Origin**    |  **100**  |    0.52     |  0.000  |      0       |        0.17        |     167      |         0.52         |
|    7     | **Sense**     |  **100**  |    0.53     |  0.000  |      0       |        0.08        |     155      |         0.53         |
|    8     | **Refresh**   |  **100**  |    0.57     |  0.000  |      0       |        0.07        |     155      |         0.57         |
|    9     | **Expanse**   |  **100**  |    0.57     |  0.000  |      0       |        0.11        |     220      |         0.57         |
|    10    | **Horizon**   |  **100**  |    0.58     |  0.000  |      0       |        0.15        |     297      |         0.58         |
|    11    | **Impact**    |  **99**   |    0.72     |  0.000  |      0       |        0.14        |     127      |         0.72         |
|    12    | **Be Yours**  |  **98**   |    0.60     |  0.001  |      0       |        0.17        |     211      |         0.60         |
|    13    | **Impulse**   |  **98**   |    0.97     |  0.000  |      0       |        0.10        |     127      |         0.97         |
|    14    | **Prestige**  |  **97**   |    0.71     |  0.000  |      0       |        0.24        |     120      |         0.71         |
|    15    | **Symmetry**  |  **96**   |    0.59     |  0.117  |      0       |        0.14        |     138      |         0.59         |
|    16    | **Palo Alto** |  **94**   |    0.97     |  0.029  |      61      |        0.15        |     117      |         1.01         |
|    17    | **Motion**    |  **85**   |    1.25     |  0.000  |      0       |        0.13        |     129      |         1.25         |

## Analysis: What the Numbers Mean

- **Best Mobile Performance:** Expanse (Score: 100, LCP: 1.23s)
- **Worst Mobile Performance:** Palo Alto (Score: 72, LCP: 2.16s)
- **Best Desktop Performance:** Broadcast (Score: 100, LCP: 0.33s)
- **Worst Desktop Performance:** Motion (Score: 85, LCP: 1.25s)
- **Average Mobile Score:** 96
- **Average Desktop Score:** 98
- **Perfect Mobile Score (100):** Expanse, Origin
- **Perfect Desktop Score (100):** Broadcast, Dawn, Craft, Spotlight, Studio, Origin, Sense, Refresh, Expanse, Horizon

### Key Takeaways

The biggest takeaway from testing 204+ page loads is that Shopify’s default free themes (like Dawn and Craft) are incredibly well-optimized right out of the box. However, if you have the budget, premium themes like Expanse and Broadcast prove that you can have advanced merchandising features, complex layouts, and sub-second load times without compromising on performance. Your theme is just your foundation—protect these scores by being ruthless about which third-party apps you install next.

## How to Choose a Fast Shopify Theme

Based on this test, here’s my advice:

1. Start with a lightweight theme (see the top 3 in the table).
2. Always run **PageSpeed Insights** on the theme’s demo store before buying.
3. Avoid themes with built‑in heavy features you don’t need (sliders, animations, page builders).
4. If you already own a slow theme, don’t panic, custom development can often fix speed issues without switching.
5. Remember: speed is important, but design and functionality still matter. Choose a theme that balances both.

---

## What’s Next?

Next, I’m testing **how much popular Shopify apps slow down your store**, you’ll be surprised by the results. Subscribe or check back soon.

_Need help choosing or optimizing a Shopify theme? You can_ _[contact me](mailto:howdy@deepslog.com)_ _for a free speed audit._

## Common FAQ

**What is the fastest Shopify theme in 2026?**\
According to my tests, Expanse and Origin had the best overall performance with a mobile score of perfect 100 (even 100 on Desktop).

**Does a paid theme load faster than a free theme?**\
Not necessarily. Several free themes outperformed premium options in my test.

**How much does theme speed affect SEO?**\
Speed is a ranking factor for Google, and slower stores may see lower organic traffic. A fast theme gives you a head start.

**Can I make my current Shopify theme faster without switching?**\
Yes. Image optimization, removing unused apps, and cleaning up code can dramatically improve speed.

**What tools did you use to measure theme speed?**\
I used LightHouse via Chrome DevTools. The process was automated through a simple script.
