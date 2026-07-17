import type { Metadata } from "next";
import Link from "next/link";
import { ministryDetails } from "@/lib/site-data";
import {
  bodyCopy,
  displayHeading,
  eyebrow,
  pageHero,
  panel,
  primaryButton,
  section,
  sectionHeading,
  textButton,
} from "@/lib/styles";

export const metadata: Metadata = {
  title: "Adults",
};

export default function AdultsPage() {
  const ministry = ministryDetails.adults;

  return (
    <>
      <section className={pageHero}>
        <p className={eyebrow}>{ministry.eyebrow}</p>
        <h1 className={displayHeading}>{ministry.title}</h1>
        <p className="mt-[22px] max-w-[680px] text-[#5c6670]">
          {ministry.intro}
        </p>
        <Link className={textButton} href="/services">
          Back to Services Overview
        </Link>
      </section>

      <section className={section}>
        <div className="mb-8 max-w-[760px]">
          <p className={eyebrow}>Sunday School</p>
          <h2 className={sectionHeading}>Adult Sunday School Classes</h2>
          <p className={bodyCopy}>
            These classes meet during the regular Sunday School hour and provide
            Bible teaching for adults in different seasons of life.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-[18px] max-[860px]:grid-cols-1">
          {ministry.sundaySchool.map((item) => (
            <article className={`${panel} min-h-[210px] p-[26px]`} key={item.title}>
              <h2 className={sectionHeading}>{item.title}</h2>
              <p className={bodyCopy}>{item.summary}</p>
            </article>
          ))}
        </div>

        <div className="my-[clamp(38px,6vw,64px)] border-t border-[#d9d3ca]" />

        <div className="mb-8 max-w-[760px]">
          <p className={eyebrow}>Extracurriculars</p>
          <h2 className={sectionHeading}>Adult Fellowship Opportunities</h2>
          <p className={bodyCopy}>
            These gatherings give adults additional opportunities for fellowship,
            encouragement, and time together outside the regular class hour.
          </p>
        </div>
        <div className="grid grid-cols-3 gap-[18px] max-[860px]:grid-cols-1">
          {ministry.extracurriculars.map((item) => (
            <article className={`${panel} min-h-[210px] p-[26px]`} key={item.title}>
              <h2 className={sectionHeading}>{item.title}</h2>
              <p className={bodyCopy}>{item.summary}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-[#163944] px-[clamp(18px,5vw,72px)] py-14 text-white">
        <div className="max-w-[850px]">
          <p className={eyebrow}>Visit This Week</p>
          <h2 className={sectionHeading}>Adults are welcome at Sunday School.</h2>
          <p className="mb-7 text-white/80">{ministry.visit}</p>
          <Link className={primaryButton} href="/contact">
            Ask a Question
          </Link>
        </div>
      </section>
    </>
  );
}
