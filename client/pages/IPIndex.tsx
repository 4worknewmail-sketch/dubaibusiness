import { Link } from "react-router-dom";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { m } from "framer-motion";

export default function IPIndex() {
  return (
    <section className="container mx-auto px-4 py-16">
      <m.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.35 }} className="mb-6 overflow-hidden rounded-2xl border">
        <img src="https://images.pexels.com/photos/261949/pexels-photo-261949.jpeg" loading="lazy" decoding="async" alt="Brand protection and legal paperwork" className="h-56 w-full object-cover" />
      </m.div>
      <h1 className="text-3xl font-bold tracking-tight">Brand & IP</h1>
      <p className="mt-4 max-w-3xl text-muted-foreground">
        The Ministry of Economy (MoE) runs e-services for trademarks, patents, industrial designs and copyrights. UAE acceded to the Madrid Protocol (2021) enabling international designations via WIPO from a UAE base.
      </p>

      <div className="mx-auto mt-8 grid max-w-5xl gap-6 md:grid-cols-2">
        <div className="rounded-xl border bg-card p-6">
          <h2 className="text-xl font-semibold">Trademarks (UAE)</h2>
          <p className="mt-2 text-sm text-muted-foreground">File online at MoE; Nice Classification (45 classes) applies. Expect examination, publication, 30-day opposition, then issuance if uncontested.</p>
          <Accordion type="multiple" className="mt-3">
            <AccordionItem value="t1">
              <AccordionTrigger>Process & timelines</AccordionTrigger>
              <AccordionContent className="text-sm text-muted-foreground">
                Search (optional) → File → Examination (absolute/relative grounds) → Publication → Opposition window (30 days) → Registration → Certificate. Renew every 10 years; late renewal grace with surcharge.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="t2">
              <AccordionTrigger>What to prepare</AccordionTrigger>
              <AccordionContent className="text-sm text-muted-foreground">
                Applicant details, representation (logo/word), list of goods/services per class, PoA where required, and priority documents if claiming priority.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="t3">
              <AccordionTrigger>Madrid (international)</AccordionTrigger>
              <AccordionContent className="text-sm text-muted-foreground">
                Use a UAE basic mark to file an international application via WIPO and designate target countries. Monitor refusals from designated offices on deadlines.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
          <div className="mt-4">
            <Link to="/ip/uae/trademarks" className="rounded-md border px-3 py-2 text-sm hover:bg-accent">UAE Trademarks →</Link>
          </div>
        </div>

        <div className="rounded-xl border bg-card p-6">
          <h2 className="text-xl font-semibold">Patents & Designs</h2>
          <p className="mt-2 text-sm text-muted-foreground">MoE accepts patent/design filings; novelty and inventive step standards apply. Consider GCC/foreign filings for broader coverage.</p>
          <Accordion type="multiple" className="mt-3">
            <AccordionItem value="p1">
              <AccordionTrigger>Prior art & strategy</AccordionTrigger>
              <AccordionContent className="text-sm text-muted-foreground">
                Conduct searches, draft with claims strategy, and manage priority within 12 months under the Paris Convention. Keep lab notebooks and assignment chains tidy.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="p2">
              <AccordionTrigger>Enforcement</AccordionTrigger>
              <AccordionContent className="text-sm text-muted-foreground">
                Civil actions, border measures, and administrative complaints are available. Preserve evidence early and consider customs recordal where applicable.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </section>
  );
}
