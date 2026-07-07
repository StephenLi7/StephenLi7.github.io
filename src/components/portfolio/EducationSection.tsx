
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
      <Card className="hover:shadow-lg transition-shadow duration-300 border-0 bg-[#e6e6e9]/60 dark:bg-[#66666e]/40 backdrop-blur-sm">
        <CardHeader>
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2">
            <div className="flex items-center gap-3">
              <img
                src="/logos/upenn_logo.jpg"
                alt="University of Pennsylvania Logo"
                className="w-12 h-12 object-contain shrink-0"
              />
              <div>
                <CardTitle className="text-xl text-white">University of Pennsylvania</CardTitle>
                <CardDescription className="text-lg font-medium text-white">
                  Double Major between Computer Science and Economics
                </CardDescription>
              </div>
            </div>
            <Badge variant="secondary" className="bg-[#9999a1]/20 dark:bg-[#66666e]/50 text-white self-start sm:self-auto whitespace-nowrap py-1.5">
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
                  <Badge key={index} variant="outline" className="border-[#66666e] dark:border-[#9999a1] text-white py-1.5">
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
                  <Badge key={index} variant="outline" className="border-[#66666e] dark:border-[#9999a1] text-white py-1.5">
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
