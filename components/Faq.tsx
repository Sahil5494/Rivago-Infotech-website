"use client";

import { useState } from "react";

export type FaqItem = { q: string; a: string };

export default function Faq({ items }: { items: FaqItem[] }) {
  const [openIdx, setOpenIdx] = useState<number | null>(null);
  return (
    <div className="faq-list">
      {items.map((item, i) => (
        <div className={`faq-item gs${openIdx === i ? " open" : ""}`} key={item.q}>
          <button className="faq-q" onClick={() => setOpenIdx(openIdx === i ? null : i)}>
            <span className="faq-q-txt">{item.q}</span>
            <div className="faq-icon">
              <svg width="10" height="10" viewBox="0 0 10 10" fill="none"><path d="M5 1v8M1 5h8" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" /></svg>
            </div>
          </button>
          <div className="faq-a"><div className="faq-a-inner">{item.a}</div></div>
        </div>
      ))}
    </div>
  );
}
