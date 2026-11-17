import PillarCard from "@/components/PillarCard";
import Placeholder from "@/components/Placeholder";
import { PILLARS, SITE } from "@/lib/content";

// Temporary Stage 2 page. Replaced by the full homepage in Stage 3.
export default function Home() {
  return (
    <section className="section">
      <div className="container-page">
        <p className="eyebrow">Stage 2 check</p>
        <h1 className="h1 mt-2">{SITE.tagline}</h1>
        <p className="lead mt-4 max-w-2xl">
          Shared layout, styles and components are in place. Full pages arrive in
          Stage 3.
        </p>
        <div className="mt-8 grid gap-4 sm:grid-cols-3">
          {PILLARS.map((p, i) => (
            <PillarCard key={p.slug} pillar={p} index={i} />
          ))}
        </div>
        <Placeholder label="Hero photo" className="mt-8" />
      </div>
    </section>
  );
}
