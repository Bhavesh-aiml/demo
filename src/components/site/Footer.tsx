import { Link } from "@tanstack/react-router";
import { Mail, Phone, MapPin, Linkedin, Facebook, Instagram, ArrowUpRight } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import logo from "@/assets/vm-legacy-logo.asset.json";

export function Footer() {
  return (
    <footer className="relative mt-24 border-t border-border bg-surface/40">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 pt-20 pb-10">
        {/* Editorial oversized wordmark */}
        <div className="pb-14 border-b border-border">
          <div className="flex flex-wrap items-end justify-between gap-8">
            <div className="max-w-xl">
              <div className="text-[10px] uppercase tracking-[0.32em] text-muted-foreground">Engineering Ideas · Trusted Solutions</div>
              <h2 className="mt-4 font-display text-5xl sm:text-6xl md:text-7xl leading-[0.95] tracking-tight text-foreground">
                Build with <em className="not-italic text-gradient-gold">conviction.</em>
              </h2>
            </div>
            <Link
              to="/contact"
              className="btn-ink inline-flex items-center gap-2 rounded-full bg-foreground px-6 py-3.5 text-[12px] font-semibold uppercase tracking-[0.14em] text-primary-foreground"
            >
              Start a project <ArrowUpRight size={15} />
            </Link>
          </div>
        </div>

        <div className="grid gap-12 lg:grid-cols-[1.3fr_.7fr_.7fr_1fr] pt-14">
          <div>
            <div className="flex items-center gap-3">
              <img src={logo.url} alt="VM Legacy Group" className="h-12 w-12 rounded-md ring-1 ring-foreground/20 object-cover" />
              <div>
                <div className="font-display text-lg">VM Legacy Group</div>
                <div className="text-[9px] tracking-[0.3em] uppercase text-muted-foreground">
                  Engineering · Consultancy
                </div>
              </div>
            </div>
            <p className="mt-5 text-sm leading-relaxed text-muted-foreground max-w-sm">
              A premier engineering consultancy delivering civil, structural and project management excellence — backed by 30+ years of leadership by Er. Vijay Kumar Verma.
            </p>
            <div className="mt-6 flex gap-2.5">
              {[Linkedin, Facebook, Instagram].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  aria-label="Social link"
                  className="grid h-9 w-9 place-items-center rounded-full border border-border text-foreground hover:bg-foreground hover:text-primary-foreground transition-colors"
                >
                  <Icon size={14} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-[10px] uppercase tracking-[0.28em] text-muted-foreground">Explore</h4>
            <ul className="mt-5 space-y-3 text-sm text-foreground/80">
              {[
                ["/about", "About Us"],
                ["/founder", "Founder"],
                ["/services", "Services"],
                ["/projects", "Projects"],
                ["/industries", "Industries"],
                ["/gallery", "Gallery"],
              ].map(([to, label]) => (
                <li key={to}>
                  <Link to={to} className="underline-grow hover:text-foreground transition-colors">{label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-[10px] uppercase tracking-[0.28em] text-muted-foreground">Company</h4>
            <ul className="mt-5 space-y-3 text-sm text-foreground/80">
              {[
                ["/careers", "Careers"],
                ["/blog", "Insights"],
                ["/contact", "Contact"],
                ["/privacy", "Privacy Policy"],
                ["/terms", "Terms of Service"],
              ].map(([to, label]) => (
                <li key={to}>
                  <Link to={to} className="underline-grow hover:text-foreground transition-colors">{label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-[10px] uppercase tracking-[0.28em] text-muted-foreground">Contact</h4>
            <ul className="mt-5 space-y-4 text-sm text-foreground/80">
              <li className="flex gap-3">
                <MapPin size={15} className="mt-0.5 text-foreground shrink-0" />
                <span>House No. 361, Kadipur Village,<br/>Sector 10, Gurugram, Haryana — 122001</span>
              </li>
              <li className="flex gap-3">
                <Phone size={15} className="mt-0.5 text-foreground shrink-0" />
                <a href="tel:+919602159357" className="underline-grow">+91 96021 59357</a>
              </li>
              <li className="flex gap-3">
                <Mail size={15} className="mt-0.5 text-foreground shrink-0" />
                <a href="mailto:info@vmlegacygroup.in" className="underline-grow">info@vmlegacygroup.in</a>
              </li>
              <li className="flex gap-3">
                <FaWhatsapp size={15} className="mt-0.5 text-[#25D366] shrink-0" />
                <a
                  href="https://wa.me/919588019759?text=Hello%20VM%20Legacy%20Group%2C%20I%27d%20like%20to%20discuss%20an%20engineering%20consultancy%20project."
                  target="_blank"
                  rel="noreferrer"
                  className="underline-grow"
                >
                  Chat on WhatsApp
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="border-t border-border">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] text-muted-foreground">
          <div>© {new Date().getFullYear()} VM Legacy Group. All rights reserved.</div>
          <div className="tracking-[0.28em] uppercase">Engineering · Consultancy · Solutions</div>
        </div>
      </div>
    </footer>
  );
}
