import { createFileRoute, notFound, Link } from "@tanstack/react-router";
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
import { blogPosts, findBlogPost, type BlogPost } from "@/lib/blog";
import { Calendar, Clock, ChevronRight } from "lucide-react";

export const Route = createFileRoute("/blog/$slug")({
  loader: ({ params }): { post: BlogPost } => {
    const post = findBlogPost(params.slug);
    if (!post) throw notFound();
    return { post };
  },
  head: ({ loaderData, params }) => {
    const p = loaderData?.post;
    const canonical = `/blog/${params.slug}`;
    return {
      meta: [
        { title: p ? `${p.title} — Amity Online Blog` : "Amity Online Blog" },
        { name: "description", content: p?.description ?? "" },
        { property: "og:title", content: p?.title ?? "" },
        { property: "og:description", content: p?.description ?? "" },
        { property: "og:type", content: "article" },
        { property: "og:url", content: canonical },
        { property: "article:published_time", content: p?.date ?? "" },
      ],
      links: [{ rel: "canonical", href: canonical }],
      scripts: p
        ? [
            {
              type: "application/ld+json",
              children: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "Article",
                headline: p.title,
                description: p.description,
                datePublished: p.date,
                author: { "@type": "Organization", name: p.author },
                publisher: {
                  "@type": "Organization",
                  name: "Amity Online",
                  logo: {
                    "@type": "ImageObject",
                    url: "https://amityonline.avedu.in/favicon.ico",
                  },
                },
                mainEntityOfPage: `https://amityonline.avedu.in${canonical}`,
              }),
            },
            {
              type: "application/ld+json",
              children: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "BreadcrumbList",
                itemListElement: [
                  { "@type": "ListItem", position: 1, name: "Blog", item: "https://amityonline.avedu.in/blog" },
                  { "@type": "ListItem", position: 2, name: p.title, item: `https://amityonline.avedu.in${canonical}` },
                ],
              }),
            },
          ]
        : [],
    };
  },
  component: Page,
});

function Page() {
  const { post } = Route.useLoaderData();
  const { open, setOpen } = useModalTrigger();
  const related = blogPosts.filter((p) => p.slug !== post.slug).slice(0, 4);
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <Breadcrumb items={[{ label: "Blog", to: "/blog" }, { label: post.title }]} />
      <main>
        <section className="bg-background py-12 sm:py-16">
          <div className="mx-auto grid max-w-7xl items-start gap-10 px-4 sm:px-6 lg:grid-cols-[1fr_380px] lg:px-8">
            <article>
              <span className="inline-flex rounded-full bg-primary/10 px-3 py-1 text-[11px] font-bold uppercase tracking-wide text-primary">
                {post.category}
              </span>
              <h1 className="mt-3 text-3xl font-bold text-foreground sm:text-4xl lg:text-5xl">{post.title}</h1>
              <div className="mt-4 flex items-center gap-4 text-sm text-muted-foreground">
                <span className="inline-flex items-center gap-1"><Calendar className="h-4 w-4" />{new Date(post.date).toLocaleDateString("en-IN", { year: "numeric", month: "long", day: "numeric" })}</span>
                <span className="inline-flex items-center gap-1"><Clock className="h-4 w-4" />{post.readTime}</span>
                <span>By {post.author}</span>
              </div>
              <p className="mt-6 text-lg text-muted-foreground">{post.description}</p>
              {post.keyTakeaways?.length ? (
                <div className="mt-8 rounded-2xl border border-primary/30 bg-primary/5 p-6">
                  <h2 className="text-base font-bold text-primary">Key takeaways</h2>
                  <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-muted-foreground">
                    {post.keyTakeaways.map((k: string) => (
                      <li key={k}>{k}</li>
                    ))}
                  </ul>
                </div>
              ) : null}
              <div className="mt-8 space-y-6">
                {post.content.map((s: { heading: string; body: string }) => (
                  <div key={s.heading}>
                    <h2 className="text-xl font-bold text-foreground sm:text-2xl">{s.heading}</h2>
                    <p className="mt-2 text-base text-muted-foreground">{s.body}</p>
                  </div>
                ))}
              </div>

              {post.faqs?.length ? (
                <div className="mt-12">
                  <h2 className="text-xl font-bold text-foreground sm:text-2xl">Frequently asked questions</h2>
                  <div className="mt-4 space-y-4">
                    {post.faqs.map((f: { q: string; a: string }) => (
                      <div key={f.q} className="rounded-xl border border-border bg-card p-5">
                        <h3 className="text-base font-semibold text-foreground">{f.q}</h3>
                        <p className="mt-2 text-sm text-muted-foreground">{f.a}</p>
                      </div>
                    ))}
                  </div>
                </div>
              ) : null}


              <div className="mt-12 rounded-2xl border border-primary/30 bg-primary/5 p-6">
                <h3 className="text-lg font-bold text-primary">Ready to apply for Amity Online?</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  Talk to a counselor for personalized guidance on courses, fees and admission.
                </p>
                <Link
                  to="/amity-online-admission"
                  className="mt-4 inline-flex items-center gap-2 rounded-md bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-[var(--shadow-brand)] transition hover:opacity-90"
                >
                  Start admission <ChevronRight className="h-4 w-4" />
                </Link>
              </div>

              <div className="mt-12">
                <h3 className="text-xl font-bold text-foreground">Related articles</h3>
                <div className="mt-4 grid gap-4 sm:grid-cols-2">
                  {related.map((r) => (
                    <Link
                      key={r.slug}
                      to="/blog/$slug"
                      params={{ slug: r.slug }}
                      className="rounded-xl border border-border bg-card p-4 transition hover:border-primary"
                    >
                      <p className="text-sm font-semibold text-foreground">{r.title}</p>
                      <p className="mt-1 text-xs text-muted-foreground">{r.readTime}</p>
                    </Link>
                  ))}
                </div>
              </div>
            </article>
            <aside className="lg:sticky lg:top-24">
              <LeadFormCompact />
            </aside>
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
