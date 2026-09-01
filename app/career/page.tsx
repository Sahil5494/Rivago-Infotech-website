import Link from "next/link";
import type { Metadata } from "next";
import { routes } from "@/lib/routes";

export const metadata: Metadata = {
  title: "Work at Rivago — Careers at Rivago Infotech",
  description:
    "Build a career placing other careers. Rivago hires senior operators who want real autonomy over their desk, transparent comp, and zero drip-activity quotas.",
  alternates: { canonical: "https://rivagoinfotech.com/career" },
  openGraph: {
    title: "Work at Rivago — Careers at Rivago Infotech",
    description: "Build a career placing other careers. Senior or solo, transparent comp, no drip activity.",
    url: "https://rivagoinfotech.com/career",
  },
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://rivagoinfotech.com/" },
    { "@type": "ListItem", position: 2, name: "Careers", item: "https://rivagoinfotech.com/career" },
  ],
};

const Arrow = () => (
  <svg className="arrow" width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M3 7h8M8 4l3 3-3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
);

const howWeWork = [
  { title: "Senior or solo", desc: "Real autonomy over your desk — how you source, who you call, how you run a search. We hire people we trust to own it, then get out of the way." },
  { title: "Transparent comp", desc: "Commission structure published, not negotiated in whispers. You can calculate what a placement is worth to you before you take the brief." },
  { title: "No drip activity", desc: "No dial quotas, no mandatory call counts, no busywork logged for its own sake. We measure outcomes — placements, retention, client trust — not activity." },
];

const perks = [
  { title: "Transparent commission", desc: "A published structure with no discretionary clawbacks. What you're owed on a placement is calculable before you start the search." },
  { title: "True desk autonomy", desc: "You choose your sourcing channels, your calendar and your candidate approach. No mandated scripts or sequences." },
  { title: "Flexible, remote-friendly", desc: "Work from an office or from home. Core overlap hours for your pod, flexible around that." },
  { title: "Private health coverage", desc: "Health coverage for you and your dependents from day one, no waiting period." },
  { title: "Development budget", desc: "An annual budget for courses, certifications or conferences — your call on how to spend it." },
  { title: "No forced KPIs", desc: "No dial quotas, no mandatory activity logging. We review outcomes at the pod level, not call counts at the desk level." },
  { title: "Generous PTO", desc: "A real paid-time-off allowance, plus firm-wide closures around major holidays in every market we operate in." },
  { title: "Profit-share for partners", desc: "Senior partners share in firm profit above their commission — reward for building the practice, not just closing searches." },
];

const values = [
  { title: "Own the outcome", desc: "From intake to signed offer, one person is accountable. That person is you." },
  { title: "Quality over noise", desc: "A short, right shortlist beats a long, hopeful one. We hire people who agree." },
  { title: "Straight talk", desc: "With clients, candidates and each other. If a brief won't work, we say so early." },
  { title: "Keep learning", desc: "Markets, comp bands and sourcing channels shift constantly. Curiosity is part of the job." },
];

const hiringSteps = [
  { step: "Step 01", title: "Intro call", desc: "A 30-minute conversation with a partner about your background, your desk today, and what you're looking for next. Two-way — bring your questions.", side: [["Timing", "Within a few days"], ["Format", "Video call"], ["Length", "~30 min"]] },
  { step: "Step 02", title: "Working session", desc: "A practical session — walk us through how you'd run a real brief. We're evaluating judgement and process, not trivia.", side: [["Timing", "The following week"], ["Format", "Working session"], ["Length", "~60 min"]] },
  { step: "Step 03", title: "Meet the pod", desc: "Time with the partners and researchers you'd actually work alongside. This is as much your evaluation of us as ours of you.", side: [["Timing", "Same week"], ["Format", "Pod meet"], ["Length", "45–60 min"]] },
  { step: "Step 04", title: "Offer & onboard", desc: "A written offer with the comp structure spelled out — no surprises. Onboarding starts with a real book of desks, not a training queue.", side: [["Timing", "Within a week of final round"], ["Format", "Written offer"], ["Start", "Flexible"]] },
];

export default function CareerPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />

      {/* HERO */}
      <header className="page-hero">
        <div className="page-hero-inner">
          <div className="crumbs"><Link href={routes.home}>Home</Link><span className="crumbs-sep">/</span><span>Careers</span></div>
          <div className="eyebrow ew-light gs" style={{ marginBottom: 28, display: "inline-flex", alignItems: "center", gap: 7 }}><span className="eyebrow-dot"></span>Careers at Rivago</div>
          <h1 className="gs">Build a career<br /><em>placing other careers.</em></h1>
          <p className="lead gs">Senior operators who want a real desk, transparent comp and zero drip activity. No call centres — here or with our clients.</p>
          <div className="gs" style={{ marginTop: 32, display: "flex", gap: 12, justifyContent: "center" }}>
            <Link className="btn btn-prim" href={routes.openPositions}>See open roles at Rivago <Arrow /></Link>
          </div>
        </div>
      </header>

      {/* HOW WE WORK */}
      <section className="section">
        <div className="wrap">
          <div className="gs">
            <div className="eyebrow ew-light" style={{ marginBottom: 20, display: "inline-flex", alignItems: "center", gap: 7 }}><span className="eyebrow-dot"></span>How we work</div>
            <h2 className="section-h2" style={{ color: "var(--text)", maxWidth: 700 }}>A firm built for<br /><em style={{ fontFamily: "var(--fs)", fontStyle: "italic", color: "var(--green)" }}>good recruiters.</em></h2>
          </div>
          <div className="why-grid">
            {howWeWork.map((c) => (
              <div className="why-card gs" key={c.title}>
                <div className="why-title">{c.title}</div>
                <div className="why-desc">{c.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PERKS */}
      <section className="section alt">
        <div className="wrap">
          <div className="gs">
            <div className="eyebrow ew-light" style={{ marginBottom: 20, display: "inline-flex", alignItems: "center", gap: 7 }}><span className="eyebrow-dot"></span>Perks & benefits</div>
            <h2 className="section-h2" style={{ color: "var(--text)", maxWidth: 700 }}>A grown-up<br /><em style={{ fontFamily: "var(--fs)", fontStyle: "italic", color: "var(--green)" }}>package.</em></h2>
          </div>
          <div className="why-grid" style={{ gridTemplateColumns: "repeat(4,1fr)" }}>
            {perks.map((p) => (
              <div className="why-card gs" key={p.title} style={{ padding: 26 }}>
                <div className="why-title" style={{ fontSize: 15 }}>{p.title}</div>
                <div className="why-desc" style={{ fontSize: 13 }}>{p.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WORKING AT RIVAGO */}
      <section className="section">
        <div className="wrap">
          <div className="gs">
            <div className="eyebrow ew-light" style={{ marginBottom: 20, display: "inline-flex", alignItems: "center", gap: 7 }}><span className="eyebrow-dot"></span>Working at Rivago</div>
            <h2 className="section-h2" style={{ color: "var(--text)", maxWidth: 700 }}>What it&apos;s actually<br /><em style={{ fontFamily: "var(--fs)", fontStyle: "italic", color: "var(--green)" }}>like inside.</em></h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "1.1fr 1fr", gridTemplateRows: "auto auto", gap: 20 }}>
            <div className="why-card gs" style={{ gridRow: "1 / 3", display: "flex", flexDirection: "column" }}>
              <div className="why-title" style={{ marginBottom: 18 }}>A day on the desk</div>
              <div style={{ display: "flex", gap: 24, marginBottom: 24, flexWrap: "wrap" }}>
                <div><div style={{ fontSize: 32, fontFamily: "var(--fs)", fontStyle: "italic", color: "var(--green)", lineHeight: 1 }}>~5</div><div style={{ fontSize: 12, color: "var(--text3)", marginTop: 6 }}>Avg pod size</div></div>
                <div><div style={{ fontSize: 32, fontFamily: "var(--fs)", fontStyle: "italic", color: "var(--green)", lineHeight: 1 }}>0</div><div style={{ fontSize: 12, color: "var(--text3)", marginTop: 6 }}>Dial quotas</div></div>
                <div><div style={{ fontSize: 32, fontFamily: "var(--fs)", fontStyle: "italic", color: "var(--green)", lineHeight: 1 }}>50+</div><div style={{ fontSize: 12, color: "var(--text3)", marginTop: 6 }}>People firm-wide</div></div>
              </div>
              <div className="why-desc">No two days on a Rivago desk look the same, but none of them involve a dialler quota or a scripted call. You own your pipeline — sourcing, screening, client updates — and your pod knows exactly where each search stands because you tell them, not because a dashboard tracked your keystrokes.</div>
            </div>
            <div className="why-card gs">
              <div className="why-title">Rituals</div>
              <div className="why-desc">Monday market reads to open the week, Friday wins to close it. Everything in between is yours to run.</div>
            </div>
            <div className="why-card gs">
              <div className="why-title">How we talk</div>
              <div className="why-desc">Async-first — Slack, shared docs and the occasional call. Standing meetings are kept to a minimum on purpose.</div>
            </div>
          </div>
        </div>
      </section>

      {/* WHAT WE STAND FOR */}
      <section className="section cream">
        <div className="wrap">
          <div className="gs">
            <div className="eyebrow ew-dark" style={{ marginBottom: 20, display: "inline-flex", alignItems: "center", gap: 7 }}><span className="eyebrow-dot"></span>What we stand for</div>
            <h2 className="section-h2" style={{ color: "var(--dt)", maxWidth: 700 }}>Four values we<br /><em style={{ fontFamily: "var(--fs)", fontStyle: "italic", color: "#0A7040" }}>actually hire for.</em></h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 16, marginTop: 36 }}>
            {values.map((v) => (
              <div className="gs" style={{ background: "#fff", border: "1px solid rgba(0,0,0,.07)", borderRadius: 18, padding: 26 }} key={v.title}>
                <div style={{ fontSize: 15, fontWeight: 600, color: "var(--dt)", marginBottom: 10, letterSpacing: "-.01em" }}>{v.title}</div>
                <div style={{ fontSize: 13, color: "var(--dt3)", lineHeight: 1.65 }}>{v.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GETTING STARTED */}
      <section className="section alt">
        <div className="wrap">
          <div className="gs">
            <div className="eyebrow ew-light" style={{ marginBottom: 20, display: "inline-flex", alignItems: "center", gap: 7 }}><span className="eyebrow-dot"></span>Getting started</div>
            <h2 className="section-h2" style={{ color: "var(--text)", maxWidth: 700 }}>How we hire —<br /><em style={{ fontFamily: "var(--fs)", fontStyle: "italic", color: "var(--green)" }}>four honest steps.</em></h2>
          </div>
          <div className="proc-deep">
            {hiringSteps.map((s) => (
              <div className="pd-row gs" key={s.step}>
                <div className="pd-step">{s.step}</div>
                <div className="pd-main"><h3>{s.title}</h3><p>{s.desc}</p></div>
                <div className="pd-side">
                  {s.side.map(([k, v]) => (
                    <div className="pd-side-row" key={k}><span>{k}</span><span className="v">{v}</span></div>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <div className="gs" style={{ marginTop: 40, textAlign: "center" }}>
            <Link className="btn btn-prim" href={routes.openPositions}>See open roles at Rivago <Arrow /></Link>
          </div>
        </div>
      </section>

      {/* WHERE IT ALL BEGAN */}
      <section className="section cream">
        <div className="wrap">
          <div className="gs" style={{ marginBottom: 36 }}>
            <div className="eyebrow ew-dark" style={{ marginBottom: 20, display: "inline-flex", alignItems: "center", gap: 7 }}><span className="eyebrow-dot"></span>Where it all began</div>
            <h2 className="section-h2" style={{ color: "var(--dt)", maxWidth: 760 }}>Built by people who&apos;d grown tired<br />of the <em style={{ fontFamily: "var(--fs)", fontStyle: "italic", color: "#0A7040" }}>theatre.</em></h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20, alignItems: "stretch" }}>
            <div className="gs" style={{ borderRadius: 24, minHeight: 320, background: "linear-gradient(155deg,#0A140B 0%,#0A7040 60%,#3DFF87 130%)", display: "flex", alignItems: "flex-end", padding: 32 }}>
              <p style={{ color: "#fff", fontFamily: "var(--fs)", fontStyle: "italic", fontSize: "clamp(20px,2.2vw,28px)", lineHeight: 1.35, maxWidth: 320 }}>&ldquo;We wanted to build the firm we had always wanted to hire from.&rdquo;</p>
            </div>
            <div className="gs" style={{ borderRadius: 24, padding: 40, background: "linear-gradient(135deg,#3DFF87,#00D4A8)", display: "flex", flexDirection: "column", justifyContent: "center" }}>
              <div style={{ fontSize: 26, fontWeight: 500, color: "#030C05", letterSpacing: "-.02em", marginBottom: 14 }}>Build with us.</div>
              <p style={{ fontSize: 15, color: "#0A2415", lineHeight: 1.75, marginBottom: 26, maxWidth: 380 }}>
                Founded in 2019 by partners who&apos;d come up through volume agencies and wanted something better — 2019 Pune, 2021 Delaware, 2022 Ontario, 2023 UAE as a served market. We&apos;re still looking for senior operators who pair real craft with genuine care, and who want to own their desk end to end.
              </p>
              <Link className="btn btn-cream-prim" href={routes.openPositions} style={{ alignSelf: "flex-start", background: "#030C05", color: "#3DFF87" }}>See open roles at Rivago <Arrow /></Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
