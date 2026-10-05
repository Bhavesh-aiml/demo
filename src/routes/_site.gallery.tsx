import { createFileRoute } from "@tanstack/react-router";
import { Section, SectionHeader, Reveal } from "@/components/site/Section";

export const Route = createFileRoute("/_site/gallery")({
  component: GalleryPage,
  head: () => ({
    meta: [
      { title: "Gallery — VM Legacy Group" },
      { name: "description", content: "Project gallery — verified project imagery and engineering visuals." },
      { property: "og:title", content: "Gallery — VM Legacy Group" },
      { property: "og:description", content: "A visual archive of our engineering practice." },
    ],
  }),
});

function GalleryPage() {
  return (
    <Section className="!pt-12">
      <SectionHeader
        eyebrow="Gallery"
        title={<>Where blueprints meet <span className="text-gradient-gold">built reality</span>.</>}
        description="A visual archive of our engineering practice, currently being curated."
      />
      <Reveal>
        <div className="mt-14 relative overflow-hidden rounded-3xl glass py-24 px-8 text-center">
          <div className="absolute inset-0 grid-blueprint opacity-20" />
          <div className="relative">
            <div className="mx-auto mb-6 h-px w-16 bg-gold/50" />
            <p className="font-display text-3xl sm:text-4xl text-gradient-gold">
              Project images awaited
            </p>
            <p className="mt-4 max-w-md mx-auto text-sm text-muted-foreground tracking-wide">
              Verified project photography is being compiled and will appear here shortly.
            </p>
            <div className="mx-auto mt-6 h-px w-16 bg-gold/50" />
          </div>
        </div>
      </Reveal>
    </Section>
  );
}
