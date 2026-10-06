"use client";

import { useEffect, useState } from "react";
import { practices } from "./data";

export default function IndustriesNav() {
  const [active, setActive] = useState<string>(practices[0].id);

  useEffect(() => {
    const sections = practices
      .map((p) => document.getElementById(p.id))
      .filter((el): el is HTMLElement => el !== null);
    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-30% 0px -60% 0px", threshold: 0 }
    );
    sections.forEach((el) => observer.observe(el));

    /* Arriving on /industries#finance from the footer or Hire Talent, the
       browser jumps before the page has settled, and the card ends up under
       the menu and this bar. Re-land it once the layout is final; the card's
       scroll-margin-top clears both bars. */
    const id = decodeURIComponent(window.location.hash.slice(1));
    const target = id ? document.getElementById(id) : null;
    let t = 0;
    if (target && sections.includes(target)) {
      t = window.setTimeout(() => target.scrollIntoView({ block: "start" }), 120);
    }
    return () => {
      observer.disconnect();
      window.clearTimeout(t);
    };
  }, []);

  const go = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    const el = document.getElementById(id);
    if (!el) return;
    e.preventDefault();
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    el.scrollIntoView({ behavior: reduce ? "auto" : "smooth", block: "start" });
    history.replaceState(null, "", `#${id}`);
    setActive(id);
  };

  return (
    <div className="ind-nav">
      <div className="ind-nav-inner">
        {practices.map((p) => (
          <a key={p.id} className={`ind-nav-link${active === p.id ? " active" : ""}`} href={`#${p.id}`} onClick={(e) => go(e, p.id)} aria-current={active === p.id ? "true" : undefined}>
            {p.navLabel}
          </a>
        ))}
      </div>
    </div>
  );
}
