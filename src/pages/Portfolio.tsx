
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import PortfolioHero from "@/components/portfolio/PortfolioHero";
import ExperienceSection from "@/components/portfolio/ExperienceSection";
import EducationSection from "@/components/portfolio/EducationSection";
import ProjectsSection from "@/components/portfolio/ProjectsSection";

const Portfolio = () => {
  return (
    <div className="min-h-screen bg-[#f4f4f6] dark:bg-[#000000]">
      {/* Navigation */}
      <nav className="p-6 flex justify-between items-center">
        <Link to="/">
          <Button variant="ghost" size="sm" className="hover:bg-[#e6e6e9]/50 dark:hover:bg-[#66666e]/50 transition-colors text-white hover:text-[#cbf3f0]">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Landing
          </Button>
        </Link>
        <div className="flex space-x-4">
          <Link to="/hobbies">
            <Button variant="outline" size="sm" className="border-[#66666e] dark:border-[#9999a1] text-white hover:bg-[#66666e]/20 hover:text-[#cbf3f0]">
              Hobbies
            </Button>
          </Link>
          <Link to="/photos">
            <Button variant="outline" size="sm" className="border-[#66666e] dark:border-[#9999a1] text-white hover:bg-[#66666e]/20 hover:text-[#cbf3f0]">
              Photos by Me
            </Button>
          </Link>
        </div>
      </nav>

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
