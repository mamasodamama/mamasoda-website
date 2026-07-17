import { Link } from "@tanstack/react-router";
import { useState } from "react";
import logo from "@/assets/logo.svg";

const links = [
  { to: "/", label: "Home" },
  { to: "/our-story", label: "Our Story" },
  { to: "/flavours", label: "Flavours" },
  { to: "/manufacturing", label: "Manufacturing" },
  { to: "/contact", label: "Contact" },
] as const;

export function Nav() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 bg-cream/90 backdrop-blur border-b border-ink/10">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-3 md:px-8">
        <Link to="/" className="flex items-center gap-2" onClick={() => setOpen(false)}>
          <img src={logo} alt="Mama Soda" className="h-10 w-auto md:h-12" />
        </Link>
        <nav className="hidden items-center gap-1 md:flex">
          {links.map(l => (
            <Link
              key={l.to}
              to={l.to}
              className="rounded-full px-4 py-2 text-sm font-bold uppercase tracking-wide text-ink/80 hover:text-primary transition"
              activeProps={{ className: "rounded-full px-4 py-2 text-sm font-bold uppercase tracking-wide bg-primary text-primary-foreground" }}
              activeOptions={{ exact: true }}
            >
              {l.label}
            </Link>
          ))}
        </nav>
        <button
          className="md:hidden rounded-full bg-primary p-2 text-primary-foreground"
          onClick={() => setOpen(v => !v)}
          aria-label="Toggle menu"
        >
          <div className="w-5 h-0.5 bg-current mb-1" />
          <div className="w-5 h-0.5 bg-current mb-1" />
          <div className="w-5 h-0.5 bg-current" />
        </button>
      </div>
      {open && (
        <nav className="md:hidden border-t border-ink/10 bg-cream px-5 pb-4 pt-2">
          {links.map(l => (
            <Link
              key={l.to}
              to={l.to}
              onClick={() => setOpen(false)}
              className="block rounded-lg px-3 py-2 font-bold text-ink"
              activeProps={{ className: "block rounded-lg px-3 py-2 font-bold text-primary" }}
              activeOptions={{ exact: true }}
            >
              {l.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
