import { useEffect, useMemo, useState } from "react";
import type { Locale } from "./types/content";
import { Footer } from "./components/Footer";
import { CelestialMotion } from "./components/CelestialMotion";
import { Navbar } from "./components/Navbar";
import { SearchOverlay } from "./components/SearchOverlay";
import { LocaleContext } from "./lib/i18n";
import { events, articles, gallery, publications } from "./data/content";
import AboutPage from "./pages/AboutPage";
import AstrophotographyPage from "./pages/AstrophotographyPage";
import ContactPage from "./pages/ContactPage";
import CitizenSciencePage from "./pages/CitizenSciencePage";
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
  "/citizen-science": "Citizen Science | SCAAA",
  "/outreach": "Outreach Programs | SCAAA",
  "/astrophotography": "Astrophotography | SCAAA",
  "/membership": "Membership | SCAAA",
  "/publications": "Publications | SCAAA",
  "/media": "Media Center | SCAAA",
  "/support": "Support SCAAA",
  "/contact": "Contact SCAAA",
};

const basePath = import.meta.env.BASE_URL.replace(/\/$/, "");

function getRoutePath(pathname = window.location.pathname) {
  const route = basePath && pathname.startsWith(basePath)
    ? pathname.slice(basePath.length)
    : pathname;
  return route || "/";
}

export function toAppHref(href: string) {
  if (!href.startsWith("/")) return href;
  return `${basePath}${href}` || "/";
}

function usePath() {
  const [path, setPath] = useState(() => getRoutePath());

  useEffect(() => {
    const onPop = () => setPath(getRoutePath());
    window.addEventListener("popstate", onPop);
    return () => window.removeEventListener("popstate", onPop);
  }, []);

  return path;
}

export function navigateTo(href: string) {
  window.history.pushState({}, "", toAppHref(href));
  window.dispatchEvent(new PopStateEvent("popstate"));
  const anchor = href.split("#")[1];
  if (anchor) {
    requestAnimationFrame(() => document.getElementById(anchor)?.scrollIntoView({ behavior: "smooth" }));
    return;
  }
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
      case "/citizen-science":
        return <CitizenSciencePage />;
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
    <LocaleContext.Provider value={locale}>
      <CelestialMotion />
      <Navbar locale={locale} onLocaleChange={setLocale} onSearch={() => setSearchOpen(true)} />
      <main>{page}</main>
      <Footer />
      <SearchOverlay isOpen={searchOpen} onClose={() => setSearchOpen(false)} items={searchItems} />
    </LocaleContext.Provider>
  );
}
