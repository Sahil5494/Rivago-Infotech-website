import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { positions, seniorityOf } from "../positions-data";
import RoleView from "@/app/view-jobs/role/RoleView";
import { copyFor } from "@/app/view-jobs/role/role-copy";
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
  const description = `${copyFor(p.title, p.department).a} ${p.type}, ${p.location}.`;
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
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <RoleView
        role={p.title}
        loc={p.location}
        dept={p.department}
        sen={seniorityOf(p)}
        eng={p.type === "Full-time" ? "Full time · Permanent" : "Contract"}
        isInternal
      />
    </>
  );
}
