import Link from "next/link";
import { displayHeading, eyebrow, pageHero, primaryButton } from "@/lib/styles";

export default function NotFound() {
  return (
    <section className={pageHero}>
      <p className={eyebrow}>Page Not Found</p>
      <h1 className={displayHeading}>We could not find that page.</h1>
      <p className="mt-[22px] max-w-[640px] text-[#5c6670]">
        The page may have moved, or the address may have been typed incorrectly.
      </p>
      <Link className={`${primaryButton} mt-7`} href="/">
        Return Home
      </Link>
    </section>
  );
}
