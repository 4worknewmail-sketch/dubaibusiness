export function setPageMeta({ title, description, canonical, image }: { title?: string; description?: string; canonical?: string; image?: string }) {
  if (title) document.title = title;
  const ensure = (selector: string, el: HTMLElement) => {
    const existing = document.head.querySelector(selector);
    if (existing) existing.replaceWith(el);
    else document.head.appendChild(el);
  };
  if (description) {
    const meta = document.createElement("meta");
    meta.name = "description";
    meta.content = description;
    ensure('meta[name="description"]', meta);
  }
  if (canonical) {
    const link = document.createElement("link");
    link.rel = "canonical";
    link.href = canonical;
    ensure('link[rel="canonical"]', link);
  }
  if (image) {
    const ogImg = document.createElement("meta");
    ogImg.setAttribute("property", "og:image");
    ogImg.content = image;
    ensure('meta[property="og:image"]', ogImg);
  }
}

export function setJsonLd(type: string, data: Record<string, unknown>) {
  const id = `jsonld-${type}`;
  let script = document.getElementById(id) as HTMLScriptElement | null;
  if (!script) {
    script = document.createElement("script");
    script.type = "application/ld+json";
    script.id = id;
    document.head.appendChild(script);
  }
  script.textContent = JSON.stringify({ '@context': 'https://schema.org', '@type': type, ...data });
}
