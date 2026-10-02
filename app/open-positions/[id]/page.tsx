import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { positions, seniorityOf, salaryLabel } from "../positions-data";
import RoleView from "@/app/view-jobs/role/RoleView";
import { copyFor } from "@/app/view-jobs/role/role-copy";
import { offices } from "@/lib/routes";
import { ogBase } from "@/lib/og";

/* One page per confirmed opening, built at compile time. A role id that is
   not in `positions` is a 404 rather than an empty "Position" page. */
export const dynamicParams = false;

export function generateStaticParams() {
  return positions.map((p) => ({ id: p.id }));
}

const BASE = "https://rivagoinfotech.com";
const find = (id: string) => positions.find((p) => p.id === id);

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }): Promise<Metadata> {
  const { id } = await params;
  const p = find(id);
  if (!p) return {};
  const title = `${p.title} · Careers at Rivago Infotech`;
  const description = `${copyFor(p.title, p.department).a} ${p.type}, ${p.location}${p.salary ? `, ${salaryLabel(p.salary)}` : ""}.`;
  const url = `${BASE}/open-positions/${p.id}`;
  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: { ...ogBase, title, description, url },
  };
}

export default async function PositionPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const p = find(id);
  if (!p) notFound();
  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: `${BASE}/` },
      { "@type": "ListItem", position: 2, name: "Careers", item: `${BASE}/career` },
      { "@type": "ListItem", position: 3, name: "Open Positions", item: `${BASE}/open-positions` },
      { "@type": "ListItem", position: 4, name: p.title, item: `${BASE}/open-positions/${p.id}` },
    ],
  };
  /* JobPosting, for Google for Jobs. Remote here means within India — the
     firm hires remote staff in India for these desks — so the remote
     requirement names India. The Pune office address comes from lib/routes.ts
     (confirmed real by the firm, 2 October 2026). */
  const copy = copyFor(p.title, p.department);
  const pune = offices.find((o) => o.city === "Pune");
  const posted = p.posted || new Date().toISOString().slice(0, 10);
  const validThrough = new Date(new Date(posted + "T00:00:00Z").getTime() + 60 * 864e5).toISOString().slice(0, 10);
  const jobPostingJsonLd = {
    "@context": "https://schema.org",
    "@type": "JobPosting",
    title: p.title,
    description: `<p>${copy.a}</p><p><strong>What you will own</strong></p><ul>${copy.own.map((x) => `<li>${x}</li>`).join("")}</ul><p><strong>What we are looking for</strong></p><ul>${copy.need.map((x) => `<li>${x}</li>`).join("")}</ul>`,
    datePosted: posted,
    validThrough,
    employmentType: p.type === "Full-time" ? "FULL_TIME" : "CONTRACTOR",
    hiringOrganization: { "@type": "Organization", name: "Rivago Infotech", sameAs: BASE },
    jobLocation: {
      "@type": "Place",
      address: { "@type": "PostalAddress", streetAddress: pune?.street, addressLocality: "Pune", addressRegion: "Maharashtra", postalCode: pune?.postal, addressCountry: "IN" },
    },
    ...(/remote/i.test(p.location) ? { jobLocationType: "TELECOMMUTE", applicantLocationRequirements: { "@type": "Country", name: "India" } } : {}),
    ...(p.salary ? { baseSalary: { "@type": "MonetaryAmount", currency: "INR", value: { "@type": "QuantitativeValue", minValue: p.salary.min, maxValue: p.salary.max, unitText: "YEAR" } } } : {}),
    directApply: false,
    url: `${BASE}/open-positions/${p.id}`,
  };
  const postedLabel = new Date(posted + "T00:00:00").toLocaleDateString("en-GB", { day: "numeric", month: "short", year: "numeric" });

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jobPostingJsonLd) }} />
      <RoleView
        role={p.title}
        loc={p.location}
        dept={p.department}
        sen={seniorityOf(p)}
        eng={p.type === "Full-time" ? "Full time · Permanent" : "Contract"}
        isInternal
        pay={p.salary ? salaryLabel(p.salary) : undefined}
        posted={postedLabel}
      />
    </>
  );
}
