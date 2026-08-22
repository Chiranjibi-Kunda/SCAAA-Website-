import { CalendarDays, Filter } from "lucide-react";
import { events, imagery } from "../data/content";
import { EventCard, PageHero, PlaceholderBanner, SectionHeader } from "../components/Sections";
import { tr, useLocale } from "../lib/i18n";

export default function EventsPage() {
  const locale = useLocale();
  return (
    <>
      <PageHero eyebrow={tr(locale, "Events & Activities")} title={tr(locale, "Find Your Next Observing Opportunity")} copy="A modern event discovery page with list, calendar, filters and registration-ready event cards." image={imagery.skywatch} />
      <section className="section">
        <div className="toolbar">
          <label><Filter size={16} /> {tr(locale, "Category")} <select><option>{tr(locale, "All categories")}</option><option>{tr(locale, "Observation")}</option><option>{tr(locale, "Workshop")}</option><option>{tr(locale, "Outreach")}</option></select></label>
          <label><CalendarDays size={16} /> {tr(locale, "Date")} <input type="month" /></label>
          <input type="search" placeholder={tr(locale, "Search events")} aria-label={tr(locale, "Search events")} />
        </div>
        <div className="calendar-strip" aria-label="Calendar preview">
          {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map((day, index) => <span key={day}>{day}<strong>{index + 12}</strong></span>)}
        </div>
        <SectionHeader title={tr(locale, "Upcoming Programs")} />
        <div className="card-grid three">{events.map((event) => <EventCard event={event} key={event.id} />)}</div>
        <PlaceholderBanner>Registration buttons are frontend placeholders until a form backend is selected.</PlaceholderBanner>
      </section>
    </>
  );
}
