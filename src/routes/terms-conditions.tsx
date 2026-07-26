import { createFileRoute } from "@tanstack/react-router";
import { SeoPageLayout } from "@/components/site";
import { amity } from "@/lib/amity";

const CANONICAL = "/terms-conditions";

export const Route = createFileRoute("/terms-conditions")({
  head: () => ({
    meta: [
      { title: "Terms & Conditions — Amity Online · avedu" },
      { name: "description", content: "Terms & Conditions for using amityonline.avedu.in, independently owned and operated by Avedu Pvt Ltd." },
      { property: "og:title", content: "Terms & Conditions — Amity Online · avedu" },
      { property: "og:description", content: "Terms of use for amityonline.avedu.in." },
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
      title="Terms & Conditions"
      intro="These Terms & Conditions govern your use of the website www.amityonline.avedu.in, independently owned and operated by Avedu Pvt Ltd. By using this platform, you agree to abide by the terms mentioned herein. We provide counselling and information services to help users explore online and distance education programs offered by UGC-DEB-approved universities. We are not an admission center and do not claim to represent or be affiliated with any university, including Amity University."
      breadcrumb={[{ label: "Terms & Conditions" }]}
      sections={[
        {
          heading: "1. Role of Our Platform",
          bullets: ["We act solely as a guidance and counselling provider.", "All decisions related to admission, course selection, or university interactions are made by users independently."],
        },
        {
          heading: "2. No Affiliation Guarantee",
          bullets: ["We are not affiliated with Amity University or any other university.", "All information is provided for awareness and reference only."],
        },
        {
          heading: "3. Changes to These Terms",
          bullets: ["We reserve the right to update or modify these terms at any time.", "Continued use of the platform signifies your agreement to the latest version."],
        },
        {
          heading: "4. Contact",
          bullets: ["For any concerns, reach out to: support@amityonline.avedu.in"],
        },
      ]}
      faqs={amity.faqs.slice(0, 4)}
    />
  );
}
