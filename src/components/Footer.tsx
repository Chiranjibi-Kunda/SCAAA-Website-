import { Mail, MapPin } from "lucide-react";
import { navGroups } from "../data/navigation";
import { Link } from "./Link";
import logoUrl from "../assets/scaaa-logo.jpeg";

export function Footer() {
  return (
    <footer className="footer">
      <div className="footer-grid">
        <section>
          <img className="footer-logo" src={logoUrl} alt="SCAAA logo" />
          <p>Samanta Chandra Shekhar Amateur Astronomers' Association (SCAAA) is an astronomy popularization organization based in Bhubaneswar, Odisha, India, established in 1993.</p>
          <p className="placeholder-note">Contact details and social links are editable placeholders until verified.</p>
        </section>
        <section>
          <h2>Explore</h2>
          {navGroups.slice(0, 5).map((item) => <Link href={item.href} key={item.label}>{item.label}</Link>)}
        </section>
        <section>
          <h2>Participate</h2>
          {navGroups.slice(5).map((item) => <Link href={item.href} key={item.label}>{item.label}</Link>)}
          <Link href="/contact">Contact</Link>
        </section>
        <section>
          <h2>Stay Connected</h2>
          <p><MapPin size={16} /> Bhubaneswar, Odisha, India</p>
          <p><Mail size={16} /> Email placeholder</p>
          <form className="inline-form" onSubmit={(event) => event.preventDefault()}>
            <input type="email" placeholder="Email address" aria-label="Email address" required />
            <button className="button button-small">Subscribe</button>
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
