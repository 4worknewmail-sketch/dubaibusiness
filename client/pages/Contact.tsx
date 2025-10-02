import { useEffect } from "react";
import ContactForm from "@/components/common/ContactForm";

export default function Contact() {
  useEffect(() => {
    document.title = "Contact Us — Seminant";
  }, []);

  return (
    <section className="container mx-auto px-4 py-16">
      <div className="mx-auto max-w-2xl">
        <h1 className="text-3xl font-bold tracking-tight">Contact Us</h1>
        <p className="mt-3 text-sm text-muted-foreground">
          Reach our team for business setup, compliance, tax and IP support.
          We'll get back within one business day.
        </p>
        <ContactForm />
      </div>
    </section>
  );
}
