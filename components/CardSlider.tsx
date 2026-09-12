"use client";

import { Children, useEffect, useRef, useState } from "react";

const ArrowIcon = ({ flip }: { flip?: boolean }) => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" style={flip ? { transform: "scaleX(-1)" } : undefined}>
    <path d="M6 3l5 5-5 5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export default function CardSlider({
  children,
  trackClassName,
  nav = "arrows",
}: {
  children: React.ReactNode;
  trackClassName?: string;
  nav?: "arrows" | "dots";
}) {
  const trackRef = useRef<HTMLDivElement>(null);
  const [slideHeight, setSlideHeight] = useState<number | undefined>(undefined);
  const [active, setActive] = useState(0);
  const count = Children.count(children);

  function step(el: HTMLDivElement) {
    const card = el.querySelector<HTMLElement>(":scope > *");
    return card ? card.getBoundingClientRect().width + 16 : 380;
  }

  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;
    const mq = window.matchMedia("(max-width:900px)");

    function update() {
      if (!el) return;
      if (!mq.matches) {
        setSlideHeight(undefined);
        setActive(0);
        return;
      }
      const s = step(el);
      const cards = Array.from(el.children) as HTMLElement[];
      const idx = Math.min(cards.length - 1, Math.max(0, Math.round(el.scrollLeft / s)));
      setActive(idx);
      const activeEl = cards[idx];
      if (activeEl) setSlideHeight(activeEl.getBoundingClientRect().height);
    }

    update();
    el.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    mq.addEventListener("change", update);
    return () => {
      el.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
      mq.removeEventListener("change", update);
    };
  }, []);

  function scroll(dir: 1 | -1) {
    const el = trackRef.current;
    if (!el) return;
    el.scrollBy({ left: dir * step(el), behavior: "smooth" });
  }

  function goTo(i: number) {
    const el = trackRef.current;
    if (!el) return;
    el.scrollTo({ left: i * step(el), behavior: "smooth" });
  }

  return (
    <div className="fc-slider">
      <div
        className={`fc-track${trackClassName ? ` ${trackClassName}` : ""}${nav === "dots" ? " fc-track-dots" : ""}`}
        ref={trackRef}
        style={slideHeight ? { height: slideHeight } : undefined}
      >
        {children}
      </div>
      {nav === "arrows" ? (
        <>
          <button className="fc-nav fc-nav-l" type="button" aria-label="Previous" onClick={() => scroll(-1)}>
            <ArrowIcon flip />
          </button>
          <button className="fc-nav fc-nav-r" type="button" aria-label="Next" onClick={() => scroll(1)}>
            <ArrowIcon />
          </button>
        </>
      ) : (
        <div className="fc-dots">
          {Array.from({ length: count }, (_, i) => (
            <div key={i} className={`fc-dot${active === i ? " active" : ""}`} onClick={() => goTo(i)} />
          ))}
        </div>
      )}
    </div>
  );
}
