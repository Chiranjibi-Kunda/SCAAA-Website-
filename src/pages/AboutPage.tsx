import { imagery, people } from "../data/content";
import { PageHero, PlaceholderBanner, SectionHeader } from "../components/Sections";
import { tr, useLocale } from "../lib/i18n";

export default function AboutPage() {
  const locale = useLocale();
  return (
    <>
      <PageHero eyebrow={tr(locale, "About SCAAA")} title="Samanta Chandra Shekhar Amateur Astronomers' Association" copy="SCAAA was established in 1993 and is based in Bhubaneswar, Odisha, India. This page is prepared for verified history, committee details and annual reports." image={imagery.association} />
      <section className="section split-section">
        <div>
          <SectionHeader title={tr(locale, "Our Story")} />
          <p>Samanta Chandra Shekhar Amateur Astronomers' Association (SCAAA) works to popularize astronomy and scientific thinking among the public, students, schools, colleges and communities through observations, outreach programs, workshops and educational activities.</p>
          <PlaceholderBanner>Detailed historical milestones must be supplied by SCAAA before publication.</PlaceholderBanner>
        </div>
        <div className="timeline">
          {["1993 · Foundation", "Early Outreach · Details required", "School & Community Programs · Details required", "Expansion · Details required", "Present Day · Verified update required"].map((item) => (
            <span key={item}>{item}</span>
          ))}
        </div>
      </section>
      <section className="section">
        <SectionHeader eyebrow={tr(locale, "People")} title={tr(locale, "Committee, Advisors and Volunteers")} copy="Profiles are structured and ready, with placeholders until names and roles are verified." />
        <div className="card-grid three">
          {people.map((person) => (
            <article className="profile-card" key={person.id}>
              <span className="avatar" />
              <h3>{person.name}</h3>
              <p className="meta">{person.role}</p>
              <p>{person.bio}</p>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
