export const runtime = "nodejs";
export const dynamic = "force-dynamic";

type RGB = [number, number, number];

const W = 595;
const H = 842;
const navy: RGB = [0.035, 0.12, 0.21];
const teal: RGB = [0.055, 0.56, 0.56];
const ink: RGB = [0.10, 0.18, 0.25];
const muted: RGB = [0.37, 0.44, 0.50];
const pale: RGB = [0.94, 0.965, 0.97];
const white: RGB = [1, 1, 1];

function pdfEscape(value: string) {
  return value.replace(/\\/g, "\\\\").replace(/\(/g, "\\(").replace(/\)/g, "\\)");
}

function fill(color: RGB) {
  return color.map((v) => v.toFixed(3)).join(" ");
}

function rect(x: number, top: number, width: number, height: number, color: RGB) {
  const y = H - top - height;
  return fill(color) + " rg " + x + " " + y + " " + width + " " + height + " re f\n";
}

function line(x1: number, top1: number, x2: number, top2: number, color: RGB, width = 1) {
  return fill(color) + " RG " + width + " w " + x1 + " " + (H - top1) + " m " + x2 + " " + (H - top2) + " l S\n";
}

function text(x: number, top: number, size: number, value: string, color: RGB = ink, bold = false) {
  const y = H - top - size;
  return "BT /" + (bold ? "F2" : "F1") + " " + size + " Tf " + fill(color) + " rg " +
    x + " " + y + " Td (" + pdfEscape(value) + ") Tj ET\n";
}

function paragraph(x: number, top: number, size: number, leading: number, lines: string[], color: RGB = muted) {
  return lines.map((value, index) => text(x, top + index * leading, size, value, color)).join("");
}

function basePage(page: number, section: string) {
  let s = rect(0, 0, W, H, white);
  s += rect(0, 0, W, 10, teal);
  s += text(42, 35, 11, "ELSHCON", navy, true);
  s += text(106, 37, 7, "NIGERIA LIMITED", muted, true);
  s += text(410, 38, 7, section.toUpperCase(), teal, true);
  s += line(42, 61, 553, 61, [0.86, 0.90, 0.92], 0.7);
  s += line(42, 795, 553, 795, [0.86, 0.90, 0.92], 0.7);
  s += text(42, 808, 7, "PUBLIC INFORMATION EDITION | NOVEMBER 2026", muted);
  s += text(526, 808, 8, String(page).padStart(2, "0"), teal, true);
  return s;
}

function makePages() {
  const pages: string[] = [];

  let p1 = rect(0, 0, W, H, navy);
  p1 += rect(0, 0, W, 12, teal);
  p1 += rect(42, 60, 48, 48, teal);
  p1 += text(57, 67, 29, "E", white, true);
  p1 += text(42, 147, 10, "ELSHCON NIGERIA LIMITED", [0.58, 0.88, 0.86], true);
  p1 += text(42, 185, 37, "Integrated energy", white, true);
  p1 += text(42, 229, 37, "and marine", white, true);
  p1 += text(42, 273, 37, "solutions.", white, true);
  p1 += paragraph(44, 338, 12, 19, [
    "Marine logistics, vessel and barge chartering, jetty and",
    "supply base services, fabrication, construction and",
    "pipeline-facility support for industrial operations."
  ], [0.84, 0.90, 0.94]);
  p1 += rect(42, 438, 511, 1, [0.23, 0.39, 0.49]);
  p1 += text(42, 465, 10, "ESTABLISHED", [0.62, 0.85, 0.84], true);
  p1 += text(42, 489, 39, "1990", white, true);
  p1 += text(199, 465, 10, "HEAD OFFICE", [0.62, 0.85, 0.84], true);
  p1 += text(199, 491, 13, "Port Harcourt, Nigeria", white, true);
  p1 += text(42, 595, 9, "OUR CORE SERVICE AREAS", [0.62, 0.85, 0.84], true);
  const cards: [string, string][] = [
    ["MARINE", "Logistics and vessel chartering"],
    ["SUPPLY BASE", "Jetty, terminal and shore support"],
    ["INDUSTRIAL", "Fabrication and construction"],
    ["PIPELINES", "Pipeline and facilities maintenance"],
  ];
  const cardW = 245;
  cards.forEach((card, index) => {
    const x = 42 + (index % 2) * 266;
    const y = 625 + Math.floor(index / 2) * 70;
    p1 += rect(x, y, cardW, 56, [0.08, 0.20, 0.29]);
    p1 += text(x + 13, y + 10, 8, card[0], [0.55, 0.84, 0.82], true);
    p1 += text(x + 13, y + 28, 9, card[1], white);
  });
  p1 += text(42, 790, 7, "COMPANY PROFILE | PREPARED FROM PUBLICLY AVAILABLE COMPANY INFORMATION", [0.70, 0.79, 0.85]);
  pages.push(p1);

  let p2 = basePage(2, "Capabilities");
  p2 += text(42, 89, 26, "Services and capabilities", navy, true);
  p2 += paragraph(42, 127, 10, 15, [
    "Elshcon's public service descriptions bring together marine operations,",
    "shore-base facilities and industrial construction and maintenance."
  ], muted);
  const serviceCards: [string, string[]][] = [
    ["01  MARINE LOGISTICS", [
      "Marine vessel and barge chartering.",
      "Offshore support vessel categories published",
      "include AHTS, AHT and PSVs.",
      "Inland vessels include tugboats, houseboats",
      "and barges; barge categories include",
      "accommodation, work and cargo."
    ]],
    ["02  JETTY AND SUPPLY BASE", [
      "Marine jetties and terminal services.",
      "Fabrication workshops and warehousing.",
      "Offices, outdoor storage and operational",
      "areas at the Trans-Amadi Industrial Layout",
      "in Port Harcourt."
    ]],
    ["03  PIPELINE AND FACILITIES", [
      "Onshore and offshore pipeline construction",
      "and maintenance; flowline work; pipeline",
      "facility maintenance including manifold",
      "fencing, piping spools, drain-line extensions,",
      "pipe supports and structural steel."
    ]],
    ["04  FABRICATION AND CONSTRUCTION", [
      "Steel fabrication, construction and",
      "maintenance activities for industrial and",
      "energy operations, with project scope and",
      "technical arrangements confirmed against",
      "each client requirement."
    ]],
  ];
  serviceCards.forEach((card, index) => {
    const x = 42 + (index % 2) * 266;
    const y = 190 + Math.floor(index / 2) * 214;
    p2 += rect(x, y, 245, 188, pale);
    p2 += rect(x, y, 245, 4, teal);
    p2 += text(x + 16, y + 19, 9, card[0], navy, true);
    p2 += paragraph(x + 16, y + 49, 9, 16, card[1], muted);
  });
  p2 += text(42, 635, 15, "Additional published marine services", navy, true);
  p2 += paragraph(42, 664, 9, 16, [
    "The Elshcon Offshore public page lists offshore lifting, towage and salvage, ship management,",
    "diving and ROV services, ship chandelling and stevedoring, and dredging. Confirm the correct",
    "contracting entity, present service availability and technical scope with the company."
  ], muted);
  p2 += rect(42, 728, 511, 44, [0.91, 0.96, 0.96]);
  p2 += text(56, 740, 9, "SCOPE NOTE", teal, true);
  p2 += text(56, 756, 8, "Service categories are an overview, not a guarantee of current asset availability.", ink);
  pages.push(p2);

  let p3 = basePage(3, "Quality and contact");
  p3 += text(42, 89, 26, "Responsible operations", navy, true);
  p3 += paragraph(42, 127, 10, 15, [
    "Elshcon publishes commitments to quality assurance, safe operations,",
    "environmental protection, legal compliance and continual improvement."
  ], muted);
  const values: [string, string][] = [
    ["SAFETY", "Identify hazards, assess operational risks and apply appropriate controls."],
    ["QUALITY", "Use quality-management principles and support continual improvement."],
    ["ENVIRONMENT", "Protect the environment and meet applicable legal requirements."],
    ["INTEGRITY", "Report and investigate incidents, learn and improve operating practices."],
  ];
  values.forEach((value, index) => {
    const y = 188 + index * 61;
    p3 += rect(42, y, 511, 49, index % 2 === 0 ? pale : white);
    p3 += text(56, y + 9, 8, value[0], teal, true);
    p3 += text(165, y + 10, 8, value[1], ink);
  });
  p3 += text(42, 465, 15, "Locations and enquiries", navy, true);
  p3 += line(42, 491, 553, 491, [0.86, 0.90, 0.92], 0.7);
  p3 += text(42, 506, 9, "CORPORATE OFFICE", teal, true);
  p3 += paragraph(42, 526, 8, 13, [
    "Deborah Lawson House, F6 Abacha Road,",
    "G.R.A. Phase III, Port Harcourt,",
    "Rivers State, Nigeria."
  ], ink);
  p3 += text(310, 506, 9, "LAGOS OFFICE", teal, true);
  p3 += paragraph(310, 526, 8, 13, [
    "#33 Kofo Abayomi Street,",
    "Victoria Island, Lagos State,",
    "Nigeria."
  ], ink);
  p3 += text(42, 584, 9, "FABRICATION / SUPPLY BASE", teal, true);
  p3 += paragraph(42, 604, 8, 13, [
    "#11 Trans-Woji Road and #7 Elshcon Road, off #3 Trans-Woji Road,",
    "Trans-Amadi Industrial Layout, Port Harcourt, Rivers State, Nigeria."
  ], ink);
  p3 += rect(42, 654, 511, 86, navy);
  p3 += text(58, 668, 9, "CONTACT ELSHCON", [0.61, 0.88, 0.85], true);
  p3 += text(58, 691, 11, "info@elshcon.com", white, true);
  p3 += text(285, 691, 10, "+234 803 310 7554", white, true);
  p3 += text(58, 714, 8, "+234 810 639 7930   |   +234 805 510 4192", [0.84, 0.90, 0.94]);
  p3 += paragraph(42, 752, 7, 10, [
    "Public-information edition compiled from Elshcon's publicly accessible website. Verify the current",
    "certificate copies, scope, validity, vessel and equipment schedules, client references, project details",
    "and commercial availability directly with Elshcon before tender or contractual use."
  ], muted);
  pages.push(p3);

  return pages;
}

function createPdf() {
  const pages = makePages();
  const objects: string[] = [];
  const pageIds = pages.map((_, index) => 3 + index * 2);
  objects[1] = "<< /Type /Catalog /Pages 2 0 R >>";
  objects[2] = "<< /Type /Pages /Count " + pages.length + " /Kids [" + pageIds.map((id) => id + " 0 R").join(" ") + "] >>";
  pages.forEach((stream, index) => {
    const pageId = pageIds[index];
    const streamId = pageId + 1;
    objects[pageId] =
      "<< /Type /Page /Parent 2 0 R /MediaBox [0 0 " + W + " " + H +
      "] /Resources << /Font << /F1 9 0 R /F2 10 0 R >> >> /Contents " + streamId + " 0 R >>";
    objects[streamId] = "<< /Length " + stream.length + " >>\nstream\n" + stream + "endstream";
  });
  objects[9] = "<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica >>";
  objects[10] = "<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica-Bold >>";

  let pdf = "%PDF-1.4\n";
  const offsets: number[] = [0];
  for (let id = 1; id <= 10; id++) {
    offsets[id] = pdf.length;
    pdf += id + " 0 obj\n" + objects[id] + "\nendobj\n";
  }
  const xrefOffset = pdf.length;
  pdf += "xref\n0 11\n0000000000 65535 f \n";
  for (let id = 1; id <= 10; id++) {
    pdf += String(offsets[id]).padStart(10, "0") + " 00000 n \n";
  }
  pdf += "trailer\n<< /Size 11 /Root 1 0 R >>\nstartxref\n" + xrefOffset + "\n%%EOF";
  return pdf;
}

export async function GET() {
  const pdf = createPdf();
  return new Response(new TextEncoder().encode(pdf), {
    headers: {
      "Content-Type": "application/pdf",
      "Content-Disposition": 'attachment; filename="Elshcon-Company-Profile.pdf"',
      "Cache-Control": "public, max-age=3600",
    },
  });
}
