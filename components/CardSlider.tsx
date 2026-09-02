"use client";

import { useRef } from "react";

const ArrowIcon = ({ flip }: { flip?: boolean }) => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" style={flip ? { transform: "scaleX(-1)" } : undefined}>
    <path d="M6 3l5 5-5 5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export default function CardSlider({ children }: { children: React.ReactNode }) {
  const trackRef = useRef<HTMLDivElement>(null);

  function scroll(dir: 1 | -1) {
    const el = trackRef.current;
    if (!el) return;
    const card = el.querySelector<HTMLElement>(":scope > *");
    const step = card ? card.getBoundingClientRect().width + 16 : 380;
    el.scrollBy({ left: dir * step, behavior: "smooth" });
  }

  return (
    <div className="fc-slider">
      <div className="fc-track" ref={trackRef}>
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
