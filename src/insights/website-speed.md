---
title: "Why a slow website quietly costs you customers"
description: "Visitors don't wait for slow pages, and Google notices. What 'fast' actually means, and the usual reasons sites get slow."
date: 2026-10-16
category: Performance
group: business
sources:
  - title: "Web Vitals (web.dev, Google)"
    url: https://web.dev/articles/vitals
---

Nobody complains about a slow website. They just leave. The visit never shows up as a lost sale, only as a bounce in an analytics report that nobody reads.

Speed is one of the few things on a website you can measure exactly, so it is worth knowing what the numbers mean.

## What "fast" means, in numbers

Google measures real visitors' experience with three Core Web Vitals. For each one, it defines what counts as good:

<figure class="diagram">
<svg viewBox="0 0 720 220" role="img" aria-label="Core Web Vitals good thresholds: Largest Contentful Paint 2.5 seconds or less, Interaction to Next Paint 200 milliseconds or less, Cumulative Layout Shift 0.1 or less.">
  <g fill="none" stroke-width="10" stroke-linecap="round">
    <path d="M40 150a80 80 0 0 1 160 0" stroke="#1c1c1c"/>
    <path d="M40 150a80 80 0 0 1 80-80" stroke="#f5f5f3"/>
    <path d="M280 150a80 80 0 0 1 160 0" stroke="#1c1c1c"/>
    <path d="M280 150a80 80 0 0 1 80-80" stroke="#f5f5f3"/>
    <path d="M520 150a80 80 0 0 1 160 0" stroke="#1c1c1c"/>
    <path d="M520 150a80 80 0 0 1 80-80" stroke="#f5f5f3"/>
  </g>
  <g fill="#f5f5f3" text-anchor="middle">
    <text x="120" y="140" font-size="26" font-weight="600">2.5 s</text>
    <text x="360" y="140" font-size="26" font-weight="600">200 ms</text>
    <text x="600" y="140" font-size="26" font-weight="600">0.1</text>
    <text x="120" y="184" font-size="15" font-weight="600">Loading (LCP)</text>
    <text x="360" y="184" font-size="15" font-weight="600">Responsiveness (INP)</text>
    <text x="600" y="184" font-size="15" font-weight="600">Stability (CLS)</text>
    <text x="120" y="206" font-size="13" fill="#8a8a8a">main content visible</text>
    <text x="360" y="206" font-size="13" fill="#8a8a8a">reacts to a tap or click</text>
    <text x="600" y="206" font-size="13" fill="#8a8a8a">nothing jumps around</text>
  </g>
</svg>
<figcaption>"Good" thresholds for each Core Web Vital, or lower. Google checks them at the 75th percentile of real visits, on mobile and desktop separately.</figcaption>
</figure>

- **Largest Contentful Paint (LCP):** the main content should appear within **2.5 seconds**.
- **Interaction to Next Paint (INP):** the page should respond to taps and clicks within **200 milliseconds**.
- **Cumulative Layout Shift (CLS):** the layout should stay put, with a score of **0.1 or less**. This is the button that moves just as you tap it.

The bar is set at the 75th percentile of visits, which means most of your visitors, on their real phones and connections, need to get that experience. Not just you, on office Wi-Fi.

## Why sites get slow

**Huge images.** A photo straight from a phone camera can weigh more than the rest of the page combined. Resizing and converting images to modern formats like WebP is often the single biggest win.

**Page builders and plugin piles.** Each plugin and builder adds its own CSS and JavaScript, on every page, whether that page needs it or not.

**Too many outside scripts.** Chat widgets, trackers, embedded feeds and font services each add requests the browser has to wait for.

**Cheap or distant hosting.** If the server is slow to answer, everything after it starts late.

**Fonts loaded the slow way.** Text that waits for a font download, or jumps when the font arrives, hurts both loading and stability.

## How to check yours

Run your homepage through [PageSpeed Insights](https://pagespeed.web.dev/). Look at the mobile result first, since that is how most people will meet your site. If there is field data at the top, that is what real visitors experienced. Below it, the report lists what to fix, roughly in order of impact.

## Fast is not a one-time job

A site that launches fast can get slow within months: a new plugin, a giant banner image, another tracking script. Checking speed after every significant change, and before adding anything new, keeps it fast.
