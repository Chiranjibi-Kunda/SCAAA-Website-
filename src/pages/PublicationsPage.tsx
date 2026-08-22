import { imagery, publications } from "../data/content";
import { PageHero, SectionHeader } from "../components/Sections";
import { tr, useLocale } from "../lib/i18n";

export default function PublicationsPage() {
  const locale = useLocale();
  return (
    <>
      <PageHero eyebrow={tr(locale, "Publications")} title={tr(locale, "Newsletter, Articles and Archives")} copy="An editorial area for newsletters, monthly meeting archives, magazines and astronomy articles." image={imagery.galaxy} />
      <section className="section">
        <div className="toolbar"><input type="search" placeholder="Search publications" /><select><option>All types</option><option>Newsletter</option><option>Article</option><option>Archive</option></select></div>
        <SectionHeader title="Publication Library" />
        <div className="list-stack">
          {publications.map((item) => (
            <article className="list-item" key={item.id}>
              <span className="tag">{item.type}</span>
              <h3>{item.title}</h3>
              <p>{item.summary}</p>
              <p className="meta">{item.date} · {item.author}</p>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
