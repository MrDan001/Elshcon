import Link from "next/link";

export default function VisitWebsiteButton({
  className = "",
}: {
  className?: string;
}) {
  return (
    <Link href="/website" className={"btn-primary " + className}>
      Visit website <span aria-hidden="true">↗</span>
    </Link>
  );
}
