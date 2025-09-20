export default function About() {
  return (
    <section className="container py-16 md:py-24">
      <header className="max-w-3xl">
        <p className="text-sm font-semibold uppercase tracking-widest text-primary">About</p>
        <h1 className="mt-2 font-display text-3xl md:text-5xl leading-tight">The Event That’s Shaping Nigeria’s Industrial Energy Landscape</h1>
        <p className="mt-4 text-muted-foreground">
          As energy costs soar and supply challenges persist, Nigeria’s manufacturing sector faces mounting pressure to adapt. The Manufacturers Energy Security & Energy Efficiency Summit 2025 is the country’s only dedicated platform for energy transformation in industry — focused on securing reliable, cost‑effective, and sustainable power for production. This 3‑day summit connects manufacturers, policymakers, energy providers, financiers, and technology innovators for a collaborative exchange of ideas, strategy, and commercially viable solutions. Whether you provide infrastructure, energy technology, clean fuels, ESG services, or financing — this is the event where industry aligns with innovation.
        </p>
      </header>

      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {[
          { k: "2500+", t: "Manufacturers" },
          { k: "100+", t: "Exhibitors" },
          { k: "60+", t: "Expert Speakers" },
          { k: "Investor", t: "Roundtables" },
          { k: "Policy", t: "Dialogues" },
          { k: "VIP", t: "Forums" },
        ].map((i) => (
          <div key={i.k + i.t} className="rounded-2xl border border-border bg-card p-6">
            <div className="font-display text-3xl">{i.k}</div>
            <div className="mt-1 text-sm text-muted-foreground">{i.t}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
