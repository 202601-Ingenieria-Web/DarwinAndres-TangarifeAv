"use client";

/**
 * KnowledgeSection - Organism component
 * Displays the student's technical knowledge as a responsive card grid.
 * Each card uses SkillCard (molecule) with an inline SVG icon.
 * Follows the Figma design layout.
 */

import SectionTitle from "../atoms/SectionTitle";
import SkillCard from "../molecules/SkillCard";

// Inline SVG icons (sourced from Iconify / custom)
const JavaIcon = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
    <path d="M8.851 18.56s-.917.534.653.714c1.902.218 2.874.187 4.969-.211 0 0 .552.346 1.321.646-4.699 2.013-10.633-.118-6.943-1.149M8.276 15.933s-1.028.761.542.924c2.032.209 3.636.227 6.413-.308 0 0 .384.389.987.602-5.679 1.661-12.007.13-7.942-1.218M13.116 11.475c1.158 1.333-.304 2.533-.304 2.533s2.939-1.518 1.589-3.418c-1.261-1.772-2.228-2.652 3.007-5.688 0-.001-8.216 2.051-4.292 6.573M19.33 20.504s.679.559-.747.991c-2.712.822-11.288 1.069-13.669.033-.856-.373.75-.89 1.254-.998.527-.114.828-.093.828-.093-.953-.671-6.156 1.317-2.643 1.887 9.58 1.553 17.462-.7 14.977-1.82M9.292 13.21s-4.362 1.037-1.544 1.414c1.189.159 3.561.123 5.77-.062 1.806-.152 3.618-.477 3.618-.477s-.637.272-1.098.587c-4.429 1.165-12.981.623-10.522-.568 2.082-1.006 3.776-.894 3.776-.894M17.116 17.584c4.503-2.34 2.421-4.589.968-4.285-.355.074-.515.138-.515.138s.132-.207.385-.297c2.875-1.011 5.086 2.981-.928 4.562 0-.001.07-.062.09-.118M14.401 0s2.494 2.494-2.365 6.33c-3.896 3.077-.888 4.832-.001 6.836-2.274-2.053-3.943-3.858-2.824-5.539 1.644-2.469 6.197-3.665 5.19-7.627M9.734 23.924c4.322.277 10.959-.153 11.116-2.198 0 0-.302.775-3.572 1.391-3.688.694-8.239.613-10.937.168 0-.001.553.457 3.393.639"/>
  </svg>
);

const SpringIcon = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
    <path d="M21.8537 1.4158a10.4504 10.4504 0 0 1-1.284 2.2471A11.9666 11.9666 0 1 0 3.1677 20.0manufactured by spring..."/>
    <path d="M20.9506 1.2656A11.9454 11.9454 0 1 0 3.4785 20.7344a11.9454 11.9454 0 0 0 17.4721-19.4688zM6.97 19.0301c-.7246-.3028-1.1905-.9297-1.1387-1.5459.0498-.6094.5894-1.1113 1.3818-1.3701.3916-.1299.7842-.1895 1.1904-.2187a9.5597 9.5597 0 0 0 1.2627-.1865c.5009-.1563.9463-.4971 1.2471-1.1036l.0166.0088c.7471-1.3711 2.0498-2.2148 3.4951-2.2148 1.2168 0 2.3115.5684 3.082 1.4707a8.5 8.5 0 0 1-1.6748 2.4648c-1.5498 1.5498-3.501 2.5616-5.5244 2.8467-.8789.1211-1.6543.0098-2.3378-.2608z"/>
  </svg>
);

const MicroservicesIcon = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
    <rect x="2" y="3" width="7" height="5" rx="1"/>
    <rect x="15" y="3" width="7" height="5" rx="1"/>
    <rect x="8.5" y="16" width="7" height="5" rx="1"/>
    <line x1="9" y1="5.5" x2="15" y2="5.5"/>
    <line x1="5.5" y1="8" x2="5.5" y2="14"/>
    <line x1="18.5" y1="8" x2="18.5" y2="14"/>
    <line x1="5.5" y1="14" x2="12" y2="16"/>
    <line x1="18.5" y1="14" x2="12" y2="16"/>
  </svg>
);

const DockerIcon = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
    <path d="M13.983 11.078h2.119a.186.186 0 0 0 .186-.185V9.006a.186.186 0 0 0-.186-.186h-2.119a.185.185 0 0 0-.185.185v1.888c0 .102.083.185.185.185m-2.954-5.43h2.118a.186.186 0 0 0 .186-.186V3.574a.186.186 0 0 0-.186-.185h-2.118a.185.185 0 0 0-.185.185v1.888c0 .102.082.185.185.185m0 2.716h2.118a.187.187 0 0 0 .186-.186V6.29a.186.186 0 0 0-.186-.185h-2.118a.185.185 0 0 0-.185.185v1.887c0 .102.082.185.185.186m-2.93 0h2.12a.186.186 0 0 0 .184-.186V6.29a.185.185 0 0 0-.185-.185H8.1a.185.185 0 0 0-.185.185v1.887c0 .102.083.185.185.186m-2.964 0h2.119a.186.186 0 0 0 .185-.186V6.29a.185.185 0 0 0-.185-.185H5.136a.186.186 0 0 0-.186.185v1.887c0 .102.084.185.186.186m5.893 2.715h2.118a.186.186 0 0 0 .186-.185V9.006a.186.186 0 0 0-.186-.186h-2.118a.185.185 0 0 0-.185.185v1.888c0 .102.082.185.185.185m-2.93 0h2.12a.185.185 0 0 0 .184-.185V9.006a.185.185 0 0 0-.184-.186h-2.12a.185.185 0 0 0-.184.185v1.888c0 .102.083.185.185.185m-2.964 0h2.119a.185.185 0 0 0 .185-.185V9.006a.185.185 0 0 0-.184-.186h-2.12a.186.186 0 0 0-.186.185v1.888c0 .102.084.185.186.185m-2.92 0h2.12a.185.185 0 0 0 .184-.185V9.006a.185.185 0 0 0-.184-.186h-2.12a.185.185 0 0 0-.184.185v1.888c0 .102.082.185.184.185M23.763 9.89c-.065-.051-.672-.51-1.954-.51-.338.001-.676.03-1.01.087-.248-1.7-1.653-2.53-1.716-2.566l-.344-.199-.226.327c-.284.438-.49.922-.612 1.43-.23.97-.09 1.882.403 2.661-.595.332-1.55.413-1.744.42H.751a.751.751 0 0 0-.75.748 11.376 11.376 0 0 0 .692 4.062c.545 1.428 1.355 2.48 2.41 3.124 1.18.723 3.1 1.137 5.275 1.137.983.003 1.963-.086 2.93-.266a12.248 12.248 0 0 0 3.823-1.389c.98-.567 1.86-1.288 2.61-2.136 1.252-1.418 1.998-2.997 2.553-4.4h.221c1.372 0 2.215-.549 2.68-1.009.309-.293.55-.65.707-1.046l.098-.288Z"/>
  </svg>
);

const DatabaseIcon = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
    <ellipse cx="12" cy="5" rx="9" ry="3"/>
    <path d="M3 5v4c0 1.657 4.03 3 9 3s9-1.343 9-3V5"/>
    <path d="M3 9v4c0 1.657 4.03 3 9 3s9-1.343 9-3V9"/>
    <path d="M3 13v4c0 1.657 4.03 3 9 3s9-1.343 9-3v-4"/>
  </svg>
);

const AgileIcon = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
    <path d="M12 2L2 7l10 5 10-5-10-5z"/>
    <path d="M2 17l10 5 10-5"/>
    <path d="M2 12l10 5 10-5"/>
  </svg>
);

export default function KnowledgeSection() {
  const skills = [
    {
      icon: <JavaIcon />,
      title: "Java & Spring Boot",
      description: "Desarrollo de aplicaciones empresariales robustas con Java SE y el ecosistema Spring.",
    },
    {
      icon: <MicroservicesIcon />,
      title: "Microservicios",
      description: "Diseño e implementación de arquitecturas distribuidas y basadas en la nube.",
    },
    {
      icon: <DatabaseIcon />,
      title: "Bases de Datos",
      description: "Optimización de consultas, diseño de esquemas y gestión de PostgreSQL y MySQL.",
    },
    {
      icon: <DockerIcon />,
      title: "Docker & DevOps",
      description: "Contenedorización de aplicaciones y flujos CI/CD para despliegue continuo.",
    },
    {
      icon: <SpringIcon />,
      title: "APIs RESTful",
      description: "Diseño e implementación de servicios REST para comunicación eficiente entre sistemas.",
    },
    {
      icon: <AgileIcon />,
      title: "Equipos Ágiles",
      description: "Experiencia trabajando en Scrum/Kanban, revisiones de código y pair programming.",
    },
  ];

  return (
    <section id="conocimientos" style={{ padding: "4rem 3rem", borderBottom: "1px solid var(--border)" }}>
      <SectionTitle
        title="Mis Conocimientos"
        subtitle="Tecnologías y metodologías que aplico en el desarrollo de soluciones backend escalables."
      />
      <div style={{ display: "flex", flexWrap: "wrap", gap: "1.25rem" }}>
        {skills.map((skill, i) => (
          <div
            key={skill.title}
            className="animate-fadeInUp"
            style={{ animationDelay: `${i * 0.1}s`, animationFillMode: "both", flex: "1 1 260px" }}
          >
            <SkillCard icon={skill.icon} title={skill.title} description={skill.description} />
          </div>
        ))}
      </div>
    </section>
  );
}
