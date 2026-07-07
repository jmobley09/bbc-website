import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
};

export default function AboutPage() {
  return (
    <>
      <section className="page-hero">
        <p className="eyebrow">About BBC</p>
        <h1>A local church committed to the Bible and the gospel.</h1>
      </section>

      <section className="section text-layout">
        <div>
          <h2>Who We Are</h2>
          <p>
            Bible Baptist Church exists to glorify God through faithful worship,
            biblical preaching, loving fellowship, and practical service in our
            community.
          </p>
          <p>
            This page is intentionally simple for the first build. It gives the
            site a stable place for church history, pastor information, beliefs,
            and ministry philosophy as that content is prepared.
          </p>
        </div>
        <div className="principles">
          <article>
            <h3>Scripture</h3>
            <p>The Bible shapes our worship, preaching, discipleship, and daily life.</p>
          </article>
          <article>
            <h3>Worship</h3>
            <p>We gather to praise God, pray together, and hear His Word preached.</p>
          </article>
          <article>
            <h3>Community</h3>
            <p>We encourage one another and seek to serve our neighbors faithfully.</p>
          </article>
        </div>
      </section>
    </>
  );
}
