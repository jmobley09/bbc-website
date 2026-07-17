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
  title: "Teens",
};

export default function TeensPage() {
  const ministry = ministryDetails.teens;

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
        <div className="grid grid-cols-3 gap-[18px] max-[860px]:grid-cols-1">
          {ministry.classes.map((item) => (
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
          <h2 className={sectionHeading}>Teens are welcome at Sunday School.</h2>
          <p className="mb-7 text-white/80">{ministry.visit}</p>
          <Link className={primaryButton} href="/contact">
            Ask a Question
          </Link>
        </div>
      </section>
    </>
  );
}
