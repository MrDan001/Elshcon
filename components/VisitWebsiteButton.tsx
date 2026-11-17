import { MAIN_SITE_URL } from "@/lib/content";

/**
 * Opens the main Elshcon website. The address comes from the
 * NEXT_PUBLIC_MAIN_SITE_URL environment variable (see lib/content.ts),
 * so it can be set on Vercel without changing code.
 */
export default function VisitWebsiteButton({
  className = "",
}: {
  className?: string;
}) {
  if (!MAIN_SITE_URL) {
    return (
      <span
        aria-disabled="true"
        title="Website link not set yet"
        className={`btn bg-slate-200 text-slate-500 ${className}`}
      >
        Visit website (link not set)
      </span>
    );
  }

  return (
    <a
      href={MAIN_SITE_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={`btn-primary ${className}`}
    >
      Visit website &#8599;
    </a>
  );
}
