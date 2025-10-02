export default function FreeZonesRAK() {
  return (
    <section className="container mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold tracking-tight">Ras Al Khaimah — Free Zones</h1>
      <div className="mt-4 overflow-hidden rounded-2xl border">
        <img src="https://images.pexels.com/photos/3586966/pexels-photo-3586966.jpeg" loading="lazy" alt="Ras Al Khaimah mountains and port" className="h-56 w-full object-cover" />
      </div>

      <div className="mt-6 grid gap-4 md:grid-cols-2">
        <div className="rounded-lg border p-6">
          <h2 className="text-lg font-semibold">RAKEZ</h2>
          <p className="mt-2 text-sm text-muted-foreground">Multi‑zone authority: Al Ghail (heavy), Al Hamra Industrial, Al Hulaila, Academic, Al Nakheel Business, Al Hamra Business.</p>
          <div className="mt-2 text-sm">+971 7 204 1111 · <a className="underline" href="https://www.rakez.com/" target="_blank" rel="noreferrer">rakez.com</a></div>
        </div>
        <div className="rounded-lg border p-6">
          <h2 className="text-lg font-semibold">RAK Maritime City Free Zone</h2>
          <p className="mt-2 text-sm text-muted-foreground">Shipyards, marine services & logistics; quayside access and specialist plots.</p>
          <div className="mt-2 text-sm"><a className="underline" href="https://rakmc.ae/" target="_blank" rel="noreferrer">rakmc.ae</a></div>
        </div>
      </div>

      <div className="mx-auto mt-10 grid max-w-5xl gap-8 md:grid-cols-2">
        <div className="rounded-xl border bg-card p-6">
          <h3 className="text-lg font-semibold">How to set up</h3>
          <ol className="mt-2 list-decimal pl-5 text-sm text-muted-foreground">
            <li>Define activities and facility (desk, office, warehouse, land) within the relevant RAKEZ zone.</li>
            <li>Prepare KYC pack and external approvals (if any) for industrial activities.</li>
            <li>Submit, pay fees, clear compliance; collect licence and corporate documents.</li>
            <li>Immigration (establishment card, MOHRE) and visas; VAT/CT as applicable.</li>
          </ol>
        </div>
        <div className="rounded-xl border bg-card p-6">
          <h3 className="text-lg font-semibold">Documents checklist</h3>
          <ul className="mt-2 list-disc pl-5 text-sm text-muted-foreground">
            <li>Personal KYC (IDs, photos, address); corporate documents for company shareholders.</li>
            <li>Business plan and layout for industrial/warehouse requests where required.</li>
            <li>UBO declarations and board resolutions/PoA as needed.</li>
          </ul>
        </div>
      </div>

      <div className="mx-auto mt-8 max-w-5xl rounded-xl border bg-card p-6">
        <h3 className="text-lg font-semibold">Contacts</h3>
        <ul className="mt-2 list-disc pl-5 text-sm text-muted-foreground">
          <li>RAKEZ: rakez.com</li>
          <li>RAK Maritime City: rakmc.ae</li>
        </ul>
      </div>
    </section>
  );
}
