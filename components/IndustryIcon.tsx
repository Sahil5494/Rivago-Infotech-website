/* Industry icons.
 *
 * These replace eight emoji — 💻 🏦 🏥 ⚖️ 📈 🏭 👥 🏗️ — which were the only
 * emoji on the site. Every other icon here is a monochrome stroke in
 * --accent, so the industry cards were the one place that broke the language.
 * Emoji also render differently on every platform (Apple, Windows and Android
 * each ship their own artwork), so the section looked different depending on
 * the visitor's machine, and at card size they read as decoration rather than
 * as a system.
 *
 * Keyed off each industry's `anchor`, which already exists in the data and has
 * to stay correct anyway because the cards link to /industries#<anchor>. One
 * field to keep in sync instead of two.
 */

const P = {
  strokeWidth: 1.3,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  fill: "none" as const,
  stroke: "var(--accent)",
};

const PATHS: Record<string, React.ReactNode> = {
  // a screen with a command prompt
  technology: (
    <>
      <rect x="2.5" y="3.5" width="17" height="12" rx="2" {...P} />
      <path d="M6.5 7.5l2.5 2-2.5 2M11 11.5h4" {...P} />
      <path d="M8 18.5h6" {...P} />
    </>
  ),
  // a columned facade
  finance: (
    <>
      <path d="M3 8.5L11 4l8 4.5" {...P} />
      <path d="M5.5 8.5v7M9 8.5v7M13 8.5v7M16.5 8.5v7" {...P} />
      <path d="M3 18.5h16" {...P} />
    </>
  ),
  // a pulse line
  healthcare: (
    <>
      <rect x="2.5" y="4.5" width="17" height="13" rx="2.5" {...P} />
      <path d="M5.5 11h3l1.5-3 2 6 1.5-3h3" {...P} />
    </>
  ),
  // scales
  legal: (
    <>
      <path d="M11 3.5v15M6 18.5h10" {...P} />
      <path d="M4 7.5h14" {...P} />
      <path d="M4 7.5L1.8 12.5h4.4L4 7.5zM18 7.5l-2.2 5h4.4L18 7.5z" {...P} />
    </>
  ),
  // a rising trend
  sales: (
    <>
      <path d="M3 18.5V4.5" {...P} />
      <path d="M3 18.5h16" {...P} />
      <path d="M6 14l3.5-4 3 2.5L19 6" {...P} />
      <path d="M15.5 6H19v3.5" {...P} />
    </>
  ),
  // a carton in transit
  supply: (
    <>
      <path d="M11 3.2l7 3.4v8.8l-7 3.4-7-3.4V6.6l7-3.4z" {...P} />
      <path d="M4 6.6l7 3.4 7-3.4M11 10v8.8" {...P} />
    </>
  ),
  // two figures
  people: (
    <>
      <circle cx="8.5" cy="7.5" r="3" {...P} />
      <path d="M2.8 18c0-3 2.5-5 5.7-5s5.7 2 5.7 5" {...P} />
      <path d="M15 5.2a3 3 0 010 5.6M16.4 13.4c1.7.7 2.8 2.4 2.8 4.6" {...P} />
    </>
  ),
  // a wing / flight path
  aerospace: (
    <>
      <path d="M11 2.5c2 2.4 3 5.2 3 8.5 0 3.3-1 6.1-3 8.5-2-2.4-3-5.2-3-8.5 0-3.3 1-6.1 3-8.5z" {...P} />
      <path d="M8.2 8.5L3 12.5l1 4 4-2.2M13.8 8.5l5.2 4-1 4-4-2.2" {...P} />
    </>
  ),
};

export default function IndustryIcon({ name }: { name: string }) {
  const path = PATHS[name];
  // A missing key would silently render an empty box, so fall through to the
  // technology mark rather than leaving a hole in the grid.
  return (
    <svg width="22" height="22" viewBox="0 0 22 22" aria-hidden="true">
      {path ?? PATHS.technology}
    </svg>
  );
}
