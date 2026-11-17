const image = {
  tug: "https://elshcon.com/wp-content/uploads/elementor/thumbs/elsh2-qkwl63vf9yopljrv3gsi1s1vkofu0zq0jkq5ott094.png",
  inlandVessels: "https://elshcon.com/wp-content/uploads/elementor/thumbs/elsh3-qkwl6be4smz06fgxvk1ilq5kbrerqkjv8ly1j1huvc.png",
  workshop: "https://elshcon.com/wp-content/uploads/2022/11/Steel-Fabricationscontruction-Maintenance-facilities-e1709892403438.jpg",
  jetty: "https://elshcon.com/wp-content/uploads/2022/11/JettySupply-Base-services.jpg",
  supplyBase: "https://elshcon.com/wp-content/uploads/2022/11/Supply-Base-Solution.jpg",
  pipeline: "https://elshcon.com/wp-content/uploads/2022/11/onshore-and-Offshore-Pipelines-Repairs.png",
  warehouse: "https://elshcon.com/wp-content/uploads/elementor/thumbs/elsh4-qkwl6mo72neg1r0k1ox1fnb3gdv6axsna5rvad14so.png",
  offshoreWork: "https://elshcon.com/wp-content/uploads/elementor/thumbs/elsh1-qkwl5j6z3lwei4lwg7upix9qi79rbnfx4qdh4qno20.png",
};

export const WEBSITE_IMAGES = image;

export type SiteSection = {
  title: string;
  body: string;
  bullets?: string[];
};

export type SitePage = {
  title: string;
  eyebrow: string;
  intro: string;
  description: string;
  image: string;
  imageAlt: string;
  kind: "about" | "services" | "service" | "contact" | "vendor" | "careers" | "profile" | "faq" | "quality";
  sections?: SiteSection[];
  bullets?: string[];
};

export const SITE_NAV = [
  { label: "Home", href: "/website" },
  { label: "About", href: "/website/about" },
  { label: "Services", href: "/website/services" },
  { label: "Contact", href: "/website/contact" },
];

export const SERVICE_LINKS = [
  {
    title: "Marine Logistics",
    href: "/website/marine-logistics",
    image: image.tug,
    alt: "Tugboat shown in Elshcon's published marine gallery",
    summary: "Marine vessel and barge chartering, logistics and offshore support.",
  },
  {
    title: "Jetty and Supply Base",
    href: "/website/jetty-and-supply-base",
    image: image.jetty,
    alt: "Jetty and supply base facility shown on Elshcon's website",
    summary: "Marine terminals, fabrication workshops, warehousing and operational support.",
  },
  {
    title: "Pipeline and Facilities",
    href: "/website/pipeline-and-facilities",
    image: image.pipeline,
    alt: "Pipeline maintenance work shown in Elshcon's published gallery",
    summary: "Onshore and offshore pipeline, flowline and facility maintenance.",
  },
  {
    title: "Fabrication and Construction",
    href: "/website/fabrication-and-construction",
    image: image.workshop,
    alt: "Industrial fabrication and maintenance work shown on Elshcon's website",
    summary: "Steel fabrication, construction and maintenance for industrial operations.",
  },
  {
    title: "Elshcon Offshore",
    href: "/website/elshcon-offshore",
    image: image.inlandVessels,
    alt: "Marine vessels shown in Elshcon's published gallery",
    summary: "Marine services listed by Elshcon Offshore, subject to scope confirmation.",
  },
  {
    title: "Quality and HSE",
    href: "/website/quality-and-hse",
    image: image.offshoreWork,
    alt: "Personnel carrying out marine operations in Elshcon's published gallery",
    summary: "Published quality, health, safety and environmental commitments.",
  },
];

export const SITE_PAGES: Record<string, SitePage> = {
  about: {
    title: "Built on experience. Focused on delivery.",
    eyebrow: "About Elshcon",
    intro: "Founded in 1990, Elshcon Nigeria Limited is an integrated maritime logistics and fabrication/construction company serving the energy and non-oil sectors.",
    description: "Learn about Elshcon Nigeria Limited, its history, mission, vision and operating commitments.",
    image: image.workshop,
    imageAlt: "Fabrication and maintenance work photographed for Elshcon's public website",
    kind: "about",
    sections: [
      {
        title: "Our vision",
        body: "To be a leading indigenous company providing high-value technical services in pipeline and facilities construction, marine support and marine logistics operations in Nigeria.",
      },
      {
        title: "Our mission",
        body: "To execute and deliver operations with well-motivated people, aiming for high-quality, timely, satisfactory and safe services for clients, alongside sustainable business growth.",
      },
    ],
  },
  services: {
    title: "Integrated services for demanding operations",
    eyebrow: "Our services",
    intro: "Elshcon brings together marine logistics, supply base support and fabrication/construction capabilities for energy and industrial operations.",
    description: "Explore Elshcon's marine logistics, jetty and supply base, fabrication, pipeline and HSE capabilities.",
    image: image.jetty,
    imageAlt: "Marine jetty and supply base facility shown on Elshcon's public website",
    kind: "services",
  },
  "marine-logistics": {
    title: "Marine logistics and vessel chartering",
    eyebrow: "Marine solutions",
    intro: "Specialised marine logistics, vessel and barge chartering and support services tailored to the needs of energy-sector operations.",
    description: "Elshcon marine logistics and vessel chartering services, including inland vessels, barges and offshore support vessel categories.",
    image: image.tug,
    imageAlt: "Tugboat shown in Elshcon's published marine operations gallery",
    kind: "service",
    bullets: [
      "Offshore support vessel categories listed by Elshcon include AHTS, AHT and PSVs.",
      "Barge categories include accommodation, work and cargo barges.",
      "Inland vessel categories include tugboats, houseboats and barges.",
      "Marine logistics and offshore support services.",
    ],
    sections: [
      {
        title: "Chartering shaped around the operation",
        body: "Elshcon describes its marine offering as specialised logistics, maritime and support services, with vessel and barge chartering tailored to client requirements. Vessel specifications, availability, ownership and charter terms should be confirmed for each request.",
      },
    ],
  },
  "jetty-and-supply-base": {
    title: "Jetty and supply base services",
    eyebrow: "Port and shore-base support",
    intro: "Marine terminal and supply base facilities in the Trans-Amadi Industrial Layout of Port Harcourt, with workshops, warehousing and operational areas.",
    description: "Elshcon jetty and supply base services in Port Harcourt, Rivers State, Nigeria.",
    image: image.jetty,
    imageAlt: "Jetty and supply base area shown on Elshcon's public website",
    kind: "service",
    bullets: [
      "Marine jetty and terminal services.",
      "Fabrication workshops and warehousing.",
      "Outdoor storage and operational areas.",
      "Dedicated, ad-hoc and bespoke logistics support.",
    ],
    sections: [
      {
        title: "Facilities that support the work",
        body: "Elshcon's public website describes two marine jetties/terminals at its Trans-Amadi Industrial Layout location. The published description includes fabrication workshops, warehouses, offices and outdoor stacking areas. Facility measurements and current operating arrangements should be reconfirmed with the company before they are used in a proposal.",
      },
      {
        title: "Location",
        body: "#11 Trans-Woji Road and #7 Elshcon Road, off #3 Trans-Woji Road, Trans-Amadi Industrial Layout, Port Harcourt, Rivers State, Nigeria.",
      },
    ],
  },
  "pipeline-and-facilities": {
    title: "Pipeline and facilities",
    eyebrow: "Fabrication and construction",
    intro: "Onshore and offshore pipeline construction and maintenance, flowline work and supporting pipeline-facility maintenance.",
    description: "Elshcon pipeline and facilities construction and maintenance capabilities.",
    image: image.pipeline,
    imageAlt: "Pipeline and flowline maintenance activity shown on Elshcon's public website",
    kind: "service",
    bullets: [
      "Onshore and offshore pipeline construction and maintenance.",
      "Flowline construction and maintenance.",
      "Pipeline-facility maintenance.",
      "Manifold fencing, piping spools, drain-line extensions and pipe supports.",
      "Associated structural steel work.",
    ],
    sections: [
      {
        title: "Practical field scope",
        body: "Elshcon's published pipeline service page identifies activities including welding-joint fit-up, flowline alignment, flowstation-riser work, shrink-sleeve installation and pipeline maintenance. Project-specific scope, methods, resources and approvals should be confirmed during technical enquiry.",
      },
    ],
  },
  "fabrication-and-construction": {
    title: "Fabrication and construction",
    eyebrow: "Industrial execution",
    intro: "Steel fabrication, construction and maintenance solutions designed around client requirements and supported by Elshcon's published workshop and supply-base capabilities.",
    description: "Elshcon steel fabrication, construction and maintenance services.",
    image: image.workshop,
    imageAlt: "Industrial fabrication and maintenance activity shown on Elshcon's public website",
    kind: "service",
    bullets: [
      "Steel fabrication and construction.",
      "Facilities and pipeline-related structural work.",
      "Welding and fabrication activities.",
      "Maintenance support for industrial and energy operations.",
    ],
    sections: [
      {
        title: "Scope-led delivery",
        body: "Elshcon describes a flexible approach to fabrication and construction, with options shaped to specific client needs. Detailed engineering, workshop capacity, project references and delivery schedules should be confirmed for each proposed scope.",
      },
    ],
  },
  "elshcon-offshore": {
    title: "Elshcon Offshore",
    eyebrow: "Marine services",
    intro: "Elshcon Offshore Nigeria Limited is described on the company's public website as an independent marine services company formed from Elshcon's former marine division.",
    description: "Marine service areas listed by Elshcon Offshore Nigeria Limited.",
    image: image.inlandVessels,
    imageAlt: "Marine vessels shown in Elshcon's published gallery",
    kind: "service",
    bullets: [
      "Marine logistics and vessel chartering.",
      "Offshore lifting.",
      "Towage and salvage.",
      "Ship management.",
      "Diving and ROV services.",
      "Ship chandelling and stevedoring.",
      "Dredging.",
    ],
    sections: [
      {
        title: "Confirm the contracting entity",
        body: "The published Elshcon Offshore page lists these service areas. Before a tender or contract is issued, confirm the correct legal entity, current service availability, equipment schedule and commercial contact for the requested work.",
      },
    ],
  },
  "quality-and-hse": {
    title: "Quality, health, safety and environment",
    eyebrow: "Responsible operations",
    intro: "Elshcon publishes commitments to quality assurance, safe operations, environmental protection, compliance and continual improvement.",
    description: "Elshcon quality assurance, HSE policies and operational commitments.",
    image: image.offshoreWork,
    imageAlt: "Marine and industrial personnel shown in Elshcon's public operations gallery",
    kind: "quality",
    bullets: [
      "Quality management and continual improvement.",
      "Occupational health and safety for employees, contractors and visitors.",
      "Environmental protection and legal compliance.",
      "Hazard identification, risk assessment and operational controls.",
      "Incident reporting, investigation and learning.",
    ],
    sections: [
      {
        title: "Certification information",
        body: "Elshcon's public website describes the company as ISO 9001:2015 Certified. For formal prequalification, request the current certificate, scope, issuing body and validity dates directly from the company.",
      },
      {
        title: "Policy access",
        body: "Quality and HSE policy statements are published on Elshcon's website. The latest approved controlled copies should be obtained from the company before being attached to a tender or contract submission.",
      },
    ],
  },
  contact: {
    title: "Talk to the Elshcon team",
    eyebrow: "Contact",
    intro: "Send your enquiry to the company or contact the relevant office directly.",
    description: "Contact Elshcon Nigeria Limited in Port Harcourt or Lagos.",
    image: image.supplyBase,
    imageAlt: "Supply base and logistics yard shown on Elshcon's public website",
    kind: "contact",
  },
  "vendor-registration": {
    title: "Vendor registration enquiries",
    eyebrow: "Work with Elshcon",
    intro: "For vendor onboarding and prequalification, contact Elshcon to request the current registration process and documentation requirements.",
    description: "Make a vendor registration enquiry with Elshcon Nigeria Limited.",
    image: image.warehouse,
    imageAlt: "Warehouse facility shown on Elshcon's public website",
    kind: "vendor",
  },
  careers: {
    title: "Build your career with Elshcon",
    eyebrow: "Careers",
    intro: "Interested in working in marine, fabrication, construction or operational support? Contact Elshcon for information about current opportunities and recruitment procedures.",
    description: "Career enquiries for Elshcon Nigeria Limited.",
    image: image.workshop,
    imageAlt: "Industrial work environment shown on Elshcon's public website",
    kind: "careers",
  },
  "company-profile": {
    title: "Company profile",
    eyebrow: "Corporate information",
    intro: "Download a concise company profile prepared from information published on Elshcon's public website.",
    description: "Download the Elshcon Nigeria Limited public-information company profile.",
    image: image.jetty,
    imageAlt: "Elshcon jetty and supply base facility",
    kind: "profile",
  },
  faq: {
    title: "Frequently asked questions",
    eyebrow: "Information centre",
    intro: "Answers to common questions about Elshcon's published services, locations and enquiry process.",
    description: "Frequently asked questions about Elshcon services and contacts.",
    image: image.inlandVessels,
    imageAlt: "Marine vessels from Elshcon's published gallery",
    kind: "faq",
  },
};

export const FAQ_ITEMS = [
  {
    question: "When was Elshcon Nigeria Limited founded?",
    answer: "Elshcon's public website states that the company was founded in 1990.",
  },
  {
    question: "What are Elshcon's main service areas?",
    answer: "Published service areas include marine logistics and vessel chartering, jetty and supply base services, steel fabrication and construction, pipeline and facilities work, lifting solutions, ship building and repairs, and related marine equipment solutions.",
  },
  {
    question: "Where are Elshcon's offices and supply bases?",
    answer: "The company lists its corporate office in Port Harcourt, a Lagos office on Kofo Abayomi Street in Victoria Island, and fabrication/supply bases in the Trans-Amadi Industrial Layout of Port Harcourt.",
  },
  {
    question: "Can I request a vessel or barge charter?",
    answer: "Yes. Vessel and barge chartering is listed among Elshcon's services. Availability, specifications, ownership, charter terms and timing should be confirmed directly for each enquiry.",
  },
  {
    question: "How do I register as a vendor?",
    answer: "Contact info@elshcon.com and request the current vendor-registration or prequalification requirements. The latest registration pack and process should be supplied by Elshcon.",
  },
  {
    question: "Can I request the company's certificates and project references?",
    answer: "Yes. Contact the company directly for current certificate copies, certificate scope and validity dates, approved project references and any tender-specific documentation.",
  },
];
