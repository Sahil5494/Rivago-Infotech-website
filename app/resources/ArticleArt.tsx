import Image from "next/image";
import { createContext, useContext, useId, type ReactNode } from "react";
import type { Article } from "./data";

/* The art panel on a Resources card.
 *
 * PHOTO where the article already has a licensed one (the six long-form
 * guides; see public/assets/services/LICENCES.md). No other photography is
 * licensed, and none is hotlinked or invented.
 *
 * DIAGRAM for every other article: a schematic drawn for that topic, on the
 * category's colourway. They illustrate the idea and carry no figures —
 * no salaries, percentages or counts — because there is no measured data
 * behind any to show. Labels are generic terms (Min/Mid/Max, Y1-Y4) only.
 *
 * Every diagram shares one 320x140 canvas, so it sits centred in any card
 * proportion: the tall featured tile and the short rail strip alike. */

const INK = "#0B3B24";
const PAPER = "#FFFFFF";

const Card = (p: { x: number; y: number; w: number; h: number; r?: number }) => (
  <rect x={p.x} y={p.y} width={p.w} height={p.h} rx={p.r ?? 8} fill={PAPER} fillOpacity={0.82} stroke={INK} strokeOpacity={0.55} strokeWidth={1.5} />
);
const Bar = (p: { x: number; y: number; w: number; h?: number; o?: number }) => (
  <rect x={p.x} y={p.y} width={p.w} height={p.h ?? 6} rx={(p.h ?? 6) / 2} fill={INK} fillOpacity={p.o ?? 0.7} />
);
const Label = ({ x, y, children, anchor = "middle" }: { x: number; y: number; children: ReactNode; anchor?: "start" | "middle" | "end" }) => (
  <text x={x} y={y} textAnchor={anchor} fontFamily="ui-monospace, SFMono-Regular, Menlo, monospace" fontSize={10} letterSpacing=".04em" fill={INK} fillOpacity={0.8}>{children}</text>
);
/* Each SVG defines its own arrowhead marker under a unique id; twenty
   copies of one fixed id on the page would be invalid HTML. */
const MarkerId = createContext("ra-head");
function Arrow({ d }: { d: string }) {
  const id = useContext(MarkerId);
  return <path d={d} fill="none" stroke={INK} strokeOpacity={0.6} strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" markerEnd={`url(#${id})`} />;
}
const Tick = ({ x, y }: { x: number; y: number }) => (
  <path d={`M${x} ${y + 5}l3.5 3.5L${x + 10} ${y + 1}`} fill="none" stroke={INK} strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" />
);

const diagrams: Record<string, ReactNode> = {
  /* A brief: must-haves ticked, the rest left open, aimed at one target. */
  "job-brief": (
    <>
      <Card x={70} y={12} w={130} h={116} r={10} />
      <Bar x={86} y={26} w={64} h={8} o={0.85} />
      {[50, 70, 90, 110].map((y, i) => (
        <g key={y}>
          <rect x={86} y={y - 6} width={12} height={12} rx={3} fill="none" stroke={INK} strokeOpacity={0.6} strokeWidth={1.5} />
          {i < 2 && <Tick x={87} y={y - 6} />}
          <Bar x={106} y={y - 3} w={[70, 56, 64, 44][i]} o={i < 2 ? 0.7 : 0.3} />
        </g>
      ))}
      <Arrow d="M206 70 H226" />
      {[28, 18, 8].map((r, i) => <circle key={r} cx={262} cy={70} r={r} fill={i === 2 ? INK : PAPER} fillOpacity={i === 2 ? 0.85 : 0.6} stroke={INK} strokeOpacity={0.5} strokeWidth={1.5} />)}
    </>
  ),
  /* Four interviewers score alone, then the scores meet. */
  "panel-debrief": (
    <>
      {[24, 96, 168, 240].map((x) => (
        <g key={x}>
          <Card x={x} y={12} w={56} h={42} />
          <circle cx={x + 14} cy={26} r={6} fill={INK} fillOpacity={0.7} />
          <Bar x={x + 10} y={38} w={36} h={5} o={0.4} />
          <Arrow d={`M${x + 28} 58 L160 92`} />
        </g>
      ))}
      <Card x={104} y={96} w={112} h={32} />
      <Label x={160} y={116}>DECISION</Label>
    </>
  ),
  /* A salary band with its markers and where an offer lands. */
  "salary-band": (
    <>
      <line x1={30} y1={74} x2={290} y2={74} stroke={INK} strokeOpacity={0.35} strokeWidth={1.5} />
      <rect x={80} y={62} width={160} height={24} rx={12} fill={PAPER} fillOpacity={0.8} stroke={INK} strokeOpacity={0.6} strokeWidth={1.5} />
      <rect x={160} y={62} width={1.5} height={24} fill={INK} fillOpacity={0.5} />
      {[[80, "MIN"], [160, "MID"], [240, "MAX"]].map(([x, t]) => <Label key={t as string} x={x as number} y={108}>{t}</Label>)}
      <path d="M196 30 a10 10 0 1 1 0.1 0 Z" fill={INK} fillOpacity={0.8} />
      <path d="M196 50 L196 60" stroke={INK} strokeOpacity={0.7} strokeWidth={1.5} />
      <Label x={212} y={34} anchor="start">OFFER</Label>
    </>
  ),
  /* A question asked, a specific answer back. */
  "reference-checks": (
    <>
      <path d="M50 18 h120 a10 10 0 0 1 10 10 v30 a10 10 0 0 1 -10 10 h-90 l-14 12 v-12 h-16 a10 10 0 0 1 -10 -10 v-30 a10 10 0 0 1 10 -10z" fill={PAPER} fillOpacity={0.82} stroke={INK} strokeOpacity={0.55} strokeWidth={1.5} />
      <text x={110} y={53} textAnchor="middle" fontSize={26} fontWeight={600} fill={INK} fillOpacity={0.8}>?</text>
      <path d="M150 64 h120 a10 10 0 0 1 10 10 v34 a10 10 0 0 1 -10 10 h-16 v12 l-14 -12 h-90 a10 10 0 0 1 -10 -10 v-34 a10 10 0 0 1 10 -10z" fill={PAPER} fillOpacity={0.82} stroke={INK} strokeOpacity={0.55} strokeWidth={1.5} />
      <Bar x={156} y={80} w={96} o={0.7} />
      <Bar x={156} y={92} w={72} o={0.45} />
      <Bar x={156} y={104} w={84} o={0.45} />
    </>
  ),
  /* Two offers side by side, weighed on more than one line. */
  "comparing-offers": (
    <>
      {[[64, "A"], [176, "B"]].map(([x, t], k) => (
        <g key={t as string}>
          <Card x={x as number} y={14} w={80} h={112} />
          <Label x={(x as number) + 40} y={34}>{`OFFER ${t}`}</Label>
          {[50, 68, 86, 104].map((y, i) => <Bar key={y} x={(x as number) + 12} y={y} w={[[48, 30, 40, 22], [34, 50, 26, 44]][k][i]} o={0.65} />)}
        </g>
      ))}
      <text x={160} y={76} textAnchor="middle" fontSize={13} fontWeight={600} fill={INK} fillOpacity={0.7}>vs</text>
    </>
  ),
  /* Rounds in a line; past a point, candidates leave the process. */
  "interview-rounds": (
    <>
      <line x1={36} y1={60} x2={284} y2={60} stroke={INK} strokeOpacity={0.35} strokeWidth={1.5} />
      {[40, 88, 136, 184, 232, 280].map((x, i) => (
        <g key={x}>
          <circle cx={x} cy={60} r={13} fill={i < 3 ? INK : PAPER} fillOpacity={i < 3 ? 0.8 : 0.7} stroke={INK} strokeOpacity={0.55} strokeWidth={1.5} strokeDasharray={i < 3 ? undefined : "3 3"} />
          <text x={x} y={64} textAnchor="middle" fontSize={11} fontWeight={600} fill={i < 3 ? PAPER : INK} fillOpacity={i < 3 ? 1 : 0.6}>{i + 1}</text>
        </g>
      ))}
      <Arrow d="M184 76 C184 100 200 108 222 112" />
      <Label x={226} y={116} anchor="start">DROPS OUT</Label>
    </>
  ),
  /* Two ranges, and the overlap where agreement lives. */
  "negotiating-offer": (
    <>
      <rect x={150} y={22} width={60} height={84} rx={6} fill={INK} fillOpacity={0.1} stroke={INK} strokeOpacity={0.4} strokeDasharray="4 4" />
      <Bar x={50} y={44} w={160} h={14} o={0.7} />
      <Bar x={150} y={84} w={120} h={14} o={0.4} />
      <Label x={50} y={36} anchor="start">EMPLOYER</Label>
      <Label x={276} y={114} anchor="end">CANDIDATE</Label>
      <Label x={180} y={14}>OVERLAP</Label>
    </>
  ),
  /* Pay as a stack of parts rather than one number. */
  "vp-eng-pay": (
    <>
      <rect x={130} y={14} width={60} height={112} rx={8} fill={PAPER} fillOpacity={0.82} stroke={INK} strokeOpacity={0.55} strokeWidth={1.5} />
      <rect x={130} y={14} width={60} height={36} rx={8} fill={INK} fillOpacity={0.25} />
      <rect x={130} y={50} width={60} height={24} fill={INK} fillOpacity={0.45} />
      <rect x={130} y={74} width={60} height={52} rx={8} fill={INK} fillOpacity={0.75} />
      <Label x={200} y={36} anchor="start">EQUITY</Label>
      <Label x={200} y={66} anchor="start">BONUS</Label>
      <Label x={200} y={104} anchor="start">BASE</Label>
    </>
  ),
  /* A process that reaches the offer and stops. */
  "offer-declined": (
    <>
      <line x1={50} y1={66} x2={270} y2={66} stroke={INK} strokeOpacity={0.35} strokeWidth={1.5} />
      {[[50, "BRIEF"], [123, "INTERVIEW"], [196, "OFFER"]].map(([x, t]) => (
        <g key={t as string}>
          <circle cx={x as number} cy={66} r={9} fill={INK} fillOpacity={0.75} />
          <Label x={x as number} y={96}>{t}</Label>
        </g>
      ))}
      <circle cx={270} cy={66} r={16} fill={PAPER} fillOpacity={0.85} stroke={INK} strokeOpacity={0.6} strokeWidth={1.5} />
      <path d="M263 59l14 14M277 59l-14 14" stroke={INK} strokeWidth={2} strokeLinecap="round" />
      <Label x={270} y={100}>DECLINED</Label>
    </>
  ),
  /* Standard four-year vesting with a one-year cliff, as the article explains. */
  "equity-explained": (
    <>
      <path d="M50 116 H290 M50 116 V18" stroke={INK} strokeOpacity={0.45} strokeWidth={1.5} fill="none" />
      <path d="M50 116 H110 V92 H125 V86 H140 V80 H155 V74 H170 V68 H185 V62 H200 V56 H215 V50 H230 V44 H245 V38 H260 V32 H275 V26 H290" fill="none" stroke={INK} strokeOpacity={0.8} strokeWidth={2} strokeLinejoin="round" />
      <path d="M110 116 V92" stroke={INK} strokeOpacity={0.3} strokeDasharray="3 3" />
      <Label x={80} y={108}>CLIFF</Label>
      {[["Y1", 110], ["Y2", 170], ["Y3", 230], ["Y4", 290]].map(([t, x]) => <Label key={t as string} x={x as number} y={132}>{t}</Label>)}
    </>
  ),
  /* Documents, verification, licence. */
  "uae-licensing": (
    <>
      {[[30, "DOCUMENTS"], [130, "VERIFY"], [230, "LICENCE"]].map(([x, t], i) => (
        <g key={t as string}>
          <Card x={x as number} y={26} w={60} h={70} />
          {i === 0 && <><Bar x={(x as number) + 12} y={44} w={36} o={0.6} /><Bar x={(x as number) + 12} y={56} w={28} o={0.4} /><Bar x={(x as number) + 12} y={68} w={32} o={0.4} /></>}
          {i === 1 && <><circle cx={(x as number) + 27} cy={57} r={12} fill="none" stroke={INK} strokeOpacity={0.75} strokeWidth={2} /><path d={`M${(x as number) + 36} ${66}l9 9`} stroke={INK} strokeOpacity={0.75} strokeWidth={2.5} strokeLinecap="round" /></>}
          {i === 2 && <><circle cx={(x as number) + 30} cy={56} r={16} fill={INK} fillOpacity={0.75} /><Tick x={(x as number) + 25} y={51} /></>}
          <Label x={(x as number) + 30} y={114}>{t}</Label>
          {i < 2 && <Arrow d={`M${(x as number) + 66} 61 H${(x as number) + 92}`} />}
        </g>
      ))}
    </>
  ),
  /* The same questions, scored on the same scale. */
  "structured-interviews": (
    <>
      <Card x={46} y={12} w={228} h={116} r={10} />
      {[34, 56, 78, 100].map((y, r) => (
        <g key={y}>
          <Bar x={62} y={y - 3} w={56} o={0.55} />
          {[146, 170, 194, 218, 242].map((x, c) => (
            <circle key={x} cx={x} cy={y} r={6} fill={c === [3, 2, 4, 3][r] ? INK : "none"} fillOpacity={0.8} stroke={INK} strokeOpacity={0.5} strokeWidth={1.3} />
          ))}
        </g>
      ))}
    </>
  ),
  /* Many profiles in, a few right ones out. */
  "anti-portal": (
    <>
      {[[34, 26], [52, 50], [28, 72], [60, 94], [40, 114], [76, 34], [80, 76], [70, 118], [96, 56], [100, 98], [22, 98], [58, 18]].map(([x, y]) => (
        <circle key={`${x}-${y}`} cx={x} cy={y} r={5} fill={INK} fillOpacity={0.3} />
      ))}
      <path d="M120 14 L200 56 V84 L120 126 Z" fill={PAPER} fillOpacity={0.7} stroke={INK} strokeOpacity={0.55} strokeWidth={1.5} strokeLinejoin="round" />
      <Arrow d="M206 70 H226" />
      {[50, 70, 90].map((y) => <circle key={y} cx={256} cy={y} r={8} fill={INK} fillOpacity={0.8} />)}
      <Tick x={272} y={64} />
    </>
  ),
  /* What a bad hire visibly costs, and what sits below the line. */
  "bad-hire-cost": (
    <>
      <path d="M150 52 L172 22 L194 52 Z" fill={PAPER} fillOpacity={0.9} stroke={INK} strokeOpacity={0.6} strokeWidth={1.5} strokeLinejoin="round" />
      <path d="M20 52 H300" stroke={INK} strokeOpacity={0.4} strokeWidth={1.5} strokeDasharray="5 4" />
      <path d="M150 52 L116 84 L132 124 L218 128 L236 90 L194 52 Z" fill={INK} fillOpacity={0.6} stroke={INK} strokeOpacity={0.6} strokeWidth={1.5} strokeLinejoin="round" />
      <Label x={206} y={34} anchor="start">VISIBLE</Label>
      <Label x={248} y={104} anchor="start">HIDDEN</Label>
    </>
  ),
};

export default function ArticleArt({ article, size }: { article: Article; size: "lg" | "sm" | "md" }) {
  const markerId = `ra-${useId().replace(/[^a-zA-Z0-9_-]/g, "")}`;
  if (article.image) {
    return (
      <div className={`rc-art rc-art-${size} rc-art-photo`} aria-hidden="true">
        <Image
          src={article.image.src}
          alt=""
          fill
          sizes={size === "lg" ? "(max-width: 1000px) 100vw, 700px" : "(max-width: 700px) 80vw, 340px"}
        />
      </div>
    );
  }
  const d = diagrams[article.id];
  return (
    <div className={`rc-art rc-art-${size}`} aria-hidden="true">
      {d && (
        <svg className="rc-diagram" viewBox="0 0 320 140" preserveAspectRatio="xMidYMid meet">
          <defs>
            <marker id={markerId} viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
              <path d="M0 0L10 5L0 10z" fill={INK} fillOpacity={0.6} />
            </marker>
          </defs>
          <MarkerId.Provider value={markerId}>{d}</MarkerId.Provider>
        </svg>
      )}
    </div>
  );
}
