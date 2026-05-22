
import { Camera } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import SiteNav from "@/components/SiteNav";

const Photos = () => {
  const photos = [
    {
      id: 1,
      src: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?w=600&h=400&fit=crop",
      alt: "Still life photography",
      caption: "Exploring textures and natural lighting"
    },
    {
      id: 2,
      src: "https://images.unsplash.com/photo-1721322800607-8c38375eef04?w=600&h=400&fit=crop",
      alt: "Interior design",
      caption: "Modern living spaces"
    },
    {
      id: 3,
      src: "https://images.unsplash.com/photo-1466721591366-2d5fba72006d?w=600&h=400&fit=crop",
      alt: "Wildlife photography",
      caption: "Capturing nature in its element"
    },
    {
      id: 4,
      src: "https://images.unsplash.com/photo-1535268647677-300dbf3d78d1?w=600&h=400&fit=crop",
      alt: "Pet photography",
      caption: "Playful moments"
    },
    {
      id: 5,
      src: "https://images.unsplash.com/photo-1518877593221-1f28583780b4?w=600&h=400&fit=crop",
      alt: "Marine life",
      caption: "Ocean adventures"
    },
    {
      id: 6,
      src: "https://images.unsplash.com/photo-1472396961693-142e6e269027?w=600&h=400&fit=crop",
      alt: "Wildlife in nature",
      caption: "Deer in their natural habitat"
    },
    {
      id: 7,
      src: "https://images.unsplash.com/photo-1433086966358-54859d0ed716?w=600&h=400&fit=crop",
      alt: "Landscape photography",
      caption: "Majestic waterfalls"
    },
    {
      id: 8,
      src: "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?w=600&h=400&fit=crop",
      alt: "Flower photography",
      caption: "Vibrant orange blooms"
    }
  ];

  return (
    <div className="min-h-screen bg-[#f4f4f6] dark:bg-[#000000]">
      <SiteNav current="photos" />

      <div className="max-w-6xl mx-auto px-6 pb-20">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Camera className="w-8 h-8 text-white" />
            <h1 className="text-4xl md:text-6xl font-bold text-white">
              My Photos
            </h1>
          </div>
        </div>

        {/* Description Section */}
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

        {/* Mountain Sports Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8">Mountain Sports</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {photos.filter(photo => [7].includes(photo.id)).map((photo) => (
              <Card key={photo.id} className="overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-0 bg-[#e6e6e9]/60 dark:bg-[#66666e]/60 backdrop-blur-sm group">
                <div className="aspect-video overflow-hidden relative">
                  <img 
                    src={photo.src} 
                    alt={photo.alt}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-end opacity-0 group-hover:opacity-100">
                    <p className="text-white text-sm p-2">{photo.caption}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Volleyball Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8">Volleyball</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* No photos in this section yet */}
            <div className="col-span-full text-center text-white/70 py-8">
              <p>Photos coming soon...</p>
            </div>
          </div>
        </div>

        {/* Culinary Adventures Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8">Culinary Adventures</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* No photos in this section yet */}
            <div className="col-span-full text-center text-white/70 py-8">
              <p>Photos coming soon...</p>
            </div>
          </div>
        </div>

        {/* Other Photos I Like Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8">Other Photos I Like</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {photos.filter(photo => ![7].includes(photo.id)).map((photo) => (
              <Card key={photo.id} className="overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-0 bg-[#e6e6e9]/60 dark:bg-[#66666e]/60 backdrop-blur-sm group">
                <div className="aspect-video overflow-hidden relative">
                  <img 
                    src={photo.src} 
                    alt={photo.alt}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-end opacity-0 group-hover:opacity-100">
                    <p className="text-white text-sm p-2">{photo.caption}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Photos;
