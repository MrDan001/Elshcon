import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import ContactForm from "@/components/ContactForm";
import { TBC } from "@/components/Placeholder";
import { OFFICES, TBC_ITEMS } from "@/lib/content";

export const metadata: Metadata = { title: "Contact" };

export default function ContactPage() {
  return (
    <>
      <PageHero eyebrow="Contact" title="Reach the right team first time">
        Choose what your enquiry is about and it is routed to the people who can
        answer it.
      </PageHero>

      <section className="section">
        <div className="container-page grid gap-8 lg:grid-cols-2">
          <ContactForm />

          <div>
            <h2 className="h2">Locations</h2>
            <ul className="mt-4 space-y-3">
              {OFFICES.map((o) => (
                <li key={o.name} className="card">
                  <p className="font-semibold text-navy">{o.name}</p>
                  <p className="mt-1 text-sm text-slate-600">
                    Address <TBC />
                  </p>
                </li>
              ))}
            </ul>
            <p className="mt-4 text-sm text-slate-700">
              Phone: <TBC>{TBC_ITEMS.phone}</TBC>
            </p>
            <p className="mt-2 text-sm text-slate-700">
              Email: <TBC>{TBC_ITEMS.email}</TBC>
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
