import { createFileRoute } from "@tanstack/react-router";
import { Section, SectionHeader, Reveal } from "@/components/site/Section";
import { MapPin, Layers, ShieldCheck, Lightbulb } from "lucide-react";

export const Route = createFileRoute("/_site/projects")({
  component: ProjectsPage,
  head: () => ({
    meta: [
      { title: "Projects — VM Legacy Group" },
      { name: "description", content: "Selected verified projects — Delhi Airport Terminal 3, Miraj Meridian Mall Nathdwara, and more." },
      { property: "og:title", content: "Projects — VM Legacy Group" },
      { property: "og:description", content: "Landmark engineering projects delivered with structural clarity and quality." },
    ],
  }),
});

const projects = [
  {
    name: "Delhi Airport Terminal 3",
    location: "New Delhi, India",
    tag: "Aviation Infrastructure",
    verified: true,
    images: ["/images/delhi-airport-t3-1.jpg", "/images/delhi-airport-t3-2.webp"],
    overview: "Contribution to one of India's largest aviation infrastructure projects — the T3 terminal at IGI Airport.",
    scope: "Structural consultancy and quality-assurance advisory on select engineering packages.",
    challenges: "Massive spans, phased construction with live airport operations, and stringent aviation safety standards.",
    solutions: "Robust structural detailing, coordinated review protocols and rigorous QA/QC discipline.",
  },
  {
    name: "Miraj Meridian Mall",
    location: "Nathdwara, Rajasthan",
    tag: "Commercial Development",
    verified: true,
    images: ["/images/miraj-meridian-mall.png"],
    overview: "Modern retail and entertainment destination serving the Nathdwara region.",
    scope: "Engineering consultancy and construction advisory support for the commercial build.",
    challenges: "Balancing large column-free retail spans with cost-efficient RCC design.",
    solutions: "Optimized structural grid, value-engineered detailing and disciplined site supervision.",
  },
];

function ProjectsPage() {
  return (
    <Section className="!pt-12">
      <SectionHeader
        eyebrow="Selected work"
        title={<>Projects delivered with <span className="text-gradient-gold">engineering conviction</span>.</>}
        description="Only verified projects are labeled as such. Placeholder entries are clearly marked and will be replaced as additional projects are formally verified."
      />

      <div className="mt-14 flex flex-col gap-8">
        {projects.map((p, i) => (
          <Reveal key={p.name + i} delay={i * 0.04}>
            <article className="group grid gap-0 lg:grid-cols-[.9fr_1.1fr] overflow-hidden rounded-3xl glass hover:border-gold/40">
              <div className="relative aspect-[4/3] lg:aspect-auto min-h-64 bg-gradient-to-br from-copper/25 via-background to-gold/10 overflow-hidden">
                {p.images.length > 0 ? (
                  <div className={`absolute inset-0 grid ${p.images.length > 1 ? "grid-cols-2" : "grid-cols-1"} gap-0.5`}>
                    {p.images.map((src, imgIdx) => (
                      <div key={src} className="relative overflow-hidden">
                        <img
                          src={src}
                          alt={`${p.name} — photo ${imgIdx + 1}`}
                          loading="lazy"
                          className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                        />
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="absolute inset-0 grid-blueprint opacity-30" />
                )}

                {p.images.length > 0 ? (
                  <>
                    <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/10 to-transparent" />
                    <div className="absolute bottom-4 left-5 right-5">
                      <div className="text-[10px] uppercase tracking-[0.24em] text-gold">{p.tag}</div>
                      <div className="mt-1 font-display text-xl text-gradient-gold">{p.name}</div>
                    </div>
                  </>
                ) : (
                  <div className="absolute inset-0 grid place-items-center px-6 text-center">
                    <div>
                      <div className="text-[10px] uppercase tracking-[0.24em] text-gold">{p.tag}</div>
                      <div className="mt-2 font-display text-2xl text-gradient-gold">{p.name}</div>
                    </div>
                  </div>
                )}

                {p.verified ? (
                  <div className="absolute top-4 left-4 flex items-center gap-1.5 rounded-full glass-gold px-3 py-1 text-[10px] font-semibold uppercase tracking-widest text-gold">
                    <ShieldCheck size={12} className="text-gold" /> Verified
                  </div>
                ) : (
                  <div className="absolute top-4 left-4 rounded-full glass px-3 py-1 text-[10px] font-semibold uppercase tracking-widest text-muted-foreground">
                    Sample — To be replaced
                  </div>
                )}
              </div>

              <div className="p-8">
                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                  <MapPin size={14} className="text-gold" /> {p.location}
                </div>
                <h3 className="mt-3 font-display text-2xl font-semibold">{p.name}</h3>

                <div className="mt-5 grid gap-4 sm:grid-cols-2">
                  <Detail icon={Lightbulb} title="Overview">{p.overview}</Detail>
                  <Detail icon={Layers} title="Engineering Scope">{p.scope}</Detail>
                  <Detail icon={ShieldCheck} title="Challenges">{p.challenges}</Detail>
                  <Detail icon={ShieldCheck} title="Solutions">{p.solutions}</Detail>
                </div>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

function Detail({ icon: Icon, title, children }: { icon: typeof MapPin; title: string; children: React.ReactNode }) {
  return (
    <div>
      <div className="flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-gold">
        <Icon size={13} /> {title}
      </div>
      <div className="mt-1.5 text-sm text-muted-foreground leading-relaxed">{children}</div>
    </div>
  );
}
