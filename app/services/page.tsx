import type { Metadata } from "next";
import Link from "next/link";
import { Fraunces, Public_Sans } from "next/font/google";
import { routes, clientLogos } from "@/lib/routes";
import { SITE_URL } from "@/lib/site";
import { CounselHeader, CounselFooter } from "@/components/CounselChrome";
import HomeClient from "../_home/HomeClient";
import PracticeTabs from "./PracticeTabs";
import GlobeCanvas from "./_components/GlobeCanvas";
import { gdHubs, indgCards } from "./data";
import "../counsel.css";
import "./services.css";

const fraunces = Fraunces({
  subsets: ["latin"],
  axes: ["opsz"],
  style: ["normal", "italic"],
  variable: "--font-fraunces",
  display: "swap",
});
const publicSans = Public_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-public-sans",
  display: "swap",
});

const DESCRIPTION =
  "Contract, contract-to-hire and direct hire across four countries. A specialist partner runs the search end to end — and stays on the line for every role after it.";

export const metadata: Metadata = {
  title: "Staffing Solutions & Recruitment Services — Rivago Infotech",
  description: DESCRIPTION,
  alternates: { canonical: "/services" },
  openGraph: {
    type: "website",
    siteName: "Rivago Infotech",
    title: "Staffing Solutions & Recruitment Services — Rivago Infotech",
    description: DESCRIPTION,
    url: "/services",
    images: [{ url: "/assets/og-image.png", width: 1200, height: 630 }],
  },
};

/* ---------------------------------------------------------------
   Structure ported from the supplied services reference. Every
   unverified figure it carried has been left out — see the note in
   the PR for the full list, so any that can be substantiated can be
   put back deliberately rather than by default.
   --------------------------------------------------------------- */

const pillars = [
  {
    k: "Senior recruiters only",
    d: "Every search is run by a specialist who has worked the field for years — never a junior learning on your role, and never a delivery desk you were not introduced to.",
  },
  {
    k: "Access to hidden talent",
    d: "A private network of senior operators who never touch a job board, reached directly and on your behalf rather than through an advert reposted at scale.",
  },
  {
    k: "Inclusive shortlists",
    d: "Calibrated scorecards and fairly assessed slates on every role, with the bar agreed in the brief so bias is designed out before sourcing begins.",
  },
  {
    k: "Care past the offer",
    d: "Offer negotiation, references, onboarding handover and a replacement guarantee — the engagement does not end when the invoice goes out.",
  },
];

const engagements = [
  {
    n: "01",
    h: "Direct hire",
    d: "Permanent placements across every function and level. You pay on a hire that sticks past the guarantee window — no retainer, no upfront fee.",
    tag: "Most popular",
    points: ["No upfront fee", "90-day replacement guarantee", "Contingent — no placement, no fee"],
    href: routes.directHire,
  },
  {
    n: "02",
    h: "Contract & contract-to-hire",
    d: "Skilled professionals on flexible terms — scale up, trial before you commit, or convert to permanent. We run payroll and compliance.",
    points: ["Payroll & compliance handled", "Convert to permanent at any point", "Rivago is the employer of record"],
    href: routes.contractStaffing,
  },
  {
    n: "03",
    h: "Temporary staffing",
    d: "On-demand professionals for peaks, seasonal spikes and leave cover. Deployed fast, fully compliant, and scaled down as easily as up.",
    points: ["Scales both ways", "Worker classification carried by us", "Open or fixed term"],
    href: routes.temporaryStaffing,
  },
];

const stages = [
  {
    n: "01",
    k: "Stage 01",
    h: "Calibrate",
    d: "We agree the spec, the bar and the commercials up front, so nothing about the engagement is ambiguous later.",
    out: "Signed-off scorecard",
  },
  {
    n: "02",
    k: "Stage 02",
    h: "Map",
    d: "Your partner works their own practice network — people approached directly, never a job ad reposted at scale.",
    out: "Targeted longlist",
  },
  {
    n: "03",
    k: "Stage 03",
    h: "Screen",
    d: "Everyone you meet has been interviewed against the agreed bar, with written evidence behind the recommendation.",
    out: "Calibrated profiles",
  },
  {
    n: "04",
    k: "Stage 04",
    h: "Panel",
    d: "We carry the admin — scheduling, debriefs, references and compliance — so your team only spends time on decisions.",
    out: "Debriefs & references",
  },
  {
    n: "05",
    k: "Stage 05",
    h: "Placed & guaranteed",
    d: "We close the offer, handle the handover into onboarding, and stay on the line through the guarantee window.",
    out: "Replacement guarantee",
  },
];

const faqs = [
  {
    n: "01",
    q: "What’s the difference between contract, contract-to-hire and direct hire?",
    a: "Contract staffing places a professional on our payroll for a fixed term — you get the skills without the headcount commitment, and we handle payroll, compliance and classification. Contract-to-hire is the same, with the option to convert the person to a permanent employee once they have proven the fit. Direct hire is a permanent placement from day one, sourced on a contingent fee and backed by a replacement guarantee.",
    rail: ["Not sure which", "Your partner", "recommends on call one"],
  },
  {
    n: "02",
    q: "How quickly can you get us qualified candidates?",
    a: "It depends on the role and the market, and we would rather tell you that than quote an average that does not apply to your search. Your partner gives you a realistic timeline at the calibration call, before you commit to anything — and tells you when a brief is not fillable at the number attached to it.",
    rail: ["What you get", "A timeline", "before you commit"],
  },
  {
    n: "03",
    q: "Do you work across multiple countries on one contract?",
    a: "Yes. We contract and employ locally in the markets we operate in, so a multi-country engagement runs on a single agreement rather than a separate entity or vendor per territory. Where you have no entity, our Employer of Record service makes us the legal employer in-country.",
    rail: ["Structure", "One contract", "Local employment"],
  },
  {
    n: "04",
    q: "What happens if a placement doesn’t work out?",
    a: "For direct hire placements we restart the search at no additional fee inside the agreed window. The window is written into the engagement at the start rather than discussed after a problem, so there is nothing to negotiate when it matters.",
    rail: ["Cover", "Contractual", "Agreed upfront"],
  },
  {
    n: "05",
    q: "Do you need exclusivity?",
    a: "No. Run us alongside whoever you like. We would note that several agencies on one role tends to produce the same profiles several times over — but that is your call to make, not a condition of ours.",
    rail: ["Terms", "Non-exclusive", "By default"],
  },
  {
    n: "06",
    q: "Who actually runs my search?",
    a: "One named partner, from the first call to the end of the guarantee window. They take the brief, do the sourcing, write the recommendations and close the offer. There is no delivery pod behind them and no handover you were not told about.",
    rail: ["Ownership", "One partner", "No handoffs"],
  },
];

const perspectives = [
  {
    k: "Hiring playbook",
    h: "What a real scorecard looks like",
    d: "The one-page framework our partners use to calibrate a search before a single name is sourced.",
    m: "Hiring",
    href: routes.article,
  },
  {
    k: "Cost analysis",
    h: "Contract vs. permanent: the true cost",
    d: "A clear-eyed model for when flexible talent beats a permanent hire — and when it quietly costs you more.",
    m: "Strategy",
    href: routes.article,
  },
  {
    k: "Global hiring",
    h: "Hiring across borders without tripping compliance",
    d: "Work authorisation, Employer of Record and payroll, decoded for teams scaling into several regions at once.",
    m: "Global",
    href: routes.article,
  },
];

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Staffing and recruitment services",
  itemListElement: engagements.map((e, i) => ({
    "@type": "ListItem",
    position: i + 1,
    item: {
      "@type": "Service",
      name: e.h,
      description: e.d,
      serviceType: e.h,
      provider: { "@type": "Organization", name: "Rivago Infotech" },
      url: `${SITE_URL}${e.href}`,
    },
  })),
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: `${SITE_URL}/` },
    { "@type": "ListItem", position: 2, name: "Staffing Solutions", item: `${SITE_URL}/services` },
  ],
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

function RecordRule({ n, label, scope }: { n: string; label: string; scope: string }) {
  return (
    <div className="rr">
      <span className="a"><em>{n}</em> · {label}</span>
      <span className="b">{scope}</span>
    </div>
  );
}

function Rail({ items }: { items: string[] }) {
  return (
    <span className="rail">
      <b>{items[0]}</b>
      {items.slice(1).map((t, i) => (
        <span key={t}>{i > 0 && <br />}{t}</span>
      ))}
    </span>
  );
}

export default function ServicesPage() {
  const marquee = [...clientLogos, ...clientLogos];

  return (
    <div className={`rvg ${fraunces.variable} ${publicSans.variable}`}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />

      <a className="skip" href="#main">Skip to content</a>
      <CounselHeader />

      <main id="main">
        {/* 01 — HERO */}
        <section className="rsv-hero" aria-labelledby="h-svh">
          <div className="in">
            <div className="rr">
              <span className="a"><em>Staffing Solutions</em> · How Rivago engages</span>
              <span className="b">Contract · Contract-to-hire · Direct hire</span>
            </div>
            <h1 id="h-svh">Staffing for every role, at every level.</h1>
            <p className="lead">
              Contract, contract-to-hire and direct hire across four countries. A specialist partner
              runs the search end to end — and stays on the line for every role after it.
            </p>
            <div className="cta">
              <Link className="btn pri" href={routes.contactUs}><span>Hire talent</span></Link>
              <a className="tlink" href="#stages">See how a search runs</a>
            </div>
          </div>
        </section>

        {/* 02 — CLIENT MARQUEE */}
        <section className="cli" aria-label="Clients we place for">
          <div className="in">
            <p className="cli-lab">Trusted by the teams we hire for</p>
          </div>
          <div className="cli-mask">
            <div className="cli-track">
              {marquee.map((c, i) => (
                <span className="cli-chip" key={`${c.alt}-${i}`} aria-hidden={i >= clientLogos.length}>
                  {c.alt}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* 03 — WHY */}
        <section className="sec ink" id="why" aria-labelledby="h-why">
          <div className="in">
            <RecordRule n="03" label="Why Rivago" scope="What you are actually buying" />
            <div className="spl">
              <h2 id="h-why">Staffing, done the way it should be.</h2>
              <p className="why-lead">
                Most agencies sell volume and hand your role to a junior. We do the opposite — one
                senior partner owns the search end to end, sources the people who never apply, and puts
                the commitments that matter in writing before you sign.
              </p>
            </div>
            <div className="rsv-why">
              {pillars.map((p) => (
                <div key={p.k}>
                  <p className="why-numr">{p.k}</p>
                  <p>{p.d}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 04 — ENGAGEMENTS */}
        <section className="sec" id="engage" aria-labelledby="h-eng">
          <div className="in">
            <RecordRule n="04" label="How we engage" scope="Three structures, one quality bar" />
            <div className="spl">
              <h2 id="h-eng">Three ways to put a partner on the role.</h2>
              <p className="sub">
                Tell us the role and your partner will recommend the right structure before you commit —
                no pressure to over-buy.
              </p>
            </div>
            <div className="rsv-eng">
              {engagements.map((e) => (
                <article className="eng-c" key={e.n}>
                  <div className="top">
                    <span className="no">{e.n}</span>
                    {e.tag && <span className="tag">{e.tag}</span>}
                  </div>
                  <h3>{e.h}</h3>
                  <p className="de">{e.d}</p>
                  <ul>
                    {e.points.map((p) => <li key={p}><span>{p}</span></li>)}
                  </ul>
                  <div className="foot">
                    <Link className="tlink" href={e.href}>{e.h} in detail</Link>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* 05 — PRACTICES / ROLES */}
        <section className="sec alt" id="roles" aria-labelledby="h-rls">
          <div className="in">
            <RecordRule n="05" label="Roles we fill" scope="One partner per practice" />
            <div className="spl">
              <h2 id="h-rls">Specialists, not generalists.</h2>
              <p className="sub">
                Pick a domain. Every partner runs one practice and has placed inside it for years — so
                they know the titles, the org charts and the people who never apply through a portal.
              </p>
            </div>
            <PracticeTabs />
          </div>
        </section>

        {/* 06 — FIVE STAGES */}
        <section className="sec" id="stages" aria-labelledby="h-proc">
          <div className="in">
            <RecordRule n="06" label="What we actually do" scope="One partner owns every stage" />
            <div className="spl">
              <h2 id="h-proc">Every engagement runs five stages. None of them are a portal.</h2>
              <p className="sub">
                One partner owns every stage — permanent, contract, temporary or retained. Pace varies by
                engagement; each service page states its own terms.
              </p>
            </div>
            <ol className="stages">
              {stages.map((s) => (
                <li key={s.n}>
                  <span className="no">{s.n}</span>
                  <span>
                    <p className="k">{s.k}</p>
                    <h3>{s.h}</h3>
                    <p>{s.d}</p>
                  </span>
                  <span className="out"><b>You get</b>{s.out}</span>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* 07 — GLOBAL DELIVERY
            NOTE — the reference headed this "Five hubs. One handshake." and
            carried a stat row (5 offices / 4 countries / 1,000+ placements /
            10+ years). lib/routes.ts knows about four hubs and three offices,
            so the heading counts what is actually listed below it and the
            stat row is not on the page. Confirm the real figures before any
            of it goes back. */}
        <section className="sec ink" id="delivery" aria-labelledby="h-gd">
          <div className="in">
            <RecordRule n="07" label="Global delivery" scope="Follow-the-sun · one contract" />
            <div className="spl">
              <h2 id="h-gd">Four hubs. One handshake.</h2>
              <p className="sub">
                Wherever the role sits, a local partner runs it — backed by a central research and
                sourcing team. Regional fluency and round-the-clock pipeline, on a single contract.
              </p>
            </div>
            <div className="gd-grid">
              <div>
                <GlobeCanvas />
              </div>
              <div>
                <ul className="gd-hubs">
                  {gdHubs.map((h) => (
                    <li key={h.name}>
                      <span className="c">{h.name}</span>
                      <span className="p">{h.sub}</span>
                    </li>
                  ))}
                </ul>
                <p style={{ marginTop: 24 }}>
                  <Link className="tlink" href={routes.contactUs}>Browse all offices</Link>
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 08 — TEN PRACTICES */}
        <section className="sec" id="practices" aria-labelledby="h-indg">
          <div className="in">
            <RecordRule n="08" label="Practices" scope="Depth, not coverage" />
            <div className="spl">
              <h2 id="h-indg">Ten practices. Real depth in each.</h2>
              <p className="sub">
                Not a list of sectors we would consider. These are the functions we run searches in, each
                owned by a partner who works only that market.
              </p>
            </div>
            <ul className="lg">
              {indgCards.map((c, i) => (
                <li className="row" key={c.title}>
                  <div className="rowin static">
                    <span className="num">{String(i + 1).padStart(2, "0")}</span>
                    <span>
                      <h3>{c.title}</h3>
                      <p className="de">{c.desc}</p>
                    </span>
                    <Rail items={["Focus", ...c.tags.slice(0, 3)]} />
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* 09 — CUSTOMER STORY
            NOTE — the reference's version carried "16 clinical leaders placed
            in one quarter", "90 days brief to a fully-staffed unit" and "100%
            retained at 12 months", plus an initialled attribution. None of it
            is verified, so the story runs as narrative only. Replace with a
            permissioned, attributable case study before launch. */}
        <section className="sec alt" id="story" aria-labelledby="h-story">
          <div className="in">
            <RecordRule n="09" label="Customer story" scope="Narrative pending client sign-off" />
            <div className="spl">
              <h2 id="h-story">Proof, not promises.</h2>
              <p className="sub">
                One engagement, described by the people who ran it. Figures and attribution are withheld
                until the client has approved them.
              </p>
            </div>
            <div className="story">
              <div className="story-h">
                <span>Healthcare · United States</span>
                <span>Second-hospital launch</span>
              </div>
              <div className="story-b">
                <h3>Clinical leadership for a second site, from an empty org chart</h3>
                <p className="story-q">
                  “We were opening a second hospital with beds coming online and no clinical leaders in
                  post. Rivago filled the seats — credentialed, compliant, and still here a year on.”
                </p>
                <p className="story-a">Chief Nursing Officer · name withheld at client’s request</p>
              </div>
            </div>
          </div>
        </section>

        {/* 10 — PERSPECTIVES */}
        <section className="sec" id="perspectives" aria-labelledby="h-persp">
          <div className="in">
            <RecordRule n="10" label="Recent perspectives" scope="Written by the partners" />
            <div className="spl">
              <h2 id="h-persp">Notes from the front line.</h2>
              <p className="sub">
                What our partners are seeing in their markets, written up rather than kept in a pitch
                deck.
              </p>
            </div>
            <div className="rsv-persp">
              {perspectives.map((p) => (
                <Link className="persp-c" href={p.href} key={p.h}>
                  <p className="k">{p.k}</p>
                  <h3>{p.h}</h3>
                  <p>{p.d}</p>
                  <p className="m">{p.m}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* 11 — FAQ */}
        <section className="sec alt" id="faq" aria-labelledby="h-faq">
          <div className="in">
            <RecordRule n="11" label="FAQ" scope="Answered before you have to ask" />
            <div className="spl">
              <h2 id="h-faq">The questions we get on the first call.</h2>
              <p className="sub">
                Straight answers, including where the answer is “it depends” and why.
              </p>
            </div>
            <ul className="lg obj">
              {faqs.map((f) => (
                <li className="row" key={f.n}>
                  <div className="rowin static">
                    <span className="num">{f.n}</span>
                    <span>
                      <h3>{f.q}</h3>
                      <p className="de">{f.a}</p>
                    </span>
                    <Rail items={f.rail} />
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* 12 — CLOSING CTA */}
        <section className="sec ink rsv-cta" id="brief" aria-labelledby="h-cta">
          <div className="in">
            <RecordRule n="12" label="Get started" scope="One business day to a reply" />
            <div className="spl">
              <h2 id="h-cta">Tell us the role. We’ll be back tomorrow.</h2>
              <p className="lead">
                A 30-minute scoping call with a partner — not a portal — and a written shortlist plan
                within one business day.
              </p>
            </div>
            <div className="cta">
              <Link className="btn pri" href={routes.contactUs}><span>Send a brief</span></Link>
              <Link className="tlink" href={routes.viewJobs}>Looking for work instead?</Link>
            </div>
          </div>
        </section>
      </main>

      <CounselFooter />
      <HomeClient />
    </div>
  );
}
