import { createFileRoute } from "@tanstack/react-router";
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
import { amity } from "@/lib/amity";
import { CheckCircle2 } from "lucide-react";

const CANONICAL = "/compare-universities";

const rows: { label: string; amity: string; manipal: string; lpu: string }[] = [
  { label: "NAAC Grade", amity: "A+", manipal: "A+", lpu: "A++" },
  { label: "UGC Entitlement", amity: "Yes", manipal: "Yes", lpu: "Yes" },
  { label: "Ranked Position", amity: "India's No. #1 Online", manipal: "Top online brand", lpu: "Top private university" },
  { label: "Online MBA Fee (Total)", amity: "₹2,50,000", manipal: "₹1,66,000", lpu: "₹1,70,000" },
  { label: "EMI Available", amity: "No-Cost EMI", manipal: "EMI", lpu: "EMI" },
  { label: "Placement Cell", amity: "Yes · Dedicated", manipal: "Yes", lpu: "Yes" },
  { label: "LMS Access", amity: "24×7", manipal: "24×7", lpu: "24×7" },
  { label: "International Recognition", amity: "WES Recognised", manipal: "WES Recognised", lpu: "WES Recognised" },
];

export const Route = createFileRoute("/compare-universities")({
  head: () => ({
    meta: [
      { title: "Compare Online Universities 2026 — Amity vs Manipal vs LPU" },
      { name: "description", content: "Compare Amity Online with Manipal Online and LPU Online — accreditation, ranking, fees, EMI, placements and LMS side by side." },
      { property: "og:title", content: "Compare Online Universities 2026" },
      { property: "og:description", content: "Amity vs Manipal vs LPU — side-by-side comparison." },
      { property: "og:url", content: CANONICAL },
      { property: "og:type", content: "article" },
    ],
    links: [{ rel: "canonical", href: CANONICAL }],
    scripts: [{
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "ItemList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Amity Online" },
          { "@type": "ListItem", position: 2, name: "Manipal Online" },
          { "@type": "ListItem", position: 3, name: "LPU Online" },
        ],
      }),
    }],
  }),
  component: Page,
});

function Page() {
  const { open, setOpen } = useModalTrigger();
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <Breadcrumb items={[{ label: "Compare Universities" }]} />
      <main>
        <section
          className="py-12 sm:py-16"
          style={{ backgroundImage: "linear-gradient(135deg, color-mix(in oklab, var(--primary) 10%, transparent), transparent 60%)" }}
        >
          <div className="mx-auto grid max-w-7xl items-start gap-10 px-4 sm:px-6 lg:grid-cols-[1fr_380px] lg:px-8">
            <div>
              <h1 className="text-3xl font-bold text-foreground sm:text-4xl lg:text-5xl">Compare Online Universities 2026</h1>
              <p className="mt-4 text-base text-muted-foreground sm:text-lg">Side-by-side comparison of Amity Online, Manipal Online and LPU Online across accreditation, fees, placements and learning experience.</p>
            </div>
            <div className="lg:sticky lg:top-24"><LeadFormCompact /></div>
          </div>
        </section>
        <section className="bg-background py-12">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="overflow-x-auto rounded-2xl border border-border bg-card">
              <table className="w-full min-w-[720px] text-sm">
                <thead className="bg-secondary/60">
                  <tr>
                    <th className="p-4 text-left font-bold text-foreground">Parameter</th>
                    <th className="p-4 text-left font-bold text-primary">Amity Online</th>
                    <th className="p-4 text-left font-bold text-foreground">Manipal Online</th>
                    <th className="p-4 text-left font-bold text-foreground">LPU Online</th>
                  </tr>
                </thead>
                <tbody>
                  {rows.map((r) => (
                    <tr key={r.label} className="border-t border-border">
                      <td className="p-4 font-semibold text-foreground">{r.label}</td>
                      <td className="p-4 font-bold text-primary"><CheckCircle2 className="mr-1 inline h-4 w-4" />{r.amity}</td>
                      <td className="p-4 text-muted-foreground">{r.manipal}</td>
                      <td className="p-4 text-muted-foreground">{r.lpu}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
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
