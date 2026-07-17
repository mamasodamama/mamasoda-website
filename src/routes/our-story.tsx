import { createFileRoute } from "@tanstack/react-router";
import { Layout, CtaBand, Eyebrow } from "@/components/site/Layout";
import { Marquee } from "@/components/site/Marquee";

export const Route = createFileRoute("/our-story")({
  head: () => ({
    meta: [
      { title: "Our Story | Mama Soda" },
      { name: "description", content: "Where nostalgia meets fizz. The story behind Mama Soda — the OG Indian goli soda, reimagined by three decades of F&B craft." },
      { property: "og:title", content: "Our Story | Mama Soda" },
      { property: "og:description", content: "Where nostalgia meets fizz. The story behind Mama Soda." },
      { property: "og:url", content: "/our-story" },
    ],
    links: [{ rel: "canonical", href: "/our-story" }],
  }),
  component: StoryPage,
});

function StoryPage() {
  return (
    <Layout>
      <section className="grain-bg py-20 md:py-28">
        <div className="mx-auto max-w-4xl px-5 text-center md:px-8">
          <Eyebrow>Our Story</Eyebrow>
          <h1 className="mt-5 font-display text-5xl text-ink md:text-8xl leading-[0.9]">
            Where nostalgia meets <span className="text-primary">fizz.</span>
          </h1>
          <p className="mt-6 text-xl text-ink/70">Every pop has a memory. Here's ours.</p>
        </div>
      </section>

      <Marquee items={["Pop karo", "Chill karo"]} variant="accent" />

      {/* ORIGIN */}
      <section className="py-20 md:py-28">
        <div className="mx-auto grid max-w-6xl gap-10 px-5 md:grid-cols-[1fr_1.4fr] md:px-8">
          <div>
            <Eyebrow>The Origin</Eyebrow>
            <h2 className="mt-4 font-display text-4xl text-ink md:text-6xl">
              It started with a pop.
            </h2>
          </div>
          <div className="space-y-5 text-lg text-ink/80">
            <p>
              Somewhere between a hot afternoon and a roadside stall, there's a sound
              every Indian knows — the pop of the marble, the hiss of the gas, the first
              fizzy sip that made the day better. Goli soda wasn't just a drink. It was
              the reward after school, the pause in a busy market, the little thrill you
              could buy with loose change.
            </p>
            <p>
              Somewhere along the way, that pop got quieter. The stalls thinned out, the
              fizz got replaced by the same old bottles on every shelf. We thought that
              little burst of joy deserved a comeback — done right, for a whole new
              generation.
            </p>
          </div>
        </div>
      </section>

      {/* MAKER */}
      <section className="bg-primary text-primary-foreground py-20 md:py-28">
        <div className="mx-auto grid max-w-6xl gap-10 px-5 md:grid-cols-[1fr_1.4fr] md:px-8">
          <div>
            <span className="inline-flex rounded-full bg-secondary px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-ink">The Maker</span>
            <h2 className="mt-4 font-display text-4xl md:text-6xl">
              Made by hands that know flavour.
            </h2>
          </div>
          <div className="space-y-5 text-lg opacity-90">
            <p>
              Mama Soda is crafted by a maker with over three decades in the food &amp;
              beverage world — thirty years spent chasing one thing: quality that meets
              what people truly want. That experience goes into every bottle, every
              flavour, every pop.
            </p>
            <p className="font-display text-2xl text-secondary">Old-school know-how, new-school spirit.</p>
          </div>
        </div>
      </section>

      {/* VALUES */}
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-5 md:px-8">
          <Eyebrow>What we stand for</Eyebrow>
          <h2 className="mt-4 font-display text-4xl text-ink md:text-6xl">Three little words.</h2>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {[
              { t: "Nostalgia", d: "The pop, the fizz, the ritual — we're bringing back the goli soda everyone grew up loving.", bg: "bg-secondary", tx: "text-ink" },
              { t: "Fun", d: "No lectures, no fuss. Just a drink that makes you smile.", bg: "bg-accent", tx: "text-cream" },
              { t: "Variety", d: "30+ flavours and counting — there's a Mama Soda for every mood, every craving, every moment.", bg: "bg-primary", tx: "text-cream" },
            ].map(v => (
              <div key={v.t} className={`${v.bg} ${v.tx} rounded-3xl border-2 border-ink p-8 shadow-pop-sm`}>
                <h3 className="font-display text-4xl">{v.t}</h3>
                <p className="mt-3 opacity-90">{v.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* VISION */}
      <section className="bg-ink text-cream py-20 md:py-28">
        <div className="mx-auto max-w-4xl px-5 text-center md:px-8">
          <span className="inline-flex rounded-full bg-secondary px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-ink">The Vision</span>
          <h2 className="mt-5 font-display text-4xl md:text-7xl">
            We're just <span className="text-secondary">getting started.</span>
          </h2>
          <p className="mt-6 text-lg text-cream/80">
            Popping 30+ flavours — and we're only warming up. Popping our way across East
            India and beyond, Mama Soda is on a mission to put the fizz back into everyday
            moments. The first pop starts with you.
          </p>
        </div>
      </section>

      <CtaBand
        title="Come taste the nostalgia."
        sub="Explore the flavours, or say hi."
        primary={{ label: "See Flavours", to: "/flavours" }}
        secondary={{ label: "Get in Touch", to: "/contact" }}
      />
    </Layout>
  );
}
