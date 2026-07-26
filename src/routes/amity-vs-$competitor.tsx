import { createFileRoute, notFound, Link } from "@tanstack/react-router";
import {
  SiteHeader,
  SiteFooter,
  Breadcrumb,
  CounselingModal,
  useModalTrigger,
  StickyActionBar,
  PopularSearches,
  SeoFaq,
  LeadFormCompact,
} from "@/components/site";
import { findCompetitor, amity, competitors } from "@/lib/amity";
import { CheckCircle2, X } from "lucide-react";

const canonicalFor = (slug: string) => `/amity-vs-${slug}`;

export const Route = createFileRoute("/amity-vs-$competitor")({
  loader: ({ params }) => {
    const rival = findCompetitor(params.competitor.toLowerCase());
    if (!rival) throw notFound();
    return { rival };
  },
  head: ({ loaderData, params }) => {
    const r = loaderData?.rival;
    const title = r
      ? `Amity Online vs ${r.name} 2026 — Fees, Accreditation & Placement Compared`
      : "Amity Online Comparison";
    const desc = r
      ? `Amity Online vs ${r.name} — compare NAAC, UGC entitlement, MBA and BBA fees, placements and career support to pick the right online university in 2026.`
      : "";
    const canonical = canonicalFor(params.competitor);
    return {
      meta: [
        { title },
        { name: "description", content: desc },
        { property: "og:title", content: title },
        { property: "og:description", content: desc },
        { property: "og:url", content: canonical },
        { property: "og:type", content: "article" },
      ],
      links: [{ rel: "canonical", href: canonical }],
    };
  },
  component: Page,
  notFoundComponent: () => (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main className="mx-auto max-w-3xl px-4 py-24 text-center">
        <h1 className="text-3xl font-bold text-foreground">Comparison not available</h1>
        <p className="mt-3 text-muted-foreground">Try a different university comparison.</p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          {competitors.map((c) => (
            <Link key={c.slug} to="/amity-vs-$competitor" params={{ competitor: c.slug }} className="rounded-full border border-border bg-card px-4 py-2 text-sm font-semibold text-foreground hover:border-primary hover:text-primary">
              Amity vs {c.name}
            </Link>
          ))}
        </div>
      </main>
      <SiteFooter />
    </div>
  ),
});

function Row({ label, amity: a, rival: r, amityWin }: { label: string; amity: string; rival: string; amityWin: boolean }) {
  return (
    <tr className="border-t border-border">
      <td className="p-4 text-sm font-semibold text-foreground">{label}</td>
      <td className="p-4 text-sm text-foreground">
        <div className="flex items-center gap-2">
          {amityWin ? <CheckCircle2 className="h-4 w-4 text-primary" /> : null}
          <span>{a}</span>
        </div>
      </td>
      <td className="p-4 text-sm text-muted-foreground">{r}</td>
    </tr>
  );
}

function Page() {
  const { rival } = Route.useLoaderData();
  const { open, setOpen } = useModalTrigger();
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <Breadcrumb items={[{ label: "Compare", to: "/compare-universities" }, { label: `Amity vs ${rival.name}` }]} />
      <main>
        <section
          className="py-12 sm:py-16"
          style={{
            backgroundImage:
              "linear-gradient(135deg, color-mix(in oklab, var(--primary) 10%, transparent), transparent 60%)",
          }}
        >
          <div className="mx-auto grid max-w-7xl items-start gap-10 px-4 sm:px-6 lg:grid-cols-[1fr_380px] lg:px-8">
            <div>
              <h1 className="text-3xl font-bold text-foreground sm:text-4xl lg:text-5xl">
                Amity Online <span className="text-primary">vs</span> {rival.name}
              </h1>
              <p className="mt-4 max-w-2xl text-base text-muted-foreground sm:text-lg">
                A side-by-side comparison of Amity Online and {rival.name} on accreditation, fees, placement
                support and student experience — updated for 2026 admissions.
              </p>
            </div>
            <div className="lg:sticky lg:top-24"><LeadFormCompact /></div>
          </div>
        </section>

        <section className="bg-background py-14">
          <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
            <div className="overflow-hidden rounded-2xl border border-border">
              <table className="w-full">
                <thead className="bg-secondary">
                  <tr>
                    <th className="p-4 text-left text-xs font-bold uppercase tracking-wide text-muted-foreground">Criteria</th>
                    <th className="p-4 text-left text-xs font-bold uppercase tracking-wide text-primary">Amity Online</th>
                    <th className="p-4 text-left text-xs font-bold uppercase tracking-wide text-muted-foreground">{rival.name}</th>
                  </tr>
                </thead>
                <tbody className="bg-card">
                  <Row label="NAAC" amity="A+" rival={rival.naac} amityWin={rival.naac !== "A++"} />
                  <Row label="UGC Recognition" amity="UGC-DEB Entitled" rival={rival.ugc} amityWin />
                  <Row label="Established" amity="2005" rival={rival.established} amityWin={false} />
                  <Row label="Online MBA Fees" amity="₹2,50,000" rival={rival.feeMba} amityWin={false} />
                  <Row label="Online BBA Fees" amity="₹1,80,000" rival={rival.feeBba} amityWin={false} />
                  <Row label="Career Services" amity="Dedicated, industry connect" rival="Basic" amityWin />
                  <Row label="EMI" amity="No-cost EMI" rival="Case-by-case" amityWin />
                </tbody>
              </table>
            </div>

            <div className="mt-8 grid gap-6 sm:grid-cols-2">
              <div className="rounded-2xl border border-primary/30 bg-primary/5 p-6">
                <h3 className="text-lg font-bold text-primary">Why Amity Online wins</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  UGC-DEB entitled online degrees, WES international recognition, dedicated career services and
                  no-cost EMI make Amity Online a strong choice over {rival.name} for working professionals.
                </p>
              </div>
              <div className="rounded-2xl border border-border bg-card p-6">
                <h3 className="text-lg font-bold text-foreground">Where {rival.name} shines</h3>
                <p className="mt-2 text-sm text-muted-foreground">{rival.highlight}</p>
                <p className="mt-2 inline-flex items-start gap-2 text-xs text-muted-foreground">
                  <X className="mt-0.5 h-3.5 w-3.5 text-destructive" /> {rival.weakness}
                </p>
              </div>
            </div>

            <div className="mt-10 flex flex-wrap gap-3">
              <Link to="/amity-online-courses" className="inline-flex items-center gap-2 rounded-md bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-[var(--shadow-brand)] transition hover:opacity-90">
                Explore Amity Online Courses
              </Link>
              <Link to="/compare-universities" className="inline-flex items-center gap-2 rounded-md border border-border bg-background px-6 py-3 text-sm font-semibold text-foreground transition hover:bg-accent">
                All comparisons
              </Link>
            </div>
          </div>
        </section>

        <SeoFaq items={amity.faqs} />
        <PopularSearches />
      </main>
      <SiteFooter />
      <StickyActionBar />
      <CounselingModal open={open} onClose={() => setOpen(false)} />
    </div>
  );
}
