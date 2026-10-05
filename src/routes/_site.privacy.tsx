import { createFileRoute } from "@tanstack/react-router";
import { Section, SectionHeader } from "@/components/site/Section";

export const Route = createFileRoute("/_site/privacy")({
  component: PrivacyPage,
  head: () => ({
    meta: [
      { title: "Privacy Policy — VM Legacy Group" },
      { name: "description", content: "How VM Legacy Group collects, uses and protects information." },
      { property: "og:title", content: "Privacy Policy — VM Legacy Group" },
      { property: "og:description", content: "Our privacy practices explained." },
    ],
  }),
});

function PrivacyPage() {
  return (
    <Section className="!pt-12">
      <SectionHeader eyebrow="Legal" title="Privacy Policy" />
      <div className="mt-10 glass rounded-3xl p-8 sm:p-10 space-y-6 text-sm text-muted-foreground leading-relaxed max-w-3xl">
        <p>
          VM Legacy Group respects your privacy. This policy explains what information we collect through this website, how we use it, and the choices available to you. This is a general placeholder — replace with your final legal copy prior to launch.
        </p>
        <div>
          <h3 className="font-display text-lg text-foreground">Information we collect</h3>
          <p className="mt-2">Contact details you submit via forms, and standard analytics such as page views and device information.</p>
        </div>
        <div>
          <h3 className="font-display text-lg text-foreground">How we use information</h3>
          <p className="mt-2">To respond to inquiries, deliver our services, improve the website, and comply with legal obligations.</p>
        </div>
        <div>
          <h3 className="font-display text-lg text-foreground">Your choices</h3>
          <p className="mt-2">You may request access, correction, or deletion of your personal data by contacting us at info@vmlegacygroup.in.</p>
        </div>
      </div>
    </Section>
  );
}
