import Link from "next/link";
import type { Metadata } from "next";
import IntakeForm from "@/components/IntakeForm";
import { routes } from "@/lib/routes";
import { practices } from "@/app/industries/data";

export const metadata: Metadata = {
  title: "For clients — Rivago Infotech",
  description: "Hire senior, fully-screened talent fast. Rivago Infotech delivers direct hire, contract and executive search with a delivery date agreed in writing and one partner from brief to placement.",
  alternates: { canonical: "https://rivagoinfotech.com/hire-talent" },
  openGraph: {
    title: "For clients — Rivago Infotech",
    description: "Hire senior, fully-screened talent fast. Rivago Infotech delivers direct hire, contract and executive search with a delivery date agreed in writing and one partner from brief to placement.",
    url: "https://rivagoinfotech.com/hire-talent",
  },
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://rivagoinfotech.com/" },
    { "@type": "ListItem", position: 2, name: "Hire Talent", item: "https://rivagoinfotech.com/hire-talent" },
  ],
};

const modes = [
  {
    num: "01",
    title: "Retained executive search",
    desc: "Director and VP roles where fit matters more than speed. We embed for the full cycle — brief, mapping, longlist, shortlist, offer.",
    bullets: ["Dedicated partner + research analyst", "Weekly written progress reports", "Replacement guarantee — 12 months", "Salary benchmarking included"],
    highlight: false,
  },
  {
    num: "02",
    title: "Contingent placement",
    desc: "Manager to Senior individual contributor. Pay only on a placement that sticks past the guarantee window. Most common engagement.",
    bullets: ["Delivery date agreed in writing", "3–5 pre-screened candidates per role", "Replacement guarantee — 90 days", "No upfront fee"],
    highlight: true,
  },
  {
    num: "03",
    title: "Embedded talent partner",
    desc: "For teams scaling 10+ hires across a quarter. A Rivago partner sits inside your TA function, runs your pipeline, owns the outcome.",
    bullets: ["4–12 week sprints, renewable", "Full ATS + scorecard integration", "Fixed monthly retainer", "Weekly hiring-manager standups"],
    highlight: false,
  },
];

const stages = [
  { step: "Stage 01 · Day 0–2", title: "The intake", desc: "A 60-minute working session with the hiring manager and the partner who will run the search. We pressure-test the JD, agree on must-haves vs. nice-to-haves, set the scorecard, and write the off-limits list. You sign off before we source a single profile.", side: [["Owner", "Lead partner"], ["Output", "Signed JD + scorecard"], ["Time", "~60 min"]] },
  { step: "Stage 02 · Day 2–10", title: "Mapping & outreach", desc: "The research team builds a longlist of 40–80 names from competitor cap tables, alumni networks, and the Rivago private database. Every approach is written for the person receiving it — we do not run sequences, and we do not repost the ad at scale.", side: [["Longlist size", "40–80"], ["Outreach", "Bespoke, per name"], ["Approach", "Passive-first"]] },
  { step: "Stage 03 · Day 10–18", title: "Screen & calibrate", desc: "45-minute structured interviews with every respondent — the same scorecard your panel will use. We submit the first three calibration profiles by day 12 and adjust the brief based on your reactions. The shortlist hardens by day 18.", side: [["Screen length", "45 minutes"], ["Submitted profiles", "5–7"], ["Reference depth", "3 per finalist"]] },
  { step: "Stage 04 · Day 18–28", title: "Panel & finalist", desc: "We project-manage the entire interview loop: scheduling, debriefs, calibration between rounds, and reference check coordination. You get a written brief 24 hours before each interview and a synthesis the morning after.", side: [["Loops scheduled", "3–5 finalists"], ["Debrief turn", "<24h"], ["Written brief", "24h before"]] },
  { step: "Stage 05 · Day 28–35 + 12mo", title: "Close & care", desc: "We negotiate the offer, handle counter-offer defence, and stay close through the first 90 days. At months three, six and twelve we check in with both sides. If anything breaks in the guarantee window, we restart the search at no charge.", side: [["Counter-offer", "Planned upfront"], ["Check-ins", "3, 6 and 12 mo"], ["Guarantee", "Restart, no charge"]] },
];

const whyCards = [
  { title: "As fast as the role allows", desc: "You get a delivery date on the first call and we hold it or tell you early. Every candidate is fully screened against your scorecard before reaching your inbox — not keyword-matched and not parsed by a machine.", icon: (<svg width="22" height="22" viewBox="0 0 22 22" fill="none"><circle cx="11" cy="11" r="8" stroke="var(--accent)" strokeWidth="1.5" /><path d="M11 7v4l3 2" stroke="var(--accent)" strokeWidth="1.5" strokeLinecap="round" /></svg>) },
  { title: "One partner, full ownership", desc: "The same senior partner from brief to placement. No handoffs to BD, no relays through account managers, no junior researchers running the candidate calls.", icon: (<svg width="22" height="22" viewBox="0 0 22 22" fill="none"><circle cx="11" cy="8" r="3.5" stroke="var(--accent)" strokeWidth="1.5" /><path d="M4 19c0-3.9 3.1-7 7-7s7 3.1 7 7" stroke="var(--accent)" strokeWidth="1.5" strokeLinecap="round" /></svg>) },
  { title: "Industry specialists", desc: "Your brief goes to a partner who's recruited in your sector for seven-plus years. They know the comp bands, the unpublished orgs and the people who haven't updated their LinkedIn in two years.", icon: (<svg width="22" height="22" viewBox="0 0 22 22" fill="none"><path d="M11 2l2 5 5 .7-3.6 3.5.9 5L11 13.5l-4.3 2.5.9-5L4 7.7l5-.7z" stroke="var(--accent)" strokeWidth="1.5" strokeLinejoin="round" /></svg>) },
  { title: "Documented & auditable", desc: "Every search produces a full audit trail — scorecards, screening notes, reference depth, decision rationale. Ready for board, compliance or DEI review at any point.", icon: (<svg width="22" height="22" viewBox="0 0 22 22" fill="none"><path d="M11 2l8 4v5c0 5-3.5 8.5-8 9.5C6.5 19.5 3 16 3 11V6z" stroke="var(--accent)" strokeWidth="1.5" strokeLinejoin="round" /></svg>) },
  { title: "Four markets, one standard", desc: "US, Canada, UAE, India — same partner-owned process everywhere. Visa, right-to-work, relocation and family logistics handled end-to-end with the hiring company.", icon: (<svg width="22" height="22" viewBox="0 0 22 22" fill="none"><circle cx="11" cy="11" r="8" stroke="var(--accent)" strokeWidth="1.5" /><path d="M2 11h18M11 3a13 13 0 010 16M11 3a13 13 0 000 16" stroke="var(--accent)" strokeWidth="1.5" /></svg>) },
  { title: "Replacement guarantee", desc: "12-month replacement on retained engagements, 90-day on contingent — no questions asked, no extra fee. If a placement leaves, we restart the search at no charge.", icon: (<svg width="22" height="22" viewBox="0 0 22 22" fill="none"><rect x="3" y="6" width="16" height="13" rx="2" stroke="var(--accent)" strokeWidth="1.5" /><path d="M7 6V4a2 2 0 012-2h4a2 2 0 012 2v2M7 12l3 3 6-6" stroke="var(--accent)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>) },
];

/* THE TILE STRIP IS NOW DERIVED FROM app/industries/data.ts.
 *
 * It used to be a hand-typed list whose second line read "312 active
 * mandates", "184 active mandates", "92", "228", "74", "86", "62", "128",
 * "204", "96" — 1,466 live mandates in total. Those are the exact figures
 * that sat in app/services/data.ts as unreachable code and were deleted for
 * being unmeasured; the same numbers were live here.
 *
 * Deriving the strip fixes a second thing. All ten tiles linked to the bare
 * /industries URL, so ten distinct choices landed the reader in one place at
 * the top of the page. Each practice section carries id={p.id}, so each tile
 * can deep-link to its own, and the second line now names a real seat that
 * practice fills instead of a number nobody could stand behind.
 *
 * Only the icons stay local — they are artwork, not data. They are keyed by
 * practice id rather than by array position so that reordering or renaming a
 * practice cannot silently pair the wrong drawing with the wrong sector. */
const PRACTICE_ICONS: Record<string, React.ReactNode> = {
  technology: (<svg viewBox="0 0 28 28" fill="none"><rect x="3" y="6" width="22" height="16" rx="2" stroke="currentColor" strokeWidth="1.5" /><path d="M8 22v2M20 22v2M3 18h22" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" /></svg>),
  healthcare: (<svg viewBox="0 0 28 28" fill="none"><path d="M14 4l8 4v6c0 5-3.5 9-8 10-4.5-1-8-5-8-10V8l8-4z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" /><path d="M14 10v6M11 13h6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" /></svg>),
  legal: (<svg viewBox="0 0 28 28" fill="none"><path d="M5 23h18M7 23V11M21 23V11M5 11h18M9 7l5-3 5 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>),
  finance: (<svg viewBox="0 0 28 28" fill="none"><path d="M4 22V8M10 22V12M16 22V6M22 22V14" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" /></svg>),
  aerospace: (<svg viewBox="0 0 28 28" fill="none"><path d="M2 18l6-12 8 4 4-3 6 5-4 9H2z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" /></svg>),
  telecom: (<svg viewBox="0 0 28 28" fill="none"><path d="M14 4v20M4 8c3 3 7 5 10 5s7-2 10-5M4 20c3-3 7-5 10-5s7 2 10 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" /></svg>),
  automotive: (<svg viewBox="0 0 28 28" fill="none"><circle cx="8" cy="20" r="2.5" stroke="currentColor" strokeWidth="1.5" /><circle cx="20" cy="20" r="2.5" stroke="currentColor" strokeWidth="1.5" /><path d="M3 14h22l-2-7H5l-2 7zM10.5 20h7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>),
  supply: (<svg viewBox="0 0 28 28" fill="none"><rect x="4" y="8" width="20" height="14" rx="2" stroke="currentColor" strokeWidth="1.5" /><path d="M4 12h20M10 8V4h8v4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" /></svg>),
  sales: (<svg viewBox="0 0 28 28" fill="none"><path d="M4 12c0-2 2-3 4-3s4 1 4 3-2 3-4 3-4 1-4 3 2 3 4 3M20 9v12M16 12h8M16 18h8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" /></svg>),
  people: (<svg viewBox="0 0 28 28" fill="none"><circle cx="10" cy="9" r="3" stroke="currentColor" strokeWidth="1.5" /><circle cx="20" cy="11" r="2.5" stroke="currentColor" strokeWidth="1.5" /><path d="M4 22c0-3.3 2.7-6 6-6s6 2.7 6 6M16 22c0-2.5 2-4.5 4-4.5s4 2 4 4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" /></svg>),
};

const Arrow = () => (
  <svg className="arrow" width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M3 7h8M8 4l3 3-3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
);
const Check = () => (
  <svg width="10" height="8" viewBox="0 0 10 8" fill="none"><path d="M1 4l2.5 2.5L9 1" stroke="var(--accent)" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" /></svg>
);

export default function HireTalentPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />

      <header className="page-hero inv">
        <div className="page-hero-inner wide">
          <div className="crumbs"><Link href={routes.home}>Home</Link><span className="crumbs-sep">/</span><span>For clients</span></div>
          <div className="eyebrow ew-light gs" style={{ marginBottom: 28, display: "inline-flex", alignItems: "center", gap: 7 }}><span className="eyebrow-dot"></span>For clients</div>
          <h1 className="gs">The shortlist<br />that ends the <em>search.</em></h1>
          <p className="lead gs">Senior operators across technology, healthcare, legal, finance, aerospace, telecom and automotive — pre-screened, on-brief, and against a delivery date agreed on the first call. A partner on the line, not a portal.</p>
          <div className="gs" style={{ marginTop: 32, display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
            <a className="btn btn-prim" href="#intake">Book a strategy call <Arrow /></a>
            <Link className="btn btn-ghost" href={routes.resources}>Read our hiring guides</Link>
          </div>
          {/* THREE OF THESE FIVE ROWS WERE INVENTED: a 48-hour median
              time-to-shortlist, a 94% offer-acceptance rate "LTM", and 93%
              12-month retention. None was measured.

              The first was also wrong twice over, because this page stated
              the same fact three different ways: 48 hours here and in the
              metadata and the engagement bullets, 21 days in "Why hiring
              managers choose us" and in the guarantees band, and 38 hours
              inside a testimonial. A reader who scrolls finds all three.

              Every row now states something the engagement letter says. */}
          <div className="page-hero-meta gs">
            <div className="page-hero-meta-row"><span>Time to shortlist</span><strong>Agreed in writing</strong></div>
            <div className="page-hero-meta-row"><span>Replacement guarantee</span><strong>90d · 12mo retained</strong></div>
            <div className="page-hero-meta-row"><span>Check-ins after the hire</span><strong>3, 6 and 12 months</strong></div>
            <div className="page-hero-meta-row"><span>Partners per search</span><strong>One. Always.</strong></div>
            <div className="page-hero-meta-row"><span>Markets covered</span><strong>US · CA · UAE · IN</strong></div>
          </div>
        </div>
      </header>

      {/* SERVICE MODES */}
      <section className="section">
        <div className="wrap">
          <div className="gs">
            <div className="eyebrow ew-light" style={{ marginBottom: 20, display: "inline-flex", alignItems: "center", gap: 7 }}><span className="eyebrow-dot"></span>How we engage</div>
            <h2 className="section-h2" style={{ color: "var(--text)", maxWidth: 720 }}>Three ways to put a Rivago partner<br />on your <em>next requisition.</em></h2>
          </div>
          <div className="modes">
            {modes.map((m) => (
              <div className={`mode gs`} style={m.highlight ? { background: "rgba(61,255,135,.06)", border: "1px solid rgba(61,255,135,.2)", borderRadius: 18 } : { background: "var(--surface)", border: "1px solid var(--border)", borderRadius: 18 }} key={m.num}>
                <div className="mode-num">{m.num}</div>
                <div>
                  <div className="mode-title">{m.title}</div>
                  <div className="mode-desc">{m.desc}</div>
                </div>
                <ul className="mode-list">
                  {m.bullets.map((b) => <li key={b}>{b}</li>)}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS DEEP */}
      <section className="section alt lt">
        <div className="wrap">
          <div className="gs">
            <div className="eyebrow ew-light" style={{ marginBottom: 20, display: "inline-flex", alignItems: "center", gap: 7 }}><span className="eyebrow-dot"></span>What we actually do</div>
            <h2 className="section-h2" style={{ color: "var(--text)", maxWidth: 760 }}>A search runs five stages.<br />None of them are <em>a portal.</em></h2>
          </div>
          <div className="proc-deep">
            {stages.map((s) => (
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
        </div>
      </section>

      {/* GUARANTEES */}
      <section className="section">
        <div className="wrap">
          <div className="gs">
            <div className="eyebrow ew-light" style={{ marginBottom: 20, display: "inline-flex", alignItems: "center", gap: 7 }}><span className="eyebrow-dot"></span>What we put in writing</div>
            <h2 className="section-h2" style={{ color: "var(--text)", maxWidth: 700 }}>Four things that go in<br />the <em>engagement letter.</em></h2>
          </div>
          {/* The eyebrow above reads "What we put in writing", so every tile
              has to be a term of the engagement letter. Two were not: a
              21-day median time-to-shortlist (contradicting the 48 hours in
              this page's own hero) and a 94% offer-acceptance rate. The .t
              class sets a value in the phrase size — see the note on
              .gtee-val.t in globals.css. */}
          <div className="guarantee">
            <div className="gtee gs"><div className="gtee-val">90<sup>days</sup></div><div className="gtee-title">Contingent replacement</div><div className="gtee-desc">If a contingent placement leaves inside 90 days we restart the search at no charge.</div></div>
            <div className="gtee gs"><div className="gtee-val">12<sup>mo</sup></div><div className="gtee-title">Retained replacement</div><div className="gtee-desc">If a retained placement leaves inside 12 months we restart the search at no charge.</div></div>
            <div className="gtee gs"><div className="gtee-val t">Base salary only</div><div className="gtee-title">What the fee is calculated on</div><div className="gtee-desc">Bonus, equity, sign-on and relocation are excluded, and the percentage is fixed before we source.</div></div>
            <div className="gtee gs"><div className="gtee-val">1</div><div className="gtee-title">Partner on the line</div><div className="gtee-desc">One name on the engagement. No handoffs. No call centres. Mobile included.</div></div>
          </div>
        </div>
      </section>

      {/* WHY */}
      <section className="section alt lt">
        <div className="wrap">
          <div className="gs">
            <div className="eyebrow ew-light" style={{ marginBottom: 20, display: "inline-flex", alignItems: "center", gap: 7 }}><span className="eyebrow-dot"></span>Why hiring managers choose us</div>
            <h2 className="section-h2" style={{ color: "var(--text)", maxWidth: 720 }}>Built for hiring teams that<br /><em>can&apos;t afford to slow down.</em></h2>
          </div>
          <div className="why-grid">
            {whyCards.map((c) => (
              <div className="why-card gs" key={c.title}>
                <div className="why-icon">{c.icon}</div>
                <div className="why-title">{c.title}</div>
                <div className="why-desc">{c.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PRACTICES / INDUSTRIES STRIP */}
      <section className="section">
        <div className="wrap">
          <div className="gs">
            <div className="eyebrow ew-light" style={{ marginBottom: 20, display: "inline-flex", alignItems: "center", gap: 7 }}><span className="eyebrow-dot"></span>Practices</div>
            <h2 className="section-h2" style={{ color: "var(--text)", maxWidth: 720 }}>Specialist partners,<br />aligned to <em>your sector.</em></h2>
            <p style={{ color: "var(--text2)", maxWidth: 540, marginTop: 18, fontSize: "var(--fz5)", fontWeight: 400, lineHeight: 1.7 }}>Your brief goes straight to the partner who works your sector — not a shared queue. They already know who is good, who is moving, and what it takes to get them to take the call. Each tile names one seat that practice is built around.</p>
          </div>
          <div className="ind-strip">
            {practices.map((p) => (
              <Link href={`${routes.industries}#${p.id}`} className="ind-tile gs" key={p.id}>
                <span className="ic">{PRACTICE_ICONS[p.id]}</span>
                <div className="nm">{p.navLabel}</div>
                <div className="ct">{p.roles[0]}</div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* THE TESTIMONIAL BAND STOOD HERE — three quotes, headed "In their own
          words" over the line "No pseudonyms. No doctored quotes."

          Two of the three were the same invented people already cleared off
          the service sub-pages: "Priya R., HR Director · Ontario financial
          services" and "Samira M., Chief People Officer · Dubai hospital
          group", whose quote here was near-verbatim the one on
          /services/direct-hire down to "Eleven placements, zero compliance
          issues". Priya's opened "The shortlist landed in 38 hours" — a
          third figure for a fact this page already stated two other ways.

          Removed with the seven customer-story bands under /services, the
          nine "Client story" cards on /services and the nine case studies on
          /resources. Rivago has no client who has signed off on a published
          quote. When one does, this band is worth rebuilding — it sat in a
          good place on the page, between the practice strip and the intake
          form, which is exactly where proof belongs. */}

      {/* INTAKE FORM */}
      <section className="intake-band lt" id="intake">
        <div className="intake-grid">
          <div className="intake-l gs">
            <div className="eyebrow ew-light" style={{ marginBottom: 22, display: "inline-flex", alignItems: "center", gap: 7 }}><span className="eyebrow-dot"></span>Hire Talent</div>
            <h2>Tell us the role.<br /><em>We&apos;ll do the rest.</em></h2>
            <p>The form takes about four minutes. You will hear from a partner the same working day, with a calibration call booked before anyone is approached.</p>
            <div className="intake-bullets">
              <div className="intake-bullet"><div className="intake-bi"><Check /></div><div><strong>No retainer required.</strong> Contingent by default. Pay on placement, not on activity.</div></div>
              <div className="intake-bullet"><div className="intake-bi"><Check /></div><div><strong>One named partner</strong> — from brief to placement. No junior handoffs, no account managers in between.</div></div>
              <div className="intake-bullet"><div className="intake-bi"><Check /></div><div><strong>NDA on request.</strong> Confidential searches handled as standard — senior hires, sensitive replacements.</div></div>
              <div className="intake-bullet"><div className="intake-bi"><Check /></div><div><strong>90-day replacement guarantee.</strong> No questions, no additional fee. We restart the search.</div></div>
            </div>
          </div>
          <IntakeForm />
        </div>
      </section>

      {/* CTA */}
      <section className="clients-cta gs inv">
        <h2>Tell us who you need.<br /><em>We&apos;ll be back tomorrow.</em></h2>
        <p>Send the brief and a partner comes back with a written plan — timelines, comp read and the shape of the shortlist — within one business day.</p>
        <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
          <a className="btn btn-cream-prim" href="#intake">Book a scoping call <Arrow /></a>
          <Link className="btn btn-cream-ghost" href={routes.resources}>Read our hiring guides</Link>
        </div>
      </section>
    </>
  );
}
