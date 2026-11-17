import { SITE } from "@/lib/content";

export default function ConceptBanner() {
  return (
    <div
      role="note"
      className="bg-navy-900 px-4 py-2 text-center text-xs font-medium text-white sm:text-sm"
    >
      <span className="mr-2 rounded bg-teal px-1.5 py-0.5 text-[0.7rem] font-bold uppercase tracking-wide">
        Concept
      </span>
      {SITE.banner}
    </div>
  );
}
