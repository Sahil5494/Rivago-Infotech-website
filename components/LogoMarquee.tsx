import Image from "next/image";
import { clientLogos } from "@/lib/routes";

export default function LogoMarquee() {
  const doubled = [...clientLogos, ...clientLogos];
  return (
    <div className="mq-outer">
      <div className="mq-inner">
        {doubled.map((logo, i) => (
          <span className="logo-chip" key={`${logo.file}-${i}`}>
            <Image
              src={`/assets/clients/${logo.file}`}
              alt={logo.alt}
              width={150}
              height={logo.h}
              style={{ maxHeight: logo.h, width: "auto", height: "auto" }}
              loading="lazy"
            />
          </span>
        ))}
      </div>
    </div>
  );
}
