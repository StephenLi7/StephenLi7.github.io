
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const ExperienceSection = () => {
  const experiences = [
    {
      title: "Product Growth Analyst",
      company: "Meta",
      period: "July 2025 - Present",
      description: (
        <div>
          <p className="font-semibold text-white/90 mb-2">Facebook Notifications</p>
          <ul className="list-disc list-inside space-y-2">
            <li>Lead a cross-org initiative to unify push and email notification systems; designed multi-region capacity test identifying impact of 200K+ DAU, and drive ML optimization and roadmap decisions</li>
            <li>Own analytics and reporting for Facebook Widgets, driving performance insights for Events widget launch and experimentation pipeline</li>
            <li>Develop the use of cross-app and device-level signals to improve ML-based notification timing; leveraged battery state and Focus Mode signals in timing, leading to a 4% increase in CTR</li>
            <li>Drove push reachability strategy via analysis of user engagement, leading to surface expansion of upsells</li>
          </ul>
        </div>
      ),
      skills: ["SQL", "A/B Testing and Experimentation", "Dashboard Building (internal tools)", "Python", "ML Training", "Claude Code"],
      logo: "/logos/meta_logo.jpg"
    },
    {
      title: "Product Analyst II",
      company: "Cloudflare",
      period: "September 2023 - June 2025",
      description: (
        <ul className="list-disc list-inside space-y-2">
          <li>Built A/B testing and experimentation platform enabling product teams to evaluate usage, conversion, and revenue metrics, driving +16% subscriptions, +7% adoption, +23% upgrades</li>
          <li>Defined KPIs, conducted performance analysis, and built Tableau dashboards for Application Performance and Developer Platform products</li>
          <li>Partnered with engineering to enhance internal data tools, driving $250K+ ARR expansion through upsell insights</li>
        </ul>
      ),
      skills: ["SQL", "Tableau", "A/B Testing and Experimentation", "Product Analytics", "Scala"],
      logo: "/logos/cloudflare_logo.jpg"
    },
    {
      title: "Product Analyst",
      company: "Good Eggs",
      period: "January 2022 - May 2022",
      description: (
        <ul className="list-disc list-inside space-y-2">
          <li>Collaborated with a product manager to release unavailable product recommendations, resulting in a 40% increase in checkouts for users with unavailable products in their cart</li>
          <li>Established ETL pipelines for new data and integrated them into dashboards tracking key user metrics (e.g., session duration and page engagement)</li>
        </ul>
      ),
      skills: ["SQL", "Mode Analytics", "Product Analytics", "Product Management", "Amplitude", "ETL"],
      logo: "/logos/goodeggs_logo.jpg"
    },
    {
      title: "Business Analyst (Data Science)",
      company: "Capital One",
      period: "August 2020 - January 2022",
      description: (
        <ul className="list-disc list-inside space-y-2">
          <li>Built and released a Python tool that provided metrics (variable importance, data coverage, etc.) needed to evaluate new data sources, which identified variables that reduced credit exposure by 5% and generated an 1.3% higher returns in our models.</li>
          <li>Reduced legal tickets by 20% by collaborating with the data science team to automate rejection messaging creation, which allowed us to incorporate new data sources with less overhead.</li>
        </ul>
      ),
      skills: ["Python", "SQL", "Data Science", "Pandas", "Business Analytics"],
      logo: "/logos/capital_one_logo.jpg"
    },
    {
      title: "Product Management and Analytics Intern",
      company: "Capital One (Capital One Shopping)",
      period: "June 2019 - August 2019",
      description: (
        <ul className="list-disc list-inside space-y-2">
          <li>Redesigned and shipped a new user onboarding experience for Paribus (now Capital One Shopping) that targeted improvements in user experience and engagement, which led to a 41% lift in click-through rate and 27% more installations.</li>
          <li>Partnered with engineers to set up A/B tests and event tracking to measure the results of the new user onboarding experience, which I evaluated via metrics like click through rate and pages viewed using SQL.</li>
        </ul>
      ),
      skills: ["SQL", "Amplitude", "Figma", "Product Management", "A/B Testing and Experimentation"],
      logo: "/logos/capital_one_logo.jpg"
    }
  ];

  return (
    <section className="mb-16">
      <h2 className="text-3xl font-bold text-white/90 mb-8 text-center">Professional Experience</h2>
      <div className="space-y-6">
        {experiences.map((exp, index) => (
          <Card key={index} className="hover:shadow-lg transition-shadow duration-300 border-0 bg-[#e6e6e9]/60 dark:bg-[#2d2d2d]/80 backdrop-blur-sm">
            <CardHeader>
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2">
                <div className="flex items-center gap-3">
                  {exp.logo && (
                    <img
                      src={exp.logo}
                      alt={`${exp.company} Logo`}
                      className="w-12 h-12 object-contain shrink-0"
                    />
                  )}
                  <div>
                    <CardTitle className="text-xl text-white/90">{exp.title}</CardTitle>
                    <CardDescription className="text-lg font-medium text-white/90">{exp.company}</CardDescription>
                  </div>
                </div>
                <Badge variant="secondary" className="bg-[#9999a1]/20 dark:bg-[#66666e]/50 text-white/90 self-start sm:self-auto whitespace-nowrap py-1.5">
                  {exp.period}
                </Badge>
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-white/90 mb-4">
                {typeof exp.description === 'string' ? exp.description : exp.description}
              </div>
              <div className="flex flex-wrap gap-2">
                {exp.skills.map((skill, skillIndex) => (
                  <Badge key={skillIndex} variant="outline" className="border-[#66666e] dark:border-[#9999a1] text-white/90 py-1.5">
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

export default ExperienceSection;
