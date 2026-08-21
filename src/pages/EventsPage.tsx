import { CalendarDays, Filter } from "lucide-react";
import { events, imagery } from "../data/content";
import { EventCard, PageHero, PlaceholderBanner, SectionHeader } from "../components/Sections";

export default function EventsPage() {
  return (
    <>
      <PageHero eyebrow="Events & Activities" title="Find Your Next Observing Opportunity" copy="A modern event discovery page with list, calendar, filters and registration-ready event cards." image={imagery.skywatch} />
      <section className="section">
        <div className="toolbar">
          <label><Filter size={16} /> Category <select><option>All categories</option><option>Observation</option><option>Workshop</option><option>Outreach</option></select></label>
          <label><CalendarDays size={16} /> Date <input type="month" /></label>
          <input type="search" placeholder="Search events" aria-label="Search events" />
        </div>
        <div className="calendar-strip" aria-label="Calendar preview">
          {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map((day, index) => <span key={day}>{day}<strong>{index + 12}</strong></span>)}
        </div>
        <SectionHeader title="Upcoming Events" />
        <div className="card-grid three">{events.map((event) => <EventCard event={event} key={event.id} />)}</div>
        <PlaceholderBanner>Registration buttons are frontend placeholders until a form backend is selected.</PlaceholderBanner>
      </section>
    </>
  );
}
