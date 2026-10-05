import { createFileRoute, Link } from "@tanstack/react-router";
import { Section, Reveal } from "@/components/site/Section";
import { Award, BookOpen, Briefcase, GraduationCap, Building2, ArrowRight } from "lucide-react";
import logo from "@/assets/vm-legacy-logo.asset.json";

export const Route = createFileRoute("/_site/founder")({
  component: FounderPage,
  head: () => ({
    meta: [
      { title: "Founder — Er. Vijay Kumar Verma | VM Legacy Group" },
      { name: "description", content: "Meet Er. Vijay Kumar Verma — Founder & Principal Engineering Consultant with 30+ years of civil, structural and infrastructure experience." },
      { property: "og:title", content: "Founder — Er. Vijay Kumar Verma" },
      { property: "og:description", content: "Three decades of leadership across civil, structural, industrial and airport projects." },
    ],
  }),
});

const expertise = [
  "Civil Engineering",
  "Structural Engineering",
  "Commercial Buildings",
  "Infrastructure",
  "Industrial Engineering",
  "Airport Projects",
  "Construction Management",
  "Quality Assurance",
  "Engineering Consultancy",
];

function FounderPage() {
  return (
    <Section className="!pt-12">
      <div className="grid gap-12 lg:grid-cols-[.9fr_1.1fr] items-start">
        <Reveal>
          <div className="relative">
            <div className="relative aspect-[4/5] rounded-3xl glass-gold overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-copper/30 via-transparent to-gold/20" />
              <div className="absolute inset-6 rounded-2xl border border-gold/30" />
              <div className="absolute inset-0 grid place-items-center p-8">
                <img src={logo.url} alt="VM Legacy Group" className="max-w-[70%] rounded-xl float" />
              </div>
            </div>
            <div className="mt-4 glass rounded-xl p-5 text-center">
              <div className="font-display text-lg text-gradient-gold">Er. Vijay Kumar Verma</div>
              <div className="mt-1 text-xs uppercase tracking-[0.24em] text-muted-foreground">
                Founder & Principal Engineering Consultant
              </div>
            </div>
          </div>
        </Reveal>

        <div>
          <Reveal>
            <div className="flex items-center gap-3">
              <span className="h-px w-8 bg-gradient-gold" />
              <span className="text-[11px] font-medium uppercase tracking-[0.28em] text-gold">
                Meet the Founder
              </span>
            </div>
            <h1 className="mt-4 font-display text-4xl sm:text-5xl font-semibold leading-tight">
              A career built on <span className="text-gradient-gold">rigor, responsibility and results.</span>
            </h1>
            <p className="mt-5 text-base text-muted-foreground leading-relaxed">
              With more than 30 years of professional practice, Er. Vijay Kumar Verma has led and consulted on a wide spectrum of civil, structural and infrastructure engagements — from commercial developments to critical airport infrastructure. His practice is defined by design integrity, safety-first execution, and mentoring engineers who carry the same values forward.
            </p>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {[
                { icon: Briefcase, title: "30+ Years Experience", body: "Consulting across civil, structural and PMC engagements." },
                { icon: Building2, title: "Landmark Projects", body: "Contributions to airport and commercial infrastructure." },
                { icon: GraduationCap, title: "Engineering Leadership", body: "Mentoring the next generation of engineers." },
                { icon: Award, title: "Quality & Safety", body: "Uncompromised standards and code-compliant delivery." },
              ].map((c) => (
                <div key={c.title} className="glass rounded-xl p-5">
                  <div className="flex items-center gap-3">
                    <div className="grid h-9 w-9 place-items-center rounded-md bg-gradient-gold text-primary-foreground">
                      <c.icon size={16} />
                    </div>
                    <div className="font-display font-semibold">{c.title}</div>
                  </div>
                  <p className="mt-2 text-sm text-muted-foreground">{c.body}</p>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="mt-8">
              <div className="flex items-center gap-2 text-sm font-semibold text-gold">
                <BookOpen size={16} /> Areas of Expertise
              </div>
              <div className="mt-3 flex flex-wrap gap-2">
                {expertise.map((e) => (
                  <span key={e} className="glass rounded-full px-3 py-1.5 text-xs text-foreground/90">
                    {e}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.3}>
            <div className="mt-8 flex gap-3">
              <Link to="/projects" className="inline-flex items-center gap-2 rounded-md bg-gradient-gold px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-gold">
                View Projects <ArrowRight size={14} />
              </Link>
              <Link to="/contact" className="inline-flex items-center gap-2 rounded-md glass px-5 py-2.5 text-sm font-semibold">
                Get in touch
              </Link>
            </div>
          </Reveal>
        </div>
      </div>
    </Section>
  );
}
