"use client";

import type { ReactNode } from "react";

const evidence = [
  {
    n: "01",
    title: "Services page contains another company's identity",
    url: "https://elshcon.com/index.php/services/",
    label: "Open original Services page",
    status: "Direct public-page text rechecked",
    observed: [
      "The page headline reads “The Most Complete Construction Solutions For Industry”.",
      "The page names “Byron Group” and describes it as a leading end-to-end construction company.",
      "The service cards repeat Civil Engineering, Geotechnical and Structural Engineering, with generic copy.",
      "The page lists Automotive and Construction among its categories.",
      "The mission paragraph appears three times in succession.",
      "The page claims “over 3,500 projects completed” and displays project references such as Apartment Complex and Engineering Design NYC.",
      "Several “Learn More” and project links point to ninzio.com.",
    ],
    impact: "A prospective marine, oil-and-gas or industrial buyer may question whether the capabilities and project claims belong to Elshcon.",
    action: "Replace with an Elshcon-approved capability overview, distinct service descriptions and approved project evidence.",
    wording: "This page is published on Elshcon’s domain, but parts of its visible content refer to Byron Group and a different construction business. We are not claiming to know how that content got there.",
  },
  {
    n: "02",
    title: "Legacy About page tells an unrelated company story",
    url: "https://elshcon.com/index.php/about/",
    label: "Open legacy About page",
    status: "Guide-reported finding — re-open live before presenting",
    observed: [
      "The guide records the headline “We Offer The Most Complete Construction Solutions”.",
      "It records a Byron Group reference.",
      "It records references to shopping centres in Shanghai and air pollution in New York City.",
      "A separate current About Us route is identified at /index.php/about-us/.",
    ],
    compareUrl: "https://elshcon.com/index.php/about-us/",
    compareLabel: "Compare with current About Us",
    impact: "A visitor or search engine reaching the older URL may see a different corporate story from the current company profile.",
    action: "Confirm the approved About page, then review internal links, redirects, canonical settings and sitemap entry before retiring the old route.",
    wording: "There are two different About experiences recorded on the same domain. We should confirm which one management approves and handle the old route carefully.",
  },
  {
    n: "03",
    title: "Services page repeats generic copy and project claims",
    url: "https://elshcon.com/index.php/services/",
    label: "Open Services evidence",
    status: "Direct public-page text rechecked",
    observed: [
      "The same mission paragraph is repeated three times.",
      "The page states that the company has completed over 3,500 projects.",
      "The reviewed page does not provide clearly attributable Elshcon case studies to support that project count.",
      "Project cards use Byron-related wording and generic project descriptions.",
    ],
    impact: "Repeated content reduces clarity. Project examples that cannot be clearly attributed to Elshcon may create reputational and legal concerns.",
    action: "Write unique descriptions for approved services and replace generic counters or template projects with a small number of verified case studies.",
    wording: "We are not saying the 3,500-project figure is false. The issue is that the reviewed page does not provide enough supporting detail to attribute the projects confidently.",
  },
  {
    n: "04",
    title: "A sample WordPress page is publicly accessible",
    url: "https://elshcon.com/index.php/sample-page/",
    label: "Open Sample Page",
    status: "Guide-reported finding — re-open live before presenting",
    observed: [
      "The guide records default sample-page text.",
      "It records an example biography and placeholder company wording.",
      "This is a separate content-governance issue, not proof of a security incident.",
    ],
    impact: "Placeholder content can make the company website appear unfinished if a visitor or search engine reaches it.",
    action: "Ask the CMS administrator whether the page is needed. If not, remove it from navigation and sitemap and choose a suitable redirect or not-found response after checking links.",
    wording: "This appears to be default sample content. We have not inspected the CMS or determined how the page was created.",
  },
  {
    n: "05",
    title: "Homepage has relevant company information but needs a clearer buyer journey",
    url: "https://elshcon.com/",
    label: "Open current homepage",
    status: "Guide-reported review",
    observed: [
      "The guide identifies three highlighted areas: Fabrication and Construction; Marine Logistics and Vessel Chartering; Jetty and Supply Base Services.",
      "It also identifies a longer company introduction and service list.",
    ],
    impact: "A buyer should be able to move quickly from understanding the company, to understanding a capability, to making an enquiry.",
    action: "Organise the homepage around the company proposition, service pillars, operational proof, verified projects, HSE/quality and clear enquiry actions.",
    wording: "The homepage has useful ingredients. The opportunity is to make the route from capability to evidence to enquiry clearer.",
  },
  {
    n: "06",
    title: "Contact information is available, but the enquiry journey can be clearer",
    url: "https://elshcon.com/index.php/contact-us/",
    label: "Open Contact Us",
    status: "Direct public-page text rechecked",
    observed: [
      "The page publishes a Port Harcourt corporate office and a Lagos office.",
      "It publishes fabrication/supply-base details, info@elshcon.com and phone numbers.",
      "The standalone text fragment “A PETAN” appears in the contact content.",
    ],
    impact: "A vessel-chartering enquiry may need a different route from fabrication, vendor registration or careers enquiries.",
    action: "Have management verify all contact details, clarify or remove the PETAN fragment, and consider an enquiry form with a category and correct routing.",
    wording: "The contact details are useful. We are asking management to verify them and clarify what the standalone PETAN text is intended to communicate.",
  },
  {
    n: "07",
    title: "Offshore affiliate relationship needs clearer explanation",
    url: "https://elshcon.com/index.php/elshcon-offshore-services/",
    label: "Open Offshore Services",
    status: "Guide-reported finding — re-open live before presenting",
    observed: [
      "The guide records a statement that Elshcon Offshore Nigeria Limited spun off from the marine division as an independent marine services company.",
      "It records a fleet claim of over 20 owned and managed vessels.",
    ],
    impact: "Procurement and due-diligence teams need to understand which legal entity provides each service and owns, manages or charters each asset.",
    action: "Ask management to approve a group/affiliate statement and identify which entity owns, manages or charters each asset and holds each credential.",
    wording: "We are not assuming the fleet or certifications belong to the parent company. Those entity-specific details need management confirmation.",
  },
];

const foundations = [
  {
    title: "Current About Us",
    url: "https://elshcon.com/index.php/about-us/",
    detail: "The guide says this page describes Elshcon, its history, vision, mission, commitments and quality objectives, and states that Elshcon was founded in 1990.",
  },
  {
    title: "Pipeline and Facilities",
    url: "https://elshcon.com/index.php/pipeline-and-facilities/",
    detail: "The guide identifies onshore/offshore pipeline construction and maintenance, flowline work and pipeline-facility maintenance, with work-related image captions.",
  },
  {
    title: "Jetty and Supply Base",
    url: "https://elshcon.com/index.php/jetty-and-supply-base/",
    detail: "The public page describes two marine jetties/terminals, workshops, warehouses and operational uses. These details still merit management confirmation.",
  },
  {
    title: "Marine Logistics",
    url: "https://elshcon.com/index.php/marine-logistics/",
    detail: "The page describes vessel and barge chartering, offshore support vessels, barges and inland vessels.",
  },
  {
    title: "Policies",
    url: "https://elshcon.com/index.php/policies/",
    detail: "The guide identifies published quality and HSE policy statements as useful foundations for a stronger HSE/quality section.",
  },
];

const roadmap = [
  ["1. Integrity", "Remove unrelated/template text; review external links; resolve legacy About and sample-page routes.", "Priority pages accurately represent Elshcon; obsolete URLs handled safely.", "Fix the most visible credibility risks first."],
  ["2. Structure & copy", "Agree service categories; rewrite the service landing page; clarify affiliate relationship.", "Approved sitemap and unique service descriptions.", "Buyers can understand what Elshcon provides."],
  ["3. Proof", "Prepare approved projects, fleet/equipment information, certifications and HSE evidence.", "Verified case studies and credentials.", "Industrial buyers need evidence, not generic claims."],
  ["4. UX & enquiries", "Improve homepage hierarchy, service navigation, contact routes and forms.", "Clear journeys from capability to enquiry.", "Make the website more useful to prospects."],
  ["5. Technical QA & SEO", "Test mobile, accessibility, performance, metadata, sitemap, redirects, analytics and security basics.", "Measured QA report and launch checklist.", "Verify quality rather than guessing."],
  ["6. Launch & handover", "Back up, deploy, monitor, document and train the responsible team.", "Approved live release and handover.", "Protect continuity and support the responsible team."],
];

const questions = [
  ["How do you know this is not just a browser display issue?", "I can reproduce the content from public URLs and public search listings. I have not inspected the CMS or source code, so I am presenting it as publicly visible content, not diagnosing its technical cause."],
  ["Are you saying our website has been hacked?", "No. I am not making that claim. I can show unrelated content that is publicly accessible. The cause could be legacy template content, an unfinished page or a content-management issue. The site owner would need to investigate internally."],
  ["Are you saying our ISO certification or fleet claim is false?", "No. I am saying those are important claims and should be supported with current, approved evidence, such as certificate scope and validity or an updated fleet schedule."],
  ["Why not just redesign the website?", "A redesign without correcting the content could make the same inaccuracies look more polished. I recommend fixing integrity and structure first, then improving the visual experience."],
  ["Can you guarantee first-page Google rankings?", "No responsible provider can guarantee rankings. I can improve technical and content readiness, consolidate duplicate URLs and measure search performance. Rankings depend on competition, authority, search intent and other factors."],
  ["Can you test our security?", "A proper security review needs written authorisation and a defined scope. This review did not include penetration testing, server inspection or vulnerability scanning."],
  ["What do you need from us?", "A decision-maker, a website/CMS contact, confirmation of hosting and ownership, approved brand assets, and people who can verify services, projects, fleet, certificates, addresses and contact routing."],
  ["How much will it cost and how long will it take?", "I would first confirm the CMS, hosting, access, content workload and approval process. Then I can submit a scoped proposal with deliverables, milestones, exclusions and cost. The 4–6 week roadmap is indicative only."],
];

const proofLinks = [
  ["Homepage", "https://elshcon.com/"],
  ["Services — primary evidence", "https://elshcon.com/index.php/services/"],
  ["Legacy About", "https://elshcon.com/index.php/about/"],
  ["Current About Us", "https://elshcon.com/index.php/about-us/"],
  ["Sample Page", "https://elshcon.com/index.php/sample-page/"],
  ["Contact Us", "https://elshcon.com/index.php/contact-us/"],
  ["Elshcon Offshore Services", "https://elshcon.com/index.php/elshcon-offshore-services/"],
  ["Pipeline and Facilities", "https://elshcon.com/index.php/pipeline-and-facilities/"],
  ["Jetty and Supply Base", "https://elshcon.com/index.php/jetty-and-supply-base/"],
  ["Policies", "https://elshcon.com/index.php/policies/"],
  ["Marine Logistics", "https://elshcon.com/index.php/marine-logistics/"],
];

function Section({ id, number, title, children }: { id: string; number: string; title: string; children: ReactNode }) {
  return <section id={id} className="scroll-mt-24 border-t border-slate-200 py-10 sm:py-14"><div className="mb-6 flex items-center gap-3"><span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-navy text-sm font-bold text-white">{number}</span><h2 className="text-2xl font-extrabold tracking-tight text-navy sm:text-3xl">{title}</h2></div>{children}</section>;
}

function External({ href, children }: { href: string; children: ReactNode }) {
  return <a href={href} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-10 items-center rounded-lg border border-navy/20 bg-white px-3 py-2 text-sm font-bold text-navy underline decoration-teal underline-offset-4 hover:bg-sand">{children} ↗</a>;
}

export default function ComparePage() {
  return (
    <main className="min-h-screen bg-[#f6f8fa] text-slate-800">
      <header className="bg-navy text-white">
        <div className="mx-auto max-w-6xl px-5 py-12 sm:px-8 sm:py-16">
          <p className="text-xs font-bold uppercase tracking-[.22em] text-teal-200">Elshcon · Website audit evidence guide</p>
          <h1 className="mt-4 max-w-4xl text-3xl font-black leading-tight sm:text-5xl">Management presentation &amp; evidence room</h1>
          <p className="mt-5 max-w-3xl text-base leading-7 text-slate-200">A guided, page-by-page presentation of the public website findings, positive foundations and proposed improvement roadmap. Open the original pages directly to demonstrate the evidence.</p>
          <div className="mt-7 flex flex-wrap gap-3"><span className="rounded-full border border-white/20 px-3 py-2 text-xs font-semibold">Public-facing review only</span><span className="rounded-full border border-white/20 px-3 py-2 text-xs font-semibold">Evidence re-check: 17 Nov 2026</span><span className="rounded-full border border-white/20 px-3 py-2 text-xs font-semibold">Meeting target: 20 Nov 2026</span></div>
          <p className="mt-6 max-w-3xl text-sm leading-6 text-amber-100">This is an external, black-box review. It is not a CMS, source-code, hosting, security or penetration-test audit. Some findings below are marked for live re-check before presenting.</p>
        </div>
      </header>

      <div className="mx-auto grid max-w-6xl gap-8 px-5 py-8 sm:px-8 lg:grid-cols-[250px_minmax(0,1fr)]">
        <aside className="h-fit rounded-2xl border border-slate-200 bg-white p-5 shadow-sm lg:sticky lg:top-24">
          <p className="text-xs font-black uppercase tracking-widest text-teal">Presentation contents</p>
          <nav className="mt-4 grid grid-cols-2 gap-2 text-sm lg:grid-cols-1">
            {[["objective","01 · Objective"],["findings","02 · Seven findings"],["foundations","03 · Good foundations"],["demo","04 · Live demo order"],["roadmap","05 · Improvement plan"],["questions","06 · Management Q&A"],["guardrails","07 · What not to claim"],["close","08 · Closing & next steps"],["checklist","09 · Rehearsal checklist"],["register","10 · Evidence register"]].map(([id,label])=><a key={id} href={`#${id}`} className="rounded-lg px-3 py-2 font-semibold text-slate-600 hover:bg-slate-100 hover:text-navy">{label}</a>)}
          </nav>
          <div className="mt-5 border-t border-slate-100 pt-4"><External href="https://elshcon.com/">Open elshcon.com</External><p className="mt-2 text-xs leading-5 text-slate-500">Concept pages are available through the site navigation. Original evidence links open in a new tab.</p></div>
        </aside>

        <div className="min-w-0 rounded-2xl border border-slate-200 bg-white px-5 shadow-sm sm:px-8">
          <Section id="objective" number="01" title="Your objective in the meeting">
            <p className="leading-7">The goal is not to embarrass the people who built the existing website or to claim the whole website is bad. Demonstrate that some public pages do not consistently represent Elshcon’s maritime, marine logistics, fabrication and industrial-services identity, then show a sensible way to correct that.</p>
            <div className="mt-5 rounded-xl border-l-4 border-teal bg-teal-50 p-5"><p className="text-xs font-black uppercase tracking-widest text-teal-800">One-minute opening</p><p className="mt-3 text-base leading-7 text-slate-700">“Thank you for the opportunity. I reviewed Elshcon’s publicly accessible website from the perspective of a prospective client, supplier or business partner researching the company. I found that the website already contains valuable information about Elshcon’s history, services, facilities and quality commitments. However, some pages still display unrelated construction-company material, repeated generic content and legacy pages that do not consistently reflect Elshcon. I would like to show you the exact pages, explain why these issues matter to credibility and enquiries, and propose a phased improvement plan that starts with accuracy before visual redesign.”</p></div>
            <h3 className="mt-7 text-lg font-extrabold text-navy">What success looks like</h3><ul className="mt-3 list-disc space-y-2 pl-5 leading-6">{["Show 3–5 strong examples live, using the exact URLs in this guide.","Explain the difference between an observed fact and something that still needs technical verification.","Recommend a controlled, phased improvement—not an expensive rebuild before discovery.","Leave with permission to submit a scope, speak with the website owner and validate company information."].map(x=><li key={x}>{x}</li>)}</ul>
          </Section>

          <Section id="findings" number="02" title="The seven findings to demonstrate">
            <p className="mb-6 leading-7 text-slate-600">Prioritise the first four findings. Each card contains the exact proof path, what the guide records, why it matters, a recommended action and careful wording. Where the current page could not be independently re-fetched, that is stated clearly.</p>
            <div className="space-y-5">{evidence.map(item=><article key={item.n} className="overflow-hidden rounded-2xl border border-slate-200">
              <div className="flex flex-wrap items-center justify-between gap-3 bg-slate-50 px-5 py-4"><div className="flex items-center gap-3"><span className="grid h-9 w-9 place-items-center rounded-lg bg-navy text-sm font-black text-white">{item.n}</span><h3 className="text-lg font-extrabold text-navy">{item.title}</h3></div><span className="rounded-full bg-white px-3 py-1 text-xs font-bold text-slate-600 ring-1 ring-slate-200">{item.status}</span></div>
              <div className="grid gap-5 p-5 md:grid-cols-2"><div><p className="text-xs font-black uppercase tracking-widest text-teal">What to show / visible evidence</p><ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-6">{item.observed.map(x=><li key={x}>{x}</li>)}</ul><div className="mt-4 flex flex-wrap gap-2"><External href={item.url}>{item.label}</External>{item.compareUrl&&<External href={item.compareUrl}>{item.compareLabel}</External>}</div></div><div className="space-y-4"><div><p className="text-xs font-black uppercase tracking-widest text-teal">Why it matters</p><p className="mt-2 text-sm leading-6">{item.impact}</p></div><div><p className="text-xs font-black uppercase tracking-widest text-teal">Recommended action</p><p className="mt-2 text-sm leading-6">{item.action}</p></div><div className="rounded-xl bg-amber-50 p-4"><p className="text-xs font-black uppercase tracking-widest text-amber-900">Careful wording — what to say</p><p className="mt-2 text-sm leading-6 text-amber-950">{item.wording}</p></div></div></div>
            </article>)}</div>
          </Section>

          <Section id="foundations" number="03" title="Proof that the website has good foundations">
            <p className="mb-5 leading-7">A balanced presentation is more credible than presenting only faults. These pages are useful company-specific foundations to preserve and strengthen. Details should still be confirmed by management before they are treated as approved corporate claims.</p>
            <div className="grid gap-4 sm:grid-cols-2">{foundations.map(x=><article key={x.title} className="rounded-xl border border-slate-200 p-5"><h3 className="font-extrabold text-navy">{x.title}</h3><p className="mt-2 text-sm leading-6 text-slate-600">{x.detail}</p><div className="mt-4"><External href={x.url}>Open original page</External></div></article>)}</div>
          </Section>

          <Section id="demo" number="04" title="Your live demonstration order">
            <p className="mb-5 leading-7">Keep the browser demonstration to about 8–12 minutes. Do not attempt to tour every page.</p>
            <ol className="space-y-3">{["Start on the homepage — establish what Elshcon says it does: marine logistics, fabrication/construction and supply-base services.","Open Services — show the Byron Group references, generic construction positioning, repeated copy and generic project claims. This is the strongest example.","Open the legacy About page — show the recorded Byron Group and unrelated New York/Shanghai narrative.","Compare with current About Us — show that a company-specific page exists and may be retained as the foundation.","Open Sample Page — show the reported placeholder content. This demonstrates the need for a full public URL/content inventory.","Open Contact Us — show the published contact information and PETAN fragment; frame this as a clarification and enquiry-improvement opportunity.","Close with a good page — show Pipeline and Facilities or Jetty and Supply Base to demonstrate useful Elshcon-specific content."].map((x,i)=><li key={x} className="flex gap-3 rounded-xl bg-slate-50 p-4"><span className="font-black text-teal">{i+1}.</span><span className="text-sm leading-6">{x}</span></li>)}</ol>
          </Section>

          <Section id="roadmap" number="05" title="The improvement plan to propose">
            <p className="mb-5 leading-7">Indicative timing: approximately 4–6 weeks after access, approvals and content are available. This is an estimate only—not a promise or fixed quotation.</p>
            <div className="space-y-3">{roadmap.map((r,i)=><article key={r[0]} className="rounded-xl border border-slate-200 p-4"><div className="flex flex-wrap items-center justify-between gap-2"><h3 className="font-extrabold text-navy">{r[0]}</h3><span className="text-xs font-bold text-teal">Phase {i+1} of 6</span></div><div className="mt-3 grid gap-3 text-sm sm:grid-cols-3"><div><p className="text-xs font-black uppercase tracking-wider text-slate-400">Work</p><p className="mt-1 leading-6">{r[1]}</p></div><div><p className="text-xs font-black uppercase tracking-wider text-slate-400">Deliverable</p><p className="mt-1 leading-6">{r[2]}</p></div><div><p className="text-xs font-black uppercase tracking-wider text-slate-400">Why this order</p><p className="mt-1 leading-6">{r[3]}</p></div></div></article>)}</div>
          </Section>

          <Section id="questions" number="06" title="Questions management may ask you">
            <div className="space-y-3">{questions.map(([q,a])=><details key={q} className="group rounded-xl border border-slate-200 p-4"><summary className="cursor-pointer list-none pr-6 font-bold text-navy marker:hidden">{q}<span className="float-right text-teal group-open:rotate-45">＋</span></summary><p className="mt-3 border-t border-slate-100 pt-3 text-sm leading-7 text-slate-700">{a}</p></details>)}</div>
          </Section>

          <Section id="guardrails" number="07" title="What you must not claim">
            <div className="rounded-xl border border-red-200 bg-red-50 p-5"><ul className="list-disc space-y-2 pl-5 text-sm leading-6 text-red-950">{["Do not say the website has been hacked, infected or compromised. This review did not test that.","Do not say the site is slow, inaccessible or insecure without measured testing.","Do not call the Byron Group content fraud or proof of malicious activity. Call it unrelated public content that requires investigation.","Do not say the 3,500-project figure, ISO certification, vessel fleet or client relationships are false. Ask Elshcon to validate and support the claims.","Do not promise guaranteed Google rankings, traffic, enquiries or a fixed launch date.","Do not recommend deleting legacy URLs without checking redirects, internal links, backlinks, sitemap and canonical settings.","Do not access admin systems, edit the production website or conduct security tests without written authorisation."].map(x=><li key={x}>{x}</li>)}</ul></div>
            <p className="mt-4 text-sm leading-6 text-slate-600">Scope note: this review used public-facing pages and indexed content only. No CMS, source-code, database, hosting, DNS, analytics or authenticated access was used. No penetration testing, vulnerability scanning, formal accessibility assessment, measured Core Web Vitals or real-user analytics review was completed.</p>
          </Section>

          <Section id="close" number="08" title="Closing statement and next-step request">
            <div className="rounded-xl bg-navy p-5 text-white"><p className="text-xs font-black uppercase tracking-widest text-teal-200">Closing statement</p><p className="mt-3 leading-7">“My recommendation is to protect the value Elshcon has already built and make sure the website represents it accurately. I would begin with a focused content-integrity phase, then agree the service structure and proof materials, improve the enquiry journey, and finally complete measured technical and SEO checks. If management is interested, the next step is a short discovery session with the website owner and the relevant service/content approvers. I can then submit a clear scope, timeline and cost for approval.”</p></div>
            <h3 className="mt-6 font-extrabold text-navy">Ask for these next steps</h3><ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-6">{["Permission to present the findings and, if useful, a homepage/services-page concept.","The name of the person responsible for the website, CMS and hosting.","Confirmation of the legal entity/brand relationship between Elshcon Nigeria Limited and Elshcon Offshore Nigeria Limited.","A contact who can approve service descriptions, projects, fleet details, certificates, photos and contact information.","Written authorisation and a defined scope before any implementation or security testing."].map(x=><li key={x}>{x}</li>)}</ul>
          </Section>

          <Section id="checklist" number="09" title="Friday rehearsal checklist">
            <div className="grid gap-3 sm:grid-cols-2">{["Open every proof URL on your phone or laptop before the meeting.","Take screenshots of the Services page, legacy About page and Sample Page as backup evidence.","Test that you can move between /about/ and /about-us/ quickly.","Keep this guide open and bookmark the seven demonstration URLs.","Practise the one-minute opening until it sounds natural—not memorised.","Practise explaining the difference between “visible evidence” and “not verified”.","Do not spend too long on visual design. Lead with accuracy, trust and business impact.","Bring a notebook and write down the website owner’s details, approval process and next meeting date."].map(x=><label key={x} className="flex items-start gap-3 rounded-xl bg-slate-50 p-4 text-sm leading-6"><input type="checkbox" className="mt-1 h-4 w-4 accent-teal"/><span>{x}</span></label>)}</div>
          </Section>

          <Section id="register" number="10" title="Evidence register — quick links">
            <p className="mb-5 leading-7">Open the original source pages directly during the presentation. If a page has changed since the review, record its current result and do not present an older observation as current.</p>
            <div className="grid gap-2 sm:grid-cols-2">{proofLinks.map(([label,url])=><a key={label} href={url} target="_blank" rel="noopener noreferrer" className="flex min-h-12 items-center justify-between gap-3 rounded-lg border border-slate-200 px-4 py-3 text-sm font-semibold text-navy hover:border-teal hover:bg-teal-50"><span>{label}</span><span className="text-teal">↗</span></a>)}</div>
            <div className="mt-6 rounded-xl bg-slate-50 p-4 text-xs leading-6 text-slate-500"><p><strong>Evidence source:</strong> Elshcon Management Meeting Preparation Guide, supplied for this presentation. The guide records its evidence re-check date as 17 November 2026.</p><p className="mt-2"><strong>Live re-check note:</strong> The Services and Contact Us pages were independently readable during preparation of this page. Several other legacy URLs timed out or could not be fetched in the current check; those findings are explicitly labelled for live re-check before being presented as current.</p></div>
          </Section>
        </div>
      </div>
      <footer className="bg-navy px-5 py-8 text-center text-xs leading-6 text-slate-300">ELSHCON · Management evidence presentation · Public-facing review only · Prepared for discussion, not a technical or security audit.</footer>
    </main>
  );
}
