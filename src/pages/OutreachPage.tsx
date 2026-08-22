import { imagery, outreachPrograms } from "../data/content";
import { PageHero, SectionHeader } from "../components/Sections";
import { tr, useLocale } from "../lib/i18n";

export default function OutreachPage() {
  const locale = useLocale();
  return (
    <>
      <PageHero eyebrow={tr(locale, "Outreach Programs")} title={tr(locale, "Astronomy Beyond the City")} copy="Samanta Chandra Shekhar Amateur Astronomers' Association (SCAAA) outreach can bring telescope observation, astronomy education and scientific thinking activities to schools, colleges, communities and science festivals." image={imagery.community} />
      <section className="section">
        <div className="card-grid three">
          {outreachPrograms.map((program) => (
            <article className="program-card" key={program.id}>
              <h3>{program.title}</h3>
              <p className="meta">{program.audience}</p>
              <p>{program.summary}</p>
              <button className="button button-secondary">{program.requestLabel}</button>
            </article>
          ))}
        </div>
      </section>
      <section className="section form-section">
        <SectionHeader title={tr(locale, "Request an Outreach Event")} copy="This form is frontend-only for now and ready to connect to Google Forms, Formspree or email later." />
        <form className="form-grid" onSubmit={(event) => event.preventDefault()}>
          <input required placeholder="Institution / community name" />
          <input required placeholder="Contact person" />
          <input type="email" required placeholder="Email address" />
          <input placeholder="Phone placeholder" />
          <select><option>Program type</option><option>School</option><option>College</option><option>Community</option><option>Science festival</option></select>
          <textarea placeholder="Tell us about your audience, location and preferred dates" />
          <button className="button">Submit Request</button>
        </form>
      </section>
    </>
  );
}
