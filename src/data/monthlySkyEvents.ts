export interface MonthlySkyEvent {
  date: string;
  title: string;
  detail: string;
}

export interface MonthlySkyCalendar {
  label: string;
  events: MonthlySkyEvent[];
}

export const astronomyCalendarSource = "https://www.timeanddate.com/astronomy/sights-to-see.html";

// Update this small, source-attributed dataset when Timeanddate publishes its next annual calendar.
const skyEvents2026: MonthlySkyEvent[] = [
  { date: "2026-01-03", title: "Quadrantid Meteor Shower", detail: "Look for brief, bright meteors around the January peak." },
  { date: "2026-01-10", title: "Jupiter at Opposition", detail: "Jupiter is well placed for all-night observing." },
  { date: "2026-02-17", title: "Annular Solar Eclipse", detail: "Visible only from selected southern regions; never observe the Sun without certified protection." },
  { date: "2026-02-19", title: "Mercury at Greatest Elongation", detail: "A good opportunity to look for Mercury in the evening sky." },
  { date: "2026-03-03", title: "Total Lunar Eclipse", detail: "The eclipse is visible from parts of Asia, including favourable regions of India." },
  { date: "2026-03-20", title: "March Equinox", detail: "The Sun crosses the celestial equator, marking the change of season." },
  { date: "2026-04-13", title: "Earthshine Mornings", detail: "Look for the Moon's dimly lit night side before sunrise." },
  { date: "2026-04-22", title: "Lyrid Meteor Shower", detail: "The Lyrids peak around April 22–23; darker skies improve the view." },
  { date: "2026-05-05", title: "Eta Aquarid Meteors", detail: "Early-morning viewing offers the best chance to spot the annual shower." },
  { date: "2026-05-31", title: "Micro Blue Moon", detail: "The second Full Moon of May is also a distant, smaller-looking Full Moon." },
  { date: "2026-06-15", title: "Mercury at Greatest Elongation", detail: "Mercury reaches a favourable separation from the Sun in the evening sky." },
  { date: "2026-06-21", title: "June Solstice", detail: "The Northern Hemisphere's longest day of the year." },
  { date: "2026-07-14", title: "New Moon", detail: "A dark-sky window for deep-sky observing, weather permitting." },
  { date: "2026-07-29", title: "Buck Moon", detail: "July's traditional Full Moon rises through the night." },
  { date: "2026-08-12", title: "Perseid Meteors", detail: "The Perseids peak under a New Moon, offering especially dark conditions." },
  { date: "2026-08-15", title: "Venus at Greatest Elongation", detail: "Bright Venus is prominent in the western sky after sunset." },
  { date: "2026-09-11", title: "New Moon", detail: "A moonless observing window for galaxies, nebulae, and star clusters." },
  { date: "2026-09-23", title: "September Equinox", detail: "The Sun crosses the celestial equator, marking autumn in the Northern Hemisphere." },
  { date: "2026-09-26", title: "Harvest Moon", detail: "September's Full Moon follows the equinox closely." },
  { date: "2026-10-04", title: "Saturn at Opposition", detail: "Saturn is visible from sunset to sunrise and well placed for observing." },
  { date: "2026-10-21", title: "Orionid Meteor Shower", detail: "Watch after midnight for meteors associated with Halley's Comet." },
  { date: "2026-11-17", title: "Leonid Meteor Shower", detail: "The Leonids peak around November 17–18 under dark skies." },
  { date: "2026-11-20", title: "Mercury at Greatest Elongation", detail: "Mercury reaches a favourable morning-sky position." },
  { date: "2026-12-14", title: "Geminid Meteors", detail: "One of the year's most reliable meteor showers peaks around December 14–15." },
  { date: "2026-12-21", title: "December Solstice", detail: "The Northern Hemisphere's shortest day of the year." },
];

export function getCurrentMonthSkyCalendar(now = new Date()): MonthlySkyCalendar {
  const year = now.getFullYear();
  const month = now.getMonth();
  const monthEvents = skyEvents2026.filter((event) => {
    const date = new Date(`${event.date}T00:00:00Z`);
    return date.getUTCFullYear() === year && date.getUTCMonth() === month;
  });

  return {
    label: new Intl.DateTimeFormat("en-IN", { month: "long", year: "numeric", timeZone: "Asia/Kolkata" }).format(now),
    events: monthEvents,
  };
}
