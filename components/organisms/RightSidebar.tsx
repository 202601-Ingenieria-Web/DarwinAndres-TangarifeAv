"use client";

import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { GithubIcon, LinkedinIcon, WhatsAppIcon, TelegramIcon } from "../atoms/SocialIcons";

const WA_MESSAGE = encodeURIComponent(
  "¡Hola Darwin! Vi tu hoja de vida y me pareció muy interesante tu perfil como desarrollador backend. Me gustaría conversar contigo sobre una oportunidad profesional. ¿Podríamos agendar una breve entrevista?"
);

const socialLinks = [
  { Icon: GithubIcon,   href: "https://github.com/AndresT3009",                label: "GitHub" },
  { Icon: LinkedinIcon, href: "https://linkedin.com/in/darwin-tangarife",      label: "LinkedIn" },
  { Icon: WhatsAppIcon, href: `https://wa.me/573015781171?text=${WA_MESSAGE}`, label: "WhatsApp" },
  { Icon: TelegramIcon, href: "https://t.me/AndresTangarife",                  label: "Telegram" },
];

export default function RightSidebar() {
  const [collapsed, setCollapsed] = useState(true);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth <= 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  // En PC: sidebar normal fijo a la derecha
  if (!isMobile) {
    return (
      <aside style={{
        width: "60px", minWidth: "60px", height: "100vh",
        position: "sticky", top: 0,
        background: "var(--bg-secondary)", borderLeft: "1px solid var(--border)",
        display: "flex", flexDirection: "column", alignItems: "center",
        justifyContent: "center", gap: "1rem", padding: "1rem 0",
      }}>
        <p style={{
          fontSize: "0.6rem", fontWeight: 700, letterSpacing: "0.15em",
          textTransform: "uppercase", color: "var(--text-muted)",
          writingMode: "vertical-rl", marginBottom: "1rem",
        }}>
          Links
        </p>
        {socialLinks.map(({ Icon, href, label }) => (
          <a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label}
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
            <Icon size={18} />
          </a>
        ))}
      </aside>
    );
  }

  // En móvil: sidebar flotante con botón flecha para colapsar/expandir
  return (
    <div style={{
      position: "fixed",
      right: 0,
      top: "50%",
      transform: "translateY(-50%)",
      zIndex: 55,
      display: "flex",
      alignItems: "center",
    }}>
      {/* Botón flecha */}
      <button
        onClick={() => setCollapsed(!collapsed)}
        style={{
          width: "24px",
          height: "48px",
          borderRadius: "8px 0 0 8px",
          background: "var(--bg-card)",
          border: "1px solid var(--border)",
          borderRight: "none",
          color: "var(--accent)",
          cursor: "pointer",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexShrink: 0,
        }}
      >
        {collapsed ? <ChevronLeft size={14} /> : <ChevronRight size={14} />}
      </button>

      {/* Panel de íconos */}
      <div style={{
        background: "var(--bg-secondary)",
        borderLeft: "1px solid var(--border)",
        borderRadius: "0 0 0 12px",
        padding: "0.75rem 0",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "0.75rem",
        overflow: "hidden",
        width: collapsed ? "0px" : "52px",
        transition: "width 0.3s ease",
      }}>
        {socialLinks.map(({ Icon, href, label }) => (
          <a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label}
            style={{
              display: "flex", alignItems: "center", justifyContent: "center",
              width: "36px", height: "36px", borderRadius: "50%",
              background: "var(--bg-card)", border: "1px solid var(--border)",
              color: "var(--text-secondary)", textDecoration: "none",
              flexShrink: 0,
            }}
          >
            <Icon size={16} />
          </a>
        ))}
      </div>
    </div>
  );
}