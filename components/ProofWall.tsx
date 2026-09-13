import Image from "next/image";
import { clientLogos } from "@/lib/routes";

/* The proof wall.
 *
 * Replaces two things: the deleted CASE STUDIES section, which was three
 * invented client results, and the testimonial carousel that sat below it.
 * One wall instead of an empty slot and a slider saying a related thing
 * eight hundred pixels apart.
 *
 * The mechanic is a mosaic of mixed tile types at mixed heights. That is
 * the point of it, and the reason it was chosen over a uniform grid: a
 * uniform grid needs every tile to carry the same fields, so it can only be
 * built once every field exists. This one holds a quote on its own, a mark
 * on its own, and — when there is one to hold — a named client, a face or a
 * measured outcome, without the section being redesigned around them.
 *
 * Nothing here is aspirational. Every tile is either a client whose mark is
 * approved for use or a quote already cleared for the site. There are no
 * placeholder tiles: an empty slot in a wall about credibility reads as an
 * absence, so the wall is sized to what exists and grows when more does.
 *
 * LAYOUT. Four columns, four rows of 138px, filled COLUMN-FIRST. Quote tiles
 * take two rows, logo tiles one, so each column is Q+L+L in some order and
 * the grid closes as a perfect rectangle with no holes:
 *
 *     col 1     col 2     col 3     col 4
 *   ┌───────┐ ┌───────┐ ┌───────┐ ┌───────┐
 *   │       │ │ logo  │ │ logo  │ │       │
 *   │ quote │ ├───────┤ ├───────┤ │ quote │
 *   │       │ │       │ │ logo  │ │       │
 *   ├───────┤ │ quote │ ├───────┤ ├───────┤
 *   │ logo  │ │       │ │       │ │ logo  │
 *   ├───────┤ ├───────┤ │ quote │ ├───────┤
 *   │ logo  │ │ logo  │ │       │ │ logo  │
 *   └───────┘ └───────┘ └───────┘ └───────┘
 *
 * grid-auto-flow:column is what makes that work — the tiles are listed in
 * column order below and the browser fills down each column in turn. Below
 * 1080px the flow reverts to rows and the spans are dropped, because a
 * two-column mosaic with row spans leaves holes.
 */

type Quote = { badge: string; quote: string; name: string };

/* Eight of the ten approved marks. The marquee near the top of the page
 * carries all ten; this is a selection, and it leaves out the second IT
 * services mark and the second law firm rather than running five
 * near-identical wordmarks down one column. */
const WALL_LOGOS = [
  "w-genpact.png",
  "w-persistent.png",
  "w-hexaware.png",
  "w-saama.png",
  "w-hcl.png",
  "w-synechron.png",
  "w-vibrantcare.png",
  "w-deutsch-kerrigan.png",
];

const logoFor = (file: string) => clientLogos.find((l) => l.file === file)!;

export default function ProofWall({ quotes }: { quotes: Quote[] }) {
  const L = WALL_LOGOS.map(logoFor);

  /* Column-major order. Read it as four groups of three: each column is one
     quote and two marks, with the quote in a different slot each time so the
     wall staggers instead of banding. */
  const tiles: ({ t: "q"; q: Quote } | { t: "l"; i: number })[] = [
    { t: "q", q: quotes[0] }, { t: "l", i: 0 }, { t: "l", i: 1 },
    { t: "l", i: 2 }, { t: "q", q: quotes[1] }, { t: "l", i: 3 },
    { t: "l", i: 4 }, { t: "l", i: 5 }, { t: "q", q: quotes[2] },
    { t: "q", q: quotes[3] }, { t: "l", i: 6 }, { t: "l", i: 7 },
  ];

  return (
    <div className="pw-grid">
      {tiles.map((tile, n) =>
        tile.t === "q" ? (
          <figure className="pw-tile pw-quote" key={`q${n}`}>
            <span className="pw-badge">{tile.q.badge}</span>
            <blockquote className="pw-text">{tile.q.quote}</blockquote>
            {/* No avatar. These are anonymised to a role and a market, which
                is the normal form when a client will vouch but not be named —
                and a generated portrait beside an anonymous quote would be
                inventing the one thing the anonymity exists to protect. */}
            <figcaption className="pw-who">{tile.q.name}</figcaption>
          </figure>
        ) : (
          <div className="pw-tile pw-logotile" key={`l${n}`}>
            <span className="logo-chip">
              <Image
                src={`/assets/clients/${L[tile.i].file}`}
                alt={L[tile.i].alt}
                width={150}
                height={L[tile.i].h}
                sizes="150px"
                style={{ maxHeight: L[tile.i].h, width: "auto", height: "auto" }}
              />
            </span>
          </div>
        )
      )}
    </div>
  );
}
