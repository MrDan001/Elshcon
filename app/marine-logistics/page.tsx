import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import EnquiryCta from "@/components/EnquiryCta";
import Placeholder, { TBC } from "@/components/Placeholder";
import { SITE, TBC_ITEMS } from "@/lib/content";

export const metadata: Metadata = { title: "Marine Logistics" };

const DETAILS = [
  "Vessel types available",
  "Barge types available",
  "Capacity and specifications",
  "Areas of operation",
  "Which entity charters each asset",
];

export default function MarineLogisticsPage() {
  return (
    <>
      <PageHero eyebrow="Marine Logistics" title="Vessel and barge chartering">
        Marine logistics support for operations that depend on reliable vessels
        and barges.
      </PageHero>

      <section className="section">
        <div className="container-page grid gap-6 lg:grid-cols-2">
          <div>
            <h2 className="h2">What a buyer needs to see</h2>
            <p className="lead mt-3">
              A chartering enquiry needs specific details. This table shows the
              information the page should carry once Elshcon confirms it.
            </p>
            <p className="mt-3 text-sm text-slate-600">
              {SITE.offshoreName} is an independent marine services company that
              spun off from the marine division, so each asset needs a clear
              owner.
            </p>
          </div>
          <Placeholder label="Vessel or barge photo" />
        </div>
      </section>

      <section className="bg-sand">
        <div className="container-page section">
          <h2 className="h2">Charter details</h2>
          <div className="mt-6 overflow-hidden rounded-xl border border-sand-200 bg-white">
            <table className="w-full text-left text-sm">
              <thead className="bg-navy text-white">
                <tr>
                  <th className="px-4 py-3 font-semibold">Detail</th>
                  <th className="px-4 py-3 font-semibold">Status</th>
                </tr>
              </thead>
              <tbody>
                {DETAILS.map((d) => (
                  <tr key={d} className="border-t border-sand-200">
                    <td className="px-4 py-3 font-medium text-navy">{d}</td>
                    <td className="px-4 py-3">
                      <TBC />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-4 text-sm text-slate-600">
            Also pending: <TBC>{TBC_ITEMS.fleet}</TBC>
          </p>
        </div>
      </section>

      <EnquiryCta
        title="Enquire about chartering"
        text="Choose the chartering category so your enquiry reaches the marine team."
      />
    </>
  );
}
