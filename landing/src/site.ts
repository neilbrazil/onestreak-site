/** Deployment constants. The site is a GitHub Pages project page, so every
 *  site-absolute path carries the `/onestreak-site/` prefix. */
export const ORIGIN = "https://neilbrazil.github.io";
export const BASE = "/onestreak-site/";
export const SITE = ORIGIN + BASE.replace(/\/$/, "");

export const APP_ID = "6804715857";
export const APP_STORE_URL =
  "https://apps.apple.com/app/apple-store/id6804715857";
export const SUPPORT_EMAIL = "neilbrazil83+apps@gmail.com";

/** Live on the App Store since 2026-09-02. While this was false the page
 *  showed a "coming soon" note rather than a link that 404s, and emitted no
 *  app-store deep link or `apple-itunes-app` banner. The pre-launch path is
 *  kept rather than deleted so the flag still works for a future app built
 *  from this template. */
export const APP_LIVE = true;

/** Google Search Console site-verification token. Google only reads this on
 *  the verified URL, but it is emitted on every page so a re-verification
 *  against any path still succeeds. Removing it un-verifies the property.
 *  Same token as swatchr-site: it verifies the neilbrazil.github.io origin,
 *  which both project pages share. */
export const GOOGLE_SITE_VERIFICATION =
  "c2ceYkYa7YYI_VhHImzYbsitVUbdn5hZkYl3jHs13rk";

/** Join a site-relative path onto the Pages base path. */
export const url = (path: string) => BASE + path.replace(/^\//, "");

/** Absolute form of the same, for canonicals, OG tags and JSON-LD. */
export const abs = (path: string) => ORIGIN + url(path);
