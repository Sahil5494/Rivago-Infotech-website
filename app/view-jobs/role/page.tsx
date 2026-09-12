import { Suspense } from "react";
import type { Metadata } from "next";
import RoleDetail from "./RoleDetail";

export const metadata: Metadata = {
  title: "Open role — Rivago Infotech",
  description: "View the full details of an open role Rivago Infotech is recruiting for, and apply directly to a named recruiter — no portal.",
  alternates: { canonical: "https://rivagoinfotech.com/view-jobs/role" },
};

function RoleFallback() {
  return (
    <header className="page-hero">
      <div className="page-hero-inner wide">
        <div className="eyebrow ew-light" style={{ marginBottom: 24, display: "inline-flex", alignItems: "center", gap: 7 }}><span className="eyebrow-dot"></span>Loading role…</div>
        <h1>&nbsp;</h1>
      </div>
    </header>
  );
}

export default function RolePage() {
  return (
    <Suspense fallback={<RoleFallback />}>
      <RoleDetail />
    </Suspense>
  );
}
