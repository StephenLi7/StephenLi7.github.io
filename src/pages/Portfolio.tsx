import { ArrowLeft, Mail, Github, Linkedin, ExternalLink, Download, Mic, Instagram, Volleyball, Mountain } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Portfolio = () => {
  const experiences = [{
    title: "Senior Frontend Developer",
    company: "Tech Innovation Co.",
    period: "2022 - Present",
    description: "Leading frontend development for modern web applications using React, TypeScript, and cutting-edge technologies.",
    skills: ["React", "TypeScript", "Next.js", "Tailwind CSS"]
  }, {
    title: "Full Stack Developer",
    company: "Digital Solutions Ltd.",
    period: "2020 - 2022",
    description: "Developed and maintained full-stack applications, focusing on user experience and performance optimization.",
    skills: ["JavaScript", "Node.js", "MongoDB", "AWS"]
  }, {
    title: "Frontend Developer",
    company: "Creative Agency",
    period: "2019 - 2020",
    description: "Created responsive web interfaces and interactive experiences for diverse clients across various industries.",
    skills: ["HTML/CSS", "JavaScript", "Vue.js", "SASS"]
  }];
  const projects = [{
    title: "E-Commerce Platform",
    description: "A modern, scalable e-commerce solution with advanced filtering and payment integration.",
    tech: ["React", "Node.js", "Stripe", "MongoDB"],
    link: "#",
    type: "web"
  }, {
    title: "Task Management App",
    description: "Collaborative task management tool with real-time updates and team collaboration features.",
    tech: ["Vue.js", "Firebase", "Vuetify", "PWA"],
    link: "#",
    type: "web"
  }, {
    title: "My Podcast",
    description: "Weekly discussions about technology, innovation, and creative problem-solving. Coming soon with RSS feed integration.",
    tech: ["Audio Production", "Content Creation", "RSS"],
    link: "#",
    type: "podcast"
  }];
  return <div className="min-h-screen bg-[#f4f4f6] dark:bg-[#000000]">
      {/* Navigation */}
      <nav className="p-6 flex justify-between items-center">
        <Link to="/">
          <Button variant="ghost" size="sm" className="hover:bg-[#e6e6e9]/50 dark:hover:bg-[#c4ffd7]/50 transition-colors text-white hover:[&>*]:text-[#cbf3f0]">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Landing
          </Button>
        </Link>
        <div className="flex space-x-4">
          <Link to="/blog">
            <Button variant="outline" size="sm" className="border-[#66666e] dark:border-[#9999a1] text-white hover:bg-[#c4ffd7]/20 dark:hover:bg-[#c4ffd7]/20 hover:[&>*]:text-[#cbf3f0]">
              Blog
            </Button>
          </Link>
          <Link to="/photos">
            <Button variant="outline" size="sm" className="border-[#66666e] dark:border-[#9999a1] text-white hover:bg-[#c4ffd7]/20 hover:[&>*]:text-[#cbf3f0]">
              Photos by Me
            </Button>
          </Link>
        </div>
      </nav>

      <div className="max-w-6xl mx-auto px-6 pb-20">
        {/* Hero Section */}
        <div className="text-center mb-16 animate-fade-in">
          <div className="mb-8">
            <div className="w-32 h-32 bg-[#66666e] rounded-full mx-auto mb-6 flex items-center justify-center shadow-xl">
              <span className="text-4xl font-bold text-white">SL</span>
            </div>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
            Stephen Li
          </h1>
          <p className="text-xl text-white mb-8">Data and Product Enthusiast</p>
          
          <div className="flex justify-center space-x-4 mb-8">
            <Button variant="outline" size="sm" className="hover:bg-[#9999a1]/10 dark:hover:bg-[#66666e]/20 border-[#66666e] dark:border-[#9999a1] text-white hover:[&>*]:text-[#cbf3f0]">
              <Mail className="w-4 h-4 mr-2" />
              Contact
            </Button>
            <Button variant="outline" size="sm" className="hover:bg-[#9999a1]/10 dark:hover:bg-[#66666e]/20 border-[#66666e] dark:border-[#9999a1] text-white hover:[&>*]:text-[#cbf3f0]">
              <Linkedin className="w-4 h-4 mr-2" />
              LinkedIn
            </Button>
            <Button variant="outline" size="sm" className="hover:bg-[#9999a1]/10 dark:hover:bg-[#66666e]/20 border-[#66666e] dark:border-[#9999a1] text-white hover:[&>*]:text-[#cbf3f0]">
              <Download className="w-4 h-4 mr-2" />
              My Resume
            </Button>
            <Button variant="outline" size="sm" className="hover:bg-[#9999a1]/10 dark:hover:bg-[#66666e]/20 border-[#66666e] dark:border-[#9999a1] text-white hover:[&>*]:text-[#cbf3f0]">
              <Github className="w-4 h-4 mr-2" />
              GitHub
            </Button>
          </div>
        </div>

        {/* Experience Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Professional Experience</h2>
          <div className="space-y-6">
            {experiences.map((exp, index) => <Card key={index} className="hover:shadow-lg transition-shadow duration-300 border-0 bg-[#e6e6e9]/60 dark:bg-[#66666e]/60 backdrop-blur-sm">
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="text-xl text-white">{exp.title}</CardTitle>
                      <CardDescription className="text-lg font-medium text-white">{exp.company}</CardDescription>
                    </div>
                    <Badge variant="secondary" className="bg-[#9999a1]/20 dark:bg-[#66666e]/50 text-white">
                      {exp.period}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-white mb-4">{exp.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {exp.skills.map((skill, skillIndex) => <Badge key={skillIndex} variant="outline" className="border-[#66666e] dark:border-[#9999a1] text-white">
                        {skill}
                      </Badge>)}
                  </div>
                </CardContent>
              </Card>)}
          </div>
        </section>

        {/* Projects Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Featured Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => <Card key={index} className="hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-0 bg-[#e6e6e9]/60 dark:bg-[#66666e]/60 backdrop-blur-sm group">
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div className="flex items-center gap-2">
                      {project.type === "podcast" ? <Mic className="w-5 h-5 text-white" /> : <ExternalLink className="w-5 h-5 text-white" />}
                      <CardTitle className="text-xl text-white group-hover:text-white transition-colors">
                        {project.title}
                      </CardTitle>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-white mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, techIndex) => <Badge key={techIndex} variant="secondary" className="bg-[#f4f4f6] dark:bg-[#66666e] text-[#000000] dark:text-white">
                        {tech}
                      </Badge>)}
                  </div>
                </CardContent>
              </Card>)}
          </div>
        </section>

        {/* Hobbies Section */}
        <section>
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Hobbies</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Food Sub-section */}
            <Card className="hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-0 bg-[#e6e6e9]/60 dark:bg-[#66666e]/60 backdrop-blur-sm group">
              <CardHeader>
                <CardTitle className="text-xl text-white flex items-center gap-2">
                  <Instagram className="w-5 h-5" />
                  Food
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-white mb-4">
                  Exploring culinary adventures and sharing my favorite food discoveries.
                </p>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                  <Button variant="outline" className="border-[#66666e] dark:border-[#9999a1] text-white hover:bg-[#66666e]/20 hover:[&>*]:text-[#cbf3f0]">
                    <Instagram className="w-4 h-4 mr-2" />
                    View on Instagram
                  </Button>
                </a>
              </CardContent>
            </Card>

            {/* Volleyball Sub-section */}
            <Card className="hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-0 bg-[#e6e6e9]/60 dark:bg-[#66666e]/60 backdrop-blur-sm group">
              <CardHeader>
                <CardTitle className="text-xl text-white flex items-center gap-2">
                  <Volleyball className="w-5 h-5" />
                  Volleyball
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-white mb-4">
                  Playing volleyball and enjoying the team spirit and competitive nature of the sport.
                </p>
              </CardContent>
            </Card>

            {/* Mountain Sports Sub-section */}
            <Card className="hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-0 bg-[#e6e6e9]/60 dark:bg-[#66666e]/60 backdrop-blur-sm group">
              <CardHeader>
                <CardTitle className="text-xl text-white flex items-center gap-2">
                  <Mountain className="w-5 h-5" />
                  Mountain Sports
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-white mb-4">
                  Hiking, climbing, and exploring mountain trails for adventure and breathtaking views.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>
      </div>
    </div>;
};

export default Portfolio;
