"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { FormEvent, useEffect, useState } from "react";
import { SITE_NAV, WEBSITE_IMAGES } from "@/lib/website-content";

const slides = [
  {
    title: "Integrated support for energy and marine operations.",
    copy: "Marine logistics, vessel chartering and practical shore-base support.",
    image: WEBSITE_IMAGES.tug,
    alt: "Tugboat photographed in Elshcon's published marine gallery",
    label: "Marine logistics",
  },
  {
    title: "The shore-side capability behind the operation.",
    copy: "Jetty and supply base facilities, workshops and warehousing in Port Harcourt.",
    image: WEBSITE_IMAGES.jetty,
    alt: "Jetty and supply base facility shown on Elshcon's public website",
    label: "Jetty and supply base",
  },
  {
    title: "Fabrication and maintenance, close to the work.",
    copy: "Industrial fabrication, construction and pipeline-facility support.",
    image: WEBSITE_IMAGES.workshop,
    alt: "Fabrication and maintenance work photographed for Elshcon's public website",
    label: "Fabrication and construction",
  },
  {
    title: "Field-focused pipeline and flowline services.",
    copy: "Onshore and offshore pipeline construction and maintenance.",
    image: WEBSITE_IMAGES.pipeline,
    alt: "Pipeline maintenance activity shown in Elshcon's public gallery",
    label: "Pipeline and facilities",
  },
];

export function HeroSlideshow() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const timer = window.setInterval(() => {
      setActive((current) => (current + 1) % slides.length);
    }, 6800);
    return () => window.clearInterval(timer);
  }, []);

  return (
    <section className="ew-hero" aria-label="Elshcon capabilities">
      <div className="ew-slides">
        {slides.map((slide, index) => (
          <div
            key={slide.label}
            className={"ew-slide" + (active === index ? " is-active" : "")}
            aria-hidden={active !== index}
          >
            <img
              src={slide.image}
              alt={slide.alt}
              className="ew-slide-image"
              loading={index === 0 ? "eager" : "lazy"}
            />
            <div className="ew-slide-shade" />
            <div className="ew-hero-content">
              <p className="ew-kicker ew-light-kicker">ELSHCON NIGERIA LIMITED</p>
              <p className="ew-slide-label">{slide.label}</p>
              <h1 key={slide.title} className="ew-hero-title">{slide.title}</h1>
              <p className="ew-hero-copy">{slide.copy}</p>
              <div className="ew-hero-actions">
                <Link href="/website/services" className="ew-button ew-button-primary">
                  Explore our services <span aria-hidden="true">→</span>
                </Link>
                <Link href="/website/contact" className="ew-button ew-button-ghost">
                  Speak with our team
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="ew-slide-controls" aria-label="Hero slideshow controls">
        <span className="ew-slide-count">0{active + 1} <span>/ 0{slides.length}</span></span>
        <div className="ew-slide-dots">
          {slides.map((slide, index) => (
            <button
              key={slide.label}
              type="button"
              className={"ew-slide-dot" + (active === index ? " is-active" : "")}
              onClick={() => setActive(index)}
              aria-label={"Show slide " + (index + 1) + ": " + slide.label}
              aria-pressed={active === index}
            />
          ))}
        </div>
      </div>
      <div className="ew-hero-edge" aria-hidden="true"><span>SCROLL TO EXPLORE</span><i /></div>
    </section>
  );
}

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const isActive = (href: string) =>
    href === "/website" ? pathname === href : pathname.startsWith(href);

  return (
    <header className="ew-header">
      <div className="ew-topline">
        <div className="ew-container ew-topline-inner">
          <span>Integrated maritime logistics and fabrication / construction</span>
          <div>
            <a href="tel:+2348033107554">+234 803 310 7554</a>
            <a href="mailto:info@elshcon.com">info@elshcon.com</a>
          </div>
        </div>
      </div>
      <div className="ew-container ew-nav-wrap">
        <Link href="/website" className="ew-brand" aria-label="Elshcon home" onClick={() => setOpen(false)}>
          <span className="ew-brand-mark">E</span>
          <span className="ew-brand-words"><strong>ELSHCON</strong><small>NIGERIA LIMITED</small></span>
        </Link>
        <nav className="ew-nav" aria-label="Main navigation">
          {SITE_NAV.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={isActive(item.href) ? "is-active" : ""}
              aria-current={isActive(item.href) ? "page" : undefined}
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="ew-nav-actions">
          <Link className="ew-nav-cta" href="/website/contact">Make an enquiry <span aria-hidden="true">↗</span></Link>
          <Link className="ew-demo-link" href="/">Back to demo</Link>
        </div>
        <button
          type="button"
          className="ew-menu-toggle"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="ew-mobile-menu"
          onClick={() => setOpen((value) => !value)}
        >
          <span /><span /><span />
        </button>
      </div>
      <nav id="ew-mobile-menu" className={"ew-mobile-menu" + (open ? " is-open" : "")} aria-label="Mobile navigation">
        {[...SITE_NAV, { label: "Vendor registration", href: "/website/vendor-registration" }, { label: "Careers", href: "/website/careers" }, { label: "FAQ", href: "/website/faq" }].map((item) => (
          <Link key={item.href} href={item.href} onClick={() => setOpen(false)}>{item.label}</Link>
        ))}
        <Link href="/website/contact" className="ew-mobile-cta" onClick={() => setOpen(false)}>Make an enquiry</Link>
        <Link href="/" className="ew-mobile-demo" onClick={() => setOpen(false)}>← Back to audit demo</Link>
      </nav>
    </header>
  );
}

export function MotionController() {
  useEffect(() => {
    const root = document.documentElement;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    root.classList.add("ew-motion-ready");
    const targets = document.querySelectorAll("[data-reveal]");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("ew-in-view");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );
    targets.forEach((target) => observer.observe(target));
    return () => {
      observer.disconnect();
      root.classList.remove("ew-motion-ready");
    };
  }, []);
  return null;
}

export function MailtoForm({
  mode = "contact",
  heading = "Send an enquiry",
  buttonLabel = "Prepare email enquiry",
}: {
  mode?: "contact" | "vendor";
  heading?: string;
  buttonLabel?: string;
}) {
  const [prepared, setPrepared] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const fields = [
      "Name: " + String(data.get("name") || ""),
      "Company: " + String(data.get("company") || "Not provided"),
      "Email: " + String(data.get("email") || ""),
      "Phone: " + String(data.get("phone") || "Not provided"),
      "Enquiry type: " + String(data.get("category") || (mode === "vendor" ? "Vendor registration" : "General enquiry")),
      "",
      "Message:",
      String(data.get("message") || ""),
    ];
    const subject = mode === "vendor" ? "Vendor registration enquiry - Elshcon" : "Website enquiry - Elshcon";
    const url = "mailto:info@elshcon.com?subject=" + encodeURIComponent(subject) + "&body=" + encodeURIComponent(fields.join("\n"));
    setPrepared(true);
    window.location.href = url;
  }

  return (
    <form className="ew-form" onSubmit={handleSubmit}>
      <div className="ew-form-heading">
        <p className="ew-kicker">{mode === "vendor" ? "SUPPLIER ENQUIRY" : "LET'S TALK"}</p>
        <h2>{heading}</h2>
        <p>Share a few details and your email application will open with the enquiry ready for you to review and send.</p>
      </div>
      <div className="ew-form-grid">
        <label>Your name <input name="name" autoComplete="name" required placeholder="Full name" /></label>
        <label>Company {mode === "vendor" ? <span aria-hidden="true">*</span> : null}<input name="company" autoComplete="organization" required={mode === "vendor"} placeholder="Company name" /></label>
        <label>Email address <input name="email" type="email" autoComplete="email" required placeholder="name@company.com" /></label>
        <label>Phone number <input name="phone" type="tel" autoComplete="tel" placeholder="+234" /></label>
        <label className="ew-form-wide">
          {mode === "vendor" ? "Supply category" : "What is your enquiry about?"}
          <select name="category" defaultValue="">
            <option value="" disabled>Select a category</option>
            <option>Marine logistics and vessel chartering</option>
            <option>Jetty and supply base services</option>
            <option>Pipeline and facilities</option>
            <option>Fabrication and construction</option>
            <option>Quality, HSE and prequalification</option>
            <option>Vendor registration</option>
            <option>Careers</option>
            <option>Other</option>
          </select>
        </label>
        <label className="ew-form-wide">How can Elshcon help? <textarea name="message" rows={5} required placeholder="Tell us about your requirements..." /></label>
      </div>
      <button className="ew-button ew-button-primary ew-form-submit" type="submit">{buttonLabel} <span aria-hidden="true">→</span></button>
      <p className="ew-form-note" role="status">
        {prepared ? "Your email application should now be open. Please review and send the message there." : "This form prepares an email on your device; it does not silently submit or store your information on this website."}
      </p>
    </form>
  );
}
