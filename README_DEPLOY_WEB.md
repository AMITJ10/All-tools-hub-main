# CalculatorApps Web — PWA, Deployment, and Search Console Notes

This project includes the production assets and routing files needed for a static React/Vite deployment:

- `public/manifest.webmanifest` for PWA metadata.
- `public/service-worker.js` for app-shell caching and network-first navigation.
- `public/icons/` for installable app icons.
- `public/_headers` for static security headers.
- `public/_redirects` for legacy path redirects and the SPA fallback.
- `public/robots.txt` and `public/sitemap.xml` for crawler discovery.

## How to run locally

Serve the project over HTTPS or plain HTTP for local development. Service workers work on `localhost`.

```bash
npm run dev
npm run build
npm run preview
```

After opening the app, check **Application → Manifest** and **Application → Service Workers** in browser DevTools.

## Production deployment checklist

### Shared requirements

- Build command: `npm run build`.
- Output directory: `dist`.
- Make sure the files from `public/` are copied into the final build output.
- Submit only the canonical sitemap URL in Search Console: `https://calculatorapps.net/sitemap.xml`.
- Inspect canonical HTTPS URLs, not redirected HTTP or `www` variants.

### Cloudflare Pages

Cloudflare Pages supports `_redirects`, but the file is for path-level redirects and SPA fallback rules. It does **not** handle domain-level redirects such as `http://calculatorapps.net/*` or `https://www.calculatorapps.net/*` inside `_redirects`.

The repository also includes `functions/_middleware.js` as an extra Cloudflare Pages safety net. It redirects supported non-canonical hosts, including `www` and `*.pages.dev` preview hosts, to `https://calculatorapps.net` before the React app renders.

Configure these in Cloudflare dashboard as the primary edge rules:

1. Enable **Always Use HTTPS** or create a Redirect Rule from `http://calculatorapps.net/*` to `https://calculatorapps.net/$1`.
2. Create a Redirect Rule or Bulk Redirect from `www.calculatorapps.net/*` to `https://calculatorapps.net/$1`.
3. If a `*.pages.dev` preview URL is crawlable, redirect it to `https://calculatorapps.net/$1` or prevent it from being submitted/indexed.
4. Keep `public/_redirects` for legacy route redirects and the React SPA fallback.

### Vercel

`vercel.json` contains HTTPS/canonical-host redirect rules and security headers. Keep those enabled when deploying to Vercel.

## Search Console status guide

### “Page with redirect”

`http://calculatorapps.net/` appearing under **Page with redirect** is expected when `https://calculatorapps.net/` is the canonical indexable page. Do not request indexing for the HTTP URL. Use **URL inspection** on `https://calculatorapps.net/` instead.

### “Crawled - currently not indexed”

This is usually a content/quality or recrawl-priority signal, not a redirect bug. The sitemap now lists canonical HTTPS URLs only, and the site has route-specific pages, guide links, and trust pages. After deployment:

1. Resubmit `https://calculatorapps.net/sitemap.xml`.
2. Inspect the canonical URL for each important page.
3. Request indexing for the canonical HTTPS page only.
4. Avoid submitting old aliases such as `/bmi`, `/currency`, or `/loan-emi`; those now edge-redirect to canonical routes.

### “Server error (5xx)”

If Search Console still shows old 5xx entries after a successful deployment, click **Validate fix** after confirming the live canonical URLs return `200` and the build completed without errors.

### “Soft 404”

Do not submit non-existent or legacy alias URLs. Legacy aliases are redirected at the edge before the SPA fallback, and unknown paths render the app’s 404 page.

## Validation commands

Run these before deployment:

```bash
npm run check:indexing
npm run build
```
