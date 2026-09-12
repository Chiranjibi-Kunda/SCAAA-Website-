import { ExternalLink, FileText, ScanText } from "lucide-react";
import { articles, imagery } from "../data/content";
import { newsletters } from "../data/newsletters";
import { ArticleCard, PageHero, SectionHeader } from "../components/Sections";
import { tr, useLocale } from "../lib/i18n";

const categories = ["Start Here", "Observe", "Explore", "Create", "Participate"];

export default function LearnPage() {
  const locale = useLocale();
  return (
    <>
      <PageHero eyebrow={tr(locale, "Learn Astronomy")} title={tr(locale, "A Practical Astronomy Learning Hub")} copy="Structured for beginner guides, telescope basics, observing notes, astrophotography tutorials and citizen science resources." image={imagery.workshop} />
      <section className="section">
        <div className="tabs">{categories.map((category) => <button key={category}>{category}</button>)}</div>
        <SectionHeader title={tr(locale, "Featured Lessons")} />
        <div className="card-grid three">{articles.map((article) => <ArticleCard article={article} key={article.id} />)}</div>
      </section>
      <section className="section learn-newsletters">
        <SectionHeader eyebrow="SCAAA Newsletter" title="Newsletter Archive" copy="A year-wise record of the SCAAA newsletters currently available in the supplied archive. New verified issues can be added here as the collection grows." />
        <div className="newsletter-archive">
          {newsletters.map((issue) => (
            <article className="newsletter-issue" key={issue.year}>
              <div className="newsletter-year"><span>Issue</span><strong>{issue.year}</strong></div>
              <div className="newsletter-issue-content">
                <h3>{issue.title}</h3>
                <p>{issue.summary}</p>
                {issue.document && <a className="newsletter-document" href={issue.document} target="_blank" rel="noreferrer"><FileText size={20} /><span>Read complete PDF</span><ExternalLink size={16} /></a>}
                {issue.pages && <div className="newsletter-pages">
                  {issue.pages.map((page) => <a href={page.src} target="_blank" rel="noreferrer" key={page.src}><img src={page.src} alt={page.label} /><span><ScanText size={14} /> {page.label}</span></a>)}
                </div>}
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
