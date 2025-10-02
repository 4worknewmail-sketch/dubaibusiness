import { m } from "framer-motion";

type Item = { h: string; t: string };
const sections: { title: string; items: Item[] }[] = [
  {
    title: "Logistics & Trade",
    items: [
      {
        h: "JAFZA, Dubai South, KEZAD",
        t: "Port- and airport-adjacent hubs for import/export, e-commerce fulfillment, bonded warehousing, and industrial distribution (KLP at KEZAD).",
      },
      {
        h: "Free-zone benefits",
        t: "Customs efficiencies, ecosystem vendors, scalable facilities from flexi-desks to warehouses, and visa bands aligned with premises.",
      },
    ],
  },
  {
    title: "Finance & Fintech",
    items: [
      {
        h: "DIFC & ADGM",
        t: "Regulated activities under DFSA/FSRA. Use sandbox pathways for early-stage fintech; expect controlled functions and ongoing reporting.",
      },
      {
        h: "Corporate structure",
        t: "Holdco + regulated entity patterns; CT/VAT planning and transfer pricing documentation where intra-group services exist.",
      },
    ],
  },
  {
    title: "E‑commerce & SaaS",
    items: [
      {
        h: "Digital-first setups",
        t: "Dubai Internet City, Dubai South e-com, and RAKEZ business parks support cloud teams with flexible office policies and fast visas.",
      },
      {
        h: "VAT & cross-border",
        t: "Manage place-of-supply, marketplace models, and reverse charge. Keep proper tax invoices and reconciliation.",
      },
    ],
  },
  {
    title: "Manufacturing & Industrial",
    items: [
      {
        h: "KEZAD clusters",
        t: "Industrial clusters with utilities, land, and proximity to Khalifa Port and rail. Options range from light assembly to heavy industry.",
      },
      {
        h: "ESG & permits",
        t: "Plan environmental permits, HSE, and product standards testing early to compress commissioning timelines.",
      },
    ],
  },
  {
    title: "Professional Services",
    items: [
      {
        h: "Onshore vs free zone",
        t: "Local client servicing may favour onshore licences; consulting, design, and advisory also work well in media/tech free zones.",
      },
      {
        h: "People & visas",
        t: "MOHRE onboarding, establishment cards, and salary protections (WPS) define readiness. Map visa bands to headcount plans.",
      },
    ],
  },
  {
    title: "Energy, Marine & Construction",
    items: [
      {
        h: "RAK Maritime City / JAFZA",
        t: "Shipyard and marine services ecosystems with quayside access and specialist vendors.",
      },
      {
        h: "Project workflows",
        t: "Prequalifications, HSE credentials, and insurances drive tender success; align with CT/VAT for cross-border supplies.",
      },
    ],
  },
  {
    title: "Media & Creative",
    items: [
      {
        h: "DMC, SHAMS, Twofour54",
        t: "Production, gaming, and content studios with incentives and streamlined permits.",
      },
      {
        h: "IP & monetisation",
        t: "Protect brands and content; manage cross-licensing and platform distribution agreements.",
      },
    ],
  },
  {
    title: "Authorities & Regulators",
    items: [
      { h: "Dubai Land Department (DLD)", t: "Land registration, mortgage filing (0.25% of loan), escrow oversight, market data. Contact: 800 4488 • info@dubailand.gov.ae." },
      { h: "Real Estate Regulatory Agency (RERA)", t: "Licensing for developers/brokers, strata/owners’ associations, Ejari and market conduct. Contact: 800 4488 • info@dubailand.gov.ae." },
      { h: "MOHRE", t: "Work permits, labour relations, WPS wage protection, dispute resolution and Emiratisation. Contact: 600 590 000 • ask@mohre.gov.ae." },
      { h: "Ministry of Economy (MoE)", t: "Commercial registry, competition, consumer/IP policy, investor services and data. Contact: 800 1222 • info@economy.ae." },
      { h: "Federal Tax Authority (FTA)", t: "Corporate Tax, VAT and Excise registrations, returns, audits; use official contact portal for support." },
      { h: "Central Bank of the UAE (CBUAE)", t: "+971 2 691 5555 • contactus@cbuae.gov.ae — regulates banks/insurers/payment systems; monetary stability." },
      { h: "Securities & Commodities Authority (SCA)", t: "Markets, intermediaries, funds and conduct outside financial free zones. 800 722 823 • contactus@sca.ae." },
      { h: "Dubai Economy (DET/BRL)", t: "Mainland business registration/licensing, permits and consumer protection. BRL: 600 500 006." },
      { h: "Dubai Chamber of Commerce", t: "Membership, certificates of origin, dispute services, business councils. 800 242 6237 • customercare@dubaichamber.com." },
      { h: "GDRFA – Dubai", t: "Entry permits, residency visas, status changes and Amer services. 800 5111 • amer@gdrfad.gov.ae." },
      { h: "DIFC Authority", t: "Company formation, property/leases, Courts infrastructure in Dubai’s common‑law zone. See DIFC Contact & Support." },
      { h: "DFSA (DIFC regulator)", t: "+971 4 362 1500 • info@dfsa.ae — licensing/supervision, AML/CFT, enforcement and rules." },
      { h: "DMCC", t: "+971 4 424 9600 / 600 54 3622 • setup@dmcc.ae — leading free zone and trade hub at JLT." },
      { h: "JAFZA", t: "800‑JAFZA (52392) • JafzaCustomerServices@Jafza.ae — port‑linked logistics/industrial zone of DP World." },
      { h: "RAKEZ", t: "+971 7 204 1111 • info@rakez.com — combined industrial/SME setups with facilities and visas." },
      { h: "IFZA", t: "800‑IFZA (4392) • +971 4 228 5285 • info@ifza.com — SME‑friendly free zone in Dubai." },
      { h: "Meydan Free Zone", t: "800 FZ1 (391) • +971 4 777 7222 • setup@meydanfz.ae — digital formation and ongoing support." },
      { h: "DAFZ (DIEZ)", t: "+971 600 532 392 • saleslmt@dafz.ae — high‑connectivity zone next to DXB." },
      { h: "ADGM", t: "+971 2 333 8888 • info@adgm.com — Abu Dhabi’s common‑law financial centre; FSRA regulates financial services." },
      { h: "ADDED", t: "Abu Dhabi mainland licensing and investor services. 800 555 • contact@tamm.abudhabi." }
    ]
  }
];

export default function Sectors() {
  return (
    <section className="container mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold tracking-tight">Sectors & Opportunities (UAE)</h1>
      <div className="mt-8 grid gap-8">
        {sections.map((s, si) => (
          <div key={s.title}>
            <h2 className="text-xl font-semibold">{s.title}</h2>
            <div className="mt-4 grid gap-4 md:grid-cols-2">
              {s.items.map((it, ii) => (
                <m.article
                  key={it.h}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.3, delay: si * 0.05 + ii * 0.03 }}
                  className="rounded-lg border bg-card p-6 shadow-sm"
                >
                  <h3 className="text-lg font-semibold">{it.h}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{it.t}</p>
                </m.article>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
