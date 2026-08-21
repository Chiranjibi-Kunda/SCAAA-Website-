import { articles, imagery } from "../data/content";
import { ArticleCard, PageHero, SectionHeader } from "../components/Sections";

const categories = ["Start Here", "Observe", "Explore", "Create", "Participate"];

export default function LearnPage() {
  return (
    <>
      <PageHero eyebrow="Learn Astronomy" title="A Practical Astronomy Learning Hub" copy="Structured for beginner guides, telescope basics, observing notes, astrophotography tutorials and citizen science resources." image={imagery.workshop} />
      <section className="section">
        <div className="tabs">{categories.map((category) => <button key={category}>{category}</button>)}</div>
        <SectionHeader title="Featured Lessons" />
        <div className="card-grid three">{articles.map((article) => <ArticleCard article={article} key={article.id} />)}</div>
      </section>
    </>
  );
}
