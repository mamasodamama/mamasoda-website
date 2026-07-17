import type { ReactNode } from "react";
import { Nav } from "./Nav";
import { Footer } from "./Footer";

export function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <Nav />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}

export function CtaBand({
  title,
  sub,
  primary,
  secondary,
}: {
  title: string;
  sub?: string;
  primary: { label: string; to: string };
  secondary?: { label: string; to: string };
}) {
  return (
    <section className="bg-accent text-accent-foreground">
      <div className="mx-auto max-w-5xl px-5 py-20 text-center md:px-8">
        <h2 className="font-display text-4xl md:text-6xl">{title}</h2>
        {sub && <p className="mt-3 text-lg md:text-xl opacity-90">{sub}</p>}
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <a href={primary.to} className="rounded-full bg-cream px-7 py-4 font-bold uppercase tracking-wide text-ink shadow-pop-sm hover:-translate-y-0.5 transition">
            {primary.label}
          </a>
          {secondary && (
            <a href={secondary.to} className="rounded-full border-2 border-cream px-7 py-4 font-bold uppercase tracking-wide text-cream hover:bg-cream hover:text-ink transition">
              {secondary.label}
            </a>
          )}
        </div>
      </div>
    </section>
  );
}

export function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full bg-secondary px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-ink">
      {children}
    </span>
  );
}
