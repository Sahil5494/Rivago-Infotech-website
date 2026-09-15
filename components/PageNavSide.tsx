"use client";

import { usePathname } from "next/navigation";
import { pageOrder } from "@/lib/routes";

/* Previous/next page links, pinned to the side gutters.
 *
 * There used to be a document-level keydown here that called router.push on
 * ArrowLeft and ArrowRight, exempting only form fields. It made arrow keys
 * navigate the site from every page in pageOrder, and that is not a shortcut
 * — it is a trap:
 *
 *   Arrow keys are how a keyboard user scrolls. One ArrowRight while reading
 *   the homepage put them on /hire-talent, with no warning and nothing on
 *   screen to explain it.
 *
 *   It silently broke every widget that wants arrow keys. The industries
 *   rail is tabIndex 0 and labelled "Industries — scroll for more"; arrowing
 *   through it left the page instead. The services carousel has its own
 *   ArrowLeft/ArrowRight handler that called preventDefault without
 *   stopPropagation — preventDefault does not stop the bubble, so this
 *   listener fired anyway and the carousel's arrows never once worked.
 *
 * There is no gate that keeps the shortcut and the scrolling. Requiring a
 * modifier collides with the browser's own Alt+Arrow history navigation, and
 * firing only when nothing has focus still steals the common case. So the
 * shortcut is gone. The two visible links below do the same job, discoverably.
 */
export default function PageNavSide() {
  const pathname = usePathname();
  const idx = pageOrder.findIndex((p) => p.href === pathname);
  const prev = idx > 0 ? pageOrder[idx - 1] : null;
  const next = idx >= 0 && idx < pageOrder.length - 1 ? pageOrder[idx + 1] : null;

  if (idx === -1) return null;

  return (
    <>
      {prev && (
        <a className="pgnav-side back" aria-label={`Previous: ${prev.name}`} href={prev.href}>
          <svg width="17" height="17" viewBox="0 0 14 14" fill="none"><path d="M11 7H3M6 4 3 7l3 3" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" /></svg>
          <span className="pgnav-side-lbl">{prev.name}</span>
        </a>
      )}
      {next && (
        <a className="pgnav-side next" aria-label={`Next: ${next.name}`} href={next.href}>
          <span className="pgnav-side-lbl">{next.name}</span>
          <svg width="17" height="17" viewBox="0 0 14 14" fill="none"><path d="M3 7h8M8 4l3 3-3 3" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" /></svg>
        </a>
      )}
    </>
  );
}
