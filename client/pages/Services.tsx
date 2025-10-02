import { useEffect } from "react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { m } from "framer-motion";

const imgSetup = "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg"; // signing documents
const imgVisas = "https://cdn.builder.io/api/v1/image/assets%2Fb38b36ed8d244fffadd179bb37229fcc%2F12e780794d3a4dd88ce971e70a598006?format=webp&width=800";
const imgTax = "https://images.pexels.com/photos/669615/pexels-photo-669615.jpeg"; // tax docs & calculator
const imgAccounting = "https://images.pexels.com/photos/669616/pexels-photo-669616.jpeg"; // spreadsheets
const imgIP = "https://images.pexels.com/photos/261949/pexels-photo-261949.jpeg"; // legal/IP
const imgRealEstate = "https://cdn.builder.io/api/v1/image/assets%2Fb38b36ed8d244fffadd179bb37229fcc%2Fa05c216b9a8a453bb11da6e3f6ada0fd?format=webp&width=800";
const imgESR = "https://cdn.builder.io/api/v1/image/assets%2Fb38b36ed8d244fffadd179bb37229fcc%2Fb1827e209435442fa7167fb1590e1044?format=webp&width=800";

export default function Services() {
  useEffect(() => {
    document.title = "Services — Seminant Business Setup & Auditing";
  }, []);

  return (
    <section className="container mx-auto px-4 py-16">
      <div className="mx-auto max-w-3xl text-center">
        <h1 className="text-4xl font-extrabold tracking-tight">Automation Services</h1>
        <p className="mt-3 text-base text-muted-foreground">
          Licence issuance, visas, tax, accounting, trademarks and real‑estate admin—delivered with portal‑first workflows, templates, and a compliance calendar.
        </p>
      </div>

      <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        <m.article initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.3 }} className="group overflow-hidden rounded-xl border bg-card shadow-sm transition-shadow hover:shadow-md">
          <div className="aspect-[16/9] w-full overflow-hidden">
            <img src={imgSetup} loading="lazy" decoding="async" sizes="(max-width: 768px) 100vw, 33vw" alt="Business setup team preparing licence documents" className="h-full w-full object-cover" />
          </div>
          <div className="p-6">
            <h2 className="text-xl font-semibold">Business Setup (Onshore & Free Zones)</h2>
            <p className="mt-2 text-sm text-muted-foreground">Onshore (Dubai DED, others) for local trading and tenders; free zones for ecosystem adjacency and visa capacity. We map activities, legal type, name reservation, and fees—then complete issuance.</p>
            <Accordion type="multiple" className="mt-3">
              <AccordionItem value="a1">
                <AccordionTrigger>Scope</AccordionTrigger>
                <AccordionContent>
                  Activities & legal form, name reservation & initial approval, MoA/Articles, office/desk & Ejari, licence issuance, establishment card, MOHRE registration, bank intro pack.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="a2">
                <AccordionTrigger>Inclusions</AccordionTrigger>
                <AccordionContent>
                  Attestations guidance, portal submissions (Invest in Dubai / free‑zone portals), fee schedule mapping, PRO runs, appointment scheduling, receipt vault.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="a3">
                <AccordionTrigger>SLA</AccordionTrigger>
                <AccordionContent>
                  3–7 working days depending on authority, sector approvals, and immigration throughput.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </m.article>

        <m.article initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.3 }} className="group overflow-hidden rounded-xl border bg-card shadow-sm transition-shadow hover:shadow-md">
          <div className="aspect-[16/9] w-full overflow-hidden">
            <img src={imgVisas} loading="lazy" decoding="async" sizes="(max-width: 768px) 100vw, 33vw" alt="Immigration and visa processing desk" className="h-full w-full object-cover" />
          </div>
          <div className="p-6">
            <h2 className="text-xl font-semibold">Visas & Labour (MOHRE/WPS)</h2>
            <p className="mt-2 text-sm text-muted-foreground">Sequence permits, contracts, medical/EID, residence visas and align payroll with Wage Protection System for fully legal operations.</p>
            <Accordion type="multiple" className="mt-3">
              <AccordionItem value="b1">
                <AccordionTrigger>Scope</AccordionTrigger>
                <AccordionContent>
                  Establishment card, work permits, offers/contracts, medical & biometrics, Emirates ID, residence stamping, WPS setup and monitoring.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="b2">
                <AccordionTrigger>Inclusions</AccordionTrigger>
                <AccordionContent>
                  MOHRE/GDRFA filings, contract templates, medical scheduling, EID pickup coordination, WPS bank onboarding and payroll file generation.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="b3">
                <AccordionTrigger>SLA</AccordionTrigger>
                <AccordionContent>
                  5–10 working days after approvals and medical appointments are completed.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </m.article>

        <m.article initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.3 }} className="group overflow-hidden rounded-xl border bg-card shadow-sm transition-shadow hover:shadow-md">
          <div className="aspect-[16/9] w-full overflow-hidden">
            <img src={imgTax} loading="lazy" decoding="async" sizes="(max-width: 768px) 100vw, 33vw" alt="Tax planning paperwork and calculator" className="h-full w-full object-cover" />
          </div>
          <div className="p-6">
            <h2 className="text-xl font-semibold">Tax — VAT & Corporate Tax</h2>
            <p className="mt-2 text-sm text-muted-foreground">VAT at 5% with monthly/quarterly filings; Corporate Tax 9% above AED 375,000; free‑zone QFZP 0% on qualifying income when tests are met.</p>
            <Accordion type="multiple" className="mt-3">
              <AccordionItem value="c1">
                <AccordionTrigger>Scope</AccordionTrigger>
                <AccordionContent>
                  VAT registration, returns & payments, corrective filings; CT registration, annual returns, QFZP eligibility reviews, de‑minimis monitoring.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="c2">
                <AccordionTrigger>Inclusions</AccordionTrigger>
                <AccordionContent>
                  ERP integration, automated return drafts, portal submissions, penalty mitigation memos, Pillar Two readiness checks for in‑scope MNEs.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="c3">
                <AccordionTrigger>SLA</AccordionTrigger>
                <AccordionContent>
                  VAT monthly/quarterly; CT annually—calendarised with alerts; corrective filings as required.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </m.article>

        <m.article initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.3 }} className="group overflow-hidden rounded-xl border bg-card shadow-sm transition-shadow hover:shadow-md">
          <div className="aspect-[16/9] w-full overflow-hidden">
            <img src={imgAccounting} loading="lazy" decoding="async" sizes="(max-width: 768px) 100vw, 33vw" alt="Accounting team reviewing financial statements" className="h-full w-full object-cover" />
          </div>
          <div className="p-6">
            <h2 className="text-xl font-semibold">Accounting & Audit</h2>
            <p className="mt-2 text-sm text-muted-foreground">Monthly bookkeeping, management reports, statutory accounts, and audit readiness—aligned with VAT/CT tagging for frictionless filings.</p>
            <Accordion type="multiple" className="mt-3">
              <AccordionItem value="d1">
                <AccordionTrigger>Scope</AccordionTrigger>
                <AccordionContent>
                  Monthly bookkeeping, management accounts, year‑end financial statements, audit liaison, policies and controls documentation.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="d2">
                <AccordionTrigger>Inclusions</AccordionTrigger>
                <AccordionContent>
                  Chart‑of‑accounts design, closing checklists, reconciliations, VAT/CT tagging, external auditor coordination.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="d3">
                <AccordionTrigger>SLA</AccordionTrigger>
                <AccordionContent>
                  Monthly cycles with 5–7 business day close targets; annual statutory timelines per authority and auditor availability.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </m.article>

        <m.article initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.3 }} className="group overflow-hidden rounded-xl border bg-card shadow-sm transition-shadow hover:shadow-md">
          <div className="aspect-[16/9] w-full overflow-hidden">
            <img src={imgIP} loading="lazy" decoding="async" sizes="(max-width: 768px) 100vw, 33vw" alt="Trademark and brand protection documents on a desk" className="h-full w-full object-cover" />
          </div>
          <div className="p-6">
            <h2 className="text-lg font-semibold">Brand & IP — Trademarks</h2>
            <p className="mt-2 text-sm text-muted-foreground">Search, filing, examination responses, publication, registration and renewals via MoE e‑services; watch service for confusingly similar marks.</p>
            <Accordion type="multiple" className="mt-3">
              <AccordionItem value="ip1">
                <AccordionTrigger>Scope</AccordionTrigger>
                <AccordionContent>
                  Trademark searches, filing, office action responses, publication management, opposition handling, Madrid designations across GCC, renewals, watch service, and recordal of assignments/licences.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="ip2">
                <AccordionTrigger>Inclusions</AccordionTrigger>
                <AccordionContent>
                  Pre‑filing identical/similar search, goods/services classification plan, official fee mapping, specimen prep, monitoring of gazette/publication, opposition strategy template, and Madrid holder/representative maintenance.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="ip3">
                <AccordionTrigger>SLA</AccordionTrigger>
                <AccordionContent>
                  Filing within 2–3 business days after instructions; examination timelines per office (typically 30–90 days); renewals filed 4–6 weeks ahead of expiry.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </m.article>

        <m.article initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.3 }} className="group overflow-hidden rounded-xl border bg-card shadow-sm transition-shadow hover:shadow-md">
          <div className="aspect-[16/9] w-full overflow-hidden">
            <img src={imgRealEstate} loading="lazy" decoding="async" sizes="(max-width: 768px) 100vw, 33vw" alt="Property keys with paperwork for registration" className="h-full w-full object-cover" />
          </div>
          <div className="p-6">
            <h2 className="text-xl font-semibold">Real‑Estate Ops — Ejari & Mortgages</h2>
            <p className="mt-2 text-sm text-muted-foreground">Ejari registrations/renewals via DLD, mortgage filings (0.25% of mortgage value + fixed fees). We prepare packs and keep receipts centrally.</p>
            <Accordion type="multiple" className="mt-3">
              <AccordionItem value="re1">
                <AccordionTrigger>Scope</AccordionTrigger>
                <AccordionContent>
                  Online Ejari registrations and renewals, tenancy document prep, DLD fee payments, mortgage registration packs and submissions, Mollak HOA submissions, receipt vaults.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="re2">
                <AccordionTrigger>Inclusions</AccordionTrigger>
                <AccordionContent>
                  Template leases, Ejari troubleshooting, bank discharge letter reconciliation, certificate/receipt archiving, renewal reminders.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="re3">
                <AccordionTrigger>SLA</AccordionTrigger>
                <AccordionContent>
                  Ejari 1–3 working days; mortgage packs ~1 week depending on bank and DLD slots.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </m.article>

        <m.article initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.3 }} className="group overflow-hidden rounded-xl border bg-card shadow-sm transition-shadow hover:shadow-md">
          <div className="aspect-[16/9] w-full overflow-hidden">
            <img src={imgESR} loading="lazy" decoding="async" sizes="(max-width: 768px) 100vw, 33vw" alt="Compliance checklist and laptop" className="h-full w-full object-cover" />
          </div>
          <div className="p-6">
            <h2 className="text-xl font-semibold">ESR & UBO Programme</h2>
            <p className="mt-2 text-sm text-muted-foreground">ESR Notifications/Reports and UBO register maintenance under Cabinet Decision 109/2023—with calendars to avoid penalties.</p>
            <Accordion type="multiple" className="mt-3">
              <AccordionItem value="esr1">
                <AccordionTrigger>Scope</AccordionTrigger>
                <AccordionContent>
                  ESR notifications and reports, UBO register creation and updates, AML risk assessments for DNFBPs, portal submissions, reminders and evidence logs.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="esr2">
                <AccordionTrigger>Inclusions</AccordionTrigger>
                <AccordionContent>
                  Board templates, policy samples, MoF portal flows, registrar update workflows, red‑flag sweep for first hires.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="esr3">
                <AccordionTrigger>SLA</AccordionTrigger>
                <AccordionContent>
                  Notifications within 1 week; reports within 4 weeks subject to financial statements availability.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </m.article>
      </div>

      <div className="mt-8 text-xs text-muted-foreground">All rules and regulations outlined are subject to change in accordance with updates or amendments issued by the government or authorities.</div>
    </section>
  );
}
