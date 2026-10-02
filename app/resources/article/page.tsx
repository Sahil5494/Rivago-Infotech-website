import { notFound, permanentRedirect } from "next/navigation";
import { findArticle } from "../data";
import { articleHref } from "@/lib/routes";

/* The old article address, /resources/article?id=<id>. Articles now live at
   /resources/<id>; anything still pointing here — a bookmark, a shared link,
   an index entry — is sent there with a permanent (308) redirect so search
   engines move the listing across. An unknown or missing id is a 404. */
export default async function OldArticleUrl({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const { id } = await searchParams;
  const article = findArticle(typeof id === "string" ? id : undefined);
  if (!article) notFound();
  permanentRedirect(articleHref(article.id));
}
