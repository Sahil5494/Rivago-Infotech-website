import Link from "next/link";
import { routes } from "@/lib/routes";
import { articles } from "@/app/resources/data";

/* The insights grid.
 *
 * Follows the Coditas Insights and Insight Global News pattern the client
 * picked — a staggered grid of written pieces — with two deliberate
 * departures.
 *
 * No author. Both references put a name and a face on every card, and that
 * is the strongest part of the pattern; it is also the part Rivago cannot
 * honestly fill, because the eight bylines in the repo were invented people.
 * The slot is removed rather than filled with a house name and a stock
 * portrait — an avatar is the element on a card a reader is least likely to
 * question.
 *
 * No images. Insight Global gives every story a masked photograph. The
 * article records here carry an `image`, but every one is a hotlink to
 * images.unsplash.com — an uncredited third-party dependency, on a host this
 * page otherwise never touches. The cards are typographic instead, which is
 * also what Coditas does.
 *
 * Real masonry via CSS columns rather than a grid: the cards are different
 * heights because the deks are different lengths, and columns is the one
 * layout mode that packs that without either stretching cards to a row
 * height or leaving holes.
 */

const SHOWN = 6;

export default function InsightsGrid() {
  return (
    <div className="hins-grid">
      {articles.slice(0, SHOWN).map((a) => (
        <Link className="hins-card" data-cat={a.category} key={a.id} href={`${routes.article}?id=${a.id}`}>
          <span className="hins-cat">{a.categoryLabel}</span>
          <h3 className="hins-ti">{a.title}</h3>
          <p className="hins-dek">{a.dek}</p>
          <span className="hins-meta">
            {a.readTime}
            <svg width="13" height="13" viewBox="0 0 14 14" fill="none" aria-hidden="true">
              <path d="M3 7h8M8 4l3 3-3 3" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </span>
        </Link>
      ))}
    </div>
  );
}
