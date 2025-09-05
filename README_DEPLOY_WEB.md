# OneCalc Web — PWA Setup Added

This update adds:
- **manifest.webmanifest** (public/ or the same directory as index.html)
- **service-worker.js** with app-shell caching
- **icons/** (192 & 512 PNG)
- Auto-registration of the service worker (in `index.html`, if present)
- `<link rel="manifest">` and `<meta name="theme-color">` (in `index.html`, if present)

## How to run locally
Serve the project over **HTTPS** or plain HTTP for local dev (SW works on localhost). For example:
- `npx http-server -p 3000` (or any dev server your project uses)
- Open http://localhost:3000 and check the **Application → Manifest** panel in DevTools.

## Deploy (HTTPS required in production)
- **Vercel / Netlify / Cloudflare Pages**: push to a Git repo and import. These hosts give HTTPS by default.
- Make sure `/public/service-worker.js`, `/public/manifest.webmanifest`, and `/public/icons/*` are included in the build output.

## Notes
- If your app is **Next.js**, assets are now in `public/`. You may keep them as-is. To enhance SW behavior, you can integrate `next-pwa` later.
- If your app is a vanilla or SPA with an `index.html`, we already injected the manifest link and SW registration.

Happy shipping!
