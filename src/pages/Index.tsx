
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { usePageTitle } from "@/hooks/usePageTitle";

const Index = () => {
  usePageTitle("Stephen Li | 欢迎, Welcome!");
  return (
    <div className="min-h-screen bg-[#f4f4f6] dark:bg-[#121212] flex flex-col relative">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: 'url(/images/background.png)' }}
      />
      
      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-black/20" />

      {/* Main Content */}
      <div className="flex-1 flex items-center justify-center px-6 py-12 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-5 md:space-y-8 animate-fade-in">
          {/* Headshot */}
          <div className="flex justify-center mb-4 md:mb-8">
            <div className="w-24 h-24 md:w-48 md:h-48 rounded-full shadow-lg overflow-hidden">
              <img
                src="/images/headshot.jpg"
                alt="Stephen Li headshot"
                className="w-full h-full object-cover object-top"
              />
            </div>
          </div>

          {/* Main heading */}
          <div className="space-y-4 md:space-y-6">
            <h1 className="text-4xl md:text-7xl font-bold text-white leading-tight">
              Hi! I'm Stephen
            </h1>

            <p className="text-lg md:text-2xl text-white max-w-2xl mx-auto leading-relaxed">
              Welcome to my personal website: a place where I share my work and things I enjoy
            </p>
          </div>

          {/* Call to action */}
          <div className="pt-4 md:pt-8">
            <Link to="/portfolio">
              <Button
                size="lg"
                className="bg-[#121212] hover:bg-[#66666e] dark:bg-[#f4f4f6] dark:hover:bg-[#e6e6e9] text-white dark:text-[#121212] px-8 py-4 text-lg rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 group"
              >
                Explore
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
