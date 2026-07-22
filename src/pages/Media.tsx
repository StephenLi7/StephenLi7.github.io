import { Music, BookOpen } from "lucide-react";
import { usePageTitle } from "@/hooks/usePageTitle";
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import SiteNav from "@/components/SiteNav";

type Book = { src?: string; title: string; author: string };

const BookCover = ({ book, featured = false }: { book: Book; featured?: boolean }) => (
  <div className="flex flex-col items-center gap-2">
    <div
      className={`${
        featured ? "w-44 md:w-52" : "w-32 md:w-40"
      } aspect-[2/3] rounded-md overflow-hidden shadow-md bg-foreground/10 border border-foreground/20 relative`}
    >
      {book.src ? (
        <img
          src={book.src}
          alt={`${book.title} cover`}
          className="w-full h-full object-cover"
        />
      ) : (
        <div className="w-full h-full flex items-center justify-center">
          <BookOpen className="w-8 h-8 text-foreground/30" />
        </div>
      )}
    </div>
    <div className="text-center">
      <p className="text-sm text-foreground/90 font-medium leading-tight">{book.title}</p>
      <p className="text-xs text-foreground/60">{book.author}</p>
    </div>
  </div>
);

const Media = () => {
  usePageTitle("Stephen Li | Media");
  return (
    <div className="min-h-screen bg-[#121212]">
      <SiteNav current="media" />

      <div className="max-w-[800px] mx-auto px-6 pb-20">
        {/* Header */}
        <div className="mb-16 animate-fade-in">
          <h1 className="text-4xl md:text-6xl font-bold text-foreground/90 mb-16 text-center">
            My Media
          </h1>
          <p className="text-xl text-foreground/90">
            This page is a work in progress. Over time I'll fill it out with the music, books, and other media I've been enjoying.
          </p>
        </div>

        {/* Media Section */}
        <div className="space-y-8">
          {/* Music */}
          <Card className="hover:shadow-lg transition-shadow duration-300 border-0 bg-[#2d2d2d]/80 backdrop-blur-sm">
            <CardHeader>
              <div className="flex items-center gap-4 mb-4">
                <Music className="w-8 h-8 text-foreground/90" />
                <CardTitle className="text-2xl text-foreground/90">Music</CardTitle>
              </div>
              <CardDescription className="text-lg text-foreground/90 mb-6">
                Here are two playlists I've curated for the right setting, time of day, and vibe. Take a listen and I hope you enjoy!
              </CardDescription>
              <div className="flex flex-col gap-4">
                <iframe
                  style={{ borderRadius: "12px" }}
                  src="https://open.spotify.com/embed/playlist/78NqmeKhkb7BH0nkQpBb7X?utm_source=generator&theme=0&si=31945f3ca7cb4d45"
                  width="100%"
                  height="352"
                  frameBorder="0"
                  allowFullScreen
                  allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                  loading="lazy"
                  title="Spotify Playlist 1"
                />
                <iframe
                  style={{ borderRadius: "12px" }}
                  src="https://open.spotify.com/embed/playlist/3bE5SRtZSHnEUTYCzLqVA7?utm_source=generator&si=61e0e7b5735d4818"
                  width="100%"
                  height="352"
                  frameBorder="0"
                  allowFullScreen
                  allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                  loading="lazy"
                  title="Spotify Playlist 2"
                />
              </div>
            </CardHeader>
          </Card>

          {/* Books */}
          <Card className="hover:shadow-lg transition-shadow duration-300 border-0 bg-[#2d2d2d]/80 backdrop-blur-sm">
            <CardHeader>
              <div className="flex items-center gap-4 mb-4">
                <BookOpen className="w-8 h-8 text-foreground/90" />
                <CardTitle className="text-2xl text-foreground/90">Books</CardTitle>
              </div>
              <div className="mb-8">
                <h3 className="text-lg font-semibold text-foreground/90 mb-4">What I'm Currently Reading</h3>
                <BookCover book={{ src: "/images/book_tales_from_the_cafe.jpg", title: "Tales from the Cafe", author: "Toshikazu Kawaguchi" }} featured />
              </div>

              <div>
                <h3 className="text-lg font-semibold text-foreground/90 mb-4">Books I've Enjoyed</h3>
                <div className="grid grid-cols-3 gap-6">
                  <BookCover book={{ src: "/images/book_before_the_coffee_gets_cold.jpg", title: "Before the Coffee Gets Cold", author: "Toshikazu Kawaguchi" }} />
                  <BookCover book={{ src: "/images/book_born_a_crime.jpg", title: "Born a Crime", author: "Trevor Noah" }} />
                  <BookCover book={{ src: "/images/book_the_courage_to_be_disliked.jpg", title: "The Courage to be Disliked", author: "Ichiro Kishimi and Fumitake Koga" }} />
                </div>
              </div>
            </CardHeader>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Media;
