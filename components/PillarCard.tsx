import Link from "next/link";
import type { Pillar } from "@/lib/content";

export default function PillarCard({
  pillar,
  index,
}: {
  pillar: Pillar;
  index: number;
}) {
  return (
    <Link
      href={pillar.href}
      className="card group flex h-full flex-col transition-shadow hover:shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-teal"
    >
      <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-teal-100 text-base font-bold text-teal-600">
        {index + 1}
      </span>
      <h3 className="mt-4 text-lg font-bold text-navy">{pillar.title}</h3>
      <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-700">
        {pillar.summary}
      </p>
      <span className="mt-4 text-sm font-semibold text-teal group-hover:underline">
        Learn more &rarr;
      </span>
    </Link>
  );
}
