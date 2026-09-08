# United Oilfield Services — Website

Production website for **United Oilfield Services LLC**, a safety-focused provider of upstream and midstream oilfield support. The site presents the company's service divisions, safety commitments, careers information, and project-inquiry path in a responsive, accessible single-page experience.

**Live site:** [united-oilfield-services.vercel.app](https://united-oilfield-services.vercel.app)

## Overview

This project turns a content-rich oilfield-services brief into a fast static site without adding a backend or a CMS that the business does not need. Page content and service capabilities are modeled as typed data; reusable UI primitives turn that data into consistent routes and cards.

The contact form deliberately opens a pre-addressed email draft rather than implying a message has been stored or submitted to a server.

## Features

- Responsive desktop and mobile navigation, including a service menu.
- Home-page hero carousel that honors the user's reduced-motion preference.
- Dedicated pages for company, safety, careers, contact, service lines, and specialist disciplines.
- Data-driven service pages with shared page and card components.
- Per-route document title, description, Open Graph, Twitter, and canonical metadata.
- Keyboard-accessible controls and a skip link for direct access to the page content.
- Client-side route handling paired with a Vercel rewrite so direct links resolve in production.

## Tech stack

- **Application:** React 19, TypeScript, Vite
- **Styling:** custom CSS and self-hosted font packages
- **Hosting:** Vercel-compatible static deployment
- **Tooling:** npm and the TypeScript compiler

## Architecture

| Area | Responsibility |
| --- | --- |
| `src/App.tsx` | Client-side route selection, navigation state, and per-route metadata. |
| `src/data/site.ts` | Typed company, service, navigation, and page-copy data. |
| `src/components/` | Shared header, footer, hero, card, and section building blocks. |
| `src/pages/` | Home and content-page composition. |
| `public/images/` | Production image and brand assets. |
| `vercel.json` | Rewrites direct route requests to the Vite application entry point. |

Keeping page copy in `src/data/site.ts` is intentional: the site has a bounded, stable service catalog, and centralizing its structured content prevents route and navigation drift without introducing a content-management dependency.

## Routes

| Route | Purpose |
| --- | --- |
| `/` | Company overview and featured services |
| `/about` | Company background and operating focus |
| `/services` | Service catalog |
| `/services/:service` | Individual service detail page |
| `/services/specialist-disciplines` | Cementing, wireline, and casing/capping support |
| `/safety` | Safety and environmental commitments |
| `/careers` | Career-interest information |
| `/contact` | Company contact details and inquiry form |

## Run locally

Prerequisite: a current Node.js LTS release.

```bash
npm install
npm run dev
```

Vite prints the local development URL, normally `http://localhost:5173`.

## Validate and build

```bash
npm run build
npm run preview
```

`npm run build` type-checks the application before producing static files in `dist/`. `npm run preview` serves that production output locally.

## Deployment

The repository is configured for Vercel. Import the repository into Vercel and use the standard Vite build settings. The included rewrite rule is required because navigation uses the browser History API: a request to a nested URL must return the application entry point rather than a hosting-provider 404 page.

## Project structure

```text
public/
  images/             Brand and service photography
src/
  components/         Reusable presentational and navigation components
  data/site.ts        Typed site content and service definitions
  pages/              Route-level React components
  App.tsx             Route and metadata orchestration
  styles.css          Responsive visual system
vercel.json           SPA fallback configuration
```

## Technical decisions

- **No router dependency:** the route surface is intentionally small, so History API navigation keeps the client bundle and runtime complexity low.
- **Typed content model:** service cards, menus, and detail routes consume the same `Service` data, reducing duplicate copy and broken links.
- **Reduced-motion support:** the hero slider does not advance for people who request reduced motion.
- **Static contact flow:** opening an email draft is clear, privacy-conscious, and does not create a backend maintenance obligation.

## Future improvements

These should be taken on only with business approval and real content requirements:

- Replace the mailto inquiry flow with a spam-protected server-side form endpoint.
- Add a content workflow if service copy changes frequently.
- Add automated accessibility and route-smoke tests.
- Supply an approved social-share image and production domain for richer link previews.

## Asset and licensing note

The site includes company branding and operational imagery. Reuse or redistribution requires authorization from United Oilfield Services LLC; the repository is intentionally marked `UNLICENSED` rather than implying public reuse rights.
