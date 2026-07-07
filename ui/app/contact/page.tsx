import type { Metadata } from "next";
import { contactDetails } from "@/lib/site-data";
import {
  bodyCopy,
  displayHeading,
  eyebrow,
  pageHero,
  panel,
  primaryButton,
  responsiveTwoColumn,
  section,
  sectionHeading,
} from "@/lib/styles";

export const metadata: Metadata = {
  title: "Contact",
};

export default function ContactPage() {
  return (
    <>
      <section className={pageHero}>
        <p className={eyebrow}>Contact</p>
        <h1 className={displayHeading}>We would be glad to hear from you.</h1>
      </section>

      <section className={`${section} ${responsiveTwoColumn}`}>
        <div>
          <h2 className={sectionHeading}>Get in Touch</h2>
          <p className={bodyCopy}>
            Use this starter page for address, phone, email, and a future prayer
            request form. The prayer form can later submit to `/api/prayer-request`
            so messages are emailed privately to the pastor.
          </p>
          <dl className="mt-7 grid gap-4">
            <div className="border-t border-[#d9d3ca] pt-4">
              <dt className="font-extrabold text-[#163944]">Address</dt>
              <dd className="mt-0.5 text-[#5c6670]">{contactDetails.address}</dd>
            </div>
            <div className="border-t border-[#d9d3ca] pt-4">
              <dt className="font-extrabold text-[#163944]">Phone</dt>
              <dd className="mt-0.5 text-[#5c6670]">{contactDetails.phone}</dd>
            </div>
            <div className="border-t border-[#d9d3ca] pt-4">
              <dt className="font-extrabold text-[#163944]">Email</dt>
              <dd className="mt-0.5 text-[#5c6670]">{contactDetails.email}</dd>
            </div>
          </dl>
        </div>
        <form className={`${panel} grid gap-4 p-6`}>
          <label className="grid gap-2 font-extrabold text-[#163944]">
            Name
            <input
              className="w-full rounded-md border border-[#d9d3ca] px-3.5 py-3 font-normal text-[#17202a]"
              type="text"
              name="name"
              placeholder="Your name"
            />
          </label>
          <label className="grid gap-2 font-extrabold text-[#163944]">
            Email
            <input
              className="w-full rounded-md border border-[#d9d3ca] px-3.5 py-3 font-normal text-[#17202a]"
              type="email"
              name="email"
              placeholder="you@example.com"
            />
          </label>
          <label className="grid gap-2 font-extrabold text-[#163944]">
            Message
            <textarea
              className="w-full resize-y rounded-md border border-[#d9d3ca] px-3.5 py-3 font-normal text-[#17202a]"
              name="message"
              rows={5}
              placeholder="How can we help?"
            />
          </label>
          <button className={primaryButton} type="button">
            Send Message
          </button>
        </form>
      </section>
    </>
  );
}
