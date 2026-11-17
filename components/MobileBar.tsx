import Link from "next/link";

/**
 * Sticky bottom bar, phone only. The second button opens the
 * before/after comparison because no approved phone number exists yet.
 */
export default function MobileBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 border-t border-sand-200 bg-white/95 px-3 pb-[max(0.5rem,env(safe-area-inset-bottom))] pt-2 backdrop-blur md:hidden">
      <div className="mx-auto grid max-w-md grid-cols-2 gap-2">
        <Link href="/contact" className="btn-primary">
          Enquire
        </Link>
        <Link href="/compare" className="btn-secondary">
          Before / after
        </Link>
      </div>
    </div>
  );
}
