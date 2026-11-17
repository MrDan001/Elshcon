import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import EnquiryCta from "@/components/EnquiryCta";
import Placeholder, { TBC } from "@/components/Placeholder";
import { PIPELINE_SCOPE, TBC_ITEMS } from "@/lib/content";

export const metadata: Metadata = { title: "Pipeline and Facilities" };

export default function PipelinePage() {
  return (
    <>
      <PageHero eyebrow="Pipeline and Facilities" title="Pipeline construction and maintenance">
        Onshore and offshore pipeline work, flowlines and facility maintenance.
      </PageHero>

      <section className="section">
        <div className="container-page grid gap-4 sm:grid-cols-2">
          {PIPELINE_SCOPE.map((s) => (
            <div key={s} className="card">
              <h2 className="text-lg font-bold text-navy">{s}</h2>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-sand">
        <div className="container-page section grid gap-6 lg:grid-cols-2">
          <div>
            <h2 className="h2">Work examples</h2>
            <p className="lead mt-3">
              Photographs of Elshcon work with clear captions belong here.
            </p>
            <p className="mt-4">
              <TBC>{TBC_ITEMS.photos}</TBC>
            </p>
            <p className="mt-2">
              <TBC>{TBC_ITEMS.projects}</TBC>
            </p>
          </div>
          <Placeholder label="Pipeline work photo" />
        </div>
      </section>

      <EnquiryCta title="Enquire about pipeline work" />
    </>
  );
}
