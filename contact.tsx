import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Layout, Eyebrow } from "@/components/site/Layout";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact | Mama Soda" },
      { name: "description", content: "Get in touch with Mama Soda — for stockist enquiries, HoReCa partnerships, or just to say hi." },
      { property: "og:title", content: "Contact | Mama Soda" },
      { property: "og:description", content: "Get in touch with Mama Soda." },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: ContactPage,
});

const REASONS = ["General", "Where to buy", "HoReCa partnership", "Feedback"] as const;

function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", reason: REASONS[0] as string, message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`[${form.reason}] Mama Soda enquiry from ${form.name || "website"}`);
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\nReason: ${form.reason}\n\n${form.message}`
    );
    window.location.href = `mailto:support@mamasoda.com?subject=${subject}&body=${body}`;
  };

  return (
    <Layout>
      <section className="grain-bg py-20 md:py-24">
        <div className="mx-auto max-w-4xl px-5 text-center md:px-8">
          <Eyebrow>Get In Touch</Eyebrow>
          <h1 className="mt-5 font-display text-5xl text-ink md:text-8xl leading-[0.9]">
            Say hi, we're <span className="text-primary">listening.</span>
          </h1>
          <p className="mt-6 text-lg text-ink/75">
            Stockist enquiries, café &amp; restaurant partnerships, feedback, or just a
            shout-out — drop us a line.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto grid max-w-6xl gap-10 px-5 md:grid-cols-[1.3fr_1fr] md:px-8">
          {/* FORM */}
          <form onSubmit={handleSubmit} className="rounded-3xl border-2 border-ink bg-cream p-8 shadow-pop-sm md:p-10">
            <div className="grid gap-5 md:grid-cols-2">
              <label className="block">
                <span className="text-xs font-bold uppercase tracking-widest text-ink/70">Name</span>
                <input
                  required
                  value={form.name}
                  onChange={e => setForm({ ...form, name: e.target.value })}
                  className="mt-2 w-full rounded-xl border-2 border-ink/20 bg-white px-4 py-3 focus:border-primary focus:outline-none"
                  placeholder="Your name"
                />
              </label>
              <label className="block">
                <span className="text-xs font-bold uppercase tracking-widest text-ink/70">Email</span>
                <input
                  required
                  type="email"
                  value={form.email}
                  onChange={e => setForm({ ...form, email: e.target.value })}
                  className="mt-2 w-full rounded-xl border-2 border-ink/20 bg-white px-4 py-3 focus:border-primary focus:outline-none"
                  placeholder="you@example.com"
                />
              </label>
            </div>
            <label className="block mt-5">
              <span className="text-xs font-bold uppercase tracking-widest text-ink/70">I'm reaching out about</span>
              <select
                value={form.reason}
                onChange={e => setForm({ ...form, reason: e.target.value })}
                className="mt-2 w-full rounded-xl border-2 border-ink/20 bg-white px-4 py-3 focus:border-primary focus:outline-none"
              >
                {REASONS.map(r => <option key={r} value={r}>{r}</option>)}
              </select>
            </label>
            <label className="block mt-5">
              <span className="text-xs font-bold uppercase tracking-widest text-ink/70">Message</span>
              <textarea
                required
                rows={5}
                value={form.message}
                onChange={e => setForm({ ...form, message: e.target.value })}
                className="mt-2 w-full rounded-xl border-2 border-ink/20 bg-white px-4 py-3 focus:border-primary focus:outline-none"
                placeholder="Tell us what's on your mind"
              />
            </label>
            <button
              type="submit"
              className="mt-6 w-full rounded-full bg-primary px-7 py-4 font-bold uppercase tracking-wide text-primary-foreground shadow-pop-sm hover:-translate-y-0.5 transition"
            >
              Send Message
            </button>
            <p className="mt-3 text-xs text-ink/60 text-center">
              This opens your email app to send us your message.
            </p>
          </form>

          {/* SIDEBAR */}
          <div className="space-y-5">
            <a href="mailto:support@mamasoda.com" className="block rounded-2xl border-2 border-ink bg-secondary p-6 shadow-pop-sm hover:-translate-y-0.5 transition">
              <div className="text-xs font-bold uppercase tracking-widest text-ink/70">Email</div>
              <div className="mt-1 font-display text-2xl text-ink">support@mamasoda.com</div>
            </a>
            <a href="https://instagram.com/mamasodaco" target="_blank" rel="noreferrer" className="block rounded-2xl border-2 border-ink bg-accent p-6 text-accent-foreground shadow-pop-sm hover:-translate-y-0.5 transition">
              <div className="text-xs font-bold uppercase tracking-widest opacity-80">Instagram</div>
              <div className="mt-1 font-display text-2xl">@mamasodaco</div>
            </a>
            <div className="rounded-2xl border-2 border-ink bg-primary p-6 text-primary-foreground shadow-pop-sm">
              <h2 className="font-display text-2xl">Cafés, bars &amp; restaurants</h2>
              <p className="mt-2 text-sm opacity-90">
                Want Mama Soda on your menu? We offer customised packaging and partner
                pricing across the region. Select "HoReCa partnership" in the form, or
                write to us directly — we'll get back fast.
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
