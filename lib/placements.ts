/* Candidates Rivago has placed, as supplied by the firm (October 2026):
   name and the role they were placed into. Shown on /search-jobs under
   "Don't just take it from us".

   Names only, no quotes. Nobody on this list has been quoted, and words
   must not be attributed to them until they have given them. When someone
   does, add a `quote` here rather than writing one.

   Check before going live that each person is happy to be named publicly.
   Spellings are as supplied, with capitalisation normalised — "Hari Parasd"
   may be meant as "Prasad"; confirm with the firm before changing it. */
export type Placement = { name: string; role?: string };

export const placements: Placement[] = [
  { name: "Varun Singh", role: "Python Developer" },
  { name: "Aditya Anandesi", role: "Salesforce Developer" },
  { name: "Ravikiran Yadava", role: "Front-end ReactJS Developer" },
  { name: "Arshdeep Singh", role: "Java Backend Developer" },
  { name: "Naga Satish Reddy Dwarampudi", role: "Java Backend Developer" },
  { name: "Alexey Kuvshinov", role: "Lead Python Developer" },
  { name: "Hari Parasd Thalisetti", role: "Senior Data Engineer" },
  { name: "Raymond Chang", role: "Data Analyst" },
  { name: "Sai Akhil", role: "Graph Data Engineer" },
  { name: "Radha Krishnan Swamynathan", role: "Java Developer with ReactJS" },
  { name: "Jagadeeshwara Rao" }, // role not supplied
  { name: "Sameer Siddique", role: "Front End Engineer" },
  { name: "Zain Syed", role: "UI React Developer" },
  { name: "Deepak Alumuru", role: "MDM Data Engineer" },
  { name: "Christian Gaviria Alvarez", role: "Sr. PHP Developer" },
  { name: "Venu Saraf", role: "Sr. AEM Developer" },
  { name: "Kisanthyi Jeyakumar", role: "Support Engineer" },
  { name: "Vamsi Krishna Tetali", role: "AI Engineer" },
];

/* First and last initial: "Naga Satish Reddy Dwarampudi" -> "ND". */
export const initials = (name: string) => {
  const w = name.split(/\s+/);
  return (w[0][0] + (w.length > 1 ? w[w.length - 1][0] : "")).toUpperCase();
};
