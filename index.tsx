import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Layout, CtaBand, Eyebrow } from "@/components/site/Layout";
import { Marquee } from "@/components/site/Marquee";
import { FlavourCard } from "@/components/site/FlavourCard";
import { FLAVOURS } from "@/data/flavours";
import bottle from "@/assets/bottle-hero.png";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Mama Soda | Pop karo, chill karo!" },
      { name: "description", content: "The OG Indian goli soda, reimagined. 30+ flavours and the classic marble pop. Pop karo, chill karo!" },
      { property: "og:title", content: "Mama Soda | Pop karo, chill karo!" },
      { property: "og:description", content: "The OG Indian goli soda, reimagined. 30+ flavours and the classic marble pop." },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: HomePage,
});

const teaser = FLAVOURS.slice(0, 6);

function HomePage() {
  return (
    <Layout>
      {/* HERO */}
      <section className="relative overflow-hidden grain-bg">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-5 pt-14 pb-20 md:grid-cols-2 md:px-8 md:pt-20 md:pb-28">
          <div>
            <Eyebrow>Goli Soda, Reimagined</Eyebrow>
            <h1 className="mt-5 font-display text-6xl leading-[0.9] text-ink md:text-8xl">
              Pop karo,
              <br />
              <span className="text-primary">chill karo!</span>
            </h1>
            <p className="mt-6 max-w-lg text-lg text-ink/75">
              The marble. The pop. The fizz you grew up on — back, and better than ever.
              Mama Soda brings India's favourite goli soda to a whole new generation.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link to="/flavours" className="rounded-full bg-primary px-7 py-4 font-bold uppercase tracking-wide text-primary-foreground shadow-pop-sm hover:-translate-y-0.5 transition">
                Explore Flavours
              </Link>
              <a href="#where" className="rounded-full border-2 border-ink px-7 py-4 font-bold uppercase tracking-wide text-ink hover:bg-ink hover:text-cream transition">
                Find Mama Soda
              </a>
            </div>
          </div>
          <div className="relative flex justify-center">
            <div className="absolute inset-0 -z-10 mx-auto my-auto h-[420px] w-[420px] rounded-full bg-secondary/70 blur-3xl md:h-[520px] md:w-[520px]" />
            <div className="absolute inset-0 -z-10 mx-auto my-auto h-[300px] w-[300px] rounded-full bg-accent/40 blur-3xl md:h-[380px] md:w-[380px]" />
            <motion.img
              src={bottle}
              alt="Mama Soda bottle with orange fizz splash"
              className="relative h-[440px] w-auto drop-shadow-2xl md:h-[600px] float-bottle"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, ease: "easeOut" }}
            />
          </div>
        </div>
      </section>

      <Marquee items={["Pop karo", "Chill karo"]} variant="primary" />

      {/* WHAT IS MAMA SODA */}
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-5 md:px-8">
          <div className="max-w-3xl">
            <Eyebrow>What is Mama Soda</Eyebrow>
            <h2 className="mt-4 font-display text-4xl text-ink md:text-6xl">
              The pop you remember. The fizz you crave.
            </h2>
            <p className="mt-5 text-lg text-ink/75">
              Satisfying pop of the marble and the burst of flavour — goli soda has been
              India's original street-side refresher for generations. Mama Soda takes that
              memory and does it right: bolder flavours, with the same unforgettable pop.
            </p>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            <div className="rounded-3xl border-2 border-ink bg-secondary p-8 shadow-pop-sm">
              <div className="font-display text-6xl text-ink/20">01</div>
              <h3 className="mt-2 font-display text-3xl text-ink">The marble pop</h3>
              <p className="mt-3 text-ink/80">
                Push the goli, hear the pop, chase the fizz. The ritual no ordinary
                soft drink can match.
              </p>
            </div>
            <div className="rounded-3xl border-2 border-ink bg-primary p-8 text-primary-foreground shadow-pop-sm">
              <div className="font-display text-6xl text-cream/30">02</div>
              <h3 className="mt-2 font-display text-3xl">Flavours galore</h3>
              <p className="mt-3 opacity-90">Far beyond plain soda — 30+ flavours.</p>
            </div>
          </div>
        </div>
      </section>

      {/* FLAVOUR TEASER */}
      <section className="bg-ink text-cream py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <Eyebrow>The Lineup</Eyebrow>
              <h2 className="mt-4 font-display text-4xl md:text-6xl">Flavours for every mood.</h2>
              <p className="mt-3 text-cream/70 max-w-xl">Popping 30+ flavours, one for each life occasion.</p>
            </div>
            <Link to="/flavours" className="rounded-full bg-secondary px-6 py-3 font-bold uppercase tracking-wide text-ink hover:-translate-y-0.5 transition">
              See All Flavours →
            </Link>
          </div>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {teaser.map((f, i) => <FlavourCard key={f.name} flavour={f} index={i} />)}
          </div>
        </div>
      </section>

      {/* TRUST */}
      <section className="py-20 md:py-28">
        <div className="mx-auto grid max-w-6xl gap-10 px-5 md:grid-cols-2 md:px-8 items-center">
          <div>
            <Eyebrow>Authenticity</Eyebrow>
            <h2 className="mt-4 font-display text-4xl text-ink md:text-6xl">Nostalgia you can trust.</h2>
            <p className="mt-5 text-lg text-ink/75">
              Street-side charm, made the right way. Every bottle of Mama Soda is produced
              under strict hygiene standards — crafted by hands that have shaped flavours in
              the food &amp; beverage world for over three decades. Old-school taste, made
              with new-school care.
            </p>
            <Link to="/manufacturing" className="mt-8 inline-flex rounded-full bg-primary px-7 py-4 font-bold uppercase tracking-wide text-primary-foreground shadow-pop-sm">
              See how it's made →
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {[
              { k: "30+", v: "Years of F&B craft" },
              { k: "32", v: "Flavours & counting" },
              { k: "100%", v: "Marble-pop authentic" },
              { k: "0", v: "Shortcuts taken" },
            ].map(s => (
              <div key={s.k} className="rounded-3xl border-2 border-ink bg-cream p-6 text-center shadow-pop-sm">
                <div className="font-display text-5xl text-primary">{s.k}</div>
                <div className="mt-1 text-sm font-semibold text-ink/70">{s.v}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Marquee items={["Pop karo", "Chill karo", "Fizz on"]} variant="secondary" />

      {/* INSTAGRAM */}
      <section className="py-20 md:py-24">
        <div className="mx-auto max-w-4xl px-5 text-center md:px-8">
          <Eyebrow>@mamasodaco</Eyebrow>
          <h2 className="mt-4 font-display text-4xl text-ink md:text-6xl">Join the pop culture.</h2>
          <p className="mt-4 text-lg text-ink/70">
            Follow @mamasodaco for flavours, drops and desi soda nostalgia.
          </p>
          <a
            href="https://instagram.com/mamasodaco"
            target="_blank"
            rel="noreferrer"
            className="mt-8 inline-flex rounded-full bg-accent px-7 py-4 font-bold uppercase tracking-wide text-accent-foreground shadow-pop-sm"
          >
            @mamasodaco →
          </a>
        </div>
      </section>

      {/* WHERE */}
      <section id="where" className="bg-secondary py-20 md:py-28">
        <div className="mx-auto max-w-4xl px-5 text-center md:px-8">
          <Eyebrow>Now stocking</Eyebrow>
          <h2 className="mt-4 font-display text-4xl text-ink md:text-6xl">Now popping near you.</h2>
          <p className="mt-4 text-lg text-ink/80">
            Mama Soda is present in your neighbourhood — find us at paan shops, kirana stores,
            hotels, restaurants and events.
          </p>
          <Link to="/contact" className="mt-8 inline-flex rounded-full bg-ink px-7 py-4 font-bold uppercase tracking-wide text-cream">
            Ask where to find us →
          </Link>
        </div>
      </section>

      {/* HORECA */}
      <section className="py-20 md:py-28">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-5 md:grid-cols-[1.2fr_1fr] md:px-8">
          <div>
            <Eyebrow>HoReCa Partnership</Eyebrow>
            <h2 className="mt-4 font-display text-4xl text-ink md:text-6xl">
              Run a café, bar or restaurant?
            </h2>
            <p className="mt-5 text-lg text-ink/75">
              Bring the pop to your menu. We offer customised packaging and partner pricing
              for cafés, bars, restaurants and events across the region.
            </p>
            <Link to="/contact" className="mt-8 inline-flex rounded-full bg-primary px-7 py-4 font-bold uppercase tracking-wide text-primary-foreground shadow-pop-sm">
              Partner with us →
            </Link>
          </div>
          <div className="rounded-3xl border-2 border-ink bg-accent p-10 text-accent-foreground shadow-pop">
            <div className="font-display text-7xl md:text-8xl leading-none">Menu ready.</div>
            <div className="mt-3 text-lg opacity-90">Custom packaging, partner pricing, delivered across East India.</div>
          </div>
        </div>
      </section>

      <CtaBand
        title="Ready to pop one open?"
        sub="Explore the flavours, or come say hi."
        primary={{ label: "See Flavours", to: "/flavours" }}
        secondary={{ label: "Get in Touch", to: "/contact" }}
      />
    </Layout>
  );
}
