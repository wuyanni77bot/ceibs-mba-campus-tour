# CEIBS MBA Campus Tour Guide

A lightweight mobile-first PWA for CEIBS MBA student volunteers.

## Tour modes
- 30-minute Essential Tour
- 45-minute Full Tour

Both use the same eight-stop route. The 45-minute route adds Explore More content.

## Deploy to GitHub Pages
1. Create a new GitHub repository, e.g. `ceibs-campus-tour`.
2. Upload all files in this folder to the repository root.
3. In GitHub: **Settings → Pages**.
4. Under **Build and deployment**, choose **Deploy from a branch**.
5. Select branch `main` and folder `/ (root)`, then Save.
6. Open the published GitHub Pages URL on a phone.
7. Add it to the phone home screen.

## iPhone installation
Open the site in Safari → Share → **Add to Home Screen**.

## Android installation
Open in Chrome → menu → **Install app** / **Add to Home screen**.

## VI colours used
- CEIBS Red: `#bf0008`
- CEIBS Black: `#221815`
- MBA Grey: `#dcdddd`
- Supporting Grey: `#727172`

## Production note
The prototype contains a raster crop of the CEIBS MBA programme mark from the supplied 2026 VI manual for layout testing. Before broad production use, replace `assets/ceibs-mba-logo.png` with the official high-resolution CEIBS MBA logo asset from the brand team while keeping the same filename.

## Updating content
Edit the `stops` array near the top of `app.js`. Each stop has:
- `title`
- `story`
- `essential` (shown in both tours)
- `explore` (shown only in the 45-minute tour)

Update the service-worker cache version in `sw.js` after major changes, e.g. `ceibs-campus-tour-v2`, so installed phones refresh promptly.
