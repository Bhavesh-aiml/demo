import { createFileRoute } from "@tanstack/react-router";
import { Section, SectionHeader, Reveal } from "@/components/site/Section";

export const Route = createFileRoute("/_site/blog")({
  component: BlogPage,
  head: () => ({
    meta: [
      { title: "Insights — VM Legacy Group" },
      { name: "description", content: "Engineering insights, project reflections and industry perspectives from VM Legacy Group." },
      { property: "og:title", content: "Insights — VM Legacy Group" },
      { property: "og:description", content: "Ideas from the field on structural design, PMC and construction." },
    ],
  }),
});

const posts = [
  { title: "Why quality assurance is non-negotiable in structural design", date: "Coming soon", tag: "Quality" },
  { title: "Value engineering: cost discipline without compromising integrity", date: "Coming soon", tag: "PMC" },
  { title: "Safety-first culture on active construction sites", date: "Coming soon", tag: "Safety" },
];

function BlogPage() {
  return (
    <Section className="!pt-12">
      <SectionHeader
        eyebrow="Insights"
        title={<>Field notes from <span className="text-gradient-gold">30 years on-site</span>.</>}
        description="Articles from our practice — publishing schedule to be announced."
      />
      <div className="mt-14 grid gap-5 md:grid-cols-3">
        {posts.map((p, i) => (
          <Reveal key={p.title} delay={i * 0.05}>
            <article className="glass rounded-2xl overflow-hidden hover:border-gold/40 hover-lift">
              <div className="relative aspect-[16/9] bg-gradient-to-br from-copper/25 via-background to-gold/10">
                <div className="absolute inset-0 grid-blueprint opacity-30" />
              </div>
              <div className="p-6">
                <div className="text-[10px] uppercase tracking-[0.22em] text-gold">{p.tag}</div>
                <h3 className="mt-2 font-display text-lg font-semibold leading-snug">{p.title}</h3>
                <div className="mt-4 text-xs text-muted-foreground">{p.date}</div>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
