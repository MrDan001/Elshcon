import Link from "next/link";

export default function WebsiteNotFound() {
  return (
    <section className="ew-section">
      <div className="ew-container" style={{ minHeight: "48vh", display: "grid", alignContent: "center" }}>
        <p className="ew-kicker">PAGE NOT FOUND</p>
        <h1 style={{ color: "var(--ew-navy)", fontSize: "clamp(42px,7vw,72px)", fontWeight: 800, lineHeight: 1, margin: "0 0 18px" }}>That page is not here.</h1>
        <p style={{ color: "var(--ew-muted)", maxWidth: 520, lineHeight: 1.8, fontSize: 14 }}>The link may have changed or the page may no longer be available. Return to the Elshcon homepage and explore the current service directory.</p>
        <div style={{ marginTop: 25 }}>
          <Link href="/website" className="ew-button ew-button-primary">Back to Elshcon home <span aria-hidden="true">→</span></Link>
        </div>
      </div>
    </section>
  );
}
