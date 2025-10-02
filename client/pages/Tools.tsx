import { Link } from "react-router-dom";

export default function Tools() {
  return (
    <section className="container mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold tracking-tight">Tools</h1>
      <p className="mt-4 max-w-3xl text-muted-foreground">Prefer a shortcut? Answer a few questions about your goal, country, sector, visas, and budget; we’ll output three best-fit jurisdictions or onshore/free-zone paths.</p>
      <div className="mt-6">
        <Link to="/tools/setup-assistant" className="rounded-lg border p-5 hover:bg-accent">Open Setup Assistant →</Link>
      </div>
    </section>
  );
}
