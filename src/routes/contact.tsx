import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { toast } from "sonner";
import { Instagram, Mail, MapPin, Phone } from "lucide-react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Aurelia Jewels — Styling Help & Order Support" },
      {
        name: "description",
        content:
          "Questions about sizing, styling or an order? Write to Aurelia Jewels and our team will reply within one working day.",
      },
      { property: "og:title", content: "Contact Aurelia Jewels" },
      {
        property: "og:description",
        content: "Styling help, sizing advice and order support from the Aurelia Jewels team.",
      },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [sent, setSent] = useState(false);

  return (
    <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6">
      <header className="mx-auto max-w-2xl text-center">
        <p className="text-[11px] tracking-luxe text-gold">We'd Love To Hear From You</p>
        <h1 className="mt-3 font-display text-4xl sm:text-5xl">Contact Us</h1>
        <p className="mt-4 text-sm text-muted-foreground">
          Sizing, styling or an order question — we reply within one working day.
        </p>
      </header>

      <div className="mt-14 grid gap-12 lg:grid-cols-2">
        <div className="space-y-5 text-sm">
          <p className="flex items-center gap-3">
            <Mail className="h-4 w-4 shrink-0 text-gold" /> care@aureliajewels.example
          </p>
          <p className="flex items-center gap-3">
            <Phone className="h-4 w-4 shrink-0 text-gold" /> +91 00000 00000 (placeholder)
          </p>
          <p className="flex items-center gap-3">
            <Instagram className="h-4 w-4 shrink-0 text-gold" /> @aureliajewels (placeholder)
          </p>
          <p className="flex items-start gap-3">
            <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
            Studio address placeholder — share your real address and we'll add it here.
          </p>
          <p className="border-t border-border pt-5 text-xs leading-relaxed text-muted-foreground">
            These contact details are placeholders for this demo store. Send us your real email,
            phone number and social handles and they'll replace these.
          </p>
        </div>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            setSent(true);
            toast.success("Thanks! This demo form doesn't send real messages yet.");
          }}
          className="space-y-4"
        >
          <input
            required
            placeholder="Your name"
            aria-label="Your name"
            className="w-full border border-border bg-card px-4 py-3 text-sm outline-none focus:border-gold"
          />
          <input
            required
            type="email"
            placeholder="Email address"
            aria-label="Email address"
            className="w-full border border-border bg-card px-4 py-3 text-sm outline-none focus:border-gold"
          />
          <textarea
            required
            rows={5}
            placeholder="How can we help?"
            aria-label="Message"
            className="w-full border border-border bg-card px-4 py-3 text-sm outline-none focus:border-gold"
          />
          <button
            type="submit"
            className="w-full bg-ink px-8 py-4 text-[11px] tracking-luxe text-ivory transition-colors hover:bg-gold hover:text-ink"
          >
            Send Message
          </button>
          {sent && (
            <p className="text-xs text-muted-foreground">
              Message noted in this demo — no email is actually delivered yet.
            </p>
          )}
        </form>
      </div>
    </div>
  );
}
