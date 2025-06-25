
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="min-h-screen bg-[#f4f4f6] dark:bg-[#000000] flex flex-col relative">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: 'url(/lovable-uploads/e8c47696-666c-4b81-8efb-ada0ac5f3d2f.png)' }}
      />
      
      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-black/20" />

      {/* Main Content */}
      <div className="flex-1 flex items-center justify-center px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-in">
          {/* Headshot placeholder */}
          <div className="flex justify-center mb-8">
            <div className="w-32 h-32 bg-[#66666e] rounded-full shadow-lg flex items-center justify-center">
              <div className="w-28 h-28 bg-[#e6e6e9] dark:bg-[#66666e] rounded-full flex items-center justify-center">
                <span className="text-white text-sm font-medium">Headshot</span>
              </div>
            </div>
          </div>

          {/* Main heading */}
          <div className="space-y-6">
            <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight">
              Hi! I'm Stephen
            </h1>
            
            <p className="text-xl md:text-2xl text-white max-w-2xl mx-auto leading-relaxed">
              Welcome to my personal website: a place where I share my work and things I enjoy
            </p>
          </div>

          {/* Call to action */}
          <div className="pt-8">
            <Link to="/portfolio">
              <Button 
                size="lg" 
                className="bg-[#000000] hover:bg-[#66666e] dark:bg-[#f4f4f6] dark:hover:bg-[#e6e6e9] text-white dark:text-[#000000] px-8 py-4 text-lg rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 group"
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
