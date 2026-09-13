"use client";

import { useRef, useState } from "react";

/* "Our approach" — five stages of a real search.
 *
 * Two rules shaped this content.
 *
 * First, every panel takes a DIFFERENT form: an intake document, a channel
 * grid, a submission packet, a written assessment, a timeline. Five tabs
 * carrying five identical four-row checklists is the thing that makes a
 * page read as generated — the structure repeats, so the eye stops finding
 * anything new and the words underneath stop mattering.
 *
 * Second, the detail is the trade's own. "Right to represent, signed" and
 * "counter-offer risk" are artefacts nobody outside staffing writes down;
 * "we screen thoroughly" is a sentence anyone could produce about anything.
 * The assessment panel carries a reservation about the candidate, because a
 * real recruiter summary names what is weak as well as what is strong — a
 * summary with no caveat in it is a sales document, and hiring managers can
 * tell the difference at a glance.
 *
 * No figure in here is a measurement. The example role is labelled as an
 * example. Process details — the RTR, the check-in cadence, the two-referee
 * rule — are standard practice and need confirming against how Rivago
 * actually runs a search before this ships.
 */

const Doc = () => (
  <svg width="13" height="13" viewBox="0 0 14 14" fill="none" aria-hidden="true">
    <path d="M3.5 1.5h4.5l2.5 2.5v8.5h-7z" stroke="var(--accent)" strokeWidth="1.1" strokeLinejoin="round" />
    <path d="M8 1.5V4h2.5" stroke="var(--accent)" strokeWidth="1.1" strokeLinejoin="round" />
  </svg>
);

const STAGES = [
  /* ── 01 ── an intake document. Must-have against nice-to-have is what an
     intake call actually produces, and it is the split that decides who gets
     submitted. */
  {
    tab: "Understand the brief",
    title: "We take the brief properly.",
    sub: "One call with the hiring manager and the partner who will run the search. We leave it knowing what the role needs, what it only wants, and who signs off.",
    art: (
      <div className="apr-art">
        <div className="apr-art-h">
          <span className="sv-nl">Role brief</span>
          <span className="apr-stamp">Example</span>
        </div>
        <div className="apr-brief">
          <div className="apr-brief-h">Senior Cloud Architect</div>
          <div className="apr-brief-m">Technology · Contract · United States</div>
        </div>
        <div className="apr-cols">
          <div>
            <div className="apr-col-h">Must have</div>
            <ul className="apr-ul">
              <li>AWS at production scale</li>
              <li>Terraform, not click-ops</li>
              <li>Work authorisation in place</li>
            </ul>
          </div>
          <div>
            <div className="apr-col-h">Nice to have</div>
            <ul className="apr-ul apr-ul-soft">
              <li>Azure exposure</li>
              <li>Regulated-industry background</li>
              <li>Client-facing experience</li>
            </ul>
          </div>
        </div>
        <div className="apr-kv">
          <div><span>Interview process</span><b>Two stages, panel on the second</b></div>
          <div><span>Sign-off</span><b>Engineering Director</b></div>
          <div><span>Rate band</span><b>Agreed on the call, in writing</b></div>
        </div>
      </div>
    ),
  },

  /* ── 02 ── a channel grid. The point of this stage is where people come
     from, so the panel shows sources, not steps. */
  {
    tab: "Source",
    title: "Most people we place weren't looking.",
    sub: "Job boards reach the people already on the market. The ones worth hiring usually aren't — so we go and find them, and we keep the ones we've already met.",
    art: (
      <div className="apr-art">
        <div className="sv-nl">Where a shortlist comes from</div>
        <div className="apr-grid">
          <div className="apr-cell">
            <div className="apr-cell-h">Referrals</div>
            <p>People we placed before, and the ones they vouch for.</p>
          </div>
          <div className="apr-cell">
            <div className="apr-cell-h">Direct approach</div>
            <p>Named, mapped and contacted for this role specifically.</p>
          </div>
          <div className="apr-cell">
            <div className="apr-cell-h">Known pool</div>
            <p>Screened by us already — often available sooner.</p>
          </div>
          <div className="apr-cell">
            <div className="apr-cell-h">Market map</div>
            <p>Who is out there, and what it would take to move them.</p>
          </div>
        </div>
        <p className="apr-foot">
          If a search needs a channel we don&apos;t have, we say so at the brief
          rather than six weeks in.
        </p>
      </div>
    ),
  },

  /* ── 03 ── the packet. Naming what physically travels with a submission is
     more convincing than any adjective about rigour. */
  {
    tab: "Screen",
    title: "What arrives with every candidate.",
    sub: "A CV on its own puts the work back on you. Everything here is done before a name reaches your inbox — so the first question you ask is about the person, not the paperwork.",
    art: (
      <div className="apr-art">
        <div className="apr-art-h">
          <span className="sv-nl">Submission packet</span>
          <span className="apr-stamp">Example</span>
        </div>
        <ul className="apr-packet">
          {[
            ["CV, with our notes on it", "What the CV doesn't say, and why they're moving"],
            ["Right to represent, signed", "So you're not seeing them from three agencies"],
            ["Work authorisation, evidenced", "Checked at screen, not discovered at offer"],
            ["Rate expectation, agreed", "In writing, before you spend an interview slot"],
            ["Notice and competing offers", "Including anything else they're in process for"],
            ["Two referees identified", "Named up front, taken up on offer"],
          ].map(([t, s]) => (
            <li key={t}>
              <Doc />
              <div>
                <b>{t}</b>
                <span>{s}</span>
              </div>
            </li>
          ))}
        </ul>
      </div>
    ),
  },

  /* ── 04 ── the written assessment, reservation included. */
  {
    tab: "Submit shortlist",
    title: "An honest read, in writing.",
    sub: "Every shortlist comes with a written view from the partner who took the brief — including what isn't a perfect fit. You can disagree with it, but you won't be guessing.",
    art: (
      <div className="apr-art">
        <div className="apr-art-h">
          <span className="sv-nl">Recruiter assessment</span>
          <span className="apr-stamp">Example</span>
        </div>
        <blockquote className="apr-memo">
          <p>
            Eight years across AWS and Azure, most recently running platform
            for a payments business — so the cost-governance and IaC side of
            the brief is well covered.
          </p>
          <p className="apr-memo-flag">
            Less regulated-industry exposure than you ideally wanted. I&apos;d
            probe that in the panel rather than screen him out on it.
          </p>
          <p>
            Moving because the platform team is being absorbed into a wider
            group. Four weeks&apos; notice. No competing offers as of today.
            Worth your time.
          </p>
        </blockquote>
        <div className="apr-sign">— The partner who took your brief</div>
      </div>
    ),
  },

  /* ── 05 ── a timeline. The stage is about elapsed time, so it is drawn as
     elapsed time. */
  {
    tab: "Place and support",
    title: "The offer isn't the finish line.",
    sub: "Most placements that fail, fail in the first month — and usually for reasons someone could see coming. We stay close enough to catch them.",
    art: (
      <div className="apr-art">
        <div className="sv-nl">After you say yes</div>
        <ol className="apr-time">
          {[
            ["Offer", "Package, start date, and an honest read on counter-offer risk"],
            ["Pre-start", "Checks and paperwork run in parallel, not in sequence"],
            ["Day one", "Handover to the hiring manager, so nothing is re-explained"],
            ["First weeks", "We check in with both sides separately — people tell us things they won't tell each other"],
            ["Thereafter", "If it doesn't work out, the replacement terms are the ones agreed at brief stage"],
          ].map(([t, s]) => (
            <li key={t}>
              <div className="apr-time-t">{t}</div>
              <div className="apr-time-s">{s}</div>
            </li>
          ))}
        </ol>
      </div>
    ),
  },
];

export default function ApproachTabs() {
  const [active, setActive] = useState(0);
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);

  /* A tablist is a single tab stop: arrows move between tabs, Tab leaves the
     group. Without this the panel is reachable but the list is not operable
     the way a screen-reader user expects one to be. */
  const onKeyDown = (e: React.KeyboardEvent) => {
    const keys: Record<string, number> = { ArrowDown: 1, ArrowRight: 1, ArrowUp: -1, ArrowLeft: -1 };
    let next: number | null = null;
    if (e.key in keys) next = (active + keys[e.key] + STAGES.length) % STAGES.length;
    else if (e.key === "Home") next = 0;
    else if (e.key === "End") next = STAGES.length - 1;
    if (next === null) return;
    e.preventDefault();
    setActive(next);
    tabRefs.current[next]?.focus();
  };

  const s = STAGES[active];

  return (
    <div className="apr">
      <div className="apr-tabs" role="tablist" aria-orientation="vertical" aria-label="Our approach" onKeyDown={onKeyDown}>
        {STAGES.map((st, i) => (
          <button
            key={st.tab}
            ref={(el) => { tabRefs.current[i] = el; }}
            type="button"
            role="tab"
            id={`apr-tab-${i}`}
            aria-selected={i === active}
            aria-controls={`apr-panel-${i}`}
            tabIndex={i === active ? 0 : -1}
            className={`apr-tab${i === active ? " on" : ""}`}
            onClick={() => setActive(i)}
          >
            <span className="apr-tab-n">{String(i + 1).padStart(2, "0")}</span>
            <span className="apr-tab-t">{st.tab}</span>
          </button>
        ))}
      </div>

      <div className="apr-panel" role="tabpanel" id={`apr-panel-${active}`} aria-labelledby={`apr-tab-${active}`} tabIndex={0}>
        <h3 className="apr-h">{s.title}</h3>
        <p className="apr-sub">{s.sub}</p>
        {s.art}
      </div>
    </div>
  );
}
