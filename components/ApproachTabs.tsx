"use client";

import { useRef, useState } from "react";

/* "Our approach", as a vertical tab list against one illustrated panel.
 *
 * The tabs are Rivago's real four-step process — the same steps the PROCESS
 * section already sets out — not a list of product features, because Rivago
 * is a staffing firm and has no product surface to show. Each panel is an
 * artefact from that stage, built in the card language the rest of the page
 * already uses.
 *
 * Nothing in here is a measurement. The previous version of this section
 * carried a "live pipeline" with salaries, a 94% client acceptance rate, a
 * 94% interview rate and a placements-by-industry split, none of which were
 * real — and it described the same invented candidate as having 8 years'
 * experience in one card and 7 in another. Every figure is gone; what is
 * left describes what happens at each stage, which is true and needs no
 * number to carry it.
 */

const Check = () => (
  <div className="sv-ci">
    <svg width="8" height="6" viewBox="0 0 8 6" fill="none" aria-hidden="true">
      <path d="M1 3l2 2 4-4" stroke="var(--accent)" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  </div>
);

const Rows = ({ items }: { items: [string, string][] }) => (
  <>
    {items.map(([t, s]) => (
      <div className="sv-check" key={t}>
        <Check />
        <div>
          <div className="sv-ct">{t}</div>
          <div className="sv-cs">{s}</div>
        </div>
      </div>
    ))}
  </>
);

const STAGES = [
  {
    tab: "Understand the brief",
    title: "We take the brief properly.",
    sub: "A call with the hiring manager and the named partner before anything else moves — so the search starts from what the role actually needs.",
    art: (
      <div className="apr-art">
        <div className="sv-nl">Role brief</div>
        <div className="apr-brief">
          <div className="apr-brief-h">Senior Cloud Architect</div>
          <div className="apr-brief-m">Technology · Contract · United States</div>
        </div>
        <Rows
          items={[
            ["Must-haves agreed", "Scope, seniority and technical bar"],
            ["Compensation band set", "Package structure and flexibility"],
            ["Right to work and notice", "Confirmed up front, not at offer"],
          ]}
        />
      </div>
    ),
  },
  {
    tab: "Source and screen",
    title: "We go where the candidates are.",
    sub: "Referrals, direct headhunting and our own talent pool — not job boards. Everyone is screened against the brief before you hear about them.",
    art: (
      <div className="apr-art">
        <div className="sv-tag sv-tg">
          <span className="apr-dot" aria-hidden="true" />
          Example submission
        </div>
        <div className="sv-cand">
          <div className="sv-cand-av apr-av" aria-hidden="true">SC</div>
          <div>
            <div className="sv-cand-name">Senior Cloud Architect</div>
            <div className="sv-cand-role">Technology · Contract</div>
            <div className="sv-skills">
              <span className="sv-sk">AWS</span>
              <span className="sv-sk">Kubernetes</span>
              <span className="sv-sk">Terraform</span>
            </div>
          </div>
        </div>
        <Rows
          items={[
            ["Screened against the brief", "Scope, seniority and technical bar"],
            ["Right to work verified", "Checked before submission"],
            ["Availability confirmed", "Notice period and competing offers"],
          ]}
        />
      </div>
    ),
  },
  {
    tab: "Submit shortlist",
    title: "Every shortlist comes with context.",
    sub: "A written summary from the partner who took the brief — background, motivations, strengths and an honest recommendation. No guesswork on your side.",
    art: (
      <div className="apr-art">
        <div className="sv-nl">Recruiter assessment summary</div>
        <div className="sv-note">
          Cloud architecture background across AWS and Azure, with prior work in
          fintech and enterprise SaaS. Strong communicator, comfortable
          client-facing. Available at short notice, US Eastern hours, no visa
          restrictions. Panel interview recommended.
        </div>
        <div className="apr-tags">
          <span className="apr-tag">AWS</span>
          <span className="apr-tag">Azure</span>
          <span className="apr-tag">Fintech</span>
        </div>
      </div>
    ),
  },
  {
    tab: "Place and support",
    title: "We stay on it after the offer.",
    sub: "Offer negotiation, references and onboarding handover — then we stay on the line. If a placement does not work out, the replacement terms are the ones agreed when we took the brief.",
    art: (
      <div className="apr-art">
        <div className="sv-nl">After the offer</div>
        <Rows
          items={[
            ["Offer negotiated", "Package, start date and counter-offer risk"],
            ["References completed", "Taken up and written down"],
            ["Onboarding handover", "Briefed in before day one"],
            ["Replacement cover", "On the terms agreed at brief stage"],
          ]}
        />
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
