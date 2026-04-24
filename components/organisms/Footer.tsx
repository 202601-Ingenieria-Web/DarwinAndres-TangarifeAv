"use client";

/**
 * Footer - Organism component
 * Custom footer with name, tagline, nav links and copyright.
 */

import { Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon, HeartIcon } from "../atoms/SocialIcons";

export default function Footer() {
  const year = new Date().getFullYear();

  const navLinks = [
    { label: "Perfil",        href: "#perfil" },
    { label: "Conocimientos", href: "#conocimientos" },
    { label: "Educación",     href: "#educacion" },
    { label: "Portafolio",    href: "#portafolio" },
  ];

  const socialLinks = [
    { Icon: GithubIcon,   href: "https://github.com/AndresT3009",           label: "GitHub" },
    { Icon: LinkedinIcon, href: "https://linkedin.com/in/darwin-tangarife", label: "LinkedIn" },
    { Icon: Mail,         href: "mailto:darwin.a1120@gmail.com",            label: "Email", size: 16 },
  ];

  return (
    <footer style={{ padding: "3rem", background: "var(--bg-secondary)", borderTop: "1px solid var(--border)" }}>
      <div style={{ maxWidth: "800px", margin: "0 auto" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "1.5rem", marginBottom: "2rem" }}>
          <div>
            <p className="mono" style={{ color: "var(--accent)", fontSize: "0.75rem", marginBottom: "4px" }}>&lt;darwin.tangarife /&gt;</p>
            <p style={{ color: "var(--text-muted)", fontSize: "0.8rem" }}>Backend Developer · Medellín, Colombia</p>
          </div>

          <nav style={{ display: "flex", gap: "1.5rem", flexWrap: "wrap" }}>
            {navLinks.map(link => (
              <a key={link.label} href={link.href}
                style={{ color: "var(--text-secondary)", fontSize: "0.83rem", textDecoration: "none", transition: "color 0.2s" }}
                onMouseEnter={e => ((e.target as HTMLElement).style.color = "var(--accent)")}
                onMouseLeave={e => ((e.target as HTMLElement).style.color = "var(--text-secondary)")}
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div style={{ display: "flex", gap: "0.75rem" }}>
            {socialLinks.map(({ Icon, href, label }) => (
              <a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label}
                style={{
                  width: "36px", height: "36px", borderRadius: "50%",
                  background: "var(--bg-card)", border: "1px solid var(--border)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  color: "var(--text-secondary)", textDecoration: "none", transition: "all 0.2s ease",
                }}
                onMouseEnter={e => {
                  const el = e.currentTarget as HTMLAnchorElement;
                  el.style.borderColor = "var(--accent)"; el.style.color = "var(--accent)";
                }}
                onMouseLeave={e => {
                  const el = e.currentTarget as HTMLAnchorElement;
                  el.style.borderColor = "var(--border)"; el.style.color = "var(--text-secondary)";
                }}
              >
                <Icon size={16} />
              </a>
            ))}
          </div>
        </div>

        <div className="glow-line" style={{ marginBottom: "1.5rem" }} />

        <div style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: "6px" }}>
          <p style={{ color: "var(--text-muted)", fontSize: "0.78rem", display: "flex", alignItems: "center", gap: "6px" }}>
            © {year} Darwin Andrés Tangarife Avendaño · Hecho con <HeartIcon size={12} /> usando Next.js & TailwindCSS
          </p>
        </div>
      </div>
    </footer>
  );
}
