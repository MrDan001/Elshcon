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

const PRESENTER_NOTES: Record<string, { explanation: string; say: string }> = {
  "Wording that refers to another company, Byron Group": {
    explanation: "This wording may make a visitor wonder whether they are reading about Elshcon or a different business.",
    say: "“We have highlighted wording that appears to refer to another company. We would confirm the correct corporate wording with your team before publishing it.”",
  },
  "Generic construction and engineering descriptions": {
    explanation: "Broad descriptions do not tell a potential customer exactly what Elshcon can deliver.",
    say: "“We can make each service clearer, so a buyer can quickly understand the work Elshcon undertakes and where to enquire.”",
  },
  "The same mission paragraph repeated several times": {
    explanation: "Repeating the same paragraph takes up space without giving the visitor any new information.",
    say: "“We can remove repeated copy and use that space to explain your capabilities, experience and services more clearly.”",
  },
  "A project-count claim without attributable Elshcon case studies": {
    explanation: "A large number is difficult for a buyer to assess unless it is supported by named projects or evidence.",
    say: "“Rather than relying on a number alone, we recommend showing approved project examples with the scope of work and Elshcon’s role.”",
  },
  "A distinct, approved description for each Elshcon service": {
    explanation: "Each service gets its own explanation, so customers can find the capability that matches their requirement.",
    say: "“A customer looking for vessel chartering should not have to search through unrelated construction information. Each service is explained separately.”",
  },
  "Clear links to the Elshcon service pages": {
    explanation: "Visitors can move directly from the service overview to the details they need.",
    say: "“These links make it easier for a potential client to explore one service in depth and then contact the right team.”",
  },
  "Verified case studies only, shown once approved": {
    explanation: "Real, approved examples help buyers understand the work without publishing claims that have not been checked.",
    say: "“Once your team approves project details and images, we can turn them into short case studies that demonstrate your experience.”",
  },
  "A construction-company story under the old /about/ route": {
    explanation: "The current page appears to contain a company description that may not accurately represent Elshcon.",
    say: "“We found content on this route that does not appear to describe Elshcon. We would verify the correct company story with management.”",
  },
  "References to shopping centres in Shanghai and air pollution in New York City": {
    explanation: "These examples seem unrelated to Elshcon’s marine and industrial work and could confuse visitors.",
    say: "“A prospective client should see information relevant to Elshcon’s actual operations, not unrelated examples from another context.”",
  },
  "A second, accurate page already exists at /about-us/": {
    explanation: "Two different About pages can leave visitors unsure which one is official.",
    say: "“We would agree which About page is authoritative, then make sure navigation and search results point to the right one.”",
  },
  "One About page, built on the accurate About Us content": {
    explanation: "One consistent company story helps visitors understand who Elshcon is.",
    say: "“We propose one clear About page using wording your team has checked and approved.”",
  },
  "Old route reviewed (links, redirects, sitemap) before it is retired": {
    explanation: "Old links should be handled carefully so visitors and search engines do not reach a broken page.",
    say: "“Before removing an old page, we check where it is linked, redirect it where appropriate and update the sitemap.”",
  },
  "Default placeholder text and an example biography": {
    explanation: "Sample text makes a business website look unfinished and may give visitors the wrong impression.",
    say: "“We would replace sample content with approved Elshcon information, or remove the page if it serves no purpose.”",
  },
  "Reachable by anyone who has or finds the URL": {
    explanation: "A page can be visible even when it is not linked in the menu, because someone may still have its web address.",
    say: "“Hiding a page from the menu is not the same as removing it. We would check whether it should remain public.”",
  },
  "Confirm with the CMS administrator whether the page is needed": {
    explanation: "The person responsible for the website should confirm whether the page has a real business purpose.",
    say: "“We would not remove content blindly. First, we ask the person managing the website whether the page is still needed.”",
  },
  "If not, remove it from navigation and sitemap, then redirect or return not-found after checking links": {
    explanation: "If the page is no longer needed, it should be retired in a controlled way rather than simply disappearing.",
    say: "“We check existing links first, then remove the page from navigation and search listings and send visitors to the most relevant destination.”",
  },
};

function Note({ item }: { item: string }) {
  const note = PRESENTER_NOTES[item] ?? {
    explanation: "This is one of the observations or proposed changes in the review.",
    say: "“We can walk through this item together, confirm what is accurate and agree the best next step.”",
  };

  return (
    <aside className="mt-3 rounded-lg border-l-4 border-teal bg-teal-50 p-3 text-sm">
      <p className="font-semibold text-navy">Plain-English side note</p>
      <p className="mt-1 text-slate-700">{note.explanation}</p>
      <p className="mt-2 font-semibold text-navy">What you can say</p>
      <p className="mt-1 text-slate-700">{note.say}</p>
    </aside>
  );
}

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
      <div className="mt-2 space-y-4">
        {items.map((item) => (
          <div key={item}>
            <ul className="list-disc pl-5 text-sm text-slate-700">
              <li>{item}</li>
            </ul>
            <Note item={item} />
          </div>
        ))}
      </div>

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
