/**
 * SkillCard - Molecule component
 * Card displaying a skill/knowledge area with icon, title and description.
 * Used in the "Conocimientos" section. Follows the Figma card layout.
 */

interface SkillCardProps {
  /** SVG icon string or React node */
  icon: React.ReactNode;
  title: string;
  description: string;
}

export default function SkillCard({ icon, title, description }: SkillCardProps) {
  return (
    <div
      className="card"
      style={{
        padding: "2rem 1.5rem",
        textAlign: "center",
        minWidth: "200px",
        flex: "1 1 200px",
      }}
    >
      {/* Icon container with glow effect */}
      <div
        style={{
          width: "64px",
          height: "64px",
          borderRadius: "16px",
          background: "rgba(0,212,255,0.08)",
          border: "1px solid rgba(0,212,255,0.2)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          margin: "0 auto 1.25rem",
          color: "var(--accent)",
          transition: "all 0.3s ease",
        }}
      >
        {icon}
      </div>
      <h3 style={{ fontWeight: 700, fontSize: "1rem", marginBottom: "0.5rem", color: "var(--text-primary)" }}>
        {title}
      </h3>
      <p style={{ color: "var(--text-secondary)", fontSize: "0.82rem", lineHeight: 1.6 }}>
        {description}
      </p>
    </div>
  );
}
