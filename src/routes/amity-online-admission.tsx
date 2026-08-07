import { createFileRoute } from "@tanstack/react-router";
import { SeoPageLayout } from "@/components/site";
import { amity } from "@/lib/amity";

const CANONICAL = "https://amityonline.avedu.in/amity-online-admission";

export const Route = createFileRoute("/amity-online-admission")({
  head: () => ({
    meta: [
      { title: "Amity Online Admission 2026 — Process, Dates & Apply Online" },
      { name: "description", content: "Amity Online admission 2026 — step-by-step application process, required documents, key dates and eligibility for UGC-entitled online degrees from India's No. #1 online university." },
      { property: "og:title", content: "Amity Online Admission 2026" },
      { property: "og:description", content: "Apply to Amity Online — UGC-entitled online BBA, BCA, MBA, MCA and more." },
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
      title="Amity Online Admission 2026"
      intro="Apply for Amity Online admission in a few simple steps. UGC-entitled online degrees from Amity University — India's No. #1 online university with flexible learning, no-cost EMI options and dedicated career services."
      breadcrumb={[{ label: "Admission" }]}
      sections={[
        { heading: "Amity Online Admission Process", bullets: amity.process },
        { heading: "Eligibility", bullets: amity.eligibility.map((e) => `${e.level}: ${e.criteria}`) },
        { heading: "Documents Required", bullets: ["Class 10 & 12 marksheets", "Graduation marksheet (for PG)", "Government-issued photo ID", "Passport-size photograph", "Category / defence certificate (if applicable)"] },
      ]}
      faqs={amity.faqs}
    />
  );
}
