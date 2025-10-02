import { useEffect } from "react";
import { Link } from "react-router-dom";
import { m } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  Building2,
  Landmark,
  Users,
  ClipboardCheck,
  FileText,
  BadgeCheck,
  Calculator,
} from "lucide-react";

const cards = {
  formation: [
    {
      title: "Onshore — Dubai DED",
      desc: "Best for local trading and tenders. Plan activities, legal form and fees; then complete licence issuance, immigration and VAT/CT decisions.",
      icon: Landmark,
      cta: { to: "/setup/uae/onshore/dubai", label: "Dubai Onshore guide" },
    },
    {
      title: "Free Zones — Index by Emirate",
      desc: "Pick by sector ecosystems, visa bands and port/airport adjacency. Compare packages and facility types across emirates.",
      icon: Building2,
      cta: { to: "/setup/uae/free-zones", label: "Browse free zones" },
    },
  ],
  licensing: [
    {
      title: "Activities & External Approvals",
      desc: "Select precise activities; check if any regulator approvals apply (e.g., media, health, education). This determines licence scope and timelines.",
      icon: ClipboardCheck,
    },
    {
      title: "Premises & Ejari / Facility",
      desc: "Choose desk, office, warehouse or plot based on visa band and operations. Register tenancy (Ejari) or zone facility contracts as applicable.",
      icon: Building2,
    },
  ],
  immigration: [
    {
      title: "Establishment Card & MOHRE",
      desc: "Open immigration files, obtain establishment card, and onboard at MOHRE to enable work permits and residence visas.",
      icon: Users,
    },
    {
      title: "Work Permits & Residence Visas",
      desc: "Sequence entry, medicals, Emirates ID, and stamping. Align headcount plans with visa bands and workspace capacity.",
      icon: BadgeCheck,
    },
  ],
  tax: [
    {
      title: "VAT (5%)",
      desc: "Register mandatorily at AED 375k (voluntary at 187.5k). File/pay within 28 days after period end and maintain compliant tax invoices.",
      icon: FileText,
      link: { to: "/tax-legal", label: "Go to Tax & Legal" },
    },
    {
      title: "Corporate Tax (CT)",
      desc: "9% above AED 375,000; QFZPs may qualify for 0% on qualifying income if conditions are met. Keep transfer pricing support where thresholds apply.",
      icon: Calculator,
      link: { to: "/tax-legal", label: "CT overview" },
    },
  ],
  specialized: [
    {
      title: "Trademarks & IP",
      desc: "Protect brands early. File, publish, manage oppositions/renewals, and consider Madrid for multi-country reach.",
      icon: FileText,
      link: { to: "/ip/uae/trademarks", label: "UAE Trademarks" },
    },
    {
      title: "Real Estate Admin",
      desc: "Tenancy (Ejari), DLD payments and mortgage registration (0.25% of loan value + fees). Keep documents ready for banking and visas.",
      icon: Building2,
      link: { to: "/services", label: "Get help" },
    },
  ],
};

const blogs = [
  {
    title: "Free‑zone Corporate Tax at 0%: Are You Really a QFZP?",
    to: "/blogs",
  },
  {
    title: "VAT Late? A Clean Three‑Step Recovery",
    to: "/blogs",
  },
  {
    title: "Logistics Hub Choice: KEZAD vs JAFZA vs DMCC for 2025 Build‑outs",
    to: "/blogs",
  },
];

export default function SetupUAE() {
  useEffect(() => {
    document.title = "UAE Business Setup — Seminant";
  }, []);

  return (
    <section className="container mx-auto px-4 py-16">
      {/* Hero */}
      <div className="mx-auto max-w-3xl text-center">
        <div className="mx-auto mb-6 max-w-5xl overflow-hidden rounded-2xl border">
          <img
            src="https://images.pexels.com/photos/1610973/pexels-photo-1610973.jpeg"
            loading="eager"
            decoding="async"
            fetchPriority="high"
            alt="Dubai skyline in the United Arab Emirates"
            className="h-64 w-full object-cover"
          />
        </div>
        <h1 className="text-3xl font-bold tracking-tight md:text-4xl">
          Business Setup (UAE)
        </h1>
        <p className="mt-4 text-muted-foreground">
          A streamlined path from licence to visas and tax. Choose onshore
          (Dubai DED) for local trade and tenders, or free zones for sector
          ecosystems and port/airport adjacency. We link official portals and
          keep filings on calendar.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-3">
          <Button asChild size="lg">
            <Link to="/contact">Talk to an advisor</Link>
          </Button>
          <Button size="lg" variant="outline" onClick={() => {
            const el = document.getElementById('formation');
            if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }}>
            Skip to company formation
          </Button>
        </div>
      </div>

      {/* Quick anchor nav */}
      <div className="mx-auto mt-10 flex max-w-5xl flex-wrap justify-center gap-2">
        {[
          { href: "#formation", label: "Company Formation" },
          { href: "#licensing", label: "Licensing & Permits" },
          { href: "#immigration", label: "Visas & Immigration" },
          { href: "#tax", label: "Tax & Compliance" },
          { href: "#specialized", label: "Specialized Services" },
        ].map((i) => (
          <a
            key={i.href}
            href={i.href}
            className="rounded-full border px-4 py-2 text-sm hover:bg-accent"
          >
            {i.label}
          </a>
        ))}
      </div>

      {/* Official Portals */}
      <div className="mx-auto mt-10 max-w-5xl rounded-2xl border bg-card p-6">
        <div className="flex items-center gap-2 text-sm font-semibold">
          <Calculator className="h-4 w-4" /> Official portals & calculators
        </div>
        <div className="mt-3 grid gap-2 text-sm md:grid-cols-2">
          <a
            className="underline"
            href="https://invest.dubai.ae/"
            target="_blank"
            rel="noreferrer"
          >
            Invest in Dubai — activities, fees, steps
          </a>
          <a
            className="underline"
            href="https://www.jafza.ae/"
            target="_blank"
            rel="noreferrer"
          >
            JAFZA — licensing & packages
          </a>
          <a
            className="underline"
            href="https://dmcc.ae/"
            target="_blank"
            rel="noreferrer"
          >
            DMCC — company setup
          </a>
          <a
            className="underline"
            href="https://www.rakez.com/"
            target="_blank"
            rel="noreferrer"
          >
            RAKEZ — multi‑zone setup
          </a>
          <a
            className="underline"
            href="https://www.kezadgroup.com/"
            target="_blank"
            rel="noreferrer"
          >
            KEZAD — land & logistics
          </a>
        </div>
      </div>

      {/* Sections */}
      <Section
        id="formation"
        title="Company Formation"
        items={cards.formation}
      />
      <Section
        id="licensing"
        title="Licensing & Permits"
        items={cards.licensing}
      />
      <Section
        id="immigration"
        title="Visas & Immigration"
        items={cards.immigration}
      />
      <Section id="tax" title="Tax & Compliance" items={cards.tax} />
      <Section
        id="specialized"
        title="Specialized Services"
        items={cards.specialized}
      />

      {/* Featured blogs */}
      <div className="mx-auto mt-12 max-w-6xl">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-semibold">Featured blogs</h2>
          <Button asChild variant="ghost">
            <Link to="/blogs">View all</Link>
          </Button>
        </div>
        <div className="mt-4 grid gap-4 md:grid-cols-3">
          {blogs.map((b, i) => (
            <m.article
              key={b.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.3, delay: i * 0.03 }}
              className="rounded-lg border bg-card p-5 shadow-sm"
            >
              <h3 className="text-base font-semibold">{b.title}</h3>
              <div className="mt-3">
                <Button asChild variant="outline" size="sm">
                  <Link to={b.to}>Read more</Link>
                </Button>
              </div>
            </m.article>
          ))}
        </div>
      </div>

      {/* Final CTA */}
      <div className="mx-auto mt-12 max-w-3xl rounded-2xl border bg-primary p-6 text-primary-foreground">
        <div className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-center">
          <div>
            <h3 className="text-xl font-semibold">
              Prefer a done‑for‑you setup?
            </h3>
            <p className="mt-1 text-sm opacity-90">
              Our team assembles packs, submits on portals, and keeps VAT/CT and
              renewals on calendar.
            </p>
          </div>
          <Button asChild size="lg" variant="secondary">
            <Link to="/contact">Contact Us</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}

function Section({
  id,
  title,
  items,
}: {
  id: string;
  title: string;
  items: {
    title: string;
    desc: string;
    icon: any;
    cta?: { to: string; label: string };
    link?: { to: string; label: string };
  }[];
}) {
  return (
    <div id={id} className="mx-auto mt-12 max-w-6xl">
      <h2 className="text-xl font-semibold">{title}</h2>
      <div className="mt-4 grid gap-4 md:grid-cols-2">
        {items.map((it, i) => (
          <m.article
            key={it.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.3, delay: i * 0.03 }}
            className="rounded-xl border bg-card p-6 shadow-sm"
          >
            <div className="flex items-center gap-3">
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-md bg-secondary">
                <it.icon className="h-5 w-5 text-primary" />
              </span>
              <h3 className="text-lg font-semibold">{it.title}</h3>
            </div>
            <p className="mt-2 text-sm text-muted-foreground">{it.desc}</p>
            <div className="mt-3 flex gap-3">
              {it.cta ? (
                <Button asChild size="sm">
                  <Link to={it.cta.to}>{it.cta.label}</Link>
                </Button>
              ) : null}
              {it.link ? (
                <Button asChild size="sm" variant="outline">
                  <Link to={it.link.to}>{it.link.label}</Link>
                </Button>
              ) : null}
            </div>
          </m.article>
        ))}
      </div>
    </div>
  );
}
