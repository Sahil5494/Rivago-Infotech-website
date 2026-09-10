"use client";

import { usePathname } from "next/navigation";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import PageNavSide from "@/components/PageNavSide";
import { routes } from "@/lib/routes";

/**
 * The landing page ships its own header and footer (see app/page.tsx), so the
 * shared chrome steps aside on that route only. Every other page is unchanged.
 */
function useIsHome() {
  return usePathname() === routes.home;
}

export function SiteNav() {
  return useIsHome() ? null : <Nav />;
}

export function SiteFooter() {
  return useIsHome() ? null : <Footer />;
}

export function SitePageNav() {
  return useIsHome() ? null : <PageNavSide />;
}
