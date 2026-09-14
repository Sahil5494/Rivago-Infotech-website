"use client";

import { useState } from "react";

export type FaqItem = { q: string; a: string };

/* One open at a time, all closed on load — unlike the problem list four
 * sections up, which opens its first row. There the rows are the argument
 * and one has to be showing; here they are answers to questions the reader
 * may not have, so none is opened for them.
 */

export default function Faq({ items }: { items: FaqItem[] }) {
  const [openIdx, setOpenIdx] = useState<number | null>(null);
  return (
    <div className="faq-list">
      {items.map((item, i) => {
        const isOpen = openIdx === i;
        return (
          <div className={`faq-item gs${isOpen ? " open" : ""}`} key={item.q}>
            <button
              type="button"
              className="faq-q"
              aria-expanded={isOpen}
              aria-controls={`faq-a-${i}`}
              onClick={() => setOpenIdx(isOpen ? null : i)}
            >
              <span className="faq-q-txt">{item.q}</span>
              <div className="faq-icon" aria-hidden="true">
                <svg width="10" height="10" viewBox="0 0 10 10" fill="none"><path d="M5 1v8M1 5h8" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" /></svg>
              </div>
            </button>
            {/* grid-template-rows 0fr to 1fr, not a max-height. A capped
                height silently clips any answer taller than the cap, which
                is what the longest of these was doing on a phone — 35px of
                the first answer was simply gone at 360px wide. This has no
                cap to exceed. The inner div hides with visibility as well
                as overflow, so a closed answer leaves the accessibility
                tree rather than being read out invisibly. */}
            <div className="faq-a" id={`faq-a-${i}`}>
              <div>
                <div className="faq-a-inner">{item.a}</div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
