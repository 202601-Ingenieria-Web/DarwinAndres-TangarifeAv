"use client";

/**
 * PortfolioCard - Molecule component
 * Displays a project card with image, title, short description and a "Saber más" button.
 * Clicking the button triggers the onLearnMore callback to open a dialog.
 * Used in the "Portafolio" section horizontal scroll.
 */

interface PortfolioCardProps {
  /** URL or path for the project image */
  image: string;
  title: string;
  shortDescription: string;
  /** Callback to open detail dialog */
  onLearnMore: () => void;
  /** Optional list of tech tags */
  tags?: string[];
}

export default function PortfolioCard({
  image,
  title,
  shortDescription,
  onLearnMore,
  tags = [],
}: PortfolioCardProps) {
  return (
    <div
      className="card"
      style={{ width: "280px",flexShrink: 0, overflow: "hidden", cursor: "pointer" }}
    >
      {/* Project image */}
      <div
        style={{
          width: "100%",
          height: "160px",
          background: `linear-gradient(135deg, var(--bg-card-hover), var(--bg-secondary))`,
          overflow: "hidden",
          position: "relative",
        }}
      >
        <img
          src={image}
          alt={title}
          style={{ width: "100%", height: "100%", objectFit: "cover", opacity: 0.85 }}
          onError={e => {
            // Fallback to gradient placeholder if image fails
            (e.target as HTMLImageElement).style.display = "none";
          }}
        />
        {/* Gradient overlay */}
        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            height: "60px",
            background: "linear-gradient(transparent, var(--bg-card))",
          }}
        />
      </div>

      <div style={{ padding: "1.25rem" }}>
        <h3 style={{ fontWeight: 700, fontSize: "0.95rem", color: "var(--text-primary)", marginBottom: "0.5rem" }}>
          {title}
        </h3>
        <p style={{ color: "var(--text-secondary)", fontSize: "0.8rem", lineHeight: 1.6, marginBottom: "1rem" }}>
          {shortDescription}
        </p>

        {/* Tech tags */}
        {tags.length > 0 && (
          <div style={{ display: "flex", flexWrap: "wrap", gap: "6px", marginBottom: "1rem" }}>
            {tags.map(tag => (
              <span key={tag} style={{
                fontSize: "0.65rem",
                padding: "2px 8px",
                borderRadius: "9999px",
                background: "rgba(124,58,237,0.15)",
                color: "#a78bfa",
                border: "1px solid rgba(124,58,237,0.25)",
                fontFamily: "var(--font-mono, monospace)",
              }}>
                {tag}
              </span>
            ))}
            <div>
              <button
  onClick={onLearnMore}
  style={{
    display: "flex",
    alignItems: "center",
    gap: "6px",
    color: "var(--accent)",
    fontSize: "0.82rem",
    fontWeight: 600,
    background: "none",
    border: "none",
    cursor: "pointer",
    padding: 0,
    marginTop: "1rem",
    transition: "gap 0.2s ease",
    fontFamily: "inherit",
  }}
  onMouseEnter={e => ((e.currentTarget as HTMLButtonElement).style.gap = "10px")}
  onMouseLeave={e => ((e.currentTarget as HTMLButtonElement).style.gap = "6px")}
>
  Saber más
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
    <path d="M5 12h14M12 5l7 7-7 7" />
  </svg>
</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
