import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Section, SectionHeader, Reveal } from "@/components/site/Section";
import { Mail, MapPin, Phone, Send } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { z } from "zod";

export const Route = createFileRoute("/_site/contact")({
  component: ContactPage,
  head: () => ({
    meta: [
      { title: "Contact — VM Legacy Group" },
      { name: "description", content: "Get in touch with VM Legacy Group for engineering consultancy, PMC and structural design engagements." },
      { property: "og:title", content: "Contact VM Legacy Group" },
      { property: "og:description", content: "Talk to our engineers about your next project." },
    ],
  }),
});

const schema = z.object({
  name: z.string().trim().min(2, "Please enter your full name").max(100),
  email: z.string().trim().email("Please enter a valid email").max(255),
  phone: z.string().trim().min(6, "Please enter a valid phone").max(20),
  subject: z.string().trim().min(2, "Please enter a subject").max(120),
  message: z.string().trim().min(10, "Please share a bit more detail").max(1500),
});

// Formspree endpoint — created at https://formspree.io
const FORMSPREE_ENDPOINT = "https://formspree.io/f/myeyybdp";

function ContactPage() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [errors, setErrors] = useState<Record<string, string>>({});

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setErrors({});
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());
    const parsed = schema.safeParse(data);
    if (!parsed.success) {
      const fieldErrs: Record<string, string> = {};
      for (const issue of parsed.error.issues) fieldErrs[String(issue.path[0])] = issue.message;
      setErrors(fieldErrs);
      setStatus("error");
      return;
    }

    setStatus("sending");
    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          _subject: `New consultation request: ${parsed.data.subject}`,
          name: parsed.data.name,
          email: parsed.data.email,
          phone: parsed.data.phone,
          project_subject: parsed.data.subject,
          message: parsed.data.message,
        }),
      });
      if (res.ok) {
        setStatus("sent");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <Section className="!pt-12">
      <SectionHeader
        eyebrow="Contact"
        title={<>Let's engineer your <span className="text-gradient-gold">next milestone</span>.</>}
        description="Share your project scope and our team will respond within one business day."
      />

      <div className="mt-14 grid gap-8 lg:grid-cols-[1.1fr_.9fr]">
        <Reveal>
          <form onSubmit={onSubmit} className="glass rounded-3xl p-6 sm:p-8 space-y-5">
            <div className="grid gap-5 sm:grid-cols-2">
              <Field label="Full Name" name="name" error={errors.name} />
              <Field label="Email" name="email" type="email" error={errors.email} />
              <Field label="Phone" name="phone" error={errors.phone} />
              <Field label="Subject" name="subject" error={errors.subject} />
            </div>
            <div>
              <label htmlFor="message" className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
                Project Details
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                maxLength={1500}
                className="mt-2 w-full rounded-lg bg-background/50 border border-border px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:border-gold/60 focus:ring-2 focus:ring-gold/20 transition"
                placeholder="Tell us about your project…"
              />
              {errors.message && <div className="mt-1.5 text-xs text-destructive">{errors.message}</div>}
            </div>

            <button
              type="submit"
              disabled={status === "sending"}
              className="inline-flex items-center gap-2 rounded-md bg-gradient-gold px-6 py-3 text-sm font-semibold text-primary-foreground shadow-gold hover:-translate-y-0.5 transition-transform disabled:opacity-60 disabled:hover:translate-y-0"
            >
              {status === "sending" ? "Sending…" : "Send Message"} <Send size={15} />
            </button>

            {status === "sent" && (
              <div className="text-sm text-gold">Thank you — your message has been received. We'll be in touch shortly.</div>
            )}
            {status === "error" && Object.keys(errors).length === 0 && (
              <div className="text-sm text-destructive">Something went wrong sending your message. Please try again, or reach us directly via phone or WhatsApp.</div>
            )}
          </form>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="space-y-4">
            <InfoCard
              icon={MapPin}
              title="Corporate Office"
              lines={["VM Legacy Group", "House No. 361, Kadipur Village", "Sector 10, Gurugram", "Haryana — 122001"]}
            />
            <InfoCard
              icon={Phone}
              title="Call Us"
              lines={["+91 96021 59357"]}
            />
            <InfoCard icon={Mail} title="Email" lines={["info@vmlegacygroup.in"]} />
            <a
              href="https://wa.me/919588019759?text=Hello%20VM%20Legacy%20Group%2C%20I%27d%20like%20to%20discuss%20an%20engineering%20consultancy%20project."
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 glass-gold rounded-2xl p-5 hover:border-gold/60 transition-colors"
            >
              <div className="grid h-11 w-11 place-items-center rounded-lg bg-[#25D366] text-white">
                <FaWhatsapp size={20} />
              </div>
              <div>
                <div className="font-display font-semibold">WhatsApp: +91 95880 19759</div>
                <div className="text-xs text-muted-foreground">Fastest way to reach our team</div>
              </div>
            </a>

            <div className="rounded-2xl overflow-hidden glass">
              <iframe
                title="VM Legacy Group location — Kadipur, Sector 10, Gurugram"
                src="https://www.google.com/maps?q=Kadipur+Village+Sector+10+Gurugram+Haryana+122001&output=embed"
                className="w-full h-64 border-0"
                loading="lazy"
              />
            </div>

          </div>
        </Reveal>
      </div>
    </Section>
  );
}

function Field({
  label, name, type = "text", error,
}: { label: string; name: string; type?: string; error?: string }) {
  return (
    <div>
      <label htmlFor={name} className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        maxLength={255}
        className="mt-2 w-full rounded-lg bg-background/50 border border-border px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:border-gold/60 focus:ring-2 focus:ring-gold/20 transition"
      />
      {error && <div className="mt-1.5 text-xs text-destructive">{error}</div>}
    </div>
  );
}

function InfoCard({ icon: Icon, title, lines }: { icon: typeof Mail; title: string; lines: string[] }) {
  return (
    <div className="glass rounded-2xl p-5 flex gap-4">
      <div className="grid h-11 w-11 shrink-0 place-items-center rounded-lg bg-gradient-gold text-primary-foreground">
        <Icon size={18} />
      </div>
      <div className="min-w-0">
        <div className="font-display font-semibold">{title}</div>
        <div className="mt-1 text-sm text-muted-foreground">
          {lines.map((l) => <div key={l}>{l}</div>)}
        </div>
      </div>
    </div>
  );
}
