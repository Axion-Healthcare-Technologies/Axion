Axion Healthcare Technologies - website source

1. Install Node.js 20 or newer
2. Open a terminal in Axion_Website and run: npm install
3. Edit src/data/site.ts  (replace everything marked TODO: email, phone, domain, social links)
4. Preview: npm run dev  (http://localhost:4321)
5. Build: npm run build, then zip the CONTENTS of the "dist" folder and upload to Cloudflare
   (or run: npm run deploy)

Also set your real domain in astro.config.mjs ("site") and in src/data/site.ts ("url").
