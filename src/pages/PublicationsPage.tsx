import { imagery, publications } from "../data/content";
import { PageHero, SectionHeader } from "../components/Sections";

export default function PublicationsPage() {
  return (
    <>
      <PageHero eyebrow="Publications" title="Newsletter, Articles and Archives" copy="An editorial area for newsletters, monthly meeting archives, magazines and astronomy articles." image={imagery.galaxy} />
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
