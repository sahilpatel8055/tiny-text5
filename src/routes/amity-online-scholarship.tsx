import { createFileRoute } from "@tanstack/react-router";
import { SeoPageLayout } from "@/components/site";
import { amity } from "@/lib/amity";

const CANONICAL = "https://amityonline.avedu.in/amity-online-scholarship";

export const Route = createFileRoute("/amity-online-scholarship")({
  head: () => ({
    meta: [
      { title: "Amity Online Scholarship 2026 — Merit, Defence & Divyaang" },
      { name: "description", content: "Amity Online scholarships 2026 — merit, defence, divyaang, government employee and girl child scholarships with eligibility and how to apply." },
      { property: "og:title", content: "Amity Online Scholarship 2026" },
      { property: "og:description", content: "Scholarships available for Amity Online learners." },
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
      title="Amity Online Scholarship 2026"
      intro="Scholarships that make Amity Online more affordable — merit-based, category-based and skill-based awards for eligible learners."
      breadcrumb={[{ label: "Scholarship" }]}
      sections={[
        { heading: "Scholarships Available", bullets: amity.scholarships },
        { heading: "How to Apply", bullets: ["Speak to an Amity Online counselor", "Share required proof documents", "Get scholarship applied to your fee", "Complete admission with reduced fee"] },
      ]}
      faqs={amity.faqs}
    />
  );
}
