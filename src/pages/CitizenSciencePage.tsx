import { ArrowUpRight, Database, Telescope, UsersRound } from "lucide-react";
import { PageHero, SectionHeader } from "../components/Sections";
import { radAtHomeSource, radAtHomeSummary, radAtHomeWorkshops } from "../data/citizenScience";
import radLogo from "../assets/rad-at-home-logo.png";

const waysToContribute = [
  { icon: Telescope, title: "Observe", copy: "Build practical familiarity with the night sky, telescopes, images, and astronomical questions." },
  { icon: Database, title: "Analyse", copy: "Learn how observations across the electromagnetic spectrum can reveal structures and activity beyond the Milky Way." },
  { icon: UsersRound, title: "Collaborate", copy: "Take part in a learning community where students and citizen scientists can develop research skills together." },
];

export default function CitizenSciencePage() {
  return (
    <>
      <PageHero eyebrow="SCAAA × RAD@home" title="Citizen Science, With a Research Horizon" copy="SCAAA has hosted RAD@home workshops in 2017 and 2024, connecting local learners with multi-wavelength astronomy and the practice of collaborative research." />

      <section className="section citizen-intro">
        <div>
          <SectionHeader eyebrow="RAD@home India" title={radAtHomeSummary.title} copy={radAtHomeSummary.copy} />
          <a className="text-link" href={radAtHomeSource} target="_blank" rel="noreferrer">Visit RAD@home India <ArrowUpRight size={16} /></a>
        </div>
        <aside className="citizen-signal"><img src={radLogo} alt="RAD@home logo" /></aside>
      </section>

      <section className="section citizen-workshops">
        <SectionHeader eyebrow="SCAAA Workshop Record" title="Two Workshops, One Continuing Conversation" copy="SCAAA has welcomed RAD@home learners and mentors into local spaces for hands-on astronomy learning. The 2017 and 2024 workshops reflect the association's continuing role in bringing observational practice, image analysis, and research-led scientific curiosity to the Bhubaneswar community." />
        <div className="workshop-timeline">
          {radAtHomeWorkshops.map((workshop) => (
            <article className="workshop-record" key={workshop.year}>
              <div className="workshop-meta"><strong>{workshop.year}</strong><span>{workshop.date}</span></div>
              <div className="workshop-content">
                <p className="eyebrow">{workshop.venue}</p>
                <h2>{workshop.title}</h2>
                <h3>{workshop.lead}</h3>
                <p>{workshop.copy}</p>
                {"photographNote" in workshop && <p className="workshop-photo-note">{workshop.photographNote}</p>}
                <div className={`workshop-media workshop-media-${workshop.images.length}`}>
                  {workshop.images.map((image) => <figure key={image.src}><img src={image.src} alt={image.alt} /><figcaption>{workshop.year} workshop record</figcaption></figure>)}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section citizen-paths">
        <SectionHeader eyebrow="How It Works" title="From Curiosity to Contribution" copy="A citizen-science pathway works best when it is practical, collaborative, and anchored in real astronomical data." />
        <div className="card-grid three">
          {waysToContribute.map(({ icon: Icon, title, copy }) => <article className="program-card" key={title}><Icon /><h3>{title}</h3><p>{copy}</p></article>)}
        </div>
      </section>
    </>
  );
}
