import { createFileRoute, Link } from "@tanstack/react-router";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import {
  ArrowUpRight,
  Building2,
  HardHat,
  Ruler,
  ShieldCheck,
  Factory,
  Layers,
  ClipboardCheck,
  Compass,
  Award,
  Sparkles,
  MapPin,
} from "lucide-react";
import { Section, SectionHeader, Reveal } from "@/components/site/Section";
import logo from "@/assets/vm-legacy-logo.asset.json";

export const Route = createFileRoute("/_site/")({
  component: HomePage,
  head: () => ({
    meta: [
      { title: "VM Legacy Group — Engineering Ideas. Trusted Solutions." },
      {
        name: "description",
        content:
          "Premier engineering consultancy delivering civil, structural and project management excellence — 30+ years led by Er. Vijay Kumar Verma.",
      },
      { property: "og:title", content: "VM Legacy Group — Engineering Consultancy" },
      {
        property: "og:description",
        content:
          "Building India's future through engineering excellence. Civil, structural, and PMC solutions since 30+ years.",
      },
    ],
  }),
});

function useCounter(target: number, active: boolean, duration = 1800) {
  const [value, setValue] = useState(0);
  useEffect(() => {
    if (!active) return;
    const start = performance.now();
    let raf = 0;
    const step = (now: number) => {
      const p = Math.min(1, (now - start) / duration);
      const eased = 1 - Math.pow(1 - p, 3);
      setValue(Math.round(target * eased));
      if (p < 1) raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [target, active, duration]);
  return value;
}

function Stat({ value, suffix = "", label }: { value: number; suffix?: string; label: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const n = useCounter(value, inView);
  return (
    <div ref={ref} className="border-t border-border pt-6">
      <div className="font-display text-5xl sm:text-6xl leading-none tracking-tight text-foreground">
        {n}
        <span className="text-copper">{suffix}</span>
      </div>
      <div className="mt-3 text-[10px] uppercase tracking-[0.32em] text-muted-foreground">
        {label}
      </div>
    </div>
  );
}

const services = [
  { icon: Building2, title: "Structural Consultancy", desc: "RCC & steel structural design for commercial, residential and industrial builds." },
  { icon: Ruler, title: "Civil Engineering", desc: "End-to-end civil design, planning and execution advisory." },
  { icon: ClipboardCheck, title: "Project Management", desc: "Cost, schedule and quality control from concept to handover." },
  { icon: HardHat, title: "Construction Management", desc: "On-site leadership, safety and vendor coordination." },
  { icon: Factory, title: "Industrial Consultancy", desc: "Plant, warehouse and factory engineering solutions." },
  { icon: Layers, title: "Steel & RCC Design", desc: "Detailed engineering, drawings and BOQ preparation." },
  { icon: Compass, title: "Site Supervision", desc: "Independent supervision aligned to code and drawings." },
  { icon: ShieldCheck, title: "Quantity Surveying", desc: "Accurate estimation, tendering and contract management." },
];

const projects = [
  { name: "Delhi Airport Terminal 3", location: "New Delhi, India", tag: "Aviation Infrastructure", verified: true, year: "IGI · T3" },
  { name: "Miraj Meridian Mall", location: "Nathdwara, Rajasthan", tag: "Commercial Development", verified: true, year: "Retail" },
];

const marqueeItems = [
  "Structural Consultancy", "PMC", "RCC Design", "Steel Design",
  "Site Supervision", "Quantity Surveying", "Industrial Consultancy",
  "Airport Infrastructure", "Commercial Buildings",
];

function HomePage() {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const yImg = useTransform(scrollYProgress, [0, 1], ["0%", "22%"]);
  const scaleImg = useTransform(scrollYProgress, [0, 1], [1, 1.08]);
  const opacityHero = useTransform(scrollYProgress, [0, 0.9], [1, 0.4]);

  const words = ["Engineering", "ideas.", "Trusted", "solutions."];

  return (
    <>
      {/* ————— SPLIT HERO ————— */}
      <section ref={heroRef} className="relative overflow-hidden">
        <div className="absolute inset-0 grid-blueprint opacity-30 pointer-events-none [mask-image:radial-gradient(ellipse_at_center,black_35%,transparent_75%)]" />

        <div className="relative mx-auto max-w-7xl grid lg:grid-cols-2 min-h-[calc(100dvh-5rem)]">
          {/* LEFT — editorial copy */}
          <motion.div style={{ opacity: opacityHero }} className="flex flex-col justify-center px-6 sm:px-10 pt-14 pb-16 lg:pr-14 lg:border-r border-border">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-3 self-start"
            >
              <span className="h-px w-10 bg-foreground" />
              <span className="text-[10px] font-semibold uppercase tracking-[0.32em] text-foreground/70">
                Est. Consultancy · 30+ Years
              </span>
            </motion.div>

            <h1 className="mt-8 font-display text-[clamp(2.6rem,7vw,5.6rem)] leading-[0.98] tracking-tight text-foreground">
              {words.map((w, i) => (
                <span key={i} className="overflow-hidden inline-block mr-[0.28em] align-baseline">
                  <span
                    className={`rise-word ${i === 3 ? "text-copper italic" : ""}`}
                    style={{ animationDelay: `${0.15 + i * 0.11}s` }}
                  >
                    {w}
                  </span>
                </span>
              ))}
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="mt-8 max-w-xl text-base sm:text-lg text-muted-foreground leading-relaxed"
            >
              VM Legacy Group is a premier engineering consultancy led by
              Er. Vijay Kumar Verma — delivering civil, structural and PMC
              excellence across airports, commercial, residential and industrial builds.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.85 }}
              className="mt-10 flex flex-wrap items-center gap-3"
            >
              <Link
                to="/services"
                className="btn-ink group inline-flex items-center gap-2 rounded-full bg-foreground px-7 py-4 text-[12px] font-semibold uppercase tracking-[0.16em] text-primary-foreground"
              >
                Explore Services
                <ArrowUpRight size={15} className="transition-transform group-hover:rotate-45" />
              </Link>
              <Link
                to="/projects"
                className="group inline-flex items-center gap-2 rounded-full border border-foreground/25 px-7 py-4 text-[12px] font-semibold uppercase tracking-[0.16em] text-foreground hover:bg-foreground hover:text-primary-foreground transition-colors"
              >
                Selected Work
                <ArrowUpRight size={15} className="transition-transform group-hover:rotate-45" />
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1.1 }}
              className="mt-12 grid grid-cols-3 gap-6 max-w-md"
            >
              {[
                { k: "30+", v: "Years" },
                { k: "30+", v: "Projects" },
                { k: "98%", v: "Retention" },
              ].map((s) => (
                <div key={s.v} className="border-t border-border pt-3">
                  <div className="font-display text-2xl text-foreground">{s.k}</div>
                  <div className="text-[10px] uppercase tracking-[0.28em] text-muted-foreground mt-1">{s.v}</div>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* RIGHT — logo showcase with parallax */}
          <div className="relative min-h-[60vh] lg:min-h-full overflow-hidden bg-surface/40">
            <motion.div style={{ y: yImg, scale: scaleImg }} className="absolute inset-0">
              <div className="absolute inset-0 bg-gradient-to-br from-copper/12 via-transparent to-transparent" />
              <div className="absolute inset-0 grid-blueprint opacity-25" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.94 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.2, ease: [0.2, 0.8, 0.2, 1], delay: 0.3 }}
              className="relative h-full flex flex-col items-center justify-center px-8 py-16"
            >
              <div className="relative w-full max-w-md aspect-square">
                <div className="absolute inset-0 border border-foreground/15 rotate-3" />
                <div className="absolute inset-0 border border-foreground/25 -rotate-2" />
                <div className="absolute inset-4 bg-card overflow-hidden shadow-luxe">
                  <img
                    src={logo.url}
                    alt="VM Legacy Group official logo"
                    className="h-full w-full object-cover float"
                  />
                  <div className="absolute inset-0 shimmer pointer-events-none opacity-40" />
                </div>
              </div>
              <div className="mt-8 text-center">
                <div className="text-[10px] uppercase tracking-[0.34em] text-muted-foreground">
                  Official Wordmark
                </div>
                <div className="mt-2 font-display text-lg">VM Legacy Group</div>
              </div>
            </motion.div>

            {/* Corner index */}
            <div className="absolute top-6 right-6 text-[10px] uppercase tracking-[0.32em] text-muted-foreground">
              N° 001 / Legacy
            </div>
            <div className="absolute bottom-6 left-6 text-[10px] uppercase tracking-[0.32em] text-muted-foreground flex items-center gap-2">
              <MapPin size={11} /> Gurugram, Haryana
            </div>
          </div>
        </div>

        {/* Marquee strip */}
        <div className="relative border-t border-b border-border bg-surface/40 py-5 overflow-hidden mask-fade-r">
          <div className="flex marquee whitespace-nowrap gap-14 text-[13px] uppercase tracking-[0.3em] text-foreground/70">
            {[...marqueeItems, ...marqueeItems].map((m, i) => (
              <span key={i} className="inline-flex items-center gap-14">
                <Sparkles size={12} className="text-copper" /> {m}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ————— STATS ROW ————— */}
      <Section className="!py-24">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <Stat value={30} suffix="+" label="Years of Practice" />
          <Stat value={30} suffix="+" label="Projects Delivered" />
          <Stat value={150} suffix="+" label="Trusted Clients" />
          <Stat value={98} suffix="%" label="Client Retention" />
        </div>
      </Section>

      {/* ————— SERVICES ————— */}
      <Section id="services">
        <SectionHeader
          eyebrow="What we do"
          title={<>A full spectrum of engineering, <em className="text-copper not-italic">delivered end-to-end.</em></>}
          description="Advisory and delivery services across structural design, project management, construction, and industrial consultancy."
        />
        <div className="mt-16 grid gap-px bg-border rounded-2xl overflow-hidden border border-border">
          {services.map((s, i) => (
            <Reveal key={s.title} delay={i * 0.04} className="bg-background">
              <div className="group relative h-full p-8 hover:bg-surface transition-colors duration-500">
                <div className="flex items-start justify-between gap-4">
                  <div className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
                    N° {String(i + 1).padStart(2, "0")}
                  </div>
                  <s.icon size={22} className="text-foreground/50 group-hover:text-copper transition-colors" />
                </div>
                <h3 className="mt-8 font-display text-2xl leading-tight">{s.title}</h3>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
                <div className="mt-6 inline-flex items-center gap-1.5 text-[11px] uppercase tracking-[0.22em] text-foreground opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all duration-500">
                  Learn more <ArrowUpRight size={12} />
                </div>
              </div>
            </Reveal>
          ))}
        </div>
        <div className="grid grid-cols-4 [&>*]:hidden">{/* keep grid columns above via css */}</div>
        <style>{`#services .grid.gap-px { grid-template-columns: repeat(1, 1fr); } @media (min-width: 640px){ #services .grid.gap-px { grid-template-columns: repeat(2, 1fr);} } @media (min-width:1024px){ #services .grid.gap-px { grid-template-columns: repeat(4, 1fr);} }`}</style>

        <div className="mt-12 text-center">
          <Link to="/services" className="underline-grow inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.18em] text-foreground">
            View all services <ArrowUpRight size={14} />
          </Link>
        </div>
      </Section>

      {/* ————— PROJECTS ZIGZAG ————— */}
      <Section>
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6">
          <SectionHeader
            eyebrow="Selected work"
            title={<>Landmark projects, <em className="text-copper not-italic">shaping skylines.</em></>}
          />
          <Link to="/projects" className="underline-grow inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.18em] shrink-0">
            All projects <ArrowUpRight size={14} />
          </Link>
        </div>
        <div className="mt-16 flex flex-col divide-y divide-border border-y border-border">
          {projects.map((p, i) => (
            <Reveal key={p.name} delay={i * 0.06}>
              <Link
                to="/projects"
                className="group grid grid-cols-1 md:grid-cols-[.7fr_1.6fr_.7fr] items-center gap-6 py-8 px-1 hover:bg-surface/60 transition-colors"
              >
                <div className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground order-2 md:order-1">
                  N° {String(i + 1).padStart(2, "0")} · {p.year}
                </div>
                <div className="order-1 md:order-2">
                  <div className="font-display text-3xl md:text-4xl leading-tight text-foreground group-hover:text-copper transition-colors">
                    {p.name}
                  </div>
                  <div className="mt-2 text-sm text-muted-foreground flex flex-wrap items-center gap-3">
                    <span>{p.tag}</span>
                    <span className="text-foreground/30">·</span>
                    <span className="inline-flex items-center gap-1"><MapPin size={12} /> {p.location}</span>
                    {p.verified ? (
                      <span className="text-[10px] uppercase tracking-[0.24em] text-copper font-semibold">Verified</span>
                    ) : (
                      <span className="text-[10px] uppercase tracking-[0.24em] text-muted-foreground">Sample</span>
                    )}
                  </div>
                </div>
                <div className="order-3 justify-self-end">
                  <div className="grid h-12 w-12 place-items-center rounded-full border border-foreground/20 group-hover:bg-foreground group-hover:text-primary-foreground group-hover:rotate-45 transition-all duration-500">
                    <ArrowUpRight size={18} />
                  </div>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* ————— PHILOSOPHY / MANIFESTO ————— */}
      <Section>
        <div className="grid gap-10 lg:grid-cols-[1fr_1.4fr] items-start">
          <div>
            <div className="text-[10px] uppercase tracking-[0.32em] text-muted-foreground">Manifesto</div>
            <div className="mt-3 text-copper text-sm uppercase tracking-[0.28em]">— since 30 years</div>
          </div>
          <Reveal>
            <p className="font-display text-3xl sm:text-4xl md:text-5xl leading-[1.15] tracking-tight text-foreground">
              We treat engineering as a
              <em className="not-italic text-copper"> responsibility</em>, not a transaction.
              Every drawing signed, every column poured, every project delivered — carries the
              weight of the people who will one day live, work and travel through it.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-6 text-xs text-muted-foreground uppercase tracking-[0.22em]">
              <div className="flex items-center gap-2"><Award size={13} className="text-copper" /> Quality first</div>
              <div className="flex items-center gap-2"><ShieldCheck size={13} className="text-copper" /> Safety culture</div>
              <div className="flex items-center gap-2"><Sparkles size={13} className="text-copper" /> Enduring value</div>
            </div>
          </Reveal>
        </div>
      </Section>

      {/* ————— CTA ————— */}
      <Section>
        <div className="relative overflow-hidden rounded-3xl bg-foreground text-primary-foreground p-10 sm:p-16 md:p-20">
          <div className="absolute inset-0 grid-blueprint opacity-[0.08]" />
          <div className="absolute -top-24 -right-24 h-96 w-96 rounded-full bg-copper/15 blur-3xl" />
          <div className="relative grid gap-10 md:grid-cols-[1.4fr_.6fr] items-end">
            <div>
              <div className="inline-flex items-center gap-3">
                <span className="h-px w-10 bg-primary-foreground/50" />
                <span className="text-[10px] uppercase tracking-[0.32em] text-primary-foreground/70">Let's build</span>
              </div>
              <h2 className="mt-6 font-display text-4xl sm:text-5xl md:text-6xl leading-[1.02] tracking-tight">
                Have a project in mind? <em className="not-italic text-copper-glow">Talk to our engineers.</em>
              </h2>
            </div>
            <div className="flex flex-wrap gap-3 md:justify-end">
              <Link to="/contact" className="btn-ink inline-flex items-center gap-2 rounded-full bg-primary-foreground px-6 py-4 text-[12px] font-semibold uppercase tracking-[0.16em] text-foreground">
                Consultation <ArrowUpRight size={15} />
              </Link>
              <Link to="/founder" className="inline-flex items-center gap-2 rounded-full border border-primary-foreground/30 px-6 py-4 text-[12px] font-semibold uppercase tracking-[0.16em] text-primary-foreground hover:bg-primary-foreground hover:text-foreground transition-colors">
                Meet the Founder
              </Link>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
