import type { Article, EventItem, GalleryImage, MembershipType, OutreachProgram, Person, Publication } from "../types/content";
// Stock imagery is an editable visual placeholder until verified SCAAA photography is supplied.
export const imagery = {
  skywatch: "https://images.unsplash.com/photo-1444703686981-a3abbc4d4fe3?auto=format&fit=crop&w=1400&q=85",
  classroom: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&w=1400&q=85",
  telescope: "https://images.unsplash.com/photo-1462332420958-a05d1e002413?auto=format&fit=crop&w=1400&q=85",
  moon: "https://images.unsplash.com/photo-1532693322450-2cb5c511067d?auto=format&fit=crop&w=1400&q=85",
  nebula: "https://images.unsplash.com/photo-1462331940025-496dfbfc7564?auto=format&fit=crop&w=1400&q=85",
  galaxy: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=1400&q=85",
  community: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1400&q=85",
  observatory: "https://images.unsplash.com/photo-1531058020387-3be344556be6?auto=format&fit=crop&w=1400&q=85",
  workshop: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1400&q=85",
  association: "https://images.unsplash.com/photo-1446776877081-d282a0f896e2?auto=format&fit=crop&w=1400&q=85",
  contact: "https://images.unsplash.com/photo-1534796636912-3b95b3ab5986?auto=format&fit=crop&w=1400&q=85",
} as const;

export const events: EventItem[] = [
  {
    id: "public-skywatch-placeholder",
    title: "Public Skywatch Program",
    category: "Observation",
    date: "To be announced",
    time: "Evening session",
    location: "Bhubaneswar, Odisha",
    summary: "Editable placeholder for a verified SCAAA observation program. Replace with confirmed date, venue and registration details.",
    status: "planned",
    capacity: "To be confirmed",
    image: imagery.skywatch,
    isPlaceholder: true,
  },
  {
    id: "school-outreach-placeholder",
    title: "School Astronomy Outreach",
    category: "Outreach",
    date: "To be announced",
    time: "School hours",
    location: "Host institution to be confirmed",
    summary: "Placeholder record for a school or college astronomy session. Add actual host, date and program notes when verified.",
    status: "planned",
    image: imagery.classroom,
    isPlaceholder: true,
  },
  {
    id: "workshop-placeholder",
    title: "Telescope Basics Workshop",
    category: "Workshop",
    date: "To be announced",
    time: "To be confirmed",
    location: "Bhubaneswar, Odisha",
    summary: "Editable workshop entry for beginner telescope setup, observing practice and guided sky orientation.",
    status: "planned",
    capacity: "To be confirmed",
    image: imagery.telescope,
    isPlaceholder: true,
  },
];

export const celestialEvent = {
  label: "Sky Tonight",
  title: "Featured Observing Opportunity",
  date: "Update with verified local sky event",
  detail: "Use this reusable banner for moon phases, visible planets, meteor showers and SCAAA observing guidance.",
  isPlaceholder: true,
};

export const articles: Article[] = [
  {
    id: "beginner-guide",
    title: "Beginner's Guide to the Night Sky",
    category: "Start Here",
    summary: "A gentle introduction to constellations, sky directions, moon phases and safe observation habits.",
    readingTime: "6 min",
    difficulty: "Beginner",
    date: "Draft",
    author: "SCAAA Editorial Team",
    image: imagery.moon,
    isPlaceholder: true,
  },
  {
    id: "telescope-basics",
    title: "Telescope Basics",
    category: "Observe",
    summary: "Learn aperture, focal length, eyepieces, mounts and practical field setup before your first session.",
    readingTime: "8 min",
    difficulty: "Beginner",
    date: "Draft",
    author: "SCAAA Editorial Team",
    image: imagery.workshop,
    isPlaceholder: true,
  },
  {
    id: "deep-sky",
    title: "Exploring Deep Sky Objects",
    category: "Explore",
    summary: "A compact primer on star clusters, nebulae, galaxies and what to expect through small telescopes.",
    readingTime: "7 min",
    difficulty: "Intermediate",
    date: "Draft",
    author: "SCAAA Editorial Team",
    image: imagery.galaxy,
    isPlaceholder: true,
  },
];

export const gallery: GalleryImage[] = [
  {
    id: "image-of-month-placeholder",
    title: "Image of the Month",
    object: "Verified object name required",
    photographer: "Photographer name required",
    equipment: "Equipment details required",
    description: "Replace this placeholder with member astrophotography and verified capture information.",
    image: imagery.nebula,
    isPlaceholder: true,
  },
  {
    id: "gallery-placeholder-1",
    title: "Member Astrophotography Placeholder",
    object: "Celestial object required",
    photographer: "Member name required",
    equipment: "Equipment required",
    description: "A structured placeholder for future SCAAA gallery entries.",
    image: imagery.observatory,
    isPlaceholder: true,
  },
];

export const people: Person[] = [
  { id: "committee-placeholder", name: "Name to be verified", role: "Executive Committee", bio: "Add verified member details.", isPlaceholder: true },
  { id: "advisor-placeholder", name: "Name to be verified", role: "Advisory Board", bio: "Add verified advisor details.", isPlaceholder: true },
  { id: "volunteer-placeholder", name: "Name to be verified", role: "Volunteer", bio: "Add volunteer profile when approved.", isPlaceholder: true },
];

export const publications: Publication[] = [
  {
    id: "newsletter-placeholder",
    title: "SCAAA Newsletter",
    type: "Newsletter",
    date: "Date required",
    author: "Author required",
    summary: "Placeholder for verified newsletters, articles, archives and downloadable issues.",
    isPlaceholder: true,
  },
  {
    id: "meeting-archive-placeholder",
    title: "Monthly Meeting Archive",
    type: "Archive",
    date: "Date required",
    author: "SCAAA",
    summary: "Add meeting summaries and files after verification.",
    isPlaceholder: true,
  },
];

export const outreachPrograms: OutreachProgram[] = [
  { id: "schools", title: "School Programs", audience: "Students and teachers", summary: "Observation sessions, astronomy basics and scientific thinking activities for schools.", requestLabel: "Request School Outreach" },
  { id: "colleges", title: "College Programs", audience: "College communities", summary: "Talks, telescope demonstrations and astronomy awareness programs for colleges.", requestLabel: "Request College Outreach" },
  { id: "communities", title: "Community Outreach", audience: "Public and remote communities", summary: "Programs designed to bring astronomy closer to communities with limited access to science outreach.", requestLabel: "Request Community Program" },
];

export const membershipTypes: MembershipType[] = [
  {
    id: "general",
    name: "General Membership",
    description: "For astronomy enthusiasts who want to participate in SCAAA activities.",
    benefits: ["Attend astronomy events", "Join observing sessions", "Learn with the community", "Participate in outreach"],
    fee: "Fee to be verified",
    isPlaceholder: true,
  },
  {
    id: "student",
    name: "Student Membership",
    description: "For school and college students interested in astronomy and scientific curiosity.",
    benefits: ["Beginner-friendly learning", "Workshops and mentoring", "Community events", "Volunteer opportunities"],
    fee: "Fee to be verified",
    isPlaceholder: true,
  },
];

export const impactStats = [
  { value: "1993", label: "Established" },
  { value: "33+", label: "Years of Astronomy Outreach" },
  { value: "Add", label: "Students Reached" },
  { value: "Add", label: "Programs Conducted" },
  { value: "Add", label: "Districts Reached" },
];
