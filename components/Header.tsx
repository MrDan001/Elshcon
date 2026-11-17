"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { NAV } from "@/lib/content";
import VisitWebsiteButton from "./VisitWebsiteButton";

export default function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header className="sticky top-0 z-40 border-b border-sand-200 bg-white/95 backdrop-blur">
      <div className="container-page flex h-16 items-center justify-between">
        <Link
          href="/"
          className="flex items-center gap-2"
          onClick={() => setOpen(false)}
          aria-label="Elshcon concept home"
        >
          <span
            aria-hidden="true"
            className="flex h-9 w-9 items-center justify-center rounded-md bg-navy text-lg font-bold text-white"
          >
            E
          </span>
          <span className="leading-tight">
            <span className="block text-base font-bold text-navy">ELSHCON</span>
            <span className="block text-[0.65rem] uppercase tracking-widest text-slate-500">
              Logo to be supplied
            </span>
          </span>
        </Link>

        {/* Desktop nav */}
        <nav aria-label="Main" className="hidden lg:block">
          <ul className="flex items-center gap-1">
            {NAV.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={`rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-sand ${
                    isActive(item.href) ? "text-teal" : "text-navy"
                  }`}
                  aria-current={isActive(item.href) ? "page" : undefined}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <VisitWebsiteButton className="hidden !min-h-[40px] !px-4 !py-2 !text-sm lg:inline-flex" />

        {/* Mobile menu button */}
        <button
          type="button"
          className="flex h-11 w-11 items-center justify-center rounded-md border border-sand-200 text-navy lg:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          <svg
            width="22"
            height="22"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            aria-hidden="true"
          >
            {open ? (
              <path d="M6 6l12 12M18 6L6 18" />
            ) : (
              <path d="M4 7h16M4 12h16M4 17h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu panel */}
      {open && (
        <nav
          id="mobile-menu"
          aria-label="Mobile"
          className="border-t border-sand-200 bg-white lg:hidden"
        >
          <ul className="container-page py-2">
            <li className="pb-2">
              <VisitWebsiteButton className="w-full" />
            </li>
            {NAV.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className={`block rounded-md px-2 py-3 text-base font-medium ${
                    isActive(item.href) ? "bg-teal-100 text-navy" : "text-navy"
                  }`}
                  aria-current={isActive(item.href) ? "page" : undefined}
                >
                  {item.label}
                </Link>
              </li>
            ))}
            <li className="border-t border-sand-200 pt-2">
              <Link
                href="/compare"
                onClick={() => setOpen(false)}
                className="block rounded-md px-2 py-3 text-base font-semibold text-teal"
              >
                Before / after comparison
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
