
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const ProjectsSection = () => (
  <section className="mb-16">
    <h2 className="text-3xl font-bold text-foreground/90 mb-8 text-center">Featured Projects</h2>
    <Card className="hover:shadow-lg transition-shadow duration-300 border-0 bg-[#2d2d2d]/80 backdrop-blur-sm">
      <CardHeader>
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2">
          <div className="flex items-center gap-3">
            <img
              src="/logos/takeout_podcast_logo.png"
              alt="Takeout Podcast Logo"
              className="w-12 h-12 object-contain shrink-0"
            />
            <CardTitle className="text-xl text-foreground/90">Takeout Podcast</CardTitle>
          </div>
          <Badge variant="secondary" className="bg-[#66666e]/50 text-foreground/90 self-start sm:self-auto whitespace-nowrap py-1.5">
            Coming back soon
          </Badge>
        </div>
      </CardHeader>
      <CardContent>
        <p className="text-foreground/90 mb-4">
          Right after graduating from undergrad in the middle of the COVID pandemic, I decided to start a podcast focused on Asian-American topics. The goal was to discuss topics that were relatable to other Asian-Americans and featured my college classmates and friends. We covered a variety of topics, but due to time commitment required to edit and record new episodes, I had to put a pause on the podcast. I really enjoyed the research that went into the topics, and the genuine conversations I had with friends and colleagues. I'm looking to start it up again soon! If you're interested in hearing about a specific topic, you can submit them{" "}
          <a
            href="https://forms.gle/Xz8nZZCEc7nr4Kpe8"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#cbf3f0] hover:text-foreground/90 underline transition-colors"
          >
            here
          </a>
          .
        </p>
        <div className="flex flex-wrap gap-2">
          {["Audio Editing and Sound Design", "Project Management", "Topic Research", "Communication and Public Speaking"].map((skill) => (
            <Badge key={skill} variant="outline" className="border-[#9999a1] text-foreground/90 py-1.5">
              {skill}
            </Badge>
          ))}
        </div>
      </CardContent>
    </Card>
  </section>
);

export default ProjectsSection;
