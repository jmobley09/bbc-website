import type { Metadata } from "next";
import { upcomingEvents } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Calendar",
};

export default function CalendarPage() {
  return (
    <>
      <section className="page-hero">
        <p className="eyebrow">Calendar</p>
        <h1>Upcoming church services, fellowships, and ministry events.</h1>
      </section>

      <section className="section">
        <div className="calendar-note">
          <h2>Live Calendar Coming Later</h2>
          <p>
            This page is ready for static events today and can later load live
            Microsoft 365 calendar data from an Azure Function at `/api/events`.
          </p>
        </div>
        <div className="event-list large">
          {upcomingEvents.map((event) => (
            <article className="event-item" key={`${event.date}-${event.title}`}>
              <time>{event.date}</time>
              <div>
                <h2>{event.title}</h2>
                <p>{event.summary}</p>
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
