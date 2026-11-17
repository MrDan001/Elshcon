import type { ReactNode } from "react";

export default function PageHero({
  eyebrow,
  title,
  children,
}: {
  eyebrow: string;
  title: string;
  children?: ReactNode;
}) {
  return (
    <section className="bg-sand">
      <div className="container-page py-10 sm:py-14">
        <p className="eyebrow">{eyebrow}</p>
        <h1 className="h1 mt-2 max-w-3xl">{title}</h1>
        {children ? <div className="lead mt-4 max-w-2xl">{children}</div> : null}
      </div>
    </section>
  );
}
