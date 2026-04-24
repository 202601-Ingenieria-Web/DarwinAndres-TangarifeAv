/**
 * EducationCard - Molecule component
 * Displays an education entry with institution, dates, title, and description.
 * Used in the "Educación" section. Reused for both formal education and courses.
 */

import Tag from "../atoms/Tag";

interface EducationCardProps {
  institution: string;
  /** Formatted date range, e.g. "ene 2023 – presente" */
  period: string;
  /** Degree or certificate title */
  title: string;
  description: string;
  /** Optional tag variant for period badge */
  periodVariant?: "default" | "purple" | "green";
}

export default function EducationCard({
  institution,
  period,
  title,
  description,
  periodVariant = "purple",
}: EducationCardProps) {
  return (
    <div
      className="card"
      style={{ padding: "1.75rem", display: "grid", gridTemplateColumns: "1fr 1.5fr", gap: "1.5rem" }}
    >
      {/* Left column: institution and dates */}
      <div>
        <h3 style={{ fontWeight: 700, fontSize: "1rem", color: "var(--text-primary)", marginBottom: "0.75rem" }}>
          {institution}
        </h3>
        <Tag variant={periodVariant}>{period}</Tag>
      </div>

      {/* Right column: title and description */}
      <div>
        <h4 style={{ fontWeight: 600, fontSize: "0.95rem", color: "var(--accent)", marginBottom: "0.6rem" }}>
          {title}
        </h4>
        <p style={{ color: "var(--text-secondary)", fontSize: "0.83rem", lineHeight: 1.7 }}>
          {description}
        </p>
      </div>
    </div>
  );
}
