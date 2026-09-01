// Rivago Infotech's OWN internal corporate hiring board (/open-positions).
// These are roles working AT Rivago itself, reached from the Careers pages'
// "See open roles" buttons. Ported verbatim from the real openpositions.html
// export. Not to be confused with app/view-jobs/jobs-data.ts, which lists
// Rivago's CLIENTS' open roles for outside candidates.

export type Department = "Operations" | "Marketing" | "People" | "Engineering" | "Finance" | "Client";

export type Position = {
  id: string;
  title: string;
  department: Department;
  location: string;
  type: "Full-time" | "Contract";
  locationType: "On-site" | "Hybrid" | "Remote";
};

export const positions: Position[] = [
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
  { id: "client-success-manager", title: "Client Success Manager", department: "Client", location: "Dubai, UAE", type: "Full-time", locationType: "On-site" },
  { id: "account-director-strategic-clients", title: "Account Director · Strategic Clients", department: "Client", location: "Delaware, US", type: "Full-time", locationType: "On-site" },
];

export function findPositionExact(id: string | null | undefined): Position | undefined {
  return positions.find((p) => p.id === id);
}
