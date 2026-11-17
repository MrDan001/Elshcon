"use client";

import Link from "next/link";
import { useState } from "react";

type Props = {
  title: string;
  liveUrl: string;
  liveUrlLabel: string;
  before: readonly string[];
  after: readonly string[];
  conceptHref: string | null;
};

export default function CompareCard({
  title,
  liveUrl,
  liveUrlLabel,
  before,
  after,
  conceptHref,
}: Props) {
  const [view, setView] = useState<"before" | "after">("before");
  const items = view === "before" ? before : after;

  return (
    <article className="card">
      <h2 className="text-xl font-bold text-navy">{title}</h2>

      <div
        role="tablist"
        aria-label={`${title}: current or concept`}
        className="mt-4 grid grid-cols-2 gap-1 rounded-lg bg-sand p-1"
      >
        {(["before", "after"] as const).map((v) => (
          <button
            key={v}
            type="button"
            role="tab"
            aria-selected={view === v}
            onClick={() => setView(v)}
            className={`min-h-[44px] rounded-md px-3 text-sm font-semibold transition-colors ${
              view === v ? "bg-navy text-white" : "text-navy hover:bg-white"
            }`}
          >
            {v === "before" ? "Current site" : "Concept"}
          </button>
        ))}
      </div>

      <p className="mt-4 text-xs font-semibold uppercase tracking-widest text-teal">
        {view === "before" ? "Publicly visible today" : "Proposed approach"}
      </p>
      <ul className="mt-2 list-disc space-y-2 pl-5 text-sm text-slate-700">
        {items.map((i) => (
          <li key={i}>{i}</li>
        ))}
      </ul>

      <div className="mt-5 flex flex-col gap-2 sm:flex-row">
        {view === "before" ? (
          <a
            href={liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary"
          >
            {liveUrlLabel}
          </a>
        ) : conceptHref ? (
          <Link href={conceptHref} className="btn-primary">
            Open concept page
          </Link>
        ) : (
          <p className="text-sm text-slate-600">
            No concept page needed. The fix is a decision, not a design.
          </p>
        )}
      </div>
    </article>
  );
}
