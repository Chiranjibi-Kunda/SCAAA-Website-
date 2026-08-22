import type { CSSProperties, ReactNode } from "react";
import { CalendarDays, ChevronRight, MapPin, Telescope } from "lucide-react";
import type { Article, EventItem } from "../types/content";
import { Link } from "./Link";
import { tr, useLocale } from "../lib/i18n";

export function SectionHeader({ eyebrow, title, copy }: { eyebrow?: string; title: string; copy?: string }) {
  return (
    <div className="section-header">
      {eyebrow && <p className="eyebrow">{eyebrow}</p>}
      <h2>{title}</h2>
      {copy && <p>{copy}</p>}
    </div>
  );
}

export function PageHero({ eyebrow, title, copy, image, children }: { eyebrow: string; title: string; copy: string; image?: string; children?: ReactNode }) {
  return (
    <section className="page-hero" style={image ? ({ "--page-hero-image": `url(${image})` } as CSSProperties) : undefined}>
      <div>
        <p className="eyebrow">{eyebrow}</p>
        <h1>{title}</h1>
        <p>{copy}</p>
        {children}
      </div>
    </section>
  );
}

export function EventCard({ event }: { event: EventItem }) {
  const locale = useLocale();
  return (
    <article className="content-card event-card">
      <img src={event.image} alt="" loading="lazy" />
      <div>
        <span className="tag">{event.category}</span>
        {event.isPlaceholder && <span className="tag tag-warm">{tr(locale, "Placeholder")}</span>}
        <h3>{event.title}</h3>
        <p><CalendarDays size={16} /> {event.date} · {event.time}</p>
        <p><MapPin size={16} /> {event.location}</p>
        <p>{event.summary}</p>
        <Link href="/events" className="text-link">{tr(locale, "View details")} <ChevronRight size={16} /></Link>
      </div>
    </article>
  );
}

export function ArticleCard({ article }: { article: Article }) {
  const locale = useLocale();
  return (
    <article className="content-card">
      <img src={article.image} alt="" loading="lazy" />
      <div>
        <span className="tag">{article.category}</span>
        {article.isPlaceholder && <span className="tag tag-warm">{tr(locale, "Draft")}</span>}
        <h3>{article.title}</h3>
        <p>{article.summary}</p>
        <p className="meta">{article.readingTime} · {article.difficulty ?? "General"} · {article.author}</p>
      </div>
    </article>
  );
}

export function PlaceholderBanner({ children }: { children: ReactNode }) {
  return (
    <div className="placeholder-banner">
      <Telescope size={20} />
      <span>{children}</span>
    </div>
  );
}
