import { createFileRoute, notFound, Link } from "@tanstack/react-router";
import {
  SiteHeader,
  SiteFooter,
  Breadcrumb,
  CounselingModal,
  useModalTrigger,
  StickyActionBar,
  PopularSearches,
  SeoFaq,
  LeadFormCompact,
} from "@/components/site";
import { findCourse, amity, seoCities } from "@/lib/amity";
import { BadgeCheck, ChevronRight, MapPin } from "lucide-react";

const canonicalFor = (program: string, city: string) =>
  `/amity-online-${program}-in-${city}`;

export const Route = createFileRoute("/amity-online-{$program}-in-{$city}")({
  loader: ({ params }) => {
    const course = findCourse(params.program);
    const city = seoCities.find((c) => c.slug === params.city.toLowerCase());
    if (!course || !city) throw notFound();
    return { course, city };
  },
  head: ({ loaderData, params }) => {
    const c = loaderData?.course;
    const city = loaderData?.city;
    const title = c && city
      ? `Amity Online ${c.name} in ${city.name} 2026 — Fees, Admission & Placement`
      : "Amity Online Program";
    const desc = c && city
      ? `Apply for Amity Online ${c.name} in ${city.name} 2026 — 100% online, UGC-entitled degree, fees ${c.fee}, EMI ${c.feesBreakdown.emi}, career support for ${city.name} students.`
      : "";
    const canonical = canonicalFor(params.program, params.city);
    return {
      meta: [
        { title },
        { name: "description", content: desc },
        { property: "og:title", content: title },
        { property: "og:description", content: desc },
        { property: "og:url", content: canonical },
        { property: "og:type", content: "article" },
      ],
      links: [{ rel: "canonical", href: canonical }],
    };
  },
  component: Page,
});

function Page() {
  const { course, city } = Route.useLoaderData();
  const { open, setOpen } = useModalTrigger();
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <Breadcrumb
        items={[
          { label: "Courses", to: "/amity-online-courses" },
          { label: `${course.name} in ${city.name}` },
        ]}
      />
      <main>
        <section
          className="py-12 sm:py-16"
          style={{
            backgroundImage:
              "linear-gradient(135deg, color-mix(in oklab, var(--primary) 10%, transparent), transparent 60%)",
          }}
        >
          <div className="mx-auto grid max-w-7xl items-start gap-10 px-4 sm:px-6 lg:grid-cols-[1fr_380px] lg:px-8">
            <div>
              <span className="inline-flex items-center gap-1.5 rounded-full bg-primary/10 px-3 py-1 text-xs font-bold text-primary">
                <MapPin className="h-3.5 w-3.5" /> {city.name}
              </span>
              <h1 className="mt-3 text-3xl font-bold text-foreground sm:text-4xl lg:text-5xl">
                Amity Online {course.name} in {city.name} 2026
              </h1>
              <p className="mt-4 max-w-2xl text-base text-muted-foreground sm:text-lg">
                {course.tagline} Study a UGC-entitled online {course.name} from Amity University while
                living and working in {city.name} — 100% online classes, weekend flexibility, and
                dedicated career support for {city.name} learners.
              </p>
              <div className="mt-6 flex flex-wrap gap-3 text-sm text-muted-foreground">
                <span className="inline-flex items-center gap-1.5"><BadgeCheck className="h-4 w-4 text-primary" /> UGC-DEB Entitled</span>
                <span className="inline-flex items-center gap-1.5"><BadgeCheck className="h-4 w-4 text-primary" /> NAAC A+</span>
                <span className="inline-flex items-center gap-1.5"><BadgeCheck className="h-4 w-4 text-primary" /> WES Recognized</span>
              </div>
            </div>
            <div className="lg:sticky lg:top-24">
              <LeadFormCompact />
            </div>
          </div>
        </section>

        <section className="bg-background py-14">
          <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-foreground sm:text-3xl">
              Why choose Amity Online {course.name} for {city.name} students?
            </h2>
            <ul className="mt-6 grid gap-3 sm:grid-cols-2">
              {[
                `100% online delivery — no relocation from ${city.name}`,
                `Total fees ${course.fee}, no-cost EMI from ${course.feesBreakdown.emi}`,
                `Live and recorded sessions, weekend friendly for ${city.name} professionals`,
                `Career services with hiring partners active in ${city.name}`,
                `UGC-DEB entitled — valid for jobs and higher studies in ${city.name}`,
                `Alumni across ${city.name} for peer networking and referrals`,
              ].map((b) => (
                <li key={b} className="flex items-start gap-2 rounded-lg border border-border bg-card p-4 text-sm text-foreground">
                  <ChevronRight className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                  <span>{b}</span>
                </li>
              ))}
            </ul>
            <div className="mt-8">
              <Link
                to="/courses/$slug"
                params={{ slug: course.slug }}
                className="inline-flex items-center gap-2 rounded-md bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-[var(--shadow-brand)] transition hover:opacity-90"
              >
                Full {course.name} details <ChevronRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </section>

        <SeoFaq items={amity.faqs} />
        <PopularSearches />
      </main>
      <SiteFooter />
      <StickyActionBar />
      <CounselingModal open={open} onClose={() => setOpen(false)} />
    </div>
  );
}
