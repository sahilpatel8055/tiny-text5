import { createFileRoute } from "@tanstack/react-router";
import { SeoPageLayout } from "@/components/site";
import { amity } from "@/lib/amity";

const CANONICAL = "/amity-online-placement";

export const Route = createFileRoute("/amity-online-placement")({
  head: () => ({
    meta: [
      { title: "Amity Online Placement 2026 — Recruiters, Roles & Career Support" },
      { name: "description", content: "Amity Online placement 2026 — dedicated career services, top recruiters, resume building and interview preparation for online learners." },
      { property: "og:title", content: "Amity Online Placement 2026" },
      { property: "og:description", content: "Career support for Amity Online learners." },
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
      title="Amity Online Career Services 2026"
      intro={amity.placements.highlight}
      breadcrumb={[{ label: "Placement" }]}
      sections={[
        { heading: "Top Recruiting Partners", bullets: amity.placements.partners },
        { heading: "Career Services", bullets: ["Resume building", "Mock interviews", "Career counseling", "Industry connect webinars", "Job promotion to recruiters"] },
      ]}
      faqs={amity.faqs}
    />
  );
}
