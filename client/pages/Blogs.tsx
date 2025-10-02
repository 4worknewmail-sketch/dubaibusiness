import { useEffect } from "react";
import { Link } from "react-router-dom";
import { BLOGS } from "./blogsData";
import { m } from "framer-motion";
import { setPageMeta } from "@/lib/seo";

export default function Blogs() {
  useEffect(() => {
    const origin = window.location.origin;
    setPageMeta({ title: "Blogs — Seminant", description: "Articles on UAE setup, visas, VAT/CT, trade hubs and compliance.", canonical: `${origin}/blogs` });
  }, []);

  return (
    <section className="container mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold tracking-tight">Blogs</h1>
      <div className="mt-6 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {BLOGS.map((a, i) => (
          <m.article
            key={a.slug}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.3, delay: i * 0.03 }}
            className="overflow-hidden rounded-xl border bg-card shadow-sm transition-shadow hover:shadow-md"
          >
            <Link to={`/blogs/${a.slug}`} className="block">
              <div className="aspect-[16/9] w-full overflow-hidden">
                <img src={a.image} alt={a.title} loading="lazy" decoding="async" className="h-full w-full object-cover" />
              </div>
              <div className="p-6">
                <div className="text-xs font-medium text-muted-foreground">{a.tag} · {new Date(a.date).toLocaleDateString()}</div>
                <h2 className="mt-2 text-lg font-semibold">{a.title}</h2>
                <p className="mt-2 text-sm text-muted-foreground">{a.summary}</p>
              </div>
            </Link>
          </m.article>
        ))}
      </div>
    </section>
  );
}
