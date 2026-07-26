import { createFileRoute } from "@tanstack/react-router";
import { SeoPageLayout } from "@/components/site";
import { amity } from "@/lib/amity";

const CANONICAL = "/disclaimer";

export const Route = createFileRoute("/disclaimer")({
  head: () => ({
    meta: [
      { title: "Disclaimer — Amity Online · avedu" },
      { name: "description", content: "Disclaimer for amityonline.avedu.in — an independent education guidance platform operated under the avedu brand." },
      { property: "og:title", content: "Disclaimer — Amity Online · avedu" },
      { property: "og:description", content: "Independent education guidance platform disclaimer." },
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
      title="Disclaimer"
      intro="This website amityonline.avedu.in is operated under the brand name www.avedu.in. We are an independent education guidance platform and are not affiliated with Amity University or any other university. Amity University holds full rights to request change or removal of any non-relevant content. Images used are for illustrative purposes and do not directly represent the respective colleges or universities. We do not act as a university or an admission authority."
      breadcrumb={[{ label: "Disclaimer" }]}
      sections={[
        {
          heading: "Important Notices",
          bullets: [
            "All university names, logos, and trademarks are used only for reference and informational purposes.",
            "We do not act as an admission cell or issue degrees, certificates, or mark sheets.",
            "We offer free counselling to help students make informed educational decisions.",
            "No fees are charged by us for providing university-related information or guidance.",
            "Students are advised to verify all details directly from the respective official university portals.",
            "We fully respect the autonomy and credibility of all educational institutions mentioned on this platform.",
          ],
        },
      ]}
      faqs={amity.faqs.slice(0, 4)}
    />
  );
}
