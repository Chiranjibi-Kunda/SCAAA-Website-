export interface AwardEntry {
  year: string;
  awardeeName: string;
  awardeePhoto?: string;
  details: string;
  awardDescription: string;
  isPlaceholder: true;
}

export const samantaChandrasekharAwards: AwardEntry[] = [
  { year: "2024", awardeeName: "Awardee information to be verified", details: "Verified recipient details are required before publication.", awardDescription: "Samanta Chandrasekhar Award", isPlaceholder: true },
  { year: "2023", awardeeName: "Awardee information to be verified", details: "Structured placeholder for the award archive.", awardDescription: "Samanta Chandrasekhar Award", isPlaceholder: true },
  { year: "2022", awardeeName: "Awardee information to be verified", details: "Structured placeholder for the award archive.", awardDescription: "Samanta Chandrasekhar Award", isPlaceholder: true },
];
