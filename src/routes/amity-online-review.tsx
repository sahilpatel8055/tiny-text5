import { createFileRoute } from "@tanstack/react-router";
import { SeoPageLayout } from "@/components/site";
import { amity } from "@/lib/amity";

const CANONICAL = "/amity-online-review";

export const Route = createFileRoute("/amity-online-review")({
  head: () => ({
    meta: [
      { title: "Amity Online Review 2026 — Is Amity Online Degree Worth It?" },
      { name: "description", content: "Amity Online review 2026 — accreditation, degree validity, learning experience, placements and student feedback." },
      { property: "og:title", content: "Amity Online Review 2026" },
      { property: "og:description", content: "Honest overview of Amity Online — recognition, learning, placements." },
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
      title="Amity Online Review 2026"
      intro="A closer look at Amity Online — recognition, learning experience, career services and student outcomes at India's No. #1 online university."
      breadcrumb={[{ label: "Review" }]}
      sections={[
        { heading: "Recognition & Accreditation", bullets: amity.approvals.map((a) => `${a.name} — ${a.note}`) },
        { heading: "Why Learners Choose Amity Online", bullets: amity.highlights.map((h) => `${h.label}: ${h.value}`) },
      ]}
      faqs={amity.faqs}
    />
  );
}
