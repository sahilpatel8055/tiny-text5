import { createFileRoute } from "@tanstack/react-router";
import { SeoPageLayout } from "@/components/site";
import { amity } from "@/lib/amity";

const CANONICAL = "/amity-online-eligibility";

export const Route = createFileRoute("/amity-online-eligibility")({
  head: () => ({
    meta: [
      { title: "Amity Online Eligibility Criteria 2026 — UG & PG Requirements" },
      { name: "description", content: "Amity Online eligibility criteria for UG and PG programs — minimum marks, qualifying exams and required documents." },
      { property: "og:title", content: "Amity Online Eligibility 2026" },
      { property: "og:description", content: "Check eligibility for Amity Online UG and PG programs." },
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
      title="Amity Online Eligibility Criteria 2026"
      intro="Check the minimum eligibility criteria for Amity Online UG and PG programs before you apply."
      breadcrumb={[{ label: "Eligibility" }]}
      sections={[
        { heading: "Eligibility by Program Level", bullets: amity.eligibility.map((e) => `${e.level}: ${e.criteria}`) },
        { heading: "Documents You'll Need", bullets: ["Class 10 & 12 marksheets", "Graduation marksheet (for PG)", "Government-issued photo ID", "Passport-size photo", "Category / defence certificate (if applicable)"] },
      ]}
      faqs={amity.faqs}
    />
  );
}
