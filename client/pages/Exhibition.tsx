export default function Exhibition() {
  return (
    <section className="container py-16 md:py-24">
      <header className="max-w-3xl">
        <p className="text-sm font-semibold uppercase tracking-widest text-primary">Exhibition</p>
        <h1 className="mt-2 font-display text-3xl md:text-5xl leading-tight">Your Opportunity to Lead</h1>
        <p className="mt-4 text-muted-foreground">
          The 2025 Summit is more than a conference — it’s a commercial engine for Nigeria’s next industrial energy chapter. It connects top manufacturers, energy innovators, investors, and regulators to reimagine how Nigerian industry is powered.
        </p>
      </header>
      <div className="mt-10 grid gap-6 sm:grid-cols-2">
        <div className="rounded-2xl border border-border bg-card p-6">
          <h3 className="font-semibold">Summit Focus Areas</h3>
          <ul className="mt-3 list-disc pl-5 text-sm text-muted-foreground space-y-1">
            <li>Hybrid & off‑grid power solutions</li>
            <li>Factory‑level energy optimization</li>
            <li>Biogas, waste heat recovery & renewables</li>
            <li>Climate technologies & digital energy tools</li>
            <li>Energy finance, ESG & sustainability services</li>
            <li>Policy, regulation & industrial incentives</li>
          </ul>
        </div>
        <div className="rounded-2xl border border-border bg-card p-6">
          <h3 className="font-semibold">Impact That Matters</h3>
          <p className="mt-3 text-sm text-muted-foreground">Nigeria’s manufacturing sector faces energy disruptions, rising costs and ESG requirements — the summit enables urgent, actionable solutions.</p>
          <div className="mt-5 flex flex-wrap gap-3">
            <a href="#" className="inline-flex items-center rounded-lg bg-primary px-5 py-3 text-primary-foreground shadow-md hover:bg-primary/90">Become a Sponsor</a>
            <a href="#" className="inline-flex items-center rounded-lg border border-input bg-background px-5 py-3 font-medium hover:bg-accent">Download Summit Deck</a>
          </div>
        </div>
      </div>
    </section>
  );
}
