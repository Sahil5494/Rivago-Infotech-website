"use client";

import { useEffect, useRef, useState } from "react";

const ArrowIcon = ({ flip }: { flip?: boolean }) => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" style={flip ? { transform: "scaleX(-1)" } : undefined}>
    <path d="M6 3l5 5-5 5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export default function CardSlider({ children }: { children: React.ReactNode }) {
  const trackRef = useRef<HTMLDivElement>(null);
  const [slideHeight, setSlideHeight] = useState<number | undefined>(undefined);

  function step(el: HTMLDivElement) {
    const card = el.querySelector<HTMLElement>(":scope > *");
    return card ? card.getBoundingClientRect().width + 16 : 380;
  }

  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;
    const mq = window.matchMedia("(max-width:900px)");

    function updateHeight() {
      if (!el) return;
      if (!mq.matches) {
        setSlideHeight(undefined);
        return;
      }
      const s = step(el);
      const cards = Array.from(el.children) as HTMLElement[];
      const idx = Math.min(cards.length - 1, Math.max(0, Math.round(el.scrollLeft / s)));
      const active = cards[idx];
      if (active) setSlideHeight(active.getBoundingClientRect().height);
    }

    updateHeight();
    el.addEventListener("scroll", updateHeight, { passive: true });
    window.addEventListener("resize", updateHeight);
    mq.addEventListener("change", updateHeight);
    return () => {
      el.removeEventListener("scroll", updateHeight);
      window.removeEventListener("resize", updateHeight);
      mq.removeEventListener("change", updateHeight);
    };
  }, []);

  function scroll(dir: 1 | -1) {
    const el = trackRef.current;
    if (!el) return;
    el.scrollBy({ left: dir * step(el), behavior: "smooth" });
  }

  return (
    <div className="fc-slider">
      <div className="fc-track" ref={trackRef} style={slideHeight ? { height: slideHeight } : undefined}>
        {children}
      </div>
      <button className="fc-nav fc-nav-l" type="button" aria-label="Previous" onClick={() => scroll(-1)}>
        <ArrowIcon flip />
      </button>
      <button className="fc-nav fc-nav-r" type="button" aria-label="Next" onClick={() => scroll(1)}>
        <ArrowIcon />
      </button>
    </div>
  );
}
