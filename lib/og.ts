/* Shared Open Graph fields for every page.
 *
 * A page that sets its own `openGraph` replaces the root layout's object
 * outright — Next merges metadata one level deep — so it silently dropped
 * the share image, site name and type. Seventeen pages did, and a link to
 * any of them showed no preview image on LinkedIn, WhatsApp or Slack.
 * Spread this first in each page's openGraph; page fields after it win. */
export const ogBase = {
  type: "website" as const,
  siteName: "Rivago Infotech",
  images: [{ url: "/assets/og-image.png", width: 1200, height: 630, alt: "Rivago Infotech" }],
};
