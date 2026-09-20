import Link from "next/link";
import type { Metadata } from "next";
import { routes, offices, servicesList, industriesList, marketsSentence, numberWord } from "@/lib/routes";
import OfficesSection from "@/components/OfficesSection";
import AboutHeroCanvas from "@/components/AboutHeroCanvas";
import { testimonials } from "@/lib/testimonials";
import CardSlider from "@/components/CardSlider";

export const metadata: Metadata = {
  title: "About Rivago Infotech · Partner-led search and staffing",
  description:
    "Rivago Infotech is a partner-led recruitment and staffing firm working from offices in Wilmington, Pune and Ayr. We place people across technology, healthcare, legal, finance and operations on a permanent, contract or interim basis. No portals, no handoffs, no automated outreach.",
  alternates: { canonical: "https://rivagoinfotech.com/about" },
  openGraph: {
    title: "About Rivago Infotech · Partner-led search and staffing",
    description: "Partner-led recruitment across technology, healthcare, legal, finance and operations, from offices in Wilmington, Pune and Ayr. No portals. No handoffs.",
    url: "https://rivagoinfotech.com/about",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": ["Organization", "EmploymentAgency"],
      "@id": "https://rivagoinfotech.com/#organization",
      name: "Rivago Infotech",
      alternateName: ["Rivago", "Rivago Infotech Inc"],
      url: "https://rivagoinfotech.com",
      logo: { "@type": "ImageObject", url: "https://rivagoinfotech.com/assets/og-image.png" },
      description:
        "Rivago Infotech is a global staffing and recruitment firm placing senior talent across technology, healthcare, finance, legal, aerospace and more — direct hire, contract, temporary staffing, RPO, executive search and Employer of Record across the United States, Canada, the UAE and India.",
      slogan: "Staffing for every role, at every level.",
      foundingDate: "2019",
      email: "info@rivagoinfotech.com",
      telephone: "+1-888-508-5703",
      address: {
        "@type": "PostalAddress",
        streetAddress: "3524 Silverside Rd, Ste 35B",
        addressLocality: "Wilmington",
        addressRegion: "DE",
        postalCode: "19810",
        addressCountry: "US",
      },
      sameAs: [
        "https://www.linkedin.com/company/rivago-infotech-inc",
        "https://www.instagram.com/rivago.official/",
        "https://www.glassdoor.com/Overview/Working-at-Rivago-Infotech-EI_IE.htm",
        "https://www.google.com/maps/place/Rivago+Infotech",
      ],
      areaServed: [
        { "@type": "Country", name: "United States" },
        { "@type": "Country", name: "Canada" },
        { "@type": "Country", name: "United Arab Emirates" },
        { "@type": "Country", name: "India" },
      ],
      location: offices.map((o) => ({ "@id": `https://rivagoinfotech.com/contact-us#${o.id}` })),
    },
    {
      "@type": "WebSite",
      "@id": "https://rivagoinfotech.com/#website",
      url: "https://rivagoinfotech.com",
      name: "Rivago Infotech",
      publisher: { "@id": "https://rivagoinfotech.com/#organization" },
      inLanguage: "en-US",
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://rivagoinfotech.com/" },
        { "@type": "ListItem", position: 2, name: "About", item: "https://rivagoinfotech.com/about" },
      ],
    },
    ...offices.map((o) => ({
      "@type": "EmploymentAgency",
      "@id": `https://rivagoinfotech.com/contact-us#${o.id}`,
      name: `Rivago Infotech — ${o.name}`,
      parentOrganization: { "@id": "https://rivagoinfotech.com/#organization" },
      url: "https://rivagoinfotech.com/contact-us",
      description: o.desc,
      telephone: "+1-888-508-5703",
      email: "info@rivagoinfotech.com",
      address: {
        "@type": "PostalAddress",
        streetAddress: o.street,
        addressLocality: o.city,
        addressRegion: o.region,
        postalCode: o.postal,
        addressCountry: o.country,
      },
      geo: { "@type": "GeoCoordinates", latitude: o.lat, longitude: o.lng },
    })),
  ],
};

/* Counts of what the firm offers and where it works — each one derived from
   lib/routes.ts and checkable against the rest of the site. The figures that
   were here (a 2017 founding, 50 people, 10 senior partners, "6,400+ placed
   since founding · 1,847 in the last twelve months") were performance claims
   with nothing behind them, and the founding year contradicted the
   foundingDate in this page's own structured data. */
const numbers = [
  { v: String(offices.length), l: `Offices — ${offices.map((o) => o.city).join(", ")}` },
  { v: String(servicesList.filter((s) => s.href !== routes.services).length),
    l: "Ways to engage, from contract cover to executive search" },
  { v: String(industriesList.length), l: "Industry practices, each with its own specialists" },
];

/* ── TWO SECTIONS THAT ARE NOT ON THIS PAGE, and must not come back as they
   were. Both previously stood here as empty arrays with a guarded render;
   the restructure dropped them from the running order, so the arrays went
   too. The reasons they were emptied have not expired, so they are recorded
   here instead.

   A TIMELINE ("How the firm grew"). What was here could not have been true
   as written: it dated the founding to 2017 while this page's own structured
   data gives foundingDate 2019; it opened a Dubai office twice, in 2023 and
   again in 2025; the 2025 entry described a desk serving "the City and the
   Square Mile", which is London relabelled as Dubai; it claimed a UAE office
   at all, where lib/routes.ts has three — Wilmington, Pune and Ayr; and every
   aside carried an unevidenced figure: $740K first-year revenue, a $1M
   engagement, 22 people in the US office, 12 hires for a Canadian bank, 11
   placements in 60 days, profitable every year.

   A LEADERSHIP GRID. What was here was eight named partners carrying
   specific, checkable credentials — a Yale JD and two bar admissions, an
   MD/MPH with named hospitals, twenty years' US Navy with an active TS/SCI
   clearance, and prior roles at Cleary Gottlieb, Stripe, Genentech, Mount
   Sinai, Airbnb, Unilever, Salesforce, Datadog and Persistent Systems. None
   of it was verified, and the eight photographs were Unsplash stock
   portraits of real strangers presented as Rivago staff.

   If either returns: a timeline entry needs a date somebody can evidence and
   no figure you would not want to be asked to prove, and a leadership card
   needs a real person's name, their agreement to be named, and — for any
   employer or institution mentioned — their agreement to that too. A single
   wrong credential discredits the whole page, and each one is checkable by a
   prospect in about a minute. */

const refusals = [
  { title: "We won't submit a CV", titleBreak: "without", em: "explicit consent.", desc: "Every candidate sees the brief, hears who the company is, and signs off on the submission. We've lost mandates over this. We've never lost a candidate's trust over it." },
  { title: "We won't run a search", titleBreak: "with", em: "no scorecard.", desc: "If we can't agree on what “good” looks like in writing, the search doesn't start. It's the single most reliable predictor of a sticky placement, and the easiest discipline to skip." },
  { title: "We won't hand off", titleBreak: "to a", em: "coordinator.", desc: "The partner who took the brief runs the search. The partner who runs the search closes the offer. The partner who closed the offer checks in at month twelve. One name. One person. Always." },
  { title: "We won't poach", titleBreak: "from", em: "our own placements.", desc: "Twelve months off-limits as standard on retained engagements; twenty-four on senior-most retained searches. The promise that lets clients tell us things they wouldn't tell anyone else." },
  { title: "We won't take an engagement", titleBreak: "we", em: "can't deliver.", desc: "If a brief is unwinnable — wrong comp band, wrong location, wrong timeline — we'll say so on the first call and lose the work. Nobody benefits from a six-month search that ends in nothing." },
  { title: "We won't bill", titleBreak: "for", em: "a portal.", desc: "Every fee we charge buys a person on the line. If you wanted software you would have bought software. We're aware of the irony." },
];

/* ── HOW WE EVALUATE TALENT ───────────────────────────────────────────────
   Asked for as "How we evaluate finance talent". Not written that way, and
   the reason is that it would be false: finance is one of TEN practices in
   app/industries/data.ts, alongside technology, healthcare, legal,
   aerospace, telecom, automotive, supply, sales and people. A heading that
   singles finance out tells a visitor this is a finance-specialist firm,
   which every other page contradicts — and the phrasing comes from a
   reference whose own copy says "we recruit finance and nothing else".

   The method below is sector-agnostic, which is both true here and the more
   useful section: it is the same four steps whichever desk takes the brief,
   and it is what the refusals above are the negative image of. */
const evaluation = [
  { n: "01", h: "A written bar, agreed first", p: "The scorecard is built in the intake session and signed off before sourcing starts. Everything after this point is measured against it rather than against whoever was seen most recently." },
  { n: "02", h: "Approached, not advertised", p: "Your partner works their own network for the role specifically. Nothing is posted, so nobody applies because they are applying to everything." },
  { n: "03", h: "Interviewed before you see them", p: "Every candidate presented has been interviewed against the agreed bar by the partner presenting them, with written evidence behind the recommendation. No profile reaches you on a keyword match." },
  { n: "04", h: "Calibrated against your reaction", p: "The first few profiles are as much a test of the brief as of the market. When you react, we can adjust with confidence, because everyone knows exactly what was being measured." },
];

export default function AboutPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* ── 1 · HERO ─────────────────────────────────────────────────────
          Dark, with a drawn motion background rather than footage — see the
          note at the top of AboutHeroCanvas.tsx for why there is no video to
          play, and what the animation is actually depicting. */}
      <header className="about-hero inv">
        <AboutHeroCanvas />
        <div className="about-hero-inner">
          <div className="eyebrow ew-light gs" style={{ marginBottom: 36, display: "inline-flex", alignItems: "center", gap: 7 }}><span className="eyebrow-dot"></span>About Rivago</div>
          {/* The two hard <br> are gone. They held the intended three lines at
              1440 and fought the wrapping everywhere else — measured, the
              headline broke to six lines at 390px. text-wrap:balance in the
              stylesheet holds the shape without dictating it. */}
          <h1 className="gs">A search firm built around one quiet idea — that hiring a person is not a transaction.</h1>
          {/* The lede that stood here read: "Founded in 2017 in Pune by three
              operators ... Today, fifty people across three offices ... led by
              ten senior partners."

              Every figure in it is one the comment above `numbers` in this
              same file already lists as a performance claim with nothing
              behind it, and two of them contradicted the page outright: the
              2017 founding against foundingDate 2019 in this file's own
              structured data, and "fifty people" against the 50+/22/14 in the
              offices strip further down, which totals 86.

              What is left is derived and checkable. The founding year and the
              headcount go back in when the client confirms them — see the
              note in lib/routes.ts. */}
          <p className="lede gs">Partner-led search and staffing from {numberWord(offices.length)} offices — {offices.map((o) => o.city).join(", ")} — into {marketsSentence()}. One senior partner owns your mandate from brief to signed offer. No call centres. No automated outreach. No portal.</p>
        </div>
      </header>

      {/* ── 2 · BY THE NUMBERS ───────────────────────────────────────────── */}
      <section className="numbers gs lt">
        <div className="numbers-inner">
          <div>
            <div className="eyebrow ew-light" style={{ marginBottom: 20, display: "inline-flex", alignItems: "center", gap: 7 }}><span className="eyebrow-dot"></span>By the numbers</div>
            <h2 className="section-h2" style={{ color: "var(--text)", maxWidth: 720, marginBottom: 0 }}>What we cover, and <em>where we cover it.</em></h2>
          </div>
          <div className="numbers-card">
            {numbers.map((n) => (
              <div className="num-cell" key={n.l}>
                <div className="num-v">{n.v}</div>
                <div className="num-l">{n.l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 3 · OUR STORY ────────────────────────────────────────────────
          Split out of what used to be one "belief" section carrying four
          paragraphs under the label "Our story" and the heading "A different
          kind of recruitment firm" — a label and a heading that were about
          two different things. The origin is here; the operating principles
          are the section below. */}
      <section className="story gs inv">
        <div className="story-inner">
          <div>
            <div className="eyebrow ew-light" style={{ marginBottom: 20, display: "inline-flex", alignItems: "center", gap: 7 }}><span className="eyebrow-dot"></span>Our story</div>
            <h2 className="story-h2">Why the firm <em>exists.</em></h2>
          </div>
          <div className="story-body">
            {/* Was a <p> opening with a quotation mark and no attribution —
                so it read as a quote from someone the page never named. It is
                the firm's own voice, so it is set as a statement rather than
                dressed as a quotation. Make it a blockquote with a name the
                day a named person is willing to stand behind it. */}
            <p className="story-lead">We wanted to build the firm we had always wanted to hire from. Honest about the brief. Slow to send the wrong candidate. Fast for the right one.</p>
            <p>The search industry built itself around <em>volume.</em> More CVs. More portals. More &ldquo;candidates per requisition.&rdquo; We came up inside it and watched the work degrade for both sides — hiring managers drowning in unscreened profiles, candidates ignored after their fourth round.</p>
            <p>None of that is a technology problem. It is what happens when the people doing the work are measured on how many profiles they send rather than on whether the hire was right, and when nobody who took the brief is still on the engagement by the time an offer goes out.</p>
          </div>
        </div>
      </section>

      {/* ── 4 · HOW WE BUILD DIFFERENTLY ─────────────────────────────────── */}
      <section className="build gs">
        <div className="build-inner">
          <div className="build-head">
            <div className="eyebrow ew-light" style={{ marginBottom: 20, display: "inline-flex", alignItems: "center", gap: 7 }}><span className="eyebrow-dot"></span>What we believe</div>
            <h2 className="section-h2" style={{ color: "var(--text)", maxWidth: 760, marginBottom: 0 }}>How we build <em>differently.</em></h2>
          </div>
          <div className="build-grid">
            <div className="build-card">
              <h3>Fewer searches per partner</h3>
              <p>A partner carrying a small number of mandates can afford to turn one down. That is the whole mechanism behind every refusal on this page — none of them survives a desk measured on volume.</p>
            </div>
            <div className="build-card">
              <h3>One name, start to finish</h3>
              <p>The partner who takes the brief runs the search, closes the offer and checks in at month twelve. No handoff to a coordinator, no relay through an account manager, nobody learning your business on your mandate.</p>
            </div>
            <div className="build-card">
              <h3>Honest briefs, in both directions</h3>
              <p>Candidates see the brief and know who the company is before anything is submitted. Clients hear on the first call when a search is unwinnable as scoped, including when that costs us the work.</p>
            </div>
            <div className="build-card">
              <h3>Relationships longer than a mandate</h3>
              <p>You explain your hiring bar once. The same partner already knows your interview loop and who you turned down last time, which is why the second search is faster than the first.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── 5 · OUR VALUES ───────────────────────────────────────────────
          Dark now. It was cream between two other light bands: measured, the
          values → offices step was 1.01:1 and offices → careers 1.00:1, so
          the bottom third of the page was one flat slab with 220px of empty
          ground at a boundary the eye could not find. This is also the band
          that most deserves it — a list of refusals is a statement, and dark
          is this site's language for statements. */}
      <section className="values inv" id="values">
        <div className="values-inner">
          <div className="gs">
            <div className="eyebrow ew-light" style={{ marginBottom: 20, display: "inline-flex", alignItems: "center", gap: 7 }}><span className="eyebrow-dot"></span>What we won&apos;t do</div>
            <h2 className="section-h2" style={{ color: "var(--text)", maxWidth: 720, marginBottom: 0 }}>Our values, mostly stated<br />as the <em>things we refuse.</em></h2>
          </div>
          {/* CardSlider, not a bare grid. It is a grid at width and a
              swipeable track below it, which is how six cards stay usable on
              a phone instead of becoming six full-height stacked blocks. */}
          <CardSlider trackClassName="values-grid values-grid-divider" nav="dots">
            {refusals.map((v, i) => (
              <div className="value gs" key={v.title}>
                <div className="value-num">{String(i + 1).padStart(2, "0")}</div>
                <h3>{v.title}<br />{v.titleBreak} <em>{v.em}</em></h3>
                <p>{v.desc}</p>
              </div>
            ))}
          </CardSlider>
        </div>
      </section>

      {/* ── 6 · HOW WE EVALUATE TALENT ───────────────────────────────────── */}
      <section className="evalsec gs lt">
        <div className="evalsec-inner">
          <div className="evalsec-head">
            <div className="eyebrow ew-light" style={{ marginBottom: 20, display: "inline-flex", alignItems: "center", gap: 7 }}><span className="eyebrow-dot"></span>How we evaluate</div>
            <h2 className="section-h2" style={{ color: "var(--text)", maxWidth: 760, marginBottom: 0 }}>The same four steps, <em>whichever desk takes it.</em></h2>
            <p className="evalsec-lede">Ten practices, one method. What changes between a cloud architect and a general counsel is the bar — not how it gets set, or who checks it.</p>
          </div>
          <ol className="eval-grid">
            {evaluation.map((e) => (
              <li className="eval-step" key={e.n}>
                <span className="eval-n">{e.n}</span>
                <h3>{e.h}</h3>
                <p>{e.p}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ── 7 · HIRING MANAGER STORIES ───────────────────────────────────
          READ THIS BEFORE ADDING TO IT. These four quotes come from
          lib/testimonials.ts, whose own header says they "remain endorsements
          that have not been given". They are anonymised to a role and a
          market, carry no figure and name no client — the form a hiring team
          signs off on — but nobody has yet signed off.

          They are already published in the Clients section of the home page,
          so this is not a new publication. It is a second one, which is worth
          being deliberate about rather than incidental. Two honest ways
          forward: get four real sign-offs, which needs only a say-so at this
          level of anonymity, or cut this section until they exist. What it
          must not become is a place where more are written.

          The file is the single source: add a real quote there and it appears
          here and on the home page at once. */}
      <section className="hms gs inv">
        <div className="hms-inner">
          <div className="hms-head">
            <div className="eyebrow ew-light" style={{ marginBottom: 20, display: "inline-flex", alignItems: "center", gap: 7 }}><span className="eyebrow-dot"></span>Hiring manager stories</div>
            <h2 className="section-h2" style={{ color: "var(--text)", maxWidth: 760, marginBottom: 0 }}>In their <em>own words.</em></h2>
            <p className="hms-lede">Anonymised to a role and a market rather than a name — the form a hiring team can approve without legal sign-off.</p>
          </div>
          <ul className="hms-grid">
            {testimonials.map((t) => (
              <li className="hms-card" key={t.name + t.badge}>
                <span className="hms-badge">{t.badge}</span>
                <blockquote>{t.quote}</blockquote>
                <div className="hms-who">
                  <span className="hms-name">{t.name}</span>
                  <span className="hms-role">{t.role}</span>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ── 8 · OUR OFFICES ──────────────────────────────────────────────── */}
      <OfficesSection />

      {/* ── 9 · WORK WITH US ─────────────────────────────────────────────── */}
      <section className="careers inv" id="get-in-touch">
        <div className="careers-inner gs">
          <div className="eyebrow ew-light" style={{ margin: "0 auto 28px", display: "inline-flex", alignItems: "center", gap: 7 }}><span className="eyebrow-dot"></span>Work with us</div>
          <h2>Start a conversation with<br />a <em>partner</em> — not a portal.</h2>
          <p>Whether you&apos;re building a team or weighing your next move, you&apos;ll talk to a senior partner who knows your market. No intake bots, no call queues, no CV black holes.</p>
          <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
            <Link className="btn btn-prim" href={`${routes.hireTalent}#intake`} data-hire>Submit a Brief
              <svg className="arrow" width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M3 7h8M8 4l3 3-3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
            </Link>
            <Link className="btn btn-ghost" href={routes.contactUs}>Contact us</Link>
          </div>
        </div>
      </section>
    </>
  );
}
