import { Link } from "react-router-dom";

export default function SetupIndex() {
  return (
    <section className="container mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold tracking-tight">Business Setup</h1>
      <p className="mt-4 text-muted-foreground max-w-3xl">
        Choose your jurisdiction path. We cover UAE (onshore via emirate portals like Invest in Dubai and leading free zones), plus light but usable KSA and Qatar paths with official links.
      </p>
      <div className="mt-8 grid gap-4 md:grid-cols-3">
        <Link to="/setup/uae" className="rounded-lg border p-5 hover:bg-accent">
          <div className="text-lg font-semibold">UAE</div>
          <p className="mt-1 text-sm text-muted-foreground">Onshore & Free Zones</p>
        </Link>
        <Link to="/setup/ksa" className="rounded-lg border p-5 hover:bg-accent">
          <div className="text-lg font-semibold">KSA</div>
          <p className="mt-1 text-sm text-muted-foreground">MISA investor flow</p>
        </Link>
        <Link to="/setup/qatar" className="rounded-lg border p-5 hover:bg-accent">
          <div className="text-lg font-semibold">Qatar</div>
          <p className="mt-1 text-sm text-muted-foreground">MoCI & QFZ paths</p>
        </Link>
      </div>
    </section>
  );
}
