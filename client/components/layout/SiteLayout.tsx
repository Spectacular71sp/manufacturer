import { Link, NavLink, Outlet } from "react-router-dom";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { Menu, X, ArrowRight, Facebook, Twitter, Instagram, Youtube } from "lucide-react";

const navItems = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Exhibit", to: "/exhibit" },
  { label: "Exhibition", to: "/exhibition" },
  { label: "Sponsor", to: "/sponsor" },
  { label: "Recent Memories", to: "/recent-memories" },
];

function SiteHeader() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-40 w-full backdrop-blur supports-[backdrop-filter]:bg-white/70 bg-white/90 dark:bg-background/60 border-b border-border">
      <div className="container flex h-16 items-center justify-between">
        <Link to="/" className="flex items-center gap-3">
          <img src="https://cdn.builder.io/api/v1/image/assets%2F5c8403a2bf35488089d7cfb848ab6544%2F909dd82d217647ad933c86e807adba4b?format=webp&width=800" alt="Manufacturers Energy Security & Energy Efficiency Summit logo" className="h-8 w-auto" />
        </Link>

        <nav className="hidden md:flex items-center gap-6">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                cn(
                  "text-sm font-medium transition-colors hover:text-primary",
                  isActive ? "text-primary" : "text-foreground/80",
                )
              }
            >
              {item.label}
            </NavLink>
          ))}
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 rounded-full bg-primary px-4 py-2 text-primary-foreground shadow-md hover:bg-primary/90"
          >
            Contact Us <ArrowRight className="h-4 w-4" />
          </Link>
        </nav>

        <button
          className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-md border border-border"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle Menu"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden border-t border-border bg-white/95 dark:bg-background/80">
          <div className="container py-3 flex flex-col gap-2">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  cn(
                    "rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-accent",
                    isActive ? "text-primary" : "text-foreground/80",
                  )
                }
              >
                {item.label}
              </NavLink>
            ))}
            <Link
              to="/contact"
              onClick={() => setOpen(false)}
              className="mt-1 inline-flex items-center justify-center gap-2 rounded-full bg-primary px-4 py-2 text-primary-foreground shadow-md hover:bg-primary/90"
            >
              Contact Us <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}

function SiteFooter() {
  return (
    <footer className="border-t border-border bg-gradient-to-b from-background to-muted/60">
      <div className="container py-12 grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <div className="flex items-center gap-3">
            <img src="https://cdn.builder.io/api/v1/image/assets%2F5c8403a2bf35488089d7cfb848ab6544%2F909dd82d217647ad933c86e807adba4b?format=webp&width=800" alt="Manufacturers Energy Security & Energy Efficiency Summit logo" className="h-8 w-auto" />
            <span className="font-display text-sm md:text-base tracking-tight">Manufacturers Energy Security & Energy Efficiency Summit</span>
          </div>
          <p className="mt-4 text-sm text-muted-foreground max-w-xs">
            Driving sustainable manufacturing across West Africa with technology, partnerships, and innovation.
          </p>
          <div className="mt-4 flex items-center gap-3 text-foreground/70">
            <a aria-label="Facebook" href="#" className="hover:text-primary"><Facebook className="h-4 w-4"/></a>
            <a aria-label="Twitter" href="#" className="hover:text-primary"><Twitter className="h-4 w-4"/></a>
            <a aria-label="Instagram" href="#" className="hover:text-primary"><Instagram className="h-4 w-4"/></a>
            <a aria-label="YouTube" href="#" className="hover:text-primary"><Youtube className="h-4 w-4"/></a>
          </div>
        </div>
        <div>
          <h4 className="font-semibold mb-3">Event</h4>
          <ul className="space-y-2 text-sm text-foreground/80">
            <li><Link to="/about" className="hover:text-primary">About</Link></li>
            <li><Link to="/exhibit" className="hover:text-primary">Exhibit</Link></li>
            <li><Link to="/exhibition" className="hover:text-primary">Exhibition</Link></li>
            <li><Link to="/sponsor" className="hover:text-primary">Sponsor</Link></li>
            <li><Link to="/recent-memories" className="hover:text-primary">Recent Memories</Link></li>
            <li><Link to="/contact" className="hover:text-primary">Contact</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-3">Visit</h4>
          <ul className="space-y-2 text-sm text-foreground/80">
            <li>Balmoral Hall, Lagos</li>
            <li>5 – 7 August, 2025</li>
            <li>09:00 – 18:00 (Daily)</li>
            <li><a href="#map" className="hover:text-primary">View on map</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-3">Contact</h4>
          <ul className="space-y-2 text-sm text-foreground/80">
            <li><a href="mailto:info@manufacturersenergysecuritysummit.org" className="hover:text-primary">info@manufacturersenergysecuritysummit.org</a></li>
            <li><a href="mailto:exhibit@manufacturersenergysecuritysummit.org" className="hover:text-primary">exhibit@manufacturersenergysecuritysummit.org</a></li>
            <li><a href="mailto:partners@manufacturersenergysecuritysummit.org" className="hover:text-primary">partners@manufacturersenergysecuritysummit.org</a></li>
            <li><a href="tel:+234000000000" className="hover:text-primary">+234 000 000 000</a></li>
          </ul>
          <form className="mt-4 flex items-center gap-2">
            <input
              type="email"
              placeholder="Subscribe for updates"
              className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            />
            <button type="submit" className="rounded-md bg-secondary px-3 py-2 text-secondary-foreground text-sm font-medium hover:bg-secondary/90">
              Join
            </button>
          </form>
        </div>
      </div>
      <div className="border-t border-border">
        <div className="container py-4 text-xs text-muted-foreground flex items-center justify-between">
          <p>© {new Date().getFullYear()} Manufacturers Energy Security & Energy Efficiency Summit. All rights reserved.</p>
          <p>Made with passion for events.</p>
        </div>
      </div>
    </footer>
  );
}

export default function SiteLayout() {
  return (
    <div className="min-h-dvh flex flex-col">
      <SiteHeader />
      <main className="flex-1">
        <Outlet />
      </main>
      <SiteFooter />
    </div>
  );
}
