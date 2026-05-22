
import { Instagram, Volleyball, Mountain } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useEffect } from "react";

const HobbiesSection = () => {
  useEffect(() => {
    // Load Instagram embed script
    const script = document.createElement('script');
    script.async = true;
    script.src = '//www.instagram.com/embed.js';
    document.body.appendChild(script);

    // Process Instagram embeds after script loads
    script.onload = () => {
      if ((window as any).instgrm) {
        (window as any).instgrm.Embeds.process();
      }
    };

    return () => {
      // Cleanup script on unmount
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, []);

  return (
    <section>
      <h2 className="text-3xl font-bold text-white mb-8 text-center">Hobbies</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Food Sub-section */}
        <Card className="hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-0 bg-[#e6e6e9]/60 dark:bg-[#66666e]/60 backdrop-blur-sm group">
          <CardHeader>
            <CardTitle className="text-xl text-white flex items-center gap-2">
              <Instagram className="w-5 h-5" />
              Food
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-white mb-4">
              I enjoy cooking and exploring different cultures through food. Check out my food Instagram and my Yelp profile!
            </p>
            <div className="flex justify-center">
              <blockquote 
                className="instagram-media" 
                data-instgrm-captioned 
                data-instgrm-permalink="https://www.instagram.com/p/CRINntPllCO/?utm_source=ig_embed&utm_campaign=loading" 
                data-instgrm-version="14"
                style={{ 
                  background: '#FFF', 
                  border: 0, 
                  borderRadius: '3px', 
                  boxShadow: '0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15)', 
                  margin: '1px', 
                  maxWidth: '300px', 
                  minWidth: '280px', 
                  padding: 0, 
                  width: '100%'
                }}
              >
                <div style={{ padding: '16px' }}>
                  <a 
                    href="https://www.instagram.com/p/CRINntPllCO/?utm_source=ig_embed&utm_campaign=loading" 
                    style={{ 
                      background: '#FFFFFF', 
                      lineHeight: 0, 
                      padding: '0 0', 
                      textAlign: 'center', 
                      textDecoration: 'none', 
                      width: '100%' 
                    }} 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    View this post on Instagram
                  </a>
                </div>
              </blockquote>
            </div>
          </CardContent>
        </Card>

        {/* Volleyball Sub-section */}
        <Card className="hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-0 bg-[#e6e6e9]/60 dark:bg-[#66666e]/60 backdrop-blur-sm group">
          <CardHeader>
            <CardTitle className="text-xl text-white flex items-center gap-2">
              <Volleyball className="w-5 h-5" />
              Volleyball
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-white mb-4">
              Playing competitive volleyball and enjoying team sports with friends.
            </p>
          </CardContent>
        </Card>

        {/* Mountain Sports Sub-section */}
        <Card className="hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-0 bg-[#e6e6e9]/60 dark:bg-[#66666e]/60 backdrop-blur-sm group">
          <CardHeader>
            <CardTitle className="text-xl text-white flex items-center gap-2">
              <Mountain className="w-5 h-5" />
              Mountain Sports
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-white mb-4">
              Hiking, climbing, and exploring the great outdoors in mountainous terrain.
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default HobbiesSection;
