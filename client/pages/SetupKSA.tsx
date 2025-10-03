export default function SetupKSA() {
  return (
    <section className="container mx-auto px-4 py-16">
      <div className="mx-auto max-w-3xl text-center">
        <div className="mx-auto mb-6 max-w-5xl overflow-hidden rounded-2xl border">
          <img
            src="https://cdn.builder.io/api/v1/image/assets%2Fa5cb23e37d454cde83d51afd99007581%2F740643425d724b249680ed289ecc0da5?format=webp&width=800"
            loading="lazy"
            decoding="async"
            alt="Riyadh business district skyline"
            className="h-64 w-full object-cover"
          />
        </div>
        <h1 className="text-3xl font-bold tracking-tight">KSA — Business Setup</h1>
        <p className="mt-4 text-justify text-muted-foreground">
          Foreign investment setup runs through MISA. Register, choose activity, upload legalised corporate documents, obtain your investor licence; commercial registration and municipality steps follow. VAT at 15% is administered by ZATCA; trademarks run through SAIP e-services. (MISA, ZATCA, SAIP)
        </p>
      </div>
      <div className="mx-auto mt-6 max-w-3xl text-center text-xs text-muted-foreground">
        All rules and regulations outlined are subject to change in accordance with updates or amendments issued by the government or authorities.
      </div>
    </section>
  );
}
