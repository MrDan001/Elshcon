import Link from "next/link";
import { HeroSlideshow } from "@/components/website/SiteExperience";
import { SERVICE_LINKS, WEBSITE_IMAGES } from "@/lib/website-content";

export const metadata = {
  title: "Integrated Energy and Marine Solutions",
  description:
    "Explore Elshcon Nigeria Limited's marine logistics, jetty and supply base, fabrication, construction and pipeline services.",
};

const commitments = [
  ["Safety", "Safety is a core commitment in planning and delivering operations."],
  ["Quality assurance", "Quality management principles support products, services and operational processes."],
  ["Innovation", "Elshcon describes an adaptable approach to evolving energy and marine requirements."],
  ["Proudly Nigerian", "The company highlights local skills, resources and opportunities as part of its commitment."],
];

export default function WebsiteHome() {
  return (
    <>
      <HeroSlideshow />

      <section className="ew-trust-strip">
        <div className="ew-container ew-trust-grid">
          <div><strong>1990</strong><span>Year established</span></div>
          <div><strong>Marine</strong><span>Logistics and vessel chartering</span></div>
          <div><strong>Industrial</strong><span>Fabrication and facilities support</span></div>
          <div><strong>Nigeria</strong><span>Port Harcourt and Lagos presence</span></div>
        </div>
      </section>

      <section className="ew-section">
        <div className="ew-container">
          <div className="ew-section-heading" data-reveal>
            <div>
              <p className="ew-kicker">WHAT WE DO</p>
              <h2>Capability that connects the shore, the field and the water.</h2>
            </div>
            <p>Elshcon brings marine logistics, supply base services and fabrication/construction capability together to support energy and industrial operations.</p>
          </div>
          <div className="ew-service-grid">
            {SERVICE_LINKS.slice(0, 3).map((service, index) => (
              <Link href={service.href} className="ew-service-card" key={service.href} data-reveal>
                <div className="ew-service-image">
                  <img src={service.image} alt={service.alt} loading="lazy" />
                  <span>0{index + 1}</span>
                </div>
                <div className="ew-service-body">
                  <h3>{service.title}</h3>
                  <p>{service.summary}</p>
                  <span className="ew-text-link">View service details </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="ew-split-section">
        <div className="ew-split-image" data-reveal>
          <img src={WEBSITE_IMAGES.workshop} alt="Industrial fabrication and maintenance work shown on Elshcon's website" loading="lazy" />
          <div className="ew-image-caption"><span>ELSHCON IN THE FIELD</span><strong>Practical support. Real operating environments.</strong></div>
        </div>
        <div className="ew-split-copy" data-reveal>
          <p className="ew-kicker">ABOUT ELSHCON</p>
          <h2>Experience built across energy and maritime operations.</h2>
          <p>Founded in 1990, Elshcon Nigeria Limited describes itself as an integrated maritime logistics and fabrication/construction company serving the energy and non-oil sectors.</p>
          <p>Its published service portfolio includes marine solutions, vessel and barge chartering, supply base services, fabrication, pipeline facilities and related industrial support.</p>
          <Link href="/website/about" className="ew-button ew-button-dark">Discover Elshcon </Link>
        </div>
      </section>

      <section className="ew-section ew-section-soft">
        <div className="ew-container">
          <div className="ew-section-heading" data-reveal>
            <div><p className="ew-kicker">SERVICE DIRECTORY</p><h2>Explore the wider service portfolio.</h2></div>
            <Link href="/website/services" className="ew-text-link">Browse all services <b aria-hidden="true">↗</b></Link>
          </div>
          <div className="ew-mini-grid">
            {SERVICE_LINKS.slice(3).map((service) => (
              <Link href={service.href} className="ew-mini-card" key={service.href} data-reveal>
                <img src={service.image} alt={service.alt} loading="lazy" />
                <div><h3>{service.title}</h3><p>{service.summary}</p><span aria-hidden="true">↗</span></div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="ew-section">
        <div className="ew-container">
          <div className="ew-section-heading" data-reveal>
            <div><p className="ew-kicker">OUR COMMITMENTS</p><h2>Standards that shape the way we work.</h2></div>
            <p>Elshcon's published commitments put safety, quality, innovation and local participation at the centre of its approach.</p>
          </div>
          <div className="ew-commit-grid">
            {commitments.map(([title, copy], index) => (
              <article className="ew-commit-card" key={title} data-reveal>
                <span>0{index + 1}</span><h3>{title}</h3><p>{copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="ew-cta-band">
        <div className="ew-container ew-cta-content" data-reveal>
          <div><p className="ew-kicker ew-light-kicker">START A CONVERSATION</p><h2>Tell us what your operation needs.</h2><p>Contact Elshcon to discuss a service requirement, vendor enquiry or request for further company information.</p></div>
          <div className="ew-cta-actions">
            <Link href="/website/contact" className="ew-button ew-button-primary">Make an enquiry <span aria-hidden="true">→</span></Link>
            <Link href="/website/company-profile" className="ew-cta-secondary">Download company profile</Link>
          </div>
        </div>
      </section>
    </>
  );
}
