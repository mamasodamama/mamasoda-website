export function Marquee({
  items = ["Pop karo", "Chill karo"],
  variant = "primary",
}: { items?: string[]; variant?: "primary" | "accent" | "secondary" }) {
  const bg = variant === "primary" ? "bg-primary text-primary-foreground"
           : variant === "accent"  ? "bg-accent text-accent-foreground"
           : "bg-secondary text-ink";
  const row = Array.from({ length: 12 }, (_, i) => items[i % items.length]);
  return (
    <div className={`${bg} overflow-hidden border-y-4 border-ink py-4`}>
      <div className="flex whitespace-nowrap marquee-track">
        {[...row, ...row].map((t, i) => (
          <span key={i} className="mx-6 font-display text-2xl md:text-4xl uppercase inline-flex items-center gap-6">
            {t}
            <span className="text-3xl md:text-5xl">•</span>
          </span>
        ))}
      </div>
    </div>
  );
}
