export type Locale = "en" | "or" | "hi";

export type LocalizedString = Record<Locale, string>;

export interface EventItem {
  id: string;
  title: string;
  category: string;
  date: string;
  time: string;
  location: string;
  summary: string;
  status: "open" | "planned" | "closed";
  capacity?: string;
  image: string;
  isPlaceholder?: boolean;
}

export interface Article {
  id: string;
  title: string;
  category: string;
  summary: string;
  readingTime: string;
  difficulty?: string;
  date: string;
  author: string;
  image: string;
  isPlaceholder?: boolean;
}

export interface GalleryImage {
  id: string;
  title: string;
  object: string;
  photographer: string;
  equipment: string;
  description: string;
  image: string;
  isPlaceholder?: boolean;
}

export interface Person {
  id: string;
  name: string;
  role: string;
  bio: string;
  isPlaceholder?: boolean;
}

export interface Publication {
  id: string;
  title: string;
  type: string;
  date: string;
  author: string;
  summary: string;
  isPlaceholder?: boolean;
}

export interface OutreachProgram {
  id: string;
  title: string;
  audience: string;
  summary: string;
  requestLabel: string;
}

export interface MembershipType {
  id: string;
  name: string;
  description: string;
  benefits: string[];
  fee: string;
  isPlaceholder?: boolean;
}
