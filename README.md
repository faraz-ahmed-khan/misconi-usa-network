# Misconi USA Network

A full-stack demo website for **Misconi USA Network**—the awareness, trust-building, and educational site of the Misconi Readiness Ecosystem. Built with Next.js (App Router), TypeScript, Tailwind CSS, and a dummy backend using Next.js API route handlers.

## Purpose

This site helps businesses:
- Understand readiness
- Learn how the ecosystem works
- Confidently choose their next step

**Important boundary:** This site is **educational and orientation-only**. It does **not** collect business information for readiness intake, activate readiness, or score users. It is the place where clarity comes before action.

## Tech Stack

- **Next.js** (latest stable) with App Router
- **TypeScript**
- **Tailwind CSS**
- Component-based architecture
- Dummy backend via route handlers under `/app/api`
- Mock data only; no database required

## Setup

### Install

```bash
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

### Build

```bash
npm run build
```

### Start (production)

```bash
npm start
```

## Dummy Backend

The project includes Next.js API route handlers that simulate a backend:

| Endpoint | Method | Description |
|----------|--------|-------------|
| `/api/contact` | POST | Accepts contact form payload, validates required fields, and **simulates** sending data to Zoho. Returns success JSON; no redirect. **Real Zoho integration is not yet implemented.** |
| `/api/resources` | GET | Returns mock resources grouped into articles, guides, videos, glossary, and FAQ. |
| `/api/testimonials` | GET | Returns mock testimonial list. |
| `/api/partners` | GET | Returns mock partner/ecosystem logo items. |

- No database is used; all data is in-memory mock data.
- Code comments in `/app/api/contact/route.ts` indicate where real Zoho integration should later replace the mock logic.

## Pages

- **Home** — Hero, about the network, ecosystem overview (3-surface model), how readiness works, education support, target audience, trust & credibility, video section, timeline, CTA, FAQ.
- **About** — Mission, who we serve, why readiness matters, how the ecosystem works, your next step.
- **Ecosystem** — Network, GYBS, MisconiUSA.com, SBA Ready; how the surfaces work together.
- **Readiness** — What readiness is, why it matters, readiness levels, the Business Score, opportunity access.
- **Resources** — Articles, guides, videos, glossary, FAQ (mock content).
- **Contact** — Contact form (Full Name, Email, Phone optional, Company optional, Message). On submit: success message shown, data sent to dummy backend (Zoho simulation), no redirect.
- **Privacy** — Privacy policy placeholder.

## Project Structure

```
app/
  page.tsx                 # Homepage
  layout.tsx
  globals.css
  about/page.tsx
  ecosystem/page.tsx
  readiness/page.tsx
  resources/page.tsx
  contact/page.tsx
  privacy/page.tsx
  api/
    contact/route.ts
    resources/route.ts
    testimonials/route.ts
    partners/route.ts
components/
  layout/Header.tsx, Footer.tsx
  home/                    # Homepage sections
  shared/                  # Card, SectionHeading, Icon, FAQ, Testimonials, Timeline, Video, PartnersStrip, StatsCounters
  forms/ContactForm.tsx
lib/
  types.ts
  constants.ts
  mock-data.ts
  utils.ts
```

## Notes

- **Educational only:** This site is not a readiness scoring site, intake tool, or operational service platform.
- **Zoho:** Contact form submission is simulated; real Zoho integration is not implemented.
- **External links:** Header CTA “Visit GYBS” and footer links point to GetYourBusinessScore.com, MisconiUSA.com, and SBAReady.org as specified.
