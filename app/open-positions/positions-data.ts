// Rivago Infotech's OWN internal corporate hiring board (/open-positions).
// These are roles working AT Rivago itself, reached from the Careers pages'
// "See open roles" buttons. Ported verbatim from the real openpositions.html
// export. Not to be confused with app/view-jobs/jobs-data.ts, which lists
// Rivago's CLIENTS' open roles for outside candidates.

export type Department = "Recruitment" | "Business Development" | "Client" | "Operations" | "Marketing" | "People" | "Engineering" | "Finance";

/* Fixed annual pay in INR. Ranges set 2 October 2026 from public market data
   for each role in Pune / India (Glassdoor India, PayScale, Indeed India
   salary pages — 25th–75th percentiles where given), at the firm's request
   for "the common salary in the market". `incentives` marks roles where
   commission or incentives are normal on top. Review against the firm's
   actual bands before publishing changes. */
export type Salary = { min: number; max: number; incentives?: boolean };

export type Position = {
  /* ISO date the role was posted. */
  posted?: string;
  salary?: Salary;
  /* Shown as the level chip on the role page; derived from the title when
     absent, which reads "Senior" for anything titled Senior/Lead/Director. */
  seniority?: string;
  id: string;
  title: string;
  department: Department;
  location: string;
  type: "Full-time" | "Contract";
  locationType: "On-site" | "Hybrid" | "Remote";
};

/* "Client Success Manager — Dubai, UAE" removed 2 October 2026: the firm
   confirmed it is not a real opening, and Rivago has no UAE entity to
   employ anyone under. */
/* NONE OF THESE IS CONFIRMED AS OPEN (2 October 2026). The Dubai role above
   proved not to exist, and the firm says it mainly hires for recruitment
   and staffing — none of the eleven is a recruiting desk. They are parked
   here, unpublished, until the firm confirms which are real. To publish a
   role, move its entry into `positions`; the board switches from the
   general-application panel to the list as soon as one is there.
   Delivery Operations Manager, Talent Acquisition Specialist and Account
   Director were confirmed in their recruitment-firm form and are now in
   `positions`; the entries here are the old, unconfirmed versions. */
export const unconfirmedPositions: Position[] = [
  { id: "delivery-operations-manager", title: "Delivery Operations Manager", department: "Operations", location: "Pune, India", type: "Full-time", locationType: "On-site" },
  { id: "head-of-brand-marketing", title: "Head of Brand & Marketing", department: "Marketing", location: "Delaware, US", type: "Full-time", locationType: "On-site" },
  { id: "content-social-lead", title: "Content & Social Lead", department: "Marketing", location: "Delaware, US", type: "Full-time", locationType: "On-site" },
  { id: "people-partner", title: "People Partner", department: "People", location: "Pune, India", type: "Full-time", locationType: "On-site" },
  { id: "talent-acquisition-specialist", title: "Talent Acquisition Specialist", department: "People", location: "Delaware, US", type: "Full-time", locationType: "On-site" },
  { id: "senior-software-engineer-internal-platform", title: "Senior Software Engineer · Internal Platform", department: "Engineering", location: "Remote (US / CA)", type: "Full-time", locationType: "Remote" },
  { id: "product-designer-internal-tools", title: "Product Designer · Internal Tools", department: "Engineering", location: "Pune, IN", type: "Full-time", locationType: "On-site" },
  { id: "data-analyst-market-intelligence", title: "Data Analyst · Market Intelligence", department: "Engineering", location: "Pune, India", type: "Full-time", locationType: "On-site" },
  { id: "finance-manager", title: "Finance Manager", department: "Finance", location: "Delaware, US", type: "Full-time", locationType: "On-site" },
  { id: "compliance-contracts-counsel", title: "Compliance & Contracts Counsel", department: "Finance", location: "Delaware, US", type: "Full-time", locationType: "On-site" },
  { id: "account-director-strategic-clients", title: "Account Director · Strategic Clients", department: "Client", location: "Delaware, US", type: "Full-time", locationType: "On-site" },
];

/* Published, confirmed openings — supplied by the firm on 2 October 2026:
   all hiring for Pune or remote, all full-time (confirmed). Role-page copy for each is in
   app/view-jobs/role/RoleDetail.tsx (ROLE_COPY), drafted from the title and
   marked for the firm's review. */
const PUNE_OR_REMOTE = "Pune, India or remote";
const POSTED = "2026-10-02";
export const positions: Position[] = [
  { id: "senior-us-recruiter", title: "Senior US Recruiter", department: "Recruitment", location: PUNE_OR_REMOTE, type: "Full-time", locationType: "Remote", seniority: "Senior", posted: POSTED, salary: { min: 500000, max: 900000, incentives: true } },
  { id: "recruitment-manager", title: "Recruitment Manager", department: "Recruitment", location: PUNE_OR_REMOTE, type: "Full-time", locationType: "Remote", seniority: "Manager", posted: POSTED, salary: { min: 900000, max: 1500000 } },
  { id: "talent-acquisition-specialist-healthcare", title: "Talent Acquisition Specialist · Healthcare", department: "Recruitment", location: PUNE_OR_REMOTE, type: "Full-time", locationType: "Remote", seniority: "Mid–Senior", posted: POSTED, salary: { min: 400000, max: 800000, incentives: true } },
  { id: "business-development-manager", title: "Business Development Manager", department: "Business Development", location: PUNE_OR_REMOTE, type: "Full-time", locationType: "Remote", seniority: "Manager", posted: POSTED, salary: { min: 800000, max: 1500000, incentives: true } },
  { id: "business-development-executive", title: "Business Development Executive", department: "Business Development", location: PUNE_OR_REMOTE, type: "Full-time", locationType: "Remote", seniority: "Associate", posted: POSTED, salary: { min: 350000, max: 600000, incentives: true } },
  { id: "account-manager", title: "Account Manager", department: "Client", location: PUNE_OR_REMOTE, type: "Full-time", locationType: "Remote", seniority: "Mid–Senior", posted: POSTED, salary: { min: 600000, max: 1200000, incentives: true } },
  { id: "account-director-strategic-clients", title: "Account Director · Strategic Clients", department: "Client", location: PUNE_OR_REMOTE, type: "Full-time", locationType: "Remote", seniority: "Director", posted: POSTED, salary: { min: 1800000, max: 3000000 } },
  { id: "delivery-operations-manager", title: "Delivery Operations Manager", department: "Operations", location: PUNE_OR_REMOTE, type: "Full-time", locationType: "Remote", seniority: "Manager", posted: POSTED, salary: { min: 800000, max: 1500000 } },
];

/* Level shown on a role page: the role's own, else read from the title. */
export function seniorityOf(p: Pick<Position, "title" | "seniority">): string {
  if (p.seniority) return p.seniority;
  if (/Head/i.test(p.title)) return "Head of";
  if (/Director/i.test(p.title)) return "Director";
  if (/Senior|Lead/i.test(p.title)) return "Senior";
  return "Mid–Senior";
}

/* "₹5–9 LPA" style label, as Indian job ads quote pay. */
export function salaryLabel(sal: Salary): string {
  const l = (n: number) => String(Math.round((n / 100000) * 10) / 10);
  return `₹${l(sal.min)}–${l(sal.max)} LPA${sal.incentives ? " + incentives" : ""}`;
}
