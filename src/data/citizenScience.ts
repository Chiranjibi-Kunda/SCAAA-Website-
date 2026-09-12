import workshop2017 from "../assets/citizen-science/2017-rad-at-scaaa-group.png";
import workshop2024Poster from "../assets/citizen-science/2024-rad-at-home-workshop-poster.png";
import workshop2024Session from "../assets/citizen-science/2024-rad-at-home-workshop-session.png";

export const radAtHomeSource = "https://www.radathomeindia.org/";

export const radAtHomeSummary = {
  title: "A route into research",
  copy: "Founded on 15 April 2013, RAD@home Astronomy Collaboratory is India's first citizen-science research platform in astronomy. Its inter-university model invites undergraduate and graduate learners to work with multi-wavelength views of galaxies, connecting ultraviolet, optical, infrared, and radio observations to real questions in extragalactic astronomy. Through #ABCDresearch - Anybody Can Do research - participants learn how to inspect evidence, frame questions, and collaborate around discoveries.",
};

export const radAtHomeWorkshops = [
  {
    year: "2017",
    title: "RAD@SCAAA RGB Workshop",
    date: "26 March 2017",
    venue: "Institute of Physics (IOP)",
    lead: "Workshop by Dr. Ananda Hota",
    copy: "The workshop introduced RGB image work in a shared learning setting, bringing participants together around astronomical images and the methods used to read them.",
    photographNote: "Workshop record: RGB workshop by Dr. Ananda Hota at RAD@SCAAA on 26 March 2017 at IOP, with acknowledgements to Profs. L. Satpathy and Suresh Patra, Dr. Subhendu Pattanaik, and Mr. Prasant Das.",
    images: [{ src: workshop2017, alt: "2017 RAD@SCAAA RGB workshop group photograph" }],
  },
  {
    year: "2024",
    title: "RAD@home Astronomy Workshop",
    date: "11 August 2024 · 10:00 AM–1:00 PM",
    venue: "OUTR, Bhubaneswar",
    lead: "Basic multi-wavelength image analysis for citizen-science research",
    copy: "SCAAA, RAD@home, and OUTR organised a workshop on UV, optical, IR, and radio image analysis for research into black-hole galaxy evolution using GMRT data.",
    images: [
      { src: workshop2024Poster, alt: "2024 RAD@home Astronomy Workshop poster" },
      { src: workshop2024Session, alt: "2024 RAD@home Astronomy Workshop session at OUTR" },
    ],
  },
] as const;
