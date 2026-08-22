import { Mail, MapPin, Phone } from "lucide-react";
import { imagery } from "../data/content";
import { PageHero, SectionHeader } from "../components/Sections";
import { tr, useLocale } from "../lib/i18n";

export default function ContactPage() {
  const locale = useLocale();
  return (
    <>
      <PageHero eyebrow={tr(locale, "Contact")} title={tr(locale, "Connect With SCAAA")} copy="A clean contact page ready for official address, phone, email, social media and map details." image={imagery.contact} />
      <section className="section split-section">
        <div>
          <SectionHeader title={tr(locale, "Contact Form")} copy="Frontend-only placeholder for now." />
          <form className="form-grid" onSubmit={(event) => event.preventDefault()}>
            <input required placeholder="Name" />
            <input type="email" required placeholder="Email" />
            <select><option>Reason for contact</option><option>Event</option><option>Membership</option><option>Outreach</option><option>Media</option></select>
            <textarea placeholder="Message" />
            <button className="button">{tr(locale, "Send Message")}</button>
          </form>
        </div>
        <aside className="contact-card">
          <p><MapPin /> Bhubaneswar, Odisha, India</p>
          <p><Mail /> Official email required</p>
          <p><Phone /> Official phone required</p>
          <div className="map-placeholder">Map embed placeholder</div>
        </aside>
      </section>
    </>
  );
}
