import { Camera, Download, Newspaper, Play } from "lucide-react";
import { imagery } from "../data/content";
import { PageHero, SectionHeader } from "../components/Sections";

const mediaItems = [
  { icon: Camera, title: "Photo Gallery", copy: "Verified SCAAA event photographs can be organized here." },
  { icon: Play, title: "Video Gallery", copy: "Public talks, event videos and observation clips can be linked here." },
  { icon: Newspaper, title: "Press Releases", copy: "Official press material and media coverage records." },
  { icon: Download, title: "Downloads", copy: "Posters, brochures, forms and public resources." },
];

export default function MediaPage() {
  return (
    <>
      <PageHero eyebrow="Media Center" title="SCAAA in Images, Video and Press" copy="Media resources for Samanta Chandra Shekhar Amateur Astronomers' Association, structured for galleries, press releases, coverage and downloads." image={imagery.moon} />
      <section className="section">
        <SectionHeader title="Media Library" />
        <div className="card-grid four">{mediaItems.map((item) => <article className="program-card" key={item.title}><item.icon /><h3>{item.title}</h3><p>{item.copy}</p></article>)}</div>
      </section>
    </>
  );
}
