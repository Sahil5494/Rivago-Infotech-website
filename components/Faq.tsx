"use client";

import { useState } from "react";

export type FaqItem = { q: string; a: string };

export default function Faq({ items }: { items: FaqItem[] }) {
  const [openIdx, setOpenIdx] = useState<number | null>(null);

  return (
    <div className="faq-list">
      {items.map((item, i) => {
        const isOpen = openIdx === i;
        const answerId = `faq-answer-${i}`;
        const questionId = `faq-question-${i}`;

        return (
          <div className={`faq-item gs${isOpen ? " open" : ""}`} key={item.q}>
            <button
              type="button"
              id={questionId}
              className="faq-q"
              aria-expanded={isOpen}
              aria-controls={answerId}
              onClick={() => setOpenIdx(isOpen ? null : i)}
            >
              <span className="faq-q-txt">{item.q}</span>
              <span className="faq-icon" aria-hidden="true">
                <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                  <path d="M5 1v8M1 5h8" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
                </svg>
              </span>
            </button>
            <div
              id={answerId}
              className="faq-a"
              role="region"
              aria-labelledby={questionId}
              hidden={!isOpen}
            >
              <div className="faq-a-inner">{item.a}</div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
