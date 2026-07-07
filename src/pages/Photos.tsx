import { Camera } from "lucide-react";
import { usePageTitle } from "@/hooks/usePageTitle";
import { Card, CardContent } from "@/components/ui/card";
import SiteNav from "@/components/SiteNav";

type Photo = { src: string; alt: string; caption: string; objectPosition?: string };

const PhotoGrid = ({ photos }: { photos: Photo[] }) => (
  <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
    {photos.map((photo, index, arr) => {
      const isLastOdd = index === arr.length - 1 && arr.length % 2 !== 0;
      return (
        <div key={photo.src} className={isLastOdd ? "col-span-2 md:col-span-1 flex md:block justify-center" : ""}>
          <div className={`${isLastOdd ? "w-1/2 md:w-full " : ""}aspect-square overflow-hidden rounded-lg group relative`}>
            <img
              src={photo.src}
              alt={photo.alt}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              style={photo.objectPosition ? { objectPosition: photo.objectPosition } : undefined}
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-300 flex items-end opacity-0 group-hover:opacity-100">
              <p className="text-white text-sm p-3">{photo.caption}</p>
            </div>
          </div>
        </div>
      );
    })}
  </div>
);

const Photos = () => {
  usePageTitle("Stephen Li | Photos");

  const placesPhotos = [
    { src: "/images/hk_skyline.jpg",                   alt: "Hong Kong skyline",          caption: "Hong Kong skyline at night" },
    { src: "/images/jiufen.jpg",                        alt: "Jiufen, Taiwan",             caption: "Jiufen Old Street, Taiwan" },
    { src: "/images/huanglong_color_ponds.jpg",         alt: "Huanglong, China",           caption: "Huanglong Scenic Area, Sichuan" },
    { src: "/images/kuanzhai_alley_chengdu.jpg",        alt: "Kuanzhai Alley, Chengdu",    caption: "Kuanzhai Alley, Chengdu" },
    { src: "/images/coffee_in_seoul.jpg",               alt: "Coffee in Seoul",            caption: "Coffee at Kotton Seoul" },
    { src: "/images/mauna_kea.jpg",                     alt: "Mauna Kea, Hawaii",          caption: "Sunset above the clouds on Mauna Kea" },
    { src: "/images/sandiego_coastline.jpg",            alt: "San Diego coastline",        caption: "San Diego coastline on film" },
    { src: "/images/national_elk_reserve_jackson.jpg",  alt: "National Elk Reserve",       caption: "National Elk Reserve, Jackson Hole" },
    { src: "/images/emerald_lake_banff.jpg",            alt: "Emerald Lake, Banff",        caption: "Emerald Lake, Yoho National Park" },
  ];

  return (
    <div className="min-h-screen bg-[#f4f4f6] dark:bg-[#121212]">
      <SiteNav current="photos" />

      <div className="max-w-6xl mx-auto px-6 pb-20">
        <div className="text-center mb-16 animate-fade-in">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Camera className="w-8 h-8 text-white" />
            <h1 className="text-4xl md:text-6xl font-bold text-white">
              My Photos
            </h1>
          </div>
        </div>

        <div className="mb-16">
          <Card className="border-0 bg-[#e6e6e9]/60 dark:bg-[#66666e]/60 backdrop-blur-sm">
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold text-white mb-4">About This Collection</h2>
              <p className="text-white text-lg leading-relaxed mb-4">
                All of these photos were either shot on an iPhone or a disposable film camera. I am by no means a professional photographer. But, I do enjoy taking photos that represent a curated collection of moments, emotions, and stories.
              </p>
              <p className="text-white text-lg leading-relaxed">
                Photos are a great way for me to capture moments in my life. I hope you enjoy!
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="space-y-16">
          <div>
            <h2 className="text-3xl font-bold text-white mb-8">Places I've Been</h2>
            <PhotoGrid photos={placesPhotos} />
          </div>

          <div>
            <h2 className="text-3xl font-bold text-white mb-8">Things I've Done</h2>
            <PhotoGrid photos={[
              { src: "/images/spartan_race.jpg",                    alt: "Spartan Race",          caption: "Competing in a Spartan Race",          objectPosition: "top" },
              { src: "/images/archery.jpg",                         alt: "Archery",               caption: "Trying out archery" },
              { src: "/images/frisbee_enjoyer.jpg",                 alt: "Playing frisbee",       caption: "Playing frisbee on film",              objectPosition: "bottom" },
              { src: "/images/paintball.jpg",                       alt: "Paintball",             caption: "Paintball on film" },
              { src: "/images/snowmobiling_hokkaido.jpg",           alt: "Snowmobiling",          caption: "Snowmobiling in Hokkaido" },
              { src: "/images/biking_chengdu_tianfu_greenway.jpg",  alt: "Biking in Chengdu",     caption: "Biking along the Tianfu Greenway in Chengdu" },
            ]} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Photos;
