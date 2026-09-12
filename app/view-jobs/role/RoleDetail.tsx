"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { routes } from "@/lib/routes";

type DeptCopy = { a: string; own: string[]; need: string[] };

const DEPT_COPY: Record<string, DeptCopy> = {
  Recruitment: {
    a: "This is a full-desk search role. You take the brief, map the market, run the outreach and close the offer — no handing candidates to someone else halfway through. You will own a defined practice and the client relationships inside it.",
    own: [
      "Own searches end to end for your practice, from intake through to a signed start date.",
      "Build and keep a live map of the senior talent in your sector — the people who never apply.",
      "Run client intake sessions that produce a real scorecard, not a wish list.",
      "Hold the quality line: five candidates who fit, not fifty who might.",
      "Grow existing accounts by being the person they call first.",
    ],
    need: [
      "Seven or more years placing inside one sector, with the billings to show it.",
      "Genuine direct sourcing capability — this is not an inbound role.",
      "Able to challenge a hiring manager and keep the relationship.",
      "Written English strong enough for briefs clients forward internally.",
    ],
  },
  Operations: {
    a: "You keep delivery running behind every search — the research, the data, and the process that lets partners stay in front of clients and candidates instead of admin.",
    own: [
      "Own research and sourcing support across a group of live searches.",
      "Keep pipeline and placement data accurate enough to report from.",
      "Improve a process that is currently manual, and document it.",
      "Coordinate scheduling, references and onboarding logistics.",
    ],
    need: [
      "Three or more years in recruitment operations, research or delivery support.",
      "Comfortable with ATS data and spreadsheets at volume.",
      "Precise by default — you notice when a number looks wrong.",
      "Calm when several searches peak at once.",
    ],
  },
  Marketing: {
    a: "You own how Rivago sounds and where it shows up. This is a hands-on role: you write, you ship, you measure — there is no agency behind you.",
    own: [
      "Own content and campaigns that generate real inbound conversations.",
      "Write for a senior audience without falling into recruitment cliché.",
      "Build the reporting that ties activity to pipeline.",
      "Keep the brand consistent across site, deck and social.",
    ],
    need: [
      "Four or more years in B2B marketing, ideally professional services.",
      "A writing portfolio you are willing to be judged on.",
      "Comfortable with analytics and honest about what is not working.",
    ],
  },
  People: {
    a: "You look after the people who look after our clients — hiring, developing and keeping a senior team across three offices.",
    own: [
      "Own hiring for your remit end to end, including interviewer training.",
      "Advise partners on performance, progression and pay.",
      "Handle employee relations matters with judgement and discretion.",
      "Improve a people process that is currently unclear.",
    ],
    need: [
      "Five or more years in HR or talent, with multi-site exposure.",
      "Comfortable challenging senior people constructively.",
      "Discreet — this role sees everything.",
    ],
  },
  Engineering: {
    a: "You build the internal tooling the firm runs on: our search platform, candidate data and the automation that removes busywork from every desk.",
    own: [
      "Ship features on our internal platform end to end.",
      "Own data quality and integrations across our stack.",
      "Automate the manual steps partners repeat daily.",
      "Keep the platform reliable — the firm works in it all day.",
    ],
    need: [
      "Five or more years building production software.",
      "Strong across a modern web stack; pragmatic about tooling.",
      "Able to talk to non-technical colleagues and translate needs into scope.",
    ],
  },
  Finance: {
    a: "You own the numbers behind a multi-market firm — billing, margin, compliance and the reporting partners actually use to run their desks.",
    own: [
      "Run billing, collections and month-end across five entities.",
      "Report contribution by desk, practice and market.",
      "Keep multi-country compliance and payroll obligations clean.",
      "Improve close speed without losing accuracy.",
    ],
    need: [
      "Qualified accountant or equivalent experience.",
      "Multi-entity, multi-currency exposure.",
      "Recruitment or professional services background an advantage.",
    ],
  },
  Client: {
    a: "You are the commercial face of Rivago to new and existing clients — building relationships that turn into retained, repeatable work.",
    own: [
      "Own a book of client relationships and the revenue inside it.",
      "Open new accounts with a genuine point of view on their market.",
      "Work with partners so delivery matches what you promised.",
      "Forecast honestly.",
    ],
    need: [
      "Five or more years selling professional or staffing services.",
      "Evidence of attainment, not just activity.",
      "Credible with talent leaders and procurement alike.",
    ],
  },
  Research: {
    a: "You produce the market intelligence every search depends on — maps, target lists and the read on what talent actually costs.",
    own: [
      "Build market maps and target lists for live searches.",
      "Run first-touch outreach and qualify interest.",
      "Keep research and pipeline data accurate.",
      "Brief partners on market reality, including when unwelcome.",
    ],
    need: [
      "Three or more years in research or sourcing.",
      "Strong Boolean and desk-research capability.",
      "Excellent written English for candidate outreach.",
    ],
  },
};

const WHAT_WE_OFFER = [
  "Senior-only team — no juniors learning on your accounts.",
  "One partner per search, so the work you do is visibly yours.",
  "Transparent commission with no threshold games.",
  "Offices in Delaware, Pune and Ontario, with real flexibility on where you work.",
  "Budget for the tooling and data you need to do the job properly.",
];

const HOW_WE_HIRE = [
  { n: "01", t: "Intro call", d: "Thirty minutes with the hiring partner. Real questions, no screening script." },
  { n: "02", t: "Craft conversation", d: "We go deep on work you have actually done, with the people you would work beside." },
  { n: "03", t: "Practical session", d: "A live problem from the desk you would own. Paid if it takes real preparation." },
  { n: "04", t: "Offer", d: "Decision within five working days of the last conversation, either way." },
];

const BackIcon = () => (
  <svg width="13" height="13" viewBox="0 0 14 14" fill="none"><path d="M8.5 3L5 7l3.5 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" /></svg>
);
const ArrowIcon = () => (
  <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M3 7h8M8 4l3 3-3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
);

export default function RoleDetail() {
  const searchParams = useSearchParams();
  const role = searchParams.get("role") || "Open position";
  const loc = searchParams.get("l") || "Delaware, US";
  const dept = searchParams.get("d") || "Operations";
  const sen = searchParams.get("s") || "Senior";
  const eng = searchParams.get("e") || "Full time · Permanent";
  const mode = searchParams.get("mode") || "internal";
  const isInternal = mode === "internal";

  const copy = DEPT_COPY[dept] || DEPT_COPY.Operations;
  const engBasis = eng.toLowerCase().replace(/·/g, "").replace(/\s+/g, " ").trim();
  const about = `${copy.a} The role is based in ${loc} on a ${engBasis} basis, at ${sen.toLowerCase()} level.`;
  const chips = [sen, dept, eng.split("·")[0].trim(), loc].filter(Boolean);

  const backHref = isInternal ? routes.openPositions : routes.viewJobs;
  const backLabel = isInternal ? "All open positions" : "All open roles";
  const applyHref = `${routes.signIn}?mode=signup`;

  return (
    <>
      <div className="pd">
        <Link className="pd-back" href={backHref}><BackIcon />{backLabel}</Link>
        <div className="pd-eyb">{isInternal ? "Careers at Rivago" : "Client role"} &middot; {dept}</div>
        <h1>{role}</h1>
        <div className="pd-sub">{loc} &middot; {eng}</div>
        <div className="pd-chips">
          {chips.map((c) => <span className="pd-chip" key={c}>{c}</span>)}
        </div>
        <div className="pd-cta">
          <Link className="pd-p" href={applyHref}>Apply for this role <ArrowIcon /></Link>
        </div>
      </div>

      <div className="pd-body">
        <div className="pd-sec">
          <div className="pd-lab">About the role</div>
          <p>{about}</p>
        </div>
        <div className="pd-sec">
          <div className="pd-lab">What you will own</div>
          <ul>{copy.own.map((x) => <li key={x}>{x}</li>)}</ul>
        </div>
        <div className="pd-sec">
          <div className="pd-lab">What we are looking for</div>
          <ul>{copy.need.map((x) => <li key={x}>{x}</li>)}</ul>
        </div>
        <div className="pd-sec">
          <div className="pd-lab">What we offer</div>
          <ul>{WHAT_WE_OFFER.map((x) => <li key={x}>{x}</li>)}</ul>
        </div>
        <div className="pd-sec">
          <div className="pd-lab">How we hire</div>
          <div className="pd-steps">
            {HOW_WE_HIRE.map((s) => (
              <div className="pd-step" key={s.n}>
                <div className="n">{s.n}</div>
                <h2>{s.t}</h2>
                <p>{s.d}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="pd-end">
          <h2>Sound like your desk?</h2>
          <p>Create an account to apply and track where your application stands. One partner reads every submission.</p>
          <Link className="pd-p" href={applyHref}>Create an account to apply <ArrowIcon /></Link>
        </div>
      </div>
    </>
  );
}
