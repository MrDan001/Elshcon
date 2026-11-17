import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import EnquiryCta from "@/components/EnquiryCta";
import { TBC } from "@/components/Placeholder";
import { TBC_ITEMS } from "@/lib/content";

export const metadata: Metadata = { title: "Policies" };

export default function PoliciesPage() {
  return (
    <>
      <PageHero eyebrow="Quality and HSE" title="Quality and HSE policies">
        Elshcon publishes quality and HSE policy statements. This page would
        present them clearly, next to the evidence that supports them.
      </PageHero>

      <section className="section">
        <div className="container-page grid gap-4 sm:grid-cols-2">
          <div className="card">
            <h2 className="text-lg font-bold text-navy">Quality policy</h2>
            <p className="mt-2 text-sm text-slate-700">
              Use the approved wording from the current Policies page.
            </p>
            <p className="mt-3">
              <TBC>quality policy text</TBC>
            </p>
          </div>
          <div className="card">
            <h2 className="text-lg font-bold text-navy">HSE policy</h2>
            <p className="mt-2 text-sm text-slate-700">
              Use the approved wording from the current Policies page.
            </p>
            <p className="mt-3">
              <TBC>HSE policy text</TBC>
            </p>
          </div>
        </div>
      </section>

      <section className="bg-sand">
        <div className="container-page section">
          <h2 className="h2">Certification</h2>
          <p className="lead mt-3 max-w-2xl">
            Certificates should show their scope and validity so buyers can check
            them.
          </p>
          <p className="mt-4">
            <TBC>{TBC_ITEMS.iso}</TBC>
          </p>
        </div>
      </section>

      <EnquiryCta />
    </>
  );
}
