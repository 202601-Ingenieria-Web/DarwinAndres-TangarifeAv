"use client";

/**
 * EducationSection - Organism component
 * Displays formal education history and completed courses.
 * Uses EducationCard (molecule) for each entry.
 */

import SectionTitle from "../atoms/SectionTitle";
import EducationCard from "../molecules/EducationCard";

export default function EducationSection() {
  const formalEducation = [
    {
      institution: "Universidad de Antioquia",
      period: "ene 2023 – presente",
      title: "Ingeniería de Sistemas",
      description:
        "Formación en fundamentos de computación, algoritmia, estructuras de datos, desarrollo de software y sistemas distribuidos. Énfasis en desarrollo backend y arquitecturas modernas.",
      periodVariant: "green" as const,
    },
    {
      institution: "Universidad de Antioquia",
      period: "ene 2005 – dic 2010",
      title: "Ingeniero de Alimentos",
      description:
        "Título de pregrado con formación en procesos industriales, control de calidad y gestión de producción. Base sólida en pensamiento analítico y resolución de problemas.",
      periodVariant: "purple" as const,
    },
    {
      institution: "Mindhub LA — Argentina",
      period: "jun 2022 – dic 2022",
      title: "Desarrollador Full Stack Java",
      description:
        "Bootcamp intensivo de más de 700 horas con metodologías ágiles. Desarrollo de aplicaciones web con Java, Spring Boot, JavaScript y Vue.js. Proyectos prácticos en equipo.",
      periodVariant: "default" as const,
    },
  ];

  const courses = [
    {
      institution: "Platzi / Udemy",
      period: "nov 2023",
      title: "Git y GitHub",
      description: "Control de versiones, flujos de trabajo con ramas, pull requests y colaboración en proyectos de código abierto.",
      periodVariant: "default" as const,
    },
    {
      institution: "Platzi / Udemy",
      period: "dic 2023",
      title: "Java SE Orientado a Objetos",
      description: "Principios de POO: encapsulamiento, herencia, polimorfismo e interfaces aplicados en Java SE.",
      periodVariant: "default" as const,
    },
    {
      institution: "Platzi / Udemy",
      period: "may 2023",
      title: "Docker & Contenedores",
      description: "Fundamentos de Docker: imágenes, contenedores, volúmenes, redes y Docker Compose para entornos de desarrollo.",
      periodVariant: "default" as const,
    },
    {
      institution: "Platzi / Udemy",
      period: "may 2023",
      title: "Programación Orientada a Objetos",
      description: "Patrones de diseño, principios SOLID y arquitectura limpia para el desarrollo de software mantenible.",
      periodVariant: "default" as const,
    },
  ];

  return (
    <section id="educacion" style={{ padding: "4rem 3rem", borderBottom: "1px solid var(--border)" }}>
      <SectionTitle
        title="Educación"
        subtitle="Mi trayectoria académica y de formación continua en tecnología."
      />

      {/* Formal education */}
      <div style={{ display: "flex", flexDirection: "column", gap: "1rem", marginBottom: "3rem" }}>
        {formalEducation.map((item, i) => (
          <div
            key={item.title}
            className="animate-fadeInUp"
            style={{ animationDelay: `${i * 0.1}s`, animationFillMode: "both" }}
          >
            <EducationCard {...item} />
          </div>
        ))}
      </div>

      {/* Courses subsection */}
      <h3 style={{
        fontSize: "1.1rem",
        fontWeight: 700,
        color: "var(--text-secondary)",
        marginBottom: "1.25rem",
        paddingLeft: "0.5rem",
        borderLeft: "3px solid var(--accent)",
      }}>
        Cursos y Certificaciones
      </h3>
      <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
        {courses.map((item, i) => (
          <div
            key={item.title}
            className="animate-fadeInUp"
            style={{ animationDelay: `${(i + 3) * 0.1}s`, animationFillMode: "both" }}
          >
            <EducationCard {...item} />
          </div>
        ))}
      </div>
    </section>
  );
}
