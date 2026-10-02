// Rivago Infotech's OWN internal corporate hiring board (/open-positions).
// These are roles working AT Rivago itself, reached from the Careers pages'
// "See open roles" buttons. Ported verbatim from the real openpositions.html
// export. Not to be confused with app/view-jobs/jobs-data.ts, which lists
// Rivago's CLIENTS' open roles for outside candidates.

export type Department = "Recruitment" | "Business Development" | "Client" | "Operations" | "Marketing" | "People" | "Engineering" | "Finance";

export type Position = {
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
export const positions: Position[] = [
  { id: "senior-us-recruiter", title: "Senior US Recruiter", department: "Recruitment", location: PUNE_OR_REMOTE, type: "Full-time", locationType: "Remote", seniority: "Senior" },
  { id: "recruitment-manager", title: "Recruitment Manager", department: "Recruitment", location: PUNE_OR_REMOTE, type: "Full-time", locationType: "Remote", seniority: "Manager" },
  { id: "talent-acquisition-specialist-healthcare", title: "Talent Acquisition Specialist · Healthcare", department: "Recruitment", location: PUNE_OR_REMOTE, type: "Full-time", locationType: "Remote", seniority: "Mid–Senior" },
  { id: "business-development-manager", title: "Business Development Manager", department: "Business Development", location: PUNE_OR_REMOTE, type: "Full-time", locationType: "Remote", seniority: "Manager" },
  { id: "business-development-executive", title: "Business Development Executive", department: "Business Development", location: PUNE_OR_REMOTE, type: "Full-time", locationType: "Remote", seniority: "Associate" },
  { id: "account-manager", title: "Account Manager", department: "Client", location: PUNE_OR_REMOTE, type: "Full-time", locationType: "Remote", seniority: "Mid–Senior" },
  { id: "account-director-strategic-clients", title: "Account Director · Strategic Clients", department: "Client", location: PUNE_OR_REMOTE, type: "Full-time", locationType: "Remote", seniority: "Director" },
  { id: "delivery-operations-manager", title: "Delivery Operations Manager", department: "Operations", location: PUNE_OR_REMOTE, type: "Full-time", locationType: "Remote", seniority: "Manager" },
];

/* Level shown on a role page: the role's own, else read from the title. */
export function seniorityOf(p: Pick<Position, "title" | "seniority">): string {
  if (p.seniority) return p.seniority;
  if (/Head/i.test(p.title)) return "Head of";
  if (/Director/i.test(p.title)) return "Director";
  if (/Senior|Lead/i.test(p.title)) return "Senior";
  return "Mid–Senior";
}
