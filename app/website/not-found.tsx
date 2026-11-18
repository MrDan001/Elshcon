import Link from "next/link";

export default function WebsiteNotFound() {
  return (
    <section className="ew-section" aria-labelledby="website-not-found-title">
      <div
        className="ew-container"
        style={{
          minHeight: "min(72vh, 720px)",
          display: "grid",
          alignContent: "center",
          justifyItems: "start",
          paddingTop: 88,
          paddingBottom: 88,
        }}
      >
        <div
          aria-hidden="true"
          style={{
            color: "var(--ew-accent, #c58b43)",
            fontSize: "clamp(76px, 15vw, 148px)",
            fontWeight: 800,
            letterSpacing: "-0.09em",
            lineHeight: 0.9,
            marginBottom: 28,
          }}
        >
          404
        </div>
        <p className="ew-kicker">ELSHCON NIGERIA LIMITED</p>
        <h1
          id="website-not-found-title"
          style={{
            color: "var(--ew-navy)",
            fontSize: "clamp(36px, 6vw, 64px)",
            fontWeight: 800,
            letterSpacing: "-0.045em",
            lineHeight: 1.04,
            maxWidth: 760,
            margin: "0 0 20px",
          }}
        >
          This page is outside our service directory.
        </h1>
        <p
          style={{
            color: "var(--ew-muted)",
            maxWidth: 570,
            lineHeight: 1.85,
            fontSize: 15,
            margin: 0,
          }}
        >
          The address may be incorrect, the page may have moved, or the link may
          no longer be available. You can return to the Elshcon website to
          explore our marine, logistics and industrial service information.
        </p>
        <div style={{ display: "flex", flexWrap: "wrap", gap: 12, marginTop: 32 }}>
          <Link href="/website" className="ew-button ew-button-primary">
            Back to Elshcon website <span aria-hidden="true">→</span>
          </Link>
          <Link href="/website/contact" className="ew-button ew-button-dark">
            Contact the team
          </Link>
        </div>
        <p
          style={{
            color: "var(--ew-muted)",
            fontSize: 12,
            letterSpacing: "0.08em",
            textTransform: "uppercase",
            marginTop: 58,
          }}
        >
          Marine · Logistics · Fabrication · Energy support
        </p>
      </div>
    </section>
  );
}
