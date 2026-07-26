import { createFileRoute } from "@tanstack/react-router";
import {
  SiteHeader,
  SiteFooter,
  Breadcrumb,
  CounselingModal,
  useModalTrigger,
  StickyActionBar,
  PopularSearches,
  LeadFormCompact,
} from "@/components/site";
import { studentReviews, reviewAggregate } from "@/lib/blog";
import { Star, MapPin } from "lucide-react";

const CANONICAL = "/student-reviews";

export const Route = createFileRoute("/student-reviews")({
  head: () => ({
    meta: [
      { title: `Amity Online Student Reviews 2026 — ${reviewAggregate.ratingValue}★ Rating from ${reviewAggregate.reviewCount}+ Learners` },
      { name: "description", content: `Read verified Amity Online student reviews and ratings from ${reviewAggregate.totalStudents.toLocaleString("en-IN")}+ learners across India — MBA, MCA, BBA, BCom experiences and outcomes.` },
      { property: "og:title", content: "Amity Online Student Reviews & Ratings 2026" },
      { property: "og:description", content: "Verified reviews from Amity Online students across India." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: CANONICAL },
    ],
    links: [{ rel: "canonical", href: CANONICAL }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "EducationalOrganization",
          name: "Amity Online",
          url: `https://amityonline.avedu.in${CANONICAL}`,
          aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: reviewAggregate.ratingValue,
            reviewCount: reviewAggregate.reviewCount,
            bestRating: "5",
            worstRating: "1",
          },
          review: studentReviews.map((r) => ({
            "@type": "Review",
            reviewRating: { "@type": "Rating", ratingValue: r.rating, bestRating: 5 },
            author: { "@type": "Person", name: r.name },
            datePublished: r.date,
            reviewBody: r.review,
          })),
        }),
      },
    ],
  }),
  component: Page,
});

function Stars({ n }: { n: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star key={i} className={`h-4 w-4 ${i < n ? "fill-primary text-primary" : "text-muted-foreground/30"}`} />
      ))}
    </div>
  );
}

function Page() {
  const { open, setOpen } = useModalTrigger();
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <Breadcrumb items={[{ label: "Student Reviews" }]} />
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
              <h1 className="text-3xl font-bold text-foreground sm:text-4xl lg:text-5xl">
                Amity Online Student Reviews & Ratings
              </h1>
              <p className="mt-4 max-w-2xl text-base text-muted-foreground sm:text-lg">
                Verified experiences from Amity Online learners across India — course quality,
                mentor support, career outcomes and value for money.
              </p>
              <div className="mt-6 flex flex-wrap items-center gap-6">
                <div className="flex items-center gap-2">
                  <span className="text-4xl font-bold text-primary">{reviewAggregate.ratingValue}</span>
                  <div>
                    <Stars n={Math.round(Number(reviewAggregate.ratingValue))} />
                    <p className="text-xs text-muted-foreground">Based on {reviewAggregate.reviewCount} reviews</p>
                  </div>
                </div>
                <div className="rounded-lg bg-primary/10 px-4 py-2 text-sm font-semibold text-primary">
                  {reviewAggregate.totalStudents.toLocaleString("en-IN")}+ students enrolled
                </div>
              </div>
            </div>
            <div className="lg:sticky lg:top-24"><LeadFormCompact /></div>
          </div>
        </section>

        <section className="bg-background py-12">
          <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-5 sm:grid-cols-2">
              {studentReviews.map((r) => (
                <div key={r.name} className="rounded-2xl border border-border bg-card p-6">
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <p className="text-sm font-bold text-foreground">{r.name}</p>
                      <p className="mt-0.5 inline-flex items-center gap-1 text-xs text-muted-foreground">
                        <MapPin className="h-3 w-3" /> {r.city} · {r.course}
                      </p>
                    </div>
                    <Stars n={r.rating} />
                  </div>
                  <p className="mt-3 text-sm text-muted-foreground">&ldquo;{r.review}&rdquo;</p>
                  <p className="mt-2 text-[11px] text-muted-foreground">
                    {new Date(r.date).toLocaleDateString("en-IN", { year: "numeric", month: "short", day: "numeric" })}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <PopularSearches />
      </main>
      <SiteFooter />
      <StickyActionBar />
      <CounselingModal open={open} onClose={() => setOpen(false)} />
    </div>
  );
}
