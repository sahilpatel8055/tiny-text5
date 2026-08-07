import { createFileRoute } from "@tanstack/react-router";
import { SeoPageLayout } from "@/components/site";
import { amity, allCourses } from "@/lib/amity";

const CANONICAL = "https://amityonline.avedu.in/amity-online-fees";

export const Route = createFileRoute("/amity-online-fees")({
  head: () => ({
    meta: [
      { title: "Amity Online Fees Structure 2026 — Course Fee & EMI Options" },
      { name: "description", content: "Amity Online fee structure 2026 — full fee, per-semester fee and no-cost EMI plans for every UG and PG program." },
      { property: "og:title", content: "Amity Online Fees 2026" },
      { property: "og:description", content: "Program-wise fees and EMI options for Amity Online." },
      { property: "og:url", content: CANONICAL },
      { property: "og:type", content: "article" },
    ],
    links: [{ rel: "canonical", href: CANONICAL }],
  }),
  component: Page,
});

function Page() {
  return (
    <SeoPageLayout
      title="Amity Online Fees Structure 2026"
      intro="Transparent, program-wise fees for Amity Online. Pay in full or opt for no-cost EMI plans with dedicated counselor support."
      breadcrumb={[{ label: "Fees" }]}
      sections={[
        { heading: "Program-wise Fees", bullets: allCourses.map((c) => `${c.name}: Full ${c.feesBreakdown.fullFees} · Semester ${c.feesBreakdown.perSemester} · EMI ${c.feesBreakdown.emi}`) },
        { heading: "Scholarships Available", bullets: amity.scholarships },
      ]}
      faqs={amity.faqs}
    />
  );
}
