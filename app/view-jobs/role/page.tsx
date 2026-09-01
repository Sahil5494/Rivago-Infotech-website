import { Suspense } from "react";
import type { Metadata } from "next";
import RoleDetail from "./RoleDetail";

export const metadata: Metadata = {
  title: "Position · Rivago Infotech",
  description: "Role description for an open position at Rivago Infotech — what you will own, what we are looking for, and how our hiring process runs.",
  alternates: { canonical: "https://rivagoinfotech.com/view-jobs/role" },
  openGraph: {
    title: "Position · Rivago Infotech",
    description: "Role description for an open position at Rivago Infotech — what you will own, what we are looking for, and how our hiring process runs.",
    url: "https://rivagoinfotech.com/view-jobs/role",
  },
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://rivagoinfotech.com/" },
    { "@type": "ListItem", position: 2, name: "Careers", item: "https://rivagoinfotech.com/career" },
    { "@type": "ListItem", position: 3, name: "Role", item: "https://rivagoinfotech.com/view-jobs/role" },
  ],
};

function RoleFallback() {
  return (
    <div className="pd">
      <div className="pd-eyb">Loading role…</div>
      <h1>&nbsp;</h1>
    </div>
  );
}

export default function RolePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <Suspense fallback={<RoleFallback />}>
        <RoleDetail />
      </Suspense>
    </>
  );
}
