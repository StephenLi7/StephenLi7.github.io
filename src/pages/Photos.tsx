import { Camera } from "lucide-react";
import { usePageTitle } from "@/hooks/usePageTitle";
import { Card, CardContent } from "@/components/ui/card";
import SiteNav from "@/components/SiteNav";

const ComingSoon = () => (
  <div className="col-span-full text-center text-white/70 py-8">
    <p>Photos coming soon...</p>
  </div>
);

const Photos = () => {
  usePageTitle("Stephen Li | Photos");

  return (
    <div className="min-h-screen bg-[#f4f4f6] dark:bg-[#000000]">
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
            <h2 className="text-3xl font-bold text-white mb-8">Mountain Sports</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <ComingSoon />
            </div>
          </div>

          <div>
            <h2 className="text-3xl font-bold text-white mb-8">Volleyball</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <ComingSoon />
            </div>
          </div>

          <div>
            <h2 className="text-3xl font-bold text-white mb-8">Culinary Adventures</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <ComingSoon />
            </div>
          </div>

          <div>
            <h2 className="text-3xl font-bold text-white mb-8">Other Photos I Like</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <ComingSoon />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Photos;
