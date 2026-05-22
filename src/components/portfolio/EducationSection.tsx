
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const EducationSection = () => {
  const keyCourses = [
    "Data Structures and Algorithms",
    "Databases and Information Systems",
    "Statistics for Economics",
    "Econometrics",
    "Intro to Computer Systems"
  ];

  const organizations = [
    "Design for Social Impact (Cofounder)",
    "Wharton Investment and Trading Group",
    "Muse Marketing"
  ];

  return (
    <section className="mb-16">
      <h2 className="text-3xl font-bold text-white mb-8 text-center">Education</h2>
      <Card className="hover:shadow-lg transition-shadow duration-300 border-0 bg-[#e6e6e9]/60 dark:bg-[#66666e]/60 backdrop-blur-sm">
        <CardHeader>
          <div className="flex justify-between items-start">
            <div className="flex items-center gap-3">
              <img 
                src="/lovable-uploads/9a78ce67-52fc-4092-a0df-14f78328d38d.png" 
                alt="University of Pennsylvania Logo" 
                className="w-8 h-8 object-contain"
              />
              <div>
                <CardTitle className="text-xl text-white">University of Pennsylvania</CardTitle>
                <CardDescription className="text-lg font-medium text-white">
                  Double Major between Computer Science and Economics
                </CardDescription>
              </div>
            </div>
            <Badge variant="secondary" className="bg-[#9999a1]/20 dark:bg-[#66666e]/50 text-white">
              August 2016 - May 2020
            </Badge>
          </div>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            {/* Key Courses Section */}
            <div>
              <h4 className="text-lg font-semibold text-white mb-3">Key Courses</h4>
              <div className="flex flex-wrap gap-2">
                {keyCourses.map((course, index) => (
                  <Badge key={index} variant="outline" className="border-[#66666e] dark:border-[#9999a1] text-white">
                    {course}
                  </Badge>
                ))}
              </div>
            </div>

            {/* Organizations Section */}
            <div>
              <h4 className="text-lg font-semibold text-white mb-3">Organizations</h4>
              <div className="flex flex-wrap gap-2">
                {organizations.map((org, index) => (
                  <Badge key={index} variant="outline" className="border-[#66666e] dark:border-[#9999a1] text-white">
                    {org}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </section>
  );
};

export default EducationSection;
