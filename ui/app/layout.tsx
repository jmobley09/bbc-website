import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/calendar", label: "Calendar" },
  { href: "/contact", label: "Contact" },
];

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
    <html lang="en">
      <body>
        <header className="site-header">
          <Link className="brand" href="/" aria-label="Bible Baptist Church home">
            <span className="brand-mark">BBC</span>
            <span>
              <strong>Bible Baptist Church</strong>
              <small>Faithful. Welcoming. Local.</small>
            </span>
          </Link>
          <nav className="site-nav" aria-label="Main navigation">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href}>
                {item.label}
              </Link>
            ))}
          </nav>
        </header>
        <main>{children}</main>
        <footer className="site-footer">
          <div>
            <strong>Bible Baptist Church</strong>
            <p>Gathering weekly for worship, Scripture, prayer, and fellowship.</p>
          </div>
          <div className="footer-links">
            <Link href="/services">Service Times</Link>
            <Link href="/calendar">Upcoming Events</Link>
            <Link href="/contact">Get in Touch</Link>
          </div>
        </footer>
      </body>
    </html>
  );
}
