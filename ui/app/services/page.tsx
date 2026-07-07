import type { Metadata } from "next";
import { weeklyServices } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Services",
};

export default function ServicesPage() {
  return (
    <>
      <section className="page-hero">
        <p className="eyebrow">Services</p>
        <h1>Join us for worship, Bible study, and prayer.</h1>
      </section>

      <section className="section">
        <div className="service-grid">
          {weeklyServices.map((service) => (
            <article className="service-card" key={service.name}>
              <p>{service.time}</p>
              <h2>{service.name}</h2>
              <span>{service.description}</span>
            </article>
          ))}
        </div>
      </section>

      <section className="section visit-band">
        <div>
          <h2>Planning a Visit</h2>
          <p>
            Expect friendly people, reverent worship, and straightforward Bible
            preaching. More details about parking, children&apos;s classes, and what
            to expect can be added here as the site content grows.
          </p>
        </div>
      </section>
    </>
  );
}
