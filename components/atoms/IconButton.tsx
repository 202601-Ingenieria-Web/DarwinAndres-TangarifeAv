/**
 * IconButton - Atom component
 * Circular icon button used in the right sidebar for social media links.
 */

interface IconButtonProps {
  icon: React.ReactNode;
  href: string;
  label: string;
}

export default function IconButton({ icon, href, label }: IconButtonProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      style={{
        display: "flex", alignItems: "center", justifyContent: "center",
        width: "40px", height: "40px", borderRadius: "50%",
        background: "var(--bg-card)", border: "1px solid var(--border)",
        color: "var(--text-secondary)", transition: "all 0.25s ease", textDecoration: "none",
      }}
      onMouseEnter={e => {
        const el = e.currentTarget as HTMLAnchorElement;
        el.style.borderColor = "var(--accent)"; el.style.color = "var(--accent)";
        el.style.boxShadow = "0 0 16px rgba(0,212,255,0.3)"; el.style.transform = "scale(1.1)";
      }}
      onMouseLeave={e => {
        const el = e.currentTarget as HTMLAnchorElement;
        el.style.borderColor = "var(--border)"; el.style.color = "var(--text-secondary)";
        el.style.boxShadow = "none"; el.style.transform = "scale(1)";
      }}
    >
      {icon}
    </a>
  );
}
