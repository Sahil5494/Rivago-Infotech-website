"use client";

import { useState } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { routes } from "@/lib/routes";
import { findJob, findJobExact, type Job } from "@/app/view-jobs/jobs-data";
import { findPositionExact, type Position } from "@/app/open-positions/positions-data";

const Check = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M6 12l5 5 8-10" stroke="#3DFF87" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
);
function deriveSeniority(title: string): string {
  const t = title.toLowerCase();
  if (t.includes("chief") || t.includes("vp") || t.includes("head of") || t.includes("director")) return "Director+";
  if (t.includes("senior") || t.includes("lead") || t.includes("principal") || t.includes("manager") || t.includes("partner")) return "Senior";
  if (t.includes("associate") || t.includes("analyst") || t.includes("specialist") || t.includes("coordinator")) return "Associate";
  return "Mid-level";
}

function buildClientDescription(job: Job): string[] {
  const skillList = job.skills.slice(0, 4).join(", ");
  return [
    `${job.company} has engaged Rivago Infotech on a confidential search for a ${job.title} in ${job.location}. This is a ${job.type.toLowerCase()} engagement, and the client is moving quickly — expect a first conversation within days of applying, not weeks.`,
    `Day to day, you'll work closely with the hiring team on the core problems this role owns, applying ${skillList} to real, current initiatives rather than legacy maintenance. The client has been specific about what "good" looks like here, and your Rivago recruiter will walk you through the exact scorecard before your first interview so there are no surprises.`,
    `We're looking for someone with demonstrable, hands-on experience across ${skillList}, strong written and verbal communication, and a track record of owning outcomes rather than just tickets. Compensation is ${job.salary ?? "competitive"} and negotiable based on experience — your recruiter will confirm the exact band and any additional benefits on the first call.`,
    `This role is handled end-to-end by a named Rivago recruiter — the same person from your first conversation through offer and your first weeks on the job. No call centres, no automated outreach, no portal you disappear into.`,
  ];
}

function buildInternalDescription(pos: Position): string[] {
  return [
    `Rivago Infotech is hiring a ${pos.title} to join our ${pos.department} team, based ${pos.locationType === "Remote" ? "remotely" : `in ${pos.location}`}. This is a ${pos.type.toLowerCase()} role on the team that runs Rivago itself — not a client mandate — so you'll be working directly with the people who set how we recruit, market, operate and grow.`,
    `You'll partner closely with leadership across ${pos.department} and the adjacent functions that depend on it, with real ownership from week one. Rivago is a global staffing firm founded in 2019 with offices in Pune, Delaware and Ontario, serving clients across the US, Canada, UAE and India — this role sits inside that engine, not outside it.`,
    `We're looking for someone senior enough to own outcomes without heavy oversight, comfortable with the pace of a company still building its internal playbooks, and aligned with how we work with candidates and clients: no call centres, no automated outreach, no portal — just accountable people doing the work.`,
    `This posting is managed directly by Rivago's internal People team. Applications go straight to the hiring manager for this role — there is no external agency or client in this loop.`,
  ];
}

export default function RoleDetail() {
  const searchParams = useSearchParams();
  const id = searchParams.get("id");

  const clientJob = findJobExact(id);
  const internalPosition = clientJob ? undefined : findPositionExact(id);
  const isInternal = !clientJob && !!internalPosition;

  // Fallback: if the id matches neither data source, default to the first
  // client-facing listing so the page always renders real content instead
  // of a blank or generic template.
  const job: Job | undefined = clientJob;
  const position: Position | undefined = internalPosition;
  const fallbackJob: Job | undefined = !job && !position ? findJob(id) : undefined;

  const title = job?.title ?? position?.title ?? fallbackJob?.title ?? "Open role";
  const location = job?.location ?? position?.location ?? fallbackJob?.location ?? "—";
  const type = job?.type ?? position?.type ?? fallbackJob?.type ?? "Full-time";
  const seniority = deriveSeniority(title);
  const skills = job?.skills ?? fallbackJob?.skills ?? [];
  const salary = job?.salary ?? fallbackJob?.salary;
  const description = position
    ? buildInternalDescription(position)
    : buildClientDescription(job ?? fallbackJob!);

  const backHref = isInternal ? routes.openPositions : routes.viewJobs;
  const backLabel = isInternal ? "Open positions" : "Open roles";
  const eyebrowLabel = isInternal ? "Open · Joining Rivago" : "Open · Confidential client search";
  const companyLine = job ? job.company : position ? `Rivago Infotech · ${position.department}` : fallbackJob?.company;

  return (
    <>
      <style>{`
        .role-grid{display:grid;grid-template-columns:1fr 380px;gap:56px;align-items:start;max-width:1240px;margin:0 auto;padding:0 44px}
        .role-body p{font-size:15.5px;color:var(--text2);line-height:1.85;font-weight:300;margin-bottom:20px}
        .role-body p:last-child{margin-bottom:0}
        .role-body h3{font-size:14px;font-weight:600;color:var(--text);margin:36px 0 14px;letter-spacing:-.01em}
        .role-skills{display:flex;flex-wrap:wrap;gap:8px;margin-top:8px}
        .role-skill{padding:5px 12px;background:rgba(61,255,135,.06);border:1px solid rgba(61,255,135,.15);border-radius:8px;font-size:12.5px;color:var(--green);font-weight:500}
        .role-aside{position:sticky;top:90px;display:flex;flex-direction:column;gap:16px}
        .role-apply-card{background:var(--surface);border:1px solid var(--border);border-radius:20px;padding:28px}
        .role-apply-h{font-size:12px;text-transform:uppercase;letter-spacing:.08em;color:var(--text3);font-weight:600;margin-bottom:18px;display:flex;align-items:center;gap:8px}
        .role-apply-h::before{content:'';width:6px;height:6px;border-radius:50%;background:var(--green)}
        .role-signin-line{font-size:12.5px;color:var(--text3);text-align:center;margin-top:14px}
        .role-signin-line a{color:var(--green);font-weight:500}
        .role-copy-row{background:var(--surface);border:1px solid var(--border);border-radius:16px;padding:16px 18px;display:flex;align-items:center;justify-content:space-between;gap:12px}
        .role-copy-row span{font-size:12.5px;color:var(--text3)}
        .role-copy-btn{flex-shrink:0;font-size:12px;font-weight:600;color:var(--green);border:1px solid rgba(61,255,135,.3);border-radius:8px;padding:8px 13px;background:rgba(61,255,135,.06);cursor:pointer;font-family:var(--ff);transition:all .18s}
        .role-copy-btn:hover{background:rgba(61,255,135,.12)}
        @media(max-width:960px){.role-grid{grid-template-columns:1fr;padding:0 20px}.role-aside{position:static}}
      `}</style>

      <header className="page-hero">
        <div className="page-hero-inner wide">
          <div className="crumbs">
            <Link href={routes.home}>Home</Link><span className="crumbs-sep">/</span>
            <Link href={backHref}>{backLabel}</Link><span className="crumbs-sep">/</span>
            <span>{title}</span>
          </div>
          <div className="eyebrow ew-light gs" style={{ marginBottom: 24, display: "inline-flex", alignItems: "center", gap: 7 }}><span className="eyebrow-dot"></span>{eyebrowLabel}</div>
          <h1 className="gs">{title}</h1>
          {companyLine && <p className="lead gs" style={{ marginTop: 14 }}>{companyLine}</p>}
          <div className="page-hero-meta gs" style={{ maxWidth: 640, margin: "40px auto 0" }}>
            <div className="page-hero-meta-row"><span>Location</span><strong>{location}</strong></div>
            <div className="page-hero-meta-row"><span>Employment type</span><strong>{type}</strong></div>
            <div className="page-hero-meta-row"><span>Level</span><strong>{seniority}</strong></div>
          </div>
        </div>
      </header>

      <section className="section">
        <div className="role-grid">
          <div className="role-body gs">
            <h3>About the role</h3>
            {description.map((p, i) => <p key={i}>{p}</p>)}
            {skills.length > 0 && (
              <>
                <h3>Key skills</h3>
                <div className="role-skills">
                  {skills.map((s) => <span className="role-skill" key={s}>{s}</span>)}
                </div>
              </>
            )}
            {salary && (
              <>
                <h3>Compensation</h3>
                <p>{salary}, discussed and confirmed on your first call before any interview is scheduled.</p>
              </>
            )}
          </div>

          <aside className="role-aside">
            <ApplyCard title={title} />
            <CopyLinkRow />
          </aside>
        </div>
      </section>
    </>
  );
}

function ApplyCard({ title }: { title: string }) {
  const [submitted, setSubmitted] = useState(false);

  if (submitted) {
    return (
      <div className="role-apply-card gs">
        <div style={{ textAlign: "center", padding: "12px 0" }}>
          <div style={{ width: 52, height: 52, borderRadius: "50%", background: "rgba(61,255,135,.12)", border: "1px solid rgba(61,255,135,.3)", display: "grid", placeItems: "center", margin: "0 auto 16px" }}>
            <Check />
          </div>
          <div style={{ fontSize: 16, fontWeight: 500, color: "var(--text)", marginBottom: 8 }}>Application sent.</div>
          <div style={{ fontSize: 13, color: "var(--text2)", lineHeight: 1.6 }}>Your account is set up and your application for <strong style={{ color: "var(--text)" }}>{title}</strong> is with your recruiter. Expect a call within one business day.</div>
        </div>
      </div>
    );
  }

  return (
    <form
      className="role-apply-card gs"
      onSubmit={(e) => {
        e.preventDefault();
        setSubmitted(true);
      }}
    >
      <div className="role-apply-h">Create account &amp; apply</div>
      <div className="if-field">
        <label>Full name</label>
        <input type="text" placeholder="Your full name" required />
      </div>
      <div className="if-field">
        <label>Email</label>
        <input type="email" placeholder="you@email.com" required />
      </div>
      <div className="if-field">
        <label>Password</label>
        <input type="password" placeholder="Create a password" required minLength={8} />
      </div>
      <div className="if-field">
        <label>LinkedIn or CV link <span style={{ color: "var(--text3)", fontWeight: 400 }}>(optional)</span></label>
        <input type="text" placeholder="linkedin.com/in/you or a link to your CV" />
      </div>
      <button type="submit" className="if-submit">
        Create account &amp; apply
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M3 7h8M8 4l3 3-3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
      </button>
      <div className="role-signin-line">Already have an account? <Link href={routes.signIn}>Sign in to apply</Link></div>
    </form>
  );
}

function CopyLinkRow() {
  const [copied, setCopied] = useState(false);

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Clipboard API unavailable — fail silently, no backend to fall back to.
    }
  }

  return (
    <div className="role-copy-row gs">
      <span>Know someone right for this role?</span>
      <button type="button" className="role-copy-btn" onClick={handleCopy}>{copied ? "Copied!" : "Copy link"}</button>
    </div>
  );
}
