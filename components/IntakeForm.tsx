"use client";

import { useRef, useState } from "react";

/* The hiring-brief form on /hire-talent.
 *
 * WHAT WAS WRONG WITH IT. Until this rewrite the submit handler read:
 *
 *     onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }}
 *
 * — no network call, and not one field carried a `name`, so nothing was
 * serialisable even if something had wanted to read it. It then showed the
 * person "Brief received. A senior partner is reviewing it now. Expect a
 * calibration-call invite within the hour."
 *
 * Every hiring brief sent through this page went nowhere, and the person who
 * sent it was told a partner was reading it. That is worse than a broken
 * form, because a broken form makes someone try again or pick up the phone.
 *
 * It now posts to the same Web3Forms endpoint and access key as
 * components/HireModal.tsx and app/contact-us/ContactForm.tsx, which were
 * already wired correctly — this was the only form on the site collecting
 * real data into nothing. The success copy is also pulled back into line
 * with the rest of the site: HireModal, the page's own CTA and the intake
 * band beside this form all say one business day. "Within the hour" was a
 * promise nobody had agreed to keep.
 */

const WEB3FORMS_ACCESS_KEY = "2344bac7-cbde-4313-8fea-b5716d55e448";

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
  const [busy, setBusy] = useState(false);
  const [err, setErr] = useState("");
  const formRef = useRef<HTMLFormElement>(null);

  function val(form: HTMLFormElement, name: string) {
    const el = form.elements.namedItem(name) as HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement | null;
    return el ? el.value.trim() : "";
  }

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    setErr("");

    /* Same validation shape as HireModal: mark every empty required field at
       once rather than making someone submit five times to find them all. */
    const required = Array.from(form.querySelectorAll<HTMLInputElement | HTMLTextAreaElement>("[required]"));
    required.forEach((i) => (i.style.borderColor = ""));
    const bad = required.filter((i) => !i.value.trim());
    if (bad.length) {
      bad.forEach((i) => (i.style.borderColor = "#ff6b6b"));
      bad[0].focus();
      setErr("Please complete the highlighted fields.");
      return;
    }
    const email = form.elements.namedItem("email") as HTMLInputElement | null;
    if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value.trim())) {
      email.style.borderColor = "#ff6b6b";
      email.focus();
      setErr("Please enter a valid email address.");
      return;
    }

    const role = val(form, "role");
    const fd = new FormData();
    fd.append("access_key", WEB3FORMS_ACCESS_KEY);
    fd.append("from_name", "Rivago Website");
    fd.append("botcheck", "");
    fd.append("subject", "New hiring brief — " + role);
    fd.append("Role title", role);
    fd.append("Engagement type", engagement);
    fd.append("Industry", val(form, "industry"));
    fd.append("Market", val(form, "market"));
    fd.append("Comp band (USD)", val(form, "comp"));
    fd.append("Open roles", val(form, "roles"));
    fd.append("Timeline", timeline);
    fd.append("Key requirements", val(form, "requirements") || "—");
    fd.append("Name", val(form, "name") || "—");
    fd.append("Email", val(form, "email"));
    fd.append("replyto", val(form, "email"));
    fd.append("Source", "Hire Talent intake form");
    fd.append("ccemail", "info@rivagoinfotech.com");

    setBusy(true);
    try {
      const r = await fetch("https://api.web3forms.com/submit", { method: "POST", body: fd });
      const d = await r.json();
      setBusy(false);
      if (!d || d.success !== true) throw new Error((d && d.message) || "Submission failed");
      setSubmitted(true);
      form.reset();
    } catch {
      setBusy(false);
      setErr("Could not send — please check your connection, or email the brief to info@rivagoinfotech.com.");
    }
  }

  return (
    <form className="intake-form gs" ref={formRef} noValidate onSubmit={onSubmit}>
      <div className="intake-form-h">Brief intake · ~ 4 minutes</div>
      {!submitted ? (
        <div>
          <div className="if-field">
            <label htmlFor="if-role">Role title</label>
            <input id="if-role" name="role" type="text" placeholder="e.g. VP of Engineering, Senior Compliance Manager" required />
          </div>
          <div className="if-field">
            <label>Engagement type</label>
            {/* The chip groups are buttons rather than inputs, so their value
                is read from state above instead of from form.elements. */}
            <div className="if-chips">
              {engagementTypes.map((t) => (
                <button type="button" key={t} className={`if-chip${engagement === t ? " on" : ""}`} aria-pressed={engagement === t} onClick={() => setEngagement(t)}>{t}</button>
              ))}
            </div>
          </div>
          <div className="if-row">
            <div className="if-field">
              <label htmlFor="if-industry">Industry</label>
              <select id="if-industry" name="industry" defaultValue={industries[0]}>{industries.map((i) => <option key={i}>{i}</option>)}</select>
            </div>
            <div className="if-field">
              <label htmlFor="if-market">Market</label>
              <select id="if-market" name="market" defaultValue={markets[0]}>{markets.map((m) => <option key={m}>{m}</option>)}</select>
            </div>
          </div>
          <div className="if-row">
            <div className="if-field">
              <label htmlFor="if-comp">Comp band (USD)</label>
              <select id="if-comp" name="comp" defaultValue={compBands[0]}>{compBands.map((c) => <option key={c}>{c}</option>)}</select>
            </div>
            <div className="if-field">
              <label htmlFor="if-roles">Open roles</label>
              <select id="if-roles" name="roles" defaultValue={roleCounts[0]}>{roleCounts.map((c) => <option key={c}>{c}</option>)}</select>
            </div>
          </div>
          <div className="if-field">
            <label>Timeline</label>
            <div className="if-chips">
              {timelines.map((t) => (
                <button type="button" key={t} className={`if-chip${timeline === t ? " on" : ""}`} aria-pressed={timeline === t} onClick={() => setTimeline(t)}>{t}</button>
              ))}
            </div>
          </div>
          <div className="if-field">
            <label htmlFor="if-req">Key requirements <span style={{ color: "var(--text3)", fontWeight: 400 }}>(optional)</span></label>
            <textarea id="if-req" name="requirements" placeholder="Must-haves, nice-to-haves, team chemistry, anything we should know before sourcing begins…" />
          </div>
          <div className="if-row">
            <div className="if-field">
              <label htmlFor="if-name">Your name</label>
              <input id="if-name" name="name" type="text" placeholder="Full name" />
            </div>
            <div className="if-field">
              <label htmlFor="if-email">Work email</label>
              <input id="if-email" name="email" type="email" placeholder="you@company.com" required />
            </div>
          </div>
          {err && <div className="if-err" role="alert">{err}</div>}
          <input type="checkbox" name="botcheck" style={{ display: "none" }} tabIndex={-1} aria-hidden="true" readOnly />
          <button type="submit" className="if-submit" disabled={busy} style={{ opacity: busy ? 0.65 : undefined }}>
            {busy ? "Sending…" : (
              <>
                Send brief
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M3 7h8M8 4l3 3-3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
              </>
            )}
          </button>
          <div className="if-fineprint">Sent to info@rivagoinfotech.com. A senior partner replies within one business day. By submitting you agree to our terms.</div>
        </div>
      ) : (
        <div style={{ textAlign: "center", padding: "30px 0" }}>
          <div style={{ width: 56, height: 56, borderRadius: "50%", background: "rgba(61,255,135,.12)", border: "1px solid rgba(61,255,135,.3)", display: "grid", placeItems: "center", margin: "0 auto 18px" }}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M6 12l5 5 8-10" stroke="var(--accent)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
          </div>
          <div style={{ fontSize: "var(--fz7)", fontWeight: 500, color: "var(--text)", marginBottom: 8 }}>Brief received.</div>
          <div style={{ fontSize: "var(--fz4)", color: "var(--text2)", lineHeight: 1.6, maxWidth: 340, margin: "0 auto" }}>It is with a senior partner, who will reply within one business day to book the calibration call.</div>
        </div>
      )}
    </form>
  );
}
