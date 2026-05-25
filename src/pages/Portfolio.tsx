
import SiteNav from "@/components/SiteNav";
import { usePageTitle } from "@/hooks/usePageTitle";
import PortfolioHero from "@/components/portfolio/PortfolioHero";
import ExperienceSection from "@/components/portfolio/ExperienceSection";
import EducationSection from "@/components/portfolio/EducationSection";
import ProjectsSection from "@/components/portfolio/ProjectsSection";

const Portfolio = () => {
  usePageTitle("Stephen Li | Portfolio");
  return (
    <div className="min-h-screen bg-[#f4f4f6] dark:bg-[#000000]">
      <SiteNav current="portfolio" />

      <div className="max-w-6xl mx-auto px-6 pb-20">
        <PortfolioHero />
        <ExperienceSection />
        <EducationSection />
        <ProjectsSection />
      </div>
    </div>
  );
};

export default Portfolio;
