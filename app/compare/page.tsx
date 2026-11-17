import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import CompareCard from "@/components/CompareCard";
import { COMPARE_PAIRS } from "@/lib/content";

export const metadata: Metadata = { title: "Before and after" };

export default function ComparePage() {
  return (
    <>
      <PageHero eyebrow="Audit evidence" title="Current site and concept, side by side">
        What is publicly visible on elshcon.com today, and the approach proposed
        for each page. Open the live page to see it for yourself.
      </PageHero>

      <section className="section">
        <div className="container-page space-y-6">
          {COMPARE_PAIRS.map((p) => (
            <CompareCard
              key={p.id}
              title={p.title}
              liveUrl={p.liveUrl}
              liveUrlLabel={p.liveUrlLabel}
              before={p.before}
              after={p.after}
              conceptHref={p.conceptHref}
            />
          ))}
          <p className="text-sm text-slate-600">
            These are observations of public content only. They do not say how
            the content got there, and no admin system was accessed.
          </p>
        </div>
      </section>
    </>
  );
}
