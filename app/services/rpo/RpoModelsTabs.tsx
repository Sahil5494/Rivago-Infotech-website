"use client";

import { useState } from "react";

type Model = {
  key: string;
  label: string;
  titleTop: string;
  titleEm: string;
  desc: string;
  bestFor: string;
  spec: [string, string][];
};

const models: Model[] = [
  {
    key: "enterprise",
    label: "Enterprise RPO",
    titleTop: "Own the whole",
    titleEm: "recruiting function.",
    desc: "Rivago becomes your recruiting engine — strategy, brand, sourcing and reporting, owned by an embedded team that runs as part of your org.",
    bestFor: "Ongoing, high-volume hiring",
    spec: [
      ["Best for", "Organisations making around 50 or more permanent hires a year on a continuous basis."],
      ["Scope", "Every stage of recruiting for the roles in scope, owned end to end."],
      ["Duration", "A multi-year partnership, reviewed and renewed each year."],
      ["Pricing", "A fixed management fee or per-hire rate, scaled to volume and outcomes."],
    ],
  },
  {
    key: "project",
    label: "Project RPO",
    titleTop: "A hiring surge,",
    titleEm: "delivered on a deadline.",
    desc: "A fixed-scope push — new site, funding round, launch. We stand up a pod in weeks, hit the plan, and hand over cleanly when it is done.",
    bestFor: "A one-off scale-up with a clear end",
    spec: [
      ["Best for", "Time-bounded initiatives with a defined number of hires to make."],
      ["Scope", "Specific roles or a single business unit, agreed up front."],
      ["Duration", "Three to eighteen months, sized to the project."],
      ["Pricing", "A project fee tied to milestones and hire targets."],
    ],
  },
  {
    key: "hybrid",
    label: "Hybrid / On-demand RPO",
    titleTop: "Flex capacity that",
    titleEm: "plugs into your team.",
    desc: "Keep your team and add Rivago exactly where it hurts — a tough function, a peak, an overflow. Scale up or down as demand moves.",
    bestFor: "A mature team that needs to flex",
    spec: [
      ["Best for", "Established talent teams with steady hiring plus periodic surges."],
      ["Scope", "A baseline of support plus flexible surge capacity, scoped each quarter."],
      ["Duration", "A multi-year arrangement, with surge windows opened as needed."],
      ["Pricing", "A baseline fee plus per-hire pricing on surge volume."],
    ],
  },
];

export default function RpoModelsTabs() {
  const [active, setActive] = useState(models[0].key);
  const model = models.find((m) => m.key === active) ?? models[0];

  return (
    <>
      <div className="rmt-tabs">
        {models.map((m) => (
          <button key={m.key} className={`rmt-tab${active === m.key ? " on" : ""}`} onClick={() => setActive(m.key)}>
            {m.label}
          </button>
        ))}
      </div>
      <div className="rmt-panel" key={model.key}>
        <div className="rmt-l">
          <h3>{model.titleTop}<br /><em style={{ fontFamily: "var(--fs)", fontStyle: "italic", color: "var(--green)" }}>{model.titleEm}</em></h3>
          <p>{model.desc}</p>
          <div className="rmt-best">Best for<strong>{model.bestFor}</strong></div>
        </div>
        <ul className="rmt-spec">
          {model.spec.map(([k, v]) => (
            <li key={k}><span className="k">{k}</span><span className="val">{v}</span></li>
          ))}
        </ul>
      </div>
    </>
  );
}
