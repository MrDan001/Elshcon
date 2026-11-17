import Link from "next/link";
import PillarCard from "@/components/PillarCard";
import Placeholder, { TBC } from "@/components/Placeholder";
import EnquiryCta from "@/components/EnquiryCta";
import { PILLARS, SITE, TBC_ITEMS } from "@/lib/content";

const PROOF = [
  { value: String(SITE.founded), label: "Year founded" },
  { value: "2", label: "Marine jetties / terminals" },
  { value: "3", label: "Locations: Port Harcourt, Lagos and the supply base" },
  { value: "HSE", label: "Quality and HSE policies published" },
];

export default function Home() {
  return (
    <>
      <section className="bg-navy text-white">
        <div className="container-page grid gap-8 py-12 sm:py-16 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="eyebrow !text-teal-100">{SITE.companyName}</p>
            <h1 className="mt-2 text-3xl font-bold leading-tight sm:text-5xl">
              {SITE.tagline}
            </h1>
            <p className="mt-4 max-w-xl text-base leading-relaxed text-slate-200 sm:text-lg">
              Since {SITE.founded}, Elshcon has combined marine logistics with
              fabrication and construction, supported by its own jetties and
              supply base.
            </p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <Link href="/services" className="btn-primary">
                Explore services
              </Link>
              <Link
                href="/contact"
                className="btn border border-white/40 text-white hover:bg-white/10"
              >
                Make an enquiry
              </Link>
            </div>
          </div>
          <Placeholder label="Hero photo: vessel or jetty" className="bg-white/10 !border-white/30" />
        </div>
      </section>

      <section className="section">
        <div className="container-page">
          <p className="eyebrow">What we do</p>
          <h2 className="h2 mt-2">Three service pillars</h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-3">
            {PILLARS.map((p, i) => (
              <PillarCard key={p.slug} pillar={p} index={i} />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-sand">
        <div className="container-page section">
          <p className="eyebrow">Operational footprint</p>
          <h2 className="h2 mt-2">The facts a buyer looks for first</h2>
          <dl className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-4">
            {PROOF.map((p) => (
              <div key={p.label} className="card text-center">
                <dt className="sr-only">{p.label}</dt>
                <dd className="text-3xl font-bold text-teal">{p.value}</dd>
                <p className="mt-1 text-xs text-slate-600">{p.label}</p>
              </div>
            ))}
          </dl>
          <p className="mt-4 text-sm text-slate-600">
            Counts are taken from the current Elshcon website and are subject to
            management confirmation.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container-page">
          <p className="eyebrow">Proof</p>
          <h2 className="h2 mt-2">Evidence buyers will ask for</h2>
          <p className="lead mt-3 max-w-2xl">
            Industrial buyers need evidence, not generic claims. These sections
            stay empty until Elshcon supplies approved material.
          </p>
          <ul className="mt-6 grid gap-3 sm:grid-cols-2">
            {[
              TBC_ITEMS.projects,
              TBC_ITEMS.fleet,
              TBC_ITEMS.iso,
              TBC_ITEMS.clients,
            ].map((item) => (
              <li key={item} className="card flex items-center justify-between gap-3">
                <span className="text-sm font-semibold text-navy">{item}</span>
                <TBC />
              </li>
            ))}
          </ul>
        </div>
      </section>

      <EnquiryCta />
    </>
  );
}
