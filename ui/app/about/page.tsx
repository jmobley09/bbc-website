import type { Metadata } from "next";
import {
  bodyCopy,
  displayHeading,
  eyebrow,
  pageHero,
  responsiveTwoColumn,
  section,
  sectionHeading,
} from "@/lib/styles";

export const metadata: Metadata = {
  title: "About",
};

export default function AboutPage() {
  return (
    <>
      <section className={pageHero}>
        <p className={eyebrow}>About BBC</p>
        <h1 className={displayHeading}>
          A local church committed to the Bible and the gospel.
        </h1>
      </section>

      <section className={`${section} ${responsiveTwoColumn}`}>
        <div>
          <h2 className={sectionHeading}>Who We Are</h2>
          <p className={`max-w-[760px] ${bodyCopy}`}>
            Bible Baptist Church exists to glorify God through faithful worship,
            biblical preaching, loving fellowship, and practical service in our
            community.
          </p>
          <p className={`max-w-[760px] ${bodyCopy}`}>
            This page is intentionally simple for the first build. It gives the
            site a stable place for church history, pastor information, beliefs,
            and ministry philosophy as that content is prepared.
          </p>
        </div>
        <div className="grid gap-[18px]">
          <article className="border-t border-[#d9d3ca] pt-[18px]">
            <h3 className="mb-1 font-bold">Scripture</h3>
            <p className={bodyCopy}>
              The Bible shapes our worship, preaching, discipleship, and daily life.
            </p>
          </article>
          <article className="border-t border-[#d9d3ca] pt-[18px]">
            <h3 className="mb-1 font-bold">Worship</h3>
            <p className={bodyCopy}>
              We gather to praise God, pray together, and hear His Word preached.
            </p>
          </article>
          <article className="border-t border-[#d9d3ca] pt-[18px]">
            <h3 className="mb-1 font-bold">Community</h3>
            <p className={bodyCopy}>
              We encourage one another and seek to serve our neighbors faithfully.
            </p>
          </article>
        </div>
      </section>
    </>
  );
}
