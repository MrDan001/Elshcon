import Link from "next/link";

export default function EnquiryCta({
  title = "Start an enquiry",
  text = "Tell us what you need and we will route it to the right team.",
}: {
  title?: string;
  text?: string;
}) {
  return (
    <section className="section">
      <div className="container-page">
        <div className="rounded-2xl bg-navy p-6 text-white sm:p-10">
          <h2 className="text-2xl font-bold sm:text-3xl">{title}</h2>
          <p className="mt-2 max-w-xl text-slate-200">{text}</p>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <Link href="/contact" className="btn-primary">
              Make an enquiry
            </Link>
            <Link
              href="/services"
              className="btn border border-white/40 text-white hover:bg-white/10"
            >
              View services
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
