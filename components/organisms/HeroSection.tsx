"use client";

import { useState } from "react";
import { X, Mail, MapPin, Send } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "../atoms/SocialIcons";

export default function HeroSection() {
  const [showDialog, setShowDialog] = useState(false);

  return (
    <>
      <section id="perfil" style={{
        padding: "4rem 3rem", position: "relative", overflow: "hidden",
        background: "linear-gradient(135deg, var(--bg-secondary) 0%, var(--bg-primary) 100%)",
        borderBottom: "1px solid var(--border)",
      }}>
        {/* Glow orb */}
        <div style={{
          position: "absolute", top: "-80px", right: "-80px",
          width: "400px", height: "400px", borderRadius: "50%",
          background: "radial-gradient(circle, rgba(0,212,255,0.06) 0%, transparent 70%)",
          pointerEvents: "none",
        }} />

        <div style={{ display: "grid", gridTemplateColumns: "1fr auto", gap: "2rem", alignItems: "center", position: "relative", zIndex: 1 }}>
          <div className="animate-fadeInUp">
            <div className="mono" style={{ color: "var(--accent)", fontSize: "0.8rem", fontWeight: 500, marginBottom: "0.75rem" }}>
              &lt; Hola, mundo 👋 /&gt;
            </div>
            <h1 style={{ fontWeight: 800, fontSize: "clamp(2rem, 4vw, 3rem)", lineHeight: 1.1, marginBottom: "0.5rem" }}>
              Soy{" "}
              <span style={{ background: "linear-gradient(135deg, var(--accent), var(--accent-2))", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
                Darwin
              </span>{" "}
              Tangarife
            </h1>
            <p style={{ fontWeight: 700, fontSize: "1.4rem", color: "var(--text-secondary)", marginBottom: "1.5rem" }}>
              Desarrollador <span style={{ color: "var(--accent)" }}>Backend</span>
            </p>
            <p style={{ color: "var(--text-secondary)", lineHeight: 1.8, maxWidth: "540px", marginBottom: "2rem", fontSize: "0.9rem" }}>
              Desarrollador backend con experiencia en la creación de aplicaciones robustas y
              escalables usando <strong style={{ color: "var(--text-primary)" }}>Java</strong> y tecnologías asociadas.
              Especializado en <strong style={{ color: "var(--text-primary)" }}>microservicios</strong>,
              arquitecturas en la nube y optimización de bases de datos.
              Estudiante de Ingeniería de Sistemas en la Universidad de Antioquia.
            </p>
            <button
              onClick={() => setShowDialog(true)}
              style={{
                display: "inline-flex", alignItems: "center", gap: "10px",
                padding: "0.85rem 2rem", borderRadius: "12px",
                background: "linear-gradient(135deg, var(--accent-2), var(--accent))",
                color: "#fff", fontWeight: 700, fontSize: "0.9rem", border: "none",
                cursor: "pointer", transition: "all 0.3s ease",
                boxShadow: "0 4px 24px rgba(0,212,255,0.25)", fontFamily: "inherit",
              }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLButtonElement).style.transform = "translateY(-2px)";
                (e.currentTarget as HTMLButtonElement).style.boxShadow = "0 8px 32px rgba(0,212,255,0.4)";
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLButtonElement).style.transform = "translateY(0)";
                (e.currentTarget as HTMLButtonElement).style.boxShadow = "0 4px 24px rgba(0,212,255,0.25)";
              }}
            >
              <Send size={16} />
              Contáctame
            </button>
          </div>

          {/* Avatar */}
          <div className="animate-float" style={{
            width: "180px", height: "180px", borderRadius: "50%",
            background: "linear-gradient(135deg, var(--accent-2), var(--accent))",
            padding: "4px", flexShrink: 0,
          }}>
            <div style={{
              width: "100%", height: "100%", borderRadius: "50%", background: "var(--bg-card)",
              display: "flex", alignItems: "center", justifyContent: "center",overflow: "hidden",
              }}>
              <img src="/foto.jpg" alt="Darwin Tangarife" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
            </div>
          </div>
        </div>
      </section>

      {/* Contact Dialog */}
      {showDialog && (
        <div className="dialog-overlay" onClick={() => setShowDialog(false)}>
          <div
            className="animate-scaleIn"
            onClick={e => e.stopPropagation()}
            style={{
              background: "var(--bg-card)", border: "1px solid var(--border-hover)",
              borderRadius: "24px", padding: "2.5rem", maxWidth: "480px", width: "100%",
              position: "relative", boxShadow: "0 24px 80px rgba(0,212,255,0.12)",
            }}
          >
            <button
              onClick={() => setShowDialog(false)}
              style={{
                position: "absolute", top: "1.25rem", right: "1.25rem",
                width: "32px", height: "32px", borderRadius: "50%",
                background: "rgba(255,255,255,0.06)", border: "1px solid var(--border)",
                color: "var(--text-secondary)", cursor: "pointer",
                display: "flex", alignItems: "center", justifyContent: "center",
              }}
            >
              <X size={16} />
            </button>

              <div style={{
                background: "#0d1117",
                borderRadius: "10px",
                padding: "1rem 1.25rem",
                marginBottom: "1.75rem",
                border: "1px solid rgba(0,212,255,0.15)",
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: "0.78rem",
                lineHeight: 2,
              }}>
                <div style={{ color: "#6e7681", marginBottom: "2px" }}>// contacto.ts</div>
                <div>
                  <span style={{ color: "#ff7b72" }}>const </span>
                  <span style={{ color: "#79c0ff" }}>developer</span>
                  <span style={{ color: "#e6edf3" }}> = {"{"}</span>
                </div>
                <div style={{ paddingLeft: "1.25rem" }}>
                  <span style={{ color: "#e6edf3" }}>nombre: </span>
                  <span style={{ color: "#a5d6ff" }}>&quot;Darwin Tangarife&quot;</span>
                  <span style={{ color: "#e6edf3" }}>,</span>
                </div>
                <div style={{ paddingLeft: "1.25rem" }}>
                  <span style={{ color: "#e6edf3" }}>rol: </span>
                  <span style={{ color: "#a5d6ff" }}>&quot;Backend Developer&quot;</span>
                  <span style={{ color: "#e6edf3" }}>,</span>
                </div>
                <div style={{ paddingLeft: "1.25rem" }}>
                  <span style={{ color: "#e6edf3" }}>disponible: </span>
                  <span style={{ color: "#79c0ff" }}>true</span>
                  <span style={{ color: "#e6edf3" }}>,</span>
                </div>
                <div style={{ paddingLeft: "1.25rem" }}>
                  <span style={{ color: "#e6edf3" }}>abierto_a: </span>
                  <span style={{ color: "#a5d6ff" }}>&quot;nuevas oportunidades &quot;</span>
                </div>
                <div><span style={{ color: "#e6edf3" }}>{"}"}</span></div>
                <div style={{ marginTop: "4px" }}>
                  <span style={{ color: "#6e7681" }}>// ¿Hablamos? Escríbeme cuando quieras 👇</span>
                </div>
              </div>

            <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
              {[
                { icon: <Mail size={18} />,         label: "Email",     value: "darwin.a1120@gmail.com",           href: "mailto:darwin.a1120@gmail.com" },
                { icon: <GithubIcon size={18} />,   label: "GitHub",    value: "github.com/AndresT3009",           href: "https://github.com/AndresT3009" },
                { icon: <LinkedinIcon size={18} />, label: "LinkedIn",  value: "linkedin.com/in/darwin-tangarife", href: "https://linkedin.com/in/darwin-tangarife" },
                { icon: <MapPin size={18} />,       label: "Ubicación", value: "Sabaneta, Antioquia, Colombia",    href: null },
              ].map(({ icon, label, value, href }) => (
                <div key={label} style={{
                  display: "flex", alignItems: "center", gap: "1rem", padding: "1rem",
                  borderRadius: "12px", background: "rgba(0,212,255,0.04)", border: "1px solid var(--border)",
                }}>
                  <div style={{
                    width: "40px", height: "40px", borderRadius: "10px",
                    background: "rgba(0,212,255,0.1)", display: "flex", alignItems: "center",
                    justifyContent: "center", color: "var(--accent)", flexShrink: 0,
                  }}>
                    {icon}
                  </div>
                  <div>
                    <div style={{ fontSize: "0.7rem", color: "var(--text-muted)", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: "2px" }}>
                      {label}
                    </div>
                    {href ? (
                      <a href={href} target="_blank" rel="noopener noreferrer"
                        style={{ color: "var(--text-primary)", fontSize: "0.85rem", textDecoration: "none", fontWeight: 500 }}>
                        {value}
                      </a>
                    ) : (
                      <span style={{ color: "var(--text-primary)", fontSize: "0.85rem", fontWeight: 500 }}>{value}</span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
