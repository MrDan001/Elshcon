import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import EnquiryCta from "@/components/EnquiryCta";
import { TBC } from "@/components/Placeholder";
import { SITE } from "@/lib/content";

export const metadata: Metadata = { title: "About" };

export default function AboutPage() {
  return (
    <>
      <PageHero eyebrow="About Elshcon" title={`Founded in ${SITE.founded}`}>
        {SITE.companyName} is an integrated maritime logistics and
        fabrication/construction business.
      </PageHero>

      <section className="section">
        <div className="container-page grid gap-4 sm:grid-cols-2">
          {[
            { t: "Vision", n: "vision statement" },
            { t: "Mission", n: "mission statement" },
            { t: "Commitments", n: "commitments" },
            { t: "Quality objectives", n: "quality objectives" },
          ].map((b) => (
            <div key={b.t} className="card">
              <h2 className="text-lg font-bold text-navy">{b.t}</h2>
              <p className="mt-2 text-sm text-slate-700">
                The approved wording from the current About Us page goes here.
              </p>
              <p className="mt-3">
                <TBC>{b.n}</TBC>
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-sand">
        <div className="container-page section">
          <h2 className="h2">Elshcon and Elshcon Offshore</h2>
          <p className="lead mt-3 max-w-2xl">
            {SITE.offshoreName} spun off from the marine division as an
            independent marine services company.
          </p>
          <p className="mt-4">
            <TBC>approved group and affiliate statement</TBC>
          </p>
        </div>
      </section>

      <EnquiryCta />
    </>
  );
}
