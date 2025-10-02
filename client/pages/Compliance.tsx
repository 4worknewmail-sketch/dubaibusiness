export default function Compliance() {
  return (
    <section className="container mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold tracking-tight">Compliance & Governance (UAE)</h1>
      <div className="mt-4 grid gap-4 md:grid-cols-2">
        <div className="rounded-lg border p-6">
          <h2 className="text-lg font-semibold">MOHRE — Work permits & hiring</h2>
          <p className="mt-2 text-sm text-muted-foreground">Working without a valid work permit is illegal; employers may not employ a worker unless a permit is issued. Timeline: labour file → permit → medical & EID → residence visa → WPS payroll. (UAE Government Portal)</p>
        </div>
        <div className="rounded-lg border p-6">
          <h2 className="text-lg font-semibold">VAT — Federal Tax Authority</h2>
          <p className="mt-2 text-sm text-muted-foreground">5% VAT; mandatory registration at AED 375,000; voluntary at AED 187,500. Returns/payments due within 28 days after period end. (FTA UAE)</p>
        </div>
        <div className="rounded-lg border p-6">
          <h2 className="text-lg font-semibold">Corporate Tax — MoF/FTA</h2>
          <p className="mt-2 text-sm text-muted-foreground">9% above AED 375,000; free-zone Qualifying Free-Zone Persons may enjoy 0% on Qualifying Income if conditions are met. (UAE Ministry of Finance)</p>
        </div>
        <div className="rounded-lg border p-6">
          <h2 className="text-lg font-semibold">ESR, UBO/AML, DLD</h2>
          <p className="mt-2 text-sm text-muted-foreground">ESR notifications/reports via MoF; UBO register per Cabinet Decision 109/2023; Ejari and mortgage fees via DLD e-services. (UAE Ministry of Finance, Dubai Land Department)</p>
        </div>
      </div>
      <div className="mt-6 text-xs text-muted-foreground">All rules and regulations outlined are subject to change in accordance with updates or amendments issued by the government or authorities.</div>
    </section>
  );
}
