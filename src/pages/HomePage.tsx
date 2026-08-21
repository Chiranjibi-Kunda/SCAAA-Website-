import type { CSSProperties } from "react";
import { ArrowRight, Globe2, Moon, RadioTower, Sparkles, Telescope } from "lucide-react";
import { articles, celestialEvent, events, gallery, imagery, impactStats, outreachPrograms } from "../data/content";
import { t } from "../lib/i18n";
import type { Locale } from "../types/content";
import { Link } from "../components/Link";
import { ArticleCard, EventCard, PlaceholderBanner, SectionHeader } from "../components/Sections";

export default function HomePage({ locale }: { locale: Locale }) {
  return (
    <>
      <section className="hero">
        <div className="star-layer" />
        <div className="hero-content">
          <p className="eyebrow">{t(locale, "eyebrow")}</p>
          <h1>SCAAA</h1>
          <p className="hero-full-name">Samanta Chandra Shekhar Amateur Astronomers' Association</p>
          <h2>{t(locale, "heroTitle")}</h2>
          <p>{t(locale, "heroCopy")}</p>
          <div className="hero-actions">
            <Link href="/events" className="button">{t(locale, "exploreEvents")} <ArrowRight size={18} /></Link>
            <Link href="/membership" className="button button-secondary">{t(locale, "joinScaaa")}</Link>
          </div>
        </div>
      </section>

      <section className="featured-band">
        <div>
          <p className="eyebrow">{celestialEvent.label}</p>
          <h2>{celestialEvent.title}</h2>
          <p>{celestialEvent.detail}</p>
        </div>
        <div className="moon-widget" aria-label="Reusable sky tonight module">
          <Moon />
          <span>{celestialEvent.date}</span>
        </div>
      </section>

      <section className="section">
        <SectionHeader eyebrow="Events & Activities" title="Upcoming Programs" copy="A clear event system ready for verified SCAAA schedules, registration links and venue details." />
        <div className="card-grid three">
          {events.map((event) => <EventCard event={event} key={event.id} />)}
        </div>
      </section>

      <section className="section split-section">
        <div>
          <SectionHeader eyebrow="About SCAAA" title="Astronomy, Science and Community Since 1993" />
          <p>Samanta Chandra Shekhar Amateur Astronomers' Association (SCAAA) is based in Bhubaneswar, Odisha, India and works to popularize astronomy and scientific thinking through public education, telescope observations, workshops and outreach programs.</p>
          <Link href="/about" className="text-link">Discover Our Story <ArrowRight size={16} /></Link>
        </div>
        <div className="observatory-panel" style={{ "--panel-image": `url(${imagery.observatory})` } as CSSProperties}>
          <Telescope />
          <strong>Official photo area</strong>
          <span>Replace with verified SCAAA outreach or observation photography.</span>
        </div>
      </section>

      <section className="stats-section">
        {impactStats.map((stat) => (
          <div key={stat.label}>
            <strong>{stat.value}</strong>
            <span>{stat.label}</span>
          </div>
        ))}
      </section>

      <section className="section">
        <SectionHeader eyebrow="Astrophotography" title="Image of the Month" copy="A visual gallery prepared for member astrophotography, object metadata and equipment details." />
        <div className="image-feature">
          <img src={gallery[0].image} alt="Placeholder astronomy gallery visual" />
          <div>
            <span className="tag tag-warm">Verified image required</span>
            <h3>{gallery[0].title}</h3>
            <p><strong>Object:</strong> {gallery[0].object}</p>
            <p><strong>Photographer:</strong> {gallery[0].photographer}</p>
            <p>{gallery[0].description}</p>
            <Link href="/astrophotography" className="button button-secondary">Explore Gallery</Link>
          </div>
        </div>
      </section>

      <section className="section">
        <SectionHeader eyebrow="Learn Astronomy" title="A Mini Learning Platform" copy="Beginner-friendly resources organized for observing, exploring and participating." />
        <div className="card-grid three">
          {articles.map((article) => <ArticleCard article={article} key={article.id} />)}
        </div>
      </section>

      <section className="section outreach-band">
        <SectionHeader eyebrow="Outreach" title="Taking Astronomy Beyond the City" copy="Programs for schools, colleges, public communities, science festivals and remote areas." />
        <div className="card-grid three">
          {outreachPrograms.map((program) => (
            <article className="program-card" key={program.id}>
              <RadioTower />
              <h3>{program.title}</h3>
              <p className="meta">{program.audience}</p>
              <p>{program.summary}</p>
            </article>
          ))}
        </div>
        <Link href="/outreach" className="button">Request an Outreach Program</Link>
      </section>

      <section className="section cta-band">
        <Globe2 />
        <h2>Be Part of the Journey</h2>
        <p>Join SCAAA to learn astronomy, attend observing sessions, participate in outreach and share scientific curiosity with the wider community.</p>
        <div className="hero-actions centered">
          <Link href="/membership" className="button">Become a Member</Link>
          <Link href="/support" className="button button-secondary">Support SCAAA</Link>
        </div>
      </section>

      <section className="section">
        <SectionHeader eyebrow="Latest News & Articles" title="Editorial Updates" copy="Announcements, astronomy articles and event reports can be published from structured data." />
        <PlaceholderBanner>News and real event reports should be added after verification. No fabricated reports are included.</PlaceholderBanner>
      </section>

      <section className="newsletter-section">
        <Sparkles />
        <h2>Stay Connected With the Night Sky</h2>
        <p>Get astronomy events, observing opportunities and SCAAA updates in your inbox.</p>
        <form className="inline-form large" onSubmit={(event) => event.preventDefault()}>
          <input type="email" required placeholder="Email address" aria-label="Email address" />
          <button className="button">Subscribe</button>
        </form>
      </section>
    </>
  );
}
