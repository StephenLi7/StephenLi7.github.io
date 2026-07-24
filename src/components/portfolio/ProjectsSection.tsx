
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
          Right after graduating and during the COVID pandemic, I started a podcast exploring Asian-American topics and stories, featuring conversations with college classmates and friends. I've since paused it due to the time commitment of editing and recording, but I'm looking to bring it back! Feel free to submit ideas or discussion topics{" "}
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
