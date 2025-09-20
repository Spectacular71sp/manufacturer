import { useState } from "react";

export default function Contact() {
  const [sent, setSent] = useState(false);

  return (
    <section className="container py-16 md:py-24">
      <header className="max-w-2xl">
        <p className="text-sm font-semibold uppercase tracking-widest text-primary">Contact</p>
        <h1 className="mt-2 font-display text-3xl md:text-5xl leading-tight">Get in Touch</h1>
        <p className="mt-4 text-muted-foreground">We’d love to hear from you. Send us a message and our team will get back to you promptly.</p>
      </header>

      <div className="mt-10 grid gap-10 lg:grid-cols-2">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            setSent(true);
          }}
          className="rounded-2xl border border-border bg-card p-6 shadow-sm"
        >
          <div className="grid gap-4">
            <div className="grid gap-2">
              <label htmlFor="name" className="text-sm font-medium">Name</label>
              <input id="name" name="name" required className="w-full rounded-md border border-input bg-background px-3 py-2 shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring" />
            </div>
            <div className="grid gap-2">
              <label htmlFor="email" className="text-sm font-medium">Email</label>
              <input id="email" name="email" type="email" required className="w-full rounded-md border border-input bg-background px-3 py-2 shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring" />
            </div>
            <div className="grid gap-2">
              <label htmlFor="message" className="text-sm font-medium">Message</label>
              <textarea id="message" name="message" rows={6} required className="w-full rounded-md border border-input bg-background px-3 py-2 shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring" />
            </div>
            <button type="submit" className="inline-flex items-center justify-center rounded-md bg-primary px-5 py-3 text-primary-foreground font-medium hover:bg-primary/90">Send Message</button>
            {sent && (
              <p className="text-sm text-green-600">Thanks! Your message has been captured locally. Hook this form to your email or CRM when ready.</p>
            )}
          </div>
        </form>

        <aside className="space-y-6">
          <div className="rounded-2xl border border-border bg-card p-6">
            <h3 className="font-semibold">Contact Information</h3>
            <ul className="mt-3 space-y-2 text-sm text-foreground/80">
              <li><a className="hover:text-primary" href="mailto:info@manufacturersenergysecuritysummit.org">info@manufacturersenergysecuritysummit.org</a></li>
              <li><a className="hover:text-primary" href="mailto:exhibit@manufacturersenergysecuritysummit.org">exhibit@manufacturersenergysecuritysummit.org</a></li>
              <li><a className="hover:text-primary" href="mailto:partners@manufacturersenergysecuritysummit.org">partners@manufacturersenergysecuritysummit.org</a></li>
              <li><a className="hover:text-primary" href="tel:+234000000000">+234 000 000 000</a></li>
            </ul>
          </div>
          <div className="rounded-2xl border border-border bg-card p-6">
            <h3 className="font-semibold">Visit</h3>
            <p className="mt-2 text-sm text-muted-foreground">Balmoral Hall, Lagos<br/>5 – 7 August, 2025<br/>09:00 – 18:00 (Daily)</p>
          </div>
        </aside>
      </div>
    </section>
  );
}
