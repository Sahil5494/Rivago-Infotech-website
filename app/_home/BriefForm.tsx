"use client";

import { useRef, useState } from "react";

const WEB3FORMS_ACCESS_KEY = "2344bac7-cbde-4313-8fea-b5716d55e448";

function val(form: HTMLFormElement, name: string) {
  const el = form.elements.namedItem(name) as HTMLInputElement | HTMLTextAreaElement | null;
  return el ? el.value.trim() : "";
}

export default function BriefForm() {
  const formRef = useRef<HTMLFormElement>(null);
  const [busy, setBusy] = useState(false);
  const [ok, setOk] = useState(false);
  const [err, setErr] = useState("");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    setErr("");

    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }
    const email = val(form, "email");
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setErr("Please enter a valid work email address.");
      return;
    }

    const fd = new FormData();
    fd.append("access_key", WEB3FORMS_ACCESS_KEY);
    fd.append("from_name", "Rivago Website");
    fd.append("botcheck", "");
    fd.append("subject", "New brief — " + (val(form, "company") || val(form, "name")));
    fd.append("Name", val(form, "name"));
    fd.append("Email", email);
    fd.append("replyto", email);
    fd.append("Company", val(form, "company"));
    fd.append("Market", val(form, "market") || "—");
    fd.append("Role", val(form, "role"));
    fd.append("Notes", val(form, "notes") || "—");
    fd.append("ccemail", "info@rivagoinfotech.com");

    setBusy(true);
    try {
      const r = await fetch("https://api.web3forms.com/submit", { method: "POST", body: fd });
      const d = await r.json();
      setBusy(false);
      if (!d || d.success !== true) throw new Error(d?.message || "Submission failed");
      setOk(true);
      form.reset();
    } catch {
      setBusy(false);
      setErr("Could not send — please check your connection, or email us directly at info@rivagoinfotech.com.");
    }
  }

  if (ok) {
    return (
      <div className="person" style={{ borderTop: 0, paddingTop: 0 }}>
        <p className="pk">Brief received</p>
        <p className="sub" style={{ marginBottom: 18 }}>
          A partner will read it and reply within one business day — not an auto-acknowledgement.
        </p>
        <button className="btn sec" type="button" onClick={() => setOk(false)}>
          Send another brief
        </button>
      </div>
    );
  }

  return (
    <form ref={formRef} onSubmit={onSubmit} noValidate>
      <div className="fld">
        <label htmlFor="bf-name">Your name</label>
        <input id="bf-name" name="name" type="text" autoComplete="name" required />
      </div>
      <div className="fld">
        <label htmlFor="bf-email">Work email</label>
        <input id="bf-email" name="email" type="email" autoComplete="email" required />
      </div>
      <div className="fld">
        <label htmlFor="bf-company">Company</label>
        <input id="bf-company" name="company" type="text" autoComplete="organization" required />
      </div>
      <div className="fld">
        <label htmlFor="bf-market">
          Market <span className="o">(optional)</span>
        </label>
        <input id="bf-market" name="market" type="text" placeholder="e.g. Toronto" />
      </div>
      <div className="fld full">
        <label htmlFor="bf-role">Role or roles you&rsquo;re hiring</label>
        <input id="bf-role" name="role" type="text" placeholder="e.g. Director, Platform / SRE" required />
      </div>
      <div className="fld full">
        <label htmlFor="bf-notes">
          Anything we should know <span className="o">(optional)</span>
        </label>
        <textarea id="bf-notes" name="notes" placeholder="Comp band, notice constraints, why the seat is open." />
      </div>
      <div className="fld full">
        <button className="btn pri" type="submit" disabled={busy}>
          <span>{busy ? "Sending…" : "Send brief"}</span>
        </button>
      </div>
      <p className={err ? "fnote err" : "fnote"} role={err ? "alert" : undefined}>
        {err || "One business day to a reply. If it isn’t a fit for us, we’ll say that too."}
      </p>
    </form>
  );
}
