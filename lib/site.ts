/**
 * Canonical origin for metadata, canonicals and JSON-LD.
 *
 * Previously hard-coded to https://rivagoinfotech.com, which is not the host
 * serving this build — so og:image resolved to a 404 and every shared link
 * rendered a broken preview. Resolution order:
 *
 *   1. NEXT_PUBLIC_SITE_URL           — set in Vercel once the domain is attached
 *   2. VERCEL_PROJECT_PRODUCTION_URL  — the stable production host
 *   3. VERCEL_URL                     — the per-deployment preview host
 *   4. localhost                      — development
 */
function resolve(): string {
  const explicit = process.env.NEXT_PUBLIC_SITE_URL;
  if (explicit) return explicit.replace(/\/$/, "");

  const prod = process.env.VERCEL_PROJECT_PRODUCTION_URL;
  if (prod) return `https://${prod}`;

  const preview = process.env.VERCEL_URL;
  if (preview) return `https://${preview}`;

  return "http://localhost:3000";
}

export const SITE_URL = resolve();
