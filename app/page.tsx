"use client";

import { useState, useEffect } from "react";
import { Menu } from "lucide-react";
import LeftSidebar from "@/components/organisms/LeftSidebar";
import RightSidebar from "@/components/organisms/RightSidebar";
import HeroSection from "@/components/organisms/HeroSection";
import KnowledgeSection from "@/components/organisms/KnowledgeSection";
import ExperienceSection from "@/components/organisms/ExperienceSection";
import EducationSection from "@/components/organisms/EducationSection";
import PortfolioSection from "@/components/organisms/PortfolioSection";
import Footer from "@/components/organisms/Footer";

export default function Home() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth <= 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  return (
    <div style={{ display: "flex", minHeight: "100vh", position: "relative" }}>

      {/* Botón hamburguesa — solo visible en móvil vía CSS */}
      <button
        className="hamburger-btn"
        onClick={() => setSidebarOpen(true)}
        style={{
          display: "none",
          position: "fixed", top: "1rem", left: "1rem", zIndex: 60,
          width: "42px", height: "42px", borderRadius: "10px",
          background: "var(--bg-card)", border: "1px solid var(--border)",
          color: "var(--text-primary)", cursor: "pointer",
          alignItems: "center", justifyContent: "center",
        }}
      >
        <Menu size={20} />
      </button>

      {/* Sidebar izquierdo */}
      <LeftSidebar
        isOpen={isMobile ? sidebarOpen : true}
        onClose={() => setSidebarOpen(false)}
      />

      {/* Contenido principal */}
      <main style={{
        flex: 1,
        minWidth: 0,
      }}>
        <HeroSection />
        <KnowledgeSection />
        <ExperienceSection />
        <EducationSection />
        <PortfolioSection />
        <Footer />
      </main>

      {/* Sidebar derecho — oculto en móvil vía CSS */}
      <div className="right-sidebar">
        <RightSidebar />
      </div>

    </div>
  );
}