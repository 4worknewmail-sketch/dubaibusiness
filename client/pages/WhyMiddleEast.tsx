import { useEffect } from "react";

export default function WhyMiddleEast() {
  useEffect(() => {
    document.title = "Why Middle East — Portscale";
  }, []);

  return (
    <section className="container mx-auto px-4 py-16">
      <div className="mx-auto max-w-3xl">
        <h1 className="text-3xl font-bold tracking-tight">Why the Middle East</h1>
        <p className="mt-4 text-muted-foreground">
          The UAE anchors the region’s legal predictability with a federal corporate tax that exempts qualifying free-zone income (for QFZPs meeting substance and other conditions) while applying 9% above AED 375,000 to everyone else, plus a 5% VAT regime and two financial centres—DIFC (DFSA) and ADGM (FSRA). KSA brings unmatched scale and a single investor gateway (MISA) with 15% VAT under ZATCA. Qatar complements with QFZ for airport/port-linked setups while MoCI handles onshore commerce.
        </p>
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          <div className="rounded-lg border p-4">
            <h2 className="text-base font-semibold">UAE</h2>
            <p className="mt-1 text-sm text-muted-foreground">CT 0%–9% model, VAT 5%, deep free-zone ecosystems (DMCC, JAFZA, RAKEZ, KEZAD). Financial services under DFSA/FSRA rulebooks.</p>
          </div>
          <div className="rounded-lg border p-4">
            <h2 className="text-base font-semibold">KSA</h2>
            <p className="mt-1 text-sm text-muted-foreground">One-stop investor licence via MISA; VAT 15% under ZATCA; fast portal-based filings and growing IP regime via SAIP.</p>
          </div>
          <div className="rounded-lg border p-4">
            <h2 className="text-base font-semibold">Qatar</h2>
            <p className="mt-1 text-sm text-muted-foreground">QFZ platform next to world-class airport/port links; onshore via MoCI. Steady policy and modern infrastructure.</p>
          </div>
        </div>
        <section className="mt-10">
          <h2 className="text-xl font-semibold">Regulatory snapshot</h2>
          <div className="mt-4 grid gap-4 md:grid-cols-3">
            <div className="rounded-xl border bg-white/80 p-5 shadow-sm backdrop-blur">
              <div className="flex items-center gap-3">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-md bg-secondary">
                  {/* Building icon moved from homepage */}
                  <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary"><path d="M3 22h18"/><path d="M6 22V2h12v20"/><path d="M9 6h6"/><path d="M9 10h6"/><path d="M9 14h6"/><path d="M9 18h6"/></svg>
                </span>
                <h3 className="text-base font-semibold">Corporate Tax</h3>
              </div>
              <p className="mt-3 text-sm text-muted-foreground">0% on qualifying free-zone income for QFZPs (if conditions are met); 9% standard above AED 375,000. (FTA UAE)</p>
            </div>
            <div className="rounded-xl border bg-white/80 p-5 shadow-sm backdrop-blur">
              <div className="flex items-center gap-3">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-md bg-secondary">
                  {/* FileText icon */}
                  <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><path d="M14 2v6h6"/><path d="M16 13H8"/><path d="M16 17H8"/><path d="M10 9H8"/></svg>
                </span>
                <h3 className="text-base font-semibold">VAT</h3>
              </div>
              <p className="mt-3 text-sm text-muted-foreground">5%; register mandatorily at AED 375k, voluntarily at AED 187.5k; file/pay within 28 days after period end. (FTA UAE)</p>
            </div>
            <div className="rounded-xl border bg-white/80 p-5 shadow-sm backdrop-blur">
              <div className="flex items-center gap-3">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-md bg-secondary">
                  {/* CheckCircle2 icon */}
                  <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><path d="m9 11 3 3L22 4"/></svg>
                </span>
                <h3 className="text-base font-semibold">Real estate admin</h3>
              </div>
              <p className="mt-3 text-sm text-muted-foreground">Dubai mortgage registration is 0.25% of mortgage value (+ AED 250/title deed; knowledge/innovation apply). (DLD)</p>
            </div>
          </div>
        </section>
      </div>
    </section>
  );
}
