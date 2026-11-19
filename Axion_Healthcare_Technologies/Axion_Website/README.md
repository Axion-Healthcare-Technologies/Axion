# Axion Healthcare Technologies

Astro + TypeScript + Tailwind CSS v4, with Motion (small React island), Lenis smooth scroll and Astro View Transitions.
Output is fully static (`dist/`), served by Cloudflare Workers static assets.

## Run locally (Node.js 20+)

    npm install
    npm run dev        # http://localhost:4321
    npm run build      # creates ./dist

## Edit content
Everything editable is in ONE file: `src/data/site.ts`
(brand, contact email/phone/WhatsApp, solutions, services, process, about page, footer, SEO).
Items marked `TODO` there are placeholders to replace before launch.
Empty phone / WhatsApp / address / social links are hidden automatically.
Colors and fonts: `src/styles/global.css` (`@theme` block).
When you get your domain, set it in BOTH `src/data/site.ts` (`url`) and `astro.config.mjs` (`site`).

## Deploy to Cloudflare
- CLI: `npx wrangler login` once, then `npm run deploy`
- Dashboard upload: `npm run build`, then zip the CONTENTS of `dist` (index.html at the top level) and upload it.
