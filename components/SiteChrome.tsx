"use client";

import { usePathname } from "next/navigation";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import PageNavSide from "@/components/PageNavSide";

/**
 * Migration switch for the shared chrome.
 *
 * A page rebuilt in the Counsel system ships its own header and footer
 * (components/CounselChrome.tsx), so the shared Nav and Footer must step aside
 * on that route — leaving one out renders two navigations at once.
 *
 * The list is empty because every page is currently on the original design and
 * uses the shared chrome. Add a pathname here when a page is migrated.
 */
const COUNSEL_ROUTES: string[] = [];

function useIsCounsel() {
  const pathname = usePathname();
  return COUNSEL_ROUTES.includes(pathname);
}

export function SiteNav() {
  return useIsCounsel() ? null : <Nav />;
}

export function SiteFooter() {
  return useIsCounsel() ? null : <Footer />;
}

export function SitePageNav() {
  return useIsCounsel() ? null : <PageNavSide />;
}
