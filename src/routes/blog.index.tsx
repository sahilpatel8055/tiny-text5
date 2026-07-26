import { createFileRoute, Link } from "@tanstack/react-router";
import {
  SiteHeader,
  SiteFooter,
  Breadcrumb,
  CounselingModal,
  useModalTrigger,
  StickyActionBar,
  PopularSearches,
} from "@/components/site";
import { blogPosts } from "@/lib/blog";
import { Calendar, Clock, ChevronRight } from "lucide-react";

const CANONICAL = "/blog";

export const Route = createFileRoute("/blog/")({
  head: () => ({
    meta: [
      { title: "Amity Online Blog — Guides on Online MBA, BBA, MCA, BCom Careers & Fees" },
      { name: "description", content: "Read the latest guides on online MBA, BBA, MCA, BCom courses — fees, salary, admission tips, and career growth stories from Amity Online alumni." },
      { property: "og:title", content: "Amity Online Blog — Career, Course & Admission Guides" },
      { property: "og:description", content: "Latest guides on online degrees, careers, and admissions in 2026." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: CANONICAL },
    ],
    links: [{ rel: "canonical", href: CANONICAL }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Blog",
          name: "Amity Online Blog",
          url: `https://amityonline.avedu.in${CANONICAL}`,
          blogPost: blogPosts.map((p) => ({
            "@type": "BlogPosting",
            headline: p.title,
            datePublished: p.date,
            url: `https://amityonline.avedu.in/blog/${p.slug}`,
          })),
        }),
      },
    ],
  }),
  component: Page,
});

function Page() {
  const { open, setOpen } = useModalTrigger();
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <Breadcrumb items={[{ label: "Blog" }]} />
      <main>
        <section
          className="py-12 sm:py-16"
          style={{
            backgroundImage:
              "linear-gradient(135deg, color-mix(in oklab, var(--primary) 10%, transparent), transparent 60%)",
          }}
        >
          <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
            <h1 className="text-3xl font-bold text-foreground sm:text-4xl lg:text-5xl">
              Amity Online Blog
            </h1>
            <p className="mt-4 max-w-2xl text-base text-muted-foreground sm:text-lg">
              Practical guides on online MBA, BBA, MCA and BCom — fees, salaries, admission tips
              and alumni success stories.
            </p>
          </div>
        </section>

        <section className="bg-background py-12">
          <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-6 sm:grid-cols-2">
              {blogPosts.map((p) => (
                <Link
                  key={p.slug}
                  to="/blog/$slug"
                  params={{ slug: p.slug }}
                  className="group flex flex-col rounded-2xl border border-border bg-card p-6 transition hover:border-primary hover:shadow-lg"
                >
                  <span className="inline-flex w-fit rounded-full bg-primary/10 px-3 py-1 text-[11px] font-bold uppercase tracking-wide text-primary">
                    {p.category}
                  </span>
                  <h2 className="mt-3 text-lg font-bold text-foreground group-hover:text-primary sm:text-xl">
                    {p.title}
                  </h2>
                  <p className="mt-2 text-sm text-muted-foreground">{p.description}</p>
                  <div className="mt-4 flex items-center gap-4 text-xs text-muted-foreground">
                    <span className="inline-flex items-center gap-1"><Calendar className="h-3.5 w-3.5" />{new Date(p.date).toLocaleDateString("en-IN", { year: "numeric", month: "short", day: "numeric" })}</span>
                    <span className="inline-flex items-center gap-1"><Clock className="h-3.5 w-3.5" />{p.readTime}</span>
                  </div>
                  <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-primary">
                    Read article <ChevronRight className="h-4 w-4" />
                  </span>
                </Link>
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
