# Algebra Fresh Start (GitHub Pages)

## What’s inside
- **phase-1/index.test.html** — tiny JS smoke test (no external files)
- **phase-2/index.html** — full inline Algebra app (lessons, practice, chart, PDF export); *no service worker*
- **phase-3/** — optional PWA variant (index.pwa.html + manifest + service worker)
- **kill-sw.html** — unregisters any service workers and clears caches
- **.nojekyll** — disables Jekyll processing
- **icons/** — basic PWA icons

## Publish from scratch (new repo recommended)
1. Create a new repo (e.g., `donhams-algebra`) on GitHub.
2. Upload the **contents** of this zip to the repo root and commit.
3. Settings → Pages → Source: **Deploy from a branch** → Branch: **main** → **/(root)**.
4. Visit: `https://<your-username>.github.io/<repo>/phase-1/index.test.html`
   - You should see: “✅ JS is running …” and a working button.
5. Visit: `https://<your-username>.github.io/<repo>/phase-2/`
   - Full app should work (dropdowns populated, start buttons work, graph renders).

## Optional: enable PWA (offline/install)
1. Visit: `https://<your-username>.github.io/<repo>/phase-3/index.pwa.html`
2. It registers a service worker and uses `manifest.json`.
3. If you ever need to reset caches/sw: open `/kill-sw.html` once.

## Notes
- If you previously used `algebra-pwa`, old service workers can linger. Using a **new repo name** gives a fresh scope automatically.
- You can copy `phase-2/index.html` to become the main site `index.html` later, once confirmed working.
