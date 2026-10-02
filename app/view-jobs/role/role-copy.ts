/* Role-page copy, shared by the client-role page (/view-jobs/role, read
   from the query string) and Rivago's own role pages (/open-positions/[id],
   built at compile time). Plain module — no "use client" — so the server
   page can read it for metadata. */

export type DeptCopy = { a: string; own: string[]; need: string[] };

export const DEPT_COPY: Record<string, DeptCopy> = {
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

/* Per-role copy for the openings the firm confirmed on 2 October 2026.
   DRAFTED FROM THE JOB TITLE, FOR THE FIRM TO REVIEW: each line describes
   what the title itself implies, and none sets an invented threshold (the
   department templates above ask for "seven or more years … with the
   billings to show it", which nobody specified). Keyed by title; any role
   not listed here falls back to its department's copy. */
export const ROLE_COPY: Record<string, DeptCopy> = {
  "Senior US Recruiter": {
    a: "You recruit for Rivago's US clients end to end — taking the requirement, sourcing and screening candidates, and seeing each one through to a start date.",
    own: ["Work US requirements end to end, from intake to start date.", "Source candidates directly, not only from inbound applications.", "Screen against the client's brief before anyone is submitted.", "Keep candidates informed at every stage, including when the answer is no."],
    need: ["Experience recruiting for US clients, including US work authorisation and pay structures.", "Confident direct sourcing across job boards, LinkedIn and your own network.", "Able to work hours that overlap with US clients."], // confirmed by the firm, 2 Oct 2026,
  },
  "Recruitment Manager": {
    a: "You lead a team of recruiters — setting priorities across open requirements, keeping quality high, and making sure every client and candidate gets a straight answer.",
    own: ["Lead and coach a team of recruiters.", "Prioritise open requirements and put the right recruiter on each.", "Review submissions for quality before they reach clients.", "Track delivery and fix what is slowing it down."],
    need: ["Experience as a recruiter, and in leading or mentoring a team.", "A clear view of what a good submission looks like.", "Able to hold a team to a standard and keep it motivated."],
  },
  "Talent Acquisition Specialist · Healthcare": {
    a: "You recruit healthcare professionals for Rivago's clients — finding, screening and placing candidates in roles where licensing and credentials matter.",
    own: ["Recruit for healthcare requirements end to end.", "Check licences, certifications and credentials before submission.", "Build a network of healthcare candidates for repeat needs.", "Keep candidates informed through every stage."],
    need: ["Experience recruiting in healthcare.", "Familiarity with healthcare licensing and credentialing.", "Organised and precise with candidate documentation."],
  },
  "Business Development Manager": {
    a: "You win new clients for Rivago — finding companies that need staffing and recruitment support, opening the conversation and turning it into an agreement.",
    own: ["Identify and approach companies that need staffing or recruitment support.", "Run discovery conversations and shape proposals.", "Close new accounts and hand them to delivery with a clear brief.", "Keep an honest pipeline and forecast."],
    need: ["Experience selling staffing, recruitment or other professional services.", "A track record of opening and closing new accounts.", "Confident with senior hiring and procurement contacts."],
  },
  "Business Development Executive": {
    a: "You open doors for the business development team — researching target companies, starting conversations and booking the meetings that turn into new clients.",
    own: ["Research target companies and the people who hire there.", "Run outreach by email, phone and LinkedIn.", "Qualify interest and book meetings for the team.", "Keep the CRM accurate."],
    need: ["Some experience in sales, lead generation or business development — staffing is a plus.", "Clear, confident written and spoken English.", "Persistent and organised."],
  },
  "Account Manager": {
    a: "You look after a set of existing clients — understanding what they need, keeping delivery on track and growing the work Rivago does for them.",
    own: ["Own day-to-day relationships with a set of clients.", "Take new requirements and brief the recruiting team.", "Keep delivery on track and raise issues early.", "Find new opportunities within existing accounts."],
    need: ["Experience managing client accounts in staffing or recruitment.", "Able to turn a client's need into a clear brief.", "Calm and straight with clients when things go wrong."],
  },
  "Account Director · Strategic Clients": {
    a: "You own Rivago's most important client relationships — shaping each account's strategy, leading the commercial conversation and making sure delivery matches what was promised.",
    own: ["Own a portfolio of strategic accounts and the revenue in them.", "Set the strategy for each account with the delivery team.", "Lead commercial and contract conversations.", "Represent Rivago with client leadership."],
    need: ["Senior experience managing major accounts in staffing or professional services.", "Commercial judgement and negotiation experience.", "Credible with talent leaders and procurement alike."],
  },
  "Delivery Operations Manager": {
    a: "You keep delivery running behind every requirement — the process, the data and the coordination that let recruiters spend their time on candidates and clients.",
    own: ["Run delivery operations across live requirements.", "Keep pipeline and placement data accurate enough to report from.", "Coordinate onboarding, timesheets and compliance steps for placed consultants.", "Find manual steps and fix them."],
    need: ["Experience in recruitment or staffing operations.", "Comfortable with ATS data and spreadsheets at volume.", "Organised and precise — you notice when a number looks wrong."],
  },
};

/* Matches the Careers page, which now carries only confirmed facts. This
   list used to promise a senior-only team, commission "with no threshold
   games" and a tooling budget; "How we hire" promised a paid practical
   session and a decision within five working days. None was confirmed. */
export const WHAT_WE_OFFER = [
  "A partner-led firm, founded in 2019, where your work is visibly yours.",
  "Clear comp: base and commission explained up front, in writing, before you accept.",
  "Work from our Pune office or remotely, depending on the role.",
  "You own your work end to end, with no handoffs.",
];

export const HOW_WE_HIRE = [
  { n: "01", t: "Intro call", d: "Thirty minutes with the hiring partner. What you have done, what you want next." },
  { n: "02", t: "Working session", d: "We walk through a live brief together. Not a test — a real look at how you work." },
  { n: "03", t: "Meet the team", d: "The people you would actually work beside. You are interviewing us as much as we are interviewing you." },
  { n: "04", t: "Offer", d: "A written offer with base and commission spelled out — no negotiation games." },
];

/* The copy for one role: its own entry if it has one, otherwise its
   department's. */
export function copyFor(role: string, dept: string): DeptCopy {
  return ROLE_COPY[role] || DEPT_COPY[dept] || DEPT_COPY.Operations;
}
