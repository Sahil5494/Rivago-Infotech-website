"use client";

import { useState } from "react";
import { rlsTabs } from "./data";

export default function ServicesRolesTabs() {
  const [active, setActive] = useState(rlsTabs[0].key);
  const tab = rlsTabs.find((t) => t.key === active) ?? rlsTabs[0];

  return (
    <>
      <div className="rls-tabs">
        {rlsTabs.map((t) => (
          <button key={t.key} className={`rls-tab${active === t.key ? " on" : ""}`} onClick={() => setActive(t.key)}>
            {t.label}
          </button>
        ))}
      </div>
      <div className="rls-panel on" key={tab.key}>
        <div className="rls-head">
          <h3>{tab.heading}</h3>
          <span className="cnt">Typical roles · last 90 days</span>
        </div>
        <p style={{ fontSize: 14.5, color: "var(--text2)", lineHeight: 1.7, fontWeight: 300, maxWidth: 680, marginBottom: 26 }}>{tab.blurb}</p>
        <div className="rls-ind">
          <div>
            <div className="rls-illabel">Typical roles · last 90 days</div>
            <div className="rls-irlist">
              {tab.roles.map((r) => (
                <div className="rls-ir" key={r.name}>
                  <span className="nm">{r.name}</span>
                  <span className="ct">{r.count}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="rls-panelR">
            <div className="rls-ministory">
              <div className="rls-ministory-tag">Client story</div>
              <q dangerouslySetInnerHTML={{ __html: tab.quote }} />
              <div className="rls-ministory-by">
                <div className="rls-ministory-av">{tab.quoteInitials}</div>
                <div>
                  <div className="rls-ministory-n">{tab.quoteName}</div>
                  <div className="rls-ministory-r">{tab.quoteRole}</div>
                </div>
              </div>
            </div>
            <div className="rls-statgrid">
              {tab.stats.map(([v, unit, label]) => (
                <div className="rls-stat" key={label}>
                  <div className="v">{v}{unit && <span className="u">{unit}</span>}</div>
                  <div className="l">{label}</div>
                </div>
              ))}
            </div>
            <div className="rls-sample">
              <div>
                <div className="rls-sample-h">Recent placement</div>
                <div className="rls-sample-line">{tab.sampleLine}</div>
                <div className="rls-sample-sub">{tab.sampleSub}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
