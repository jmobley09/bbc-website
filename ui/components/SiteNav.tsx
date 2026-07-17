"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const topNavItems = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/calendar", label: "Calendar" },
  { href: "/contact", label: "Contact" },
];

const serviceItems = [
  { href: "/services", label: "Overview" },
  { href: "/adults", label: "Adults" },
  { href: "/children", label: "Children" },
  { href: "/teens", label: "Teens" },
];

const servicePaths = serviceItems.map((item) => item.href);

function navClass(isActive: boolean) {
  return [
    "rounded-md px-3 py-[9px] font-bold transition",
    "hover:bg-[#e5eef1] hover:text-[#163944]",
    "max-[560px]:px-[9px] max-[560px]:py-2 max-[560px]:text-[0.92rem]",
    isActive ? "bg-[#24515f] text-white hover:bg-[#24515f] hover:text-white" : "text-[#5c6670]",
  ].join(" ");
}

export function SiteNav() {
  const pathname = usePathname();
  const isServicesActive = servicePaths.includes(pathname);

  return (
    <nav
      className="flex flex-wrap justify-end gap-1.5 max-[860px]:justify-start"
      aria-label="Main navigation"
    >
      {topNavItems.slice(0, 2).map((item) => (
        <Link
          aria-current={pathname === item.href ? "page" : undefined}
          className={navClass(pathname === item.href)}
          href={item.href}
          key={item.href}
        >
          {item.label}
        </Link>
      ))}

      <div className="group relative">
        <Link
          aria-current={pathname === "/services" ? "page" : undefined}
          className={`${navClass(isServicesActive)} inline-flex items-center gap-1`}
          href="/services"
        >
          Services
          <span aria-hidden="true" className="text-[0.7rem]">
            v
          </span>
        </Link>
        <div className="invisible absolute left-0 top-full z-20 min-w-48 pt-2 opacity-0 transition group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100">
          <div className="rounded-lg border border-[#d9d3ca] bg-white p-2 shadow-[0_20px_60px_rgba(23,32,42,0.12)]">
            {serviceItems.map((item) => {
              const isActive = pathname === item.href;

              return (
                <Link
                  aria-current={isActive ? "page" : undefined}
                  className={[
                    "block rounded-md px-3 py-2 font-bold transition",
                    isActive
                      ? "bg-[#e5eef1] text-[#163944]"
                      : "text-[#5c6670] hover:bg-[#e5eef1] hover:text-[#163944]",
                  ].join(" ")}
                  href={item.href}
                  key={item.href}
                >
                  {item.label}
                </Link>
              );
            })}
          </div>
        </div>
      </div>

      {topNavItems.slice(2).map((item) => (
        <Link
          aria-current={pathname === item.href ? "page" : undefined}
          className={navClass(pathname === item.href)}
          href={item.href}
          key={item.href}
        >
          {item.label}
        </Link>
      ))}
    </nav>
  );
}
