import Link from "next/link";
import type { Metadata } from "next";
import LogoMarquee from "@/components/LogoMarquee";
import ServicesRolesTabs from "./ServicesRolesTabs";
import { routes } from "@/lib/routes";
import { Arrow, breadcrumbJsonLd, FaqSection } from "./_components/shared";
import {
  engagementModels,
  whyNumsr,
  whyCards,
  proc2Stages,
  gdStats,
  gdHubs,
  indgCards,
  perspectives,
  servicesFaqItems,
} from "./data";

export const metadata: Metadata = {
  title: "Staffing Solutions & Recruitment Services — Rivago Infotech",
  description:
    "Every way Rivago Infotech staffs a role: direct hire, contract, temporary staffing, RPO, executive search, interim leadership and Employer of Record. One senior partner per search, 48-hour shortlists, across the US, Canada, UAE and India.",
  alternates: { canonical: "https://rivagoinfotech.com/services" },
  openGraph: {
    title: "Staffing Solutions & Recruitment Services — Rivago Infotech",
    description:
      "Every way Rivago Infotech staffs a role: direct hire, contract, temporary staffing, RPO, executive search, interim leadership and Employer of Record.",
    url: "https://rivagoinfotech.com/services",
  },
};

const crumbs = [{ label: "Home", href: routes.home }, { label: "Services" }];

const Check = () => (
  <svg width="14" height="12" viewBox="0 0 14 12" fill="none">
    <path d="M1 6l4 4L13 1" stroke="#0A7040" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const DeliverCheck = () => (
  <svg width="15" height="15" viewBox="0 0 16 16" fill="none">
    <path d="M3 8.5l3.2 3.2L13 5" stroke="#3DFF87" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const whyIcons = [
  <svg key="0" width="22" height="22" viewBox="0 0 22 22" fill="none"><path d="M11 2l2.2 4.4 4.8.7-3.5 3.4.8 4.8L11 13l-4.3 2.3.8-4.8L4 7.1l4.8-.7z" stroke="#3DFF87" strokeWidth="1.5" strokeLinejoin="round" /></svg>,
  <svg key="1" width="22" height="22" viewBox="0 0 22 22" fill="none"><circle cx="9" cy="9" r="6" stroke="#3DFF87" strokeWidth="1.5" /><path d="M14 14l5 5" stroke="#3DFF87" strokeWidth="1.5" strokeLinecap="round" /></svg>,
  <svg key="2" width="22" height="22" viewBox="0 0 22 22" fill="none"><circle cx="7" cy="8" r="3" stroke="#3DFF87" strokeWidth="1.5" /><circle cx="15" cy="8" r="3" stroke="#3DFF87" strokeWidth="1.5" /><path d="M2 18c0-2.5 2-4.5 4.5-4.5M20 18c0-2.5-2-4.5-4.5-4.5" stroke="#3DFF87" strokeWidth="1.5" strokeLinecap="round" /></svg>,
  <svg key="3" width="22" height="22" viewBox="0 0 22 22" fill="none"><path d="M11 19s-7-4.2-7-9a4 4 0 017-2.6A4 4 0 0118 10c0 4.8-7 9-7 9z" stroke="#3DFF87" strokeWidth="1.5" strokeLinejoin="round" /></svg>,
];

export default function ServicesHubPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd(crumbs)) }} />

      {/* HERO */}
      <section className="svh">
        <div className="svh-inner">
          <div className="svh-eyb gs"><span className="dot"></span>Staffing Solutions · How Rivago engages</div>
          <h1 className="gs">Staffing for every role,<br />at <em>every level.</em></h1>
          <p className="gs">Contract, contract-to-hire and direct hire across four countries. A specialist partner runs the search end to end — and stays on the line for every role after it.</p>
          <div className="svh-cta gs">
            <Link className="btn btn-prim" href={`${routes.hireTalent}#intake`} data-hire>Hire Talent <Arrow /></Link>
            <Link className="btn btn-ghost" href={`${routes.resources}?view=cs`}>See the proof</Link>
          </div>
        </div>
      </section>

      {/* CLIENTS */}
      <section className="clients-sec">
        <div className="clients-label">Trusted by the teams we hire for</div>
        <LogoMarquee />
      </section>

      {/* WHY RIVAGO */}
      <section className="svc-why">
        <div className="svc-why-inner">
          <div className="svc-why-top">
            <div className="gs">
              <div className="svc-why-eyb">Why Rivago</div>
              <h2>Staffing, done the way<br />it <em>should be.</em></h2>
              <p className="svc-why-lead">Most agencies sell volume and hand your role to a junior. We do the opposite — one senior partner owns the search end to end, sources the people who never apply, and puts the commitments that matter in writing before you sign.</p>
            </div>
            <div className="svc-why-numsr gs">
              {whyNumsr.map((n) => (
                <div className="svc-why-numr" key={n.title}>
                  <div className="v">{n.v}{n.sup && <sup>{n.sup}</sup>}</div>
                  <h3>{n.title}</h3>
                  <p>{n.desc}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="svc-why-grid">
            {whyCards.map((c, i) => (
              <div className="svc-why-card gs" key={c.title}>
                <div className="svc-why-ico">{whyIcons[i]}</div>
                <h3>{c.title}</h3>
                <p>{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ENGAGEMENT MODELS (cream) */}
      <section className="eng">
        <div className="eng-inner">
          <div className="eng-eyb gs">How we engage</div>
          <h2 className="gs">Three ways to put a<br />partner on <em>the role.</em></h2>
          <p className="eng-lead gs">One quality bar across all three. Tell us the role and your partner will recommend the right structure before you commit — no pressure to over-buy.</p>
          <div className="eng-grid">
            {engagementModels.map((m) => (
              <div className={`eng-card gs${m.featured ? " feat" : ""}`} key={m.num}>
                {m.featured && <span className="eng-tag">Most popular</span>}
                <div className="eng-num">{m.num}</div>
                <h3>{m.title}</h3>
                <p>{m.desc}</p>
                <ul className="eng-list">
                  {m.bullets.map((b) => (
                    <li key={b}><Check />{b}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ROLES WE FILL */}
      <section className="rls">
        <div className="rls-inner">
          <div className="rls-eyb gs">Roles we fill</div>
          <h2 className="gs">Specialists, not <em>generalists.</em></h2>
          <p className="rls-lead gs">Pick a domain. Every partner runs one practice and has placed inside it for years — so they know the titles, the org charts and the people who never apply through a portal. Here is a sample of the roles we fill, and what it looks like when we do.</p>
          <ServicesRolesTabs />
        </div>
      </section>

      {/* PROCESS */}
      <section className="proc2">
        <div className="proc2-inner">
          <div className="proc2-top">
            <div className="gs">
              <div className="proc2-eyb">What we actually do</div>
              <h2>Every engagement runs five stages.<br />None of them are <em>a portal.</em></h2>
            </div>
            <p className="proc2-lead gs">One partner owns every stage — permanent, contract, temporary or retained. Pace varies by engagement; each service page states its own timeline.</p>
          </div>
          <div className="proc2-tl gs">
            <div className="proc2-line"></div>
            <div className="proc2-row">
              {proc2Stages.map((s) => (
                <div className={`proc2-step gs${s.done ? " done" : ""}`} key={s.title}>
                  <div className="proc2-node">{s.day.replace("Stage ", "")}</div>
                  <div className="proc2-card">
                    <span className="proc2-day">{s.day}</span>
                    <h3>{s.title}</h3>
                    <p>{s.desc}</p>
                    <div className="proc2-deliver">
                      <DeliverCheck />
                      <div><span className="proc2-deliver-l">{s.deliverLabel}</span><span className="proc2-deliver-v">{s.deliverValue}</span></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="proc2-foot gs"><span className="dot"></span>Five stages. <strong>One partner runs all of them.</strong></div>
        </div>
      </section>

      {/* GLOBAL DELIVERY */}
      <section className="gd">
        <div className="gd-inner">
          <div className="gd-card">
            <div className="gd-map gs">
              <div className="gd-orb">
                <div className="gd-orb-ring"></div>
                {gdHubs.map((h, i) => (
                  <div
                    className="gd-pin"
                    key={h.name}
                    style={{
                      top: `${[28, 45, 62, 40][i]}%`,
                      left: `${[30, 42, 68, 78][i]}%`,
                    }}
                  >
                    <span className="gd-pin-dot"></span>
                    <span className="gd-pin-lbl">{h.name}</span>
                    <span className="gd-pin-sub">{h.sub}</span>
                  </div>
                ))}
              </div>
              <div className="gd-sun"><span className="d"></span>Follow-the-sun delivery · <strong>pipeline moves around the clock</strong></div>
            </div>
            <div className="gd-info gs">
              <div className="gd-eyb">Global delivery</div>
              <h2>Five hubs. <em>One handshake.</em></h2>
              <p className="gd-lead">Wherever the role sits, a local partner runs it — backed by a centralised research and sourcing team. You get regional fluency and round-the-clock pipeline, on a single contract.</p>
              <div className="gd-stats">
                {gdStats.map(([v, l]) => (
                  <div className="gd-stat" key={l}><div className="v">{v}</div><div className="l">{l}</div></div>
                ))}
              </div>
              <Link className="gd-browse" href={`${routes.about}#offices`}>Browse all offices &amp; delivery centers <Arrow /></Link>
            </div>
          </div>
        </div>
      </section>

      {/* INDUSTRIES */}
      <section className="indg">
        <div className="indg-inner">
          <div className="indg-top">
            <div className="gs">
              <div className="indg-eyb">Industries</div>
              <h2>Ten practices. <em>Real depth in each.</em></h2>
            </div>
            <Link className="indg-link gs" href={routes.industries}>Explore all industries <Arrow /></Link>
          </div>
          <div className="ind-grid2">
            {indgCards.map((c) => (
              <Link className="ind-card2 gs" href={routes.industries} key={c.title}>
                <span className="ico">{c.icon}</span>
                <div className="t">{c.title}</div>
                <div className="d">{c.desc}</div>
                <div className="tags">{c.tags.map((t) => <span className="tag" key={t}>{t}</span>)}</div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CUSTOMER STORY */}
      <section className="cstory">
        <div className="cstory-inner">
          <div className="cstory-head">
            <div className="gs">
              <div className="cstory-eyb">Customer story</div>
              <h2>Proof, not <em>promises.</em></h2>
            </div>
            <Link className="cstory-link gs" href={`${routes.resources}?view=cs`}>Read all case studies <Arrow /></Link>
          </div>
          <div className="cstory-card gs">
            <div className="cstory-media" style={{ background: "linear-gradient(150deg,#0F2A1B,#0A7040 60%,#00A882)" }}>
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

      {/* PERSPECTIVES */}
      <section className="persp">
        <div className="persp-inner">
          <div className="persp-top">
            <div className="gs">
              <div className="persp-eyb">Recent perspectives</div>
              <h2>Notes from the <em>front line.</em></h2>
            </div>
            <Link className="persp-link gs" href={routes.resources}>Read the blog <Arrow /></Link>
          </div>
          <div className="persp-grid">
            {perspectives.map((p) => (
              <Link className="persp-card gs" href={routes.resources} key={p.title}>
                <div className="persp-img" style={{ background: p.gradient }}><span className="persp-cat">{p.cat}</span></div>
                <div className="persp-body"><h3>{p.title}</h3><p>{p.desc}</p><div className="persp-meta">{p.meta}</div></div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <FaqSection
        heading={<>The questions we get on<br />the <em style={{ fontFamily: "var(--fs)", fontStyle: "italic", color: "var(--green)" }}>first call.</em></>}
        items={servicesFaqItems}
      />

      {/* CTA */}
      <section className="svcta">
        <div className="svcta-inner gs">
          <h2>Tell us the role.<br />We&apos;ll be back <em>tomorrow.</em></h2>
          <p>A 30-minute scoping call with a partner — not a portal — and a written shortlist plan within one business day.</p>
          <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
            <Link className="btn-dark" href={`${routes.hireTalent}#intake`} data-hire>Hire Talent <Arrow /></Link>
            <Link className="btn-darkghost" href={routes.contactUs}>Talk to us</Link>
          </div>
        </div>
      </section>
    </>
  );
}
