export type RlsRole = { name: string; count: string };
export type RlsStat = [string, string, string]; // value, unit, label

export type RlsTab = {
  key: string;
  label: string;
  heading: string;
  blurb: string;
  roles: RlsRole[];
  quote: string;
  quoteInitials: string;
  quoteName: string;
  quoteRole: string;
  stats: RlsStat[];
  sampleLine: string;
  sampleSub: string;
};

export const rlsTabs: RlsTab[] = [
  {
    key: "tech",
    label: "Technology",
    heading: "Technology",
    blurb: "AI, data and platform engineering talent — from ML and LLM engineers to the leaders who build the teams around them — across cloud-native and enterprise stacks.",
    roles: [
      { name: "VP of AI / ML Engineering", count: "8 placements" },
      { name: "Principal Software Architect", count: "11 placements" },
      { name: "Senior Data Engineer", count: "28 placements" },
      { name: "Senior Java Engineer", count: "26 placements" },
      { name: "AI / LLM Engineer", count: "22 placements" },
      { name: "MLOps / Platform Engineer", count: "19 placements" },
      { name: "Data Scientist", count: "31 placements" },
      { name: "GCP AI Engineer", count: "20 placements" },
      { name: "Java Microservices Engineer", count: "34 placements" },
      { name: "React / Frontend Engineer", count: "38 placements" },
    ],
    quote: "We had an AI roadmap and no one to build it. Rivago stood up our <em>ML, data and platform team</em> — LLM and GCP AI engineers included — in a single quarter.",
    quoteInitials: "RP",
    quoteName: "VP of AI / ML Engineering",
    quoteRole: "Series-C SaaS · United States",
    stats: [
      ["312", "", "Active technology mandates this quarter"],
      ["38", "%", "Outreach reply rate (versus 9% industry baseline)"],
      ["18", "days", "Median time-to-shortlist for VP-level engineering"],
      ["97", "%", "90-day retention on technology placements"],
    ],
    sampleLine: "VP of AI / ML Engineering at a Series C SaaS",
    sampleSub: "Delaware · 22 days brief-to-offer · $345K base + 0.3% equity",
  },
  {
    key: "health",
    label: "Healthcare",
    heading: "Healthcare",
    blurb: "Provider, payer and life-sciences senior hires — clinical, regulatory and quality leaders, held to the highest credential bar in the firm.",
    roles: [
      { name: "Chief Medical Officer", count: "6 placements" },
      { name: "VP of Clinical Development", count: "5 placements" },
      { name: "Director of Clinical Operations", count: "18 placements" },
      { name: "VP of Regulatory Affairs", count: "11 placements" },
      { name: "Director of Medical Affairs", count: "10 placements" },
      { name: "Head of Quality & 510(k)", count: "9 placements" },
      { name: "Clinical Research Associate", count: "34 placements" },
      { name: "Pharmacovigilance Manager", count: "14 placements" },
      { name: "Biostatistician", count: "16 placements" },
      { name: "Medical Science Liaison", count: "21 placements" },
    ],
    quote: "Regulatory and quality hires are <em>unforgiving</em> to get wrong. Every candidate Rivago sent could do the job on day one.",
    quoteInitials: "AL",
    quoteName: "Chief Medical Officer",
    quoteRole: "Clinical-stage biotech · US",
    stats: [
      ["184", "", "Active healthcare mandates this quarter"],
      ["24", "days", "Median time-to-shortlist for clinical leadership"],
      ["100", "%", "Of clinical placements pre-credentialed at submission"],
      ["94", "%", "12-month retention on physician-leader placements"],
    ],
    sampleLine: "Director of Clinical Operations · UAE hospital network",
    sampleSub: "Dubai · 31 days · pre-cleared for DHA licensure",
  },
  {
    key: "legal",
    label: "Legal",
    heading: "Legal",
    blurb: "First-GC searches, deputy succession and lateral hires for in-house teams scaling across jurisdictions.",
    roles: [
      { name: "General Counsel", count: "8 placements" },
      { name: "Deputy General Counsel", count: "6 placements" },
      { name: "Compliance Director", count: "12 placements" },
      { name: "Head of Commercial / Privacy", count: "15 placements" },
      { name: "IP / Patent Counsel", count: "6 placements" },
      { name: "Regulatory Counsel", count: "8 placements" },
      { name: "Corporate Counsel", count: "24 placements" },
      { name: "Contracts Manager", count: "22 placements" },
      { name: "Data Privacy Counsel", count: "13 placements" },
      { name: "Employment Counsel", count: "11 placements" },
    ],
    quote: "We were scaling into three jurisdictions at once. Rivago found counsel who had <em>actually done it before</em>.",
    quoteInitials: "SV",
    quoteName: "General Counsel",
    quoteRole: "Fintech · US & UAE",
    stats: [
      ["92", "", "Active legal mandates this quarter"],
      ["100", "%", "Of finalists licensed in the operating jurisdiction"],
      ["29", "days", "Median time-to-shortlist for GC searches"],
      ["96", "%", "12-month retention on GC placements"],
    ],
    sampleLine: "General Counsel · pre-IPO fintech",
    sampleSub: "Delaware · 38 days · $420K base + 0.5% equity",
  },
  {
    key: "fin",
    label: "Finance",
    heading: "Finance",
    blurb: "CFO succession, treasury, FP&A and the long bench beneath — in markets where we know the comp committees by name.",
    roles: [
      { name: "Chief Financial Officer", count: "9 placements" },
      { name: "Head of Treasury", count: "7 placements" },
      { name: "VP of FP&A", count: "20 placements" },
      { name: "Head of Risk & Compliance", count: "18 placements" },
      { name: "Tax Director", count: "11 placements" },
      { name: "Director of Internal Audit", count: "12 placements" },
      { name: "Financial Controller", count: "28 placements" },
      { name: "Head of Financial Reporting", count: "15 placements" },
      { name: "Fund / Portfolio Accountant", count: "30 placements" },
      { name: "Quant Analyst", count: "16 placements" },
    ],
    quote: "Their partner knew our regulatory world cold. We had a <em>shortlist of four</em> for a hard compliance seat inside a week.",
    quoteInitials: "MS",
    quoteName: "Head of Talent",
    quoteRole: "Global bank · Delaware",
    stats: [
      ["228", "", "Active finance mandates this quarter"],
      ["19", "days", "Median time-to-shortlist for finance leadership"],
      ["11", "%", "Counter-offer recovery rate (vs. 28% baseline)"],
      ["92", "%", "12-month retention on CFO placements"],
    ],
    sampleLine: "Head of Risk & Compliance · Tier-1 Canadian bank",
    sampleSub: "Ontario · 27 days · CAD 295K + deferred",
  },
  {
    key: "aero",
    label: "Aerospace & Defence",
    heading: "Aerospace & Defence",
    blurb: "Tier-1 OEMs, defence primes and the supplier ecosystem beneath — cleared talent pre-vetted through Rivago’s cleared-talent program.",
    roles: [
      { name: "Director of Manufacturing", count: "5 placements" },
      { name: "Director, Cleared Cybersecurity", count: "6 placements" },
      { name: "Principal Systems Engineer", count: "11 placements" },
      { name: "Programme Manager (Cleared)", count: "9 placements" },
      { name: "Quality / AS9100 Manager", count: "10 placements" },
      { name: "Head of FAR/AR & Compliance", count: "4 placements" },
      { name: "Avionics Engineer", count: "16 placements" },
      { name: "Stress / Structures Engineer", count: "14 placements" },
      { name: "Propulsion Engineer", count: "8 placements" },
      { name: "RF / Radar Systems Engineer", count: "9 placements" },
    ],
    quote: "Cleared, niche and fast — three things that rarely come together. Rivago delivered a <em>programme team</em> we could not build ourselves.",
    quoteInitials: "JT",
    quoteName: "Programme Director",
    quoteRole: "Defence prime · US",
    stats: [
      ["74", "", "Active aerospace mandates this quarter"],
      ["80", "%", "Of finalists with active TS/SCI at submission"],
      ["42", "days", "Median time-to-shortlist (clearance constraints)"],
      ["100", "%", "Of placements pre-vetted via cleared program"],
    ],
    sampleLine: "Director of Aerospace Manufacturing · tier-1 supplier",
    sampleSub: "Delaware · 49 days · $260K + relocation",
  },
  {
    key: "telecom",
    label: "Telecom",
    heading: "Telecom",
    blurb: "5G core, fibre rollout and MSO leadership — staffed on both the operator and supplier side, with pricing intelligence across the table.",
    roles: [
      { name: "VP of Network Operations", count: "5 placements" },
      { name: "Head of 5G Core Engineering", count: "4 placements" },
      { name: "Principal Network Architect", count: "9 placements" },
      { name: "Director, Field Operations", count: "11 placements" },
      { name: "SDN / NFV Engineer", count: "8 placements" },
      { name: "Telecom Product Manager", count: "9 placements" },
      { name: "RF Engineer", count: "22 placements" },
      { name: "Core Network Engineer", count: "16 placements" },
      { name: "OSS / BSS Specialist", count: "13 placements" },
      { name: "Transport / Backhaul Engineer", count: "12 placements" },
    ],
    quote: "We were rolling out 5G and short on RF talent nationwide. Rivago <em>staffed the whole region</em> in under two months.",
    quoteInitials: "RN",
    quoteName: "VP Network",
    quoteRole: "Telecom operator · UAE",
    stats: [
      ["86", "", "Active telecom mandates this quarter"],
      ["23", "days", "Median time-to-shortlist for network leadership"],
      ["14", "", "Active mandates across operator + supplier sides"],
      ["88", "%", "12-month retention on telecom placements"],
    ],
    sampleLine: "Head of 5G Core Engineering · national operator",
    sampleSub: "Dubai · 34 days · $310K + relocation",
  },
  {
    key: "auto",
    label: "Automotive",
    heading: "Automotive",
    blurb: "OEM, tier-1 supplier and the new mobility entrants — battery, ADAS and software-defined vehicle talent, sourced before it hits the market.",
    roles: [
      { name: "VP of Software (SDV)", count: "4 placements" },
      { name: "Head of Battery Engineering", count: "4 placements" },
      { name: "ADAS / Autonomy Engineer", count: "12 placements" },
      { name: "Functional Safety (ISO 26262) Lead", count: "6 placements" },
      { name: "Head of Supply Quality", count: "8 placements" },
      { name: "Plant / Production Manager", count: "9 placements" },
      { name: "Powertrain Engineer", count: "15 placements" },
      { name: "Embedded Systems Engineer", count: "17 placements" },
      { name: "Manufacturing Process Engineer", count: "14 placements" },
      { name: "Vehicle Integration Engineer", count: "10 placements" },
    ],
    quote: "An EV line launch with an <em>immovable date</em>. Rivago built the manufacturing and quality team that hit it.",
    quoteInitials: "DM",
    quoteName: "Director of Ops",
    quoteRole: "EV manufacturer · US",
    stats: [
      ["62", "", "Active automotive mandates this quarter"],
      ["28", "days", "Median time-to-shortlist (relocation-heavy)"],
      ["3.4", "×", "Inbound interest per OEM mandate, last 90 days"],
      ["89", "%", "12-month retention on automotive placements"],
    ],
    sampleLine: "Head of Battery Engineering · EV manufacturer",
    sampleSub: "Ontario · 41 days · CAD 320K + equity",
  },
  {
    key: "supply",
    label: "Supply & Operations",
    heading: "Supply & Operations",
    blurb: "From distribution-centre leadership to global head-of-supply roles — the people who keep the operation moving when everything else is on fire.",
    roles: [
      { name: "Chief Operating Officer", count: "6 placements" },
      { name: "VP of Supply Chain", count: "11 placements" },
      { name: "Director, S&OP", count: "15 placements" },
      { name: "Procurement Director", count: "13 placements" },
      { name: "Head of Distribution", count: "11 placements" },
      { name: "Continuous Improvement Lead", count: "14 placements" },
      { name: "Logistics Manager", count: "24 placements" },
      { name: "Demand Planning Analyst", count: "18 placements" },
      { name: "Warehouse / DC Manager", count: "20 placements" },
      { name: "Inventory / Materials Manager", count: "17 placements" },
    ],
    quote: "They placed a plant leadership team across two sites — <em>on time, on budget</em> — while our own pipeline was bone dry.",
    quoteInitials: "HK",
    quoteName: "VP Operations",
    quoteRole: "Manufacturer · UAE",
    stats: [
      ["128", "", "Active supply & ops mandates this quarter"],
      ["22", "days", "Median time-to-shortlist for VP-level supply"],
      ["62", "%", "Of supply placements involve relocation"],
      ["90", "%", "12-month retention on supply placements"],
    ],
    sampleLine: "VP of Supply Chain · industrial manufacturer",
    sampleSub: "Dubai · 26 days · $285K + bonus",
  },
  {
    key: "sales",
    label: "Sales & Marketing",
    heading: "Sales & Marketing",
    blurb: "CRO succession, first-VP-of-marketing hires and demand-gen leadership — we know the OTE patterns and which “100% to plan” résumé actually beat the number.",
    roles: [
      { name: "Chief Revenue Officer", count: "6 placements" },
      { name: "VP of Marketing", count: "12 placements" },
      { name: "Sales Director", count: "17 placements" },
      { name: "Head of Demand Gen", count: "15 placements" },
      { name: "Product Marketing Lead", count: "15 placements" },
      { name: "Head of Growth", count: "9 placements" },
      { name: "Enterprise Account Executive", count: "38 placements" },
      { name: "RevOps Manager", count: "16 placements" },
      { name: "Brand / Content Manager", count: "14 placements" },
      { name: "Field Marketing Manager", count: "13 placements" },
    ],
    quote: "We doubled the revenue org in a quarter. The reps Rivago placed <em>beat quota</em> faster than anyone we hired ourselves.",
    quoteInitials: "DK",
    quoteName: "Chief Revenue Officer",
    quoteRole: "Growth-stage scale-up · Canada",
    stats: [
      ["204", "", "Active GTM mandates this quarter"],
      ["17", "days", "Median time-to-shortlist for VP+ GTM roles"],
      ["68", "%", "Of CRO finalists beat-plan in their last role"],
      ["89", "%", "12-month retention on CRO placements"],
    ],
    sampleLine: "VP of Marketing · growth-stage SaaS",
    sampleSub: "Ontario · 24 days · CAD 265K + equity",
  },
];

export type EngagementModel = {
  num: string;
  title: string;
  desc: string;
  bullets: string[];
  featured?: boolean;
};

export const engagementModels: EngagementModel[] = [
  {
    num: "01",
    title: "Direct hire",
    desc: "Permanent placements across every function and level. Pay only on a hire that sticks past the guarantee window — fast, low-risk, no retainer.",
    bullets: ["48-hour median shortlist", "90-day replacement guarantee", "No upfront fee"],
  },
  {
    num: "02",
    title: "Contract & contract-to-hire",
    desc: "Skilled professionals on flexible terms — scale up, trial before you commit, or convert to permanent. We run payroll and compliance.",
    bullets: ["Talent in 5–7 days", "Payroll & compliance handled", "Convert to permanent anytime"],
    featured: true,
  },
  {
    num: "03",
    title: "Temporary staffing",
    desc: "On-demand professionals for peaks, seasonal spikes and leave cover. Deployed fast, fully compliant, scaled up or down as the work changes.",
    bullets: ["Deployed in days, not weeks", "Payroll & compliance handled", "Scale up or down anytime"],
  },
];

export const whyNumsr: { v: string; sup?: string; title: string; desc: string }[] = [
  { v: "48", sup: "h", title: "Median shortlist", desc: "Signed brief to three calibrated finalists." },
  { v: "94", sup: "%", title: "Offer-accept rate", desc: "Last 12 months, every level." },
  { v: "10", title: "Specialist practices", desc: "Deep benches across every sector." },
  { v: "4", title: "Countries covered", desc: "US, Canada, the UAE and India." },
];

export const whyCards: { title: string; desc: string }[] = [
  { title: "Senior recruiters only", desc: "Every search is run by a specialist with 7+ years in your field — no juniors learning on your role." },
  { title: "Access to hidden talent", desc: "A private network of senior operators who never touch a job board — reached directly, on your behalf." },
  { title: "Inclusive shortlists", desc: "Calibrated scorecards and diverse, fairly-assessed slates on every role — bias designed out from the brief." },
  { title: "Care past the offer", desc: "Structured check-ins at 3, 6 and 12 months — we stay invested long after the placement is made." },
];

export const proc2Stages: { day: string; title: string; desc: string; deliverLabel: string; deliverValue: string; done?: boolean }[] = [
  { day: "Stage 01", title: "Calibrate", desc: "We agree the spec, the bar and the commercials up front, so nothing about the engagement is ambiguous later.", deliverLabel: "You get", deliverValue: "Signed-off scorecard" },
  { day: "Stage 02", title: "Map", desc: "Your partner works their own practice network — people approached directly, never a job ad reposted at scale.", deliverLabel: "You get", deliverValue: "Targeted longlist" },
  { day: "Stage 03", title: "Screen", desc: "Everyone you meet has been interviewed against the agreed bar, with written evidence behind the recommendation.", deliverLabel: "You get", deliverValue: "Calibrated profiles" },
  { day: "Stage 04", title: "Panel", desc: "We carry the admin — scheduling, debriefs, references and compliance — so your team only spends time on decisions.", deliverLabel: "You get", deliverValue: "Debriefs & references" },
  { day: "Stage 05", title: "Placed & guaranteed", desc: "We close the offer, protect it against counters, and stay accountable through the guarantee window.", deliverLabel: "You get", deliverValue: "Signed start · guarantee applies", done: true },
];

export const gdStats: [string, string][] = [
  ["5", "Offices across 4 countries"],
  ["1", "Central delivery hub, Pune"],
  ["1,000+", "Placements to date"],
  ["10+", "Years of global staffing"],
];

// Plotted on the rotating globe in the Global Delivery section. lat/lon are
// real coordinates — the globe projects them onto the sphere, so they must
// stay accurate rather than being nudged for visual balance.
export type GdHub = { name: string; sub: string; lat: number; lon: number; hq?: boolean };

export const gdHubs: GdHub[] = [
  { name: "Delaware", sub: "GLOBAL HQ", lat: 39.7, lon: -75.5, hq: true },
  { name: "Ontario", sub: "CANADA", lat: 43.4, lon: -80.3 },
  { name: "Dubai", sub: "UAE", lat: 25.2, lon: 55.3 },
  { name: "Pune", sub: "INDIA", lat: 18.5, lon: 73.8 },
];

export const indgCards: { icon: string; title: string; desc: string; tags: string[] }[] = [
  { icon: "💻", title: "Technology", desc: "Software engineering, cloud infrastructure, data, cybersecurity, AI/ML, product management and digital transformation from startup to enterprise.", tags: ["Engineering", "Cloud", "Data", "AI/ML"] },
  { icon: "🏦", title: "Finance & Banking", desc: "Investment banking, risk, compliance, financial planning, treasury and accounting across global financial institutions and fintech firms.", tags: ["Risk", "Compliance", "FP&A", "Treasury"] },
  { icon: "🏥", title: "Healthcare", desc: "Clinical, nursing, allied health, pharmaceutical and healthcare administration across hospitals, clinics and life-sciences organisations.", tags: ["Clinical", "Pharma", "Allied Health"] },
  { icon: "⚖️", title: "Legal", desc: "In-house counsel, contracts, privacy, compliance officers and legal operations professionals across corporate and private practice.", tags: ["In-house", "Contracts", "Compliance"] },
  { icon: "✈️", title: "Aerospace & Defence", desc: "Tier-1 OEMs, defence primes and the supplier ecosystem — cleared engineering, systems and programme talent, pre-vetted for clearance.", tags: ["Systems", "Cleared", "Programme"] },
  { icon: "🏭", title: "Supply & Operations", desc: "Supply chain, procurement, logistics and plant leadership for companies scaling their physical and digital operations globally.", tags: ["Supply Chain", "Procurement", "Logistics"] },
  { icon: "📈", title: "Sales & Marketing", desc: "B2B and B2C sales, demand generation, brand, growth, customer success and revenue operations across all markets.", tags: ["Sales", "Growth", "Brand", "CX"] },
  { icon: "👥", title: "People & HR", desc: "HR business partners, talent acquisition, L&D, reward and employee relations from coordinator to CHRO across every sector.", tags: ["HR BP", "TA", "L&D", "Reward"] },
];

export const perspectives: { gradient: string; cat: string; title: string; desc: string; meta: string }[] = [
  { gradient: "linear-gradient(135deg,#0F2A1B,#0A7040)", cat: "Hiring playbook", title: "What a real scorecard looks like in 2026", desc: "The one-page framework our partners use to calibrate a search before a single name is sourced.", meta: "8 min read · Hiring" },
  { gradient: "linear-gradient(135deg,#12332A,#00A882)", cat: "Cost analysis", title: "Contract vs. permanent: the true cost math", desc: "A clear-eyed model for when flexible talent beats a permanent hire — and when it quietly costs you more.", meta: "6 min read · Strategy" },
  { gradient: "linear-gradient(135deg,#0B1F14,#3DFF87)", cat: "Global hiring", title: "Hiring across the US, Canada and the UAE without tripping compliance", desc: "Work authorisation, EOR and payroll, decoded for teams scaling into three regions at once.", meta: "9 min read · Global" },
];

export const servicesFaqItems: { q: string; a: string }[] = [
  {
    q: "What’s the difference between contract, contract-to-hire, and direct hire staffing?",
    a: "Contract staffing places a professional on our payroll for a fixed term — you get the skills without the headcount commitment, and we handle payroll, compliance and classification. Contract-to-hire is the same, with the option to convert the person to a permanent employee once they’ve proven the fit. Direct hire is a permanent placement from day one, sourced on a contingent fee and backed by a replacement guarantee. Not sure which fits? Your partner will recommend the right structure on the first call — no pressure to over-buy.",
  },
  {
    q: "How quickly can you get us qualified candidates?",
    a: "For contract and temporary roles, we can put vetted professionals in front of you in 5–7 days. For direct-hire searches, three to five calibrated finalists typically land within 48 hours of a signed brief. Executive and cleared roles run longer because the bar is higher — but you’ll get a realistic date in writing on the first call, not a vague promise.",
  },
  {
    q: "We already have a staffing partner. Do we have to replace them to work with you?",
    a: "No. Plenty of our clients bring us in alongside an incumbent — often on the roles they’re struggling to fill, or in a market where we have deeper reach. We’re happy to prove ourselves on a single hard requisition before you consolidate anything. If we earn more of your work, great; if not, you’ve lost nothing.",
  },
  {
    q: "What happens if a placement doesn’t work out?",
    a: "Every permanent placement carries a replacement guarantee — 90 days on contingent direct hires, up to 12 months on retained searches. If someone leaves inside the window, we restart the search at no additional fee. On contract, we replace a poor-fit worker fast and you only pay for time worked.",
  },
  {
    q: "We don’t just need bodies. We need a team to own a project. Can you do that?",
    a: "Yes — that’s our Recruitment Process Outsourcing and team build-out work. Rather than filling one seat, we stand up an entire function or project pod — engineering, clinical, operations — with one partner owning the outcome end to end. We’ve built plant leadership teams, AI platform teams and 40-person cohorts on a single contract, and stayed accountable for retention long after.",
  },
  {
    q: "How do you stay on top of specialized skills like AI, cybersecurity, or grid modernization?",
    a: "Every Rivago partner runs a single practice and has placed inside it for years — so they know the tools, the certifications and the people before a brief ever lands. For fast-moving fields like AI/ML, cleared cybersecurity and energy-grid modernization, we maintain live talent maps and a private network of specialists who never touch a job board, and we localise comp benchmarks continuously across our four markets.",
  },
];
