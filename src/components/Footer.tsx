import { Mail, MapPin } from "lucide-react";
import { navGroups } from "../data/navigation";
import { Link } from "./Link";
import logoUrl from "../assets/scaaa-logo.jpeg";
import { tr, useLocale } from "../lib/i18n";

export function Footer() {
  const locale = useLocale();
  return (
    <footer className="footer">
      <div className="footer-grid">
        <section>
          <img className="footer-logo" src={logoUrl} alt="SCAAA logo" />
          <p>Samanta Chandra Shekhar Amateur Astronomers' Association (SCAAA) is an astronomy popularization organization based in Bhubaneswar, Odisha, India, established in 1993.</p>
          <p className="placeholder-note">Contact details and social links are editable placeholders until verified.</p>
        </section>
        <section>
          <h2>{tr(locale, "Explore")}</h2>
          {navGroups.slice(0, 5).map((item) => <Link href={item.href} key={item.label}>{tr(locale, item.label)}</Link>)}
        </section>
        <section>
          <h2>{tr(locale, "Participate")}</h2>
          {navGroups.slice(5).map((item) => <Link href={item.href} key={item.label}>{tr(locale, item.label)}</Link>)}
          <Link href="/contact">{tr(locale, "Contact")}</Link>
        </section>
        <section>
          <h2>{tr(locale, "Stay Connected")}</h2>
          <p><MapPin size={16} /> Bhubaneswar, Odisha, India</p>
          <p><Mail size={16} /> Email placeholder</p>
          <form className="inline-form" onSubmit={(event) => event.preventDefault()}>
            <input type="email" placeholder={tr(locale, "Email address")} aria-label={tr(locale, "Email address")} required />
            <button className="button button-small">{tr(locale, "Subscribe")}</button>
          </form>
        </section>
      </div>
      <div className="footer-bottom">
        <span>© {new Date().getFullYear()} SCAAA. All rights reserved.</span>
        <span>Privacy · Terms · Accessibility</span>
      </div>
    </footer>
  );
}
