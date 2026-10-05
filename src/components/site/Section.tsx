import { motion } from "framer-motion";
import type { ReactNode } from "react";

export function Section({
  children,
  className = "",
  id,
}: {
  children: ReactNode;
  className?: string;
  id?: string;
}) {
  return (
    <section id={id} className={`relative mx-auto max-w-7xl px-6 sm:px-8 py-20 sm:py-28 ${className}`}>
      {children}
    </section>
  );
}

export function SectionHeader({
  eyebrow,
  title,
  description,
  align = "left",
}: {
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  align?: "left" | "center";
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.8, ease: [0.2, 0.8, 0.2, 1] }}
      className={`max-w-3xl ${align === "center" ? "mx-auto text-center" : ""}`}
    >
      {eyebrow && (
        <div className={`flex items-center gap-3 ${align === "center" ? "justify-center" : ""}`}>
          <span className="h-px w-10 bg-foreground" />
          <span className="text-[10px] font-semibold uppercase tracking-[0.32em] text-foreground/70">
            {eyebrow}
          </span>
        </div>
      )}
      <h2 className="mt-6 font-display text-4xl sm:text-5xl md:text-6xl leading-[1.02] tracking-tight text-foreground">
        {title}
      </h2>
      {description && (
        <p className="mt-6 text-base sm:text-lg text-muted-foreground leading-relaxed max-w-2xl">
          {description}
        </p>
      )}
    </motion.div>
  );
}

export function Reveal({
  children,
  delay = 0,
  className = "",
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.8, ease: [0.2, 0.8, 0.2, 1], delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
