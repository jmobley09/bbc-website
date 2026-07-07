import Link from "next/link";
import { weeklyServices, upcomingEvents } from "@/lib/site-data";

export default function Home() {
  return (
    <>
      <section className="hero">
        <div className="hero-copy">
          <p className="eyebrow">Bible Baptist Church</p>
          <h1>A church family rooted in Scripture and gathered in grace.</h1>
          <p>
            Join us this week for worship, Bible preaching, prayer, and fellowship
            with neighbors who are learning to follow Christ together.
          </p>
          <div className="hero-actions">
            <Link className="button primary" href="/services">
              Plan Your Visit
            </Link>
            <Link className="button secondary" href="/contact">
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      <section className="section two-column">
        <div>
          <p className="eyebrow">This Week</p>
          <h2>Service Times</h2>
          <div className="stack">
            {weeklyServices.map((service) => (
              <article className="info-row" key={service.name}>
                <div>
                  <h3>{service.name}</h3>
                  <p>{service.description}</p>
                </div>
                <strong>{service.time}</strong>
              </article>
            ))}
          </div>
        </div>
        <aside className="callout">
          <p className="eyebrow">Welcome</p>
          <h2>Come as you are.</h2>
          <p>
            Whether you have attended church for years or are visiting for the
            first time, you will find clear Bible teaching and a congregation
            glad to meet you.
          </p>
        </aside>
      </section>

      <section className="section feature-band">
        <div>
          <p className="eyebrow">Upcoming</p>
          <h2>Fellowship and Ministry</h2>
          <p>
            This starter calendar is static for now. Later it can be replaced by
            a live Microsoft 365 calendar feed through an Azure Function.
          </p>
        </div>
        <div className="event-list">
          {upcomingEvents.slice(0, 3).map((event) => (
            <article className="event-item" key={`${event.date}-${event.title}`}>
              <time>{event.date}</time>
              <div>
                <h3>{event.title}</h3>
                <p>{event.summary}</p>
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
