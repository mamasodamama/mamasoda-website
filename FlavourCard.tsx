import type { Flavour } from "@/data/flavours";

export function FlavourCard({ flavour, index }: { flavour: Flavour; index: number }) {
  const textCls = flavour.text === "light" ? "text-cream" : "text-ink";
  return (
    <article
      className="group relative overflow-hidden rounded-3xl border-2 border-ink p-6 shadow-pop-sm transition hover:-translate-y-1 hover:shadow-pop"
      style={{ backgroundColor: flavour.color }}
    >
      <div className={`flex items-center justify-between ${textCls}`}>
        <span className="font-display text-xl opacity-70">{String(index + 1).padStart(2, "0")}</span>
        <div className="h-10 w-10 rounded-full border-2 border-current flex items-center justify-center text-xs font-bold">
          POP
        </div>
      </div>
      <h3 className={`mt-16 font-display text-3xl leading-none ${textCls}`}>{flavour.name}</h3>
      <p className={`mt-3 text-sm leading-relaxed ${textCls} opacity-90`}>{flavour.desc}</p>
      <div
        className="pointer-events-none absolute -bottom-10 -right-10 h-32 w-32 rounded-full opacity-20 blur-2xl"
        style={{ backgroundColor: flavour.text === "light" ? "#fff" : "#000" }}
      />
    </article>
  );
}
