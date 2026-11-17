import type { ReactNode } from "react";
import { PLACEHOLDER_NOTE, TBC_LABEL } from "@/lib/content";

/**
 * Inline marker for any fact that Elshcon has not yet confirmed.
 * Usage: <TBC>fleet schedule</TBC>  ->  [fleet schedule: to be confirmed by Elshcon]
 */
export function TBC({ children }: { children?: ReactNode }) {
  return (
    <span className="tbc">
      [{children ? <>{children}: </> : null}
      {TBC_LABEL}]
    </span>
  );
}

/** Image area used instead of stock photography. */
export default function Placeholder({
  label = "Photo",
  className = "",
}: {
  label?: string;
  className?: string;
}) {
  return (
    <div
      role="img"
      aria-label={`${label} placeholder`}
      className={`flex min-h-[160px] flex-col items-center justify-center rounded-xl border border-dashed border-navy/30 bg-sand px-4 py-8 text-center ${className}`}
    >
      <svg
        width="36"
        height="36"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#0B2A4A"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <rect x="3" y="5" width="18" height="14" rx="2" />
        <circle cx="9" cy="11" r="1.5" />
        <path d="M21 16l-5-5-8 8" />
      </svg>
      <p className="mt-2 text-sm font-semibold text-navy">{label}</p>
      <p className="mt-1 max-w-xs text-xs text-slate-600">{PLACEHOLDER_NOTE}</p>
    </div>
  );
}
