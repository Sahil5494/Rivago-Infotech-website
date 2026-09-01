"use client";

import { useEffect, useRef, useState } from "react";

export type Testimonial = {
  badge: string;
  quote: string;
  name: string;
  role: string;
};

const Star = () => (
  <svg className="tc-star" viewBox="0 0 14 14" fill="#3DFF87"><path d="M7 1l1.8 3.6L13 5.3l-3 2.9.7 4.1L7 10.3l-3.7 2 .7-4.1L1 5.3l4.2-.7z" /></svg>
);

export default function Testimonials({ items }: { items: Testimonial[] }) {
  const carouselRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);

  useEffect(() => {
    const el = carouselRef.current;
    if (!el) return;
    function onScroll() {
      if (!el) return;
      const idx = Math.round(el.scrollLeft / 380);
      setActive(idx);
    }
    el.addEventListener("scroll", onScroll, { passive: true });
    return () => el.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <div className="testi-carousel" ref={carouselRef}>
        {items.map((t) => (
          <div className="tc" key={t.name + t.role}>
            <div className="tc-body">
              <div className="tc-co-badge">{t.badge}</div>
              <div className="tc-stars"><Star /><Star /><Star /><Star /><Star /></div>
              <p className="tc-quote">&quot;{t.quote}&quot;</p>
              <div className="tc-author"><div><div className="tc-name">{t.name}</div><div className="tc-role">{t.role}</div></div></div>
            </div>
          </div>
        ))}
      </div>
      <div className="testi-dots">
        {items.map((t, i) => (
          <div
            key={t.name + t.role}
            className={`testi-dot${active === i ? " active" : ""}`}
            onClick={() => carouselRef.current?.scrollTo({ left: i * 380, behavior: "smooth" })}
          />
        ))}
      </div>
    </>
  );
}
