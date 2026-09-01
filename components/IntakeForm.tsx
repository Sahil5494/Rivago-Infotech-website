"use client";

import { useState } from "react";

const industries = ["Technology", "Healthcare", "Legal", "Finance & banking", "Aerospace & defence", "Telecom", "Automotive", "Supply & operations", "Sales & marketing", "People & HR"];
const markets = ["United States", "Canada", "UAE", "India", "Multiple / Global"];
const compBands = ["$120k – $180k", "$180k – $250k", "$250k – $400k", "$400k+", "Confidential"];
const roleCounts = ["1 role", "2 – 5 roles", "6 – 10 roles", "10+ roles"];
const engagementTypes = ["Retained", "Contingent", "Embedded"];
const timelines = ["ASAP", "Within 30 days", "60 – 90 days", "Exploratory"];

export default function IntakeForm() {
  const [engagement, setEngagement] = useState("Contingent");
  const [timeline, setTimeline] = useState("ASAP");
  const [submitted, setSubmitted] = useState(false);

  return (
    <form
      className="intake-form gs"
      onSubmit={(e) => {
        e.preventDefault();
        setSubmitted(true);
      }}
    >
      <div className="intake-form-h">Brief intake · ~ 4 minutes</div>
      {!submitted ? (
        <div>
          <div className="if-field">
            <label>Role title</label>
            <input type="text" placeholder="e.g. VP of Engineering, Senior Compliance Manager" required />
          </div>
          <div className="if-field">
            <label>Engagement type</label>
            <div className="if-chips">
              {engagementTypes.map((t) => (
                <button type="button" key={t} className={`if-chip${engagement === t ? " on" : ""}`} onClick={() => setEngagement(t)}>{t}</button>
              ))}
            </div>
          </div>
          <div className="if-row">
            <div className="if-field">
              <label>Industry</label>
              <select defaultValue={industries[0]}>{industries.map((i) => <option key={i}>{i}</option>)}</select>
            </div>
            <div className="if-field">
              <label>Market</label>
              <select defaultValue={markets[0]}>{markets.map((m) => <option key={m}>{m}</option>)}</select>
            </div>
          </div>
          <div className="if-row">
            <div className="if-field">
              <label>Comp band (USD)</label>
              <select defaultValue={compBands[0]}>{compBands.map((c) => <option key={c}>{c}</option>)}</select>
            </div>
            <div className="if-field">
              <label>Open roles</label>
              <select defaultValue={roleCounts[0]}>{roleCounts.map((c) => <option key={c}>{c}</option>)}</select>
            </div>
          </div>
          <div className="if-field">
            <label>Timeline</label>
            <div className="if-chips">
              {timelines.map((t) => (
                <button type="button" key={t} className={`if-chip${timeline === t ? " on" : ""}`} onClick={() => setTimeline(t)}>{t}</button>
              ))}
            </div>
          </div>
          <div className="if-field">
            <label>Key requirements <span style={{ color: "var(--text3)", fontWeight: 400 }}>(optional)</span></label>
            <textarea placeholder="Must-haves, nice-to-haves, team chemistry, anything we should know before sourcing begins…" />
          </div>
          <div className="if-row">
            <div className="if-field">
              <label>Your name</label>
              <input type="text" placeholder="Full name" />
            </div>
            <div className="if-field">
              <label>Work email</label>
              <input type="email" placeholder="you@company.com" required />
            </div>
          </div>
          <button type="submit" className="if-submit">
            Send brief
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M3 7h8M8 4l3 3-3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
          </button>
          <div className="if-fineprint">A partner will be in touch within one business hour during business hours. By submitting you agree to our terms.</div>
        </div>
      ) : (
        <div style={{ textAlign: "center", padding: "30px 0" }}>
          <div style={{ width: 56, height: 56, borderRadius: "50%", background: "rgba(61,255,135,.12)", border: "1px solid rgba(61,255,135,.3)", display: "grid", placeItems: "center", margin: "0 auto 18px" }}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M6 12l5 5 8-10" stroke="#3DFF87" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
          </div>
          <div style={{ fontSize: 17, fontWeight: 500, color: "var(--text)", marginBottom: 8 }}>Brief received.</div>
          <div style={{ fontSize: 13, color: "var(--text2)", lineHeight: 1.6, maxWidth: 340, margin: "0 auto" }}>A senior partner is reviewing it now. Expect a calibration-call invite within the hour.</div>
        </div>
      )}
    </form>
  );
}
