import { HeartHandshake } from "lucide-react";
import { imagery } from "../data/content";
import { PageHero, SectionHeader } from "../components/Sections";
import { tr, useLocale } from "../lib/i18n";

export default function SupportPage() {
  const locale = useLocale();
  return (
    <>
      <PageHero eyebrow={tr(locale, "Support Us")} title={tr(locale, "Help Astronomy Reach More People")} copy="Support workflows are prepared for donations and volunteer registration once verified payment/contact details are supplied." image={imagery.classroom} />
      <section className="section split-section">
        <article className="program-card"><HeartHandshake /><h3>Donations</h3><p>Payment details are intentionally not listed until officially verified.</p><button className="button button-secondary">Donation Placeholder</button></article>
        <article className="program-card"><HeartHandshake /><h3>Volunteer Registration</h3><p>Collect interest from volunteers for observation sessions, outreach and event support.</p><button className="button">Volunteer</button></article>
      </section>
      <section className="section"><SectionHeader title="Future Free Options" copy="The forms can later connect to Google Forms, Formspree free tier, Firebase Hosting plus Firestore free tier, or a static form provider depending on needs." /></section>
    </>
  );
}
