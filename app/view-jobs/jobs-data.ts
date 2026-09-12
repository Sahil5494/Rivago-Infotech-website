// Sample client-facing job listings for the Rivago candidate jobs board
// (/view-jobs, /search-jobs, /view-jobs/role). These are roles Rivago's
// CLIENT companies are hiring for — candidates apply here to work at the
// client, with Rivago acting as the recruiter. Not to be confused with
// app/open-positions/positions-data.ts, which lists Rivago's OWN internal
// corporate roles.

export type Job = {
  id: string;
  title: string;
  company: string;
  location: string;
  type: "Full-time" | "Contract" | "Contract-to-hire";
  postedDaysAgo: number;
  skills: string[];
  salary?: string;
  remote: boolean;
};

export const jobs: Job[] = [
  { id: "ai-llm-engineer-austin", title: "AI / LLM Engineer", company: "US Fintech Company", location: "Austin, TX", type: "Full-time", postedDaysAgo: 2, skills: ["Python", "PyTorch", "RAG", "LangChain"], salary: "$165k – $210k", remote: false },
  { id: "gcp-ai-engineer-remote", title: "GCP AI Engineer", company: "Cloud Analytics Platform", location: "Remote US", type: "Full-time", postedDaysAgo: 1, skills: ["Vertex AI", "GCP", "Python", "MLOps"], salary: "$150k – $195k", remote: true },
  { id: "data-engineer-toronto", title: "Data Engineer", company: "Toronto Financial Group", location: "Toronto, ON", type: "Full-time", postedDaysAgo: 4, skills: ["Spark", "Airflow", "SQL", "dbt"], salary: "CAD $115k – $145k", remote: false },
  { id: "fullstack-react-node-nyc", title: "Full-Stack Engineer (React/Node)", company: "NYC Insurtech Startup", location: "New York, NY", type: "Full-time", postedDaysAgo: 3, skills: ["React", "Node.js", "TypeScript", "PostgreSQL"], salary: "$140k – $175k", remote: false },
  { id: "java-backend-charlotte", title: "Java Backend Engineer", company: "Charlotte Banking Group", location: "Charlotte, NC", type: "Contract", postedDaysAgo: 6, skills: ["Java", "Spring Boot", "Kafka", "AWS"], salary: "$85 – $105/hr", remote: false },
  { id: "mlops-platform-seattle", title: "MLOps / Platform Engineer", company: "Seattle Cloud Startup", location: "Seattle, WA", type: "Full-time", postedDaysAgo: 5, skills: ["Kubernetes", "Terraform", "MLflow", "CI/CD"], salary: "$155k – $190k", remote: false },
  { id: "ai-llm-engineer-remote", title: "AI / LLM Engineer", company: "Remote-First SaaS Company", location: "Remote US", type: "Contract", postedDaysAgo: 1, skills: ["Python", "LLMOps", "Vector DBs", "OpenAI API"], salary: "$95 – $130/hr", remote: true },
  { id: "data-engineer-pune", title: "Data Engineer", company: "Pune Delivery Centre — Global Bank", location: "Pune, India", type: "Full-time", postedDaysAgo: 7, skills: ["Python", "Spark", "SQL", "Azure"], salary: "Competitive", remote: false },
  { id: "finance-manager-wilmington", title: "Finance Manager", company: "Delaware Manufacturing Group", location: "Wilmington, DE", type: "Full-time", postedDaysAgo: 3, skills: ["FP&A", "Forecasting", "Excel", "NetSuite"], salary: "$110k – $135k", remote: false },
  { id: "compliance-analyst-nyc", title: "Compliance Analyst", company: "US Regional Bank", location: "New York, NY", type: "Full-time", postedDaysAgo: 8, skills: ["AML", "KYC", "Regulatory Reporting"], salary: "$85k – $105k", remote: false },
  { id: "registered-nurse-toronto", title: "Registered Nurse — Med/Surg", company: "Toronto Hospital Network", location: "Toronto, ON", type: "Contract-to-hire", postedDaysAgo: 2, skills: ["Med/Surg", "Acute Care", "EMR"], salary: "CAD $42 – $52/hr", remote: false },
  { id: "corporate-counsel-remote", title: "Corporate Counsel", company: "US SaaS Enterprise", location: "Remote US", type: "Full-time", postedDaysAgo: 9, skills: ["Commercial Contracts", "SaaS Agreements", "Data Privacy"], salary: "$180k – $220k", remote: true },
  { id: "sales-director-chicago", title: "Sales Director", company: "Chicago B2B Software Company", location: "Chicago, IL", type: "Full-time", postedDaysAgo: 4, skills: ["Enterprise Sales", "SaaS", "Team Leadership"], salary: "$140k base + OTE", remote: false },
  { id: "devops-engineer-austin", title: "DevOps Engineer", company: "Austin Health-Tech Company", location: "Austin, TX", type: "Full-time", postedDaysAgo: 6, skills: ["AWS", "Terraform", "Docker", "CI/CD"], salary: "$130k – $160k", remote: false },
  { id: "product-manager-sf", title: "Product Manager — Platform", company: "San Francisco Fintech", location: "San Francisco, CA", type: "Full-time", postedDaysAgo: 5, skills: ["Roadmapping", "APIs", "Agile", "Analytics"], salary: "$160k – $200k", remote: false },
  { id: "ux-designer-remote-ca", title: "UX Designer", company: "Remote Canadian SaaS Company", location: "Remote Canada", type: "Contract", postedDaysAgo: 3, skills: ["Figma", "User Research", "Design Systems"], salary: "CAD $70 – $90/hr", remote: true },
  { id: "data-scientist-nyc", title: "Data Scientist", company: "NYC Media & Analytics Firm", location: "New York, NY", type: "Full-time", postedDaysAgo: 10, skills: ["Python", "SQL", "A/B Testing", "scikit-learn"], salary: "$135k – $170k", remote: false },
  { id: "cybersecurity-analyst-ottawa", title: "Cybersecurity Analyst", company: "Ottawa Government Contractor", location: "Ottawa, ON", type: "Full-time", postedDaysAgo: 7, skills: ["SIEM", "Threat Detection", "Incident Response"], salary: "CAD $95k – $120k", remote: false },
  { id: "supply-chain-analyst-charlotte", title: "Supply Chain Analyst", company: "Charlotte Industrial Group", location: "Charlotte, NC", type: "Full-time", postedDaysAgo: 11, skills: ["S&OP", "ERP", "Forecasting", "Excel"], salary: "$80k – $100k", remote: false },
  { id: "hr-business-partner-dubai", title: "HR Business Partner", company: "Dubai Logistics Group", location: "Dubai, UAE", type: "Full-time", postedDaysAgo: 4, skills: ["Employee Relations", "Talent Strategy", "UAE Labour Law"], salary: "Competitive", remote: false },
  { id: "financial-controller-toronto", title: "Financial Controller", company: "Toronto Financial Group", location: "Toronto, ON", type: "Full-time", postedDaysAgo: 12, skills: ["IFRS", "Consolidations", "Audit", "Team Leadership"], salary: "CAD $135k – $160k", remote: false },
  { id: "clinical-research-associate-nyc", title: "Clinical Research Associate", company: "NYC Life Sciences Company", location: "New York, NY", type: "Contract", postedDaysAgo: 6, skills: ["GCP", "Monitoring Visits", "Clinical Trials"], salary: "$60 – $80/hr", remote: false },
  { id: "marketing-manager-remote", title: "Marketing Manager — Growth", company: "Remote-First DTC Brand", location: "Remote US", type: "Full-time", postedDaysAgo: 2, skills: ["Paid Media", "Lifecycle", "Analytics"], salary: "$100k – $125k", remote: true },
  { id: "customer-success-manager-seattle", title: "Customer Success Manager", company: "Seattle Cloud Startup", location: "Seattle, WA", type: "Full-time", postedDaysAgo: 8, skills: ["SaaS Onboarding", "Renewals", "Account Growth"], salary: "$95k – $115k", remote: false },
  { id: "site-reliability-engineer-pune", title: "Site Reliability Engineer", company: "Pune Delivery Centre — Global Bank", location: "Pune, India", type: "Full-time", postedDaysAgo: 9, skills: ["Kubernetes", "Observability", "Linux", "Python"], salary: "Competitive", remote: false },
  { id: "gcp-ai-engineer-toronto", title: "GCP AI Engineer", company: "Toronto Financial Group", location: "Toronto, ON", type: "Full-time", postedDaysAgo: 5, skills: ["Vertex AI", "BigQuery", "GCP", "Python"], salary: "CAD $140k – $170k", remote: false },
  { id: "java-backend-remote", title: "Java Backend Engineer", company: "US Fintech Company", location: "Remote US", type: "Full-time", postedDaysAgo: 3, skills: ["Java", "Microservices", "AWS", "Kafka"], salary: "$135k – $165k", remote: true },
  { id: "accountant-mississauga", title: "Senior Accountant", company: "Mississauga Manufacturing Group", location: "Mississauga, ON", type: "Full-time", postedDaysAgo: 13, skills: ["GL", "Reconciliations", "IFRS", "Excel"], salary: "CAD $75k – $90k", remote: false },
];

/** Look up a client-facing job by id. Falls back to the first listing so the
 * template always has content, but real callers should treat a fallback hit
 * as "not found" when they need to distinguish the two. */
export function findJob(id: string | null | undefined): Job {
  return jobs.find((j) => j.id === id) ?? jobs[0];
}

export function findJobExact(id: string | null | undefined): Job | undefined {
  return jobs.find((j) => j.id === id);
}
