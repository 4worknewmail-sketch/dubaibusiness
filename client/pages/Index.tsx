import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { m } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useEffect } from "react";
import ContactForm from "@/components/common/ContactForm";

const heroImg =
  "https://images.pexels.com/photos/9176068/pexels-photo-9176068.jpeg";
const skylineImg =
  "https://images.pexels.com/photos/3351925/pexels-photo-3351925.jpeg";
const officeImg =
  "https://images.pexels.com/photos/19797278/pexels-photo-19797278.jpeg";
const warehouseImg =
  "https://images.pexels.com/photos/12706241/pexels-photo-12706241.jpeg";
const portImg =
  "https://images.pexels.com/photos/16969979/pexels-photo-16969979.jpeg";

export default function Index() {
  useEffect(() => {
    document.title = "Set up. Comply. Grow — Portscale";
  }, []);

  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="relative isolate">
        <img
          src={heroImg}
          alt="Solid black business backdrop with subtle texture for readable hero text."
          className="absolute inset-0 h-[78vh] w-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/40 to-black/10" />
        <div className="relative mx-auto flex h-[78vh] max-w-7xl items-center px-6">
          <m.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="max-w-3xl text-white"
          >
            <h1 className="text-4xl font-bold leading-tight tracking-tight md:text-5xl">
              Set up. Comply. Grow — in the UAE & Middle East.
            </h1>
            <p className="mt-5 text-lg text-white/90 max-w-3xl">
              UAE business setup made clear: onshore (Dubai DED) and free zones,
              visas, VAT 5% and corporate tax 9%—all explained with steps you
              can follow. Compare zones, avoid pitfalls, and get filings handled
              by experts when you need it.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild size="lg">
                <Link
                  to="/setup/uae"
                  className="inline-flex items-center gap-2"
                >
                  Start in the UAE <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="ghost"
                className="bg-white/10 text-white hover:bg-white/20"
              >
                <Link to="/services">Explore Automation Services</Link>
              </Button>
            </div>
          </m.div>
        </div>
      </section>

      {/* How this site helps */}
      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-8 md:grid-cols-3">
          {[
            {
              title: "One knowledge base",
              text: "The UAE’s moving pieces—licences, visas, VAT/CT, free zones, regulators—explained in long form with official links at the end of each section.",
              img: skylineImg,
            },
            {
              title: "Actionable, not academic",
              text: "We translate law and portal steps into documents, fees, and timelines—plus pitfalls we see in the field (like onboarding before work permits). (UAE Government Portal)",
              img: officeImg,
            },
            {
              title: "Hands-off option",
              text: "Prefer not to chase portals? Our automation team calendars VAT/CT, renews licences/visas, files trademarks, and handles Ejari/mortgage paperwork.",
              img: warehouseImg,
            },
          ].map((c, i) => (
            <m.article
              key={c.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.3, delay: i * 0.03 }}
              className="group overflow-hidden rounded-xl border bg-card shadow-sm"
            >
              <div className="aspect-[16/9] overflow-hidden">
                <img
                  src={c.img}
                  alt="Illustrative context for the card"
                  className="h-full w-full scale-105 object-cover transition-transform duration-300 group-hover:scale-110"
                  loading="lazy"
                />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-semibold">{c.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{c.text}</p>
              </div>
            </m.article>
          ))}
        </div>
      </section>

      {/* Pick your path */}
      <section className="mx-auto max-w-6xl px-6 pb-8">
        <div className="grid gap-6 md:grid-cols-2">
          <m.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.35 }}
            className="overflow-hidden rounded-xl border bg-card shadow-sm"
          >
            <div className="aspect-[16/9]">
              <img
                src={portImg}
                alt="Seaport and logistics hubs"
                className="h-full w-full object-cover"
                loading="lazy"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold">Start in the UAE</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Onshore Dubai (DED) suits local trading and tenders; free zones
                fit sector ecosystems, visa bands, and logistics adjacency. Use
                official calculators (Invest in Dubai, JAFZA Cost Calculator,
                DMCC packages, RAKEZ zones, KEZAD KLP) so pricing stays live.
              </p>
              <div className="mt-3 rounded-lg border p-4 text-sm">
                <div className="font-medium">Quick facts</div>
                <ul className="mt-2 list-disc pl-5 text-muted-foreground">
                  <li>
                    VAT 5% (returns/payments due within 28 days after period
                    end).
                  </li>
                  <li>
                    Corporate Tax 9% over AED 375,000; QFZPs may get 0% on
                    Qualifying Income if conditions are met.
                  </li>
                  <li>
                    Ejari required for office/desk leases; mortgage registration
                    0.25% of loan value.
                  </li>
                </ul>
              </div>
              <div className="mt-4 flex gap-3">
                <Button asChild variant="outline">
                  <Link
                    to="/setup/uae/onshore/dubai"
                    className="inline-flex items-center gap-2"
                  >
                    Dubai Onshore <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
                <Button asChild>
                  <Link
                    to="/setup/uae/free-zones"
                    className="inline-flex items-center gap-2"
                  >
                    Free Zones Index <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </m.div>

          <m.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.35, delay: 0.05 }}
            className="overflow-hidden rounded-xl border bg-card shadow-sm"
          >
            <div className="aspect-[16/9]">
              <img
                src={skylineImg}
                alt="Regional skylines"
                className="h-full w-full object-cover"
                loading="lazy"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold">Compare KSA & Qatar</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                KSA centralises foreign investment licences via MISA and runs
                15% VAT under ZATCA. Qatar offers an onshore path via MoCI and
                an export-minded platform via QFZ. We maintain sourced pages so
                you can benchmark incentives and speed.
              </p>
            </div>
          </m.div>
        </div>
      </section>

      {/* Why Middle East CTA under the Compare card */}
      <div className="mx-auto mt-4 flex max-w-6xl justify-start px-6 md:justify-end">
        <Button asChild className="bg-primary text-primary-foreground hover:bg-primary/90">
          <Link to="/why-middle-east">Why Middle East</Link>
        </Button>
      </div>

      {/* Priority callout */}
      <section className="mx-auto max-w-6xl px-6 py-12">
        <div className="relative overflow-hidden rounded-2xl border bg-primary text-primary-foreground">
          <div className="absolute inset-0 opacity-15 [background:radial-gradient(circle_at_20%_30%,_#fff_0,_transparent_40%),radial-gradient(circle_at_80%_70%,_#fff_0,_transparent_40%)]" />
          <div className="relative grid gap-6 p-8 md:grid-cols-[1.6fr_1fr] md:p-10">
            <div>
              <h3 className="text-2xl font-semibold">Want it on autopilot?</h3>
              <p className="mt-2 text-sm md:text-base">
                We assemble your application packs, submit through the right
                portals (DED/free zones, MOHRE, FTA, DLD, MoE), and keep your
                compliance calendar warm so filings happen before penalties do.
              </p>
            </div>
            <div className="self-center justify-self-start md:justify-self-end">
              <Button asChild size="lg" variant="secondary">
                <Link to="/services" className="inline-flex items-center gap-2">
                  See Automation Services <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Source stamp */}
      <section className="px-6 pb-8">
        <div className="mx-auto max-w-6xl text-xs text-muted-foreground">
          All rules and regulations outlined are subject to change in accordance with updates or amendments issued by the government or authorities.
        </div>
      </section>

      {/* Shared Contact Form at the end of homepage */}
      <section className="container mx-auto px-6 pb-16">
        <div className="mx-auto max-w-2xl">
          <h2 className="text-2xl font-semibold tracking-tight">Contact Us</h2>
          <p className="mt-2 text-sm text-muted-foreground">
            Reach our team for business setup, compliance, tax and IP support.
            We'll get back within one business day.
          </p>
          <ContactForm />
        </div>
      </section>
    </div>
  );
}
