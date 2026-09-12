import newsletter1997PageOne from "../assets/newsletters/scaaa-newsletter-1997-page-1.jpg";
import newsletter1997PageTwo from "../assets/newsletters/scaaa-newsletter-1997-page-2.jpg";
import newsletter2024 from "../assets/newsletters/scaaa-newsletter-2024.pdf";

type NewsletterPage = {
  src: string;
  label: string;
};

type NewsletterIssue = {
  year: string;
  title: string;
  summary: string;
  document?: string;
  pages?: NewsletterPage[];
};

export const newsletters: NewsletterIssue[] = [
  {
    year: "2024",
    title: "SCAAA Newsletter 2024",
    summary: "The supplied eight-page SCAAA newsletter, available as a complete PDF.",
    document: newsletter2024,
  },
  {
    year: "1997",
    title: "SCAAA Newsletter 1997",
    summary: "Two preserved newsletter pages from the supplied SCAAA archive.",
    pages: [
      { src: newsletter1997PageOne, label: "1997 newsletter - page 1" },
      { src: newsletter1997PageTwo, label: "1997 newsletter - page 2" },
    ],
  },
];
