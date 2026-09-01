import type { Metadata } from "next";
import ResourcesView from "./ResourcesView";

export const metadata: Metadata = {
  title: "Resources · Rivago Infotech",
  description: "Hiring intelligence from Rivago Infotech — blog, case studies and data reports written by the senior partners running the searches.",
  alternates: { canonical: "https://rivagoinfotech.com/resources" },
  openGraph: {
    title: "Resources · Rivago Infotech",
    description: "Hiring intelligence from Rivago Infotech — blog, case studies and data reports written by the senior partners running the searches.",
    url: "https://rivagoinfotech.com/resources",
  },
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://rivagoinfotech.com/" },
    { "@type": "ListItem", position: 2, name: "Resources", item: "https://rivagoinfotech.com/resources" },
  ],
};

export default async function ResourcesPage({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const { view } = await searchParams;
  const initialView = view === "cs" ? "cs" : view === "blog" ? "blog" : "all";

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <ResourcesView initialView={initialView} />
    </>
  );
}
