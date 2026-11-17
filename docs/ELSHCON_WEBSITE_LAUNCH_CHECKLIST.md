# Elshcon public website: launch checklist

The public-facing website is implemented under \`/website\` so the audit/demo remains at \`/\`. This checklist records information and production tasks that must be confirmed before replacing or redirecting the existing company website.

## Management approvals

- [ ] Supply the current approved Elshcon logo in SVG or transparent PNG, plus brand guidelines and approved brand colours. The website currently uses a simple typographic lettermark, not a representation of an approved master logo.
- [ ] Approve the wording for the company name, legal entities, group relationships and the services each entity is authorised to contract for.
- [ ] Confirm the corporate office, Lagos office, supply-base addresses, published telephone numbers and public enquiry email.
- [ ] Confirm the current Quality and HSE policy versions and provide the current ISO certificate, scope, issuing body and validity dates before displaying any certificate badge or downloadable evidence.
- [ ] Confirm current fleet, vessel and equipment specifications, availability, ownership/management status and any lifting capacity claims before publishing numbers.
- [ ] Approve all client names, project references, awards, case studies and project photographs before adding them to the site.
- [ ] Confirm the current vendor registration process, required documents and the correct team mailbox.
- [ ] Confirm current vacancies and the approved recruitment process before publishing job adverts.

## Assets and hosting

- [ ] Copy the photographs currently referenced from the existing WordPress media library into this project's own \`public\` asset folder or an approved media store. The preview presently references image URLs on \`elshcon.com/wp-content/uploads\`; those URLs may stop resolving if the old WordPress origin is replaced during domain cutover.
- [ ] Replace the temporary typographic lettermark and favicon with the approved logo files.
- [ ] Confirm image-use rights and obtain original/high-resolution versions where available. Supply descriptive alt text for each approved photograph.

## Enquiries and downloads

- [ ] The current contact and vendor forms prepare a message in the visitor's email application addressed to \`info@elshcon.com\`. Configure and test a server-side email service (for example, a verified transactional email provider) before describing the form as a direct website submission.
- [ ] Confirm the receiving mailbox and notification recipients, autoresponse wording, privacy notice and retention period for submitted enquiries.
- [ ] Review the generated public-information company profile PDF. It is not a technical tender pack and intentionally excludes unverified fleet totals, client references, project counts and certificate validity claims.

## Technical launch checks

- [ ] Run an install and production build using the repository's lockfile and the production Node.js version.
- [ ] Test all routes on mobile, tablet and desktop; verify the slideshow, menu, reduced-motion behavior, mail links, map links, 404 page and PDF download.
- [ ] Test remote images after they have been copied to project-owned storage.
- [ ] Confirm final production domain, canonical URLs, redirects, analytics consent, privacy/legal wording and email configuration.
- [ ] Review the generated \`robots.txt\` and \`sitemap.xml\` on the final production hostname and submit the sitemap to Search Console after launch.

## Public content source

Initial public content was rewritten from the company website's Home, About Us, Marine Logistics, Jetty/Supply Base, Pipeline and Facilities, Elshcon Offshore, Policies and Contact sections. Public claims are paraphrased rather than copied verbatim. Where current documents or details are not available, the website asks visitors to contact Elshcon and does not invent supporting information.
