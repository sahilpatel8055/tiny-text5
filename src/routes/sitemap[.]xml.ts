import { createFileRoute } from "@tanstack/react-router";
import type {} from "@tanstack/react-start";
import { allCourses, seoCityCourseCombos, competitors, seoFeeYears } from "@/lib/amity";

const BASE_URL = "https://amityonline.avedu.in";

export const Route = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: async () => {
        const staticPaths = [
          "/",
          "/amity-online-admission",
          "/amity-online-admission-last-date",
          "/amity-online-courses",
          "/amity-online-eligibility",
          "/amity-online-fees",
          "/amity-online-placement",
          "/amity-online-review",
          "/amity-online-scholarship",
          "/fees",
          "/compare-universities",
          "/disclaimer",
          "/privacy-policy",
          "/terms-conditions",
        ];
        const coursePaths = allCourses.map((c) => `/courses/${c.slug}`);
        const bestPaths = allCourses.map((c) => `/best-online-${c.slug}`);
        const cityCoursePaths = seoCityCourseCombos.map(
          (c) => `/amity-online-${c.program}-in-${c.city.slug}`,
        );
        const vsPaths = competitors.map((c) => `/amity-vs-${c.slug}`);
        const feeYearPaths = seoFeeYears.map((y) => `/amity-online-fees-${y}`);
        const all = [
          ...staticPaths,
          ...coursePaths,
          ...bestPaths,
          ...cityCoursePaths,
          ...vsPaths,
          ...feeYearPaths,
        ];
        const urls = all
          .map((p) => `  <url><loc>${BASE_URL}${p}</loc><changefreq>weekly</changefreq></url>`)
          .join("\n");
        const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>`;
        return new Response(xml, {
          headers: { "Content-Type": "application/xml", "Cache-Control": "public, max-age=3600" },
        });
      },
    },
  },
});
