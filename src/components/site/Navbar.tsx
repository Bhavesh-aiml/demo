import { Link, useRouterState } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import logo from "@/assets/vm-legacy-logo.asset.json";

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/founder", label: "Founder" },
  { to: "/services", label: "Services" },
  { to: "/projects", label: "Projects" },
  { to: "/industries", label: "Industries" },
  { to: "/gallery", label: "Gallery" },
  { to: "/contact", label: "Contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { location } = useRouterState();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [location.pathname]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "backdrop-blur-xl bg-background/85 border-b border-border"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-5 sm:px-8 py-3.5">
        <Link to="/" className="flex items-center gap-3 min-w-0 group">
          <div className="relative h-11 w-11 shrink-0 overflow-hidden rounded-md ring-1 ring-foreground/20 bg-background">
            <img src={logo.url} alt="VM Legacy Group logo" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" />
          </div>
          <div className="hidden sm:flex flex-col leading-tight min-w-0">
            <span className="font-display text-lg font-normal tracking-tight text-foreground truncate">
              VM Legacy Group
            </span>
            <span className="text-[9px] tracking-[0.32em] text-muted-foreground uppercase truncate">
              Engineering · Consultancy
            </span>
          </div>
        </Link>

        <nav className="hidden lg:flex items-center gap-0.5">
          {links.map((l) => {
            const active = location.pathname === l.to;
            return (
              <Link
                key={l.to}
                to={l.to}
                className="relative px-3.5 py-2 text-[13px] font-medium tracking-wide transition-colors text-foreground/70 hover:text-foreground"
              >
                <span className="relative">
                  {l.label}
                  {active && (
                    <motion.span
                      layoutId="nav-underline"
                      className="absolute -bottom-1 left-0 right-0 h-px bg-foreground"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </span>
              </Link>
            );
          })}
          <Link
            to="/contact"
            className="btn-ink ml-4 inline-flex items-center gap-2 rounded-full bg-foreground px-5 py-2.5 text-[12px] font-semibold uppercase tracking-[0.14em] text-primary-foreground transition-transform hover:-translate-y-0.5"
          >
            Consult
            <ArrowUpRight size={14} />
          </Link>
        </nav>

        <button
          type="button"
          className="lg:hidden inline-flex h-10 w-10 items-center justify-center rounded-md border border-border text-foreground bg-background/60"
          aria-label="Toggle navigation"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.32, ease: [0.2, 0.8, 0.2, 1] }}
            className="lg:hidden border-t border-border bg-background/95 backdrop-blur-xl overflow-hidden"
          >
            <div className="mx-auto max-w-7xl px-5 py-3 flex flex-col">
              {links.map((l, i) => (
                <motion.div
                  key={l.to}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.04 * i }}
                >
                  <Link
                    to={l.to}
                    className="block px-2 py-3 text-sm font-medium text-foreground/85 hover:text-foreground border-b border-border/60 last:border-0"
                  >
                    {l.label}
                  </Link>
                </motion.div>
              ))}
              <Link
                to="/contact"
                className="mt-3 inline-flex items-center justify-center gap-2 rounded-full bg-foreground px-4 py-3 text-[12px] font-semibold uppercase tracking-[0.14em] text-primary-foreground"
              >
                Request Consultation <ArrowUpRight size={14} />
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
