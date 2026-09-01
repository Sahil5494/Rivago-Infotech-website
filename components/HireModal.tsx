"use client";

import { useEffect, useRef, useState } from "react";

type Seg = "employer" | "seeker";

const WEB3FORMS_ACCESS_KEY = "2344bac7-cbde-4313-8fea-b5716d55e448";

export default function HireModal() {
  const [open, setOpen] = useState(false);
  const [seg, setSeg] = useState<Seg>("employer");
  const [showOk, setShowOk] = useState(false);
  const [okTitle, setOkTitle] = useState("");
  const [okMsg, setOkMsg] = useState("");
  const [busy, setBusy] = useState(false);
  const [errEmployer, setErrEmployer] = useState("");
  const [errSeeker, setErrSeeker] = useState("");
  const [cvName, setCvName] = useState("");
  const cvRef = useRef<HTMLInputElement>(null);
  const empFormRef = useRef<HTMLFormElement>(null);
  const seekFormRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    function handler(e: MouseEvent) {
      const target = e.target as HTMLElement;
      if (target.closest("[data-hire]")) {
        e.preventDefault();
        setSeg("employer");
        setShowOk(false);
        setOpen(true);
      }
    }
    document.addEventListener("click", handler);
    return () => document.removeEventListener("click", handler);
  }, []);

  useEffect(() => {
    if (!open) return;
    document.body.style.overflow = "hidden";
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }
    document.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  function val(form: HTMLFormElement, name: string) {
    const el = form.elements.namedItem(name) as HTMLInputElement | HTMLTextAreaElement | null;
    return el ? el.value.trim() : "";
  }

  async function submit(e: React.FormEvent<HTMLFormElement>, kind: Seg) {
    e.preventDefault();
    const form = e.currentTarget;
    const setErr = kind === "employer" ? setErrEmployer : setErrSeeker;
    setErr("");

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
    fd.append("replyto", val(form, "email"));
    fd.append("Phone", val(form, "phone") || "—");

    if (kind === "seeker") {
      fd.append("subject", "Job application — " + val(form, "first") + " " + val(form, "last"));
      fd.append("LinkedIn", val(form, "linkedin") || "—");
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
      fd.append("subject", "New hiring brief — " + (val(form, "company") || val(form, "last")));
      fd.append("Company", val(form, "company"));
      fd.append("Job title", val(form, "title"));
      fd.append("What they need to hire", val(form, "message") || "—");
      fd.append("ccemail", "info@rivagoinfotech.com");
    }

    setBusy(true);
    try {
      const r = await fetch("https://api.web3forms.com/submit", { method: "POST", body: fd });
      const d = await r.json();
      setBusy(false);
      if (!d || d.success !== true) throw new Error((d && d.message) || "Submission failed");
      if (kind === "seeker") {
        setOkTitle("Application received.");
        setOkMsg(`Thanks — your details${cvRef.current?.files?.[0] ? " and CV are" : " are"} with our team. A partner will reply if there's a fit.`);
      } else {
        setOkTitle("Brief received.");
        setOkMsg("Thanks — a senior partner will reply within one business day.");
      }
      setShowOk(true);
      form.reset();
      setCvName("");
    } catch {
      setBusy(false);
      setErr(`Could not send — please check your connection, or email us directly at ${kind === "seeker" ? "careers" : "info"}@rivagoinfotech.com.`);
    }
  }

  return (
    <div
      className={`hire-ov${open ? " open" : ""}`}
      id="hireOverlay"
      role="dialog"
      aria-modal="true"
      aria-labelledby="hireTitle"
      onClick={(e) => { if (e.target === e.currentTarget) setOpen(false); }}
    >
      <div className="hire-modal">
        <button className="hire-x" aria-label="Close" onClick={() => setOpen(false)}>
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M3 3l8 8M11 3l-8 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" /></svg>
        </button>
        {!showOk ? (
          <div>
            <div className="hire-eyb">Get started</div>
            <h2 id="hireTitle">Tell us what you <em>need.</em></h2>
            <div className="hire-q">Just to confirm, are you:</div>
            <div className="hire-seg" role="tablist">
              <button className={seg === "employer" ? "on" : ""} role="tab" aria-selected={seg === "employer"} onClick={() => setSeg("employer")}>An employer</button>
              <button className={seg === "seeker" ? "on" : ""} role="tab" aria-selected={seg === "seeker"} onClick={() => setSeg("seeker")}>Looking for a job</button>
            </div>

            <form className="hire-form" ref={empFormRef} hidden={seg !== "employer"} noValidate onSubmit={(e) => submit(e, "employer")}>
              <div className="hire-field"><label>First name</label><input type="text" name="first" required placeholder="Jane" /></div>
              <div className="hire-field"><label>Last name</label><input type="text" name="last" required placeholder="Doe" /></div>
              <div className="hire-field"><label>Work email</label><input type="email" name="email" required placeholder="jane@company.com" /></div>
              <div className="hire-field"><label>Phone <span className="opt">(optional)</span></label><input type="tel" name="phone" placeholder="Include country code" /></div>
              <div className="hire-field"><label>Company</label><input type="text" name="company" required placeholder="Company name" /></div>
              <div className="hire-field"><label>Job title</label><input type="text" name="title" required placeholder="Head of Talent" /></div>
              <div className="hire-field full"><label>What do you need to hire?</label><textarea name="message" placeholder="Roles, seniority, locations, timeline…" /></div>
              {errEmployer && <div className="hire-err show">{errEmployer}</div>}
              <input type="checkbox" name="botcheck" style={{ display: "none" }} tabIndex={-1} aria-hidden="true" readOnly />
              <button type="submit" className="hire-submit" disabled={busy} style={{ opacity: busy ? 0.65 : undefined }}>
                {busy ? "Sending…" : (<>Submit brief <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M3 7h8M8 4l3 3-3 3" stroke="#030C05" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg></>)}
              </button>
              <div className="hire-foot">Opens a submission to info@rivagoinfotech.com — a senior partner replies within one business day.</div>
            </form>

            <form className="hire-form" ref={seekFormRef} hidden={seg !== "seeker"} noValidate onSubmit={(e) => submit(e, "seeker")}>
              <div className="hire-field"><label>First name</label><input type="text" name="first" required placeholder="Jane" /></div>
              <div className="hire-field"><label>Last name</label><input type="text" name="last" required placeholder="Doe" /></div>
              <div className="hire-field"><label>Email</label><input type="email" name="email" required placeholder="jane@email.com" /></div>
              <div className="hire-field"><label>Phone <span className="opt">(optional)</span></label><input type="tel" name="phone" placeholder="Include country code" /></div>
              <div className="hire-field full"><label>LinkedIn profile</label><input type="url" name="linkedin" placeholder="linkedin.com/in/your-profile" /></div>
              <label className="hire-file" htmlFor="hireCV">
                <span className={`hire-file-txt${cvName ? " has" : ""}`}>{cvName || "Upload CV — PDF or Word"}</span>
                <span className="hire-file-btn">Choose file</span>
              </label>
              <input
                ref={cvRef}
                type="file"
                id="hireCV"
                accept=".pdf,.doc,.docx"
                hidden
                onChange={() => setCvName(cvRef.current?.files?.[0]?.name || "")}
              />
              {errSeeker && <div className="hire-err show">{errSeeker}</div>}
              <input type="checkbox" name="botcheck" style={{ display: "none" }} tabIndex={-1} aria-hidden="true" readOnly />
              <button type="submit" className="hire-submit" disabled={busy} style={{ opacity: busy ? 0.65 : undefined }}>
                {busy ? "Sending…" : (<>Submit application <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M3 7h8M8 4l3 3-3 3" stroke="#030C05" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg></>)}
              </button>
              <div className="hire-foot">Sent to careers@rivagoinfotech.com. Remember to attach your CV before sending.</div>
            </form>
          </div>
        ) : (
          <div className="hire-ok show">
            <div className="hire-ok-ic"><svg width="26" height="26" viewBox="0 0 24 24" fill="none"><path d="M5 12l4 4L19 7" stroke="#3DFF87" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg></div>
            <h3>{okTitle}</h3>
            <p>{okMsg}</p>
          </div>
        )}
      </div>
    </div>
  );
}
