import type { Metadata } from "next";
import { contactDetails } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Contact",
};

export default function ContactPage() {
  return (
    <>
      <section className="page-hero">
        <p className="eyebrow">Contact</p>
        <h1>We would be glad to hear from you.</h1>
      </section>

      <section className="section contact-layout">
        <div>
          <h2>Get in Touch</h2>
          <p>
            Use this starter page for address, phone, email, and a future prayer
            request form. The prayer form can later submit to `/api/prayer-request`
            so messages are emailed privately to the pastor.
          </p>
          <dl className="contact-list">
            <div>
              <dt>Address</dt>
              <dd>{contactDetails.address}</dd>
            </div>
            <div>
              <dt>Phone</dt>
              <dd>{contactDetails.phone}</dd>
            </div>
            <div>
              <dt>Email</dt>
              <dd>{contactDetails.email}</dd>
            </div>
          </dl>
        </div>
        <form className="contact-form">
          <label>
            Name
            <input type="text" name="name" placeholder="Your name" />
          </label>
          <label>
            Email
            <input type="email" name="email" placeholder="you@example.com" />
          </label>
          <label>
            Message
            <textarea name="message" rows={5} placeholder="How can we help?" />
          </label>
          <button className="button primary" type="button">
            Send Message
          </button>
        </form>
      </section>
    </>
  );
}
