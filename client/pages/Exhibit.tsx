export default function Exhibit() {
  return (
    <section className="container py-16 md:py-24">
      <header className="max-w-3xl">
        <p className="text-sm font-semibold uppercase tracking-widest text-primary">Exhibit</p>
        <h1 className="mt-2 font-display text-3xl md:text-5xl leading-tight">Who Should Exhibit?</h1>
        <p className="mt-4 text-muted-foreground">
          The summit is a must‑attend for companies providing solutions in industrial power generation (gas, hybrid, off‑grid, solar), energy efficiency & automation, smart metering & grid tech, biogas & waste‑to‑energy, cooling systems & heat recovery, clean fuels & low‑carbon infrastructure, ESG consulting, EPC & industrial infrastructure, climate finance and insurance, environmental compliance, carbon tracking and digital tools.
        </p>
      </header>

      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {[
          "Hybrid & off‑grid power",
          "Factory‑level optimization",
          "Biogas & waste heat recovery",
          "Smart metering & monitoring",
          "Cooling & absorption chillers",
          "Clean fuels & low‑carbon infra",
          "Automation & controls",
          "ESG, climate finance & insurance",
          "Engineering & EPC services",
        ].map((t) => (
          <div key={t} className="rounded-xl border border-border bg-gradient-to-b from-white to-muted/40 dark:from-secondary/10 dark:to-background p-5">
            <div className="font-medium">{t}</div>
          </div>
        ))}
      </div>

      <div className="mt-10 flex flex-wrap gap-3">
        <a href="#" className="inline-flex items-center rounded-lg bg-primary px-5 py-3 text-primary-foreground shadow-md hover:bg-primary/90">Book an Exhibition Stand</a>
        <a href="#" className="inline-flex items-center rounded-lg border border-input bg-background px-5 py-3 font-medium hover:bg-accent">Download Event Brochure</a>
        <a href="mailto:exhibit@manufacturersenergysecuritysummit.org" className="inline-flex items-center rounded-lg border border-input bg-background px-5 py-3 font-medium hover:bg-accent">exhibit@manufacturersenergysecuritysummit.org</a>
      </div>
    </section>
  );
}
