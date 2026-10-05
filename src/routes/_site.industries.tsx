import { createFileRoute } from "@tanstack/react-router";
import { Section, SectionHeader, Reveal } from "@/components/site/Section";
import { Plane, Building2, Factory, ShoppingBag, Warehouse, Landmark, Hospital, GraduationCap, Home } from "lucide-react";

export const Route = createFileRoute("/_site/industries")({
  component: IndustriesPage,
  head: () => ({
    meta: [
      { title: "Industries — VM Legacy Group" },
      { name: "description", content: "Industries we serve — aviation, commercial, industrial, retail, institutional and public infrastructure." },
      { property: "og:title", content: "Industries — VM Legacy Group" },
      { property: "og:description", content: "Sectors served by our engineering and PMC practice." },
    ],
  }),
});

const industries = [
  { icon: Plane, name: "Aviation & Airports" },
  { icon: Building2, name: "Commercial Buildings" },
  { icon: Home, name: "Residential" },
  { icon: Factory, name: "Industrial Facilities" },
  { icon: ShoppingBag, name: "Retail & Malls" },
  { icon: Warehouse, name: "Warehousing & Logistics" },
  { icon: Landmark, name: "Public Infrastructure" },
  { icon: Hospital, name: "Healthcare" },
  { icon: GraduationCap, name: "Institutional & Education" },
];

function IndustriesPage() {
  return (
    <Section className="!pt-12">
      <SectionHeader
        eyebrow="Industries"
        title={<>Engineering across <span className="text-gradient-gold">every built environment</span>.</>}
        description="Our engineering DNA translates across sectors — with domain-specific care for structural, functional and regulatory needs."
      />
      <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {industries.map((it, i) => (
          <Reveal key={it.name} delay={i * 0.04}>
            <div className="glass rounded-2xl p-6 h-full text-center hover:border-gold/40 hover-lift">
              <div className="mx-auto grid h-14 w-14 place-items-center rounded-2xl bg-gradient-gold text-primary-foreground">
                <it.icon size={22} />
              </div>
              <div className="mt-4 font-display text-lg font-semibold">{it.name}</div>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
