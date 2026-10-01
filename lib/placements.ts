/* Candidates Rivago has placed, as supplied by the firm (October 2026):
   name and the role they were placed into. Shown on /search-jobs under
   "Don't just take it from us".

   Names only, no quotes. Nobody on this list has been quoted, and words
   must not be attributed to them until they have given them. When someone
   does, add a `quote` here rather than writing one.

   Check before going live that each person is happy to be named publicly.
   Spellings are as supplied, with capitalisation normalised — "Hari Parasd"
   may be meant as "Prasad"; confirm with the firm before changing it. */
/* `field` groups the role for the card's tag. It is the firm's practice
   area for the role, not anything the person said. */
export type Placement = { name: string; role?: string; field?: string };

export const placements: Placement[] = [
  { name: "Varun Singh", role: "Python Developer", field: "Software engineering" },
  { name: "Aditya Anandesi", role: "Salesforce Developer", field: "CRM & Salesforce" },
  { name: "Ravikiran Yadava", role: "Front-end ReactJS Developer", field: "Front-end" },
  { name: "Arshdeep Singh", role: "Java Backend Developer", field: "Software engineering" },
  { name: "Naga Satish Reddy Dwarampudi", role: "Java Backend Developer", field: "Software engineering" },
  { name: "Alexey Kuvshinov", role: "Lead Python Developer", field: "Software engineering" },
  { name: "Hari Parasd Thalisetti", role: "Senior Data Engineer", field: "Data" },
  { name: "Raymond Chang", role: "Data Analyst", field: "Data" },
  { name: "Sai Akhil", role: "Graph Data Engineer", field: "Data" },
  { name: "Radha Krishnan Swamynathan", role: "Java Developer with ReactJS", field: "Software engineering" },
  { name: "Jagadeeshwara Rao" }, // role not supplied
  { name: "Sameer Siddique", role: "Front End Engineer", field: "Front-end" },
  { name: "Zain Syed", role: "UI React Developer", field: "Front-end" },
  { name: "Deepak Alumuru", role: "MDM Data Engineer", field: "Data" },
  { name: "Christian Gaviria Alvarez", role: "Sr. PHP Developer", field: "Software engineering" },
  { name: "Venu Saraf", role: "Sr. AEM Developer", field: "Digital experience" },
  { name: "Kisanthyi Jeyakumar", role: "Support Engineer", field: "Support" },
  { name: "Vamsi Krishna Tetali", role: "AI Engineer", field: "AI & ML" },
];

/* First and last initial: "Naga Satish Reddy Dwarampudi" -> "ND". */
export const initials = (name: string) => {
  const w = name.split(/\s+/);
  return (w[0][0] + (w.length > 1 ? w[w.length - 1][0] : "")).toUpperCase();
};
