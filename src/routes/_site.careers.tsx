import { createFileRoute } from "@tanstack/react-router";
import { Section, SectionHeader, Reveal } from "@/components/site/Section";

export const Route = createFileRoute("/_site/careers")({
  component: CareersPage,
  head: () => ({
    meta: [
      { title: "Careers — VM Legacy Group" },
      { name: "description", content: "Build your career with a premier engineering consultancy. Explore open roles at VM Legacy Group." },
      { property: "og:title", content: "Careers — VM Legacy Group" },
      { property: "og:description", content: "Join a team that engineers with rigor, safety and long-term thinking." },
    ],
  }),
});

const roles = [
  { title: "Senior Structural Engineer", type: "Full-time", location: "India" },
  { title: "Project Manager — PMC", type: "Full-time", location: "India" },
  { title: "Site Engineer (Civil)", type: "Full-time", location: "India" },
  { title: "Quantity Surveyor", type: "Full-time", location: "India" },
];

function CareersPage() {
  return (
    <Section className="!pt-12">
      <SectionHeader
        eyebrow="Careers"
        title={<>Engineer a career that <span className="text-gradient-gold">outlives the projects</span>.</>}
        description="We look for engineers who take ownership, communicate clearly, and hold quality above shortcuts."
      />
      <div className="mt-14 grid gap-4">
        {roles.map((r, i) => (
          <Reveal key={r.title} delay={i * 0.04}>
            <div className="glass rounded-2xl p-6 flex flex-wrap items-center justify-between gap-4 hover:border-gold/40">
              <div>
                <div className="font-display text-lg font-semibold">{r.title}</div>
                <div className="text-xs text-muted-foreground mt-1">
                  {r.type} · {r.location}
                </div>
              </div>
              <a href="mailto:careers@vmlegacygroup.com" className="inline-flex items-center gap-2 rounded-md bg-gradient-gold px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-gold">
                Apply Now
              </a>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
