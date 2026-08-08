
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
    <div className="mb-16 animate-fade-in">
      <div className="flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-12 max-w-4xl mx-auto">
        <div className="w-32 h-32 md:w-48 md:h-48 rounded-full shadow-xl overflow-hidden shrink-0">
          <img
            src="/images/headshot.jpg"
            alt="Stephen Li headshot"
            className="w-full h-full object-cover object-top"
          />
        </div>

        <div className="text-center md:text-left">
          <h1 className="text-4xl md:text-6xl font-bold text-foreground/90 mb-4">
            Stephen Li
          </h1>
          <p className="text-foreground/90 mb-8">
            I'm a Product Manager with a background in data and analytics, currently leading product at Intuit. I previously worked as a data and product analyst at Meta and Cloudflare, and studied Computer Science and Economics at the University of Pennsylvania.
          </p>

          <div className="flex flex-wrap justify-center md:justify-start gap-3">
            <Button
              size="sm"
              className="bg-white hover:bg-[#e6e6e9] text-[#121212] shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105"
              onClick={handleContactClick}
            >
              <Mail className="w-4 h-4 mr-2" />
              Contact
            </Button>
            <Button
              size="sm"
              className="bg-white hover:bg-[#e6e6e9] text-[#121212] shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105"
              onClick={handleLinkedInClick}
            >
              <Linkedin className="w-4 h-4 mr-2" />
              LinkedIn
            </Button>
            <a href="/Resume_Stephen_Li.pdf" target="_blank" rel="noopener noreferrer">
              <Button size="sm" className="bg-white hover:bg-[#e6e6e9] text-[#121212] shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105">
                <Download className="w-4 h-4 mr-2" />
                My Resume
              </Button>
            </a>
            <Button
              size="sm"
              className="bg-white hover:bg-[#e6e6e9] text-[#121212] shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105"
              onClick={handleGitHubClick}
            >
              <Github className="w-4 h-4 mr-2" />
              GitHub
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PortfolioHero;
