import { useEffect, useMemo, useState } from "react";
import { ArrowRight, CalendarDays, MapPin, Clock, CheckCircle2, Play } from "lucide-react";

function useCountdown(target: Date) {
  const [now, setNow] = useState(() => new Date());
  useEffect(() => {
    const id = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(id);
  }, []);
  const diff = Math.max(0, target.getTime() - now.getTime());
  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / (1000 * 60)) % 60);
  const seconds = Math.floor((diff / 1000) % 60);
  return { days, hours, minutes, seconds };
}

export default function Index() {
  const targetDate = useMemo(() => new Date("2025-08-05T09:00:00"), []);
  const time = useCountdown(targetDate);

  const heroImages = [
    "https://cdn.builder.io/api/v1/image/assets%2F5c8403a2bf35488089d7cfb848ab6544%2Fc0a9ee6a50504d60b47b20229914dc25?format=webp&width=1600",
    "https://cdn.builder.io/api/v1/image/assets%2F5c8403a2bf35488089d7cfb848ab6544%2F82f62198bdff47ee81053c76688a1d56?format=webp&width=1600",
    "https://cdn.builder.io/api/v1/image/assets%2F5c8403a2bf35488089d7cfb848ab6544%2F840dabc09281496c8ebd3e137cefa810?format=webp&width=1600",
  ];
  const [slide, setSlide] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setSlide((s) => (s + 1) % heroImages.length), 5000);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="relative">
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-[radial-gradient(1200px_600px_at_50%_-200px,theme(colors.accent/.25),transparent)]" />
          <img
            key={slide}
            src={heroImages[slide]}
            alt="Summit highlight"
            className="h-full w-full object-cover opacity-30 transition-opacity duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
        </div>
        <div className="container pt-16 md:pt-24 pb-16">
          <div className="grid lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 rounded-full border border-border bg-background/80 px-3 py-1 text-xs font-semibold">
                <span className="inline-flex items-center gap-1 text-primary"><Play className="h-3 w-3"/> Live</span>
                Manufacturing • Technology • Sustainability
              </div>
              <h1 className="mt-4 font-display text-4xl md:text-6xl leading-tight tracking-tight">
                Driving Sustainable Manufacturing in West Africa
              </h1>
              <p className="mt-4 max-w-2xl text-foreground/80">
                Join industry leaders, innovators and policymakers to accelerate sustainable manufacturing through cutting‑edge technology solutions.
              </p>
              <div className="mt-6 flex flex-wrap items-center gap-3">
                <a href="/contact" className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-3 text-primary-foreground shadow-lg hover:bg-primary/90">
                  Contact Us <ArrowRight className="h-4 w-4"/>
                </a>
                <a href="#about" className="inline-flex items-center gap-2 rounded-full border border-input bg-background px-5 py-3 text-sm font-medium hover:bg-accent">
                  Learn More
                </a>
              </div>
              <div className="mt-6 flex flex-wrap items-center gap-6 text-sm text-foreground/70">
                <span className="inline-flex items-center gap-2"><CalendarDays className="h-4 w-4"/> 5 – 7 August, 2025</span>
                <span className="inline-flex items-center gap-2"><Clock className="h-4 w-4"/> 09:00 – 18:00</span>
                <span className="inline-flex items-center gap-2"><MapPin className="h-4 w-4"/> Balmoral Hall, Lagos</span>
              </div>
            </div>

            {/* Countdown */}
            <div className="lg:col-span-5">
              <div className="rounded-2xl border border-border bg-card/80 p-6 md:p-8 shadow-xl backdrop-blur">
                <p className="text-xs font-semibold uppercase tracking-widest text-primary">Countdown</p>
                <h3 className="mt-2 font-display text-2xl">Manufacturers Energy Security & Energy Efficiency Summit 2025</h3>
                <div className="mt-6 grid grid-cols-4 gap-3">
                  {([
                    { label: "Days", value: time.days },
                    { label: "Hours", value: time.hours },
                    { label: "Minutes", value: time.minutes },
                    { label: "Seconds", value: time.seconds },
                  ] as const).map(({ label, value }) => (
                    <div key={label} className="rounded-xl bg-muted/60 p-3 text-center">
                      <div className="font-display text-3xl tabular-nums">{String(value).padStart(2, "0")}</div>
                      <div className="mt-1 text-xs uppercase tracking-widest text-foreground/70">{label}</div>
                    </div>
                  ))}
                </div>
                <a
                  href="#schedule"
                  className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-lg bg-secondary px-4 py-3 text-secondary-foreground font-medium hover:bg-secondary/90"
                >
                  View Schedule
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="about" className="container py-16 md:py-24">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary">Highlights</p>
          <h2 className="mt-2 font-display text-3xl md:text-5xl leading-tight">Why You Should Be Part of This Exposition</h2>
          <p className="mt-4 text-muted-foreground max-w-2xl">
            Engage with distinguished speakers, interactive workshops, insightful Q&A sessions and an innovative product showcase.
          </p>
        </div>
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              title: "Distinguished Speakers",
              desc: "Learn from top leaders shaping the future of manufacturing.",
            },
            {
              title: "Interactive Workshops",
              desc: "Hands-on sessions to apply the latest tools and practices.",
            },
            {
              title: "Insightful Q&A",
              desc: "Get answers to your toughest challenges from experts.",
            },
            {
              title: "Product Showcase",
              desc: "Explore cutting-edge solutions from leading brands.",
            },
          ].map((f) => (
            <div key={f.title} className="rounded-2xl border border-border bg-gradient-to-b from-white to-white/70 dark:from-secondary/10 dark:to-background p-6 shadow-sm animate-fade-up transition-transform hover:-translate-y-1">
              <CheckCircle2 className="h-6 w-6 text-primary" />
              <h3 className="mt-4 font-semibold">{f.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Partners / Sponsors */}
      <section className="py-12 border-y border-border bg-muted/40">
        <div className="container">
          <p className="text-center text-xs uppercase tracking-widest text-foreground/60">Official Sponsors & Partners</p>
          <div className="relative mt-6 overflow-hidden">
            <div className="flex gap-12 animate-[marquee_40s_linear_infinite]" aria-label="sponsors">
              {[
                "https://upload.wikimedia.org/wikipedia/commons/3/39/Shell_logo.svg",
                "https://upload.wikimedia.org/wikipedia/commons/8/80/Nexans_logo.svg",
                "https://upload.wikimedia.org/wikipedia/commons/1/13/Schneider_Electric_2007.svg",
                "https://upload.wikimedia.org/wikipedia/commons/4/44/Siemens-logo.svg",
                "https://upload.wikimedia.org/wikipedia/commons/7/79/GE_logo.svg",
                "https://upload.wikimedia.org/wikipedia/commons/2/21/ABB_logo.svg",
              ].map((logo, i) => (
                <img key={i} src={logo} alt="partner logo" className="h-10 w-auto opacity-70" />
              ))}
              {[
                "https://upload.wikimedia.org/wikipedia/commons/3/39/Shell_logo.svg",
                "https://upload.wikimedia.org/wikipedia/commons/8/80/Nexans_logo.svg",
                "https://upload.wikimedia.org/wikipedia/commons/1/13/Schneider_Electric_2007.svg",
                "https://upload.wikimedia.org/wikipedia/commons/4/44/Siemens-logo.svg",
                "https://upload.wikimedia.org/wikipedia/commons/7/79/GE_logo.svg",
                "https://upload.wikimedia.org/wikipedia/commons/2/21/ABB_logo.svg",
              ].map((logo, i) => (
                <img key={`dup-${i}`} src={logo} alt="partner logo" className="h-10 w-auto opacity-70" />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Register CTA */}
      <section id="register" className="container py-16 md:py-24">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="font-display text-3xl md:text-5xl leading-tight">Secure Your Spot</h2>
            <p className="mt-4 text-muted-foreground max-w-prose">
              Be part of the premier manufacturing and energy security summit in West Africa. Register as an attendee or exhibitor and connect with the ecosystem.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href="#" className="inline-flex items-center gap-2 rounded-lg bg-primary px-5 py-3 text-primary-foreground shadow-md hover:bg-primary/90">Attendee Registration</a>
              <a href="#" className="inline-flex items-center gap-2 rounded-lg border border-input bg-background px-5 py-3 font-medium hover:bg-accent">Exhibition Spaces</a>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-[16/10] overflow-hidden rounded-2xl border border-border shadow-lg">
              <img
                src="https://cdn.builder.io/api/v1/image/assets%2F5c8403a2bf35488089d7cfb848ab6544%2F6790eae07ad542adb089ef93fe1367f8?format=webp&width=1600"
                alt="Expo overview"
                className="h-full w-full object-cover"
              />
            </div>
            <a
              href="#"
              className="absolute left-4 bottom-4 inline-flex items-center gap-2 rounded-full bg-secondary px-4 py-2 text-secondary-foreground shadow-md hover:bg-secondary/90"
            >
              Watch Highlights
            </a>
          </div>
        </div>
      </section>

      {/* Map placeholder */}
      <section id="map" className="py-12">
        <div className="container">
          <div className="rounded-2xl border border-border p-4 bg-card">
            <div className="aspect-[16/6] w-full rounded-xl bg-[linear-gradient(135deg,theme(colors.secondary/20),theme(colors.primary/20))] grid place-items-center text-center">
              <div>
                <p className="text-xs font-semibold uppercase tracking-widest text-primary">Location</p>
                <h3 className="mt-2 font-display text-2xl">Balmoral Hall, Lagos</h3>
                <p className="mt-1 text-sm text-muted-foreground">Google Map embed can be added here</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
