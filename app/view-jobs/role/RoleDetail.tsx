"use client";

import { useSearchParams } from "next/navigation";
import RoleView from "./RoleView";

/* /view-jobs/role: reads the role from the query string. Rivago's own
   openings now have real pages at /open-positions/[id]; this route still
   serves client roles and any old internal links. */
export default function RoleDetail() {
  const searchParams = useSearchParams();
  const mode = searchParams.get("mode") || "internal";
  return (
    <RoleView
      role={searchParams.get("role") || "Open position"}
      loc={searchParams.get("l") || "Delaware, US"}
      dept={searchParams.get("d") || "Operations"}
      sen={searchParams.get("s") || "Senior"}
      eng={searchParams.get("e") || "Full time · Permanent"}
      isInternal={mode === "internal"}
    />
  );
}
