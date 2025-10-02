import { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { BLOGS } from "./blogsData";
import { m } from "framer-motion";
import { setPageMeta, setJsonLd } from "@/lib/seo";

export default function BlogPost() {
  const { slug } = useParams();
  const post = BLOGS.find((p) => p.slug === slug);

  useEffect(() => {
    if (!post) return;
    const origin = window.location.origin;
    const url = `${origin}/blogs/${post.slug}`;
    setPageMeta({
      title: `${post.title} — Seminant`,
      description: post.summary,
      canonical: url,
      image: post.image,
    });
    setJsonLd("Article", {
      headline: post.title,
      datePublished: post.date,
      image: [post.image],
      mainEntityOfPage: url,
      author: { '@type': 'Organization', name: 'Seminant' },
      publisher: {
        '@type': 'Organization',
        name: 'Seminant',
        logo: {
          '@type': 'ImageObject',
          url: 'https://cdn.builder.io/api/v1/image/assets%2Fb38b36ed8d244fffadd179bb37229fcc%2F623bf500355d4f2bbc100b3d36d24461?format=webp&width=256'
        }
      }
    });
  }, [post]);

  if (!post) {
    return (
      <section className="container mx-auto px-4 py-16">
        <p className="text-sm text-muted-foreground">Article not found.</p>
        <div className="mt-4">
          <Link to="/blogs" className="underline">Back to Blogs</Link>
        </div>
      </section>
    );
  }

  return (
    <section className="container mx-auto px-4 py-16">
      <div className="mx-auto max-w-3xl">
        <m.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.35 }} className="overflow-hidden rounded-2xl border">
          <img src={post.image} alt={post.title} loading="eager" decoding="async" className="h-64 w-full object-cover" />
        </m.div>
        <h1 className="mt-6 text-3xl font-bold tracking-tight">{post.title}</h1>
        <div className="mt-2 text-xs text-muted-foreground">{post.tag} · {new Date(post.date).toLocaleDateString()}</div>
        <article className="prose prose-sm mt-6 max-w-none dark:prose-invert">
          {post.content.map((b, i) => {
            if (b.type === "h2") return <h2 key={i}>{b.text}</h2>;
            if (b.type === "ul") return (
              <ul key={i}>
                {b.items!.map((it, j) => <li key={j}>{it}</li>)}
              </ul>
            );
            return <p key={i}>{b.text}</p>;
          })}
        </article>
        <div className="mt-8">
          <Link to="/blogs" className="inline-flex rounded-md border px-3 py-2 text-sm hover:bg-accent">← Back to Blogs</Link>
        </div>
      </div>
    </section>
  );
}
