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
import { allCourses, amity, seoFeeYears } from "@/lib/amity";
import { IndianRupee, ChevronRight } from "lucide-react";

const canonicalFor = (year: string) => `/amity-online-fees-${year}`;

export const Route = createFileRoute("/amity-online-fees-$year")({
  loader: ({ params }) => {
    if (!seoFeeYears.includes(params.year)) throw notFound();
    return { year: params.year };
  },
  head: ({ loaderData, params }) => {
    const y = loaderData?.year ?? params.year;
    const title = `Amity Online Fees ${y} — Course-wise Fee Structure, EMI & Scholarships`;
    const desc = `Amity Online fees ${y} for BBA, BCA, B.Com, BA, MBA, MCA, M.Com and MA — full fee, per-semester breakdown, no-cost EMI and scholarship options.`;
    const canonical = canonicalFor(y);
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
});

function Page() {
  const { year } = Route.useLoaderData();
  const { open, setOpen } = useModalTrigger();
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <Breadcrumb items={[{ label: "Fees", to: "/amity-online-fees" }, { label: year }]} />
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
                Amity Online Fees {year}
              </h1>
              <p className="mt-4 max-w-2xl text-base text-muted-foreground sm:text-lg">
                Complete course-wise fee structure for Amity University Online admissions {year} — full fee,
                per-semester payment, no-cost EMI and available scholarships.
              </p>
            </div>
            <div className="lg:sticky lg:top-24"><LeadFormCompact /></div>
          </div>
        </section>

        <section className="bg-background py-14">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <h2 className="flex items-center gap-2 text-2xl font-bold text-foreground sm:text-3xl">
              <IndianRupee className="h-7 w-7 text-primary" /> Course-wise Fee Structure {year}
            </h2>
            <div className="mt-6 overflow-hidden rounded-2xl border border-border">
              <table className="w-full">
                <thead className="bg-secondary">
                  <tr>
                    <th className="p-4 text-left text-xs font-bold uppercase tracking-wide text-muted-foreground">Program</th>
                    <th className="p-4 text-left text-xs font-bold uppercase tracking-wide text-muted-foreground">Duration</th>
                    <th className="p-4 text-left text-xs font-bold uppercase tracking-wide text-muted-foreground">Total Fee ({year})</th>
                    <th className="p-4 text-left text-xs font-bold uppercase tracking-wide text-muted-foreground">Per Semester</th>
                    <th className="p-4 text-left text-xs font-bold uppercase tracking-wide text-muted-foreground">EMI</th>
                    <th className="p-4 text-left text-xs font-bold uppercase tracking-wide text-muted-foreground"></th>
                  </tr>
                </thead>
                <tbody className="bg-card">
                  {allCourses.map((c) => (
                    <tr key={c.slug} className="border-t border-border">
                      <td className="p-4 text-sm font-semibold text-foreground">{c.name}</td>
                      <td className="p-4 text-sm text-muted-foreground">{c.duration}</td>
                      <td className="p-4 text-sm font-bold text-primary">{c.feesBreakdown.fullFees}</td>
                      <td className="p-4 text-sm text-foreground">{c.feesBreakdown.perSemester}</td>
                      <td className="p-4 text-sm text-foreground">{c.feesBreakdown.emi}</td>
                      <td className="p-4">
                        <Link to="/courses/$slug" params={{ slug: c.slug }} className="inline-flex items-center gap-1 text-sm font-semibold text-primary hover:underline">
                          Details <ChevronRight className="h-4 w-4" />
                        </Link>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl border border-primary/30 bg-primary/5 p-6">
                <h3 className="text-lg font-bold text-primary">No-Cost EMI ({year})</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  Split your Amity Online fees into easy monthly payments with zero interest through partner NBFCs.
                </p>
              </div>
              <div className="rounded-2xl border border-border bg-card p-6">
                <h3 className="text-lg font-bold text-foreground">Scholarships available in {year}</h3>
                <ul className="mt-2 space-y-1 text-sm text-muted-foreground">
                  {amity.scholarships.slice(0, 4).map((s) => (
                    <li key={s} className="flex items-start gap-2"><ChevronRight className="mt-0.5 h-4 w-4 shrink-0 text-primary" />{s}</li>
                  ))}
                </ul>
              </div>
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
