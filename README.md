# Jaroensak Jantaranimi — Portfolio

Personal portfolio website. Software Engineer & Tech Business Analyst specializing in Banking Transformation.

Built with **Next.js 14 (App Router)**, **React 18**, **TypeScript**, **Tailwind CSS**, and **Lucide React** icons. Optimized for Vercel.

## Local development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Build

```bash
npm run build
npm start
```

## Project structure

```
app/
  layout.tsx        # Root layout + metadata + Inter font
  page.tsx          # Single-page composition
  globals.css       # Tailwind + reveal-on-scroll utility
components/          # Modular section components
  Navbar, Hero, CoreValues, ExperienceTimeline,
  Toolkit, Projects, Contact, Footer, Section, Reveal
data/
  content.ts        # All site content (single source of truth)
```

To edit content (experience, skills, projects), update `data/content.ts`.

## Deploy to Vercel

1. Push to GitHub.
2. Import the repo at [vercel.com/new](https://vercel.com/new).
3. Vercel auto-detects Next.js — no config needed. Deploy.
