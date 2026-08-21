import { useState } from "react";
import { X } from "lucide-react";
import { gallery, imagery } from "../data/content";
import { PageHero, SectionHeader } from "../components/Sections";

export default function AstrophotographyPage() {
  const [selected, setSelected] = useState<(typeof gallery)[number] | null>(null);

  return (
    <>
      <PageHero eyebrow="Astrophotography" title="Member Gallery and Image of the Month" copy="A visual-first gallery with lightbox behavior and metadata fields ready for verified member submissions." image={imagery.nebula} />
      <section className="section">
        <SectionHeader title="Gallery" />
        <div className="masonry">
          {gallery.map((image) => (
            <button key={image.id} onClick={() => setSelected(image)} className="gallery-tile">
              <img src={image.image} alt={image.title} />
              <span>{image.title}</span>
            </button>
          ))}
        </div>
      </section>
      {selected && (
        <div className="lightbox" role="dialog" aria-label={selected.title}>
          <button className="icon-button search-close" onClick={() => setSelected(null)} title="Close" aria-label="Close"><X /></button>
          <img src={selected.image} alt={selected.title} />
          <aside>
            <h2>{selected.title}</h2>
            <p><strong>Object:</strong> {selected.object}</p>
            <p><strong>Photographer:</strong> {selected.photographer}</p>
            <p><strong>Equipment:</strong> {selected.equipment}</p>
            <p>{selected.description}</p>
          </aside>
        </div>
      )}
    </>
  );
}
