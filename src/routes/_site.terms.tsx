import { createFileRoute } from "@tanstack/react-router";
import { Section, SectionHeader } from "@/components/site/Section";

export const Route = createFileRoute("/_site/terms")({
  component: TermsPage,
  head: () => ({
    meta: [
      { title: "Terms of Service — VM Legacy Group" },
      { name: "description", content: "Terms governing the use of the VM Legacy Group website." },
      { property: "og:title", content: "Terms of Service — VM Legacy Group" },
      { property: "og:description", content: "Website terms of use." },
    ],
  }),
});

function TermsPage() {
  return (
    <Section className="!pt-12">
      <SectionHeader eyebrow="Legal" title="Terms of Service" />
      <div className="mt-10 glass rounded-3xl p-8 sm:p-10 space-y-6 text-sm text-muted-foreground leading-relaxed max-w-3xl">
        <p>
          These terms govern your use of the VM Legacy Group website. By accessing this site you agree to be bound by these terms. This is a general placeholder — replace with your final legal copy prior to launch.
        </p>
        <div>
          <h3 className="font-display text-lg text-foreground">Use of content</h3>
          <p className="mt-2">All content on this site is the intellectual property of VM Legacy Group. You may not reproduce, distribute or use it without prior written consent.</p>
        </div>
        <div>
          <h3 className="font-display text-lg text-foreground">Disclaimer</h3>
          <p className="mt-2">Information is provided for general reference. Engagements are governed by the terms of individual signed agreements.</p>
        </div>
      </div>
    </Section>
  );
}
