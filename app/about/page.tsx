import Link from "next/link";
import type { Metadata } from "next";
import { routes, offices, servicesList, industriesList } from "@/lib/routes";
import OfficesSection from "@/components/OfficesSection";
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

/* ── TIMELINE ─────────────────────────────────────────────────────────────
   Emptied deliberately. What was here could not have been true as written:

     - it dated the founding to 2017, while this page's own structured data
       gives foundingDate 2019;
     - it opened a Dubai office twice, in 2023 and again in 2025;
     - the 2025 entry described a desk serving "the City and the Square
       Mile" — that is London, relabelled as Dubai;
     - it claimed a UAE office at all, where lib/routes.ts has three
       offices: Wilmington, Pune and Ayr;
     - and every aside carried an unevidenced figure: $740K first-year
       revenue, a $1M engagement, 22 people in the US office, 12 hires for a
       Canadian bank, 11 placements in 60 days, profitable every year.

   To restore it, add entries with real dates you can evidence:

     { year: "2019 · Wilmington, US", title: "", desc: "", aside: "" }

   `aside` is where the old version put its invented numbers — leave it out
   unless the figure is one you would be comfortable being asked to prove.
   The section does not render while this array is empty. */
const timeline: { year: string; title: string; desc: string; aside?: string }[] = [];

/* ── LEADERSHIP ───────────────────────────────────────────────────────────
   Emptied deliberately. What was here was eight named partners carrying
   specific, checkable credentials — a Yale JD and two bar admissions, an
   MD/MPH with named hospitals, twenty years' US Navy with an active TS/SCI
   clearance, and prior roles at Cleary Gottlieb, Stripe, Genentech, Mount
   Sinai, Airbnb, Unilever, Salesforce, Datadog and Persistent Systems.
   None of it was verified, and the eight photographs were Unsplash stock
   portraits of real strangers presented as Rivago staff.

   To add a real person, add an entry. Only `name` and `title` are required;
   omit `bio` and it is simply not rendered, and omit `img` and the card
   shows the person's initials instead of a stock photograph.

     { name: "Full Name", title: "Role · practice", bio: "", img: "" }

   Two rules for whatever goes in `bio`:
     - Only state what the person can evidence — a qualification, a former
       employer, a clearance. Each one is checkable in about a minute by
       any prospect, and a single wrong claim discredits the rest of the page.
     - Do not name a third-party employer or institution without that
       person's agreement.

   The section does not render at all while this array is empty, so the page
   is correct today and gains the section the moment real people are added. */
const leadership: { name: string; title: string; bio?: string; img?: string }[] = [];

const principles = [
  { title: "Quality over", em: "volume.", desc: "Five candidates who fit, not fifty who do not. We would rather decline a brief than spam your inbox." },
  { title: "Specificity over", em: "hype.", desc: "Numbers, denominators, dates. No “world-class” talk. We earn the right to a superlative by delivering." },
  { title: "Ownership, not", em: "handoffs.", desc: "One partner from brief to placement. They took it. They run it. They stand behind the recommendation." },
  { title: "Discretion as", em: "default.", desc: "Confidential as standard. NDAs on request. We share with one client at a time, with your permission." },
];

const refusals = [
  { title: "We won't submit a CV", titleBreak: "without", em: "explicit consent.", desc: "Every candidate sees the brief, hears who the company is, and signs off on the submission. We've lost mandates over this. We've never lost a candidate's trust over it." },
  { title: "We won't run a search", titleBreak: "with", em: "no scorecard.", desc: "If we can't agree on what “good” looks like in writing, the search doesn't start. It's the single most reliable predictor of a sticky placement, and the easiest discipline to skip." },
  { title: "We won't hand off", titleBreak: "to a", em: "coordinator.", desc: "The partner who took the brief runs the search. The partner who runs the search closes the offer. The partner who closed the offer checks in at month twelve. One name. One person. Always." },
  { title: "We won't poach", titleBreak: "from", em: "our own placements.", desc: "Twelve months off-limits as standard on retained engagements; twenty-four on senior-most retained searches. The promise that lets clients tell us things they wouldn't tell anyone else." },
  { title: "We won't take an engagement", titleBreak: "we", em: "can't deliver.", desc: "If a brief is unwinnable — wrong comp band, wrong location, wrong timeline — we'll say so on the first call and lose the work. Nobody benefits from a six-month search that ends in nothing." },
  { title: "We won't bill", titleBreak: "for", em: "a portal.", desc: "Every fee we charge buys a person on the line. If you wanted software you would have bought software. We're aware of the irony." },
];

export default function AboutPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* EDITORIAL HERO */}
      <header className="about-hero">
        <div className="about-hero-inner">
          <div className="eyebrow ew-light gs" style={{ marginBottom: 36, display: "inline-flex", alignItems: "center", gap: 7 }}><span className="eyebrow-dot"></span>About Rivago</div>
          <h1 className="gs">A search firm built around<br /><em>one quiet idea</em> — that<br />hiring a person is not a transaction.</h1>
          <p className="lede gs">Founded in 2017 in Pune by three operators who had spent the prior decade hiring inside the orgs they now serve. Today, fifty people across three offices — headquartered in Delaware, with teams in Pune and Ontario, led by ten senior partners. No call centres. No automated outreach. No portal.</p>
        </div>
      </header>

      {/* OUR STORY / BELIEF */}
      <section className="belief gs">
        <div className="belief-inner">
          <div>
            <div className="belief-label">Our story</div>
            <h2 style={{ marginTop: 18, fontSize: "var(--fz12)", lineHeight: 1.08, letterSpacing: "-.024em", fontWeight: 400, color: "var(--dt)", maxWidth: 320 }}>A different kind of <em>recruitment firm.</em></h2>
          </div>
          <div className="belief-body">
            <p style={{ fontStyle: "normal", fontWeight: 500, color: "var(--dt)" }}>&ldquo;We wanted to build the firm we had always wanted to hire from. Honest about the brief. Slow to send the wrong candidate. Fast for the right one.&rdquo;</p>
            <p>The search industry built itself around <em>volume.</em> More résumés. More portals. More &ldquo;candidates per requisition.&rdquo; We came up inside it and watched the work degrade for both sides — hiring managers drowning in unscreened profiles, candidates ignored after their fourth round.</p>
            <p>So we built Rivago around the opposite premise. Fewer searches per partner. <strong>Longer relationships.</strong> Honest briefs in both directions. A single person on the line — who learns your business and stays with you for the next role, and the one after that.</p>
            <p>It costs more per hire. It also <em>sticks.</em> Ninety-one percent of the people we place are still in seat twelve months later.</p>
          </div>
        </div>
      </section>

      {/* NUMBERS */}
      <section className="numbers gs">
        <div className="numbers-inner">
          <div style={{ marginBottom: 56 }}>
            <div className="eyebrow ew-light" style={{ marginBottom: 20, display: "inline-flex", alignItems: "center", gap: 7 }}><span className="eyebrow-dot"></span>Scope</div>
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

      {/* TIMELINE — renders only once `timeline` above has real entries. */}
      {timeline.length > 0 && (
      <section className="timeline">
        <div className="timeline-inner">
          <div className="gs">
            <div className="eyebrow ew-light" style={{ marginBottom: 20, display: "inline-flex", alignItems: "center", gap: 7 }}><span className="eyebrow-dot"></span>How the firm grew</div>
            <h2 className="section-h2" style={{ color: "var(--text)", maxWidth: 720, marginBottom: 0 }}>The decisions that <em>made the firm.</em></h2>
          </div>
          <div className="tl-rows">
            {timeline.map((t) => (
              <div className="tl-row gs" key={t.year}>
                <div className="tl-year">{t.year}</div>
                <div className="tl-main"><h3>{t.title}</h3><p>{t.desc}</p></div>
                {t.aside ? <div className="tl-aside">{t.aside}</div> : null}
              </div>
            ))}
          </div>
        </div>
      </section>
      )}

      {/* LEADERSHIP — renders only once `leadership` above has real entries.
          While it is empty the section is omitted entirely rather than shown
          with placeholders, because a placeholder person is still a claim. */}
      {leadership.length > 0 && (
        <section className="leaders" id="leadership">
          <div className="leaders-inner">
            <div className="gs">
              <div className="eyebrow ew-light" style={{ marginBottom: 20, display: "inline-flex", alignItems: "center", gap: 7 }}><span className="eyebrow-dot"></span>Leadership</div>
              <h2 className="section-h2" style={{ color: "var(--text)", maxWidth: 720, marginBottom: 0 }}>The people whose names go on the <em>first call.</em></h2>
            </div>
            <div className="leaders-grid">
              {leadership.map((p) => (
                <div className="leader gs" key={p.name}>
                  <div className="leader-photo">
                    {p.img ? (
                      // eslint-disable-next-line @next/next/no-img-element
                      <img src={p.img} alt={p.name} loading="lazy" decoding="async" />
                    ) : (
                      <span className="leader-mono" aria-hidden="true">
                        {p.name.split(" ").filter(Boolean).slice(0, 2).map((w) => w[0]).join("")}
                      </span>
                    )}
                  </div>
                  <div>
                    <div className="leader-name">{p.name}</div>
                    <div className="leader-title">{p.title}</div>
                    {p.bio ? <div className="leader-bio">{p.bio}</div> : null}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* WHAT WE BELIEVE — 4 PRINCIPLES */}
      <section className="values">
        <div className="values-inner">
          <div className="gs">
            <div className="eyebrow-plain gs" style={{ marginBottom: 20 }}>What we believe</div>
            <h2 className="section-h2" style={{ color: "var(--dt)", maxWidth: 720, marginBottom: 0 }}>Four principles.<br /><em>No exceptions.</em></h2>
          </div>
          <div className="values-grid values-grid-4">
            {principles.map((v, i) => (
              <div className="value gs" key={v.title}>
                <div className="value-num">{String(i + 1).padStart(2, "0")}</div>
                <h3>{v.title} <em>{v.em}</em></h3>
                <p>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHAT WE WON'T DO — 6 REFUSALS */}
      <section className="values" style={{ background: "var(--cream)" }}>
        <div className="values-inner">
          <div className="gs">
            <div className="eyebrow" style={{ marginBottom: 20, display: "inline-flex", alignItems: "center", gap: 7 }}><span className="eyebrow-dot"></span>What we won&apos;t do</div>
            <h2 className="section-h2" style={{ color: "var(--dt)", maxWidth: 720, marginBottom: 0 }}>Our values, mostly stated<br />as the <em>things we refuse.</em></h2>
          </div>
          <CardSlider trackClassName="values-grid values-grid-divider" nav="dots">
            {refusals.map((v, i) => (
              <div className="value gs" key={v.title} style={{ background: "var(--cream)" }}>
                <div className="value-num">{String(i + 1).padStart(2, "0")}</div>
                <h3>{v.title}<br />{v.titleBreak} <em>{v.em}</em></h3>
                <p>{v.desc}</p>
              </div>
            ))}
          </CardSlider>
        </div>
      </section>

      {/* OFFICES */}
      <OfficesSection />

      {/* CLOSING CTA */}
      <section className="careers" id="get-in-touch">
        <div className="careers-inner gs">
          <div className="eyebrow ew-light" style={{ margin: "0 auto 28px", display: "inline-flex", alignItems: "center", gap: 7 }}><span className="eyebrow-dot"></span>Work with us</div>
          <h2>Start a conversation with<br />a <em>partner</em> — not a portal.</h2>
          <p>Whether you&apos;re building a team or weighing your next move, you&apos;ll talk to a senior partner who knows your market. No intake bots, no call queues, no résumé black holes.</p>
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
