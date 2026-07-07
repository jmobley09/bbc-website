import Link from "next/link";
import { weeklyServices, upcomingEvents } from "@/lib/site-data";
import {
  bodyCopy,
  displayHeading,
  eventItem,
  eyebrow,
  panel,
  primaryButton,
  responsiveTwoColumn,
  secondaryButton,
  section,
  sectionHeading,
} from "@/lib/styles";

export default function Home() {
  return (
    <>
      <section className="grid min-h-[min(780px,calc(100vh-76px))] items-center bg-[linear-gradient(90deg,rgba(18,28,32,0.78),rgba(18,28,32,0.42),rgba(18,28,32,0.18)),url('/images/sanctuary-hero.png')] bg-cover bg-center px-[clamp(18px,5vw,72px)] py-[clamp(56px,9vw,118px)] text-white max-[860px]:min-h-[640px]">
        <div className="max-w-[760px]">
          <p className={eyebrow}>Bible Baptist Church</p>
          <h1 className={displayHeading}>
            A church family rooted in Scripture and gathered in grace.
          </h1>
          <p className="mt-6 max-w-[660px] text-[clamp(1rem,1.8vw,1.25rem)] text-white/90">
            Join us this week for worship, Bible preaching, prayer, and fellowship
            with neighbors who are learning to follow Christ together.
          </p>
          <div className="mt-[34px] flex flex-wrap gap-3">
            <Link className={primaryButton} href="/services">
              Plan Your Visit
            </Link>
            <Link className={secondaryButton} href="/contact">
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      <section className={`${section} ${responsiveTwoColumn}`}>
        <div>
          <p className={eyebrow}>This Week</p>
          <h2 className={sectionHeading}>Service Times</h2>
          <div className="grid gap-3.5">
            {weeklyServices.map((service) => (
              <article
                className="grid grid-cols-[minmax(0,1fr)_auto] items-start gap-[18px] border-t border-[#d9d3ca] py-5 max-[560px]:grid-cols-1"
                key={service.name}
              >
                <div>
                  <h3 className="mb-1 font-bold">{service.name}</h3>
                  <p className={bodyCopy}>{service.description}</p>
                </div>
                <strong className="whitespace-nowrap text-[#163944]">
                  {service.time}
                </strong>
              </article>
            ))}
          </div>
        </div>
        <aside className={`${panel} p-[clamp(24px,4vw,38px)]`}>
          <p className={eyebrow}>Welcome</p>
          <h2 className={sectionHeading}>Come as you are.</h2>
          <p className={bodyCopy}>
            Whether you have attended church for years or are visiting for the
            first time, you will find clear Bible teaching and a congregation
            glad to meet you.
          </p>
        </aside>
      </section>

      <section className={`${section} grid grid-cols-[minmax(260px,0.85fr)_minmax(0,1.15fr)] gap-[clamp(28px,6vw,72px)] bg-[#163944] text-white max-[860px]:grid-cols-1`}>
        <div>
          <p className={eyebrow}>Upcoming</p>
          <h2 className={sectionHeading}>Fellowship and Ministry</h2>
          <p className="text-white/80">
            This starter calendar is static for now. Later it can be replaced by
            a live Microsoft 365 calendar feed through an Azure Function.
          </p>
        </div>
        <div className="grid gap-1">
          {upcomingEvents.slice(0, 3).map((event) => (
            <article
              className={`${eventItem} border-white/20`}
              key={`${event.date}-${event.title}`}
            >
              <time className="font-extrabold text-[#b8873f]">{event.date}</time>
              <div>
                <h3 className="mb-1 font-bold">{event.title}</h3>
                <p className="text-white/80">{event.summary}</p>
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
