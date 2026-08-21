import { ChevronDown, Menu, Search, X } from "lucide-react";
import { useState } from "react";
import { navGroups } from "../data/navigation";
import { locales } from "../lib/i18n";
import type { Locale } from "../types/content";
import { Link } from "./Link";
import logoUrl from "../assets/scaaa-logo.jpeg";

interface NavbarProps {
  locale: Locale;
  onLocaleChange: (locale: Locale) => void;
  onSearch: () => void;
}

export function Navbar({ locale, onLocaleChange, onSearch }: NavbarProps) {
  const [open, setOpen] = useState(false);
  const primaryGroups = navGroups.filter((group) => ["About Us", "Learn Astronomy", "Outreach Programs"].includes(group.label));
  const moreGroups = navGroups.filter((group) => !primaryGroups.includes(group));

  return (
    <header className="site-header">
      <nav className="nav-shell" aria-label="Primary navigation">
        <Link href="/" className="brand" onClick={() => setOpen(false)}>
          <img src={logoUrl} alt="SCAAA logo" />
          <span className="brand-name">
            <strong>SCAAA</strong>
            <span className="sr-only">Samanta Chandra Shekhar Amateur Astronomers' Association</span>
          </span>
        </Link>

        <div className="desktop-nav">
          <Link href="/" className="nav-link">Home</Link>
          {primaryGroups.map((group) => (
            <div className="nav-item" key={group.label}>
              <Link href={group.href} className="nav-link">{group.label}</Link>
              <div className="mega-menu">
                {group.children.map((child) => (
                  <Link href={group.href} key={child}>{child}</Link>
                ))}
              </div>
            </div>
          ))}
          <div className="nav-item">
            <button className="nav-link nav-more" type="button" aria-haspopup="true">
              More <ChevronDown size={14} aria-hidden="true" />
            </button>
            <div className="mega-menu more-menu">
              {moreGroups.map((group) => (
                <Link href={group.href} key={group.label}>{group.label}</Link>
              ))}
            </div>
          </div>
        </div>

        <div className="nav-actions">
          <select aria-label="Language" value={locale} onChange={(event) => onLocaleChange(event.target.value as Locale)}>
            {locales.map((item) => <option value={item.code} key={item.code}>{item.nativeName}</option>)}
          </select>
          <button className="icon-button" onClick={onSearch} aria-label="Search website" title="Search">
            <Search size={18} />
          </button>
          <Link href="/membership" className="button button-small nav-cta">Join SCAAA</Link>
          <button className="icon-button mobile-toggle" aria-label="Open menu" onClick={() => setOpen(true)} title="Menu">
            <Menu size={22} />
          </button>
        </div>
      </nav>

      <div className={`mobile-panel ${open ? "is-open" : ""}`} aria-hidden={!open}>
        <div className="mobile-panel-head">
          <img src={logoUrl} alt="" />
          <button className="icon-button" aria-label="Close menu" onClick={() => setOpen(false)} title="Close">
            <X size={22} />
          </button>
        </div>
        <Link href="/" onClick={() => setOpen(false)}>Home</Link>
        {navGroups.map((group) => (
          <Link href={group.href} key={group.label} onClick={() => setOpen(false)}>{group.label}</Link>
        ))}
      </div>
    </header>
  );
}
