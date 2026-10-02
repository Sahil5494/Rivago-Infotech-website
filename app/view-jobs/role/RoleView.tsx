import Link from "next/link";
import { routes } from "@/lib/routes";
import { copyFor, WHAT_WE_OFFER, HOW_WE_HIRE } from "./role-copy";

const BackIcon = () => (
  <svg width="13" height="13" viewBox="0 0 14 14" fill="none"><path d="M8.5 3L5 7l3.5 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" /></svg>
);
const ArrowIcon = () => (
  <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M3 7h8M8 4l3 3-3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
);

export type RoleViewProps = { role: string; loc: string; dept: string; sen: string; eng: string; isInternal: boolean };

/* The role page itself. No hooks, so it renders on the server for
   /open-positions/[id] and inside the client wrapper for /view-jobs/role. */
export default function RoleView({ role, loc, dept, sen, eng, isInternal }: RoleViewProps) {
  const copy = copyFor(role, dept);
  const engBasis = eng.toLowerCase().replace(/·/g, "").replace(/\s+/g, " ").trim();
  const about = `${copy.a} The role ${/ or remote$/i.test(loc) ? "can be" : "is"} based in ${loc}, on a ${engBasis} basis.`;
  /* Level and department only — location and type are already in the line
     above, and the chips used to repeat both. */
  const chips = [sen, dept].filter(Boolean);

  const backHref = isInternal ? routes.openPositions : routes.viewJobs;
  const backLabel = isInternal ? "All open positions" : "All open roles";
  const applyHref = `${routes.signIn}?mode=signup`;

  return (
    <>
      <div className="pd">
        <Link className="pd-back" href={backHref}><BackIcon />{backLabel}</Link>
        <div className="pd-eyb">{isInternal ? "Careers at Rivago" : "Client role"} &middot; {dept}</div>
        <h1>{role}</h1>
        <div className="pd-sub">{loc} &middot; {eng}</div>
        <div className="pd-chips">
          {chips.map((c) => <span className="pd-chip" key={c}>{c}</span>)}
        </div>
        <div className="pd-cta">
          {/* Internal roles apply through the CV form, which posts to the
              firm; the client-role path still goes to sign-up until the
              application platform is built. */}
          {isInternal
            ? <a className="pd-p" href={routes.contactUs} data-hire="seeker">Apply for this role <ArrowIcon /></a>
            : <Link className="pd-p" href={applyHref}>Apply for this role <ArrowIcon /></Link>}
        </div>
      </div>

      <div className="pd-body">
        <div className="pd-sec">
          <div className="pd-lab">About the role</div>
          <p>{about}</p>
        </div>
        <div className="pd-sec">
          <div className="pd-lab">What you will own</div>
          <ul>{copy.own.map((x) => <li key={x}>{x}</li>)}</ul>
        </div>
        <div className="pd-sec">
          <div className="pd-lab">What we are looking for</div>
          <ul>{copy.need.map((x) => <li key={x}>{x}</li>)}</ul>
        </div>
        <div className="pd-sec">
          <div className="pd-lab">What we offer</div>
          <ul>{WHAT_WE_OFFER.map((x) => <li key={x}>{x}</li>)}</ul>
        </div>
        <div className="pd-sec">
          <div className="pd-lab">How we hire</div>
          <div className="pd-steps">
            {HOW_WE_HIRE.map((s) => (
              <div className="pd-hstep" key={s.n}>
                <div className="n">{s.n}</div>
                <h2>{s.t}</h2>
                <p>{s.d}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="pd-end">
          <h2>Sound like your desk?</h2>
          {isInternal ? (
            <>
              <p>Send us your CV and tell us this is the role you are applying for, and we will be in touch.</p>
              <a className="pd-p" href={routes.contactUs} data-hire="seeker">Send us your CV <ArrowIcon /></a>
            </>
          ) : (
            <>
              <p>Create an account to apply and track where your application stands. One partner reads every submission.</p>
              <Link className="pd-p" href={applyHref}>Create an account to apply <ArrowIcon /></Link>
            </>
          )}
        </div>
      </div>
    </>
  );
}
