"use client";

import { useRef, useState } from "react";

const WEB3FORMS_ACCESS_KEY = "2344bac7-cbde-4313-8fea-b5716d55e448";

type Enquirer = "hiring" | "general";
type Party = "employer" | "seeker" | "";

export default function ContactForm() {
  const [enquirer, setEnquirer] = useState<Enquirer>("hiring");
  const [party, setParty] = useState<Party>("");
  const [busy, setBusy] = useState(false);
  const [err, setErr] = useState("");
  const [ok, setOk] = useState(false);
  const [cvName, setCvName] = useState("");
  const cvRef = useRef<HTMLInputElement>(null);

  function val(form: HTMLFormElement, name: string) {
    const el = form.elements.namedItem(name) as HTMLInputElement | HTMLTextAreaElement | null;
    return el ? el.value.trim() : "";
  }

  async function submit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setErr("");
    const form = e.currentTarget;

    if (!party) {
      setErr("Please confirm whether you're an employer or looking for a job.");
      return;
    }

    const required = Array.from(form.querySelectorAll<HTMLInputElement | HTMLTextAreaElement>("[required]"));
    const bad = required.filter((i) => !i.value.trim());
    required.forEach((i) => (i.style.borderColor = ""));
    if (bad.length) {
      bad[0].focus();
      bad.forEach((i) => (i.style.borderColor = "#ff6b6b"));
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

    const fd = new FormData();
    fd.append("access_key", WEB3FORMS_ACCESS_KEY);
    fd.append("from_name", "Rivago Website");
    fd.append("botcheck", "");
    fd.append("First name", val(form, "first"));
    fd.append("Last name", val(form, "last"));
    fd.append("Email", val(form, "email"));
    fd.append("Phone", val(form, "phone") || "—");
    fd.append("replyto", val(form, "email"));
    fd.append("They are", party === "employer" ? "An employer" : "Looking for a job");

    if (party === "seeker") {
      fd.append("subject", "Job enquiry — " + val(form, "first") + " " + val(form, "last"));
      fd.append("LinkedIn", val(form, "linkedin"));
      fd.append("Message", val(form, "message_seek"));
      fd.append("ccemail", "careers@rivagoinfotech.com");
      const file = cvRef.current?.files?.[0];
      if (file) {
        if (file.size > 4 * 1024 * 1024) {
          setErr("That CV is over 4MB. Please upload a smaller file or email it to careers@rivagoinfotech.com.");
          return;
        }
        fd.append("attachment", file);
      }
    } else {
      fd.append("subject", "Contact enquiry — " + (val(form, "company") || val(form, "last")));
      fd.append("Company", val(form, "company"));
      fd.append("Title", val(form, "title") || "—");
      fd.append("Website", val(form, "website") || "—");
      fd.append("Message", val(form, "message_emp"));
      fd.append("ccemail", "info@rivagoinfotech.com");
    }

    setBusy(true);
    try {
      const r = await fetch("https://api.web3forms.com/submit", { method: "POST", body: fd });
      const d = await r.json();
      setBusy(false);
      if (!d || d.success !== true) throw new Error((d && d.message) || "Submission failed");
      setOk(true);
      form.reset();
      setCvName("");
    } catch {
      setBusy(false);
      setErr(`Could not send — please check your connection, or email us directly at ${party === "seeker" ? "careers" : "info"}@rivagoinfotech.com.`);
    }
  }

  if (ok) {
    return (
      <div style={{ padding: 24, background: "rgba(61,255,135,.06)", border: "1px solid rgba(61,255,135,.2)", borderRadius: 14 }}>
        <div style={{ fontSize: 16, fontWeight: 500, color: "var(--text)", marginBottom: 6 }}>Message sent.</div>
        <div style={{ fontSize: 13, color: "var(--text2)" }}>A partner will reply within one business day.</div>
      </div>
    );
  }

  return (
    <form className="cform gs" noValidate onSubmit={submit}>
      <div className="cf-intent" role="radiogroup" aria-label="How can we help?">
        <label className={`ci${enquirer === "hiring" ? " on" : ""}`}>
          <input type="radio" name="enquirer" checked={enquirer === "hiring"} onChange={() => setEnquirer("hiring")} />
          <span className="ci-box"></span><span className="ci-t">I&apos;m interested in hiring / Job opportunities</span>
        </label>
        <label className={`ci${enquirer === "general" ? " on" : ""}`}>
          <input type="radio" name="enquirer" checked={enquirer === "general"} onChange={() => setEnquirer("general")} />
          <span className="ci-box"></span><span className="ci-t">General enquiry</span>
        </label>
      </div>

      {enquirer === "hiring" ? (
        <div className="cf-body">
          <div className="cf-row">
            <div className="cf"><label>First name *</label><input type="text" name="first" required /></div>
            <div className="cf"><label>Last name *</label><input type="text" name="last" required /></div>
          </div>
          <div className="cf-row">
            <div className="cf"><label>Email *</label><input type="email" name="email" required placeholder="you@company.com" /></div>
            <div className="cf"><label>Phone (optional)</label><input type="tel" name="phone" placeholder="Include country code" /></div>
          </div>
          <div className="cf cf-party">
            <label style={{ marginBottom: 4 }}>Just to confirm, are you: *</label>
            <div className="cf-opts" role="radiogroup" aria-label="Are you an employer or looking for a job">
              <label className={`cs${party === "employer" ? " on" : ""}`}>
                <input type="radio" name="party" checked={party === "employer"} onChange={() => setParty("employer")} />
                <span>An employer</span>
              </label>
              <label className={`cs${party === "seeker" ? " on" : ""}`}>
                <input type="radio" name="party" checked={party === "seeker"} onChange={() => setParty("seeker")} />
                <span>Looking for a job</span>
              </label>
            </div>
          </div>

          {party === "employer" && (
            <div className="cf-group">
              <div className="cf-row">
                <div className="cf"><label>Company name *</label><input type="text" name="company" required placeholder="Company name" /></div>
                <div className="cf"><label>Title</label><input type="text" name="title" placeholder="Head of Talent" /></div>
              </div>
              <div className="cf"><label>Company website URL</label><input type="url" name="website" placeholder="https://company.com" /></div>
              <div className="cf"><label>Message</label><textarea name="message_emp" placeholder="Roles, seniority, locations, timeline…" required /></div>
            </div>
          )}

          {party === "seeker" && (
            <div className="cf-group">
              <div className="cf"><label>LinkedIn profile *</label><input type="url" name="linkedin" required placeholder="https://linkedin.com/in/your-profile" /></div>
              <div className="cf">
                <label>Submit CV</label>
                <label className="cf-file" htmlFor="cvFile">
                  <span className={`cf-file-t${cvName ? " has" : ""}`}>{cvName || "Upload your CV — PDF or Word"}</span>
                  <span className="cf-file-b">Choose file</span>
                </label>
                <input ref={cvRef} type="file" id="cvFile" accept=".pdf,.doc,.docx" hidden onChange={() => setCvName(cvRef.current?.files?.[0]?.name || "")} />
              </div>
              <div className="cf"><label>Message</label><textarea name="message_seek" placeholder="Your discipline, current level and what you're looking for next…" required /></div>
            </div>
          )}

          {err && <div className="cf-err">{err}</div>}
          <input type="checkbox" name="botcheck" style={{ display: "none" }} tabIndex={-1} aria-hidden="true" readOnly />
          <button type="submit" className="btn btn-prim" disabled={busy} style={{ alignSelf: "flex-start", marginTop: 14, opacity: busy ? 0.65 : undefined }}>
            {busy ? "Sending…" : (<>Send message <svg className="arrow" width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M3 7h8M8 4l3 3-3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg></>)}
          </button>
        </div>
      ) : (
        <div className="cf-ask">
          <h3>Have another question?</h3>
          <p>If you need help with your Rivago Talent account, or just have a general question, email us at <a href="mailto:questions@rivagoinfotech.com" className="ca-mail">questions@rivagoinfotech.com</a>.</p>
          <a className="btn btn-prim" href="mailto:questions@rivagoinfotech.com?subject=General%20enquiry%20%E2%80%94%20Rivago%20Infotech">
            <svg width="15" height="15" viewBox="0 0 16 16" fill="none"><path d="M2 4.5h12v8H2z" stroke="currentColor" strokeWidth="1.3" strokeLinejoin="round" /><path d="M2 5l6 4 6-4" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" /></svg>
            Send an email
          </a>
        </div>
      )}
    </form>
  );
}
