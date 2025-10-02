export default function FreeZonesUAQ() {
  return (
    <section className="container mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold tracking-tight">Umm Al Quwain — Free Zones</h1>
      <div className="mt-4 overflow-hidden rounded-2xl border">
        <img src="https://images.pexels.com/photos/1482193/pexels-photo-1482193.jpeg" loading="lazy" alt="Umm Al Quwain waterfront" className="h-56 w-full object-cover" />
      </div>

      <div className="mt-6 grid gap-4 md:grid-cols-2">
        <div className="rounded-lg border p-6">
          <h2 className="text-lg font-semibold">UAQ Free Trade Zone</h2>
          <p className="mt-2 text-sm text-muted-foreground">SME‑friendly general trading/services/industrial licences; cost‑effective packages.</p>
          <div className="mt-2 text-sm">+971 6 764 7272 · <a className="underline" href="https://uaqftz.com/" target="_blank" rel="noreferrer">uaqftz.com</a></div>
        </div>
      </div>

      <div className="mx-auto mt-10 grid max-w-5xl gap-8 md:grid-cols-2">
        <div className="rounded-xl border bg-card p-6">
          <h3 className="text-lg font-semibold">How to set up</h3>
          <ol className="mt-2 list-decimal pl-5 text-sm text-muted-foreground">
            <li>Confirm activities and choose licence type and facility.</li>
            <li>Submit application with KYC; clear compliance checks.</li>
            <li>Receive licence and corporate documents; proceed to immigration.</li>
            <li>Evaluate VAT/CT registration thresholds and timing.</li>
          </ol>
        </div>
        <div className="rounded-xl border bg-card p-6">
          <h3 className="text-lg font-semibold">Documents checklist</h3>
          <ul className="mt-2 list-disc pl-5 text-sm text-muted-foreground">
            <li>IDs, photos, address proof; corporate shareholder documents if any.</li>
            <li>UBO forms, PoA/board resolution where required.</li>
          </ul>
        </div>
      </div>

      <div className="mx-auto mt-8 max-w-5xl rounded-xl border bg-card p-6">
        <h3 className="text-lg font-semibold">Contacts</h3>
        <ul className="mt-2 list-disc pl-5 text-sm text-muted-foreground">
          <li>UAQ FTZ: uaqftz.com</li>
          <li>Phone: +971 6 764 7272</li>
        </ul>
      </div>
    </section>
  );
}
