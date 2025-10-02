import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { m } from "framer-motion";

export default function TaxLegal() {
  return (
    <section className="container mx-auto px-4 py-16">
      <m.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.35 }} className="mb-6 overflow-hidden rounded-2xl border">
        <img src="https://images.pexels.com/photos/669615/pexels-photo-669615.jpeg" loading="lazy" decoding="async" alt="Corporate tax and VAT planning documents" className="h-56 w-full object-cover" />
      </m.div>
      <h1 className="text-3xl font-bold tracking-tight">Tax & Legal Hub (UAE)</h1>
      <p className="mt-4 max-w-3xl text-muted-foreground">
        Corporate Tax (CT) at 9% above AED 375,000 and 0% on qualifying free-zone income for QFZPs that meet all conditions, VAT at 5% with a 28-day filing/payment window, and cross-cutting regimes like ESR and UBO set the baseline. Below is a practical breakdown with inclusions, timelines and pitfalls.
      </p>

      <div className="mx-auto mt-8 grid max-w-5xl gap-6 md:grid-cols-2">
        <div className="rounded-xl border bg-card p-6">
          <h2 className="text-xl font-semibold">Corporate Tax (CT)</h2>
          <p className="mt-2 text-sm text-muted-foreground">9% above AED 375,000; 0% for QFZP qualifying income subject to substance, de minimis, and excluded activities tests. Financial periods starting on/after 1 Jun 2023.</p>
          <Accordion type="multiple" className="mt-3">
            <AccordionItem value="ct1">
              <AccordionTrigger>Who must register</AccordionTrigger>
              <AccordionContent className="text-sm text-muted-foreground">
                Juridical persons resident in the UAE, non-residents with a PE, and free-zone entities. QFZPs still register and file even if taxed at 0% on qualifying income.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="ct2">
              <AccordionTrigger>Filing & payment</AccordionTrigger>
              <AccordionContent className="text-sm text-muted-foreground">
                Return due 9 months after the end of the relevant tax period; payment due at the same time. Consider advance cash-flow for quarterly instalments if applicable.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="ct3">
              <AccordionTrigger>Transfer Pricing</AccordionTrigger>
              <AccordionContent className="text-sm text-muted-foreground">
                OECD-based rules apply. Maintain Local File/Master File when thresholds are triggered; contemporaneous documentation advisable. Country-by-Country Report for large MNE groups.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="ct4">
              <AccordionTrigger>QFZP tests</AccordionTrigger>
              <AccordionContent className="text-sm text-muted-foreground">
                Substance in a free zone, qualifying activities, non-qualifying revenue within de minimis, and no elective disqualification. Beware excluded activities and nexus rules for domestic branches.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>

        <div className="rounded-xl border bg-card p-6">
          <h2 className="text-xl font-semibold">VAT (5%)</h2>
          <p className="mt-2 text-sm text-muted-foreground">Register mandatorily at AED 375,000; voluntary at AED 187,500. Returns commonly quarterly; due within 28 days after period end.</p>
          <Accordion type="multiple" className="mt-3">
            <AccordionItem value="v1">
              <AccordionTrigger>Registration & groups</AccordionTrigger>
              <AccordionContent className="text-sm text-muted-foreground">
                Mandatory/voluntary thresholds apply; VAT groups possible for associated persons subject to conditions, simplifying intragroup supplies and filings.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="v2">
              <AccordionTrigger>Input tax & invoices</AccordionTrigger>
              <AccordionContent className="text-sm text-muted-foreground">
                Valid tax invoices, correct time of supply, and proper apportionment for partially exempt activities are required. Keep records for 5 years (longer for real estate).
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="v3">
              <AccordionTrigger>Common pitfalls</AccordionTrigger>
              <AccordionContent className="text-sm text-muted-foreground">
                Late registration, missing tax invoices, incorrect zero-rating (export tests), and ignoring reverse charge on imported services are frequent triggers for assessments.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>

        <div className="rounded-xl border bg-card p-6">
          <h2 className="text-xl font-semibold">Economic Substance (ESR)</h2>
          <p className="mt-2 text-sm text-muted-foreground">Annual notifications and, where relevant, reports for relevant activities (e.g., HQ, distribution & service centre, holding company). Maintain board, people, premises, and expenditure in the UAE.</p>
        </div>

        <div className="rounded-xl border bg-card p-6">
          <h2 className="text-xl font-semibold">Ultimate Beneficial Owner (UBO)</h2>
          <p className="mt-2 text-sm text-muted-foreground">Maintain UBO registers and file with licensing authorities. Update promptly on changes; penalties apply for non-compliance.</p>
        </div>

        <div className="rounded-xl border bg-card p-6 md:col-span-2">
          <h2 className="text-xl font-semibold">Company law & immigration touchpoints</h2>
          <ul className="mt-2 list-disc pl-5 text-sm text-muted-foreground">
            <li>Licensing: onshore DEDs vs free zones; check activity permits and controlled functions where applicable.</li>
            <li>Employment: Establishment card, MOHRE registration, work permits/residence visas; payroll and WPS where required.</li>
            <li>Real estate: Ejari/tenancy, DLD formalities, and sector approvals for certain regulated premises.</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
