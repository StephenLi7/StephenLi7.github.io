
import { Mail, Github, Linkedin, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

const PortfolioHero = () => {
  const { toast } = useToast();

  const handleContactClick = async () => {
    try {
      await navigator.clipboard.writeText('ssli@sas.upenn.edu');
      toast({
        description: "Email copied to clipboard!",
        duration: 15000, // 15 seconds
      });
    } catch (err) {
      console.error('Failed to copy email to clipboard:', err);
    }
  };

  const handleLinkedInClick = () => {
    window.open('https://www.linkedin.com/in/stephenli7/', '_blank');
  };

  const handleGitHubClick = () => {
    window.open('https://github.com/StephenLi7', '_blank');
  };

  return (
    <div className="text-center mb-16 animate-fade-in">
      <div className="mb-8">
        <div className="w-32 h-32 rounded-full mx-auto mb-6 shadow-xl overflow-hidden">
          <img 
            src="/lovable-uploads/bc725188-af09-4c81-9e69-e920d336fba2.png" 
            alt="Stephen Li headshot"
            className="w-full h-full object-cover scale-150"
          />
        </div>
      </div>
      
      <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
        Stephen Li
      </h1>
      <p className="text-xl text-white mb-8">Data and Product Enthusiast</p>
      
      <div className="flex justify-center space-x-4 mb-8">
        <Button 
          variant="outline" 
          size="sm" 
          className="hover:bg-[#9999a1]/10 dark:hover:bg-[#66666e]/20 border-[#66666e] dark:border-[#9999a1] text-white hover:text-[#cbf3f0]"
          onClick={handleContactClick}
        >
          <Mail className="w-4 h-4 mr-2" />
          Contact
        </Button>
        <Button 
          variant="outline" 
          size="sm" 
          className="hover:bg-[#9999a1]/10 dark:hover:bg-[#66666e]/20 border-[#66666e] dark:border-[#9999a1] text-white hover:text-[#cbf3f0]"
          onClick={handleLinkedInClick}
        >
          <Linkedin className="w-4 h-4 mr-2" />
          LinkedIn
        </Button>
        <Button variant="outline" size="sm" className="hover:bg-[#9999a1]/10 dark:hover:bg-[#66666e]/20 border-[#66666e] dark:border-[#9999a1] text-white hover:text-[#cbf3f0]">
          <Download className="w-4 h-4 mr-2" />
          My Resume
        </Button>
        <Button 
          variant="outline" 
          size="sm" 
          className="hover:bg-[#9999a1]/10 dark:hover:bg-[#66666e]/20 border-[#66666e] dark:border-[#9999a1] text-white hover:text-[#cbf3f0]"
          onClick={handleGitHubClick}
        >
          <Github className="w-4 h-4 mr-2" />
          GitHub
        </Button>
      </div>
    </div>
  );
};

export default PortfolioHero;
