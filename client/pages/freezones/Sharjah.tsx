export default function FreeZonesSharjah() {
  return (
    <section className="container mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold tracking-tight">Sharjah — Free Zones</h1>
      <div className="mt-4 overflow-hidden rounded-2xl border">
        <img src="https://images.pexels.com/photos/325185/pexels-photo-325185.jpeg" loading="lazy" alt="Sharjah industrial and logistics area" className="h-56 w-full object-cover" />
      </div>

      <div className="mt-6 grid gap-4 md:grid-cols-2">
        <div className="rounded-lg border p-6">
          <h2 className="text-lg font-semibold">SAIF Zone</h2>
          <p className="mt-2 text-sm text-muted-foreground">Next to Sharjah International Airport; multi‑sector trading/industrial, strong cargo adjacency.</p>
          <div className="mt-2 text-sm"><a className="underline" href="https://www.saif-zone.com/" target="_blank" rel="noreferrer">saif-zone.com</a></div>
        </div>
        <div className="rounded-lg border p-6">
          <h2 className="text-lg font-semibold">Hamriyah Free Zone (HFZA)</h2>
          <p className="mt-2 text-sm text-muted-foreground">Petrochemicals, steel, maritime, food; deep‑water port access and large plots.</p>
          <div className="mt-2 text-sm"><a className="underline" href="https://www.hfza.ae/" target="_blank" rel="noreferrer">hfza.ae</a></div>
        </div>
        <div className="rounded-lg border p-6">
          <h2 className="text-lg font-semibold">SHAMS</h2>
          <p className="mt-2 text-sm text-muted-foreground">Media/creative licences with flexible office policies; content, production, and digital services.</p>
          <div className="mt-2 text-sm"><a className="underline" href="https://www.shams.ae/" target="_blank" rel="noreferrer">shams.ae</a></div>
        </div>
        <div className="rounded-lg border p-6">
          <h2 className="text-lg font-semibold">SPC Free Zone</h2>
          <p className="mt-2 text-sm text-muted-foreground">Publishing, digital content, creatives & general services; streamlined packages.</p>
          <div className="mt-2 text-sm"><a className="underline" href="https://spcfz.com/" target="_blank" rel="noreferrer">spcfz.com</a></div>
        </div>
        <div className="rounded-lg border p-6">
          <h2 className="text-lg font-semibold">SRTIP Free Zone</h2>
          <p className="mt-2 text-sm text-muted-foreground">Research, technology & innovation park with R&D, labs, and prototyping facilities.</p>
          <div className="mt-2 text-sm"><a className="underline" href="https://srtip.ae/" target="_blank" rel="noreferrer">srtip.ae</a></div>
        </div>
      </div>

      <div className="mx-auto mt-10 grid max-w-5xl gap-8 md:grid-cols-2">
        <div className="rounded-xl border bg-card p-6">
          <h3 className="text-lg font-semibold">How to set up</h3>
          <ol className="mt-2 list-decimal pl-5 text-sm text-muted-foreground">
            <li>Pick activities and legal form (FZ-LLC or branch); confirm any external approvals.</li>
            <li>Choose facility (flexi-desk, office, warehouse/plot where offered) and visa band.</li>
            <li>Submit application pack, pay fees, and pass KYC/compliance checks.</li>
            <li>Receive licence, establishment card; proceed to MOHRE and visas as needed.</li>
            <li>Assess VAT/CT obligations and register where applicable.</li>
          </ol>
        </div>
        <div className="rounded-xl border bg-card p-6">
          <h3 className="text-lg font-semibold">Documents checklist</h3>
          <ul className="mt-2 list-disc pl-5 text-sm text-muted-foreground">
            <li>Passports and photos of shareholders/directors; UAE entry stamp/visa page if applicable.</li>
            <li>Proof of address and CV for individuals; corporate documents for company shareholders.</li>
            <li>Trade name options, activity list, and share capital plan as per zone rules.</li>
            <li>Board resolution/PoA where required; UBO declarations.</li>
          </ul>
        </div>
      </div>

      <div className="mx-auto mt-8 max-w-5xl rounded-xl border bg-card p-6">
        <h3 className="text-lg font-semibold">Contacts</h3>
        <ul className="mt-2 list-disc pl-5 text-sm text-muted-foreground">
          <li>SAIF Zone: saif-zone.com</li>
          <li>Hamriyah Free Zone: hfza.ae</li>
          <li>SHAMS: shams.ae</li>
          <li>SPC Free Zone: spcfz.com</li>
          <li>SRTIP: srtip.ae</li>
        </ul>
      </div>
    </section>
  );
}
