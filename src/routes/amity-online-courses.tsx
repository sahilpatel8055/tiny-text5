import { createFileRoute } from "@tanstack/react-router";
import { SeoPageLayout } from "@/components/site";
import { amity, allCourses } from "@/lib/amity";

const CANONICAL = "/amity-online-courses";

export const Route = createFileRoute("/amity-online-courses")({
  head: () => ({
    meta: [
      { title: "Amity Online Courses — UG & PG Degree Programs List 2026" },
      { name: "description", content: "Full list of Amity Online UG and PG courses — BBA, BCA, B.Com, BA, MBA, MCA, M.Com, MA with duration, fees and specializations." },
      { property: "og:title", content: "Amity Online Courses List" },
      { property: "og:description", content: "Explore UGC-entitled online UG and PG programs from Amity University." },
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
      title="Amity Online Courses 2026"
      intro="Explore UGC-entitled online UG and PG programs from Amity University Online. Learn 100% online with flexible schedules, mentor support and dedicated career assistance."
      breadcrumb={[{ label: "Courses" }]}
      sections={[
        { heading: "Undergraduate (UG) Programs", bullets: amity.courses.ug.map((c) => `${c.name} — ${c.duration}, ${c.fee}`) },
        { heading: "Postgraduate (PG) Programs", bullets: amity.courses.pg.map((c) => `${c.name} — ${c.duration}, ${c.fee}`) },
        { heading: "Specializations Available", bullets: Array.from(new Set(allCourses.flatMap((c) => c.specializations ?? []))) },
      ]}
      faqs={amity.faqs}
    />
  );
}
