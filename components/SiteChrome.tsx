"use client";

import { usePathname } from "next/navigation";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import PageNavSide from "@/components/PageNavSide";
import { routes } from "@/lib/routes";

/**
 * Pages rebuilt in the Counsel system ship their own header and footer
 * (components/CounselChrome.tsx), so the shared chrome steps aside on those
 * routes. Every page still on the old system is unchanged. Add a route here
 * as it is migrated — leaving one out renders two navigations at once.
 */
const COUNSEL_ROUTES: string[] = [routes.services];

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
