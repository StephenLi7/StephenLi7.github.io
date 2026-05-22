
import { Instagram, Volleyball, Mountain, ExternalLink, UtensilsCrossed } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import SiteNav from "@/components/SiteNav";

const Hobbies = () => {

  return (
    <div className="min-h-screen bg-[#f4f4f6] dark:bg-[#000000]">
      <SiteNav current="hobbies" />

      <div className="max-w-6xl mx-auto px-6 pb-20">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
            My Hobbies
          </h1>
          <p className="text-xl text-white max-w-3xl mx-auto">
            Outside of work, I enjoy exploring a range of hobbies—from very active ones to more creative and adventurous ones. I appreciate the balance they bring, the opportunity to learn something new, and the growth involved in each one.
          </p>
          <p className="text-xl text-white max-w-3xl mx-auto mt-4">
            If you share similar interests, I'd be happy to exchange recommendations.
          </p>
        </div>

        {/* Hobbies Section */}
        <div className="space-y-8">
          {/* Food Hobby */}
          <Card className="hover:shadow-lg transition-shadow duration-300 border-0 bg-[#e6e6e9]/60 dark:bg-[#66666e]/60 backdrop-blur-sm">
            <CardHeader>
              <div className="flex items-center gap-4 mb-4">
                <UtensilsCrossed className="w-8 h-8 text-white" />
                <CardTitle className="text-2xl text-white">Food</CardTitle>
              </div>
              <CardDescription className="text-lg text-white mb-4">
                I originally learned how to cook traditional Chinese dishes from my mom. From there, I developed a love for trying new restaurants, cooking new recipes, and exploring different cultures through food. I created a food instagram to share some of my favorite restaurants and foods, and also publish reviews on my Yelp. Feel free to check them out for recommendations!
              </CardDescription>
              <div className="flex gap-3 flex-wrap">
                <a
                  href="https://www.instagram.com/treatsnsips/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button variant="outline" size="sm" className="bg-white/10 text-white border-white/20 hover:bg-white/20">
                    <img src="/lovable-uploads/22b04770-07fd-4df8-90da-68a665e0cd3d.png" alt="Instagram" className="w-4 h-4 mr-2" />
                    My Food Instagram
                  </Button>
                </a>
                <a
                  href="https://www.yelp.com/user_details?userid=Sv4aYbVCyjQJcVw_e_4cuQ"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button variant="outline" size="sm" className="bg-white/10 text-white border-white/20 hover:bg-white/20">
                    <img src="/lovable-uploads/04780bcc-0fa6-49b9-a714-a44ef71e1adb.png" alt="Yelp" className="w-4 h-4 mr-2" />
                    My Yelp Elite Profile
                  </Button>
                </a>
              </div>
            </CardHeader>
          </Card>

          {/* Volleyball Hobby */}
          <Card className="hover:shadow-lg transition-shadow duration-300 border-0 bg-[#e6e6e9]/60 dark:bg-[#66666e]/60 backdrop-blur-sm">
            <CardHeader>
              <div className="flex items-center gap-4 mb-4">
                <Volleyball className="w-8 h-8 text-white" />
                <CardTitle className="text-2xl text-white">Volleyball</CardTitle>
              </div>
              <CardDescription className="text-lg text-white">
                I grew up playing volleyball and competing at the USAV Boys Junior Nationals. I played on the UPenn Men's Club Volleyball for a bit as well. Now, I compete in tournaments around the Bay Area and play casually with friends as well.
              </CardDescription>
              <CardDescription className="text-lg text-white mt-4">
                Outside of playing, I also spent time coaching volleyball for 3 years at the Academy of Volleyball. It was awesome mentoring the next generation of athletes and students. I coached a variety of age groups from 13s to 16s and had the honor of coaching a team that was one of the top 24 teams in the country (<a 
                  href="https://results.advancedeventsystems.com/event/PTAwMDAwMzM4MDQ90/divisions/156876/standings" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-[#cbf3f0] hover:text-white underline transition-colors"
                >Academy 16 National</a>).
              </CardDescription>
            </CardHeader>
          </Card>

          {/* Mountain Sports Hobby */}
          <Card className="hover:shadow-lg transition-shadow duration-300 border-0 bg-[#e6e6e9]/60 dark:bg-[#66666e]/60 backdrop-blur-sm">
            <CardHeader>
              <div className="flex items-center gap-4 mb-4">
                <Mountain className="w-8 h-8 text-white" />
                <CardTitle className="text-2xl text-white">Mountain Sports</CardTitle>
              </div>
              <CardDescription className="text-lg text-white mb-6">
                I was born in Colorado and spent half of my childhood there. Being so close to the Rockies, I grew up skiing, camping, and hiking from a young age. I still love skiing and hiking and have traveled across North America to visit new mountains to enjoy both hobbies. In the long term, I hope to visit every US National park and ski and hike at some of the largest mountains around the world.
              </CardDescription>
              
              {/* Mountain Photos Grid */}
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                <div className="aspect-square overflow-hidden rounded-lg group relative">
                  <img 
                    src="/lovable-uploads/ee42f944-f471-4953-83b9-30e833b7e0fc.png" 
                    alt="Mountain skiing"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-end opacity-0 group-hover:opacity-100">
                    <p className="text-white text-sm p-2">Night ski at Brighton Ski Resort</p>
                  </div>
                </div>
                <div className="aspect-square overflow-hidden rounded-lg group relative">
                  <img 
                    src="/lovable-uploads/d96bbfc1-4fc5-4b1c-a4de-7eddb411b02e.png" 
                    alt="Snowy mountain rocks"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-end opacity-0 group-hover:opacity-100">
                    <p className="text-white text-sm p-2">Kings and Queens of Corbets</p>
                  </div>
                </div>
                <div className="aspect-square overflow-hidden rounded-lg group relative">
                  <img 
                    src="/lovable-uploads/c7d5bc76-33ae-4a03-8f98-752fe840159c.png" 
                    alt="Mountain lake view"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-end opacity-0 group-hover:opacity-100">
                    <p className="text-white text-sm p-2">Top of hike overlooking Lake Louise in Banff</p>
                  </div>
                </div>
                <div className="aspect-square overflow-hidden rounded-lg group relative">
                  <img 
                    src="/lovable-uploads/ee668bc4-e9f1-437a-a645-d306c2819f82.png" 
                    alt="Rock climbing"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-end opacity-0 group-hover:opacity-100">
                    <p className="text-white text-sm p-2">Before climbing the cables of Half Dome</p>
                  </div>
                </div>
                <div className="aspect-square overflow-hidden rounded-lg group relative">
                  <img 
                    src="/lovable-uploads/4e3fa9ee-5126-4d2f-9f41-484d5c581d4a.png" 
                    alt="Valley view"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-end opacity-0 group-hover:opacity-100">
                    <p className="text-white text-sm p-2">Yosemite Valley</p>
                  </div>
                </div>
                <div className="aspect-square overflow-hidden rounded-lg group relative">
                  <img 
                    src="/lovable-uploads/dc6a1213-765d-4852-ac48-eccb0f211f22.png" 
                    alt="Hiking trail"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-end opacity-0 group-hover:opacity-100">
                    <p className="text-white text-sm p-2">Descending the Haiku Steps in Oahu</p>
                  </div>
                </div>
              </div>
            </CardHeader>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Hobbies;
