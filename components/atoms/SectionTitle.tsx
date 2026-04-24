"use client";

/**
 * SectionTitle - Atom component
 * Reusable section heading with gradient text and decorative glow line.
 * Used in all main content sections.
 */

interface SectionTitleProps {
  /** Main heading text */
  title: string;
  /** Optional subtitle shown below the title */
  subtitle?: string;
}

export default function SectionTitle({ title, subtitle }: SectionTitleProps) {
  return (
    <div className="text-center mb-12">
      <h2 className="section-title mb-3">{title}</h2>
      {subtitle && (
        <p style={{ color: "var(--text-secondary)", maxWidth: "520px", margin: "0 auto", lineHeight: 1.7 }}>
          {subtitle}
        </p>
      )}
      <div className="glow-line mt-6" style={{ maxWidth: "120px", margin: "1.5rem auto 0" }} />
    </div>
  );
}
