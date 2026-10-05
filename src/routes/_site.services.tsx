import { createFileRoute } from "@tanstack/react-router";
import { Section, SectionHeader, Reveal } from "@/components/site/Section";
import {
  Building2, Ruler, ClipboardCheck, HardHat, Home as HomeIcon,
  Factory, Layers3, Layers, Compass, Calculator, Route as RouteIcon,
} from "lucide-react";

export const Route = createFileRoute("/_site/services")({
  component: ServicesPage,
  head: () => ({
    meta: [
      { title: "Services — VM Legacy Group" },
      { name: "description", content: "Structural, civil and PMC services: RCC & steel design, site supervision, quantity surveying, industrial and infrastructure consultancy." },
      { property: "og:title", content: "Engineering Consultancy Services — VM Legacy Group" },
      { property: "og:description", content: "Full-spectrum engineering consultancy for commercial, industrial and infrastructure projects." },
    ],
  }),
});

const services = [
  { icon: Building2, title: "Structural Consultancy", desc: "Design of primary structural systems for commercial, residential and industrial projects with full code compliance." },
  { icon: Ruler, title: "Civil Engineering", desc: "Site development, foundations, water & drainage — end-to-end civil advisory." },
  { icon: ClipboardCheck, title: "Project Management Consultancy", desc: "Cost, schedule, risk and quality control across the project lifecycle." },
  { icon: HardHat, title: "Construction Management", desc: "On-site leadership, contractor coordination and progress governance." },
  { icon: HomeIcon, title: "Building Consultancy", desc: "Advisory on repair, retrofitting and building health assessments." },
  { icon: Factory, title: "Industrial Consultancy", desc: "Engineering solutions for factories, warehouses and process plants." },
  { icon: Layers3, title: "Steel Structure Design", desc: "Pre-engineered and custom steel design with fabrication drawings." },
  { icon: Layers, title: "RCC Design", desc: "Reinforced concrete design with detailed BBS and drawings." },
  { icon: Compass, title: "Site Supervision", desc: "Independent third-party supervision aligned to specifications." },
  { icon: Calculator, title: "Quantity Surveying", desc: "BOQ, estimation, tendering and contract administration." },
  { icon: RouteIcon, title: "Infrastructure Consultancy", desc: "Roads, bridges and public infrastructure advisory." },
];

function ServicesPage() {
  return (
    <Section className="!pt-12">
      <SectionHeader
        eyebrow="Our services"
        title={<>Engineering services, <span className="text-gradient-gold">end to end</span>.</>}
        description="Advisory and delivery services covering every stage — from concept and structural design through construction supervision and cost management."
      />
      <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((s, i) => (
          <Reveal key={s.title} delay={i * 0.03}>
            <div className="group relative h-full glass rounded-2xl p-6 hover-lift hover:border-gold/40 hover:shadow-gold">
              <div className="grid h-11 w-11 place-items-center rounded-lg bg-gradient-gold text-primary-foreground">
                <s.icon size={20} />
              </div>
              <h3 className="mt-5 font-display text-xl font-semibold">{s.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
