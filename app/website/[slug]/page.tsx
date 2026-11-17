import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { MailtoForm } from "@/components/website/SiteExperience";
import { FAQ_ITEMS, SERVICE_LINKS, SITE_PAGES, WEBSITE_IMAGES } from "@/lib/website-content";

type Params = { slug: string };

export function generateStaticParams() {
  return Object.keys(SITE_PAGES).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { slug } = await params;
  const page = SITE_PAGES[slug];
  if (!page) return { title: "Page not found" };
  return {
    title: page.title,
    description: page.description,
    openGraph: {
      title: page.title + " | Elshcon Nigeria Limited",
      description: page.description,
      images: [{ url: page.image, alt: page.imageAlt }],
    },
  };
}

function InteriorHero({ page }: { page: (typeof SITE_PAGES)[string] }) {
  return (
    <section className="ew-page-hero">
      <img src={page.image} alt={page.imageAlt} />
      <div className="ew-page-hero-content">
        <div className="ew-breadcrumb"><Link href="/website">Home</Link><span>/</span><span>{page.eyebrow}</span></div>
        <p className="ew-kicker ew-light-kicker">{page.eyebrow}</p>
        <h1>{page.title}</h1>
        <p>{page.intro}</p>
      </div>
    </section>
  );
}

function ServicesPage() {
  return (
    <>
      <section className="ew-section">
        <div className="ew-container">
          <div className="ew-section-heading" data-reveal>
            <div><p className="ew-kicker">SERVICE PORTFOLIO</p><h2>Connected services. Clear points of contact.</h2></div>
            <p>Explore each service area to understand the published scope. Project-specific capability, availability and contracting entity are confirmed at enquiry stage.</p>
          </div>
          <div className="ew-services-list">
            {SERVICE_LINKS.map((service, index) => (
              <Link href={service.href} className="ew-service-card" key={service.href} data-reveal>
                <div className="ew-service-image"><img src={service.image} alt={service.alt} loading="lazy" /><span>0{index + 1}</span></div>
                <div className="ew-service-body"><h3>{service.title}</h3><p>{service.summary}</p><span className="ew-text-link">View service <b aria-hidden="true">↗</b></span></div>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <section className="ew-section ew-section-soft">
        <div className="ew-container">
          <div className="ew-feature-panel" data-reveal>
            <div><p className="ew-kicker">PROJECT ENQUIRIES</p><h2>Have a defined scope or specification?</h2><p>Share the location, service category, schedule and technical requirements. Elshcon can advise on the appropriate next step and any supporting information required.</p></div>
            <Link href="/website/contact" className="ew-button ew-button-primary">Discuss your requirement <span aria-hidden="true">→</span></Link>
          </div>
        </div>
      </section>
    </>
  );
}

function AboutPage() {
  const values = [
    ["01", "Safety", "Understand operational risks and develop appropriate controls with clients."],
    ["02", "Quality assurance", "Apply quality-management principles across processes and activities."],
    ["03", "Innovation", "Adapt solutions to the changing needs of the energy and marine industries."],
    ["04", "Proudly Nigerian", "Support local skills, resources and opportunities in Nigeria and the wider region."],
  ];
  return (
    <>
      <section className="ew-section">
        <div className="ew-container ew-intro-row">
          <div data-reveal>
            <p className="ew-kicker">OUR STORY</p>
            <h2>One integrated approach to marine and industrial support.</h2>
            <p>Founded in 1990, Elshcon Nigeria Limited describes itself as an integrated maritime logistics and fabrication/construction company serving the energy and non-oil sectors.</p>
            <p>The company's published profile brings together marine solutions, supply base services and steel fabrication/construction, with a focus on safe and efficient support for energy and marine operations.</p>
            <Link href="/website/services" className="ew-button ew-button-dark">Explore the service portfolio <span aria-hidden="true">→</span></Link>
          </div>
          <div className="ew-intro-image" data-reveal><img src={WEBSITE_IMAGES.workshop} alt="Elshcon fabrication and maintenance operations" /></div>
        </div>
        <div className="ew-container ew-mission-grid">
          {(SITE_PAGES.about.sections || []).map((section, index) => (
            <article className="ew-mission-card" key={section.title} data-reveal>
              <span>0{index + 1} / OUR DIRECTION</span><h3>{section.title}</h3><p>{section.body}</p>
            </article>
          ))}
        </div>
      </section>
      <section className="ew-section ew-section-soft">
        <div className="ew-container">
          <div className="ew-section-heading" data-reveal>
            <div><p className="ew-kicker">WHAT GUIDES US</p><h2>Commitments that support long-term relationships.</h2></div>
            <p>These commitments are drawn from the statements published on Elshcon's public website.</p>
          </div>
          <div className="ew-commitments-row">
            {values.map(([number, title, copy]) => <article key={title} data-reveal><span className="ew-kicker">{number}</span><h3>{title}</h3><p>{copy}</p></article>)}
          </div>
        </div>
      </section>
      <section className="ew-cta-band"><div className="ew-container ew-cta-content"><div><p className="ew-kicker ew-light-kicker">LET'S WORK TOGETHER</p><h2>Discuss your next operational requirement.</h2></div><Link href="/website/contact" className="ew-button ew-button-primary">Contact Elshcon <span aria-hidden="true">→</span></Link></div></section>
    </>
  );
}

function ServicePage({ page }: { page: (typeof SITE_PAGES)[string] }) {
  const extraImages =
    page.image === WEBSITE_IMAGES.pipeline
      ? [WEBSITE_IMAGES.pipeline, WEBSITE_IMAGES.workshop, WEBSITE_IMAGES.offshoreWork]
      : page.image === WEBSITE_IMAGES.jetty
        ? [WEBSITE_IMAGES.jetty, WEBSITE_IMAGES.supplyBase, WEBSITE_IMAGES.warehouse]
        : [page.image, WEBSITE_IMAGES.inlandVessels, WEBSITE_IMAGES.workshop];

  return (
    <>
      <section className="ew-section">
        <div className="ew-container ew-intro-row">
          <div data-reveal>
            <p className="ew-kicker">SERVICE OVERVIEW</p>
            <h2>Capability shaped around the needs of each operation.</h2>
            <p>{page.intro}</p>
            <p>Elshcon's public descriptions provide an overview of the service categories. Confirm technical specifications, availability, contracting entity, project references and commercial terms directly with the company for each scope.</p>
          </div>
          <div className="ew-intro-image" data-reveal><img src={page.image} alt={page.imageAlt} /></div>
        </div>
        {page.bullets && page.bullets.length > 0 ? (
          <div className="ew-container" style={{ marginTop: 48 }}>
            <p className="ew-kicker">PUBLISHED SERVICE SCOPE</p>
            <ul className="ew-bullet-list">{page.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}</ul>
          </div>
        ) : null}
        {page.sections && page.sections.length > 0 ? (
          <div className="ew-container ew-detail-grid">
            {page.sections.map((section) => <article className="ew-detail-card" key={section.title} data-reveal><h3>{section.title}</h3><p>{section.body}</p></article>)}
          </div>
        ) : null}
        <div className="ew-container">
          <div className="ew-gallery-strip" data-reveal>
            {extraImages.map((src, index) => <img key={src + index} src={src} alt="Elshcon operation or facility image from the company's public website" loading="lazy" />)}
          </div>
          <p className="ew-form-note">Images shown are drawn from Elshcon's publicly available website gallery.</p>
          <div className="ew-note">For current fleet schedules, equipment specifications, certificate copies, project references and service availability, contact Elshcon directly. Published information may not reflect live operational status.</div>
        </div>
      </section>
      <section className="ew-cta-band"><div className="ew-container ew-cta-content"><div><p className="ew-kicker ew-light-kicker">SERVICE ENQUIRY</p><h2>Have a scope you would like to discuss?</h2><p>Send the details and the team can advise on the right next step.</p></div><Link href="/website/contact" className="ew-button ew-button-primary">Make an enquiry <span aria-hidden="true">→</span></Link></div></section>
    </>
  );
}

function QualityPage({ page }: { page: (typeof SITE_PAGES)[string] }) {
  return (
    <>
      <section className="ew-section">
        <div className="ew-container ew-intro-row">
          <div data-reveal><p className="ew-kicker">QUALITY AND HSE</p><h2>Safety and quality are part of the operating approach.</h2><p>{page.intro}</p><p>Elshcon's published Quality and HSE policy statements refer to quality management, legal requirements, occupational health and safety, environmental protection and risk control.</p></div>
          <div className="ew-intro-image" data-reveal><img src={page.image} alt={page.imageAlt} /></div>
        </div>
        <div className="ew-container" style={{ marginTop: 46 }}>
          <ul className="ew-bullet-list">{(page.bullets || []).map((item) => <li key={item}>{item}</li>)}</ul>
          <div className="ew-detail-grid">
            {(page.sections || []).map((section) => <article key={section.title} className="ew-detail-card" data-reveal><h3>{section.title}</h3><p>{section.body}</p></article>)}
          </div>
          <div className="ew-note">For prequalification or tender submission, request the latest approved policies and current certification documents directly from Elshcon. The public website's certification statement is not a substitute for a current certificate copy.</div>
        </div>
      </section>
    </>
  );
}

function ContactPage() {
  return (
    <section className="ew-section">
      <div className="ew-container ew-contact-grid">
        <MailtoForm heading="Tell us about your requirement" />
        <aside>
          <p className="ew-kicker">OUR LOCATIONS</p>
          <h2 style={{ color: "var(--ew-navy)", fontSize: 29, fontWeight: 800, lineHeight: 1.15, margin: "0 0 22px" }}>Connect with Elshcon.</h2>
          <div className="ew-location-stack">
            <article className="ew-location-card"><h3>Corporate office</h3><p>Deborah Lawson House<br />F6, Abacha Road, G.R.A. Phase III<br />Port Harcourt, Rivers State, Nigeria</p><a href="https://www.google.com/maps/search/?api=1&query=Deborah+Lawson+House+F6+Abacha+Road+Port+Harcourt+Nigeria" target="_blank" rel="noreferrer">View on map ↗</a></article>
            <article className="ew-location-card"><h3>Lagos office</h3><p>#33 Kofo Abayomi Street<br />Victoria Island, Lagos State, Nigeria</p><a href="https://www.google.com/maps/search/?api=1&query=33+Kofo+Abayomi+Street+Victoria+Island+Lagos+Nigeria" target="_blank" rel="noreferrer">View on map ↗</a></article>
            <article className="ew-location-card"><h3>Fabrication / supply bases</h3><p>#11 Trans-Woji Road and #7 Elshcon Road, off #3 Trans-Woji Road<br />Trans-Amadi Industrial Layout<br />Port Harcourt, Rivers State, Nigeria</p><a href="https://www.google.com/maps/search/?api=1&query=Trans-Amadi+Industrial+Layout+Port+Harcourt+Nigeria" target="_blank" rel="noreferrer">View on map ↗</a></article>
          </div>
          <div className="ew-contact-direct"><h3>Direct contact</h3><a href="mailto:info@elshcon.com">info@elshcon.com</a><a href="tel:+2348033107554">+234 803 310 7554</a><a href="tel:+2348106397930">+234 810 639 7930</a><a href="tel:+2348055104192">+234 805 510 4192</a></div>
        </aside>
      </div>
    </section>
  );
}

function VendorPage() {
  return (
    <section className="ew-section">
      <div className="ew-container">
        <div className="ew-feature-panel" data-reveal>
          <div><p className="ew-kicker">SUPPLIER AND PARTNER ENQUIRIES</p><h2>Request the current vendor registration requirements.</h2><p>Elshcon's public website does not publish a complete vendor registration pack or list of mandatory documents. Use this form to introduce your organisation and request the current onboarding and prequalification process. The team can confirm the appropriate documents and next steps.</p></div>
          <span className="ew-download-icon" aria-hidden="true">↗</span>
        </div>
        <div style={{ maxWidth: 780, marginTop: 38 }}><MailtoForm mode="vendor" heading="Introduce your company" buttonLabel="Prepare vendor enquiry" /></div>
      </div>
    </section>
  );
}

function CareersPage() {
  return (
    <section className="ew-section">
      <div className="ew-container">
        <div className="ew-intro-row">
          <div data-reveal><p className="ew-kicker">CAREERS AT ELSHCON</p><h2>Bring your skills to marine and industrial operations.</h2><p>Elshcon's public website does not list current vacancies or a formal recruitment calendar. For accurate information about open roles, required qualifications and application steps, contact the company directly before sending personal documents.</p><a className="ew-button ew-button-primary" href="mailto:info@elshcon.com?subject=Career%20enquiry%20-%20Elshcon">Make a career enquiry <span aria-hidden="true">→</span></a></div>
          <div className="ew-intro-image" data-reveal><img src={WEBSITE_IMAGES.workshop} alt="Industrial work environment shown on Elshcon's public website" /></div>
        </div>
        <div className="ew-note">Please use the official company contact details shown on this website. Do not pay money to anyone claiming to offer a job or interview on Elshcon's behalf.</div>
      </div>
    </section>
  );
}

function ProfilePage() {
  return (
    <section className="ew-section">
      <div className="ew-container">
        <div className="ew-intro-row">
          <div data-reveal><p className="ew-kicker">CORPORATE INFORMATION</p><h2>A concise overview of Elshcon's published capabilities.</h2><p>The profile summarises the company's history, service areas, quality and HSE commitments, locations and public contact details.</p><p>It is a public-information edition, not a technical bid or substitute for current certificate copies, asset schedules or management-approved project references.</p></div>
          <div className="ew-intro-image" data-reveal><img src={WEBSITE_IMAGES.jetty} alt="Elshcon jetty and supply base facility" /></div>
        </div>
        <div className="ew-download-card" data-reveal>
          <div className="ew-download-icon">PDF</div>
          <div><h3>Elshcon Company Profile</h3><p>Three-page public-information edition · PDF · Suitable for an introductory overview</p></div>
          <a className="ew-button ew-button-primary" href="/website/company-profile/download">Download profile <span aria-hidden="true">↓</span></a>
        </div>
      </div>
    </section>
  );
}

function FAQPage() {
  return (
    <section className="ew-section">
      <div className="ew-container">
        <div className="ew-section-heading" data-reveal>
          <div><p className="ew-kicker">HELP AND INFORMATION</p><h2>Useful answers before you make an enquiry.</h2></div>
          <p>For questions about a current project, equipment availability, certificate validity or commercial terms, contact the company directly.</p>
        </div>
        <div className="ew-faq-list">
          {FAQ_ITEMS.map((item) => <details key={item.question}><summary>{item.question}</summary><p>{item.answer}</p></details>)}
        </div>
      </div>
    </section>
  );
}

export default async function WebsiteInteriorPage({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const page = SITE_PAGES[slug];
  if (!page) notFound();

  let body;
  switch (page.kind) {
    case "services":
      body = <ServicesPage />;
      break;
    case "about":
      body = <AboutPage />;
      break;
    case "contact":
      body = <ContactPage />;
      break;
    case "vendor":
      body = <VendorPage />;
      break;
    case "careers":
      body = <CareersPage />;
      break;
    case "profile":
      body = <ProfilePage />;
      break;
    case "faq":
      body = <FAQPage />;
      break;
    case "quality":
      body = <QualityPage page={page} />;
      break;
    default:
      body = <ServicePage page={page} />;
  }

  return (
    <>
      <InteriorHero page={page} />
      {body}
    </>
  );
}
