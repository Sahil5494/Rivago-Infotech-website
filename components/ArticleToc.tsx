"use client";

import { useEffect, useRef, useState } from "react";

/* The article's Contents, sticky in the left margin on a wide screen.
 *
 * WHY IT MOVED. It used to be a box in the flow at the top of the article.
 * Measured on a long guide: the page runs 7,171px — eight screens — and the
 * box scrolled out of view at 1,038px, so the only navigational aid on the
 * document was absent for 86% of the read. Meanwhile the layout left 340px
 * of empty ground down each side of a 760px column, 47% of the viewport
 * doing nothing. This puts the one into the other.
 *
 * The active item is tracked with an IntersectionObserver rather than a
 * scroll handler, so nothing runs on the main thread between intersections.
 * The rootMargin pins the trigger line near the top of the viewport: -88px
 * clears the fixed header, and the large negative bottom means a heading
 * counts as current from the moment it reaches that line until the next one
 * does, rather than only while it is fully on screen.
 *
 * It degrades honestly. With no JavaScript the list still renders and every
 * link still works — only the highlight is lost — and below the breakpoint
 * the stylesheet returns it to a normal block at the top of the article,
 * because a sticky sidebar on a phone is just a box that will not go away.
 */
export default function ArticleToc({
  items,
}: {
  items: { id: string; label: string }[];
}) {
  const [active, setActive] = useState<string>("");
  const navRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (typeof IntersectionObserver === "undefined") return;

    const headings = items
      .map((i) => document.getElementById(i.id))
      .filter((el): el is HTMLElement => el !== null);
    if (!headings.length) return;

    /* The observer is only a cheap trigger; the decision reads real
       positions. Maintaining a set of "currently intersecting" headings gets
       this wrong by one section, because a heading you have scrolled past
       leaves the band and is removed — so the last one in the set becomes the
       PREVIOUS section, not the current one. Measured: standing at "Series A"
       the rail highlighted "Seed".

       Taking the last heading whose top is above the trigger line is correct
       in both scroll directions and needs no state to stay in sync. */
    const LINE = 120;
    const sync = () => {
      const above = headings.filter((h) => h.getBoundingClientRect().top <= LINE);
      setActive(above.length ? above[above.length - 1].id : "");
    };

    const io = new IntersectionObserver(sync, {
      rootMargin: `-${LINE}px 0px 0px 0px`,
      threshold: [0, 1],
    });

    sync();
    headings.forEach((h) => io.observe(h));
    return () => io.disconnect();
  }, [items]);

  /* Keeps the active item visible when the list is longer than its own
     scroll area — only inside the nav, never the page. */
  useEffect(() => {
    if (!active || !navRef.current) return;
    const el = navRef.current.querySelector<HTMLElement>(`a[href="#${CSS.escape(active)}"]`);
    if (!el) return;
    const nav = navRef.current;
    const top = el.offsetTop - nav.offsetTop;
    if (top < nav.scrollTop || top > nav.scrollTop + nav.clientHeight - el.offsetHeight) {
      nav.scrollTo({ top: top - nav.clientHeight / 2, behavior: "smooth" });
    }
  }, [active]);

  return (
    <nav className="ad-toc" aria-labelledby="ad-toc-h" ref={navRef}>
      <h2 id="ad-toc-h" className="ad-toc-h">Contents</h2>
      <ol>
        {items.map((i) => (
          <li key={i.id}>
            <a
              href={`#${i.id}`}
              className={active === i.id ? "on" : undefined}
              aria-current={active === i.id ? "location" : undefined}
            >
              {i.label}
            </a>
          </li>
        ))}
      </ol>
    </nav>
  );
}
