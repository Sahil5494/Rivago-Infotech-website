import Link from "next/link";
import { routes } from "@/lib/routes";

/**
 * Header and footer for pages built in the Counsel system. Server components —
 * the interactive bits (scroll ground, mobile menu) are wired by HomeClient,
 * which finds them by id.
 */

export function CounselHeader() {
  return (
    <header className="rvg-hdr" id="rvgHdr">
      <nav className="nav" aria-label="Primary">
        <Link className="logo" href={routes.home}>
          Rivago<span>.</span>
        </Link>
        <ul className="nlinks" id="rvgLinks">
          <li><Link href={routes.services}>Staffing solutions</Link></li>
          <li><Link href={routes.industries}>Practices</Link></li>
          <li><Link href={routes.about}>About</Link></li>
          <li><Link href={routes.resources}>Resources</Link></li>
          <li><Link href={routes.career}>Careers</Link></li>
        </ul>
        <div className="nact">
          <Link className="quiet" href={routes.viewJobs}>Find work</Link>
          <Link className="btn pri" href={routes.contactUs}><span>Send a brief</span></Link>
          <button
            className="burger"
            id="rvgBurger"
            type="button"
            aria-label="Open menu"
            aria-expanded="false"
            aria-controls="rvgLinks"
          >
            <i /><i /><i />
          </button>
        </div>
      </nav>
    </header>
  );
}

export function CounselFooter() {
  return (
    <footer className="rvg-foot">
      <div className="in">
        <div className="fcols">
          <div>
            <Link className="lg2" href={routes.home}>Rivago<span>.</span></Link>
            <p className="blurb">
              A senior-only staffing firm built around one artefact: a shortlist you can act on.
              Four markets, one team.
            </p>
          </div>
          <div>
            <h2>Hire talent</h2>
            <ul>
              <li><Link href={routes.directHire}>Direct hire</Link></li>
              <li><Link href={routes.contractStaffing}>Contract staffing</Link></li>
              <li><Link href={routes.temporaryStaffing}>Temporary staffing</Link></li>
              <li><Link href={routes.executiveSearch}>Executive search</Link></li>
              <li><Link href={routes.interimLeadership}>Interim leadership</Link></li>
              <li><Link href={routes.rpo}>RPO</Link></li>
              <li><Link href={routes.employerOfRecord}>Employer of Record</Link></li>
            </ul>
          </div>
          <div>
            <h2>Company</h2>
            <ul>
              <li><Link href={routes.services}>Staffing solutions</Link></li>
              <li><Link href={routes.industries}>Practices</Link></li>
              <li><Link href={routes.about}>About</Link></li>
              <li><Link href={routes.resources}>Resources</Link></li>
              <li><Link href={routes.contactUs}>Contact</Link></li>
            </ul>
          </div>
          <div>
            <h2>Candidates</h2>
            <ul>
              <li><Link href={routes.viewJobs}>Search jobs</Link></li>
              <li><Link href={routes.searchJobs}>Submit a CV</Link></li>
              <li><Link href={routes.career}>Work at Rivago</Link></li>
            </ul>
          </div>
        </div>
        <div className="fbot">
          <span>© {new Date().getFullYear()} Rivago Infotech Inc.</span>
          <span>
            <Link href={routes.privacy}>Privacy</Link> · <Link href={routes.terms}>Terms</Link> ·{" "}
            <Link href={routes.cookies}>Cookies</Link>
          </span>
        </div>
      </div>
    </footer>
  );
}
