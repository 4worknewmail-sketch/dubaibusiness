import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  if (submitted) {
    return (
      <div className="mt-6 rounded-md border bg-green-50 p-4 text-sm text-green-800">
        Thanks—your message has been sent.
      </div>
    );
  }

  return (
    <form
      className="mt-6 grid gap-4"
      onSubmit={(e) => {
        e.preventDefault();
        setSubmitted(true);
      }}
    >
      <div>
        <label className="mb-1 block text-sm font-medium">Name</label>
        <Input name="name" required placeholder="Your full name" />
      </div>
      <div>
        <label className="mb-1 block text-sm font-medium">Email</label>
        <Input
          type="email"
          name="email"
          required
          placeholder="name@example.com"
        />
      </div>
      <div>
        <label className="mb-1 block text-sm font-medium">Message</label>
        <Textarea
          name="message"
          required
          placeholder="Tell us what you need help with"
          rows={6}
        />
      </div>
      <Button type="submit" className="w-full">
        Send message
      </Button>
    </form>
  );
}
