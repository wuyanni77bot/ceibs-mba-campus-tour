# CEIBS MBA Campus Tour — GitHub Pages v7

Mobile-first PWA for CEIBS MBA student volunteers, with separate 30-minute Essential and 45-minute Full Tour modes.

## v7 update
- Renamed Stop 2 to **Academic Building & Auditorium / Classroom**.
- Replaced the Academic Building and Auditorium visuals with the latest supplied images.
- Added an **MBA Student Residence** room image to the Residence stop.
- Landmark images remain embedded in `app.js` as a fallback so they continue to display reliably after GitHub Pages updates.
- Service worker cache bumped to `ceibs-campus-tour-v7` so installed phones refresh to the new version.

## Deploy to the existing GitHub Pages site
1. Unzip this package.
2. Open the existing GitHub repository.
3. Choose **Add file → Upload files**.
4. Upload all files and the full `assets` folder to the repository root, replacing files with the same names.
5. Commit the changes.
6. No new GitHub Pages setup is required if the existing site is already published from `main` → `/ (root)`.
7. Allow a few minutes for GitHub Pages to redeploy, then refresh the site on your phone.

## Tour modes
- 30-minute Essential Tour
- 45-minute Full Tour

Both use the same nine-stop route. The 45-minute route adds Explore More content.

## iPhone installation
Open the published site in Safari → Share → **Add to Home Screen**.

## Android installation
Open in Chrome → menu → **Install app** / **Add to Home screen**.

## Updating content
Tour content and image references are in the `stops` array in `app.js`. After major updates, also bump the cache name in `sw.js` so installed phones refresh promptly.
