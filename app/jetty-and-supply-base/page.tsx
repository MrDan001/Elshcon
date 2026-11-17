import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import EnquiryCta from "@/components/EnquiryCta";
import Placeholder, { TBC } from "@/components/Placeholder";

export const metadata: Metadata = { title: "Jetty and Supply Base" };

const FACILITIES = [
  { title: "Marine jetties / terminals", text: "Two marine jetties/terminals." },
  { title: "Workshops", text: "Workshops at the supply base." },
  { title: "Warehouses", text: "Warehouses for storage and handling." },
  { title: "Supporting facilities", text: "Facilities that support day-to-day operations." },
];

export default function JettyPage() {
  return (
    <>
      <PageHero eyebrow="Jetty and Supply Base" title="Marine access and onshore support in one place">
        Two marine jetties/terminals, with workshops, warehouses and facilities
        for operational use.
      </PageHero>

      <section className="section">
        <div className="container-page grid gap-4 sm:grid-cols-2">
          {FACILITIES.map((f) => (
            <div key={f.title} className="card">
              <h2 className="text-lg font-bold text-navy">{f.title}</h2>
              <p className="mt-2 text-sm text-slate-700">{f.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-sand">
        <div className="container-page section grid gap-6 lg:grid-cols-2">
          <div>
            <h2 className="h2">Facts to confirm</h2>
            <ul className="mt-4 space-y-3 text-sm text-slate-700">
              <li>
                Jetty capacity and vessel limits <TBC />
              </li>
              <li>
                Storage areas and warehouse sizes <TBC />
              </li>
              <li>
                Operating hours and access procedure <TBC />
              </li>
            </ul>
          </div>
          <Placeholder label="Jetty or supply base photo" />
        </div>
      </section>

      <EnquiryCta
        title="Enquire about the jetty and supply base"
        text="Tell us what you need to store, fabricate or load."
      />
    </>
  );
}
