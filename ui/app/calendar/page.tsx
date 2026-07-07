import type { Metadata } from "next";
import { upcomingEvents } from "@/lib/site-data";
import {
  bodyCopy,
  displayHeading,
  eventItem,
  eyebrow,
  pageHero,
  panel,
  section,
  sectionHeading,
} from "@/lib/styles";

export const metadata: Metadata = {
  title: "Calendar",
};

export default function CalendarPage() {
  return (
    <>
      <section className={pageHero}>
        <p className={eyebrow}>Calendar</p>
        <h1 className={displayHeading}>
          Upcoming church services, fellowships, and ministry events.
        </h1>
      </section>

      <section className={section}>
        <div className={`${panel} mb-7 p-[26px]`}>
          <h2 className={sectionHeading}>Live Calendar Coming Later</h2>
          <p className={bodyCopy}>
            This page is ready for static events today and can later load live
            Microsoft 365 calendar data from an Azure Function at `/api/events`.
          </p>
        </div>
        <div className="grid gap-1">
          {upcomingEvents.map((event) => (
            <article
              className={`${eventItem} py-[26px]`}
              key={`${event.date}-${event.title}`}
            >
              <time className="font-extrabold text-[#b8873f]">{event.date}</time>
              <div>
                <h2 className={sectionHeading}>{event.title}</h2>
                <p className={bodyCopy}>{event.summary}</p>
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
