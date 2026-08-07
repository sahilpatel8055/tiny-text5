import { createFileRoute } from "@tanstack/react-router";
import { SeoPageLayout } from "@/components/site";
import { amity } from "@/lib/amity";

const CANONICAL = "https://amityonline.avedu.in/amity-online-admission-last-date";

export const Route = createFileRoute("/amity-online-admission-last-date")({
  head: () => ({
    meta: [
      { title: "Amity Online Admission Last Date 2026 — Apply Before Deadline" },
      { name: "description", content: "Amity Online admission last date 2026 — apply before the cycle closes to secure early-bird scholarships and preferred specializations." },
      { property: "og:title", content: "Amity Online Admission Last Date 2026" },
      { property: "og:description", content: "Don't miss the Amity Online admission deadline." },
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
      title="Amity Online Admission Last Date 2026"
      intro="Admissions run in cycles — apply early to lock in your preferred specialization, avail early-bird scholarships and get sufficient time for onboarding."
      breadcrumb={[{ label: "Admission Last Date" }]}
      sections={[
        { heading: "Why Apply Early?", bullets: ["Early-bird scholarships & fee waivers", "Preferred specialization availability", "Enough time for document verification", "Smooth LMS onboarding & orientation"] },
        { heading: "Application Process", bullets: amity.process },
      ]}
      faqs={amity.faqs}
    />
  );
}
