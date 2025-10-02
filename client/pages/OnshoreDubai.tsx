import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export default function OnshoreDubai() {
  return (
    <section className="container mx-auto px-4 py-16">
      <div className="mx-auto max-w-3xl">
        <h1 className="text-3xl font-bold tracking-tight">Dubai Onshore (DED)</h1>
        <p className="mt-4 text-muted-foreground">
          Use Dubai onshore when your customers are in the local market, you need retail premises or frequent tenders, or you want all UAE geographies open for physical trading. The Invest in Dubai portal consolidates activities, legal type, name checks, initial approvals, and fee estimates into a single guided flow.
        </p>
      </div>

      <div className="mx-auto mt-8 max-w-3xl rounded-xl border bg-card p-6">
        <h2 className="text-xl font-semibold">Step-by-step</h2>
        <Accordion type="multiple" className="mt-3">
          <AccordionItem value="s1">
            <AccordionTrigger>1) Activities & legal form</AccordionTrigger>
            <AccordionContent>
              Choose activities and entity type (LLC, sole establishment, branch). The portal outputs required documents and fees. If multiple activities are planned, align them early to avoid amendment cycles.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="s2">
            <AccordionTrigger>2) Name reservation & initial approval</AccordionTrigger>
            <AccordionContent>
              Reserve your name, generate the initial approval letter, and download the tailored document list from the portal.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="s3">
            <AccordionTrigger>3) Premises & Ejari</AccordionTrigger>
            <AccordionContent>
              Lease the office/desk that matches your activity. Register your tenancy (Ejari). Online Ejari costs AED 100 plus AED 10 knowledge and AED 10 innovation fees; trustee centres add service partner fees—budget around AED 215. Keep the e-certificate PDF for bank and licensing.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="s4">
            <AccordionTrigger>4) Licence issuance, immigration & MOHRE</AccordionTrigger>
            <AccordionContent>
              Pay, receive your trade licence, create an establishment card, then register with MOHRE to obtain work permits—you cannot legally employ or work without them.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="s5">
            <AccordionTrigger>5) Tax registrations</AccordionTrigger>
            <AccordionContent>
              Assess VAT (mandatory at AED 375k, voluntary at AED 187.5k). File/pay within 28 days after each period closes. Corporate Tax applies to onshore entities at 9% over AED 375k.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>

      <div className="mx-auto mt-8 max-w-3xl rounded-xl border bg-card p-6 text-sm">
        <h2 className="text-base font-semibold">Contacts</h2>
        <ul className="mt-2 space-y-1">
          <li>Invest in Dubai — invest.dubai.ae</li>
          <li>Dubai DED — det.gov.ae (Dubai Economy & Tourism)</li>
          <li>MOHRE — mohre.gov.ae</li>
          <li>Federal Tax Authority — tax.gov.ae</li>
          <li>Dubai Land Department (Ejari) — dld.gov.ae</li>
        </ul>
      </div>

      <div className="mt-6 text-xs text-muted-foreground">All rules and regulations outlined are subject to change in accordance with updates or amendments issued by the government or authorities.</div>
    </section>
  );
}
