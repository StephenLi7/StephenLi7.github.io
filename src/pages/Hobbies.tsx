
import { Instagram, Volleyball, Mountain, Snowflake, Footprints, Sprout, UtensilsCrossed } from "lucide-react";
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
            Outside of work and the daily hustle and bustle, I enjoy a variety of hobbies. I have always played sports and love being outdoors, but have discovered more creative and hands on ones in recent years.
          </p>
          <p className="text-xl text-white max-w-3xl mx-auto mt-4">
            I appreciate that different hobbies provide an opportunity to learn something new, and the challenge that comes with it. If you share similar interests, I'd love to exchange recommendations!
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
                    <img src="/logos/instagram_logo.png" alt="Instagram" className="w-4 h-4 mr-2" />
                    My Food Instagram
                  </Button>
                </a>
                <a
                  href="https://www.yelp.com/user_details?userid=Sv4aYbVCyjQJcVw_e_4cuQ"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button variant="outline" size="sm" className="bg-white/10 text-white border-white/20 hover:bg-white/20">
                    <img src="/logos/yelp_logo.png" alt="Yelp" className="w-4 h-4 mr-2" />
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

              {/* Volleyball Photos Grid */}
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-6">
                {[
                  { src: "/images/vb_playing_nyc.jpg", alt: "Playing volleyball in NYC", caption: "Playing with friends in NYC" },
                  { src: "/images/vb_grass_tournament.png", alt: "Grass volleyball tournament", caption: "Competing in a grass volleyball tournament" },
                  { src: "/images/vb_usav_coaching.jpg", alt: "Coaching at USAV Nationals", caption: "Coaching in the Open Division at USAV Nationals in 2024" },
                ].map((photo) => (
                  <div key={photo.src} className="aspect-square overflow-hidden rounded-lg group relative">
                    <img
                      src={photo.src}
                      alt={photo.alt}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-end opacity-0 group-hover:opacity-100">
                      <p className="text-white text-sm p-2">{photo.caption}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardHeader>
          </Card>

          {/* Skiing Hobby */}
          <Card className="hover:shadow-lg transition-shadow duration-300 border-0 bg-[#e6e6e9]/60 dark:bg-[#66666e]/60 backdrop-blur-sm">
            <CardHeader>
              <div className="flex items-center gap-4 mb-4">
                <Snowflake className="w-8 h-8 text-white" />
                <CardTitle className="text-2xl text-white">Skiing</CardTitle>
              </div>
              <CardDescription className="text-lg text-white mb-6">
                I was born in Colorado and grew up skiing the Rockies from a young age. I still try to get on the mountain every season and have skied across North America — from Jackson Hole and Alta to Whistler and Banff. In the long term, I'd love to ski some of the biggest mountains in the world.
              </CardDescription>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {[
                  { src: "/images/mountain_skiing.png", alt: "Night skiing", caption: "Night ski at Brighton Ski Resort" },
                  { src: "/images/mountain_rocks.png", alt: "Kings and Queens of Corbets", caption: "Kings and Queens of Corbets" },
                ].map((photo) => (
                  <div key={photo.src} className="aspect-square overflow-hidden rounded-lg group relative">
                    <img
                      src={photo.src}
                      alt={photo.alt}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-end opacity-0 group-hover:opacity-100">
                      <p className="text-white text-sm p-2">{photo.caption}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardHeader>
          </Card>

          {/* Hiking Hobby */}
          <Card className="hover:shadow-lg transition-shadow duration-300 border-0 bg-[#e6e6e9]/60 dark:bg-[#66666e]/60 backdrop-blur-sm">
            <CardHeader>
              <div className="flex items-center gap-4 mb-4">
                <Footprints className="w-8 h-8 text-white" />
                <CardTitle className="text-2xl text-white">Hiking</CardTitle>
              </div>
              <CardDescription className="text-lg text-white mb-6">
                Hiking is my favorite way to explore the outdoors. I love finding trails that lead to a great view — whether that's a mountain summit, a valley overlook, or a hidden waterfall. In the long term, I hope to visit every US National Park and tackle some of the world's great long-distance trails.
              </CardDescription>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {[
                  { src: "/images/mountain_lake.png", alt: "Lake Louise", caption: "Top of hike overlooking Lake Louise in Banff" },
                  { src: "/images/rock_climbing.png", alt: "Half Dome cables", caption: "Before climbing the cables of Half Dome" },
                  { src: "/images/yosemite_valley.png", alt: "Yosemite Valley", caption: "Yosemite Valley" },
                  { src: "/images/haiku_steps.png", alt: "Haiku Steps", caption: "Descending the Haiku Steps in Oahu" },
                ].map((photo) => (
                  <div key={photo.src} className="aspect-square overflow-hidden rounded-lg group relative">
                    <img
                      src={photo.src}
                      alt={photo.alt}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-end opacity-0 group-hover:opacity-100">
                      <p className="text-white text-sm p-2">{photo.caption}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardHeader>
          </Card>

          {/* Gardening Hobby */}
          <Card className="hover:shadow-lg transition-shadow duration-300 border-0 bg-[#e6e6e9]/60 dark:bg-[#66666e]/60 backdrop-blur-sm">
            <CardHeader>
              <div className="flex items-center gap-4 mb-4">
                <Sprout className="w-8 h-8 text-white" />
                <CardTitle className="text-2xl text-white">Gardening</CardTitle>
              </div>
              <CardDescription className="text-lg text-white">
                Gardening is a newer hobby I've picked up and have really enjoyed. There's something satisfying about growing things from scratch and watching them develop over time. Photos coming soon!
              </CardDescription>
            </CardHeader>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Hobbies;
