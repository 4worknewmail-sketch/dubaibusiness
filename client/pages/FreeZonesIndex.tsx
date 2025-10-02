import { Link } from "react-router-dom";

export default function FreeZonesIndex() {
  return (
    <section className="container mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold tracking-tight">UAE Free Zones — Index</h1>
      <p className="mt-3 max-w-3xl text-muted-foreground">Browse by emirate. Shortlist by sector, facilities, visa band, and customs adjacency. Always use the authority calculators and package pages for live pricing.</p>
      <div className="mt-8 grid gap-4 md:grid-cols-3">
        <Link className="rounded-lg border p-5 hover:bg-accent" to="/setup/uae/free-zones/abu-dhabi">Abu Dhabi</Link>
        <Link className="rounded-lg border p-5 hover:bg-accent" to="/setup/uae/free-zones/dubai">Dubai</Link>
        <Link className="rounded-lg border p-5 hover:bg-accent" to="/setup/uae/free-zones/sharjah">Sharjah</Link>
        <Link className="rounded-lg border p-5 hover:bg-accent" to="/setup/uae/free-zones/ajman">Ajman</Link>
        <Link className="rounded-lg border p-5 hover:bg-accent" to="/setup/uae/free-zones/ras-al-khaimah">Ras Al Khaimah</Link>
        <Link className="rounded-lg border p-5 hover:bg-accent" to="/setup/uae/free-zones/fujairah">Fujairah</Link>
        <Link className="rounded-lg border p-5 hover:bg-accent" to="/setup/uae/free-zones/uaq">Umm Al Quwain</Link>
      </div>
    </section>
  );
}
