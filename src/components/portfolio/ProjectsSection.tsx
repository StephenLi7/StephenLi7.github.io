
import { Mic } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const ProjectsSection = () => {
  const projects = [
    {
      title: "My Podcast",
      period: "Coming Soon",
      description: "Weekly discussions about technology, innovation, and creative problem-solving with RSS feed integration.",
      skills: ["Audio Production", "Content Creation", "RSS"]
    }
  ];

  return (
    <section className="mb-16">
      <h2 className="text-3xl font-bold text-white mb-8 text-center">Featured Projects</h2>
      <div className="space-y-6">
        {projects.map((project, index) => (
          <Card key={index} className="hover:shadow-lg transition-shadow duration-300 border-0 bg-[#e6e6e9]/60 dark:bg-[#66666e]/60 backdrop-blur-sm">
            <CardHeader>
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2">
                <div className="flex items-center gap-2">
                  <Mic className="w-5 h-5 text-white shrink-0" />
                  <CardTitle className="text-xl text-white">{project.title}</CardTitle>
                </div>
                <Badge variant="secondary" className="bg-[#9999a1]/20 dark:bg-[#66666e]/50 text-white self-start sm:self-auto whitespace-nowrap">
                  {project.period}
                </Badge>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-white mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.skills.map((skill, skillIndex) => (
                  <Badge key={skillIndex} variant="outline" className="border-[#66666e] dark:border-[#9999a1] text-white">
                    {skill}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;
