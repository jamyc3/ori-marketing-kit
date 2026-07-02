# Marketing Kit

Launch a product's entire web + search presence from a **single config file**.

Point it at one `*.config.mjs` and it emits a complete, deployable package — a
story-led landing page, intent + content sub-pages, a social share card, full
on-page SEO/AEO (metadata, canonical, Open Graph, JSON-LD), an `sitemap.xml` /
`robots.txt`, App Store copy, launch-post drafts, and a go-live checklist — all
consistent, and all held to an **honesty guard** that fails the build on hype.

It's why every product after the first is ~30 minutes of config instead of days
of hand-written HTML.

**Live example:** [orijournal.app](https://orijournal.app) is
generated entirely by this kit (`products/ori.config.mjs`).

## Quick start

```bash
node generate.mjs ori     # → out/ori/
node generate.mjs jot     # → out/jot/
```

No install step. (It borrows Playwright from a sibling project only to render the
`og.png` share card, and skips that step gracefully if Playwright isn't present.)

## What each run produces (`out/<product>/`)

| File | What it is | Who acts on it |
|------|------------|----------------|
| `index.html` | the landing page (nav → hero → story → showcase* → why → how → FAQ → closing) | deploy |
| `<slug>/index.html` | each sub-page in `pages[]` (e.g. `oura/`, `journal-prompts/`) | deploy |
| `og.png` + `og-card.html` | 1200×630 social share card | deploy |
| `sitemap.xml`, `robots.txt` | crawl surface (every URL listed) | deploy + submit |
| `aso.md` | App Store title / subtitle / 100-char keywords / description | paste into App Store Connect |
| `launch/{producthunt,showhn,reddit}.md` | off-page launch drafts | a human publishes |
| `seo-checklist.md` | GSC + Bing verify/submit, ASO paste, ratings-when-real | a human clicks through |

\* the showcase renders only if the config ships screenshot assets.

## The model: on-page SEO is the floor, these are the levers

1. **ASO** — the real top-of-funnel for an app; most installs are App Store search. → `aso.md`
2. **Off-page authority** — Product Hunt / Show HN / Reddit / roundup outreach; the backlinks on-page can't buy. → `launch/`
3. **Intent pages** — capture adjacent high-intent search (e.g. *Ori for Oura*). → `pages[]`
4. **AEO content** — evergreen Q&A pages that feed Google AI Overviews / ChatGPT. → `pages[]` + `FAQPage`
5. **Bing** — powers Copilot and part of ChatGPT search. → `verification.bingTag`
6. **aggregateRating** — stars in Google results, **only when real** (the guard blocks fakes).

## Add a product

1. Copy `products/jot.config.mjs` → `products/<name>.config.mjs` and edit:
   - **identity** (name, domain, appStoreUrl/Id, oneLiner), **brand** (palette + `lockup`),
   - **copy** (hero / story / why / how / closing), **faqs**,
   - **meta**, **aso**, **launch**, optional **pages[]**, optional **verification** tags.
2. `node generate.mjs <name>` → check `out/<name>/`.
3. Deploy `out/<name>/` to the product's host; run its `seo-checklist.md`.

### One FAQ array, two outputs

`faqs: [{ q, a }]` renders the visible `<details>` accordion **and** the `FAQPage`
JSON-LD from the same source — so answer engines cite the product's true answers,
and the visible copy and the structured data can never drift apart (Google
requires them to match).

### Honesty is enforced, not optional (`lib/honesty.mjs`)

Generation **fails** if the copy sells the product as "AI", makes a clinical /
medical **claim** (disclaimers like "not a medical tool" are fine — checked in
context), or sets an `aggregateRating` without real ratings. Opt a genuinely
factual term out via `honesty.allow`.

## Layout

```
generate.mjs            CLI orchestrator (honesty gate → write package)
products/*.config.mjs   one source-of-truth config per product
lib/
  landing.mjs   page + sub-page assembly       seo.mjs       <head>, sitemap, robots
  css.mjs       themeable stylesheet            schema.mjs    SoftwareApplication / Org / FAQPage
  aso.mjs       App Store copy                  launch.mjs    PH / HN / Reddit drafts
  og.mjs        social card render              checklist.mjs GSC / Bing / ASO steps
  honesty.mjs   the no-AI / no-clinical guard
out/<product>/  generated package (git-ignored)
```

## License

MIT — see [LICENSE](LICENSE).
