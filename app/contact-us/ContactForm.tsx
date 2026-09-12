"use client";

import { useRef, useState } from "react";

type Tab = "hiring" | "seeker" | "general";

export default function ContactForm() {
  const [tab, setTab] = useState<Tab>("hiring");
  const [submittedTab, setSubmittedTab] = useState<Tab | null>(null);
  const [cvName, setCvName] = useState("");
  const cvRef = useRef<HTMLInputElement>(null);

  function submit(e: React.FormEvent<HTMLFormElement>, which: Tab) {
    e.preventDefault();
    setSubmittedTab(which);
  }

  return (
    <div className="intake-form gs cf-wrap">
      <style>{`
        .cf-tabs{display:flex;gap:6px;background:var(--bg2);border:1px solid var(--border);border-radius:12px;padding:5px;margin-bottom:26px}
        .cf-tab{flex:1;padding:11px 8px;border:none;background:none;border-radius:8px;font-family:var(--ff);font-size:12.5px;font-weight:500;color:var(--text2);cursor:pointer;transition:all .2s var(--ease)}
        .cf-tab.on{background:var(--green);color:#030C05;font-weight:600}
        .cf-tab:not(.on):hover{color:var(--text)}
        .cf-general{text-align:center;padding:20px 6px 8px}
        .cf-general p{font-size:14.5px;color:var(--text2);line-height:1.75;max-width:400px;margin:0 auto 24px}
        .cf-general strong{color:var(--text);font-weight:500}
        @media(max-width:520px){.cf-tab{font-size:11px;padding:10px 5px}}
      `}</style>

      <div className="intake-form-h">Contact Rivago</div>
      <div className="cf-tabs" role="tablist">
        <button type="button" role="tab" aria-selected={tab === "hiring"} className={`cf-tab${tab === "hiring" ? " on" : ""}`} onClick={() => setTab("hiring")}>Hiring / opportunities</button>
        <button type="button" role="tab" aria-selected={tab === "seeker"} className={`cf-tab${tab === "seeker" ? " on" : ""}`} onClick={() => setTab("seeker")}>Looking for a job</button>
        <button type="button" role="tab" aria-selected={tab === "general"} className={`cf-tab${tab === "general" ? " on" : ""}`} onClick={() => setTab("general")}>General enquiry</button>
      </div>

      {tab === "hiring" && (
        submittedTab === "hiring" ? (
          <SuccessPanel title="Message received." body="Thanks — a partner reviews every enquiry and will reply within one business day." />
        ) : (
          <form noValidate onSubmit={(e) => submit(e, "hiring")}>
            <div className="if-row">
              <div className="if-field"><label>First name</label><input type="text" name="first" required placeholder="Jane" /></div>
              <div className="if-field"><label>Last name</label><input type="text" name="last" required placeholder="Doe" /></div>
            </div>
            <div className="if-row">
              <div className="if-field"><label>Work email</label><input type="email" name="email" required placeholder="jane@company.com" /></div>
              <div className="if-field"><label>Company</label><input type="text" name="company" required placeholder="Company name" /></div>
            </div>
            <div className="if-field">
              <label>Message</label>
              <textarea name="message" placeholder="What are you hoping to hire, and by when?" required />
            </div>
            <button type="submit" className="if-submit">
              Send message
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M3 7h8M8 4l3 3-3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
            </button>
            <div className="if-fineprint">Routes to info@rivagoinfotech.com — a partner replies within one business day.</div>
          </form>
        )
      )}

      {tab === "seeker" && (
        submittedTab === "seeker" ? (
          <SuccessPanel title="Application received." body={`Thanks — your details${cvName ? " and CV are" : " are"} with our team. A partner will reply if there's a fit.`} />
        ) : (
          <form noValidate onSubmit={(e) => submit(e, "seeker")}>
            <div className="if-row">
              <div className="if-field"><label>First name</label><input type="text" name="first" required placeholder="Jane" /></div>
              <div className="if-field"><label>Last name</label><input type="text" name="last" required placeholder="Doe" /></div>
            </div>
            <div className="if-field"><label>Email</label><input type="email" name="email" required placeholder="jane@email.com" /></div>
            <div className="if-field"><label>LinkedIn profile</label><input type="url" name="linkedin" required placeholder="linkedin.com/in/your-profile" /></div>
            <div className="if-field">
              <label>Message <span style={{ color: "var(--text3)", fontWeight: 400 }}>(optional)</span></label>
              <textarea name="message" placeholder="Roles you're targeting, notice period, anything we should know…" />
            </div>
            <label className="hire-file" htmlFor="contactCV" style={{ marginBottom: 16 }}>
              <span className={`hire-file-txt${cvName ? " has" : ""}`}>{cvName || "Upload CV — PDF or Word"}</span>
              <span className="hire-file-btn">Choose file</span>
            </label>
            <input
              ref={cvRef}
              type="file"
              id="contactCV"
              accept=".pdf,.doc,.docx"
              hidden
              onChange={() => setCvName(cvRef.current?.files?.[0]?.name || "")}
            />
            <button type="submit" className="if-submit">
              Send application
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M3 7h8M8 4l3 3-3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
            </button>
            <div className="if-fineprint">Routes to careers@rivagoinfotech.com — a partner replies if there&apos;s a fit for an open search.</div>
          </form>
        )
      )}

      {tab === "general" && (
        <div className="cf-general">
          <p>Have another question? If you need help with your Rivago Talent account, or just have a general question, email us at:<br /><strong>questions@rivagoinfotech.com</strong>.</p>
          <a className="btn btn-prim" href="mailto:questions@rivagoinfotech.com">Send an email</a>
        </div>
      )}
    </div>
  );
}

function SuccessPanel({ title, body }: { title: string; body: string }) {
  return (
    <div style={{ textAlign: "center", padding: "30px 0" }}>
      <div style={{ width: 56, height: 56, borderRadius: "50%", background: "rgba(61,255,135,.12)", border: "1px solid rgba(61,255,135,.3)", display: "grid", placeItems: "center", margin: "0 auto 18px" }}>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M6 12l5 5 8-10" stroke="#3DFF87" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
      </div>
      <div style={{ fontSize: 17, fontWeight: 500, color: "var(--text)", marginBottom: 8 }}>{title}</div>
      <div style={{ fontSize: 13, color: "var(--text2)", lineHeight: 1.6, maxWidth: 340, margin: "0 auto" }}>{body}</div>
    </div>
  );
}
