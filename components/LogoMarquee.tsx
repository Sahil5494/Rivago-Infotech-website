import Image from "next/image";
import { clientLogos } from "@/lib/routes";

/* The marquee scrolls one set of marks past twice, translating -50% so the
 * loop is seamless. Two things follow from that, and both were wrong:
 *
 * 1. The marks cannot be lazy-loaded. A lazy image inside a horizontally
 *    overflowing, masked container never reliably intersects the viewport,
 *    so on a 390px screen seven of the ten never loaded at all — they
 *    scrolled past as blank gaps. Measured: complete=false, naturalWidth=0.
 *    They are small marks — 21KB for the set once Next has optimised them —
 *    so they load with the strip. loading="eager" has to be set explicitly:
 *    next/image lazy-loads by default, so simply dropping the attribute
 *    changes nothing.
 *
 * 2. The second set is a visual duplicate. Left readable, a screen reader
 *    announces twenty clients where there are ten, so it is taken out of
 *    the accessibility tree.
 */
export default function LogoMarquee() {
  return (
    <div className="mq-outer">
      <div className="mq-inner">
        {[0, 1].map((copy) => (
          <div className="mq-set" key={copy} aria-hidden={copy === 1 ? true : undefined}>
            {clientLogos.map((logo) => (
              <span className="logo-chip" key={`${copy}-${logo.file}`}>
                <Image
                  src={`/assets/clients/${logo.file}`}
                  alt={copy === 1 ? "" : logo.alt}
                  width={150}
                  height={logo.h}
                  sizes="150px"
                  loading="eager"
                  style={{ maxHeight: logo.h, width: "auto", height: "auto" }}
                />
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
