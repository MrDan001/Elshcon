/**
 * Single source of truth for every fact shown on the concept site.
 *
 * RULES
 * 1. Only facts taken from the Elshcon audit guide may appear as plain text.
 * 2. Anything not verified must use TBC(...) so it renders as a visible
 *    "[to be confirmed by Elshcon]" marker.
 * 3. Deliberately NOT used anywhere: the "3,500 projects" figure, any
 *    "Byron Group" wording, and the "20+ vessels" fleet claim.
 */

export const TBC_LABEL = "to be confirmed by Elshcon";

export const SITE = {
  conceptName: "Elshcon website concept",
  companyName: "Elshcon Nigeria Limited",
  offshoreName: "Elshcon Offshore Nigeria Limited",
  founded: 1990,
  liveSiteUrl: "https://elshcon.com/",
  tagline: "Integrated maritime logistics and fabrication/construction",
  banner: "Concept for discussion. Not the live Elshcon website.",
} as const;

export type NavItem = { label: string; href: string };

export const NAV: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "About", href: "/about" },
  { label: "Marine Logistics", href: "/marine-logistics" },
  { label: "Jetty & Supply Base", href: "/jetty-and-supply-base" },
  { label: "Pipeline & Facilities", href: "/pipeline-and-facilities" },
  { label: "Policies", href: "/policies" },
  { label: "Contact", href: "/contact" },
];

export type Pillar = {
  slug: string;
  title: string;
  summary: string;
  href: string;
};

/** The three highlighted areas on the current homepage. */
export const PILLARS: Pillar[] = [
  {
    slug: "fabrication-construction",
    title: "Fabrication and Construction",
    summary:
      "Fabrication and construction services, including pipeline construction and maintenance, supported by workshops at the supply base.",
    href: "/pipeline-and-facilities",
  },
  {
    slug: "marine-logistics",
    title: "Marine Logistics and Vessel Chartering",
    summary:
      "Vessel and barge chartering and marine logistics support for industrial and oil-and-gas operations.",
    href: "/marine-logistics",
  },
  {
    slug: "jetty-supply-base",
    title: "Jetty and Supply Base Services",
    summary:
      "Two marine jetties/terminals with workshops, warehouses and supporting facilities.",
    href: "/jetty-and-supply-base",
  },
];

export const PIPELINE_SCOPE: string[] = [
  "Onshore pipeline construction and maintenance",
  "Offshore pipeline construction and maintenance",
  "Flowline work",
  "Pipeline facility maintenance",
];

export type Office = {
  name: string;
  note?: string;
};

export const OFFICES: Office[] = [
  { name: "Corporate office, Port Harcourt" },
  { name: "Lagos office" },
  { name: "Fabrication and supply base" },
];

/** Enquiry categories used by the contact form (routing is a concept only). */
export const ENQUIRY_CATEGORIES: { value: string; label: string }[] = [
  { value: "fabrication", label: "Fabrication and construction" },
  { value: "chartering", label: "Vessel / barge chartering" },
  { value: "jetty", label: "Jetty and supply base services" },
  { value: "pipeline", label: "Pipeline and facilities" },
  { value: "vendor", label: "Vendor registration" },
  { value: "careers", label: "Careers" },
  { value: "other", label: "Something else" },
];

/** Items shown as placeholders until Elshcon supplies and approves them. */
export const TBC_ITEMS = {
  fleet: "Fleet and equipment schedule",
  iso: "Certification scope and validity",
  projects: "Approved project case studies",
  clients: "Client references approved for publication",
  entityAssets: "Which entity owns, manages or charters each asset",
  phone: "Approved phone numbers",
  email: "Approved enquiry email addresses",
  photos: "Approved photography",
} as const;

export const PLACEHOLDER_NOTE =
  "Photo to be supplied by Elshcon. No stock imagery is used in this concept.";

export const COMPARE_PAIRS = [
  {
    id: "services",
    title: "Services",
    liveUrl: "https://elshcon.com/index.php/services/",
    liveUrlLabel: "Open current Services page",
    before: [
      "Wording that refers to another company, Byron Group",
      "Generic construction and engineering descriptions",
      "The same mission paragraph repeated several times",
      "A project-count claim without attributable Elshcon case studies",
    ],
    after: [
      "A distinct, approved description for each Elshcon service",
      "Clear links to the Elshcon service pages",
      "Verified case studies only, shown once approved",
    ],
    conceptHref: "/services",
  },
  {
    id: "about",
    title: "About",
    liveUrl: "https://elshcon.com/index.php/about/",
    liveUrlLabel: "Open legacy About page",
    before: [
      "A construction-company story under the old /about/ route",
      "References to shopping centres in Shanghai and air pollution in New York City",
      "A second, accurate page already exists at /about-us/",
    ],
    after: [
      "One About page, built on the accurate About Us content",
      "Old route reviewed (links, redirects, sitemap) before it is retired",
    ],
    conceptHref: "/about",
  },
  {
    id: "sample",
    title: "Sample Page",
    liveUrl: "https://elshcon.com/index.php/sample-page/",
    liveUrlLabel: "Open Sample Page",
    before: [
      "Default placeholder text and an example biography",
      "Reachable by anyone who has or finds the URL",
    ],
    after: [
      "Confirm with the CMS administrator whether the page is needed",
      "If not, remove it from navigation and sitemap, then redirect or return not-found after checking links",
    ],
    conceptHref: null,
  },
] as const;
