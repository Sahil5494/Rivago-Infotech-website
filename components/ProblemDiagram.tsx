/* The diagram beside THE PROBLEM.
 *
 * Draws the sentence the turn panel makes: four agencies approach one brief
 * and none of them reach it. Four dotted paths run in from the edges, each
 * stopping short of the centre by a different distance — different firms,
 * different weeks, same outcome. The ring in the middle is the role; nothing
 * connects to it.
 *
 * Static SVG rather than a canvas. The page already runs two rAF loops (the
 * hero visual and the CTA orb) and a third for a drawing that never moves
 * would be waste. It also means the whole thing is in the HTML, so it costs
 * no JavaScript and survives with scripting off.
 *
 * Deliberately not the reference's composition. Theirs is an off-centre plot
 * — a large dotted circle in one quadrant, scattered dots in another, one
 * highlighted point. This is centred and radial, and it means something
 * specific rather than reading as instrumentation.
 */

const GRID = "var(--rule-1)";
const LINE = "var(--text-3)";

/* Four approaches, each stopping at a different radius. The asymmetry is the
 * point: a pinwheel of four identical spokes reads as decoration. */
const PATHS: [number, number, number, number][] = [
  // x1, y1, x2, y2 — from an edge mark toward the centre, stopping short
  [52, 52, 163, 163],
  [348, 44, 244, 148],
  [44, 352, 152, 244],
  [356, 344, 238, 226],
];
const MARKS: [number, number][] = [
  [52, 52],
  [348, 44],
  [44, 352],
  [356, 344],
];

export default function ProblemDiagram() {
  return (
    <svg viewBox="0 0 400 400" width="100%" height="100%" aria-hidden="true" focusable="false">
      {/* quadrant hairlines — the frame is on the figure element, not here */}
      <path d="M0 200H400M200 0V400" stroke={GRID} strokeWidth="1" fill="none" />
      <path d="M0 100H400M0 300H400M100 0V400M300 0V400" stroke={GRID} strokeWidth="1" fill="none" opacity=".45" />

      {PATHS.map(([x1, y1, x2, y2]) => (
        <path
          key={`${x1}-${y1}`}
          d={`M${x1} ${y1}L${x2} ${y2}`}
          stroke={LINE}
          strokeWidth="1.2"
          strokeDasharray="3 5"
          strokeLinecap="round"
          fill="none"
        />
      ))}

      {MARKS.map(([cx, cy]) => (
        <g key={`${cx}-${cy}`}>
          <circle cx={cx} cy={cy} r="4.5" fill="none" stroke={LINE} strokeWidth="1.2" />
          <circle cx={cx} cy={cy} r="1.4" fill={LINE} />
        </g>
      ))}

      {/* the role: reached by none of them */}
      <circle cx="200" cy="200" r="34" fill="none" stroke="var(--accent)" strokeWidth="1.3" strokeDasharray="2 6" opacity=".7" />
      <circle cx="200" cy="200" r="21" fill="none" stroke="var(--accent)" strokeWidth="1.4" />
      <circle cx="200" cy="200" r="3.4" fill="var(--accent)" />
    </svg>
  );
}
