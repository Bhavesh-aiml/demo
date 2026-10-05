import { createFileRoute } from "@tanstack/react-router";
import { Section, SectionHeader, Reveal } from "@/components/site/Section";
import { Target, Eye, Compass, Shield, Award, HardHat } from "lucide-react";

export const Route = createFileRoute("/_site/about")({
  component: AboutPage,
  head: () => ({
    meta: [
      { title: "About — VM Legacy Group" },
      { name: "description", content: "Learn about VM Legacy Group — our vision, mission, values and engineering philosophy." },
      { property: "og:title", content: "About VM Legacy Group" },
      { property: "og:description", content: "Three decades of engineering leadership across civil, structural and PMC practice." },
    ],
  }),
});

const pillars = [
  { icon: Eye, title: "Vision", body: "To be India's most trusted engineering consultancy — recognized for design integrity, ethical practice and enduring value." },
  { icon: Target, title: "Mission", body: "Deliver technically excellent, cost-optimized and safely executed engineering solutions across every project we touch." },
  { icon: Compass, title: "Philosophy", body: "Engineering is a responsibility. We combine rigorous analysis with practical wisdom shaped by decades on-site." },
  { icon: Shield, title: "Safety", body: "Zero-compromise HSE standards for every workforce, subcontractor and stakeholder on our sites." },
  { icon: Award, title: "Quality Assurance", body: "Independent checks, code compliance and documented QA/QC protocols at every stage of delivery." },
  { icon: HardHat, title: "Core Values", body: "Integrity, expertise, accountability, and long-term client partnership above transactional gains." },
];

function AboutPage() {
  return (
    <>
      <Section className="!pt-12">
        <SectionHeader
          eyebrow="About VM Legacy Group"
          title={<>Three decades of engineering <span className="text-gradient-gold">trusted by builders</span>.</>}
          description="VM Legacy Group is an engineering consultancy specializing in civil, structural, industrial and project management practice — built on the leadership of Er. Vijay Kumar Verma and a team committed to durable, code-compliant, cost-disciplined engineering."
        />
      </Section>

      <Section className="!pt-0">
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {pillars.map((p, i) => (
            <Reveal key={p.title} delay={i * 0.05}>
              <div className="glass rounded-2xl p-7 h-full hover:border-gold/40 hover-lift">
                <div className="grid h-11 w-11 place-items-center rounded-lg bg-gradient-gold text-primary-foreground">
                  <p.icon size={20} />
                </div>
                <h3 className="mt-5 font-display text-xl font-semibold">{p.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{p.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>
    </>
  );
}
