"use client";

/**
 * LeftSidebar - Organism component
 * Fixed left navigation panel containing:
 * - Profile photo, name, and title
 * - Personal contact data
 * - Language proficiency bars
 * - Programming language skill bars
 * - Extra skills list
 */

import ProgressBar from "../atoms/ProgressBar";
import { GithubIcon, LinkedinIcon } from "../atoms/SocialIcons";
import { Mail, Phone, MapPin } from "lucide-react";

export default function LeftSidebar() {
  const languages = [
    { label: "Español", percentage: 100 },
    { label: "Inglés",  percentage: 40 },
  ];

  const programmingLanguages = [
    { label: "Java",           percentage: 85 },
    { label: "Spring Boot",    percentage: 80 },
    { label: "JavaScript",     percentage: 60 },
    { label: "Vue.js",         percentage: 55 },
    { label: "SQL/PostgreSQL", percentage: 75 },
    { label: "Docker",         percentage: 65 },
  ];

  const extraSkills = [
    "Microservicios",
    "Servicios RESTful",
    "Trabajo en equipo ágil",
    "Git & GitHub",
    "Arquitectura en la nube",
    "Código limpio",
    "Revisiones de código",
  ];

  return (
    <aside style={{
      width: "var(--sidebar-w)", minWidth: "var(--sidebar-w)", height: "100vh",
      position: "sticky", top: 0, overflowY: "auto",
      background: "var(--bg-secondary)", borderRight: "1px solid var(--border)",
      padding: "2rem 1.5rem", display: "flex", flexDirection: "column", gap: "2rem",
    }}>

      {/* Profile */}
      <div style={{ textAlign: "center" }}>
        <div style={{
          width: "100px", height: "100px", borderRadius: "50%",
          background: "linear-gradient(135deg, var(--accent-2), var(--accent))",
          padding: "3px", margin: "0 auto 1rem", position: "relative",
        }}>
          <div style={{
            width: "100%", height: "100%", borderRadius: "50%",
            background: "var(--bg-card)", display: "flex", alignItems: "center",
            overflow: "hidden",
            }}>
              <img src="/foto.jpg" alt="Darwin Tangarife" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
          </div>
          <div className="status-dot" style={{ position: "absolute", bottom: "6px", right: "6px" }} />
        </div>
        <h1 style={{ fontWeight: 800, fontSize: "1.05rem", color: "var(--text-primary)", marginBottom: "4px" }}>
          Darwin Tangarife
        </h1>
        <p className="mono" style={{ color: "var(--accent)", fontSize: "0.75rem", fontWeight: 500 }}>
          Backend Developer
        </p>
      </div>

      <div className="glow-line" />

      {/* Contact */}
      <div>
        <h2 style={{ fontSize: "0.7rem", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--text-muted)", marginBottom: "1rem" }}>
          Datos de contacto
        </h2>
        <div style={{ display: "flex", flexDirection: "column", gap: "0.7rem" }}>
          {[
            { Icon: Mail,    label: "darwin.a1120@gmail.com", href: "mailto:darwin.a1120@gmail.com" },
            { Icon: Phone,   label: "+57 301 578 1171", href: null },
            { Icon: MapPin,  label: "Sabaneta, Antioquia", href: null },
          ].map(({ Icon, label, href }) => (
            <div key={label} style={{ display: "flex", alignItems: "center", gap: "10px" }}>
              <Icon size={14} style={{ color: "var(--accent)", flexShrink: 0 }} />
              {href ? (
                <a href={href} style={{ color: "var(--text-secondary)", fontSize: "0.78rem", textDecoration: "none", wordBreak: "break-all" }}>{label}</a>
              ) : (
                <span style={{ color: "var(--text-secondary)", fontSize: "0.78rem" }}>{label}</span>
              )}
            </div>
          ))}
          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <GithubIcon size={14} />
            <a href="https://github.com/AndresT3009" target="_blank" rel="noopener noreferrer"
              style={{ color: "var(--text-secondary)", fontSize: "0.78rem", textDecoration: "none" }}>
              github.com/AndresT3009
            </a>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <LinkedinIcon size={14} />
            <a href="https://linkedin.com/in/darwin-tangarife" target="_blank" rel="noopener noreferrer"
              style={{ color: "var(--text-secondary)", fontSize: "0.78rem", textDecoration: "none" }}>
              linkedin.com/in/darwin-tangarife
            </a>
          </div>
        </div>
      </div>

      <div className="glow-line" />

      {/* Languages */}
      <div>
        <h2 style={{ fontSize: "0.7rem", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--text-muted)", marginBottom: "1rem" }}>
          Idiomas
        </h2>
        {languages.map(lang => <ProgressBar key={lang.label} label={lang.label} percentage={lang.percentage} />)}
      </div>

      <div className="glow-line" />

      {/* Programming languages */}
      <div>
        <h2 style={{ fontSize: "0.7rem", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--text-muted)", marginBottom: "1rem" }}>
          Lenguajes de Programación
        </h2>
        {programmingLanguages.map(lang => <ProgressBar key={lang.label} label={lang.label} percentage={lang.percentage} />)}
      </div>

      <div className="glow-line" />

      {/* Extra skills */}
      <div>
        <h2 style={{ fontSize: "0.7rem", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--text-muted)", marginBottom: "1rem" }}>
          Habilidades extra
        </h2>
        <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
          {extraSkills.map(skill => (
            <div key={skill} style={{ display: "flex", alignItems: "center", gap: "8px" }}>
              <div style={{ width: "6px", height: "6px", borderRadius: "50%", background: "var(--accent)", flexShrink: 0 }} />
              <span style={{ color: "var(--text-secondary)", fontSize: "0.8rem" }}>{skill}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Hobbies */}
      <div>
        <h2 style={{ fontSize: "0.7rem", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--text-muted)", marginBottom: "1rem" }}>
          Pasatiempos
        </h2>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
          {["Programación", "Videojuegos", "Senderismo", "Gimnasio"].map(h => (
            <span key={h} className="tag" style={{ fontSize: "0.72rem" }}>{h}</span>
          ))}
        </div>
      </div>
    </aside>
  );
}
