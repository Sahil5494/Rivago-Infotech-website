import Link from "next/link";
import { routes } from "@/lib/routes";
import { articles } from "@/app/resources/data";

/* The insights mosaic.
 *
 * Same grid mechanic as the proof wall this section replaced — four columns
 * filled COLUMN-FIRST, tall tiles spanning two rows and compact tiles one —
 * carrying articles instead of marks and quotes.
 *
 * The mosaic needs two tile sizes to read as a mosaic rather than a grid.
 * The wall got that from its content being genuinely different in kind (a
 * quote is tall, a logo is not). Eight articles are all the same kind of
 * thing, so the split is made deliberately: four run tall and carry their
 * dek, four run compact and lead on the headline alone. That is also how
 * the section earns its stagger without any tile being padded out.
 *
 * Four tall at two rows plus four compact at one is twelve row-units across
 * four columns — three each, so the grid closes as a perfect rectangle with
 * no holes, and all eight articles are shown rather than six.
 *
 *     col 1      col 2      col 3      col 4
 *   ┌────────┐ ┌────────┐ ┌────────┐ ┌────────┐
 *   │        │ │compact │ │        │ │compact │
 *   │  tall  │ ├────────┤ │  tall  │ ├────────┤
 *   │        │ │        │ │        │ │        │
 *   ├────────┤ │  tall  │ ├────────┤ │  tall  │
 *   │compact │ │        │ │compact │ │        │
 *   └────────┘ └────────┘ └────────┘ └────────┘
 *
 * No author, and no images — the same two departures from the Coditas and
 * Insight Global references as before. The eight bylines in the data were
 * invented people, and every article `image` is a hotlink to
 * images.unsplash.com, which this page does not load.
 */

/* Column-major order: each column is one tall and one compact, with the tall
   one alternating between the top and the bottom slot so the wall staggers
   instead of banding. */
const ORDER: { i: number; tall: boolean }[] = [
  { i: 0, tall: true }, { i: 4, tall: false },
  { i: 5, tall: false }, { i: 1, tall: true },
  { i: 2, tall: true }, { i: 6, tall: false },
  { i: 7, tall: false }, { i: 3, tall: true },
];

export default function InsightsGrid() {
  return (
    <div className="hins-grid">
      {ORDER.map(({ i, tall }) => {
        const a = articles[i];
        if (!a) return null;
        return (
          <Link
            className={`hins-card${tall ? " tall" : ""}`}
            data-cat={a.category}
            key={a.id}
            href={`${routes.article}?id=${a.id}`}
          >
            <span className="hins-cat">{a.categoryLabel}</span>
            <h3 className="hins-ti">{a.title}</h3>
            {tall && <p className="hins-dek">{a.dek}</p>}
            <span className="hins-meta">
              {a.readTime}
              <svg width="13" height="13" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                <path d="M3 7h8M8 4l3 3-3 3" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </span>
          </Link>
        );
      })}
    </div>
  );
}
