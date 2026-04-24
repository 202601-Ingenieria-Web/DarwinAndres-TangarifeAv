/**
 * Tag - Atom component
 * Small badge/chip for displaying technologies, dates, or labels.
 * Used in education cards and portfolio items.
 */

interface TagProps {
  children: React.ReactNode;
  /** Optional color variant */
  variant?: "default" | "purple" | "green";
}

export default function Tag({ children, variant = "default" }: TagProps) {
  const styles: Record<string, React.CSSProperties> = {
    default: {
      background: "rgba(0, 212, 255, 0.1)",
      color: "var(--accent)",
      border: "1px solid rgba(0, 212, 255, 0.25)",
    },
    purple: {
      background: "rgba(124, 58, 237, 0.15)",
      color: "#a78bfa",
      border: "1px solid rgba(124, 58, 237, 0.3)",
    },
    green: {
      background: "rgba(34, 197, 94, 0.1)",
      color: "#4ade80",
      border: "1px solid rgba(34, 197, 94, 0.25)",
    },
  };

  return (
    <span
      className="mono"
      style={{
        display: "inline-flex",
        alignItems: "center",
        padding: "3px 10px",
        borderRadius: "9999px",
        fontSize: "0.7rem",
        fontWeight: 600,
        letterSpacing: "0.04em",
        ...styles[variant],
      }}
    >
      {children}
    </span>
  );
}
