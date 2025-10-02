export default function FreeZonesAjman() {
  return (
    <section className="container mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold tracking-tight">Ajman — Free Zones</h1>
      <div className="mt-4 overflow-hidden rounded-2xl border">
        <img src="https://images.pexels.com/photos/256559/pexels-photo-256559.jpeg" loading="lazy" alt="Ajman coastline and city" className="h-56 w-full object-cover" />
      </div>

      <div className="mt-6 grid gap-4 md:grid-cols-2">
        <div className="rounded-lg border p-6">
          <h2 className="text-lg font-semibold">Ajman Free Zone (AFZ)</h2>
          <p className="mt-2 text-sm text-muted-foreground">SME‑friendly trading, e‑commerce and light industry with packages for startups and flexible facilities.</p>
          <div className="mt-2 text-sm">Hotline: 800‑AFZ · <a className="underline" href="https://www.afz.ae/" target="_blank" rel="noreferrer">afz.ae</a></div>
        </div>
        <div className="rounded-lg border p-6">
          <h2 className="text-lg font-semibold">Ajman Media City Free Zone</h2>
          <p className="mt-2 text-sm text-muted-foreground">Media & creative licences with remote‑friendly options.</p>
          <div className="mt-2 text-sm"><a className="underline" href="https://amcfz.ae/" target="_blank" rel="noreferrer">amcfz.ae</a></div>
        </div>
      </div>

      <div className="mx-auto mt-10 grid max-w-5xl gap-8 md:grid-cols-2">
        <div className="rounded-xl border bg-card p-6">
          <h3 className="text-lg font-semibold">How to set up</h3>
          <ol className="mt-2 list-decimal pl-5 text-sm text-muted-foreground">
            <li>Select activities/legal form; confirm need for any external approvals.</li>
            <li>Pick facility and visa band; align with headcount plan.</li>
            <li>Submit KYC pack and pay fees; monitor portal for queries.</li>
            <li>Collect licence, establishment card; proceed to MOHRE and visas.</li>
            <li>Consider VAT/CT registrations and bank account opening.</li>
          </ol>
        </div>
        <div className="rounded-xl border bg-card p-6">
          <h3 className="text-lg font-semibold">Documents checklist</h3>
          <ul className="mt-2 list-disc pl-5 text-sm text-muted-foreground">
            <li>Shareholder/director passports, photos, proof of address.</li>
            <li>Corporate docs if shareholder is a company; board resolution/PoA where applicable.</li>
            <li>UBO declarations and activity list; name options.</li>
          </ul>
        </div>
      </div>

      <div className="mx-auto mt-8 max-w-5xl rounded-xl border bg-card p-6">
        <h3 className="text-lg font-semibold">Contacts</h3>
        <ul className="mt-2 list-disc pl-5 text-sm text-muted-foreground">
          <li>Ajman Free Zone: afz.ae</li>
          <li>Ajman Media City: amcfz.ae</li>
        </ul>
      </div>
    </section>
  );
}
