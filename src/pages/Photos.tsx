import { ArrowLeft, Camera } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

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
      {/* Navigation */}
      <nav className="p-6 flex justify-between items-center">
        <Link to="/portfolio">
          <Button variant="ghost" size="sm" className="hover:bg-[#e6e6e9]/50 dark:hover:bg-[#66666e]/50 transition-colors text-white hover:[&>*]:text-[#cbf3f0]">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Button>
        </Link>
      </nav>

      <div className="max-w-6xl mx-auto px-6 pb-20">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Camera className="w-8 h-8 text-white" />
            <h1 className="text-4xl md:text-6xl font-bold text-white">
              Photos by Me
            </h1>
          </div>
        </div>

        {/* Description Section */}
        <div className="mb-16">
          <Card className="border-0 bg-[#e6e6e9]/60 dark:bg-[#66666e]/60 backdrop-blur-sm">
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold text-white mb-4">About This Collection</h2>
              <p className="text-white text-lg leading-relaxed mb-4">
                Welcome to my photography album - a curated collection of moments, emotions, and stories captured through my lens. 
                Each photograph represents a unique perspective on the world around us, from intimate portraits to sweeping landscapes.
              </p>
              <p className="text-white text-lg leading-relaxed">
                Photography has always been my way of freezing time, of finding beauty in the ordinary and extraordinary alike. 
                This collection spans various subjects and styles, reflecting my journey as both a photographer and an observer of life. 
                I hope these images inspire you to see the world through a different lens.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Photo Mosaic */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {photos.map((photo) => (
            <Card key={photo.id} className="overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-0 bg-[#e6e6e9]/60 dark:bg-[#66666e]/60 backdrop-blur-sm group">
              <div className="aspect-video overflow-hidden">
                <img 
                  src={photo.src} 
                  alt={photo.alt}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <CardContent className="p-4">
                <p className="text-sm text-white italic">{photo.caption}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Photos;
