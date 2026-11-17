import Link from "next/link";

const serviceLinks = [
  ["Marine Logistics", "/website/marine-logistics"],
  ["Jetty and Supply Base", "/website/jetty-and-supply-base"],
  ["Pipeline and Facilities", "/website/pipeline-and-facilities"],
  ["Fabrication and Construction", "/website/fabrication-and-construction"],
  ["Elshcon Offshore", "/website/elshcon-offshore"],
  ["Quality and HSE", "/website/quality-and-hse"],
];

export default function SiteFooter() {
  return (
    <footer className="ew-footer">
      <div className="ew-container ew-footer-main">
        <div className="ew-footer-brand">
          <Link href="/website" className="ew-brand ew-brand-footer">
            <span className="ew-brand-mark">E</span>
            <span className="ew-brand-words"><strong>ELSHCON</strong><small>NIGERIA LIMITED</small></span>
          </Link>
          <p>Integrated maritime logistics and fabrication / construction for energy and industrial operations.</p>
          <p className="ew-footer-established">Established 1990 · Port Harcourt, Nigeria</p>
        </div>
        <div>
          <h2>Explore</h2>
          <ul>
            <li><Link href="/website/about">About Elshcon</Link></li>
            <li><Link href="/website/services">Our services</Link></li>
            <li><Link href="/website/company-profile">Company profile</Link></li>
            <li><Link href="/website/faq">Frequently asked questions</Link></li>
          </ul>
        </div>
        <div>
          <h2>Services</h2>
          <ul>
            {serviceLinks.map(([label, href]) => <li key={href}><Link href={href}>{label}</Link></li>)}
          </ul>
        </div>
        <div>
          <h2>Get in touch</h2>
          <ul className="ew-footer-contact">
            <li><a href="mailto:info@elshcon.com">info@elshcon.com</a></li>
            <li><a href="tel:+2348033107554">+234 803 310 7554</a></li>
            <li>Deborah Lawson House, F6 Abacha Road, G.R.A. Phase III, Port Harcourt, Rivers State, Nigeria.</li>
            <li><Link href="/website/contact">View all locations</Link></li>
          </ul>
        </div>
      </div>
      <div className="ew-footer-bottom">
        <div className="ew-container ew-footer-bottom-inner">
          <span>© {new Date().getFullYear()} Elshcon Nigeria Limited. All rights reserved.</span>
          <div>
            <Link href="/website/vendor-registration">Vendor registration</Link>
            <Link href="/website/careers">Careers</Link>
            <Link href="/">Back to audit demo</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
