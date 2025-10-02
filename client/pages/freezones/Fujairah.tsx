export default function FreeZonesFujairah() {
  return (
    <section className="container mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold tracking-tight">Fujairah — Free Zones</h1>
      <div className="mt-4 overflow-hidden rounded-2xl border">
        <img src="https://images.pexels.com/photos/1450082/pexels-photo-1450082.jpeg" loading="lazy" alt="Fujairah coastline and port" className="h-56 w-full object-cover" />
      </div>

      <div className="mt-6 grid gap-4 md:grid-cols-2">
        <div className="rounded-lg border p-6">
          <h2 className="text-lg font-semibold">Fujairah Free Zone (FFZ)</h2>
          <p className="mt-2 text-sm text-muted-foreground">Trading and logistics near port/airport with cost‑efficient packages and warehousing.</p>
          <div className="mt-2 text-sm"><a className="underline" href="https://www.fujairahfreezone.com/" target="_blank" rel="noreferrer">fujairahfreezone.com</a></div>
        </div>
        <div className="rounded-lg border p-6">
          <h2 className="text-lg font-semibold">Fujairah Creative City</h2>
          <p className="mt-2 text-sm text-muted-foreground">Media, content production, marketing & consulting; remote‑friendly options.</p>
          <div className="mt-2 text-sm"><a className="underline" href="https://www.creativecity.ae/" target="_blank" rel="noreferrer">creativecity.ae</a></div>
        </div>
      </div>

      <div className="mx-auto mt-10 grid max-w-5xl gap-8 md:grid-cols-2">
        <div className="rounded-xl border bg-card p-6">
          <h3 className="text-lg font-semibold">How to set up</h3>
          <ol className="mt-2 list-decimal pl-5 text-sm text-muted-foreground">
            <li>Choose activities and licence type; confirm facilities (desk/office/warehouse).</li>
            <li>Prepare KYC and application pack; submit and pay fees.</li>
            <li>Collect licence and proceed to immigration and banking.</li>
            <li>Register for VAT/CT based on thresholds and activity.</li>
          </ol>
        </div>
        <div className="rounded-xl border bg-card p-6">
          <h3 className="text-lg font-semibold">Documents checklist</h3>
          <ul className="mt-2 list-disc pl-5 text-sm text-muted-foreground">
            <li>Passports, photos, address proof; corporate docs where applicable.</li>
            <li>Activity list and name options; UBO forms and resolutions.</li>
          </ul>
        </div>
      </div>

      <div className="mx-auto mt-8 max-w-5xl rounded-xl border bg-card p-6">
        <h3 className="text-lg font-semibold">Contacts</h3>
        <ul className="mt-2 list-disc pl-5 text-sm text-muted-foreground">
          <li>Fujairah Free Zone: fujairahfreezone.com</li>
          <li>Fujairah Creative City: creativecity.ae</li>
        </ul>
      </div>
    </section>
  );
}
