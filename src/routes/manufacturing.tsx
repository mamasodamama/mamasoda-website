import { createFileRoute } from "@tanstack/react-router";
import { Layout, Eyebrow } from "@/components/site/Layout";

export const Route = createFileRoute("/manufacturing")({
  head: () => ({
    meta: [
      { title: "Manufacturing Details | Mama Soda" },
      { name: "description", content: "Find the manufacturing details for your bottle of Mama Soda. Refer to the first two letters of the batch number." },
      { property: "og:title", content: "Manufacturing Details | Mama Soda" },
      { property: "og:description", content: "Manufacturing details for your bottle of Mama Soda." },
      { property: "og:url", content: "/manufacturing" },
    ],
    links: [{ rel: "canonical", href: "/manufacturing" }],
  }),
  component: ManufacturingPage,
});

const UNITS = [
  {
    sr: 1,
    prefix: "SA",
    unit: "Shree Aum Beverages",
    address: "Cart Sarai Road, Upper Bazar, Ranchi – 834001 (Jharkhand)",
    fssai: "12345678910123",
  },
  {
    sr: 2,
    prefix: "PZ",
    unit: "Popzo Foods and Beverages",
    address: "83, P N Malia Road, K G Corner, Raniganj – 713347 (West Bengal)",
    fssai: "12825023000184",
  },
];

function ManufacturingPage() {
  return (
    <Layout>
      <section className="grain-bg py-20 md:py-24">
        <div className="mx-auto max-w-4xl px-5 md:px-8">
          <Eyebrow>Transparency</Eyebrow>
          <h1 className="mt-5 font-display text-5xl text-ink md:text-7xl leading-[0.9]">
            Manufacturing Details
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-ink/75">
            Know exactly where your Mama Soda was made. For the manufacturing details,
            refer to the first two letters of the batch number printed on your pack, and
            find the match below.
          </p>
        </div>
      </section>

      <section className="py-14 md:py-20">
        <div className="mx-auto max-w-5xl px-5 md:px-8">
          {/* Desktop table */}
          <div className="hidden overflow-hidden rounded-3xl border-2 border-ink shadow-pop-sm md:block">
            <table className="w-full text-left">
              <thead className="bg-ink text-cream text-sm uppercase tracking-widest">
                <tr>
                  <th className="px-5 py-4 w-12">Sr.</th>
                  <th className="px-5 py-4 w-24">Prefix</th>
                  <th className="px-5 py-4">Manufacturing Unit Details</th>
                  <th className="px-5 py-4 w-56">FSSAI Licence No.</th>
                </tr>
              </thead>
              <tbody className="divide-y-2 divide-ink/10 bg-cream">
                {UNITS.map(u => (
                  <tr key={u.prefix} className="align-top">
                    <td className="px-5 py-6 text-ink/60 font-mono">{u.sr}</td>
                    <td className="px-5 py-6">
                      <span className="inline-flex rounded-lg bg-primary px-3 py-1 font-mono font-bold text-lg text-primary-foreground">
                        {u.prefix}
                      </span>
                    </td>
                    <td className="px-5 py-6">
                      <div className="font-bold text-ink">{u.unit}</div>
                      <div className="mt-1 text-ink/70">{u.address}</div>
                    </td>
                    <td className="px-5 py-6 font-mono text-ink">{u.fssai}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Mobile stacked */}
          <div className="grid gap-4 md:hidden">
            {UNITS.map(u => (
              <div key={u.prefix} className="rounded-2xl border-2 border-ink bg-cream p-5 shadow-pop-sm">
                <div className="flex items-center justify-between">
                  <span className="text-xs uppercase tracking-widest text-ink/60">Sr. {u.sr}</span>
                  <span className="rounded-lg bg-primary px-3 py-1 font-mono font-bold text-primary-foreground">
                    {u.prefix}
                  </span>
                </div>
                <div className="mt-3 font-bold text-ink">{u.unit}</div>
                <div className="mt-1 text-sm text-ink/70">{u.address}</div>
                <div className="mt-3 border-t border-ink/10 pt-3">
                  <span className="text-xs uppercase tracking-widest text-ink/60">FSSAI</span>
                  <div className="font-mono text-ink">{u.fssai}</div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 rounded-2xl border-2 border-dashed border-ink/30 bg-secondary/40 p-6 text-center">
            <p className="text-ink/80">
              Questions about a specific batch? Write to us at{" "}
              <a href="mailto:support@mamasoda.com" className="font-bold text-primary underline">
                support@mamasoda.com
              </a>
              .
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
}
