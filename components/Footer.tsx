import Link from "next/link";
import { NAV, OFFICES, SITE } from "@/lib/content";
import { TBC } from "./Placeholder";

export default function Footer() {
  return (
    <footer className="mt-10 bg-navy text-white">
      <div className="container-page grid gap-8 py-10 sm:grid-cols-3">
        <div>
          <p className="text-lg font-bold">ELSHCON</p>
          <p className="mt-2 text-sm text-slate-300">
            {SITE.companyName}. {SITE.tagline}. Founded in {SITE.founded}.
          </p>
          <p className="mt-3 text-sm text-slate-300">
            Affiliate: {SITE.offshoreName}.{" "}
            <TBC>entity relationship statement</TBC>
          </p>
        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-widest text-teal-100">
            Pages
          </p>
          <ul className="mt-3 space-y-2 text-sm">
            {NAV.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="hover:underline">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-widest text-teal-100">
            Locations
          </p>
          <ul className="mt-3 space-y-2 text-sm text-slate-300">
            {OFFICES.map((o) => (
              <li key={o.name}>{o.name}</li>
            ))}
          </ul>
          <p className="mt-3 text-sm text-slate-300">
            Phone and email: <TBC>approved contact details</TBC>
          </p>
        </div>
      </div>

      <div className="border-t border-white/10">
        <p className="container-page py-4 text-xs text-slate-400">
          Concept prepared for discussion with Elshcon management. Based on
          publicly visible content only. Not a security or source-code audit.
        </p>
      </div>
    </footer>
  );
}
