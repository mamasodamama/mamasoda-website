import { Link } from "@tanstack/react-router";
import logo from "@/assets/logo.svg";

export function Footer() {
  return (
    <footer className="bg-ink text-cream">
      <div className="mx-auto max-w-7xl px-5 py-14 md:px-8">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <img src={logo} alt="Mama Soda" className="h-14 w-auto rounded-md bg-cream p-1" />
            <p className="mt-4 font-display text-2xl text-secondary">Pop karo, chill karo!</p>
          </div>
          <div>
            <h3 className="text-sm font-bold uppercase tracking-widest text-secondary">Explore</h3>
            <ul className="mt-4 space-y-2 text-cream/80">
              <li><Link to="/" className="hover:text-secondary">Home</Link></li>
              <li><Link to="/our-story" className="hover:text-secondary">Our Story</Link></li>
              <li><Link to="/flavours" className="hover:text-secondary">Flavours</Link></li>
              <li><Link to="/manufacturing" className="hover:text-secondary">Manufacturing</Link></li>
              <li><Link to="/contact" className="hover:text-secondary">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-bold uppercase tracking-widest text-secondary">Get in touch</h3>
            <ul className="mt-4 space-y-2 text-cream/80">
              <li><a href="mailto:support@mamasoda.com" className="hover:text-secondary">support@mamasoda.com</a></li>
              <li><a href="https://instagram.com/mamasodaco" target="_blank" rel="noreferrer" className="hover:text-secondary">@mamasodaco</a></li>
            </ul>
          </div>
        </div>
        <div className="mt-10 border-t border-cream/10 pt-6 text-xs text-cream/60 flex flex-wrap justify-between gap-2">
          <span>© 2026 Mama Soda. All rights reserved.</span>
          <span>Ranchi, Jharkhand · Made with fizz.</span>
        </div>
      </div>
    </footer>
  );
}
