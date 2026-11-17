import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import EnquiryCta from "@/components/EnquiryCta";
import { TBC } from "@/components/Placeholder";
import { PIPELINE_SCOPE, SITE } from "@/lib/content";

export const metadata: Metadata = { title: "Services" };

const SERVICES = [
  {
    title: "Fabrication and Construction",
    body: "Fabrication and construction work, supported by the workshops at the Elshcon supply base.",
    points: PIPELINE_SCOPE,
    href: "/pipeline-and-facilities",
    cta: "Pipeline and facilities",
  },
  {
    title: "Marine Logistics and Vessel Chartering",
    body: "Vessel and barge chartering and marine logistics support.",
    points: ["Vessel chartering", "Barge chartering"],
    href: "/marine-logistics",
    cta: "Marine logistics",
  },
  {
    title: "Jetty and Supply Base Services",
    body: "Two marine jetties/terminals, with workshops, warehouses and supporting facilities for operations.",
    points: ["Marine jetties / terminals", "Workshops", "Warehouses"],
    href: "/jetty-and-supply-base",
    cta: "Jetty and supply base",
  },
];

export default function ServicesPage() {
  return (
    <>
      <PageHero eyebrow="Services" title="What Elshcon provides">
        Each service has its own description. Every statement here is either
        taken from the current Elshcon site or marked for confirmation.
      </PageHero>

      <section className="section">
        <div className="container-page space-y-6">
          {SERVICES.map((s) => (
            <article key={s.title} className="card">
              <h2 className="text-xl font-bold text-navy">{s.title}</h2>
              <p className="mt-2 text-slate-700">{s.body}</p>
              <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-slate-700">
                {s.points.map((p) => (
                  <li key={p}>{p}</li>
                ))}
              </ul>
              <Link
                href={s.href}
                className="mt-4 inline-block text-sm font-semibold text-teal hover:underline"
              >
                {s.cta} &rarr;
              </Link>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-sand">
        <div className="container-page section">
          <h2 className="h2">Projects</h2>
          <p className="lead mt-3 max-w-2xl">
            Project examples appear here once Elshcon approves them for
            publication. Each will be attributed to Elshcon and named clearly.
          </p>
          <p className="mt-4">
            <TBC>approved case studies</TBC>
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container-page">
          <h2 className="h2">Group structure</h2>
          <p className="lead mt-3 max-w-2xl">
            {SITE.offshoreName} spun off from the Elshcon marine division as an
            independent marine services company.
          </p>
          <p className="mt-4">
            <TBC>which entity provides each service</TBC>
          </p>
        </div>
      </section>

      <EnquiryCta />
    </>
  );
}
