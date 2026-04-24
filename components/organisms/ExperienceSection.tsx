"use client";

/**
 * ExperienceSection - Organism component
 * Shows professional work experience as a vertical timeline.
 * Reuses EducationCard (molecule) for consistent card design.
 */

import SectionTitle from "../atoms/SectionTitle";

interface ExperienceItem {
  company: string;
  role: string;
  period: string;
  location: string;
  bullets: string[];
  color: string;
}

const experiences: ExperienceItem[] = [
  {
    company: "Quind SAS",
    role: "Ingeniero de Desarrollo",
    period: "ene 2023 – presente",
    location: "Medellín, Antioquia",
    color: "var(--accent)",
    bullets: [
      "Desarrollé y mantuve aplicaciones backend con Java y tecnologías relacionadas.",
      "Colaboré en la implementación de microservicios y arquitecturas basadas en la nube.",
      "Optimicé el rendimiento de bases de datos mediante consultas eficientes y diseño óptimo.",
      "Trabajé en equipo ágil con desarrolladores y partes interesadas en proyectos clave.",
      "Participé en revisiones de código y sesiones de pair programming.",
      "Gestioné la integración de sistemas legados con nuevas tecnologías.",
      "Diseñé e implementé servicios RESTful para mejorar la comunicación entre sistemas.",
    ],
  },
  {
    company: "Mindhub LA",
    role: "Desarrollador Full Stack Java",
    period: "jun 2022 – dic 2022",
    location: "Argentina (Remoto)",
    color: "#a78bfa",
    bullets: [
      "Bootcamp intensivo de más de 700 horas con metodologías ágiles.",
      "Desarrollo de aplicaciones web con Java, Spring Boot, JavaScript y Vue.js.",
      "Trabajo en equipo usando Git Flow, Scrum y entregas iterativas.",
    ],
  },
];

export default function ExperienceSection() {
  return (
    <section id="experiencia" style={{ padding: "4rem 3rem", borderBottom: "1px solid var(--border)" }}>
      <SectionTitle
        title="Experiencia"
        subtitle="Mi trayectoria profesional en el desarrollo de software."
      />

      <div style={{ position: "relative", paddingLeft: "2rem" }}>
        {/* Vertical timeline line */}
        <div style={{
          position: "absolute",
          left: "0",
          top: "8px",
          bottom: "8px",
          width: "2px",
          background: "linear-gradient(to bottom, var(--accent), var(--accent-2), transparent)",
          borderRadius: "9999px",
        }} />

        <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
          {experiences.map((exp, i) => (
            <div
              key={exp.company + exp.period}
              className="animate-fadeInUp"
              style={{ animationDelay: `${i * 0.15}s`, animationFillMode: "both", position: "relative" }}
            >
              {/* Timeline dot */}
              <div style={{
                position: "absolute",
                left: "-2.45rem",
                top: "1.5rem",
                width: "12px",
                height: "12px",
                borderRadius: "50%",
                background: exp.color,
                border: "2px solid var(--bg-primary)",
                boxShadow: `0 0 12px ${exp.color}`,
              }} />

              <div className="card" style={{ padding: "1.75rem" }}>
                {/* Header row */}
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: "0.5rem", marginBottom: "1.25rem" }}>
                  <div>
                    <h3 style={{ fontWeight: 800, fontSize: "1.05rem", color: "var(--text-primary)", marginBottom: "3px" }}>
                      {exp.role}
                    </h3>
                    <p style={{ fontWeight: 600, fontSize: "0.85rem", color: exp.color }}>
                      {exp.company} · {exp.location}
                    </p>
                  </div>
                  <span className="mono" style={{
                    fontSize: "0.75rem",
                    padding: "4px 12px",
                    borderRadius: "9999px",
                    background: "rgba(0,212,255,0.08)",
                    color: "var(--accent)",
                    border: "1px solid rgba(0,212,255,0.2)",
                    fontWeight: 600,
                    whiteSpace: "nowrap",
                  }}>
                    {exp.period}
                  </span>
                </div>

                {/* Bullet points */}
                <ul style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
                  {exp.bullets.map((bullet, j) => (
                    <li key={j} style={{ display: "flex", gap: "10px", alignItems: "flex-start" }}>
                      <div style={{
                        width: "5px",
                        height: "5px",
                        borderRadius: "50%",
                        background: exp.color,
                        flexShrink: 0,
                        marginTop: "8px",
                      }} />
                      <span style={{ color: "var(--text-secondary)", fontSize: "0.85rem", lineHeight: 1.7 }}>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
