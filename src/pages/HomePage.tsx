import { useMemo, useState } from "react";
import type { CSSProperties } from "react";
import { ArrowRight, Globe2, ImageOff, Moon, RadioTower, Sparkles, Telescope } from "lucide-react";
import { articles, events, gallery, imagery, impactStats, outreachPrograms } from "../data/content";
import { astronomyCalendarSource, getCurrentMonthSkyCalendar } from "../data/monthlySkyEvents";
import { t, tr } from "../lib/i18n";
import type { Locale } from "../types/content";
import { Link } from "../components/Link";
import { ArticleCard, EventCard, PlaceholderBanner, SectionHeader } from "../components/Sections";
import { samantaChandrasekharAwards } from "../data/awards";
import hologramPortrait from "../assets/samanta-chandrasekhar-hologram.png";

export default function HomePage({ locale }: { locale: Locale }) {
  const [awardIndex, setAwardIndex] = useState(0);
  const award = samantaChandrasekharAwards[awardIndex];
  const skyCalendar = useMemo(() => getCurrentMonthSkyCalendar(), []);

  return (
    <>
      <section className="hero">
        <div className="star-layer" />
        <aside className="hero-hologram" aria-label="Holographic interpretation of Samanta Chandrasekhar">
          <div className="hologram-figure">
            <img className="hologram-disk" src={hologramPortrait} alt="" aria-hidden="true" />
            <img className="hologram-person" src={hologramPortrait} alt="Holographic interpretation of Samanta Chandrasekhar" />
          </div>
        </aside>
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
          <p className="eyebrow">Sky Calendar</p>
          <h2>{skyCalendar.label} Observing Highlights</h2>
          <p>Current-month celestial events curated from the annual Timeanddate astronomy calendar.</p>
          <a className="source-link" href={astronomyCalendarSource} target="_blank" rel="noreferrer">View source calendar</a>
        </div>
        <div className="monthly-sky-list" aria-label={`Astronomy events for ${skyCalendar.label}`}>
          <Moon />
          {skyCalendar.events.length > 0 ? skyCalendar.events.map((event) => (
            <article key={event.date}>
              <time dateTime={event.date}>{new Intl.DateTimeFormat("en-IN", { day: "numeric", month: "short", timeZone: "Asia/Kolkata" }).format(new Date(`${event.date}T00:00:00Z`))}</time>
              <div><strong>{event.title}</strong><p>{event.detail}</p></div>
            </article>
          )) : <p className="monthly-sky-empty">This calendar is awaiting its annual source update.</p>}
        </div>
      </section>

      <section className="section">
        <SectionHeader eyebrow={tr(locale, "Events & Activities")} title={tr(locale, "Upcoming Programs")} copy="A clear event system ready for verified SCAAA schedules, registration links and venue details." />
        <div className="card-grid three">
          {events.map((event) => <EventCard event={event} key={event.id} />)}
        </div>
      </section>

      <section className="section split-section">
        <div>
          <SectionHeader eyebrow={tr(locale, "About SCAAA")} title={tr(locale, "Astronomy, Science and Community Since 1993")} />
          <p>Samanta Chandra Shekhar Amateur Astronomers' Association (SCAAA) is based in Bhubaneswar, Odisha, India and works to popularize astronomy and scientific thinking through public education, telescope observations, workshops and outreach programs.</p>
          <Link href="/about" className="text-link">{tr(locale, "Discover Our Story")} <ArrowRight size={16} /></Link>
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

      <section className="section award-section">
        <SectionHeader eyebrow="Archive" title="Samanta Chandrasekhar Award" copy="Annual award records from the inaugural Silver Jubilee year onward. Office-bearer details, profiles, and missing ceremony photographs are clearly marked until verified by SCAAA." />
        <div className="award-timeline" role="tablist" aria-label="Award archive years">
          {samantaChandrasekharAwards.map((item, index) => (
            <button key={item.year} className={index === awardIndex ? "is-active" : ""} onClick={() => setAwardIndex(index)} role="tab" aria-selected={index === awardIndex}>{item.year}</button>
          ))}
        </div>
        <article className="award-record">
          <div className="award-record-head">
            <div><p className="eyebrow">Samanta Chandrasekhar Award · {award.year}</p><h3>{award.occasion}</h3></div>
            <dl className="award-office-bearers"><div><dt>President</dt><dd>{award.officeBearers.president}</dd></div><div><dt>Secretary</dt><dd>{award.officeBearers.secretary}</dd></div></dl>
          </div>
          <div className="awardee-grid">
            {award.recipients.map((recipient) => (
              <article className="awardee-card" key={recipient.name}>
                {recipient.photo ? <img src={recipient.photo} alt={recipient.name} /> : <div className="awardee-photo-placeholder"><ImageOff size={22} /><span>Photograph to be added</span></div>}
                <div><h4>{recipient.name}</h4><p>{recipient.profileLines[0]}</p><p>{recipient.profileLines[1]}</p></div>
              </article>
            ))}
          </div>
          {award.video && <div className="award-video"><iframe src={award.video.embedUrl} title={award.video.title} loading="lazy" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen /></div>}
          <div className="award-ceremony">
            <p className="eyebrow">Annual Function Gallery</p>
            {award.eventPhotos.length > 0 ? <div className="award-photo-grid">{award.eventPhotos.map((photo, index) => <img src={photo} alt={`${award.year} Samanta Chandrasekhar Award annual function ${index + 1}`} key={photo} />)}</div> : <div className="award-event-placeholder"><ImageOff size={20} /><span>Annual function photographs to be added after verification.</span></div>}
          </div>
        </article>
      </section>

      <section className="section">
        <SectionHeader eyebrow={tr(locale, "Astrophotography")} title={tr(locale, "Image of the Month")} copy="A visual gallery prepared for member astrophotography, object metadata and equipment details." />
        <div className="image-feature">
          <img src={gallery[0].image} alt="Placeholder astronomy gallery visual" />
          <div>
            <span className="tag tag-warm">Verified image required</span>
            <h3>{gallery[0].title}</h3>
            <p><strong>Object:</strong> {gallery[0].object}</p>
            <p><strong>Photographer:</strong> {gallery[0].photographer}</p>
            <p>{gallery[0].description}</p>
            <Link href="/astrophotography" className="button button-secondary">{tr(locale, "Explore Gallery")}</Link>
          </div>
        </div>
      </section>

      <section className="section">
        <SectionHeader eyebrow={tr(locale, "Learn Astronomy")} title="A Mini Learning Platform" copy="Beginner-friendly resources organized for observing, exploring and participating." />
        <div className="card-grid three">
          {articles.map((article) => <ArticleCard article={article} key={article.id} />)}
        </div>
      </section>

      <section className="section outreach-band">
        <SectionHeader eyebrow={tr(locale, "Outreach")} title="Taking Astronomy Beyond the City" copy="Programs for schools, colleges, public communities, science festivals and remote areas." />
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
        <Link href="/outreach" className="button">{tr(locale, "Request an Outreach Program")}</Link>
      </section>

      <section className="section citizen-section">
        <div>
          <p className="eyebrow">Citizen Science</p>
          <h2>Galaxy. Data. People. Discovery.</h2>
          <p>SCAAA x RAD@home collaboration information and participation pathways will be published from verified programme data.</p>
          <Link href="/citizen-science" className="button button-secondary">Explore Citizen Science</Link>
        </div>
        <div className="citizen-galaxy" aria-hidden="true"><span /><span /><span /></div>
      </section>

      <section className="section cta-band">
        <Globe2 />
        <h2>{tr(locale, "Be Part of the Journey")}</h2>
        <p>Join SCAAA to learn astronomy, attend observing sessions, participate in outreach and share scientific curiosity with the wider community.</p>
        <div className="hero-actions centered">
          <Link href="/membership" className="button">{tr(locale, "Become a Member")}</Link>
          <Link href="/support" className="button button-secondary">{tr(locale, "Support Us")}</Link>
        </div>
      </section>

      <section className="section">
        <SectionHeader eyebrow={tr(locale, "Latest News & Articles")} title={tr(locale, "Editorial Updates")} copy="Announcements, astronomy articles and event reports can be published from structured data." />
        <PlaceholderBanner>News and real event reports should be added after verification. No fabricated reports are included.</PlaceholderBanner>
      </section>

      <section className="newsletter-section">
        <Sparkles />
        <h2>{tr(locale, "Stay Connected With the Night Sky")}</h2>
        <p>Get astronomy events, observing opportunities and SCAAA updates in your inbox.</p>
        <form className="inline-form large" onSubmit={(event) => event.preventDefault()}>
          <input type="email" required placeholder={tr(locale, "Email address")} aria-label={tr(locale, "Email address")} />
          <button className="button">{tr(locale, "Subscribe")}</button>
        </form>
      </section>
    </>
  );
}
