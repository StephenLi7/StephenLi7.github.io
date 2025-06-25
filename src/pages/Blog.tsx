import { ArrowLeft, Calendar, Clock, User } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      title: "The Future of Web Development",
      excerpt: "Exploring the latest trends and technologies shaping the future of web development, from AI integration to progressive web apps.",
      author: "John Doe",
      date: "2024-01-15",
      readTime: "5 min read",
      category: "Technology",
      featured: true
    },
    {
      id: 2,
      title: "Building Scalable React Applications",
      excerpt: "Best practices and architectural patterns for building maintainable and scalable React applications in 2024.",
      author: "John Doe",
      date: "2024-01-10",
      readTime: "8 min read",
      category: "Development",
      featured: false
    },
    {
      id: 3,
      title: "The Art of User Experience Design",
      excerpt: "Understanding the principles of good UX design and how to create intuitive, user-friendly interfaces.",
      author: "John Doe",
      date: "2024-01-05",
      readTime: "6 min read",
      category: "Design",
      featured: false
    },
    {
      id: 4,
      title: "Photography in the Digital Age",
      excerpt: "How digital technology has transformed photography and what it means for visual storytelling.",
      author: "John Doe",
      date: "2023-12-28",
      readTime: "4 min read",
      category: "Photography",
      featured: false
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

      <div className="max-w-4xl mx-auto px-6 pb-20">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
            Blog Posts
          </h1>
          <p className="text-xl text-white max-w-2xl mx-auto">
            Thoughts, insights, and stories about technology, design, and creativity.
          </p>
        </div>

        {/* Featured Post */}
        {blogPosts.filter(post => post.featured).map((post) => (
          <Card key={post.id} className="mb-12 hover:shadow-xl transition-all duration-300 border-0 bg-[#e6e6e9]/60 dark:bg-[#66666e]/60 backdrop-blur-sm">
            <CardHeader>
              <div className="flex items-center gap-2 mb-2">
                <Badge className="bg-[#66666e] text-white">Featured</Badge>
                <Badge variant="outline" className="border-[#66666e] dark:border-[#9999a1] text-white">
                  {post.category}
                </Badge>
              </div>
              <CardTitle className="text-2xl md:text-3xl text-white mb-2">{post.title}</CardTitle>
              <CardDescription className="text-lg text-white">{post.excerpt}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-center gap-4 text-sm text-white">
                <div className="flex items-center gap-1">
                  <User className="w-4 h-4" />
                  {post.author}
                </div>
                <div className="flex items-center gap-1">
                  <Calendar className="w-4 h-4" />
                  {new Date(post.date).toLocaleDateString()}
                </div>
                <div className="flex items-center gap-1">
                  <Clock className="w-4 h-4" />
                  {post.readTime}
                </div>
              </div>
            </CardContent>
          </Card>
        ))}

        {/* Regular Posts */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {blogPosts.filter(post => !post.featured).map((post) => (
            <Card key={post.id} className="hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-0 bg-[#e6e6e9]/60 dark:bg-[#66666e]/60 backdrop-blur-sm">
              <CardHeader>
                <div className="flex items-center gap-2 mb-2">
                  <Badge variant="outline" className="border-[#66666e] dark:border-[#9999a1] text-white">
                    {post.category}
                  </Badge>
                </div>
                <CardTitle className="text-xl text-white mb-2">{post.title}</CardTitle>
                <CardDescription className="text-white">{post.excerpt}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-4 text-sm text-white">
                  <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    {new Date(post.date).toLocaleDateString()}
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    {post.readTime}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;
