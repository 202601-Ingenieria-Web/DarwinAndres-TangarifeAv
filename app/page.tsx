/**
 * Home page - assembles all sections following the portfolio layout:
 * [LeftSidebar] | [Scrollable content] | [RightSidebar]
 */

import LeftSidebar from "@/components/organisms/LeftSidebar";
import RightSidebar from "@/components/organisms/RightSidebar";
import HeroSection from "@/components/organisms/HeroSection";
import KnowledgeSection from "@/components/organisms/KnowledgeSection";
import ExperienceSection from "@/components/organisms/ExperienceSection";
import EducationSection from "@/components/organisms/EducationSection";
import PortfolioSection from "@/components/organisms/PortfolioSection";
import Footer from "@/components/organisms/Footer";

export default function Home() {
  return (
    <div
      style={{
        display: "flex",
        minHeight: "100vh",
        position: "relative",
      }}
    >
      {/* Fixed left sidebar */}
      <LeftSidebar />

      {/* Scrollable main content */}
      <main
        style={{
          flex: 1,
          overflowY: "auto",
          minWidth: 0,
        }}
      >
        <HeroSection />
        <KnowledgeSection />
        <ExperienceSection />
        <EducationSection />
        <PortfolioSection />
        <Footer />
      </main>

      {/* Fixed right sidebar */}
      <RightSidebar />
    </div>
  );
}
