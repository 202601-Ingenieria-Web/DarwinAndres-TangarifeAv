"use client";

/**
 * PortfolioSection - Organism component
 * Horizontal-scrollable portfolio of projects.
 * Clicking "Saber más" opens a detail dialog for each project.
 * Uses PortfolioCard (molecule) for each card.
 */

import { useState } from "react";
import SectionTitle from "../atoms/SectionTitle";
import PortfolioCard from "../molecules/PortfolioCard";
import { X, ExternalLink } from "lucide-react";
import { GithubIcon } from "../atoms/SocialIcons";

interface Project {
  id: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  image: string;
  tags: string[];
  githubUrl?: string;
  liveUrl?: string;
  highlights: string[];
}

const projects: Project[] = [
  {
    id: "quind-backend",
    title: "Sistema Rastreo de Paquetes LogiTrack",
    shortDescription: "Microservicios Java para gestión de logística y seguimiento de paquetes en tiempo real.",
    fullDescription:
      "LogiTrack es un sistema integral de seguimiento de paquetes basado en arquitectura hexagonal (puertos y adaptadores). Proporciona seguimiento en tiempo real, actualizaciones de estado e historial de ubicación de los paquetes a lo largo de todo su ciclo de entrega.",
    image: "/tracking.png",
    tags: ["Java", "Spring Boot", "Microservicios", "PostgreSQL", "Docker", "Apache Kafka"],
    githubUrl: "https://github.com/AndresT3009",
    highlights: [
      "Implementé microservicios que reducen el tiempo de respuesta en un 40%.",
      "Diseñé servicios RESTful para integrar sistemas legados con nuevas tecnologías.",
      "Optimicé consultas SQL complejas mejorando el rendimiento de la base de datos.",
      "Colaboré en migraciones a arquitecturas basadas en la nube.",
      "Participé en code reviews y sesiones de pair programming semanales.",
    ],
  },
  {
    id: "mindhub-fullstack",
    title: "Aplicación Full Stack Mindhub",
    shortDescription: "App web completa desarrollada durante bootcamp intensivo de +700h con metodologías ágiles.",
    fullDescription:
      "Proyecto final del bootcamp Mindhub LA. Aplicación web full stack construida con Java/Spring Boot en el backend y Vue.js en el frontend, aplicando metodologías ágiles (Scrum) durante todo el desarrollo.",
    image: "/deportiva.png",
    tags: ["Java", "Spring Boot", "Vue.js", "JavaScript", "MySQL", "Apache Kafka"],
    githubUrl: "https://github.com/AndresT3009",
    highlights: [
      "Arquitectura REST con autenticación JWT y control de roles.",
      "Frontend SPA con Vue.js consumiendo la API REST.",
      "Despliegue en Railway con CI/CD básico.",
      "Desarrollo en equipo con Git Flow y pull requests.",
      "Aplicación de patrones de diseño: Repository, Service Layer.",
    ],
  },
  {
    id: "rest-api",
    title: "Sistema de Gestión de propiedades inmobiliarias",
    shortDescription: "Microservicio REST para gestión de propiedades, clientes y reservas en el sector inmobiliario.",
    fullDescription:
      "API RESTful para una plataforma de alquiler de propiedades. Permite a los usuarios buscar propiedades, gestionar reservas y administrar perfiles. Implementada con Spring Boot, seguridad con JWT y documentación automática con Swagger.",
    image: "/alquiler_propiedades.png",
    tags: ["Spring Boot", "Spring Security", "Swagger", "JUnit", "Apache Kafka"],
    githubUrl: "https://github.com/AndresT3009",
    highlights: [
      "Documentación automática con Swagger UI y OpenAPI 3.",
      "Autenticación y autorización con Spring Security y JWT.",
      "Pruebas unitarias con JUnit 5 y Mockito.",
      "Manejo centralizado de excepciones con @ControllerAdvice.",
      "Paginación y filtrado avanzado en los endpoints.",
    ],
  },
  {
    id: "docker-compose",
    title: "Sistema de gestión bancaria",
    shortDescription: "Stack de desarrollo local con Docker Compose para aplicación bancaria con Spring Boot, PostgreSQL, Redis y Nginx.",
    fullDescription:
      "Stack de desarrollo local para una aplicación bancaria que incluye servicios de backend con Spring Boot, base de datos PostgreSQL, caché Redis y servidor web Nginx. Configurado con Docker Compose para facilitar el despliegue y la gestión de dependencias.",
    image: "/banco.png",
    tags: ["Docker", "Docker Compose", "PostgreSQL", "Redis", "Nginx", "Apache Kafka"],
    githubUrl: "https://github.com/AndresT3009",
    highlights: [
      "Stack completo reproducible con un solo comando `docker-compose up`.",
      "Configuración de redes y volúmenes para persistencia de datos y comunicación entre contenedores.",
      "Variables de entorno separadas por ambiente (dev, prod).",
      "Integración de Nginx como proxy inverso para el backend.",
      "Documentación detallada para onboarding de nuevos desarrolladores.",
    ],
  },
  {
    id: "portafolio-web",
    title: "Sistema de soporte técnico mediante tickets",
    shortDescription: "Sistema de soporte con gestión de tickets y autenticación  para una empresa de telecomunicaciones.",
    fullDescription:
      "Sistema de soporte técnico desarrollado para una empresa de telecomunicaciones. Permite a los clientes crear y gestionar tickets de soporte, mientras que el equipo de soporte puede asignar, actualizar y resolver los tickets. Implementado con Spring Boot, seguridad con Spring Security y persistencia con MySQL.",
    image: "/soporte_tecnologico.png",
    tags: ["Spring Boot", "Java", "TailwindCSS", "React", "Vercel", "Apache Kafka"],
    githubUrl: "https://github.com/AndresT3009",
    liveUrl: "https://darwin-tangarife.vercel.app",
    highlights: [
      "Desarrollo de un sistema de tickets con roles de usuario y autenticación segura.",
      "Interfaz de usuario intuitiva y responsive con React y TailwindCSS.",
      "Despliegue continuo en Vercel con integración de GitHub Actions.",
      "Implementación de filtros y búsqueda avanzada para tickets.",
      "Manejo de estados complejos con React Context API.",
    ],
  },
];

export default function PortfolioSection() {
  const [activeProject, setActiveProject] = useState<Project | null>(null);

  return (
    <>
      <section id="portafolio" style={{ padding: "4rem 3rem 4rem", borderBottom: "1px solid var(--border)" }}>
        <SectionTitle
          title="Portafolio"
          subtitle="Proyectos desarrollados en mi experiencia profesional y formación académica."
        />

        {/* Horizontal scroll container */}
        <div className="scroll-x" style={{ display: "flex", gap: "1.25rem", paddingBottom: "1rem" }}>
          {projects.map((project, i) => (
            <div
              key={project.id}
              className="animate-fadeInUp"
              style={{ animationDelay: `${i * 0.1}s`, animationFillMode: "both" }}
            >
              <PortfolioCard
                image={project.image}
                title={project.title}
                shortDescription={project.shortDescription}
                tags={project.tags}
                onLearnMore={() => setActiveProject(project)}
              />
            </div>
          ))}
        </div>
      </section>

      {/* ── Project Detail Dialog ── */}
      {activeProject && (
        <div className="dialog-overlay" onClick={() => setActiveProject(null)}>
          <div
            className="animate-scaleIn"
            onClick={e => e.stopPropagation()}
            style={{
              background: "var(--bg-card)",
              border: "1px solid var(--border-hover)",
              borderRadius: "24px",
              padding: "2.5rem",
              maxWidth: "600px",
              width: "100%",
              maxHeight: "85vh",
              overflowY: "auto",
              position: "relative",
              boxShadow: "0 24px 80px rgba(0,212,255,0.12)",
            }}
          >
            {/* Close */}
            <button
              onClick={() => setActiveProject(null)}
              style={{
                position: "absolute",
                top: "1.25rem",
                right: "1.25rem",
                width: "32px",
                height: "32px",
                borderRadius: "50%",
                background: "rgba(255,255,255,0.06)",
                border: "1px solid var(--border)",
                color: "var(--text-secondary)",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <X size={16} />
            </button>

            {/* Project image placeholder */}
            <div style={{
              width: "100%",
              height: "180px",
              borderRadius: "14px",
              background: "linear-gradient(135deg, var(--accent-2), var(--accent))",
              marginBottom: "1.75rem",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "3rem",
              overflow: "hidden",
            }}>
              <img
                src={activeProject.image}
                alt={activeProject.title}
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
                onError={e => { (e.target as HTMLImageElement).style.display = "none"; }}
              />
            </div>

            {/* Tags */}
            <div style={{ display: "flex", flexWrap: "wrap", gap: "6px", marginBottom: "1rem" }}>
              {activeProject.tags.map(tag => (
                <span key={tag} style={{
                  fontSize: "0.7rem",
                  padding: "3px 10px",
                  borderRadius: "9999px",
                  background: "rgba(124,58,237,0.15)",
                  color: "#a78bfa",
                  border: "1px solid rgba(124,58,237,0.25)",
                  fontFamily: "monospace",
                  fontWeight: 600,
                }}>
                  {tag}
                </span>
              ))}
            </div>

            <h2 style={{ fontWeight: 800, fontSize: "1.4rem", marginBottom: "0.75rem" }}>
              {activeProject.title}
            </h2>
            <p style={{ color: "var(--text-secondary)", fontSize: "0.88rem", lineHeight: 1.7, marginBottom: "1.5rem" }}>
              {activeProject.fullDescription}
            </p>

            {/* Highlights */}
            <h3 style={{ fontWeight: 700, fontSize: "0.85rem", color: "var(--accent)", marginBottom: "0.75rem", textTransform: "uppercase", letterSpacing: "0.08em" }}>
              Aspectos destacados
            </h3>
            <ul style={{ display: "flex", flexDirection: "column", gap: "8px", marginBottom: "2rem" }}>
              {activeProject.highlights.map((h, i) => (
                <li key={i} style={{ display: "flex", gap: "10px", alignItems: "flex-start" }}>
                  <div style={{ width: "6px", height: "6px", borderRadius: "50%", background: "var(--accent)", flexShrink: 0, marginTop: "7px" }} />
                  <span style={{ color: "var(--text-secondary)", fontSize: "0.84rem", lineHeight: 1.6 }}>{h}</span>
                </li>
              ))}
            </ul>

            {/* Links */}
            <div style={{ display: "flex", gap: "12px" }}>
              {activeProject.githubUrl && (
                <a href={activeProject.githubUrl} target="_blank" rel="noopener noreferrer"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "8px",
                    padding: "0.7rem 1.4rem",
                    borderRadius: "10px",
                    background: "rgba(255,255,255,0.06)",
                    border: "1px solid var(--border)",
                    color: "var(--text-primary)",
                    fontWeight: 600,
                    fontSize: "0.85rem",
                    textDecoration: "none",
                    transition: "all 0.2s ease",
                  }}
                >
                  <GithubIcon size={16} /> GitHub
                </a>
              )}
              {activeProject.liveUrl && (
                <a href={activeProject.liveUrl} target="_blank" rel="noopener noreferrer"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "8px",
                    padding: "0.7rem 1.4rem",
                    borderRadius: "10px",
                    background: "linear-gradient(135deg, var(--accent-2), var(--accent))",
                    color: "#fff",
                    fontWeight: 600,
                    fontSize: "0.85rem",
                    textDecoration: "none",
                    transition: "all 0.2s ease",
                  }}
                >
                  <ExternalLink size={16} /> Ver en vivo
                </a>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
