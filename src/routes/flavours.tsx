import { createFileRoute } from "@tanstack/react-router";
import { Layout, CtaBand, Eyebrow } from "@/components/site/Layout";
import { Marquee } from "@/components/site/Marquee";
import { FlavourCard } from "@/components/site/FlavourCard";
import { FLAVOURS } from "@/data/flavours";

export const Route = createFileRoute("/flavours")({
  head: () => ({
    meta: [
      { title: "Flavours | Mama Soda" },
      { name: "description", content: "32 goli soda flavours — from Mama Zeera, Kala Khatta and Nimbu Masala to Lychee, Mango and Cola. Pick your pop. Pop karo, chill karo!" },
      { property: "og:title", content: "Flavours | Mama Soda" },
      { property: "og:description", content: "32 goli soda flavours — pick your pop." },
      { property: "og:url", content: "/flavours" },
    ],
    links: [{ rel: "canonical", href: "/flavours" }],
  }),
  component: FlavoursPage,
});

function FlavoursPage() {
  return (
    <Layout>
      <section className="grain-bg py-20 md:py-24">
        <div className="mx-auto max-w-5xl px-5 text-center md:px-8">
          <Eyebrow>The Lineup</Eyebrow>
          <h1 className="mt-5 font-display text-6xl text-ink md:text-9xl leading-[0.85]">
            Pick your <span className="text-primary">pop.</span>
          </h1>
          <p className="mt-6 text-lg text-ink/75 md:text-xl">
            From desi classics to fruity favourites — 32 goli soda flavours, one for every
            mood and moment.
          </p>
          <p className="mt-3 text-sm font-semibold uppercase tracking-widest text-ink/60">
            Available in classic glass with the marble pop, and grab-and-go PET.
          </p>
        </div>
      </section>

      <Marquee items={["32 Flavours", "Pop karo", "Chill karo"]} variant="primary" />

      <section className="py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {FLAVOURS.map((f, i) => <FlavourCard key={f.name} flavour={f} index={i} />)}
          </div>
        </div>
      </section>

      <section className="bg-accent text-accent-foreground py-16">
        <div className="mx-auto max-w-4xl px-5 text-center md:px-8">
          <h2 className="font-display text-4xl md:text-6xl">Many more popping soon.</h2>
          <p className="mt-3 opacity-90">New flavours drop when the mood hits. Watch this space.</p>
        </div>
      </section>

      <CtaBand
        title="Found your favourite?"
        sub="Come find Mama Soda near you."
        primary={{ label: "Where to Find Us", to: "/contact" }}
        secondary={{ label: "Our Story", to: "/our-story" }}
      />
    </Layout>
  );
}
