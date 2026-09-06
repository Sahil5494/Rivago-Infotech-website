import type { Metadata } from "next";
import Link from "next/link";
import { Archivo, IBM_Plex_Mono } from "next/font/google";
import { routes } from "@/lib/routes";
import { SITE_URL } from "@/lib/site";
import HomeClient from "./_home/HomeClient";
import BriefForm from "./_home/BriefForm";
import "./home.css";

/* Two widths from one family — display sits at wdth 125, everything else at 100.
   Scoped to this route so the other pages don't pay for fonts they don't use. */
const archivo = Archivo({
  subsets: ["latin"],
  axes: ["wdth"],
  variable: "--font-archivo",
  display: "swap",
});
const plexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-plex-mono",
  display: "swap",
});

const DESCRIPTION =
  "A senior-only staffing firm. One partner owns your search from the first call to day ninety — direct hire, contract, executive search, RPO and Employer of Record across the US, Canada, the UAE and India.";

export const metadata: Metadata = {
  title: "Rivago Infotech — A shortlist you can act on",
  description: DESCRIPTION,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    siteName: "Rivago Infotech",
    title: "Rivago Infotech — A shortlist you can act on",
    description: DESCRIPTION,
    url: "/",
    images: [{ url: "/assets/og-image.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Rivago Infotech — A shortlist you can act on",
    description: DESCRIPTION,
    images: ["/assets/og-image.png"],
  },
};

/* ---------------------------------------------------------------
   Content. Every string here is either a description of how Rivago
   works or a question a buyer asks. There are deliberately no
   placement counts, retention rates, delivery times or client
   results on this page — see the launch checklist in the PR.
   --------------------------------------------------------------- */

const failures = [
  {
    n: "01",
    h: "The screening happens on your calendar",
    d: "Candidates arrive matched on keywords, not calibrated against the spec. The first real assessment of fit is the interview you run — so your team absorbs the work the agency was paid to do.",
    rail: ["You pay twice", "Once in fee", "Once in hours"],
  },
  {
    n: "02",
    h: "Comp surfaces at offer stage",
    d: "Nobody establishes the number against the live market before sourcing begins. Weeks of process end in a decline that was predictable on day one — and the role reopens at the back of the queue.",
    rail: ["You lose weeks", "Predictable", "Preventable"],
  },
  {
    n: "03",
    h: "Nobody owns the outcome",
    d: "Four agencies briefed, the same twelve profiles from all of them, and a coordinator on each side who never spoke to the hiring manager. Accountability is distributed until it disappears.",
    rail: ["You own it", "By default", "Not by choice"],
  },
];

const steps = [
  {
    k: "Step 01 · 45 minutes",
    h: "Calibration",
    p: "Must-haves, comp band, right-to-work and team chemistry — documented with the hiring manager before anything moves. If the number won’t fill the seat, you hear it here.",
    out: "signed brief",
    on: true,
  },
  {
    k: "Step 02 · Sourcing",
    h: "Search and screen",
    p: "Referrals, direct approach and our own network. Every candidate screened against the spec, the band and notice period — not matched on keywords.",
    out: "screened long list",
    on: true,
  },
  {
    k: "Step 03 · Shortlist",
    h: "Three to five, with reasoning",
    p: "Each candidate comes with a written recommendation from the partner who took the brief — strengths, risks, motivation and an honest view on close probability.",
    out: "shortlist + written rationale",
    on: true,
  },
  {
    k: "Step 04 · To day 90",
    h: "Place and hold",
    p: "Offer negotiation, references, onboarding handover. We stay on the line to day ninety and replace, free, if the fit is wrong.",
    out: "90-day guarantee",
    on: false,
  },
];

const engagements = [
  {
    n: "01",
    h: "I’m replacing a leader, confidentially.",
    d: "Retained search with weekly written progress. The market never learns the seat is open.",
    rail: ["Executive Search", "Retained · confidential", "CTO · CFO · CPO"],
    facets: [
      ["Structure", "Retained, staged"],
      ["Employment", "Your payroll"],
      ["Reporting", "Weekly, written"],
    ],
    href: routes.executiveSearch,
  },
  {
    n: "02",
    h: "I need a permanent hire that sticks.",
    d: "Contingent fee, paid on a hire that lasts. Replaced free if it isn’t right inside ninety days.",
    rail: ["Direct Hire", "Contingent", "90-day guarantee"],
    facets: [
      ["Structure", "Contingent — no placement, no fee"],
      ["Employment", "Your payroll"],
      ["Cover", "90-day replacement"],
    ],
    href: routes.directHire,
  },
  {
    n: "03",
    h: "I need skilled people for a fixed project.",
    d: "We carry payroll, compliance and worker classification. You get capacity without the employment risk.",
    rail: ["Contract Staffing", "We are the employer", "Timesheet-billed"],
    facets: [
      ["Structure", "Hourly, timesheet-billed"],
      ["Employment", "Rivago is employer of record"],
      ["Compliance", "Classification handled"],
    ],
    href: routes.contractStaffing,
  },
  {
    n: "04",
    h: "I want to see the work before I commit.",
    d: "A defined trial period with conversion terms agreed before day one, not negotiated at the end.",
    rail: ["Contract-to-Hire", "Terms agreed upfront", "Defined conversion"],
    facets: [
      ["Structure", "Hourly, then conversion fee"],
      ["Employment", "Ours, then yours"],
      ["Terms", "Set at engagement"],
    ],
    href: routes.contractStaffing,
  },
  {
    n: "05",
    h: "I have a seasonal or leave-cover gap.",
    d: "On-demand cover for peaks and absence, scaled up or down as the work changes.",
    rail: ["Temporary Staffing", "Scales both ways", "We are the employer"],
    facets: [
      ["Structure", "Hourly"],
      ["Employment", "Rivago"],
      ["Term", "Open or fixed"],
    ],
    href: routes.temporaryStaffing,
  },
  {
    n: "06",
    h: "My talent function can’t keep up.",
    d: "An embedded team running all or part of your hiring — your brand, your workflow, our capacity.",
    rail: ["RPO", "Monthly programme", "Embedded team"],
    facets: [
      ["Structure", "Monthly programme fee"],
      ["Employment", "Your payroll"],
      ["Branding", "Yours throughout"],
    ],
    href: routes.rpo,
  },
  {
    n: "07",
    h: "I need to hire where we have no entity.",
    d: "We become the legal employer in-country — payroll, tax, benefits and contracts.",
    rail: ["Employer of Record", "No entity needed", "US · CA · UAE · IN"],
    facets: [
      ["Structure", "Per-employee monthly"],
      ["Employment", "Rivago, in-country"],
      ["Scope", "Payroll, tax, benefits"],
    ],
    href: routes.employerOfRecord,
  },
];

/* NOTE — the ten practice names and the role titles beneath them are carried
   over from the reference build and are PENDING CLIENT CONFIRMATION. They are
   descriptions of seats, not counts or outcomes, but they still assert what
   Rivago has recruited for. Confirm or amend before launch. */
const practices = [
  {
    n: "01",
    h: "Technology",
    d: "Platform, cloud infrastructure, data and security. The hard part is that the strongest candidates are never looking — they are found by direct approach or not at all.",
    seats: ["Director, Platform / SRE", "Chief Technology Officer"],
  },
  {
    n: "02",
    h: "Finance & Banking",
    d: "Risk, compliance, treasury and FP&A. Comp bands move faster than job specs do, so calibration has to happen against this quarter’s market, not last year’s.",
    seats: ["Chief Financial Officer", "Head of Securities & M&A"],
  },
  {
    n: "03",
    h: "Healthcare & Life Sciences",
    d: "Clinical leadership, nursing and allied health. Licensure and in-market registration decide whether a candidate is real — so we check it before submission, not at offer.",
    seats: ["Chief Medical Officer", "Director, Clinical Operations"],
  },
  {
    n: "04",
    h: "Engineering & Manufacturing",
    d: "Plant, quality and manufacturing engineering leadership. Titles travel badly between companies here, so we screen on process ownership rather than job title.",
    seats: ["Director of Manufacturing Engineering", "Director, Field Operations"],
  },
  {
    n: "05",
    h: "Telecommunications",
    d: "Core network, RAN and 5G engineering. Genuinely thin pools — a shortlist of three is a good outcome, and anyone promising fifty is not reading the market.",
    seats: ["Head of 5G Core Engineering"],
  },
  {
    n: "06",
    h: "Aerospace & Defence",
    d: "Cleared and non-cleared engineering, quality and programme roles. Clearance and eligibility are verified at screening, because discovering them late costs a whole search.",
    seats: ["Director, Cleared Cybersecurity", "Director, Aerospace Manufacturing"],
  },
  {
    n: "07",
    h: "Legal & Compliance",
    d: "In-house counsel, contracts and regulatory. Small candidate universe, long notice periods — timelines have to be planned backwards from the start date.",
    seats: ["Head of Commercial / Privacy"],
  },
  {
    n: "08",
    h: "Supply Chain & Operations",
    d: "Procurement, logistics and S&OP. The difficulty is scope — two roles with the same title can be entirely different jobs, so the brief does the heavy lifting.",
    seats: ["Director, S&OP"],
  },
  {
    n: "09",
    h: "Sales & Marketing",
    d: "Revenue leadership, growth and demand. Easy to fill badly and hard to fill well — we screen on evidence of number-carrying, not on narrative.",
    seats: ["Chief Revenue Officer"],
  },
  {
    n: "10",
    h: "People & HR",
    d: "HR business partnering, talent acquisition, reward and L&D. Often the hire that unblocks every other hire, which makes the timeline unforgiving.",
    seats: ["Chief People Officer", "Director of L&D"],
  },
];

const objections = [
  {
    n: "01",
    q: "“You’re small. Can you actually deliver?”",
    a: "A large agency gives you a senior name in the pitch and a delivery pod afterwards. We are small enough that the person who takes your brief is the person who closes it — and small enough that you’d notice immediately if that stopped being true.",
    rail: ["What it means", "No delivery desk", "No handoff"],
  },
  {
    n: "02",
    q: "“Can you handle the volume?”",
    a: "Not unlimited volume, and we’d rather say so. We cap the number of live searches per partner. If a mandate is beyond what we can run properly, we will tell you at the first call instead of taking it and under-serving it.",
    rail: ["What it means", "Capacity is finite", "Stated upfront"],
  },
  {
    n: "03",
    q: "“What does it actually cost?”",
    a: "Direct hire is contingent — no placement, no fee. Executive search is retained and staged. Contract is billed hourly against an agreed rate card. Structures are agreed before the first search opens, never renegotiated at offer stage.",
    rail: ["What it means", "Agreed at engagement", "No rebate surprises"],
  },
  {
    n: "04",
    q: "“What if the hire doesn’t work out?”",
    a: "For direct hire placements we restart the search at no additional fee inside the agreed window. The window is written into the engagement rather than discussed after a problem.",
    rail: ["What it means", "90-day replacement", "Contractual"],
  },
  {
    n: "05",
    q: "“Do you need exclusivity?”",
    a: "No. Run us alongside whoever you like. We’d note that four agencies on one role tends to produce the same twelve profiles four times — but that is your call to make, not a condition of ours.",
    rail: ["What it means", "Non-exclusive", "By default"],
  },
  {
    n: "06",
    q: "“How is this different from our current agency?”",
    a: "The screening happens before the shortlist rather than on your calendar. Every candidate is checked against the spec, the comp band and right-to-work before you see them — which is why three to five arrive instead of fifty.",
    rail: ["What it means", "Screened, then sent", "Not sent, then screened"],
  },
];

const procurement = [
  ["Contracting", "MSA or your paper. Rate cards and fee structures agreed before the first search opens, with no rebate surprises."],
  ["Worker classification", "On contract and temporary engagements Rivago is the employer of record and carries classification, payroll and statutory obligations."],
  ["Right to work", "Verified before submission in every market we operate in — checked at screening, not at offer."],
  ["Candidate data", "Handled under the data protection regime of the hiring market, retained only as long as the engagement requires, and available for deletion on request."],
  ["In-market entities", "We contract and employ locally in the US, Canada, the UAE and India — so hiring in any of them needs no entity on your side."],
  ["Vendor onboarding", "Insurance certificates, references and compliance documentation supplied at onboarding. Supplier-portal delivery supported."],
];

const markets = [
  ["United States", "New York · Delaware"],
  ["Canada", "Ontario"],
  ["UAE", "Dubai"],
  ["India", "Pune · Hyderabad"],
];

const clients = ["HCL", "Hexaware", "Genpact", "Persistent", "Synechron", "Saama", "InfoVision"];

const shortlist = [
  { n: "01", nm: "A. K.", mt: "9 yrs · Kubernetes, Terraform · 2 wks", w: "96%", dl: ".34s", st: "Submit" },
  { n: "02", nm: "M. R.", mt: "11 yrs · AWS, SRE lead · immediate", w: "91%", dl: ".60s", st: "Submit" },
  { n: "03", nm: "S. D.", mt: "7 yrs · Platform, GCP · 4 wks", w: "84%", dl: ".86s", st: "Submit" },
  { n: "04", nm: "J. P.", mt: "12 yrs · comp above band", w: "58%", dl: "1.18s", st: "Held", q: true },
];

const orgJsonLd = {
  "@context": "https://schema.org",
  "@type": ["Organization", "EmploymentAgency"],
  name: "Rivago Infotech",
  url: SITE_URL,
  description: DESCRIPTION,
  areaServed: [
    { "@type": "Country", name: "United States" },
    { "@type": "Country", name: "Canada" },
    { "@type": "Country", name: "United Arab Emirates" },
    { "@type": "Country", name: "India" },
  ],
};

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Staffing and recruitment engagement models",
  itemListElement: engagements.map((e, i) => ({
    "@type": "ListItem",
    position: i + 1,
    item: {
      "@type": "Service",
      name: e.rail[0],
      description: e.d,
      serviceType: e.rail[0],
      provider: { "@type": "Organization", name: "Rivago Infotech" },
      url: `${SITE_URL}${e.href}`,
    },
  })),
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [{ "@type": "ListItem", position: 1, name: "Home", item: `${SITE_URL}/` }],
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: objections.map((o) => ({
    "@type": "Question",
    name: o.q.replace(/[“”]/g, ""),
    acceptedAnswer: { "@type": "Answer", text: o.a },
  })),
};

function RecordRule({ n, label, scope }: { n: string; label: string; scope: string }) {
  return (
    <div className="rr">
      <span className="a">
        <em>{n}</em> · {label}
      </span>
      <span className="b">{scope}</span>
    </div>
  );
}

function Rail({ items }: { items: string[] }) {
  return (
    <span className="rail">
      <b>{items[0]}</b>
      {items.slice(1).map((t, i) => (
        <span key={t}>
          {i > 0 && <br />}
          {t}
        </span>
      ))}
    </span>
  );
}

export default function HomePage() {
  return (
    <div className={`rvg ${archivo.variable} ${plexMono.variable}`}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />

      <a className="skip" href="#main">
        Skip to content
      </a>

      <header className="rvg-hdr" id="rvgHdr">
        <nav className="nav" aria-label="Primary">
          <Link className="logo" href={routes.home}>
            Rivago<span>.</span>
          </Link>
          <ul className="nlinks" id="rvgLinks">
            <li><a href="#engage">Hire talent</a></li>
            <li><a href="#method">How we work</a></li>
            <li><a href="#practices">Practices</a></li>
            <li><a href="#objections">Objections</a></li>
            <li><a href="#working">Working with us</a></li>
          </ul>
          <div className="nact">
            <Link className="quiet" href={routes.viewJobs}>
              Find work
            </Link>
            <a className="btn pri" href="#brief">
              <span>Send a brief</span>
            </a>
            <button className="burger" id="rvgBurger" type="button" aria-label="Open menu" aria-expanded="false" aria-controls="rvgLinks">
              <i /><i /><i />
            </button>
          </div>
        </nav>
      </header>

      <main id="main">
        {/* 01 — HERO */}
        <section className="hero" aria-labelledby="h-hero">
          <div className="in">
            <div className="rr">
              <span className="a">
                <em>Rivago Infotech</em> · Staffing &amp; Talent
              </span>
              <span className="b">US · Canada · UAE · India</span>
            </div>
            <div className="hgrid">
              <div>
                <h1 id="h-hero">A shortlist you can act on.</h1>
                <p className="hsub">
                  Senior recruiters only. One partner owns your search from the first call to day ninety — no delivery
                  desk, no handoffs, no junior learning on your role.
                </p>
                <p className="cap">We run a limited number of searches at a time.</p>
                <div className="hcta">
                  <a className="btn pri" href="#brief">
                    <span>Send a brief</span>
                  </a>
                  <a className="tlink" href="#method">
                    How a search runs
                  </a>
                </div>
              </div>
              <div className="art-stage">
                <div className="art" id="rvgArt" role="img" aria-label="Illustration of a Rivago shortlist: four screened candidates for a Director, Platform and SRE search in Toronto — three marked submit, one held because compensation sits above the band.">
                  <div className="art-h">
                    <span>Shortlist · Director, Platform / SRE</span>
                    <span>Toronto</span>
                  </div>
                  {shortlist.map((c) => (
                    <div className="art-r" key={c.n}>
                      <span className="n">{c.n}</span>
                      <div>
                        <p className="nm">{c.nm}</p>
                        <p className="mt">{c.mt}</p>
                        <div className="bar" style={{ ["--w" as string]: c.w, ["--dl" as string]: c.dl }}>
                          <i />
                        </div>
                      </div>
                      <span className={c.q ? "st q" : "st"}>{c.st}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="marks">
              <span className="lb">Placing for</span>
              <ul>
                {clients.map((c) => (
                  <li key={c}>{c}</li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* 02 — THE PROBLEM */}
        <section className="sec bone" id="problem" aria-labelledby="h-problem">
          <div className="in">
            <RecordRule n="02" label="The problem" scope="Why searches stall" />
            <h2 className="stmt" id="h-problem">
              Fifty CVs is not a shortlist. It&rsquo;s the search handed back to you.
            </h2>
            <p className="stmt2">And the partner you briefed isn&rsquo;t the one who sent them.</p>
            <ul className="lg">
              {failures.map((f) => (
                <li className="row" key={f.n}>
                  <div className="rowin static">
                    <span className="num">{f.n}</span>
                    <span>
                      <h3>{f.h}</h3>
                      <p className="de">{f.d}</p>
                    </span>
                    <Rail items={f.rail} />
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* 03 — METHOD */}
        <section className="sec" id="method" aria-labelledby="h-method">
          <div className="in">
            <RecordRule n="03" label="How a search runs" scope="Brief → shortlist · one owner throughout" />
            <div className="spl">
              <h2 id="h-method">We calibrate before we source.</h2>
              <p className="sub">
                One partner takes the brief and stays on it to day ninety. Every candidate is screened against the spec,
                the comp band and right-to-work before it reaches your inbox.
              </p>
            </div>
            <div className="tl">
              <div className="spine" aria-hidden="true">
                <i />
              </div>
              <ol>
                {steps.map((s) => (
                  <li className={s.on ? "on" : undefined} key={s.k}>
                    <p className="k">{s.k}</p>
                    <h3>{s.h}</h3>
                    <p>{s.p}</p>
                    <p className="out">
                      <b>Output:</b> {s.out}
                    </p>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </section>

        {/* 04 — WHAT YOU RECEIVE */}
        <section className="sec bone" id="deliverables" aria-labelledby="h-dlv">
          <div className="in">
            <RecordRule n="04" label="What you receive" scope="Three documents, every search" />
            <div className="spl">
              <h2 id="h-dlv">Every shortlist arrives with its working shown.</h2>
              <p className="sub">
                Not a folder of CVs. Three documents per candidate, so you can see the reasoning rather than take the
                recommendation on trust.
              </p>
            </div>
            <div className="dlv">
              <article className="doc">
                <div className="doc-h">
                  <span>01 · Scorecard</span>
                  <span>Per candidate</span>
                </div>
                <div className="doc-b">
                  {[
                    ["Role fit — against your spec", "Scored"],
                    ["Comp expectation vs band", "Confirmed"],
                    ["Notice period", "Stated"],
                    ["Right to work", "Verified"],
                    ["Competing processes", "Disclosed"],
                  ].map(([l, v]) => (
                    <div className="doc-r" key={l}>
                      <span>{l}</span>
                      <b>{v}</b>
                    </div>
                  ))}
                </div>
                <p className="doc-n">
                  Same five checks on every candidate, so a shortlist is comparable rather than a set of opinions.
                </p>
              </article>
              <article className="doc">
                <div className="doc-h">
                  <span>02 · Written recommendation</span>
                  <span>From the partner</span>
                </div>
                <div className="doc-b doc-prose">
                  <p><b>Strengths.</b> Where this person is genuinely strong, with evidence rather than adjectives.</p>
                  <p><b>Risks.</b> What concerns us, and what we would probe in your interview.</p>
                  <p><b>Motivation.</b> Why they are moving, and what would make them decline.</p>
                  <p><b>Our view.</b> An honest read on close probability — including when it is low.</p>
                </div>
                <p className="doc-n">Written by the partner who took your brief. Signed, not templated.</p>
              </article>
              <article className="doc">
                <div className="doc-h">
                  <span>03 · Search record</span>
                  <span>Per search</span>
                </div>
                <div className="doc-b">
                  {[
                    ["Calibration notes", "Signed brief"],
                    ["Where we searched", "Logged"],
                    ["Approached vs responded", "Counted"],
                    ["Declines, with reasons", "Recorded"],
                    ["Market read on the band", "Included"],
                  ].map(([l, v]) => (
                    <div className="doc-r" key={l}>
                      <span>{l}</span>
                      <b>{v}</b>
                    </div>
                  ))}
                </div>
                <p className="doc-n">
                  What the market told us, including the parts that were unwelcome. Useful whether or not you hire.
                </p>
              </article>
            </div>
          </div>
        </section>

        {/* 05 — SERVICES */}
        <section className="sec" id="engage" aria-labelledby="h-engage">
          <div className="in">
            <RecordRule n="05" label="Services" scope="Seven engagement models" />
            <div className="spl">
              <h2 id="h-engage">Seven ways we engage. Start with the situation.</h2>
              <p className="sub">
                Nobody arrives needing &ldquo;Employer of Record&rdquo;. They arrive needing someone in Toronto in three
                weeks, without opening an entity. Pick the situation; we&rsquo;ll name the model.
              </p>
            </div>
            <ul className="svc-idx">
              {engagements.map((e) => (
                <li key={e.rail[0]}>{e.rail[0]}</li>
              ))}
            </ul>
            <ul className="lg" id="rvgEng">
              {engagements.map((e) => (
                <li className="row" key={e.n}>
                  <button className="rowin" type="button" aria-expanded="false" aria-controls={`pan-${e.n}`}>
                    <span className="num">{e.n}</span>
                    <span>
                      <h3>{e.h}</h3>
                      <p className="de">{e.d}</p>
                    </span>
                    <Rail items={e.rail} />
                  </button>
                  <div className="pan" id={`pan-${e.n}`}>
                    <div className="panin">
                      {e.facets.map(([l, v]) => (
                        <span className="f" key={l}>
                          <b>{l}</b>
                          {v}
                        </span>
                      ))}
                      <span className="f">
                        <b>Detail</b>
                        <Link className="tlink" href={e.href} style={{ fontSize: 12 }}>
                          {e.rail[0]} →
                        </Link>
                      </span>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* 06 — PRACTICES */}
        <section className="sec alt" id="practices" aria-labelledby="h-prac">
          <div className="in">
            <RecordRule n="06" label="Practices" scope="Seats we fill · what makes each hard" />
            <div className="spl">
              <h2 id="h-prac">Ten practices. Senior seats in each.</h2>
              <p className="sub">
                Not a list of sectors we would consider. These are the functions we run searches in, with the roles and
                the specific difficulty each one carries.
              </p>
            </div>
            <ul className="lg">
              {practices.map((p) => (
                <li className="row" key={p.n}>
                  <div className="rowin static">
                    <span className="num">{p.n}</span>
                    <span>
                      <h3>{p.h}</h3>
                      <p className="de">{p.d}</p>
                    </span>
                    <Rail items={["Recent seats", ...p.seats]} />
                  </div>
                </li>
              ))}
            </ul>
            <p className="prac-n">Role titles are drawn from searches we have run. Client names withheld by agreement.</p>
          </div>
        </section>

        {/* 07 — OBJECTIONS */}
        <section className="sec bone" id="objections" aria-labelledby="h-obj">
          <div className="in">
            <RecordRule n="07" label="Objections" scope="Answered before you have to ask" />
            <div className="spl">
              <h2 id="h-obj">We&rsquo;re smaller than the agency you&rsquo;re using. That&rsquo;s the point.</h2>
              <p className="sub">
                The questions you&rsquo;d normally save for a reference call. Better you get straight answers here than
                three weeks into a search.
              </p>
            </div>
            <ul className="lg obj">
              {objections.map((o) => (
                <li className="row" key={o.n}>
                  <div className="rowin static">
                    <span className="num">{o.n}</span>
                    <span>
                      <h3>{o.q}</h3>
                      <p className="de">{o.a}</p>
                    </span>
                    <Rail items={o.rail} />
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* 08 — WORKING WITH US */}
        <section className="sec bone" id="working" style={{ paddingTop: 20 }} aria-labelledby="h-work">
          <div className="in">
            <RecordRule n="08" label="Working with us" scope="For procurement, legal and finance" />
            <div className="spl">
              <h2 id="h-work">The questions procurement asks, answered here.</h2>
              <p className="sub">Everything below is agreed in the engagement rather than discovered during it.</p>
            </div>
            <div className="proc">
              {procurement.map(([h, p]) => (
                <div key={h}>
                  <h3>{h}</h3>
                  <p>{p}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 09 — SEND A BRIEF */}
        <section className="sec" id="brief" aria-labelledby="h-brief">
          <div className="in">
            <RecordRule n="09" label="Send a brief" scope="One business day to a reply" />
            <div className="spl">
              <h2 id="h-brief">Send us a brief. We&rsquo;ll tell you honestly whether it&rsquo;s fillable.</h2>
              <p className="sub">
                Tell us the role, the market and the number. If we can&rsquo;t deliver it, we&rsquo;ll say so — and tell
                you what would need to change.
              </p>
            </div>
            <div className="fgrid">
              <BriefForm />
              <aside className="person">
                <p className="pk">What happens next</p>
                <ol className="steps">
                  <li>
                    <b>Within one business day</b> a partner reads your brief and replies — not an auto-acknowledgement.
                  </li>
                  <li>
                    <b>A 45-minute call</b> to set must-haves, comp band and right-to-work.
                  </li>
                  <li>
                    <b>An honest answer</b> on whether the seat is fillable at that number, before you commit to
                    anything.
                  </li>
                </ol>
                <p className="qt">
                  If it isn&rsquo;t a fit for us, we&rsquo;ll tell you that on the first call rather than three weeks in.
                </p>
              </aside>
            </div>
            <div className="mk">
              {markets.map(([c, p]) => (
                <div key={c}>
                  <p className="c">{c}</p>
                  <p className="p">{p}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer className="rvg-foot">
        <div className="in">
          <div className="fcols">
            <div>
              <Link className="logo" href={routes.home} style={{ fontSize: 22 }}>
                Rivago<span>.</span>
              </Link>
              <p style={{ color: "#B9B1A6", fontSize: 14.5, lineHeight: 1.6, maxWidth: "34ch", margin: "14px 0 0" }}>
                A senior-only staffing firm built around one artefact: a shortlist you can act on. Four markets, one
                team.
              </p>
            </div>
            <div>
              <h2>Hire talent</h2>
              <ul>
                <li><Link href={routes.directHire}>Direct hire</Link></li>
                <li><Link href={routes.contractStaffing}>Contract staffing</Link></li>
                <li><Link href={routes.temporaryStaffing}>Temporary staffing</Link></li>
                <li><Link href={routes.executiveSearch}>Executive search</Link></li>
                <li><Link href={routes.interimLeadership}>Interim leadership</Link></li>
                <li><Link href={routes.rpo}>RPO</Link></li>
                <li><Link href={routes.employerOfRecord}>Employer of Record</Link></li>
              </ul>
            </div>
            <div>
              <h2>Company</h2>
              <ul>
                <li><a href="#method">How we work</a></li>
                <li><a href="#practices">Practices</a></li>
                <li><a href="#objections">Objections</a></li>
                <li><a href="#working">Working with us</a></li>
                <li><Link href={routes.about}>About</Link></li>
                <li><Link href={routes.contactUs}>Contact</Link></li>
              </ul>
            </div>
            <div>
              <h2>Candidates</h2>
              <ul>
                <li><Link href={routes.viewJobs}>Search jobs</Link></li>
                <li><Link href={routes.searchJobs}>Submit a CV</Link></li>
                <li><Link href={routes.career}>Work at Rivago</Link></li>
              </ul>
            </div>
          </div>
          <div className="fbot">
            <span>© {new Date().getFullYear()} Rivago Infotech Inc.</span>
            <span>
              <Link href={routes.privacy}>Privacy</Link> · <Link href={routes.terms}>Terms</Link> ·{" "}
              <Link href={routes.cookies}>Cookies</Link>
            </span>
          </div>
        </div>
      </footer>

      <HomeClient />
    </div>
  );
}
