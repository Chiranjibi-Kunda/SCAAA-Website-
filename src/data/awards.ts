import anandaHotaPhoto from "../assets/awards/ananda-hota.jpeg";
import nikhilMohanPattnaikPhoto from "../assets/awards/nikhil-mohan-pattnaik.jpg";
import ajitMohanSrivastavaPhoto from "../assets/awards/ajit-mohan-srivastava.jpg";
import subhenduPattanaikPhoto from "../assets/awards/subhendu-pattanaik.png";
import sureshKumarPatraPhoto from "../assets/awards/suresh-kumar-patra.jpeg";
import ceremony2018One from "../assets/awards/2018-ceremony-1.png";
import ceremony2018Two from "../assets/awards/2018-ceremony-2.png";
import ceremony2018Three from "../assets/awards/2018-ceremony-3.png";
import ceremony2018Four from "../assets/awards/2018-ceremony-4.png";

export interface AwardRecipient {
  name: string;
  photo?: string;
  profileLines: [string, string];
}

export interface AwardEntry {
  year: string;
  occasion: string;
  officeBearers: { president: string; secretary: string };
  recipients: AwardRecipient[];
  eventPhotos: string[];
  video?: { embedUrl: string; title: string };
  isPlaceholder?: boolean;
}

const profilePending: [string, string] = [
  "Profile details are awaiting SCAAA verification.",
  "A short note on the awardee's contribution will be added here.",
];

const annualRecordPending = (year: string): AwardEntry => ({
  year,
  occasion: "Annual function details to be verified",
  officeBearers: { president: "President to be verified", secretary: "Secretary to be verified" },
  recipients: [{ name: "Awardee information to be verified", profileLines: profilePending }],
  eventPhotos: [],
  isPlaceholder: true,
});

export const samantaChandrasekharAwards: AwardEntry[] = [
  {
    year: "2025",
    occasion: "Annual function details to be verified",
    officeBearers: { president: "President to be verified", secretary: "Secretary to be verified" },
    recipients: [{ name: "Prof. Suresh Kumar Patra", photo: sureshKumarPatraPhoto, profileLines: profilePending }],
    eventPhotos: [],
  },
  {
    year: "2024",
    occasion: "Annual function details to be verified",
    officeBearers: { president: "President to be verified", secretary: "Secretary to be verified" },
    recipients: [
      { name: "Prof. Lambodar Prasad Singh", profileLines: profilePending },
      { name: "Prof. Ajit Mohan Srivastava", photo: ajitMohanSrivastavaPhoto, profileLines: profilePending },
      { name: "Dr. Subhendu Pattanaik", photo: subhenduPattanaikPhoto, profileLines: profilePending },
    ],
    eventPhotos: [],
    video: { embedUrl: "https://www.youtube-nocookie.com/embed/CSAbaGr95mo?rel=0", title: "Samanta Chandrasekhar Award 2024 ceremony" },
  },
  annualRecordPending("2023"),
  annualRecordPending("2022"),
  annualRecordPending("2021"),
  annualRecordPending("2020"),
  annualRecordPending("2019"),
  {
    year: "2018",
    occasion: "Inaugural award year · Silver Jubilee year",
    officeBearers: { president: "President to be verified", secretary: "Secretary to be verified" },
    recipients: [
      { name: "Prof. Prahallad Chandra Naik", profileLines: profilePending },
      { name: "Dr. Nikhil Mohan Pattnaik (Srujanika)", photo: nikhilMohanPattnaikPhoto, profileLines: profilePending },
      { name: "Dr. Ananda Hota", photo: anandaHotaPhoto, profileLines: profilePending },
    ],
    eventPhotos: [ceremony2018One, ceremony2018Two, ceremony2018Three, ceremony2018Four],
  },
];
