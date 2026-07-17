import type { Metadata } from "next";
import Link from "next/link";
import { SiteNav } from "@/components/SiteNav";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Bible Baptist Church",
    template: "%s | Bible Baptist Church",
  },
  description:
    "Bible Baptist Church is a local church centered on Scripture, worship, fellowship, and service.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-scroll-behavior="smooth">
      <body
        className="m-0 bg-[#fbfaf7] font-[Arial,Helvetica,sans-serif] leading-[1.6] text-[#17202a]"
      >
        <header className="sticky top-0 z-10 flex items-center justify-between gap-6 border-b border-[#d9d3ca] bg-[#fbfaf7]/95 px-[clamp(18px,5vw,72px)] py-[18px] backdrop-blur-md max-[860px]:grid">
          <Link
            className="inline-flex min-w-[230px] items-center gap-3 max-[560px]:min-w-0"
            href="/"
            aria-label="Bible Baptist Church home"
          >
            <span className="grid size-12 place-items-center rounded-full bg-[#24515f] font-extrabold tracking-normal text-white">
              BBC
            </span>
            <span>
              <strong className="block">Bible Baptist Church</strong>
              <small className="block text-[0.82rem] text-[#5c6670] max-[560px]:hidden">
                Faith. Prayer. Service.
              </small>
            </span>
          </Link>
          <SiteNav />
        </header>
        <main>{children}</main>
        <footer className="flex justify-between gap-6 bg-[#11181c] px-[clamp(18px,5vw,72px)] py-[34px] text-white max-[860px]:grid">
          <div>
            <strong>Bible Baptist Church</strong>
            <p className="mt-1.5 text-white/70">
              Gathering weekly for worship, Scripture, prayer, and fellowship. Extracurricular
            </p>
          </div>
          <div className="flex flex-wrap gap-3.5 text-white/80">
            <Link href="/services">Service Times</Link>
            <Link href="/adults">Adult Classes</Link>
            <Link href="/children">Children&apos;s Classes</Link>
            <Link href="/teens">Teen Ministry</Link>
            <Link href="/calendar">Upcoming Events</Link>
            <Link href="/contact">Get in Touch</Link>
          </div>
        </footer>
      </body>
    </html>
  );
}
