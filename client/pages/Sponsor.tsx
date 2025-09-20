export default function Sponsor() {
  return (
    <section className="container py-16 md:py-24">
      <header className="max-w-3xl">
        <p className="text-sm font-semibold uppercase tracking-widest text-primary">Sponsor</p>
        <h1 className="mt-2 font-display text-3xl md:text-5xl leading-tight">Partner With The Summit</h1>
        <p className="mt-4 text-muted-foreground">
          Align your brand with Nigeria’s foremost industrial energy platform. From headline partnerships to focused product showcases, we tailor packages that drive brand visibility, lead generation, and strategic relationships with manufacturers.
        </p>
      </header>
      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {[
          { t: "Headline Partner", d: "Category exclusivity, keynote visibility, and premium activation." },
          { t: "Gold Partner", d: "High‑impact branding across the summit experience." },
          { t: "Silver Partner", d: "Targeted exposure and lead‑gen opportunities." },
          { t: "Knowledge Partner", d: "Own an agenda stream with thought leadership." },
          { t: "Networking Partner", d: "Host VIP roundtables, mixers and lounges." },
          { t: "Innovation Partner", d: "Showcase pilots and demos with manufacturers." },
        ].map((c) => (
          <div key={c.t} className="rounded-xl border border-border bg-card p-6">
            <h3 className="font-semibold">{c.t}</h3>
            <p className="mt-2 text-sm text-muted-foreground">{c.d}</p>
          </div>
        ))}
      </div>
      <div className="mt-10 flex flex-wrap gap-3">
        <a href="#" className="inline-flex items-center rounded-lg bg-primary px-5 py-3 text-primary-foreground shadow-md hover:bg-primary/90">View Sponsorship Packages</a>
        <a href="mailto:partners@manufacturersenergysecuritysummit.org" className="inline-flex items-center rounded-lg border border-input bg-background px-5 py-3 font-medium hover:bg-accent">partners@manufacturersenergysecuritysummit.org</a>
      </div>
    </section>
  );
}
