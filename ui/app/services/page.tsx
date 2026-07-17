import type { Metadata } from "next";
import Link from "next/link";
import { ministryCards, weeklySchedule } from "@/lib/site-data";
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
        <div className="mb-8 max-w-[760px]">
          <p className={eyebrow}>Weekly Schedule</p>
          <h2 className={sectionHeading}>What happens each week</h2>
          <p className={bodyCopy}>
            A simple overview of the regular gatherings, followed by age-group
            class details below.
          </p>
        </div>
        <div className="grid grid-cols-3 gap-[18px] max-[860px]:grid-cols-1">
          {weeklySchedule.map((service) => (
            <article className={`${panel} min-h-[220px] p-[26px]`} key={service.title}>
              <p className="mb-[18px] font-extrabold text-[#b8873f]">
                {service.time}
              </p>
              <h2 className={sectionHeading}>{service.title}</h2>
              <span className={bodyCopy}>{service.details}</span>
            </article>
          ))}
        </div>

        <div className="my-[clamp(38px,6vw,64px)] border-t border-[#d9d3ca]" />

        <div className="mb-8 max-w-[760px]">
          <p className={eyebrow}>Classes by Age Group</p>
          <h2 className={sectionHeading}>Find the right class</h2>
          <p className={bodyCopy}>
            Each group page gives a small breakdown of the classes and care we
            currently offer.
          </p>
        </div>
        <div className="grid grid-cols-3 gap-[18px] max-[860px]:grid-cols-1">
          {ministryCards.map((ministry) => (
            <Link
              className={`${panel} min-h-[220px] p-[26px] transition hover:-translate-y-0.5 hover:border-[#b8873f]`}
              href={ministry.href}
              key={ministry.name}
            >
              <p className="mb-[18px] font-extrabold text-[#b8873f]">
                {ministry.time}
              </p>
              <h2 className={sectionHeading}>{ministry.name}</h2>
              <span className={bodyCopy}>{ministry.description}</span>
            </Link>
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
