import { Orbit, Telescope } from "lucide-react";
import { PageHero, PlaceholderBanner, SectionHeader } from "../components/Sections";

export default function CitizenSciencePage() {
  return (
    <>
      <PageHero eyebrow="Citizen Science" title="From Observation to Discovery" copy="A dedicated space for SCAAA citizen-science participation and its RAD@home collaboration. Verified programme details will be published here when supplied by SCAAA." />
      <section className="section split-section">
        <div>
          <SectionHeader eyebrow="SCAAA x RAD@home" title="Look Closer. Contribute Meaningfully." copy="Citizen science can connect careful observation, astronomical data and public participation." />
          <PlaceholderBanner>RAD@home collaboration activities, participation pathways and scientific impact must be verified by SCAAA before publication.</PlaceholderBanner>
        </div>
        <aside className="citizen-orbit" aria-hidden="true"><Orbit size={104} /><Telescope size={46} /></aside>
      </section>
    </>
  );
}
