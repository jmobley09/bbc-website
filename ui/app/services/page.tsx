import type { Metadata } from "next";
import { weeklyServices } from "@/lib/site-data";
import {
  bodyCopy,
  displayHeading,
  eyebrow,
  pageHero,
  panel,
  section,
  sectionHeading,
} from "@/lib/styles";

export const metadata: Metadata = {
  title: "Services",
};

export default function ServicesPage() {
  return (
    <>
      <section className={pageHero}>
        <p className={eyebrow}>Services</p>
        <h1 className={displayHeading}>Join us for worship, Bible study, and prayer.</h1>
      </section>

      <section className={section}>
        <div className="grid grid-cols-3 gap-[18px] max-[860px]:grid-cols-1">
          {weeklyServices.map((service) => (
            <article className={`${panel} min-h-[220px] p-[26px]`} key={service.name}>
              <p className="mb-[18px] font-extrabold text-[#b8873f]">
                {service.time}
              </p>
              <h2 className={sectionHeading}>{service.name}</h2>
              <span className={bodyCopy}>{service.description}</span>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-[#163944] px-[clamp(18px,5vw,72px)] py-14 text-white">
        <div className="max-w-[850px]">
          <h2 className={sectionHeading}>Planning a Visit</h2>
          <p className="text-white/80">
            Expect friendly people, reverent worship, and straightforward Bible
            preaching. More details about parking, children&apos;s classes, and what
            to expect can be added here as the site content grows.
          </p>
        </div>
      </section>
    </>
  );
}
