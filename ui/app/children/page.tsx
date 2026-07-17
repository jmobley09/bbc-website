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
  title: "Children",
};

export default function ChildrenPage() {
  const ministry = ministryDetails.children;

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
          <p className={eyebrow}>Nursery</p>
          <h2 className={sectionHeading}>Care for Little Ones</h2>
        </div>
        <article className={`${panel} p-[26px]`}>
          <p className="mb-[18px] font-extrabold text-[#b8873f]">
            {ministry.nursery.ages}
          </p>
          <h2 className={sectionHeading}>{ministry.nursery.title}</h2>
          <p className={bodyCopy}>{ministry.nursery.summary}</p>
        </article>

        <div className="my-[clamp(38px,6vw,64px)] border-t border-[#d9d3ca]" />

        <div className="mb-8 max-w-[760px]">
          <p className={eyebrow}>Sunday School</p>
          <h2 className={sectionHeading}>Children&apos;s Sunday School Classes</h2>
          <p className={bodyCopy}>
            Sunday School classes are grouped by age so children can learn the
            Bible in a setting that fits their stage of life.
          </p>
        </div>
        <div className="grid grid-cols-4 gap-[18px] max-[1100px]:grid-cols-2 max-[640px]:grid-cols-1">
          {ministry.sundaySchool.map((item) => (
            <article className={`${panel} min-h-[210px] p-[26px]`} key={item.title}>
              <p className="mb-[18px] font-extrabold text-[#b8873f]">
                {item.ages}
              </p>
              <h2 className={sectionHeading}>{item.title}</h2>
              <p className={bodyCopy}>{item.summary}</p>
            </article>
          ))}
        </div>

        <div className="my-[clamp(38px,6vw,64px)] border-t border-[#d9d3ca]" />

        <div className="mb-8 max-w-[760px]">
          <p className={eyebrow}>Service</p>
          <h2 className={sectionHeading}>Children&apos;s Church Classes</h2>
        </div>
        <div className="grid grid-cols-2 gap-[18px] max-[860px]:grid-cols-1">
          {ministry.service.map((item) => (
            <article className={`${panel} min-h-[210px] p-[26px]`} key={item.title}>
              <p className="mb-[18px] font-extrabold text-[#b8873f]">
                {item.ages}
              </p>
              <h2 className={sectionHeading}>{item.title}</h2>
              <p className={bodyCopy}>{item.summary}</p>
            </article>
          ))}
        </div>

        <div className="my-[clamp(38px,6vw,64px)] border-t border-[#d9d3ca]" />

        <div className="mb-8 max-w-[760px]">
          <p className={eyebrow}>Awana</p>
          <h2 className={sectionHeading}>Wednesday Night</h2>
        </div>
        <article className={`${panel} p-[26px]`}>
          <p className="mb-[18px] font-extrabold text-[#b8873f]">
            {ministry.awana.schedule}
          </p>
          <h2 className={sectionHeading}>{ministry.awana.title}</h2>
          <p className={bodyCopy}>{ministry.awana.summary}</p>
        </article>
      </section>

      <section className="bg-[#163944] px-[clamp(18px,5vw,72px)] py-14 text-white">
        <div className="max-w-[850px]">
          <p className={eyebrow}>Visit This Week</p>
          <h2 className={sectionHeading}>Children are welcome at Sunday School.</h2>
          <p className="mb-7 text-white/80">{ministry.visit}</p>
          <Link className={primaryButton} href="/contact">
            Ask a Question
          </Link>
        </div>
      </section>
    </>
  );
}
