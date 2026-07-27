import { useEffect, useRef, useState, type ReactNode } from "react";
import { Link } from "@tanstack/react-router";
import { amity, allCourses } from "@/lib/amity";
import {
  Flame,
  X,
  Phone,
  MessageCircle,
  PhoneCall,
  ChevronRight,
  ChevronLeft,
  ChevronDown,
  Briefcase,
  Star,
  Home,
  Menu,
} from "lucide-react";

export const LOGO_SRC = "/amity-logo.jpg";
export const AVEDU_LOGO_SRC = "/avedu-logo.jpg";

/* ---------------- Modal singleton ---------------- */

type ModalCtx = { open: () => void };
const modalCtx: { current: ModalCtx | null } = { current: null };
export const openModal = () => modalCtx.current?.open();

export function useModalTrigger() {
  const [open, setOpen] = useState(false);
  useEffect(() => {
    modalCtx.current = { open: () => setOpen(true) };
    return () => {
      modalCtx.current = null;
    };
  }, []);
  return { open, setOpen };
}

/* ---------------- Inputs ---------------- */

export function LabeledInput({
  label,
  ...rest
}: React.InputHTMLAttributes<HTMLInputElement> & { label: string }) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-xs font-bold uppercase tracking-wide text-foreground/90">
        {label}
      </span>
      <input
        {...rest}
        className="w-full rounded-md border-2 border-border bg-background px-4 py-2.5 text-sm font-medium text-foreground placeholder:text-muted-foreground/80 outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/25"
      />
    </label>
  );
}

export function LabeledSelect({
  label,
  children,
  ...rest
}: React.SelectHTMLAttributes<HTMLSelectElement> & { label: string }) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-xs font-bold uppercase tracking-wide text-foreground/90">
        {label}
      </span>
      <select
        {...rest}
        className="w-full rounded-md border-2 border-border bg-background px-4 py-2.5 text-sm font-medium text-foreground outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/25"
      >
        {children}
      </select>
    </label>
  );
}

/* ---------------- Modal ---------------- */

export function CounselingModal({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  if (!open) return null;
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 p-3 backdrop-blur-sm sm:p-4">
      <div className="relative w-full max-w-[380px] overflow-hidden rounded-2xl bg-card shadow-2xl">
        <button
          onClick={onClose}
          aria-label="Close"
          className="absolute right-2.5 top-2.5 z-10 grid h-8 w-8 place-items-center rounded-full bg-background/90 text-foreground shadow hover:bg-background"
        >
          <X className="h-4 w-4" />
        </button>
        <div
          className="px-4 pt-4 pb-3 text-primary-foreground"
          style={{ background: "var(--gradient-brand)" }}
        >
          <div className="flex items-center gap-2.5">
            <div className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-white/95 p-1">
              <img src={LOGO_SRC} alt="Amity Online" className="h-full w-full object-contain" />
            </div>
            <div className="min-w-0">
              <p className="text-sm font-extrabold leading-tight">Admission Open · Batch 2026</p>
              <p className="text-[11px] opacity-95">Free counseling with an Amity Online advisor</p>
            </div>
          </div>
        </div>

        <div className="px-4 pt-3">
          <div className="flex items-center justify-between text-[11px] font-semibold text-foreground/80">
            <span className="inline-flex items-center gap-1.5">
              <Flame className="h-3.5 w-3.5 text-primary" /> Seats filling fast
            </span>
            <span className="text-primary">85% filled</span>
          </div>
          <div className="mt-1.5 h-1.5 w-full overflow-hidden rounded-full bg-accent">
            <div
              className="h-full w-[85%] rounded-full"
              style={{ background: "var(--gradient-brand)" }}
            />
          </div>
        </div>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            onClose();
          }}
          className="grid gap-2.5 p-4"
        >
          <LabeledInput label="Full Name" placeholder="e.g. Rahul Sharma" required />
          <LabeledInput label="Mobile Number" type="tel" placeholder="10-digit mobile" required />
          <LabeledInput label="Email" type="email" placeholder="name@example.com" required />
          <LabeledSelect label="Select Program">
            <option value="">Choose a program</option>
            <optgroup label="PG Programs">
              {amity.courses.pg.map((c) => (
                <option key={c.name}>{c.name}</option>
              ))}
            </optgroup>
            <optgroup label="UG Programs">
              {amity.courses.ug.map((c) => (
                <option key={c.name}>{c.name}</option>
              ))}
            </optgroup>
          </LabeledSelect>
          <button
            type="submit"
            className="mt-1 w-full rounded-md bg-primary px-6 py-2.5 text-sm font-bold text-primary-foreground shadow-[var(--shadow-brand)] transition hover:opacity-90"
          >
            Get Free Counseling Now
          </button>
          <p className="text-center text-[10px] text-muted-foreground">
            By submitting you agree to be contacted about Amity Online programs.
          </p>
        </form>
      </div>
    </div>
  );
}

/* ---------------- Compact lead form ---------------- */

export function LeadFormCompact() {
  return (
    <div
      id="lead-compact"
      className="rounded-2xl border-2 border-primary/30 bg-card p-5 shadow-[var(--shadow-brand)] sm:p-6"
    >
      <div className="flex items-center gap-3 border-b border-border pb-4">
        <div className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-white p-1 ring-1 ring-border">
          <img src={LOGO_SRC} alt="Amity Online" className="h-full w-full object-contain" />
        </div>
        <div className="min-w-0">
          <p className="text-sm font-extrabold text-foreground">Admission Open</p>
          <p className="text-xs text-muted-foreground">Batch 2026 · 85% seats filled</p>
        </div>
      </div>
      <form onSubmit={(e) => e.preventDefault()} className="mt-4 grid gap-3">
        <LabeledInput label="Full Name" placeholder="e.g. Rahul Sharma" required />
        <LabeledInput label="Mobile Number" type="tel" placeholder="10-digit mobile" required />
        <LabeledInput label="Email" type="email" placeholder="name@example.com" required />
        <LabeledSelect label="Select Program">
          <option value="">Choose a program</option>
          {[...amity.courses.pg, ...amity.courses.ug].map((c) => (
            <option key={c.name}>{c.name}</option>
          ))}
        </LabeledSelect>
        <button
          type="submit"
          className="mt-1 w-full rounded-md bg-primary px-6 py-2.5 text-sm font-bold text-primary-foreground shadow-[var(--shadow-brand)] transition hover:opacity-90"
        >
          Get Free Counseling
        </button>
      </form>
    </div>
  );
}

/* ---------------- Header ---------------- */

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 w-full border-b border-border/70 bg-background/95 backdrop-blur">
      <div className="mx-auto flex h-24 max-w-7xl items-center justify-between px-4 sm:h-32 sm:px-6 lg:h-36 lg:px-8">
        <Link to="/" className="flex items-center gap-3">
          <img
            src={LOGO_SRC}
            alt="Amity Online — India's No. #1 Online University"
            className="h-20 w-auto sm:h-28 lg:h-32"
          />
        </Link>
        <button
          type="button"
          onClick={openModal}
          className="inline-flex items-center rounded-md bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground shadow-[var(--shadow-brand)] transition hover:opacity-90 sm:px-7 sm:py-3 sm:text-base"
        >
          Enroll Now
        </button>
      </div>
    </header>
  );
}


/* ---------------- Sticky Action Bar ---------------- */

const CALL_TEL = "tel:+917338387093";
const WA_LINK = "https://wa.me/917338387093";
const CALL_DISPLAY = "+91 733 838 7093";
export { CALL_TEL, WA_LINK, CALL_DISPLAY };

export function StickyActionBar() {
  return (
    <>
      <a
        href={CALL_TEL}
        className="fixed bottom-5 left-4 z-40 hidden items-center gap-2 rounded-full bg-primary px-4 py-2.5 text-sm font-semibold text-primary-foreground shadow-[var(--shadow-brand)] transition hover:opacity-90 md:inline-flex"
      >
        <Phone className="h-4 w-4" /> Call Now
      </a>
      <div className="fixed bottom-5 right-4 z-40 hidden flex-col gap-2 md:flex">
        <button
          type="button"
          onClick={openModal}
          className="inline-flex items-center gap-2 rounded-full bg-primary px-4 py-2.5 text-sm font-semibold text-primary-foreground shadow-lg transition hover:opacity-90"
        >
          <PhoneCall className="h-4 w-4" /> Request Callback
        </button>
        <a
          href={WA_LINK}
          target="_blank"
          rel="noopener"
          className="inline-flex items-center gap-2 rounded-full bg-[#22c55e] px-4 py-2.5 text-sm font-semibold text-white shadow-lg transition hover:opacity-90"
        >
          <MessageCircle className="h-4 w-4" /> WhatsApp
        </a>
      </div>

      <div className="fixed inset-x-0 bottom-0 z-40 grid grid-cols-3 border-t border-border bg-card shadow-[0_-6px_18px_rgba(0,0,0,0.08)] md:hidden">
        <a
          href={CALL_TEL}
          className="flex flex-col items-center justify-center gap-0.5 py-2.5 text-xs font-semibold text-primary"
        >
          <Phone className="h-5 w-5" />
          Call Now
        </a>
        <a
          href={WA_LINK}
          target="_blank"
          rel="noopener"
          className="flex flex-col items-center justify-center gap-0.5 border-x border-border py-2.5 text-xs font-semibold text-[#16a34a]"
        >
          <MessageCircle className="h-5 w-5" />
          WhatsApp
        </a>
        <button
          type="button"
          onClick={openModal}
          className="flex flex-col items-center justify-center gap-0.5 py-2.5 text-xs font-semibold text-primary"
        >
          <PhoneCall className="h-5 w-5" />
          Callback
        </button>
      </div>

      <div aria-hidden className="h-14 md:hidden" />
    </>
  );
}


/* ---------------- Footer ---------------- */

const footerLinks: { label: string; to: string }[] = [
  { label: "Amity Online Admission", to: "/amity-online-admission" },
  { label: "Courses", to: "/amity-online-courses" },
  { label: "Fees", to: "/amity-online-fees" },
  { label: "Eligibility", to: "/amity-online-eligibility" },
  { label: "Placement", to: "/amity-online-placement" },
  { label: "Review", to: "/amity-online-review" },
  { label: "Scholarship", to: "/amity-online-scholarship" },
  { label: "Admission Last Date", to: "/amity-online-admission-last-date" },
];

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-background pt-10 pb-16 md:pb-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-3">
          <div>
            <div className="flex items-center gap-3">
              <img src={LOGO_SRC} alt="Amity Online" className="h-14 w-auto" />
              <img src={AVEDU_LOGO_SRC} alt="avedu" className="h-10 w-auto" />
            </div>
            <p className="mt-3 text-sm text-muted-foreground">
              UGC-entitled online degrees from Amity University Online — India's No. #1 online
              university with flexible learning and dedicated career support.
            </p>
          </div>
          <div>
            <p className="text-sm font-bold text-foreground">Quick Links</p>
            <ul className="mt-3 grid grid-cols-2 gap-2 text-sm">
              {footerLinks.map((l) => (
                <li key={l.to}>
                  <Link
                    to={l.to}
                    className="text-muted-foreground hover:text-primary hover:underline"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="text-sm font-bold text-foreground">Talk to us</p>
            <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
              <li>
                <a href={CALL_TEL} className="inline-flex items-center gap-2 hover:text-primary">
                  <Phone className="h-4 w-4 text-primary" /> {CALL_DISPLAY}
                </a>
              </li>
              <li>
                <a href={WA_LINK} target="_blank" rel="noopener" className="inline-flex items-center gap-2 hover:text-primary">
                  <MessageCircle className="h-4 w-4 text-primary" /> WhatsApp {CALL_DISPLAY}
                </a>
              </li>
            </ul>

          </div>
        </div>
        <div className="mt-8 rounded-lg border border-border bg-secondary/40 p-4 text-xs text-muted-foreground">
          <p className="font-semibold text-foreground">Disclaimer</p>
          <p className="mt-1">
            This website amityonline.avedu.in is operated under the brand name www.avedu.in. We are an independent education guidance platform and are not affiliated with Amity University or any other university. Amity University holds full rights to request change or removal of any non-relevant content. Images used are for illustrative purposes and do not directly represent the respective colleges or universities. We do not act as a university or an admission authority.
          </p>
        </div>

        <div className="mt-6 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 border-t border-border pt-6">
          <Link to="/disclaimer" className="text-sm font-semibold text-primary hover:underline">Disclaimer</Link>
          <span className="text-muted-foreground/40">|</span>
          <Link to="/terms-conditions" className="text-sm font-semibold text-primary hover:underline">Terms &amp; Conditions</Link>
          <span className="text-muted-foreground/40">|</span>
          <Link to="/privacy-policy" className="text-sm font-semibold text-primary hover:underline">Privacy Policy</Link>
        </div>
        <p className="mt-4 text-center text-xs text-muted-foreground">
          © {new Date().getFullYear()} Amity Online · avedu. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

/* ---------------- Career Assistance ---------------- */

import placementImage from "@/assets/placement.jpg";

const careerItems = [
  { title: "AI-Powered Resume Builder", desc: "Building AI-powered resumes tailored to industry standards." },
  { title: "Relevant Job Mapping via AI Tools", desc: "Mapping relevant job opportunities using AI-driven insights." },
  { title: "Human-AI Personality Assessment", desc: "Assessing personality traits to recommend ideal career paths." },
  { title: "Mock Video Interview", desc: "Simulating real job interviews to boost confidence and performance." },
  { title: "Skill Analysis", desc: "Analysing skills to identify strengths and improvement areas." },
  { title: "Personality Test", desc: "Understanding work styles through in-depth personality tests." },
  { title: "Application Tracker", desc: "Tracking job applications efficiently in one place." },
  { title: "Code Quest", desc: "Offering coding challenges and assessments to sharpen technical skills." },
];


export function CareerAssistance() {
  return (
    <section className="bg-background py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-foreground sm:text-4xl lg:text-5xl">
          Career Assistance
        </h2>
        <p className="mt-4 max-w-3xl text-base text-muted-foreground sm:text-lg">
          Get end-to-end career support including resume building, mock interviews, skill
          training, and job placement assistance to boost your employability after completing
          your Amity Online UG or PG course.
        </p>
        <div className="mt-10 grid items-center gap-8 lg:grid-cols-2">
          <div className="flex justify-center">
            <img
              src={placementImage}
              alt="A working professional"
              loading="lazy"
              className="w-full max-w-sm rounded-2xl shadow-2xl"
            />
          </div>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {careerItems.map((it) => (
              <div
                key={it.title}
                className="group cursor-pointer rounded-2xl border border-border bg-card p-5 transition-colors duration-300 hover:bg-primary hover:text-primary-foreground active:bg-primary active:text-primary-foreground"
              >
                <div className="flex items-center gap-3">
                  <Star className="h-6 w-6 text-primary transition-colors group-hover:text-primary-foreground group-active:text-primary-foreground" />
                  <h3 className="text-lg font-semibold">{it.title}</h3>
                </div>
                <p className="mt-2 text-sm text-muted-foreground transition-colors group-hover:text-primary-foreground/90 group-active:text-primary-foreground/90">
                  {it.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- Specializations ---------------- */

export function SpecializationsSection({
  title = "Specializations Offered",
  specializations,
}: {
  title?: string;
  specializations: string[];
}) {
  const pageSize = 4;
  const [page, setPage] = useState(0);
  const totalPages = Math.max(1, Math.ceil(specializations.length / pageSize));
  const current = specializations.slice(page * pageSize, page * pageSize + pageSize);

  return (
    <section
      className="py-14 sm:py-16"
      style={{
        backgroundImage:
          "linear-gradient(180deg, color-mix(in oklab, var(--primary) 6%, transparent), transparent)",
      }}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between gap-4">
          <h2 className="text-2xl font-bold text-foreground sm:text-3xl lg:text-4xl">{title}</h2>
          <div className="flex gap-2">
            <button
              type="button"
              aria-label="Previous specializations"
              onClick={() => setPage((p) => (p - 1 + totalPages) % totalPages)}
              className="grid h-10 w-10 place-items-center rounded-full border border-border bg-background text-foreground hover:bg-accent"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              type="button"
              aria-label="Next specializations"
              onClick={() => setPage((p) => (p + 1) % totalPages)}
              className="grid h-10 w-10 place-items-center rounded-full border border-border bg-background text-foreground hover:bg-accent"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>

        <div className="mt-8 grid grid-cols-2 gap-4 sm:gap-5">
          {current.map((spec) => (
            <div
              key={spec}
              className="group flex cursor-pointer items-center gap-3 rounded-2xl border border-border bg-card px-4 py-4 shadow-sm transition-colors duration-300 hover:bg-primary hover:text-primary-foreground active:bg-primary active:text-primary-foreground sm:gap-4 sm:px-5 sm:py-5"
            >
              <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-background text-primary ring-1 ring-border transition-colors group-hover:bg-primary-foreground group-hover:text-primary group-active:bg-primary-foreground group-active:text-primary sm:h-12 sm:w-12">
                <Briefcase className="h-5 w-5" />
              </span>
              <h3 className="text-sm font-semibold leading-snug text-foreground transition-colors group-hover:text-primary-foreground group-active:text-primary-foreground sm:text-base lg:text-lg">
                {spec}
              </h3>
            </div>
          ))}
        </div>

        {totalPages > 1 && (
          <div className="mt-6 flex justify-center gap-2">
            {Array.from({ length: totalPages }).map((_, i) => (
              <button
                key={i}
                type="button"
                aria-label={`Go to page ${i + 1}`}
                onClick={() => setPage(i)}
                className={`h-2.5 rounded-full transition-all ${
                  page === i ? "w-6 bg-primary" : "w-2.5 bg-border"
                }`}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

/* ---------------- Breadcrumb ---------------- */

export type Crumb = { label: string; to?: string };

export function Breadcrumb({ items }: { items: Crumb[] }) {
  const ldItems = items.map((c, i) => ({
    "@type": "ListItem",
    position: i + 1,
    name: c.label,
    ...(c.to ? { item: `https://amityonline.avedu.in${c.to}` } : {}),
  }));
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: ldItems,
  };
  return (
    <nav aria-label="Breadcrumb" className="border-b border-border/60 bg-secondary/40">
      <div className="mx-auto flex max-w-7xl items-center gap-1.5 overflow-x-auto px-4 py-2.5 text-xs text-muted-foreground sm:px-6 sm:text-sm lg:px-8">
        <Link to="/" className="inline-flex items-center gap-1 hover:text-primary">
          <Home className="h-3.5 w-3.5" /> Home
        </Link>
        {items.map((c) => (
          <span key={c.label} className="inline-flex items-center gap-1.5">
            <ChevronRight className="h-3.5 w-3.5 opacity-60" />
            {c.to ? (
              <Link to={c.to} className="hover:text-primary">
                {c.label}
              </Link>
            ) : (
              <span className="font-semibold text-foreground">{c.label}</span>
            )}
          </span>
        ))}
      </div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </nav>
  );
}

/* ---------------- SEO FAQ block ---------------- */

export function SeoFaq({ items }: { items: { q: string; a: string }[] }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
  return (
    <section className="bg-secondary/40 py-16">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-center text-3xl font-bold text-foreground sm:text-4xl">
          Frequently Asked Questions
        </h2>
        <div className="mt-10 space-y-4">
          {items.map((f) => (
            <details
              key={f.q}
              className="group rounded-xl border border-border bg-card p-5 open:shadow-[var(--shadow-brand)]"
            >
              <summary className="flex cursor-pointer items-center justify-between text-base font-semibold text-foreground">
                {f.q}
                <ChevronRight className="h-5 w-5 text-primary transition group-open:rotate-90" />
              </summary>
              <p className="mt-3 text-sm text-muted-foreground">{f.a}</p>
            </details>
          ))}
        </div>
      </div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </section>
  );
}

/* ---------------- Popular Searches ---------------- */

const popularSearches: { label: string; to: string }[] = [
  { label: "Amity Online Admission", to: "/amity-online-admission" },
  { label: "Amity Online MBA", to: "/courses/mba" },
  { label: "Amity Online MCA", to: "/courses/mca" },
  { label: "Amity Online BCA", to: "/courses/bca" },
  { label: "Amity Online BBA", to: "/courses/bba" },
  { label: "Amity Online BA", to: "/courses/ba" },
  { label: "Amity Online B.Com", to: "/courses/bcom" },
  { label: "Amity Online M.Com", to: "/courses/mcom" },
  { label: "Amity Online MA", to: "/courses/ma" },
  { label: "Amity Online Courses", to: "/amity-online-courses" },
  { label: "Amity Online Fees", to: "/amity-online-fees" },
  { label: "Amity Online Eligibility", to: "/amity-online-eligibility" },
  { label: "Amity Online Review", to: "/amity-online-review" },
  { label: "Amity Online Placement", to: "/amity-online-placement" },
  { label: "Amity Online Scholarship", to: "/amity-online-scholarship" },
  { label: "Amity Admission Last Date", to: "/amity-online-admission-last-date" },
];

export function PopularSearches() {
  return (
    <section className="bg-background py-12 sm:py-14">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold text-foreground sm:text-3xl">Popular Searches</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          High-intent Amity Online pages other students explored.
        </p>
        <ul className="mt-6 flex flex-wrap gap-2">
          {popularSearches.map((p) => (
            <li key={p.to}>
              <Link
                to={p.to}
                className="inline-flex items-center rounded-full border border-border bg-card px-3.5 py-1.5 text-xs font-semibold text-foreground transition hover:border-primary hover:text-primary sm:text-sm"
              >
                {p.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

/* ---------------- SEO Page Layout ---------------- */

export type SeoSection = {
  heading: string;
  body?: ReactNode;
  bullets?: string[];
};

export function SeoPageLayout({
  title,
  intro,
  breadcrumb,
  sections,
  faqs,
  cta = "Talk to an Amity Online Counselor",
}: {
  title: string;
  intro: string;
  breadcrumb: Crumb[];
  sections: SeoSection[];
  faqs: { q: string; a: string }[];
  cta?: string;
}) {
  const { open, setOpen } = useModalTrigger();
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <Breadcrumb items={breadcrumb} />
      <main>
        <section
          className="bg-background py-12 sm:py-16"
          style={{
            backgroundImage:
              "linear-gradient(135deg, color-mix(in oklab, var(--primary) 10%, transparent), transparent 60%)",
          }}
        >
          <div className="mx-auto grid max-w-7xl items-start gap-10 px-4 sm:px-6 lg:grid-cols-[1fr_380px] lg:px-8">
            <div>
              <div className="mb-4 flex items-center gap-3">
                <img src={LOGO_SRC} alt="Amity Online" className="h-14 w-auto sm:h-16" />
                <img src={AVEDU_LOGO_SRC} alt="avedu" className="h-10 w-auto sm:h-12" />
              </div>
              <h1 className="text-3xl font-bold leading-tight text-foreground sm:text-4xl lg:text-5xl">
                {title}
              </h1>
              <p className="mt-4 max-w-2xl text-base text-muted-foreground sm:text-lg">{intro}</p>
              <div className="mt-6 flex flex-wrap gap-3">
                <button
                  type="button"
                  onClick={openModal}
                  className="inline-flex items-center gap-2 rounded-md bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-[var(--shadow-brand)] transition hover:opacity-90"
                >
                  Apply Now <ChevronRight className="h-4 w-4" />
                </button>
                <a
                  href={CALL_TEL}
                  className="inline-flex items-center gap-2 rounded-md border border-border bg-background px-6 py-3 text-sm font-semibold text-foreground transition hover:bg-accent"
                >
                  <Phone className="h-4 w-4" /> Call Now
                </a>
              </div>
            </div>
            <div className="lg:sticky lg:top-24">
              <LeadFormCompact />
            </div>
          </div>
        </section>

        {sections.map((s, i) => (
          <div key={s.heading}>
            <section className={i % 2 === 0 ? "bg-background py-14" : "bg-secondary/40 py-14"}>
              <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
                <h2 className="text-2xl font-bold text-foreground sm:text-3xl">{s.heading}</h2>
                {s.body && (
                  <div className="prose prose-sm mt-4 max-w-none text-muted-foreground sm:prose-base">
                    {s.body}
                  </div>
                )}
                {s.bullets && (
                  <ul className="mt-5 grid gap-3 sm:grid-cols-2">
                    {s.bullets.map((b) => (
                      <li
                        key={b}
                        className="flex items-start gap-2 rounded-lg border border-border bg-card p-4 text-sm text-foreground"
                      >
                        <ChevronRight className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </section>

            {i > 0 && i % 2 === 1 && i < sections.length - 1 && (
              <section className="relative overflow-hidden py-10">
                <div className="absolute inset-0 -z-10" style={{ background: "var(--gradient-brand)" }} />
                <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-4 px-4 text-center text-primary-foreground sm:flex-row sm:text-left sm:px-6 lg:px-8">
                  <p className="text-lg font-bold sm:text-xl">{cta}</p>
                  <button
                    type="button"
                    onClick={openModal}
                    className="inline-flex items-center gap-2 rounded-md bg-background px-5 py-2.5 text-sm font-bold text-primary shadow-lg"
                  >
                    Request Callback <ChevronRight className="h-4 w-4" />
                  </button>
                </div>
              </section>
            )}
          </div>
        ))}

        <SeoFaq items={faqs} />
        <PopularSearches />
      </main>
      <SiteFooter />
      <StickyActionBar />
      <CounselingModal open={open} onClose={() => setOpen(false)} />
    </div>
  );
}
