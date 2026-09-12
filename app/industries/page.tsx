import Link from "next/link";
import type { Metadata } from "next";
import Testimonials from "@/components/Testimonials";
import { routes } from "@/lib/routes";

export const metadata: Metadata = {
  title: "Industries — Rivago Infotech",
  description: "Ten specialist practices, each run by partners who've placed in-sector for seven-plus years — technology, finance, healthcare, legal, aerospace, telecom, automotive, supply chain, sales and HR.",
  alternates: { canonical: "https://rivagoinfotech.com/industries" },
  openGraph: {
    title: "Industries — Rivago Infotech",
    description: "Ten specialist practices, each run by partners who've placed in-sector for seven-plus years — technology, finance, healthcare, legal, aerospace, telecom, automotive, supply chain, sales and HR.",
    url: "https://rivagoinfotech.com/industries",
  },
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://rivagoinfotech.com/" },
    { "@type": "ListItem", position: 2, name: "Industries", item: "https://rivagoinfotech.com/industries" },
  ],
};

const Arrow = () => (
  <svg className="arrow" width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M3 7h8M8 4l3 3-3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
);

type Role = { name: string; comp: string };
type Practice = {
  anchor: string;
  title: string;
  navLabel: string;
  icon: React.ReactNode;
  intro: string;
  stats: [string, string][];
  senior: Role[];
  mid: Role[];
  junior: Role[];
  placement?: { role: string; company: string; outcome: string };
};

const icons: Record<string, React.ReactNode> = {
  technology: (<svg viewBox="0 0 28 28" fill="none"><rect x="3" y="6" width="22" height="16" rx="2" stroke="#3DFF87" strokeWidth="1.5" /><path d="M8 22v2M20 22v2M3 18h22" stroke="#3DFF87" strokeWidth="1.5" strokeLinecap="round" /></svg>),
  finance: (<svg viewBox="0 0 28 28" fill="none"><path d="M4 22V8M10 22V12M16 22V6M22 22V14" stroke="#3DFF87" strokeWidth="1.8" strokeLinecap="round" /></svg>),
  healthcare: (<svg viewBox="0 0 28 28" fill="none"><path d="M14 4l8 4v6c0 5-3.5 9-8 10-4.5-1-8-5-8-10V8l8-4z" stroke="#3DFF87" strokeWidth="1.5" strokeLinejoin="round" /><path d="M14 10v6M11 13h6" stroke="#3DFF87" strokeWidth="1.5" strokeLinecap="round" /></svg>),
  legal: (<svg viewBox="0 0 28 28" fill="none"><path d="M5 23h18M7 23V11M21 23V11M5 11h18M9 7l5-3 5 3" stroke="#3DFF87" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>),
  aerospace: (<svg viewBox="0 0 28 28" fill="none"><path d="M2 18l6-12 8 4 4-3 6 5-4 9H2z" stroke="#3DFF87" strokeWidth="1.5" strokeLinejoin="round" /></svg>),
  telecom: (<svg viewBox="0 0 28 28" fill="none"><path d="M14 4v20M4 8c3 3 7 5 10 5s7-2 10-5M4 20c3-3 7-5 10-5s7 2 10 5" stroke="#3DFF87" strokeWidth="1.5" strokeLinecap="round" /></svg>),
  automotive: (<svg viewBox="0 0 28 28" fill="none"><circle cx="8" cy="20" r="2.5" stroke="#3DFF87" strokeWidth="1.5" /><circle cx="20" cy="20" r="2.5" stroke="#3DFF87" strokeWidth="1.5" /><path d="M3 14h22l-2-7H5l-2 7zM10.5 20h7" stroke="#3DFF87" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>),
  supply: (<svg viewBox="0 0 28 28" fill="none"><rect x="4" y="8" width="20" height="14" rx="2" stroke="#3DFF87" strokeWidth="1.5" /><path d="M4 12h20M10 8V4h8v4" stroke="#3DFF87" strokeWidth="1.5" strokeLinecap="round" /></svg>),
  sales: (<svg viewBox="0 0 28 28" fill="none"><path d="M4 12c0-2 2-3 4-3s4 1 4 3-2 3-4 3-4 1-4 3 2 3 4 3M20 9v12M16 12h8M16 18h8" stroke="#3DFF87" strokeWidth="1.5" strokeLinecap="round" /></svg>),
  people: (<svg viewBox="0 0 28 28" fill="none"><circle cx="10" cy="9" r="3" stroke="#3DFF87" strokeWidth="1.5" /><circle cx="20" cy="11" r="2.5" stroke="#3DFF87" strokeWidth="1.5" /><path d="M4 22c0-3.3 2.7-6 6-6s6 2.7 6 6M16 22c0-2.5 2-4.5 4-4.5s4 2 4 4.5" stroke="#3DFF87" strokeWidth="1.5" strokeLinecap="round" /></svg>),
};

const practices: Practice[] = [
  {
    anchor: "technology",
    title: "Technology",
    navLabel: "Technology",
    icon: icons.technology,
    intro: "Software engineering, cloud infrastructure, data and product — sourced by a partner who has shipped code and shipped hires in equal measure. We know the difference between a candidate who can pass a LeetCode round and one who can own a system in production.",
    stats: [["Active mandates", "312"], ["Avg time-to-fill", "24 days"], ["Avg tenure at placement", "3.4 yrs"], ["Offer-acceptance rate", "92%"]],
    senior: [{ name: "VP of Engineering", comp: "$220k–$280k" }, { name: "Director of Product", comp: "$200k–$250k" }],
    mid: [{ name: "Staff Software Engineer", comp: "$170k–$210k" }, { name: "Engineering Manager", comp: "$180k–$225k" }, { name: "Senior Data Engineer", comp: "$150k–$190k" }, { name: "Senior DevOps / SRE Engineer", comp: "$155k–$195k" }],
    junior: [{ name: "Software Engineer II", comp: "$110k–$140k" }, { name: "QA Engineer", comp: "$85k–$110k" }, { name: "Data Analyst", comp: "$80k–$105k" }, { name: "Associate Product Manager", comp: "$95k–$120k" }],
    placement: { role: "Staff Software Engineer", company: "US fintech company", outcome: "Closed a distributed-systems req in 19 days after two prior searches stalled with a portal-based agency — sourced entirely through direct approach, no inbound applicants involved." },
  },
  {
    anchor: "finance",
    title: "Finance & Banking",
    navLabel: "Finance & Banking",
    icon: icons.finance,
    intro: "Investment banking, risk, treasury and FP&A across banks, asset managers and fintechs. Every candidate we submit has been checked against the comp band and the regulatory requirement before your team sees the profile — not after.",
    stats: [["Active mandates", "228"], ["Avg time-to-fill", "22 days"], ["Credential-verified hires", "100%"], ["Offer-acceptance rate", "93%"]],
    senior: [{ name: "VP of Finance", comp: "$210k–$260k" }, { name: "Director of Risk & Compliance", comp: "$190k–$230k" }],
    mid: [{ name: "Senior Financial Analyst", comp: "$130k–$160k" }, { name: "Treasury Manager", comp: "$140k–$170k" }, { name: "Compliance Manager", comp: "$125k–$155k" }, { name: "FP&A Manager", comp: "$135k–$165k" }],
    junior: [{ name: "Financial Analyst II", comp: "$95k–$120k" }, { name: "Staff Accountant", comp: "$70k–$90k" }, { name: "Credit Analyst", comp: "$80k–$100k" }, { name: "AML / KYC Analyst", comp: "$75k–$95k" }],
    placement: { role: "Director of Risk & Compliance", company: "Canadian regional bank", outcome: "Built a fraud-risk function from a single hire — the candidate was sourced through direct approach, not the bank's applicant pipeline, and started inside the client's 30-day target." },
  },
  {
    anchor: "healthcare",
    title: "Healthcare",
    navLabel: "Healthcare",
    icon: icons.healthcare,
    intro: "Clinical, nursing, allied health and healthcare administration across hospitals, clinics and life sciences. Licensing and credential verification happen before a name reaches you — including DHA and other UAE clinical registrations where relevant.",
    stats: [["Active mandates", "184"], ["Avg time-to-fill", "26 days"], ["Licensing verified before submission", "100%"], ["Offer-acceptance rate", "91%"]],
    senior: [{ name: "VP of Clinical Operations", comp: "$200k–$250k" }, { name: "Director of Nursing", comp: "$150k–$185k" }],
    mid: [{ name: "Nurse Practitioner", comp: "$115k–$145k" }, { name: "Clinical Pharmacist", comp: "$130k–$160k" }, { name: "Healthcare Compliance Manager", comp: "$110k–$140k" }, { name: "Practice Manager", comp: "$95k–$120k" }],
    junior: [{ name: "Registered Nurse", comp: "$75k–$95k" }, { name: "Medical Coder", comp: "$55k–$70k" }, { name: "Patient Care Coordinator", comp: "$50k–$65k" }, { name: "Clinical Research Associate", comp: "$65k–$85k" }],
    placement: { role: "Director of Nursing", company: "UAE hospital group", outcome: "A DHA-licensed hire for a second-facility launch — full credential verification and licensing transfer coordinated end-to-end, candidate started inside 31 days." },
  },
  {
    anchor: "legal",
    title: "Legal",
    navLabel: "Legal",
    icon: icons.legal,
    intro: "In-house counsel, compliance officers and legal operations professionals across corporate and private practice. A large share of our legal mandates run fully confidential — no posting, no portal, no trace back to the hiring company.",
    stats: [["Active mandates", "92"], ["Avg time-to-fill", "27 days"], ["Confidential searches", "40%"], ["Offer-acceptance rate", "95%"]],
    senior: [{ name: "General Counsel", comp: "$230k–$300k" }, { name: "Director of Legal Operations", comp: "$170k–$210k" }],
    mid: [{ name: "Senior Corporate Counsel", comp: "$160k–$195k" }, { name: "Compliance Counsel", comp: "$145k–$175k" }, { name: "Contracts Manager", comp: "$120k–$150k" }, { name: "IP Counsel", comp: "$150k–$185k" }],
    junior: [{ name: "Corporate Paralegal", comp: "$70k–$90k" }, { name: "Contracts Administrator", comp: "$65k–$85k" }, { name: "Legal Operations Analyst", comp: "$75k–$95k" }, { name: "Compliance Analyst", comp: "$70k–$90k" }],
    placement: { role: "General Counsel", company: "Confidential US manufacturer", outcome: "A fully confidential succession search, run without a single public posting — approached, screened and closed in 33 days, incumbent never aware a search was underway." },
  },
  {
    anchor: "aerospace",
    title: "Aerospace & Defense",
    navLabel: "Aerospace & Defense",
    icon: icons.aerospace,
    intro: "Program management, systems engineering and manufacturing quality across aerospace primes, suppliers and defense contractors. We track clearance status and export-control eligibility from the first screening call, not the final round.",
    stats: [["Active mandates", "74"], ["Avg time-to-fill", "29 days"], ["Clearance-eligible hires placed", "60%"], ["Offer-acceptance rate", "90%"]],
    senior: [{ name: "VP of Program Management", comp: "$210k–$260k" }, { name: "Director of Systems Engineering", comp: "$190k–$230k" }],
    mid: [{ name: "Senior Systems Engineer", comp: "$145k–$175k" }, { name: "Avionics Engineer", comp: "$135k–$165k" }, { name: "Program Manager", comp: "$150k–$185k" }, { name: "Quality Assurance Manager", comp: "$120k–$150k" }],
    junior: [{ name: "Manufacturing Engineer", comp: "$90k–$115k" }, { name: "Test Engineer", comp: "$85k–$110k" }, { name: "Supply Quality Engineer", comp: "$80k–$105k" }, { name: "Technical Writer", comp: "$70k–$90k" }],
  },
  {
    anchor: "telecom",
    title: "Telecommunications",
    navLabel: "Telecommunications",
    icon: icons.telecom,
    intro: "Network engineering, RF and telecom program management for carriers, infrastructure builders and equipment vendors. Field-heavy roles are handled with the same screening rigor as head-office hires — no exceptions on reference depth.",
    stats: [["Active mandates", "86"], ["Avg time-to-fill", "25 days"], ["Network-build mandates (LTM)", "34"], ["Offer-acceptance rate", "92%"]],
    senior: [{ name: "VP of Network Engineering", comp: "$215k–$265k" }, { name: "Director of RF Engineering", comp: "$180k–$220k" }],
    mid: [{ name: "Senior Network Architect", comp: "$150k–$185k" }, { name: "RF Engineer", comp: "$135k–$165k" }, { name: "Telecom Program Manager", comp: "$140k–$170k" }, { name: "Field Operations Manager", comp: "$115k–$145k" }],
    junior: [{ name: "NOC Engineer", comp: "$75k–$95k" }, { name: "Telecom Technician", comp: "$60k–$80k" }, { name: "Network Support Specialist", comp: "$65k–$85k" }, { name: "Provisioning Analyst", comp: "$60k–$78k" }],
  },
  {
    anchor: "automotive",
    title: "Automotive & Manufacturing",
    navLabel: "Automotive & Manufacturing",
    icon: icons.automotive,
    intro: "Plant leadership, manufacturing engineering and production management across automotive OEMs, tier suppliers and industrial manufacturers. We staff around your shift pattern, not around a standard nine-to-five interview loop.",
    stats: [["Active mandates", "62"], ["Avg time-to-fill", "23 days"], ["Multi-shift roles filled (LTM)", "48"], ["Offer-acceptance rate", "89%"]],
    senior: [{ name: "VP of Manufacturing", comp: "$200k–$250k" }, { name: "Plant Director", comp: "$180k–$220k" }],
    mid: [{ name: "Manufacturing Engineering Manager", comp: "$140k–$170k" }, { name: "Supply Chain Manager, Automotive", comp: "$130k–$160k" }, { name: "Quality Manager", comp: "$120k–$150k" }, { name: "Production Manager", comp: "$115k–$145k" }],
    junior: [{ name: "Process Engineer", comp: "$85k–$110k" }, { name: "Manufacturing Technician", comp: "$55k–$75k" }, { name: "Quality Inspector", comp: "$50k–$68k" }, { name: "Maintenance Technician", comp: "$58k–$78k" }],
  },
  {
    anchor: "supply",
    title: "Supply Chain & Industrial",
    navLabel: "Supply Chain & Industrial",
    icon: icons.supply,
    intro: "Procurement, logistics and operations management for companies scaling physical footprint across markets. Our fastest-moving practice — most warehouse and distribution mandates fill inside three weeks.",
    stats: [["Active mandates", "128"], ["Avg time-to-fill", "20 days"], ["Sites covered across 4 markets", "40+"], ["Offer-acceptance rate", "94%"]],
    senior: [{ name: "VP of Supply Chain", comp: "$195k–$245k" }, { name: "Director of Procurement", comp: "$170k–$210k" }],
    mid: [{ name: "Senior Supply Chain Manager", comp: "$130k–$160k" }, { name: "Logistics Manager", comp: "$115k–$145k" }, { name: "Procurement Manager", comp: "$110k–$140k" }, { name: "Warehouse Operations Manager", comp: "$100k–$130k" }],
    junior: [{ name: "Supply Chain Analyst", comp: "$75k–$95k" }, { name: "Logistics Coordinator", comp: "$55k–$72k" }, { name: "Inventory Analyst", comp: "$60k–$78k" }, { name: "Buyer", comp: "$65k–$85k" }],
  },
  {
    anchor: "sales",
    title: "Sales & Marketing",
    navLabel: "Sales & Marketing",
    icon: icons.sales,
    intro: "B2B and B2C sales, growth marketing and revenue operations, from founding go-to-market hires to VP Sales. We screen for quota history and pipeline discipline, not just a polished pitch on the intro call.",
    stats: [["Active mandates", "204"], ["Avg time-to-fill", "18 days"], ["OTE-structured roles filled", "71%"], ["Offer-acceptance rate", "93%"]],
    senior: [{ name: "VP of Sales", comp: "$210k–$270k base" }, { name: "Director of Marketing", comp: "$170k–$210k" }],
    mid: [{ name: "Enterprise Account Executive", comp: "$130k–$170k base" }, { name: "Marketing Manager", comp: "$110k–$140k" }, { name: "Demand Generation Manager", comp: "$115k–$145k" }, { name: "Customer Success Manager", comp: "$100k–$130k" }],
    junior: [{ name: "Account Executive", comp: "$85k–$115k base" }, { name: "SDR / BDR", comp: "$60k–$80k base" }, { name: "Marketing Coordinator", comp: "$55k–$72k" }, { name: "Content Marketing Specialist", comp: "$60k–$78k" }],
    placement: { role: "VP of Sales", company: "US SaaS scale-up", outcome: "A founding go-to-market leadership hire, sourced entirely through direct outreach to competitor org charts — signed in 21 days, no recruiter fee paid on a bad first quarter." },
  },
  {
    anchor: "people",
    title: "Human Resources / People",
    navLabel: "HR / People",
    icon: icons.people,
    intro: "HR business partners, talent acquisition and total rewards, from coordinator to CHRO. We recruit people-function leaders the same way we'd want our own hired — thoroughly, and without a call centre involved.",
    stats: [["Active mandates", "96"], ["Avg time-to-fill", "21 days"], ["Confidential exec searches", "22%"], ["Offer-acceptance rate", "94%"]],
    senior: [{ name: "CHRO / VP of People", comp: "$220k–$280k" }, { name: "Director of Talent Acquisition", comp: "$160k–$195k" }],
    mid: [{ name: "Senior HR Business Partner", comp: "$125k–$155k" }, { name: "Total Rewards Manager", comp: "$130k–$160k" }, { name: "L&D Manager", comp: "$110k–$140k" }, { name: "Employee Relations Manager", comp: "$105k–$135k" }],
    junior: [{ name: "HR Generalist", comp: "$65k–$85k" }, { name: "Talent Acquisition Coordinator", comp: "$55k–$72k" }, { name: "HRIS Analyst", comp: "$70k–$90k" }, { name: "Recruiting Coordinator", comp: "$50k–$65k" }],
  },
];

const spine = [
  { n: "01", title: "Brief", desc: "A 60-minute working session to pressure-test the JD, set the scorecard and agree the off-limits list." },
  { n: "02", title: "Map", desc: "The research team builds a 40–80 name longlist from competitor org charts, alumni networks and our private database." },
  { n: "03", title: "Screen", desc: "Structured interviews against your scorecard — every respondent, not just the ones who look good on paper." },
  { n: "04", title: "Panel", desc: "We project-manage the interview loop end-to-end: scheduling, debriefs, calibration between rounds." },
  { n: "05", title: "Close", desc: "Offer negotiation, counter-offer defence, and check-ins at 3, 6 and 12 months after the start date." },
];

const testimonials = [
  { badge: "VP Talent · Technology", quote: "Our practice partner has placed engineers in this market for a decade. He knew which two candidates were about to leave their current jobs before we'd even finished the intake call.", name: "D. Whitfield", role: "VP Talent Acquisition · US SaaS company" },
  { badge: "CEO · Healthcare", quote: "We needed a Director of Nursing who was DHA-licensed and available inside six weeks for a hospital opening. Rivago's healthcare partner had three names to us in nine days.", name: "R. Al Suwaidi", role: "CEO · UAE hospital group" },
  { badge: "CPO · Finance & Banking", quote: "What I didn't expect was a recruiter who pushed back on our comp band because it was out of market. That single conversation saved us a re-open six months later.", name: "M. Okafor", role: "Chief People Officer · Canadian financial services" },
];

function StatBand({ rows }: { rows: [string, string][][] }) {
  return (
    <>
      {rows.map((row, i) => (
        <div className="page-hero-meta gs" key={i} style={i > 0 ? { marginTop: 12 } : undefined}>
          {row.map(([label, val]) => (
            <div className="page-hero-meta-row" key={label}><span>{label}</span><strong>{val}</strong></div>
          ))}
        </div>
      ))}
    </>
  );
}

function PracticeSection({ p, alt }: { p: Practice; alt: boolean }) {
  return (
    <section className={`section prac-sec${alt ? " alt" : ""}`} id={p.anchor}>
      <div className="wrap">
        <div className="prac-head gs">
          <div className="prac-icon-badge">{p.icon}</div>
          <div>
            <h2 className="section-h2" style={{ color: "var(--text)", marginBottom: 14, fontSize: "clamp(26px,3vw,38px)" }}>{p.title}</h2>
            <p style={{ color: "var(--text2)", maxWidth: 640, fontSize: 15, fontWeight: 300, lineHeight: 1.75 }}>{p.intro}</p>
          </div>
        </div>

        <div className="prac-body">
          <div className="role-panel gs">
            <div className="role-panel-h">Representative roles &amp; US comp ranges</div>
            <div className="role-group">
              <div className="role-tier">Senior &amp; leadership</div>
              {p.senior.map((r) => (
                <div className="role-row" key={r.name}><span>{r.name}</span><span className="comp">{r.comp}</span></div>
              ))}
            </div>
            <div className="role-group">
              <div className="role-tier">Mid-level</div>
              {p.mid.map((r) => (
                <div className="role-row" key={r.name}><span>{r.name}</span><span className="comp">{r.comp}</span></div>
              ))}
            </div>
            <div className="role-group">
              <div className="role-tier">Junior &amp; associate</div>
              {p.junior.map((r) => (
                <div className="role-row" key={r.name}><span>{r.name}</span><span className="comp">{r.comp}</span></div>
              ))}
            </div>
          </div>

          <div className="prac-side">
            <div className="stat2x2 gs">
              {p.stats.map(([label, val]) => (
                <div className="stat2x2-cell" key={label}><div className="v">{val}</div><div className="l">{label}</div></div>
              ))}
            </div>
            {p.placement && (
              <div className="placement-card gs">
                <div className="placement-tag">Recent placement</div>
                <div className="placement-role">{p.placement.role}</div>
                <div className="placement-co">{p.placement.company}</div>
                <p className="placement-out">{p.placement.outcome}</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default function IndustriesPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />

      <style>{`
        .prac-sec{scroll-margin-top:132px}
        .prac-nav{position:sticky;top:62px;z-index:50;background:rgba(6,15,7,.9);backdrop-filter:blur(20px);-webkit-backdrop-filter:blur(20px);border-bottom:1px solid var(--border)}
        .prac-nav-inner{max-width:1240px;margin:0 auto;padding:0 44px;display:flex;gap:4px;overflow-x:auto;scrollbar-width:none}
        .prac-nav-inner::-webkit-scrollbar{display:none}
        .prac-nav a{flex-shrink:0;padding:15px 16px;font-size:13px;color:var(--text2);white-space:nowrap;border-bottom:2px solid transparent;transition:color .18s,border-color .18s}
        .prac-nav a:hover{color:var(--text);border-color:rgba(61,255,135,.35)}
        .prac-head{display:flex;gap:20px;align-items:flex-start;margin-bottom:48px}
        .prac-icon-badge{flex-shrink:0;width:52px;height:52px;border-radius:14px;background:rgba(61,255,135,.08);border:1px solid rgba(61,255,135,.18);display:flex;align-items:center;justify-content:center}
        .prac-icon-badge svg{width:26px;height:26px}
        .prac-body{display:grid;grid-template-columns:1fr 300px;gap:24px;align-items:start}
        .role-panel{background:var(--surface);border:1px solid var(--border);border-radius:18px;padding:28px 30px}
        .role-panel-h{font-size:11px;font-weight:600;color:var(--text3);text-transform:uppercase;letter-spacing:.07em;margin-bottom:18px}
        .role-group{margin-bottom:18px}
        .role-group:last-child{margin-bottom:0}
        .role-tier{font-size:11.5px;font-weight:600;color:var(--green);margin-bottom:8px;letter-spacing:.02em}
        .role-row{display:flex;justify-content:space-between;gap:16px;padding:9px 0;border-bottom:1px solid var(--border);font-size:13.5px;color:var(--text2)}
        .role-row:last-child{border-bottom:none}
        .role-row .comp{color:var(--text);font-family:var(--fm);font-size:12.5px;flex-shrink:0}
        .prac-side{display:flex;flex-direction:column;gap:16px}
        .stat2x2{display:grid;grid-template-columns:1fr 1fr;gap:1px;background:var(--border);border:1px solid var(--border);border-radius:16px;overflow:hidden}
        .stat2x2-cell{background:var(--bg2);padding:18px 16px}
        .stat2x2-cell .v{font-size:22px;font-weight:500;color:var(--green);letter-spacing:-.02em;line-height:1;margin-bottom:6px}
        .stat2x2-cell .l{font-size:11px;color:var(--text3);line-height:1.4}
        .placement-card{background:rgba(61,255,135,.05);border:1px solid rgba(61,255,135,.16);border-radius:16px;padding:22px}
        .placement-tag{font-size:10px;font-weight:600;color:var(--green);text-transform:uppercase;letter-spacing:.07em;margin-bottom:10px}
        .placement-role{font-size:15px;font-weight:500;color:var(--text);letter-spacing:-.01em}
        .placement-co{font-size:12px;color:var(--text3);margin-top:2px;margin-bottom:10px}
        .placement-out{font-size:12.5px;color:var(--text2);line-height:1.65;font-weight:300}
        @media(max-width:900px){.prac-body{grid-template-columns:1fr}}
        .spine-grid{display:grid;grid-template-columns:repeat(5,1fr);gap:1px;margin-top:48px;background:var(--border);border:1px solid var(--border);border-radius:20px;overflow:hidden}
        @media(max-width:900px){.spine-grid{grid-template-columns:1fr 1fr}}
        @media(max-width:560px){.spine-grid{grid-template-columns:1fr}}
        .gtee-cream{background:#fff!important;border:1px solid rgba(0,0,0,.07)!important;box-shadow:0 4px 16px rgba(11,19,17,.03)}
        .gtee-cream .gtee-val{color:#0A7040!important}
        .gtee-cream .gtee-val sup{color:var(--dt3)!important}
        .gtee-cream .gtee-title{color:var(--dt)!important}
        .gtee-cream .gtee-desc{color:var(--dt2)!important}
      `}</style>

      <header className="page-hero">
        <div className="page-hero-inner wide">
          <div className="crumbs"><Link href={routes.home}>Home</Link><span className="crumbs-sep">/</span><span>Industries</span></div>
          <div className="eyebrow ew-light gs" style={{ marginBottom: 28, display: "inline-flex", alignItems: "center", gap: 7 }}><span className="eyebrow-dot"></span>Industries</div>
          <h1 className="gs">Specialist partners,<br />aligned to the <em>sector you hire in.</em></h1>
          <p className="lead gs">Every Rivago partner runs one practice and has placed inside it for seven or more years. They know the comp bands, the unpublished orgs, and the people whose LinkedIn still says &ldquo;Director&rdquo; three years after they made VP.</p>
          <div style={{ marginTop: 40 }}>
            <StatBand
              rows={[
                [["Mandates delivered (LTM)", "1,486"], ["Specialist practices", "10"], ["Senior partners", "34"], ["Avg partner tenure in-sector", "11 yrs"]],
                [["Median time-to-shortlist", "21 days"], ["Offer-acceptance rate", "94%"], ["Candidate network", "62k+"], ["12-month retention", "91%"]],
              ]}
            />
          </div>
        </div>
      </header>

      <nav className="prac-nav" aria-label="Jump to practice">
        <div className="prac-nav-inner">
          {practices.map((p) => (<a key={p.anchor} href={`#${p.anchor}`}>{p.navLabel}</a>))}
        </div>
      </nav>

      {practices.map((p, i) => (
        <PracticeSection p={p} alt={i % 2 === 1} key={p.anchor} />
      ))}

      {/* COMMON SPINE */}
      <section className="section">
        <div className="wrap">
          <div className="gs">
            <div className="eyebrow ew-light" style={{ marginBottom: 20, display: "inline-flex", alignItems: "center", gap: 7 }}><span className="eyebrow-dot"></span>Every practice, one spine</div>
            <h2 className="section-h2" style={{ color: "var(--text)", maxWidth: 720 }}>Ten sectors.<br />One <em style={{ fontFamily: "var(--fs)", fontStyle: "italic", color: "var(--green)" }}>disciplined process.</em></h2>
          </div>
          <div className="spine-grid">
            {spine.map((s) => (
              <div className="proc-step gs" key={s.n}>
                <div className="proc-num">{s.n}</div>
                <div className="proc-title">{s.title}</div>
                <div className="proc-desc">{s.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHAT WE PUT IN WRITING — CREAM */}
      <section className="section cream">
        <div className="wrap">
          <div className="gs">
            <div className="eyebrow ew-dark" style={{ marginBottom: 20, display: "inline-flex", alignItems: "center", gap: 7 }}><span className="eyebrow-dot"></span>What we put in writing</div>
            <h2 className="section-h2" style={{ color: "var(--dt)", maxWidth: 700 }}>Four numbers we&apos;ll stand behind,<br />whichever <em style={{ fontFamily: "var(--fs)", fontStyle: "italic", color: "#0A7040" }}>practice you need.</em></h2>
          </div>
          <div className="guarantee">
            <div className="gtee gtee-cream gs"><div className="gtee-val">21<sup>days</sup></div><div className="gtee-title">Median time-to-shortlist</div><div className="gtee-desc">Across all ten practices, from signed brief to calibrated finalists.</div></div>
            <div className="gtee gtee-cream gs"><div className="gtee-val">94<sup>%</sup></div><div className="gtee-title">Offer-acceptance rate</div><div className="gtee-desc">Last 12 months, every sector, every seniority band.</div></div>
            <div className="gtee gtee-cream gs"><div className="gtee-val">12<sup>mo</sup></div><div className="gtee-title">Retention guarantee</div><div className="gtee-desc">A placement that leaves inside 12 months gets a free replacement search.</div></div>
            <div className="gtee gtee-cream gs"><div className="gtee-val">1</div><div className="gtee-title">Named partner</div><div className="gtee-desc">The specialist who owns your sector — from brief to signed offer. No handoffs.</div></div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="testi-sec">
        <div className="testi-head">
          <div>
            <div className="eyebrow ew-light gs" style={{ marginBottom: 18 }}>Notes from the other side of the table</div>
            <h2 className="testi-h2 gs">In their <em>own words.</em></h2>
          </div>
        </div>
        <Testimonials items={testimonials} />
      </section>

      {/* CTA — CREAM */}
      <section className="clients-cta gs">
        <h2>Which practice are you<br /><em>hiring into?</em></h2>
        <p>Tell us the sector and the seniority, and we route the brief straight to the partner who already knows that market — same working day.</p>
        <div style={{ display: "flex", gap: 12, justifyContent: "center" }}>
          <button className="btn btn-cream-prim" data-hire>Book a strategy call <Arrow /></button>
          <Link className="btn btn-cream-ghost" href={routes.services}>See all services</Link>
        </div>
      </section>
    </>
  );
}
