import { imagery, membershipTypes } from "../data/content";
import { PageHero, SectionHeader } from "../components/Sections";

export default function MembershipPage() {
  return (
    <>
      <PageHero eyebrow="Membership" title="Be Part of the Journey" copy="A clear membership page for people who want to learn astronomy, attend observations, support outreach and grow with the Samanta Chandra Shekhar Amateur Astronomers' Association (SCAAA) community." image={imagery.telescope} />
      <section className="section">
        <SectionHeader title="Why Join SCAAA?" />
        <div className="benefit-list">{["Learn astronomy", "Attend events", "Participate in observations", "Meet enthusiasts", "Support science popularization", "Improve astronomy skills"].map((item) => <span key={item}>{item}</span>)}</div>
        <div className="card-grid two">
          {membershipTypes.map((type) => (
            <article className="program-card" key={type.id}>
              <span className="tag tag-warm">{type.fee}</span>
              <h3>{type.name}</h3>
              <p>{type.description}</p>
              <ul>{type.benefits.map((benefit) => <li key={benefit}>{benefit}</li>)}</ul>
              <button className="button">Join SCAAA</button>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
