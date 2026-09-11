/* eslint-disable @next/next/no-img-element --
   The client-logo marquee sizes each mark with an inline max-height that
   next/image would fight, and the logos are small pre-optimised PNGs served
   from /public. Every one carries real alt text. */
import type { Metadata } from "next";
import ServicesClient from "./ServicesClient";
import GlobeCanvas from "./_components/GlobeCanvas";
import "./services.css";

/* The Staffing Solutions page, ported from the supplied reference.
   Its stylesheet is the reference's own, scoped under .svc2 in
   ./services.css so its overrides do not reach the other pages. */

export const metadata: Metadata = {
  title: "Staffing Solutions & Recruitment Services | Rivago Infotech",
  description:
    "Contract, contract-to-hire and direct hire across four countries. A specialist partner runs the search end to end — and stays on the line for every role after it.",
  alternates: { canonical: "https://rivagoinfotech.com/services" },
  openGraph: {
    type: "website",
    siteName: "Rivago Infotech",
    title: "Staffing Solutions & Recruitment Services | Rivago Infotech",
    description:
      "Contract, contract-to-hire and direct hire across four countries. A specialist partner runs the search end to end — and stays on the line for every role after it.",
    url: "/services",
    images: [{ url: "/assets/og-image.png", width: 1200, height: 630 }],
  },
};

export default function ServicesPage() {
  return (
    <>
      <div className="svc2">
        <section className="svh">
          <div className="svh-inner">
            <div className="svh-eyb rv"><span className="dot"></span>Staffing Solutions · How Rivago engages</div>
            <h1 className="rv rv2">Staffing for every role,<br />at <em>every level.</em></h1>
            <p className="rv rv3">Contract, contract-to-hire and direct hire across four countries. A specialist partner runs the search end to end — and stays on the line for every role after it.</p>
            <div className="svh-cta rv rv4">
              <a className="btn btn--primary btn--lg" href="/hire-talent#intake" data-hire>Hire Talent <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M3 7h8M8 4l3 3-3 3" stroke="#030C05" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg></a>
              <a className="btn btn--secondary btn--lg" href="/resources/case-study">See the proof</a>
            </div>
          </div>
        </section>

        <section className="cli">
          <div className="cli-lab">Trusted by the teams we hire for</div>
          <div className="cli-mask">
            <div className="cli-track"><span className="cli-chip"><img src="/assets/clients/w-hexaware.png" alt="Hexaware" style={{maxHeight: "43px"}} decoding="async" /></span><span className="cli-chip"><img src="/assets/clients/w-synechron.png" alt="Synechron" style={{maxHeight: "25px"}} decoding="async" /></span><span className="cli-chip"><img src="/assets/clients/w-saama.png" alt="Saama" style={{maxHeight: "31px"}} decoding="async" /></span><span className="cli-chip"><img src="/assets/clients/w-infovision.png" alt="InfoVision" style={{maxHeight: "54px"}} decoding="async" /></span><span className="cli-chip"><img src="/assets/clients/w-genpact.png" alt="Genpact" style={{maxHeight: "35px"}} decoding="async" /></span><span className="cli-chip"><img src="/assets/clients/w-persistent.png" alt="Persistent" style={{maxHeight: "54px"}} decoding="async" /></span><span className="cli-chip"><img src="/assets/clients/w-albert-mackenzie.png" alt="Albert & Mackenzie" style={{maxHeight: "20px"}} decoding="async" /></span><span className="cli-chip"><img src="/assets/clients/w-deutsch-kerrigan.png" alt="Deutsch Kerrigan" style={{maxHeight: "23px"}} decoding="async" /></span><span className="cli-chip"><img src="/assets/clients/w-vibrantcare.png" alt="VibrantCare" style={{maxHeight: "35px"}} decoding="async" /></span><span className="cli-chip"><img src="/assets/clients/w-hcl.png" alt="HCL" style={{maxHeight: "15px"}} decoding="async" /></span><span className="cli-chip"><img src="/assets/clients/w-hexaware.png" alt="Hexaware" style={{maxHeight: "43px"}} decoding="async" /></span><span className="cli-chip"><img src="/assets/clients/w-synechron.png" alt="Synechron" style={{maxHeight: "25px"}} decoding="async" /></span><span className="cli-chip"><img src="/assets/clients/w-saama.png" alt="Saama" style={{maxHeight: "31px"}} decoding="async" /></span><span className="cli-chip"><img src="/assets/clients/w-infovision.png" alt="InfoVision" style={{maxHeight: "54px"}} decoding="async" /></span><span className="cli-chip"><img src="/assets/clients/w-genpact.png" alt="Genpact" style={{maxHeight: "35px"}} decoding="async" /></span><span className="cli-chip"><img src="/assets/clients/w-persistent.png" alt="Persistent" style={{maxHeight: "54px"}} decoding="async" /></span><span className="cli-chip"><img src="/assets/clients/w-albert-mackenzie.png" alt="Albert & Mackenzie" style={{maxHeight: "20px"}} decoding="async" /></span><span className="cli-chip"><img src="/assets/clients/w-deutsch-kerrigan.png" alt="Deutsch Kerrigan" style={{maxHeight: "23px"}} decoding="async" /></span><span className="cli-chip"><img src="/assets/clients/w-vibrantcare.png" alt="VibrantCare" style={{maxHeight: "35px"}} decoding="async" /></span><span className="cli-chip"><img src="/assets/clients/w-hcl.png" alt="HCL" style={{maxHeight: "15px"}} decoding="async" /></span></div>
          </div>
        </section>








        <section className="why">
          <div className="why-inner">
            <div className="why-top">
              <div>
                <div className="why-eyb rv">Why Rivago</div>
                <h2 className="rv">Staffing, done the way<br />it <em>should be.</em></h2>
                <p className="why-lead rv rv2">Most agencies sell volume and hand your role to a junior. We do the opposite — one senior partner owns the search end to end, sources the people who never apply, and puts the commitments that matter in writing before you sign.</p>
              </div>
              <div className="why-numsr rv rv2">
                <div className="why-numr"><div className="v">48<sup>h</sup></div><h3>Median shortlist</h3><p>Signed brief to three calibrated finalists.</p></div>
                <div className="why-numr"><div className="v">94<sup>%</sup></div><h3>Offer-accept rate</h3><p>Last 12 months, every level.</p></div>
                <div className="why-numr"><div className="v">10</div><h3>Specialist practices</h3><p>Deep benches across every sector.</p></div>
                <div className="why-numr"><div className="v">4</div><h3>Countries covered</h3><p>US, Canada, the UAE and India.</p></div>
              </div>
            </div>
            <div className="why-grid">
              <div className="why-card rv"><div className="why-ico"><svg width="22" height="22" viewBox="0 0 22 22" fill="none"><path d="M11 2l2.2 4.4 4.8.7-3.5 3.4.8 4.8L11 13l-4.3 2.3.8-4.8L4 7.1l4.8-.7z" stroke="#3DFF87" strokeWidth="1.5" strokeLinejoin="round" /></svg></div><h3>Senior recruiters only</h3><p>Every search is run by a specialist with 7+ years in your field — no juniors learning on your role.</p></div>
              <div className="why-card rv rv2"><div className="why-ico"><svg width="22" height="22" viewBox="0 0 22 22" fill="none"><circle cx="9" cy="9" r="6" stroke="#3DFF87" strokeWidth="1.5" /><path d="M14 14l5 5" stroke="#3DFF87" strokeWidth="1.5" strokeLinecap="round" /></svg></div><h3>Access to hidden talent</h3><p>A private network of senior operators who never touch a job board — reached directly, on your behalf.</p></div>
              <div className="why-card rv rv3"><div className="why-ico"><svg width="22" height="22" viewBox="0 0 22 22" fill="none"><circle cx="7" cy="8" r="3" stroke="#3DFF87" strokeWidth="1.5" /><circle cx="15" cy="8" r="3" stroke="#3DFF87" strokeWidth="1.5" /><path d="M2 18c0-2.5 2-4.5 4.5-4.5M20 18c0-2.5-2-4.5-4.5-4.5" stroke="#3DFF87" strokeWidth="1.5" strokeLinecap="round" /></svg></div><h3>Inclusive shortlists</h3><p>Calibrated scorecards and diverse, fairly-assessed slates on every role — bias designed out from the brief.</p></div>
              <div className="why-card rv rv4"><div className="why-ico"><svg width="22" height="22" viewBox="0 0 22 22" fill="none"><path d="M11 19s-7-4.2-7-9a4 4 0 017-2.6A4 4 0 0118 10c0 4.8-7 9-7 9z" stroke="#3DFF87" strokeWidth="1.5" strokeLinejoin="round" /></svg></div><h3>Care past the offer</h3><p>Structured check-ins at 3, 6 and 12 months — we stay invested long after the placement is made.</p></div>
            </div>
          </div>
        </section>

        <section className="eng">
          <div className="eng-inner">
            <div className="eng-eyb rv">How we engage</div>
            <h2 className="rv">Three ways to put a<br />partner on <em>the role.</em></h2>
            <p className="eng-lead rv rv2">One quality bar across all three. Tell us the role and your partner will recommend the right structure before you commit — no pressure to over-buy.</p>
            <div className="eng-grid">
              <div className="eng-card rv">
                <div className="eng-num">01</div>
                <h3>Direct hire</h3>
                <p>Permanent placements across every function and level. Pay only on a hire that sticks past the guarantee window — fast, low-risk, no retainer.</p>
                <ul className="eng-list"><li><svg width="14" height="12" viewBox="0 0 14 12" fill="none"><path d="M1 6l4 4L13 1" stroke="#0A7040" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" /></svg>48-hour median shortlist</li><li><svg width="14" height="12" viewBox="0 0 14 12" fill="none"><path d="M1 6l4 4L13 1" stroke="#0A7040" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" /></svg>90-day replacement guarantee</li><li><svg width="14" height="12" viewBox="0 0 14 12" fill="none"><path d="M1 6l4 4L13 1" stroke="#0A7040" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" /></svg>No upfront fee</li></ul>
              </div>
              <div className="eng-card feat rv rv2">
                <span className="eng-tag">Most popular</span>
                <div className="eng-num">02</div>
                <h3>Contract &amp; contract-to-hire</h3>
                <p>Skilled professionals on flexible terms — scale up, trial before you commit, or convert to permanent. We run payroll and compliance.</p>
                <ul className="eng-list"><li><svg width="14" height="12" viewBox="0 0 14 12" fill="none"><path d="M1 6l4 4L13 1" stroke="#0A7040" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" /></svg>Talent in 5–7 days</li><li><svg width="14" height="12" viewBox="0 0 14 12" fill="none"><path d="M1 6l4 4L13 1" stroke="#0A7040" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" /></svg>Payroll &amp; compliance handled</li><li><svg width="14" height="12" viewBox="0 0 14 12" fill="none"><path d="M1 6l4 4L13 1" stroke="#0A7040" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" /></svg>Convert to permanent anytime</li></ul>
              </div>
              <div className="eng-card rv rv3">
                <div className="eng-num">03</div>
                <h3>Temporary staffing</h3>
                <p>On-demand professionals for peaks, seasonal spikes and leave cover. Deployed fast, fully compliant, scaled up or down as the work changes.</p>
                <ul className="eng-list"><li><svg width="14" height="12" viewBox="0 0 14 12" fill="none"><path d="M1 6l4 4L13 1" stroke="#0A7040" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" /></svg>Deployed in days, not weeks</li><li><svg width="14" height="12" viewBox="0 0 14 12" fill="none"><path d="M1 6l4 4L13 1" stroke="#0A7040" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" /></svg>Payroll &amp; compliance handled</li><li><svg width="14" height="12" viewBox="0 0 14 12" fill="none"><path d="M1 6l4 4L13 1" stroke="#0A7040" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" /></svg>Scale up or down anytime</li></ul>
              </div>
            </div>
          </div>
        </section>

        <section className="rls">
          <div className="rls-inner">
            <div className="rls-eyb rv">Roles we fill</div>
            <h2 className="rv">Specialists, not <em>generalists.</em></h2>
            <p className="rls-lead rv rv2">Pick a domain. Every partner runs one practice and has placed inside it for years — so they know the titles, the org charts and the people who never apply through a portal. Here is a sample of the roles we fill, and what it looks like when we do.</p>
            <div className="rls-tabs rv rv2"><button className="rls-tab on" data-rls="tech">Technology</button><button className="rls-tab" data-rls="health">Healthcare</button><button className="rls-tab" data-rls="legal">Legal</button><button className="rls-tab" data-rls="fin">Finance</button><button className="rls-tab" data-rls="aero">Aerospace & Defence</button><button className="rls-tab" data-rls="telecom">Telecom</button><button className="rls-tab" data-rls="auto">Automotive</button><button className="rls-tab" data-rls="supply">Supply & Operations</button><button className="rls-tab" data-rls="sales">Sales & Marketing</button></div>
            <div className="rls-panel on" data-rls-panel="tech">
              <div className="rls-head"><h3>Technology</h3><span className="cnt">Typical roles · last 90 days</span></div>
              <p style={{fontSize: "var(--fz3)", color: "var(--text2)", lineHeight: 1.7, fontWeight: 400, maxWidth: "680px", marginBottom: "26px"}}>AI, data and platform engineering talent — from ML and LLM engineers to the leaders who build the teams around them — across cloud-native and enterprise stacks.</p>
              <div className="rls-ind">
                <div>
                  <div className="rls-illabel">Typical roles · last 90 days</div>
                  <div className="rls-irlist">
                    <div className="rls-ir"><span className="nm">VP of AI / ML Engineering</span><span className="ct">8 placements</span></div>
                    <div className="rls-ir"><span className="nm">Principal Software Architect</span><span className="ct">11 placements</span></div>
                    <div className="rls-ir"><span className="nm">Senior Data Engineer</span><span className="ct">28 placements</span></div>
                    <div className="rls-ir"><span className="nm">Senior Java Engineer</span><span className="ct">26 placements</span></div>
                    <div className="rls-ir"><span className="nm">AI / LLM Engineer</span><span className="ct">22 placements</span></div>
                    <div className="rls-ir"><span className="nm">MLOps / Platform Engineer</span><span className="ct">19 placements</span></div>
                    <div className="rls-ir"><span className="nm">Data Scientist</span><span className="ct">31 placements</span></div>
                    <div className="rls-ir"><span className="nm">GCP AI Engineer</span><span className="ct">20 placements</span></div>
                    <div className="rls-ir"><span className="nm">Java Microservices Engineer</span><span className="ct">34 placements</span></div>
                    <div className="rls-ir"><span className="nm">React / Frontend Engineer</span><span className="ct">38 placements</span></div>
                  </div>
                </div>
                <div className="rls-panelR">
                  <div className="rls-ministory">
                    <div className="rls-ministory-tag">Client story</div>
                    <q>We had an AI roadmap and no one to build it. Rivago stood up our <em>ML, data and platform team</em> — LLM and GCP AI engineers included — in a single quarter.</q>
                    <div className="rls-ministory-by"><div className="rls-ministory-av">RP</div><div><div className="rls-ministory-n">VP of AI / ML Engineering</div><div className="rls-ministory-r">Series-C SaaS · United States</div></div></div>
                  </div>
                  <div className="rls-statgrid">
                    <div className="rls-stat"><div className="v">312</div><div className="l">Active technology mandates this quarter</div></div>
                    <div className="rls-stat"><div className="v">38<span className="u">%</span></div><div className="l">Outreach reply rate (versus 9% industry baseline)</div></div>
                    <div className="rls-stat"><div className="v">18<span className="u">days</span></div><div className="l">Median time-to-shortlist for VP-level engineering</div></div>
                    <div className="rls-stat"><div className="v">97<span className="u">%</span></div><div className="l">90-day retention on technology placements</div></div>
                  </div>
                  <div className="rls-sample">
                    <div>
                      <div className="rls-sample-h">Recent placement</div>
                      <div className="rls-sample-line">VP of AI / ML Engineering at a Series C SaaS</div>
                      <div className="rls-sample-sub">Delaware · 22 days brief-to-offer · $345K base + 0.3% equity</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
              <div className="rls-panel" data-rls-panel="health">
              <div className="rls-head"><h3>Healthcare</h3><span className="cnt">Typical roles · last 90 days</span></div>
              <p style={{fontSize: "var(--fz3)", color: "var(--text2)", lineHeight: 1.7, fontWeight: 400, maxWidth: "680px", marginBottom: "26px"}}>Provider, payer and life-sciences senior hires — clinical, regulatory and quality leaders, held to the highest credential bar in the firm.</p>
              <div className="rls-ind">
                <div>
                  <div className="rls-illabel">Typical roles · last 90 days</div>
                  <div className="rls-irlist">
                    <div className="rls-ir"><span className="nm">Chief Medical Officer</span><span className="ct">6 placements</span></div>
                    <div className="rls-ir"><span className="nm">VP of Clinical Development</span><span className="ct">5 placements</span></div>
                    <div className="rls-ir"><span className="nm">Director of Clinical Operations</span><span className="ct">18 placements</span></div>
                    <div className="rls-ir"><span className="nm">VP of Regulatory Affairs</span><span className="ct">11 placements</span></div>
                    <div className="rls-ir"><span className="nm">Director of Medical Affairs</span><span className="ct">10 placements</span></div>
                    <div className="rls-ir"><span className="nm">Head of Quality & 510(k)</span><span className="ct">9 placements</span></div>
                    <div className="rls-ir"><span className="nm">Clinical Research Associate</span><span className="ct">34 placements</span></div>
                    <div className="rls-ir"><span className="nm">Pharmacovigilance Manager</span><span className="ct">14 placements</span></div>
                    <div className="rls-ir"><span className="nm">Biostatistician</span><span className="ct">16 placements</span></div>
                    <div className="rls-ir"><span className="nm">Medical Science Liaison</span><span className="ct">21 placements</span></div>
                  </div>
                </div>
                <div className="rls-panelR">
                  <div className="rls-ministory">
                    <div className="rls-ministory-tag">Client story</div>
                    <q>Regulatory and quality hires are <em>unforgiving</em> to get wrong. Every candidate Rivago sent could do the job on day one.</q>
                    <div className="rls-ministory-by"><div className="rls-ministory-av">AL</div><div><div className="rls-ministory-n">Chief Medical Officer</div><div className="rls-ministory-r">Clinical-stage biotech · US</div></div></div>
                  </div>
                  <div className="rls-statgrid">
                    <div className="rls-stat"><div className="v">184</div><div className="l">Active healthcare mandates this quarter</div></div>
                    <div className="rls-stat"><div className="v">24<span className="u">days</span></div><div className="l">Median time-to-shortlist for clinical leadership</div></div>
                    <div className="rls-stat"><div className="v">100<span className="u">%</span></div><div className="l">Of clinical placements pre-credentialed at submission</div></div>
                    <div className="rls-stat"><div className="v">94<span className="u">%</span></div><div className="l">12-month retention on physician-leader placements</div></div>
                  </div>
                  <div className="rls-sample">
                    <div>
                      <div className="rls-sample-h">Recent placement</div>
                      <div className="rls-sample-line">Director of Clinical Operations · UAE hospital network</div>
                      <div className="rls-sample-sub">Dubai · 31 days · pre-cleared for DHA licensure</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
              <div className="rls-panel" data-rls-panel="legal">
              <div className="rls-head"><h3>Legal</h3><span className="cnt">Typical roles · last 90 days</span></div>
              <p style={{fontSize: "var(--fz3)", color: "var(--text2)", lineHeight: 1.7, fontWeight: 400, maxWidth: "680px", marginBottom: "26px"}}>First-GC searches, deputy succession and lateral hires for in-house teams scaling across jurisdictions.</p>
              <div className="rls-ind">
                <div>
                  <div className="rls-illabel">Typical roles · last 90 days</div>
                  <div className="rls-irlist">
                    <div className="rls-ir"><span className="nm">General Counsel</span><span className="ct">8 placements</span></div>
                    <div className="rls-ir"><span className="nm">Deputy General Counsel</span><span className="ct">6 placements</span></div>
                    <div className="rls-ir"><span className="nm">Compliance Director</span><span className="ct">12 placements</span></div>
                    <div className="rls-ir"><span className="nm">Head of Commercial / Privacy</span><span className="ct">15 placements</span></div>
                    <div className="rls-ir"><span className="nm">IP / Patent Counsel</span><span className="ct">6 placements</span></div>
                    <div className="rls-ir"><span className="nm">Regulatory Counsel</span><span className="ct">8 placements</span></div>
                    <div className="rls-ir"><span className="nm">Corporate Counsel</span><span className="ct">24 placements</span></div>
                    <div className="rls-ir"><span className="nm">Contracts Manager</span><span className="ct">22 placements</span></div>
                    <div className="rls-ir"><span className="nm">Data Privacy Counsel</span><span className="ct">13 placements</span></div>
                    <div className="rls-ir"><span className="nm">Employment Counsel</span><span className="ct">11 placements</span></div>
                  </div>
                </div>
                <div className="rls-panelR">
                  <div className="rls-ministory">
                    <div className="rls-ministory-tag">Client story</div>
                    <q>We were scaling into three jurisdictions at once. Rivago found counsel who had <em>actually done it before</em>.</q>
                    <div className="rls-ministory-by"><div className="rls-ministory-av">SV</div><div><div className="rls-ministory-n">General Counsel</div><div className="rls-ministory-r">Fintech · US & UAE</div></div></div>
                  </div>
                  <div className="rls-statgrid">
                    <div className="rls-stat"><div className="v">92</div><div className="l">Active legal mandates this quarter</div></div>
                    <div className="rls-stat"><div className="v">100<span className="u">%</span></div><div className="l">Of finalists licensed in the operating jurisdiction</div></div>
                    <div className="rls-stat"><div className="v">29<span className="u">days</span></div><div className="l">Median time-to-shortlist for GC searches</div></div>
                    <div className="rls-stat"><div className="v">96<span className="u">%</span></div><div className="l">12-month retention on GC placements</div></div>
                  </div>
                  <div className="rls-sample">
                    <div>
                      <div className="rls-sample-h">Recent placement</div>
                      <div className="rls-sample-line">General Counsel · pre-IPO fintech</div>
                      <div className="rls-sample-sub">Delaware · 38 days · $420K base + 0.5% equity</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
              <div className="rls-panel" data-rls-panel="fin">
              <div className="rls-head"><h3>Finance</h3><span className="cnt">Typical roles · last 90 days</span></div>
              <p style={{fontSize: "var(--fz3)", color: "var(--text2)", lineHeight: 1.7, fontWeight: 400, maxWidth: "680px", marginBottom: "26px"}}>CFO succession, treasury, FP&A and the long bench beneath — in markets where we know the comp committees by name.</p>
              <div className="rls-ind">
                <div>
                  <div className="rls-illabel">Typical roles · last 90 days</div>
                  <div className="rls-irlist">
                    <div className="rls-ir"><span className="nm">Chief Financial Officer</span><span className="ct">9 placements</span></div>
                    <div className="rls-ir"><span className="nm">Head of Treasury</span><span className="ct">7 placements</span></div>
                    <div className="rls-ir"><span className="nm">VP of FP&A</span><span className="ct">20 placements</span></div>
                    <div className="rls-ir"><span className="nm">Head of Risk & Compliance</span><span className="ct">18 placements</span></div>
                    <div className="rls-ir"><span className="nm">Tax Director</span><span className="ct">11 placements</span></div>
                    <div className="rls-ir"><span className="nm">Director of Internal Audit</span><span className="ct">12 placements</span></div>
                    <div className="rls-ir"><span className="nm">Financial Controller</span><span className="ct">28 placements</span></div>
                    <div className="rls-ir"><span className="nm">Head of Financial Reporting</span><span className="ct">15 placements</span></div>
                    <div className="rls-ir"><span className="nm">Fund / Portfolio Accountant</span><span className="ct">30 placements</span></div>
                    <div className="rls-ir"><span className="nm">Quant Analyst</span><span className="ct">16 placements</span></div>
                  </div>
                </div>
                <div className="rls-panelR">
                  <div className="rls-ministory">
                    <div className="rls-ministory-tag">Client story</div>
                    <q>Their partner knew our regulatory world cold. We had a <em>shortlist of four</em> for a hard compliance seat inside a week.</q>
                    <div className="rls-ministory-by"><div className="rls-ministory-av">MS</div><div><div className="rls-ministory-n">Head of Talent</div><div className="rls-ministory-r">Global bank · Delaware</div></div></div>
                  </div>
                  <div className="rls-statgrid">
                    <div className="rls-stat"><div className="v">228</div><div className="l">Active finance mandates this quarter</div></div>
                    <div className="rls-stat"><div className="v">19<span className="u">days</span></div><div className="l">Median time-to-shortlist for finance leadership</div></div>
                    <div className="rls-stat"><div className="v">11<span className="u">%</span></div><div className="l">Counter-offer recovery rate (vs. 28% baseline)</div></div>
                    <div className="rls-stat"><div className="v">92<span className="u">%</span></div><div className="l">12-month retention on CFO placements</div></div>
                  </div>
                  <div className="rls-sample">
                    <div>
                      <div className="rls-sample-h">Recent placement</div>
                      <div className="rls-sample-line">Head of Risk & Compliance · Tier-1 Canadian bank</div>
                      <div className="rls-sample-sub">Ontario · 27 days · CAD 295K + deferred</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
              <div className="rls-panel" data-rls-panel="aero">
              <div className="rls-head"><h3>Aerospace & Defence</h3><span className="cnt">Typical roles · last 90 days</span></div>
              <p style={{fontSize: "var(--fz3)", color: "var(--text2)", lineHeight: 1.7, fontWeight: 400, maxWidth: "680px", marginBottom: "26px"}}>Tier-1 OEMs, defence primes and the supplier ecosystem beneath — cleared talent pre-vetted through Rivago’s cleared-talent program.</p>
              <div className="rls-ind">
                <div>
                  <div className="rls-illabel">Typical roles · last 90 days</div>
                  <div className="rls-irlist">
                    <div className="rls-ir"><span className="nm">Director of Manufacturing</span><span className="ct">5 placements</span></div>
                    <div className="rls-ir"><span className="nm">Director, Cleared Cybersecurity</span><span className="ct">6 placements</span></div>
                    <div className="rls-ir"><span className="nm">Principal Systems Engineer</span><span className="ct">11 placements</span></div>
                    <div className="rls-ir"><span className="nm">Programme Manager (Cleared)</span><span className="ct">9 placements</span></div>
                    <div className="rls-ir"><span className="nm">Quality / AS9100 Manager</span><span className="ct">10 placements</span></div>
                    <div className="rls-ir"><span className="nm">Head of FAR/AR & Compliance</span><span className="ct">4 placements</span></div>
                    <div className="rls-ir"><span className="nm">Avionics Engineer</span><span className="ct">16 placements</span></div>
                    <div className="rls-ir"><span className="nm">Stress / Structures Engineer</span><span className="ct">14 placements</span></div>
                    <div className="rls-ir"><span className="nm">Propulsion Engineer</span><span className="ct">8 placements</span></div>
                    <div className="rls-ir"><span className="nm">RF / Radar Systems Engineer</span><span className="ct">9 placements</span></div>
                  </div>
                </div>
                <div className="rls-panelR">
                  <div className="rls-ministory">
                    <div className="rls-ministory-tag">Client story</div>
                    <q>Cleared, niche and fast — three things that rarely come together. Rivago delivered a <em>programme team</em> we could not build ourselves.</q>
                    <div className="rls-ministory-by"><div className="rls-ministory-av">JT</div><div><div className="rls-ministory-n">Programme Director</div><div className="rls-ministory-r">Defence prime · US</div></div></div>
                  </div>
                  <div className="rls-statgrid">
                    <div className="rls-stat"><div className="v">74</div><div className="l">Active aerospace mandates this quarter</div></div>
                    <div className="rls-stat"><div className="v">80<span className="u">%</span></div><div className="l">Of finalists with active TS/SCI at submission</div></div>
                    <div className="rls-stat"><div className="v">42<span className="u">days</span></div><div className="l">Median time-to-shortlist (clearance constraints)</div></div>
                    <div className="rls-stat"><div className="v">100<span className="u">%</span></div><div className="l">Of placements pre-vetted via cleared program</div></div>
                  </div>
                  <div className="rls-sample">
                    <div>
                      <div className="rls-sample-h">Recent placement</div>
                      <div className="rls-sample-line">Director of Aerospace Manufacturing · tier-1 supplier</div>
                      <div className="rls-sample-sub">Delaware · 49 days · $260K + relocation</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
              <div className="rls-panel" data-rls-panel="telecom">
              <div className="rls-head"><h3>Telecom</h3><span className="cnt">Typical roles · last 90 days</span></div>
              <p style={{fontSize: "var(--fz3)", color: "var(--text2)", lineHeight: 1.7, fontWeight: 400, maxWidth: "680px", marginBottom: "26px"}}>5G core, fibre rollout and MSO leadership — staffed on both the operator and supplier side, with pricing intelligence across the table.</p>
              <div className="rls-ind">
                <div>
                  <div className="rls-illabel">Typical roles · last 90 days</div>
                  <div className="rls-irlist">
                    <div className="rls-ir"><span className="nm">VP of Network Operations</span><span className="ct">5 placements</span></div>
                    <div className="rls-ir"><span className="nm">Head of 5G Core Engineering</span><span className="ct">4 placements</span></div>
                    <div className="rls-ir"><span className="nm">Principal Network Architect</span><span className="ct">9 placements</span></div>
                    <div className="rls-ir"><span className="nm">Director, Field Operations</span><span className="ct">11 placements</span></div>
                    <div className="rls-ir"><span className="nm">SDN / NFV Engineer</span><span className="ct">8 placements</span></div>
                    <div className="rls-ir"><span className="nm">Telecom Product Manager</span><span className="ct">9 placements</span></div>
                    <div className="rls-ir"><span className="nm">RF Engineer</span><span className="ct">22 placements</span></div>
                    <div className="rls-ir"><span className="nm">Core Network Engineer</span><span className="ct">16 placements</span></div>
                    <div className="rls-ir"><span className="nm">OSS / BSS Specialist</span><span className="ct">13 placements</span></div>
                    <div className="rls-ir"><span className="nm">Transport / Backhaul Engineer</span><span className="ct">12 placements</span></div>
                  </div>
                </div>
                <div className="rls-panelR">
                  <div className="rls-ministory">
                    <div className="rls-ministory-tag">Client story</div>
                    <q>We were rolling out 5G and short on RF talent nationwide. Rivago <em>staffed the whole region</em> in under two months.</q>
                    <div className="rls-ministory-by"><div className="rls-ministory-av">RN</div><div><div className="rls-ministory-n">VP Network</div><div className="rls-ministory-r">Telecom operator · UAE</div></div></div>
                  </div>
                  <div className="rls-statgrid">
                    <div className="rls-stat"><div className="v">86</div><div className="l">Active telecom mandates this quarter</div></div>
                    <div className="rls-stat"><div className="v">23<span className="u">days</span></div><div className="l">Median time-to-shortlist for network leadership</div></div>
                    <div className="rls-stat"><div className="v">14</div><div className="l">Active mandates across operator + supplier sides</div></div>
                    <div className="rls-stat"><div className="v">88<span className="u">%</span></div><div className="l">12-month retention on telecom placements</div></div>
                  </div>
                  <div className="rls-sample">
                    <div>
                      <div className="rls-sample-h">Recent placement</div>
                      <div className="rls-sample-line">Head of 5G Core Engineering · national operator</div>
                      <div className="rls-sample-sub">Dubai · 34 days · $310K + relocation</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
              <div className="rls-panel" data-rls-panel="auto">
              <div className="rls-head"><h3>Automotive</h3><span className="cnt">Typical roles · last 90 days</span></div>
              <p style={{fontSize: "var(--fz3)", color: "var(--text2)", lineHeight: 1.7, fontWeight: 400, maxWidth: "680px", marginBottom: "26px"}}>OEM, tier-1 supplier and the new mobility entrants — battery, ADAS and software-defined vehicle talent, sourced before it hits the market.</p>
              <div className="rls-ind">
                <div>
                  <div className="rls-illabel">Typical roles · last 90 days</div>
                  <div className="rls-irlist">
                    <div className="rls-ir"><span className="nm">VP of Software (SDV)</span><span className="ct">4 placements</span></div>
                    <div className="rls-ir"><span className="nm">Head of Battery Engineering</span><span className="ct">4 placements</span></div>
                    <div className="rls-ir"><span className="nm">ADAS / Autonomy Engineer</span><span className="ct">12 placements</span></div>
                    <div className="rls-ir"><span className="nm">Functional Safety (ISO 26262) Lead</span><span className="ct">6 placements</span></div>
                    <div className="rls-ir"><span className="nm">Head of Supply Quality</span><span className="ct">8 placements</span></div>
                    <div className="rls-ir"><span className="nm">Plant / Production Manager</span><span className="ct">9 placements</span></div>
                    <div className="rls-ir"><span className="nm">Powertrain Engineer</span><span className="ct">15 placements</span></div>
                    <div className="rls-ir"><span className="nm">Embedded Systems Engineer</span><span className="ct">17 placements</span></div>
                    <div className="rls-ir"><span className="nm">Manufacturing Process Engineer</span><span className="ct">14 placements</span></div>
                    <div className="rls-ir"><span className="nm">Vehicle Integration Engineer</span><span className="ct">10 placements</span></div>
                  </div>
                </div>
                <div className="rls-panelR">
                  <div className="rls-ministory">
                    <div className="rls-ministory-tag">Client story</div>
                    <q>An EV line launch with an <em>immovable date</em>. Rivago built the manufacturing and quality team that hit it.</q>
                    <div className="rls-ministory-by"><div className="rls-ministory-av">DM</div><div><div className="rls-ministory-n">Director of Ops</div><div className="rls-ministory-r">EV manufacturer · US</div></div></div>
                  </div>
                  <div className="rls-statgrid">
                    <div className="rls-stat"><div className="v">62</div><div className="l">Active automotive mandates this quarter</div></div>
                    <div className="rls-stat"><div className="v">28<span className="u">days</span></div><div className="l">Median time-to-shortlist (relocation-heavy)</div></div>
                    <div className="rls-stat"><div className="v">3.4<span className="u">×</span></div><div className="l">Inbound interest per OEM mandate, last 90 days</div></div>
                    <div className="rls-stat"><div className="v">89<span className="u">%</span></div><div className="l">12-month retention on automotive placements</div></div>
                  </div>
                  <div className="rls-sample">
                    <div>
                      <div className="rls-sample-h">Recent placement</div>
                      <div className="rls-sample-line">Head of Battery Engineering · EV manufacturer</div>
                      <div className="rls-sample-sub">Ontario · 41 days · CAD 320K + equity</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
              <div className="rls-panel" data-rls-panel="supply">
              <div className="rls-head"><h3>Supply & Operations</h3><span className="cnt">Typical roles · last 90 days</span></div>
              <p style={{fontSize: "var(--fz3)", color: "var(--text2)", lineHeight: 1.7, fontWeight: 400, maxWidth: "680px", marginBottom: "26px"}}>From distribution-centre leadership to global head-of-supply roles — the people who keep the operation moving when everything else is on fire.</p>
              <div className="rls-ind">
                <div>
                  <div className="rls-illabel">Typical roles · last 90 days</div>
                  <div className="rls-irlist">
                    <div className="rls-ir"><span className="nm">Chief Operating Officer</span><span className="ct">6 placements</span></div>
                    <div className="rls-ir"><span className="nm">VP of Supply Chain</span><span className="ct">11 placements</span></div>
                    <div className="rls-ir"><span className="nm">Director, S&OP</span><span className="ct">15 placements</span></div>
                    <div className="rls-ir"><span className="nm">Procurement Director</span><span className="ct">13 placements</span></div>
                    <div className="rls-ir"><span className="nm">Head of Distribution</span><span className="ct">11 placements</span></div>
                    <div className="rls-ir"><span className="nm">Continuous Improvement Lead</span><span className="ct">14 placements</span></div>
                    <div className="rls-ir"><span className="nm">Logistics Manager</span><span className="ct">24 placements</span></div>
                    <div className="rls-ir"><span className="nm">Demand Planning Analyst</span><span className="ct">18 placements</span></div>
                    <div className="rls-ir"><span className="nm">Warehouse / DC Manager</span><span className="ct">20 placements</span></div>
                    <div className="rls-ir"><span className="nm">Inventory / Materials Manager</span><span className="ct">17 placements</span></div>
                  </div>
                </div>
                <div className="rls-panelR">
                  <div className="rls-ministory">
                    <div className="rls-ministory-tag">Client story</div>
                    <q>They placed a plant leadership team across two sites — <em>on time, on budget</em> — while our own pipeline was bone dry.</q>
                    <div className="rls-ministory-by"><div className="rls-ministory-av">HK</div><div><div className="rls-ministory-n">VP Operations</div><div className="rls-ministory-r">Manufacturer · UAE</div></div></div>
                  </div>
                  <div className="rls-statgrid">
                    <div className="rls-stat"><div className="v">128</div><div className="l">Active supply & ops mandates this quarter</div></div>
                    <div className="rls-stat"><div className="v">22<span className="u">days</span></div><div className="l">Median time-to-shortlist for VP-level supply</div></div>
                    <div className="rls-stat"><div className="v">62<span className="u">%</span></div><div className="l">Of supply placements involve relocation</div></div>
                    <div className="rls-stat"><div className="v">90<span className="u">%</span></div><div className="l">12-month retention on supply placements</div></div>
                  </div>
                  <div className="rls-sample">
                    <div>
                      <div className="rls-sample-h">Recent placement</div>
                      <div className="rls-sample-line">VP of Supply Chain · industrial manufacturer</div>
                      <div className="rls-sample-sub">Dubai · 26 days · $285K + bonus</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
              <div className="rls-panel" data-rls-panel="sales">
              <div className="rls-head"><h3>Sales & Marketing</h3><span className="cnt">Typical roles · last 90 days</span></div>
              <p style={{fontSize: "var(--fz3)", color: "var(--text2)", lineHeight: 1.7, fontWeight: 400, maxWidth: "680px", marginBottom: "26px"}}>CRO succession, first-VP-of-marketing hires and demand-gen leadership — we know the OTE patterns and which “100% to plan” résumé actually beat the number.</p>
              <div className="rls-ind">
                <div>
                  <div className="rls-illabel">Typical roles · last 90 days</div>
                  <div className="rls-irlist">
                    <div className="rls-ir"><span className="nm">Chief Revenue Officer</span><span className="ct">6 placements</span></div>
                    <div className="rls-ir"><span className="nm">VP of Marketing</span><span className="ct">12 placements</span></div>
                    <div className="rls-ir"><span className="nm">Sales Director</span><span className="ct">17 placements</span></div>
                    <div className="rls-ir"><span className="nm">Head of Demand Gen</span><span className="ct">15 placements</span></div>
                    <div className="rls-ir"><span className="nm">Product Marketing Lead</span><span className="ct">15 placements</span></div>
                    <div className="rls-ir"><span className="nm">Head of Growth</span><span className="ct">9 placements</span></div>
                    <div className="rls-ir"><span className="nm">Enterprise Account Executive</span><span className="ct">38 placements</span></div>
                    <div className="rls-ir"><span className="nm">RevOps Manager</span><span className="ct">16 placements</span></div>
                    <div className="rls-ir"><span className="nm">Brand / Content Manager</span><span className="ct">14 placements</span></div>
                    <div className="rls-ir"><span className="nm">Field Marketing Manager</span><span className="ct">13 placements</span></div>
                  </div>
                </div>
                <div className="rls-panelR">
                  <div className="rls-ministory">
                    <div className="rls-ministory-tag">Client story</div>
                    <q>We doubled the revenue org in a quarter. The reps Rivago placed <em>beat quota</em> faster than anyone we hired ourselves.</q>
                    <div className="rls-ministory-by"><div className="rls-ministory-av">DK</div><div><div className="rls-ministory-n">Chief Revenue Officer</div><div className="rls-ministory-r">Growth-stage scale-up · Canada</div></div></div>
                  </div>
                  <div className="rls-statgrid">
                    <div className="rls-stat"><div className="v">204</div><div className="l">Active GTM mandates this quarter</div></div>
                    <div className="rls-stat"><div className="v">17<span className="u">days</span></div><div className="l">Median time-to-shortlist for VP+ GTM roles</div></div>
                    <div className="rls-stat"><div className="v">68<span className="u">%</span></div><div className="l">Of CRO finalists beat-plan in their last role</div></div>
                    <div className="rls-stat"><div className="v">89<span className="u">%</span></div><div className="l">12-month retention on CRO placements</div></div>
                  </div>
                  <div className="rls-sample">
                    <div>
                      <div className="rls-sample-h">Recent placement</div>
                      <div className="rls-sample-line">VP of Marketing · growth-stage SaaS</div>
                      <div className="rls-sample-sub">Ontario · 24 days · CAD 265K + equity</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>


        <section className="proc2">
          <div className="proc2-inner">
            <div className="proc2-top">
              <div>
                <div className="proc2-eyb rv">What we actually do</div>
                <h2 className="rv">Every engagement runs five stages.<br />None of them are <em>a portal.</em></h2>
              </div>
              <p className="proc2-lead rv rv2">One partner owns every stage — permanent, contract, temporary or retained. Pace varies by engagement; each service page states its own timeline.</p>
            </div>
            <div className="proc2-tl rv rv2">
              <div className="proc2-line"></div>
              <div className="proc2-row"><div className="proc2-step rv"><div className="proc2-node">01</div><div className="proc2-card"><span className="proc2-day">Stage 01</span><h3>Calibrate</h3><p>We agree the spec, the bar and the commercials up front, so nothing about the engagement is ambiguous later.</p><div className="proc2-deliver"><svg width="15" height="15" viewBox="0 0 16 16" fill="none"><path d="M3 8.5l3.2 3.2L13 5" stroke="#3DFF87" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" /></svg><div><span className="proc2-deliver-l">You get</span><span className="proc2-deliver-v">Signed-off scorecard</span></div></div></div></div><div className="proc2-step rv rv2"><div className="proc2-node">02</div><div className="proc2-card"><span className="proc2-day">Stage 02</span><h3>Map</h3><p>Your partner works their own practice network — people approached directly, never a job ad reposted at scale.</p><div className="proc2-deliver"><svg width="15" height="15" viewBox="0 0 16 16" fill="none"><path d="M3 8.5l3.2 3.2L13 5" stroke="#3DFF87" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" /></svg><div><span className="proc2-deliver-l">You get</span><span className="proc2-deliver-v">Targeted longlist</span></div></div></div></div><div className="proc2-step rv rv3"><div className="proc2-node">03</div><div className="proc2-card"><span className="proc2-day">Stage 03</span><h3>Screen</h3><p>Everyone you meet has been interviewed against the agreed bar, with written evidence behind the recommendation.</p><div className="proc2-deliver"><svg width="15" height="15" viewBox="0 0 16 16" fill="none"><path d="M3 8.5l3.2 3.2L13 5" stroke="#3DFF87" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" /></svg><div><span className="proc2-deliver-l">You get</span><span className="proc2-deliver-v">Calibrated profiles</span></div></div></div></div><div className="proc2-step rv rv4"><div className="proc2-node">04</div><div className="proc2-card"><span className="proc2-day">Stage 04</span><h3>Panel</h3><p>We carry the admin — scheduling, debriefs, references and compliance — so your team only spends time on decisions.</p><div className="proc2-deliver"><svg width="15" height="15" viewBox="0 0 16 16" fill="none"><path d="M3 8.5l3.2 3.2L13 5" stroke="#3DFF87" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" /></svg><div><span className="proc2-deliver-l">You get</span><span className="proc2-deliver-v">Debriefs & references</span></div></div></div></div><div className="proc2-step done rv rv4"><div className="proc2-node">05</div><div className="proc2-card"><span className="proc2-day">Stage 05</span><h3>Placed & guaranteed</h3><p>We close the offer, protect it against counters, and stay accountable through the guarantee window.</p><div className="proc2-deliver"><svg width="15" height="15" viewBox="0 0 16 16" fill="none"><path d="M3 8.5l3.2 3.2L13 5" stroke="#3DFF87" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" /></svg><div><span className="proc2-deliver-l">You get</span><span className="proc2-deliver-v">Signed start · guarantee applies</span></div></div></div></div></div>
            </div>
            <div className="proc2-foot rv rv3"><span className="dot"></span>Five stages. <strong>One partner runs all of them.</strong></div>
          </div>
        </section>



        <section className="gd inv">
          <div className="gd-inner">
            <div className="gd-card">
              <div className="gd-map rv">
                <GlobeCanvas />
                <div className="gd-sun"><span className="d"></span>Follow-the-sun delivery · <strong>pipeline moves around the clock</strong></div>
              </div>
              <div className="gd-info rv rv2">
                <div className="gd-eyb">Global delivery</div>
                <h2>Four markets. <em>One handshake.</em></h2>
                <p className="gd-lead">Wherever the role sits, a local partner runs it — backed by a centralised research and sourcing team. You get regional fluency and round-the-clock pipeline, on a single contract.</p>
                <div className="gd-stats">
                  <div className="gd-stat"><div className="v">3</div><div className="l">Offices across 3 countries</div></div>
                  <div className="gd-stat"><div className="v">1</div><div className="l">Central delivery hub, Pune</div></div>
                  <div className="gd-stat"><div className="v">1,000+</div><div className="l">Placements to date</div></div>
                  <div className="gd-stat"><div className="v">10+</div><div className="l">Years of global staffing</div></div>
                </div>
                <a className="gd-browse" href="/about#offices">Browse all offices &amp; delivery centers <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M3 7h8M8 4l3 3-3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg></a>
              </div>
            </div>
          </div>
        </section>

        <section className="indg">
          <div className="indg-inner">
            <div className="indg-top">
              <div>
                <div className="indg-eyb rv">Industries</div>
                <h2 className="rv">Ten practices. <em>Real depth in each.</em></h2>
              </div>
              <a className="indg-link rv rv2" href="/industries">Explore all industries <svg width="13" height="13" viewBox="0 0 14 14" fill="none"><path d="M3 7h8M8 4l3 3-3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg></a>
            </div>
            <div className="ind-grid2">
              <a className="ind-card2" href="/industries">
                <span className="ico">💻</span>
                <div className="t">Technology</div>
                <div className="d">Software engineering, cloud infrastructure, data, cybersecurity, AI/ML, product management and digital transformation from startup to enterprise.</div>
                <div className="tags"><span className="tag">Engineering</span><span className="tag">Cloud</span><span className="tag">Data</span><span className="tag">AI/ML</span></div>
              </a>
              <a className="ind-card2" href="/industries">
                <span className="ico">🏦</span>
                <div className="t">Finance & Banking</div>
                <div className="d">Investment banking, risk, compliance, financial planning, treasury and accounting across global financial institutions and fintech firms.</div>
                <div className="tags"><span className="tag">Risk</span><span className="tag">Compliance</span><span className="tag">FP&amp;A</span><span className="tag">Treasury</span></div>
              </a>
              <a className="ind-card2" href="/industries">
                <span className="ico">🏥</span>
                <div className="t">Healthcare</div>
                <div className="d">Clinical, nursing, allied health, pharmaceutical and healthcare administration across hospitals, clinics and life-sciences organisations.</div>
                <div className="tags"><span className="tag">Clinical</span><span className="tag">Pharma</span><span className="tag">Allied Health</span></div>
              </a>
              <a className="ind-card2" href="/industries">
                <span className="ico">⚖️</span>
                <div className="t">Legal</div>
                <div className="d">In-house counsel, contracts, privacy, compliance officers and legal operations professionals across corporate and private practice.</div>
                <div className="tags"><span className="tag">In-house</span><span className="tag">Contracts</span><span className="tag">Compliance</span></div>
              </a>
              <a className="ind-card2" href="/industries">
                <span className="ico">✈️</span>
                <div className="t">Aerospace & Defence</div>
                <div className="d">Tier-1 OEMs, defence primes and the supplier ecosystem — cleared engineering, systems and programme talent, pre-vetted for clearance.</div>
                <div className="tags"><span className="tag">Systems</span><span className="tag">Cleared</span><span className="tag">Programme</span></div>
              </a>
              <a className="ind-card2" href="/industries">
                <span className="ico">🏭</span>
                <div className="t">Supply & Operations</div>
                <div className="d">Supply chain, procurement, logistics and plant leadership for companies scaling their physical and digital operations globally.</div>
                <div className="tags"><span className="tag">Supply Chain</span><span className="tag">Procurement</span><span className="tag">Logistics</span></div>
              </a>
              <a className="ind-card2" href="/industries">
                <span className="ico">📈</span>
                <div className="t">Sales & Marketing</div>
                <div className="d">B2B and B2C sales, demand generation, brand, growth, customer success and revenue operations across all markets.</div>
                <div className="tags"><span className="tag">Sales</span><span className="tag">Growth</span><span className="tag">Brand</span><span className="tag">CX</span></div>
              </a>
              <a className="ind-card2" href="/industries">
                <span className="ico">👥</span>
                <div className="t">People & HR</div>
                <div className="d">HR business partners, talent acquisition, L&amp;D, reward and employee relations from coordinator to CHRO across every sector.</div>
                <div className="tags"><span className="tag">HR BP</span><span className="tag">TA</span><span className="tag">L&amp;D</span><span className="tag">Reward</span></div>
              </a>
            </div>
          </div>
        </section>


        <section className="cstory">
          <div className="cstory-inner">
            <div className="cstory-head">
              <div>
                <div className="cstory-eyb rv">Customer story</div>
                <h2 className="rv">Proof, not <em>promises.</em></h2>
              </div>
              <a className="cstory-link rv rv2" href="/resources/case-study">Read all case studies <svg width="13" height="13" viewBox="0 0 14 14" fill="none"><path d="M3 7h8M8 4l3 3-3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg></a>
            </div>
            <div className="cstory-card rv rv2">
              <div className="cstory-media" style={{background: "linear-gradient(150deg,#0F2A1B,#0A7040 60%,#00A882)"}}>
                <span className="cstory-badge">Healthcare · United States</span>
                <span className="cstory-logo"><span className="tick"><svg width="11" height="9" viewBox="0 0 12 10" fill="none"><path d="M1 5l3.2 3.2L11 1" stroke="#fff" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" /></svg></span>Second-hospital launch</span>
              </div>
              <div className="cstory-body">
                <div className="cstory-mark">&ldquo;</div>
                <p className="cstory-q">We were opening a second hospital with beds coming online in ninety days and no clinical leaders in post. Rivago filled every seat — <em>credentialed, compliant, and still here a year on.</em></p>
                <div className="cstory-by">
                  <div className="cstory-av">DN</div>
                  <div><div className="cstory-n">Chief Nursing Officer</div><div className="cstory-r">Healthcare provider · United States</div></div>
                </div>
                <div className="cstory-metrics">
                  <div className="cstory-metric"><div className="v">16</div><div className="l">Clinical leaders placed in one quarter</div></div>
                  <div className="cstory-metric"><div className="v">90 days</div><div className="l">Brief to a fully-staffed unit</div></div>
                  <div className="cstory-metric"><div className="v">100%</div><div className="l">Retained at 12 months (this cohort)</div></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="persp">
          <div className="persp-inner">
            <div className="persp-top">
              <div>
                <div className="persp-eyb rv">Recent perspectives</div>
                <h2 className="rv">Notes from the <em>front line.</em></h2>
              </div>
              <a className="persp-link rv rv2" href="/resources">Read the blog <svg width="13" height="13" viewBox="0 0 14 14" fill="none"><path d="M3 7h8M8 4l3 3-3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg></a>
            </div>
            <div className="persp-grid">
              <a className="persp-card rv" href="/resources">
                <div className="persp-img" style={{background: "linear-gradient(135deg,#0F2A1B,#0A7040)"}}><span className="persp-cat">Hiring playbook</span></div>
                <div className="persp-body"><h3>What a real scorecard looks like in 2026</h3><p>The one-page framework our partners use to calibrate a search before a single name is sourced.</p><div className="persp-meta">8 min read · Hiring</div></div>
              </a>
              <a className="persp-card rv rv2" href="/resources">
                <div className="persp-img" style={{background: "linear-gradient(135deg,#12332A,#00A882)"}}><span className="persp-cat">Cost analysis</span></div>
                <div className="persp-body"><h3>Contract vs. permanent: the true cost math</h3><p>A clear-eyed model for when flexible talent beats a permanent hire — and when it quietly costs you more.</p><div className="persp-meta">6 min read · Strategy</div></div>
              </a>
              <a className="persp-card rv rv3" href="/resources">
                <div className="persp-img" style={{background: "linear-gradient(135deg,#0B1F14,#3DFF87)"}}><span className="persp-cat">Global hiring</span></div>
                <div className="persp-body"><h3>Hiring across the US, Canada and the UAE without tripping compliance</h3><p>Work authorisation, EOR and payroll, decoded for teams scaling into three regions at once.</p><div className="persp-meta">9 min read · Global</div></div>
              </a>
            </div>
          </div>
        </section>

        <section className="faq">
          <div className="faq-inner">
            <div className="faq-eyb rv">FAQ</div>
            <h2 className="rv">The questions we get on<br />the <em>first call.</em></h2>
            <div className="faq-list">
              <div className="faq-item"><button className="faq-q">What’s the difference between contract, contract-to-hire, and direct hire staffing?<span className="faq-ico"><svg width="13" height="13" viewBox="0 0 14 14" fill="none"><path d="M7 2v10M2 7h10" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" /></svg></span></button><div className="faq-a"><div className="faq-a-inner">Contract staffing places a professional on our payroll for a fixed term — you get the skills without the headcount commitment, and we handle payroll, compliance and classification. Contract-to-hire is the same, with the option to convert the person to a permanent employee once they’ve proven the fit. Direct hire is a permanent placement from day one, sourced on a contingent fee and backed by a replacement guarantee. Not sure which fits? Your partner will recommend the right structure on the first call — no pressure to over-buy.</div></div></div>
              <div className="faq-item"><button className="faq-q">How quickly can you get us qualified candidates?<span className="faq-ico"><svg width="13" height="13" viewBox="0 0 14 14" fill="none"><path d="M7 2v10M2 7h10" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" /></svg></span></button><div className="faq-a"><div className="faq-a-inner">For contract and temporary roles, we can put vetted professionals in front of you in 5–7 days. For direct-hire searches, three to five calibrated finalists typically land within 48 hours of a signed brief. Executive and cleared roles run longer because the bar is higher — but you’ll get a realistic date in writing on the first call, not a vague promise.</div></div></div>
              <div className="faq-item"><button className="faq-q">We already have a staffing partner. Do we have to replace them to work with you?<span className="faq-ico"><svg width="13" height="13" viewBox="0 0 14 14" fill="none"><path d="M7 2v10M2 7h10" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" /></svg></span></button><div className="faq-a"><div className="faq-a-inner">No. Plenty of our clients bring us in alongside an incumbent — often on the roles they’re struggling to fill, or in a market where we have deeper reach. We’re happy to prove ourselves on a single hard requisition before you consolidate anything. If we earn more of your work, great; if not, you’ve lost nothing.</div></div></div>
              <div className="faq-item"><button className="faq-q">What happens if a placement doesn’t work out?<span className="faq-ico"><svg width="13" height="13" viewBox="0 0 14 14" fill="none"><path d="M7 2v10M2 7h10" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" /></svg></span></button><div className="faq-a"><div className="faq-a-inner">Every permanent placement carries a replacement guarantee — 90 days on contingent direct hires, up to 12 months on retained searches. If someone leaves inside the window, we restart the search at no additional fee. On contract, we replace a poor-fit worker fast and you only pay for time worked.</div></div></div>
              <div className="faq-item"><button className="faq-q">We don’t just need bodies. We need a team to own a project. Can you do that?<span className="faq-ico"><svg width="13" height="13" viewBox="0 0 14 14" fill="none"><path d="M7 2v10M2 7h10" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" /></svg></span></button><div className="faq-a"><div className="faq-a-inner">Yes — that’s our Recruitment Process Outsourcing and team build-out work. Rather than filling one seat, we stand up an entire function or project pod — engineering, clinical, operations — with one partner owning the outcome end to end. We’ve built plant leadership teams, AI platform teams and 40-person cohorts on a single contract, and stayed accountable for retention long after.</div></div></div>
              <div className="faq-item"><button className="faq-q">How do you stay on top of specialized skills like AI, cybersecurity, or grid modernization?<span className="faq-ico"><svg width="13" height="13" viewBox="0 0 14 14" fill="none"><path d="M7 2v10M2 7h10" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" /></svg></span></button><div className="faq-a"><div className="faq-a-inner">Every Rivago partner runs a single practice and has placed inside it for years — so they know the tools, the certifications and the people before a brief ever lands. For fast-moving fields like AI/ML, cleared cybersecurity and energy-grid modernization, we maintain live talent maps and a private network of specialists who never touch a job board, and we localise comp benchmarks continuously across our four markets.</div></div></div>
            </div>
          </div>
        </section>

        <section className="svcta">
          <div className="svcta-inner rv">
            <h2>Tell us the role.<br />We&rsquo;ll be back <em>tomorrow.</em></h2>
            <p>A 30-minute scoping call with a partner — not a portal — and a written shortlist plan within one business day.</p>
            <div style={{display: "flex", gap: "12px", justifyContent: "center", flexWrap: "wrap"}}>
              <a className="btn-dark" href="/hire-talent#intake" data-hire>Hire Talent <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M3 7h8M8 4l3 3-3 3" stroke="#030C05" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg></a>
              <a className="btn-darkghost" href="/contact-us">Talk to us</a>
            </div>
          </div>
        </section>
      </div>
      <ServicesClient />
    </>
  );
}
