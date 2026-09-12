// Rivago Infotech's OWN internal corporate hiring board (/open-positions).
// These are roles working AT Rivago itself — recruiters, ops, marketing,
// engineering, finance, client-facing staff — reached from the Career page's
// "See open roles" buttons. Not to be confused with app/view-jobs/jobs-data.ts,
// which lists Rivago's CLIENTS' open roles for outside candidates.

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
  { id: "senior-recruiting-partner-client", title: "Senior Recruiting Partner — Client", department: "Client", location: "Wilmington, DE", type: "Full-time", locationType: "Hybrid" },
  { id: "client-success-partner", title: "Client Success Partner", department: "Client", location: "Ontario, Canada", type: "Full-time", locationType: "Hybrid" },
  { id: "marketing-lead-brand-content", title: "Marketing Lead — Brand & Content", department: "Marketing", location: "Remote", type: "Full-time", locationType: "Remote" },
  { id: "demand-generation-manager", title: "Demand Generation Manager", department: "Marketing", location: "Pune, India", type: "Full-time", locationType: "Hybrid" },
  { id: "people-operations-manager", title: "People Operations Manager", department: "People", location: "Wilmington, DE", type: "Full-time", locationType: "On-site" },
  { id: "internal-talent-acquisition-lead", title: "Internal Talent Acquisition Lead", department: "People", location: "Pune, India", type: "Full-time", locationType: "Hybrid" },
  { id: "platform-engineer", title: "Platform Engineer", department: "Engineering", location: "Remote", type: "Full-time", locationType: "Remote" },
  { id: "data-engineer-internal-tools", title: "Data Engineer — Internal Tools", department: "Engineering", location: "Pune, India", type: "Full-time", locationType: "Hybrid" },
  { id: "finance-manager-internal", title: "Finance Manager", department: "Finance", location: "Wilmington, DE", type: "Full-time", locationType: "On-site" },
  { id: "accounts-payable-specialist", title: "Accounts Payable Specialist", department: "Finance", location: "Pune, India", type: "Full-time", locationType: "Hybrid" },
  { id: "delivery-operations-manager", title: "Delivery Operations Manager", department: "Operations", location: "Ontario, Canada", type: "Full-time", locationType: "Hybrid" },
  { id: "workforce-compliance-specialist", title: "Workforce Compliance Specialist", department: "Operations", location: "Wilmington, DE", type: "Full-time", locationType: "On-site" },
];

export function findPositionExact(id: string | null | undefined): Position | undefined {
  return positions.find((p) => p.id === id);
}
