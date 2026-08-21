import { useEffect, useMemo, useState } from "react";
import type { Locale } from "./types/content";
import { Footer } from "./components/Footer";
import { CelestialMotion } from "./components/CelestialMotion";
import { Navbar } from "./components/Navbar";
import { SearchOverlay } from "./components/SearchOverlay";
import { events, articles, gallery, publications } from "./data/content";
import AboutPage from "./pages/AboutPage";
import AstrophotographyPage from "./pages/AstrophotographyPage";
import ContactPage from "./pages/ContactPage";
import EventsPage from "./pages/EventsPage";
import HomePage from "./pages/HomePage";
import LearnPage from "./pages/LearnPage";
import MembershipPage from "./pages/MembershipPage";
import OutreachPage from "./pages/OutreachPage";
import PublicationsPage from "./pages/PublicationsPage";
import SupportPage from "./pages/SupportPage";
import MediaPage from "./pages/MediaPage";
import NotFoundPage from "./pages/NotFoundPage";

const routeTitles: Record<string, string> = {
  "/": "SCAAA | Samanta Chandra Shekhar Amateur Astronomers' Association",
  "/about": "About SCAAA | Since 1993",
  "/events": "Events & Activities | SCAAA",
  "/learn": "Learn Astronomy | SCAAA",
  "/outreach": "Outreach Programs | SCAAA",
  "/astrophotography": "Astrophotography | SCAAA",
  "/membership": "Membership | SCAAA",
  "/publications": "Publications | SCAAA",
  "/media": "Media Center | SCAAA",
  "/support": "Support SCAAA",
  "/contact": "Contact SCAAA",
};

function usePath() {
  const [path, setPath] = useState(() => window.location.pathname);

  useEffect(() => {
    const onPop = () => setPath(window.location.pathname);
    window.addEventListener("popstate", onPop);
    return () => window.removeEventListener("popstate", onPop);
  }, []);

  return path;
}

export function navigateTo(href: string) {
  window.history.pushState({}, "", href);
  window.dispatchEvent(new PopStateEvent("popstate"));
  window.scrollTo({ top: 0, behavior: "smooth" });
}

export default function App() {
  const path = usePath();
  const [locale, setLocale] = useState<Locale>("en");
  const [searchOpen, setSearchOpen] = useState(false);
  const searchItems = useMemo(
    () => [
      ...events.map((item) => ({ title: item.title, type: "Event", href: "/events", summary: item.summary })),
      ...articles.map((item) => ({ title: item.title, type: "Article", href: "/learn", summary: item.summary })),
      ...gallery.map((item) => ({ title: item.title, type: "Gallery", href: "/astrophotography", summary: item.description })),
      ...publications.map((item) => ({ title: item.title, type: "Publication", href: "/publications", summary: item.summary })),
    ],
    [],
  );

  useEffect(() => {
    document.title = routeTitles[path] ?? "Lost in Space | SCAAA";
  }, [path]);

  const page = (() => {
    switch (path) {
      case "/":
        return <HomePage locale={locale} />;
      case "/about":
        return <AboutPage />;
      case "/events":
        return <EventsPage />;
      case "/learn":
        return <LearnPage />;
      case "/outreach":
        return <OutreachPage />;
      case "/astrophotography":
        return <AstrophotographyPage />;
      case "/membership":
        return <MembershipPage />;
      case "/publications":
        return <PublicationsPage />;
      case "/media":
        return <MediaPage />;
      case "/support":
        return <SupportPage />;
      case "/contact":
        return <ContactPage />;
      default:
        return <NotFoundPage />;
    }
  })();

  return (
    <>
      <CelestialMotion />
      <Navbar locale={locale} onLocaleChange={setLocale} onSearch={() => setSearchOpen(true)} />
      <main>{page}</main>
      <Footer />
      <SearchOverlay isOpen={searchOpen} onClose={() => setSearchOpen(false)} items={searchItems} />
    </>
  );
}
