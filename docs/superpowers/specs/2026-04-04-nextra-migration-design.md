# Nextra Migration — Design Spec

## Goal

Migrate the Personal OS docs site from Astro/Starlight to Nextra 4 (Next.js App Router) and add polished UX touches inspired by The Graph's documentation — sidebar icons, section indicators, better callout styling, and a custom theme that doesn't fight us on every color override.

## Why

Starlight's inverted gray scale (`--sl-color-white` = darkest text in light mode) and aggressive internal style overrides make custom theming a constant battle. Every color fix introduces a new regression. Nextra uses straightforward CSS variables and Tailwind — what you set is what you get.

## Scope

- Full migration of all 28 content pages (markdown stays almost identical)
- Custom landing page (rebuild from index.mdx)
- Custom theme with proper light/dark mode
- Sidebar with icons per section, active indicators, collapse behavior
- Deployed to same GitHub Pages URL
- Content unchanged — this is a platform swap, not a rewrite

## Architecture

**Framework:** Nextra 4 on Next.js 15 (App Router)
**Styling:** Tailwind CSS + CSS variables for theme tokens
**Content:** MDX files in `content/` directory, organized by section
**Navigation:** `_meta.js` files per directory with icons via JSX
**Deployment:** GitHub Pages via `next export` (static)

## Content Mapping

Current Starlight structure maps 1:1 to Nextra:

```
docs/src/content/docs/           →  docs/content/
  index.mdx                      →  content/index.mdx (landing page)
  getting-started/               →  content/getting-started/
    what-is-this.md              →  content/getting-started/what-is-this.mdx
    install-and-onboard.md       →  content/getting-started/install-and-onboard.mdx
    choose-your-tool.md          →  content/getting-started/choose-your-tool.mdx
    your-first-day.md            →  content/getting-started/your-first-day.mdx
  core-framework/                →  content/core-framework/
    the-cockpit.md               →  content/core-framework/the-cockpit.mdx
    the-daily-loop.md            →  content/core-framework/the-daily-loop.mdx
    okrs.md                      →  content/core-framework/okrs.mdx
    weekly-and-quarterly-reviews.md → content/core-framework/weekly-and-quarterly-reviews.mdx
    identity-and-habits.md       →  content/core-framework/identity-and-habits.mdx
    para-method.md               →  content/core-framework/para-method.mdx
    getting-things-done.md       →  content/core-framework/getting-things-done.mdx
  agents/                        →  content/agents/
  commands/                      →  content/commands/
  modules/                       →  content/modules/
  integrations/                  →  content/integrations/
  making-it-yours/               →  content/making-it-yours/
```

Markdown content requires minimal changes:
- Remove Starlight frontmatter (`template: splash`, Starlight-specific fields)
- Keep `title` and `description` in frontmatter (Nextra uses these)
- Convert Starlight-specific components (if any) to Nextra equivalents

## Sidebar Design (inspired by The Graph)

Each top-level section gets an icon and a distinct visual treatment:

```
[icon] Getting Started          ← rocket/arrow icon, expanded by default
         What Is This?
         Install & Onboard      ← active state: left border accent + bold
         Choose Your Tool
         Your First Day
  ─────────────────────         ← separator
[icon] Core Framework           ← book/grid icon
         The Cockpit
         The Daily Loop
         OKRs
         ...
  ─────────────────────
[icon] Agent Architecture       ← bot/cpu icon
[icon] Commands Reference       ← terminal icon
  ─────────────────────
[icon] Modules                  ← puzzle icon
[icon] Integrations             ← plug icon
[icon] Making It Yours          ← wrench icon
```

**Active state:** Left border accent (3px, primary color) + slightly bolder text + subtle background tint
**Hover state:** Background tint, smooth transition
**Section headers:** Uppercase, smaller, slightly muted — like The Graph's section groupings
**Collapse:** Sections collapse/expand with chevron indicator, smooth animation

## Theme Design

### Color Tokens (CSS Variables)

**Light mode:**
- Background: `#FAFAF7` (warm off-white)
- Surface: `#F3F2EE` (sidebar, nav)
- Text primary: `#1a1a18`
- Text secondary: `#484540`
- Text muted: `#7d7a72`
- Accent: `#3a6b8a` (muted blue)
- Accent hover: `#2c5670`
- Border: `#e0ded8`
- Code bg: `#ECEAE4`

**Dark mode:**
- Background: `#171717` (neutral dark)
- Surface: `#1e1e1e`
- Text primary: `#e8e6e2`
- Text secondary: `#b0ada6`
- Text muted: `#858380`
- Accent: `#7bb0d4`
- Border: `#2e2e2e`
- Code bg: `#1e1e1e`

These are direct values — no inverted scales, no framework fighting.

### Typography

- **Headings:** Inter 700/800, tight letter-spacing
- **Body:** Inter 400, 1.75 line-height, max-width ~50rem
- **Code:** JetBrains Mono
- **Serif accent:** Instrument Serif italic for taglines/callouts (optional, landing page only)

### Fonts

Load via `next/font` (no @fontsource packages needed):
- Inter from Google Fonts (variable weight)
- JetBrains Mono from Google Fonts
- Instrument Serif from Google Fonts (landing page only)

## Content Page Features

### Callout Boxes
Nextra's built-in `<Callout>` component with custom styling:
- `info` — blue-tinted left border
- `warning` — gold-tinted left border
- `error` — red-tinted left border
- Clean, no rounded corners, subtle background tint

### Code Blocks
Nextra uses `rehype-pretty-code` (Shiki) by default:
- Copy button on hover
- Line numbers optional
- Filename tabs for multi-file examples
- Language badge

### Table of Contents (Right Sidebar)
- "On this page" heading
- Active heading highlighted as user scrolls
- Smooth scroll on click

### Breadcrumbs
- Enabled by default in Nextra docs theme
- Shows section > page path

### Previous/Next Navigation
- Footer nav between pages within a section
- Shows page titles

## Landing Page

Rebuild the current index.mdx as a custom Nextra page with `layout: 'full'` (no sidebar). Reuse the same content structure:
- Hero with headline, tagline, CTA buttons
- "Three rituals" section
- Command showcase (/reflect, /triage, /plan)
- Platform list
- Modules grid
- CTA with clone command
- Signal band divider motif

This page uses a custom layout — no Nextra chrome, just full-width custom HTML/CSS.

## Deployment

**Current:** GitHub Pages via `withastro/action@v5` (builds Astro, uploads artifact)
**New:** GitHub Pages via standard Next.js static export

Workflow changes:
- Replace `withastro/action@v5` with Node setup + `npm run build` + `next export`
- Upload `out/` directory as artifact
- Same deploy-pages action

`next.config.js` needs:
```js
output: 'export'
basePath: '/personal-os'
images: { unoptimized: true }  // required for static export
```

## File Structure (New)

```
docs/
  app/
    layout.tsx          ← root layout with fonts, theme provider
    page.mdx            ← landing page (or custom page.tsx)
    [[...slug]]/
      page.tsx           ← Nextra catch-all route
  content/
    _meta.js             ← top-level nav config with icons
    getting-started/
      _meta.js           ← section config
      what-is-this.mdx
      install-and-onboard.mdx
      choose-your-tool.mdx
      your-first-day.mdx
    core-framework/
      _meta.js
      the-cockpit.mdx
      ...
    agents/
    commands/
    modules/
    integrations/
    making-it-yours/
  mdx-components.tsx     ← custom MDX component overrides
  next.config.mjs        ← Nextra plugin config
  tailwind.config.js     ← theme tokens
  package.json
  tsconfig.json
```

## What Does NOT Change

- The markdown content itself (body text, headings, lists, tables, code blocks)
- The URL structure (`/personal-os/getting-started/what-is-this/` etc.)
- The GitHub Pages deployment URL
- The overall information architecture (7 sections, same page order)

## Risks

- **Next.js static export limitations:** No API routes, no ISR, no middleware. Docs are fully static so this is fine.
- **Image handling:** `next/image` requires `unoptimized: true` for static export. Images work but aren't optimized at build time.
- **Search:** Starlight had built-in Pagefind search. Nextra has built-in FlexSearch. Should work out of the box.
- **Base path:** GitHub Pages serves from `/personal-os/`. Need `basePath` in next.config and all internal links must account for it.
