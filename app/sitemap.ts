import type { MetadataRoute } from "next";
import { routes } from "@/lib/routes";

const BASE = "https://rivagoinfotech.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const paths: string[] = [
    routes.home,
    routes.hireTalent,
    routes.services,
    routes.directHire,
    routes.contractStaffing,
    routes.temporaryStaffing,
    routes.rpo,
    routes.executiveSearch,
    routes.interimLeadership,
    routes.employerOfRecord,
    routes.industries,
    routes.resources,
    routes.about,
    routes.contactUs,
    routes.career,
    routes.viewJobs,
    routes.searchJobs,
    routes.openPositions,
    routes.signIn,
    routes.privacy,
    routes.terms,
    routes.cookies,
  ];

  return paths.map((path) => ({
    url: `${BASE}${path}`,
    lastModified: new Date(),
    changeFrequency: path === routes.home ? "weekly" : "monthly",
    priority: path === routes.home ? 1 : 0.7,
  }));
}
