
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const ExperienceSection = () => {
  const experiences = [
    {
      title: "Product Growth Analyst",
      company: "Meta",
      period: "July 2025 - Present",
      description: "Updates to come soon!",
      skills: ["SQL", "Tableau", "Product Growth"],
      logo: "/logos/meta_logo.jpg"
    },
    {
      title: "Product Analyst",
      company: "Cloudflare",
      period: "September 2023 - June 2025",
      description: (
        <ul className="list-disc list-inside space-y-2">
          <li>Partner with product managers and engineers on the Application Performance and Developer Platform teams to build reporting dashboards using Tableau, define KPIs, and develop product strategy.</li>
          <li>Built and maintained tooling that tracked backend metrics (product usage, attach rate, annual contract value etc.) used for all of our A/B tests on the customer dashboard. Presented actionable results to the PM such as: increases in upgrades in paid plans, product adoption rates, and product usage metrics. My work helped speed up evaluation of how successful experiments were and allowed us to make changes default, or ramp down an experiment.</li>
          <li>Work with engineers to add new features to an internal data product used by finance and sales to identify upsell opportunities, leading to large expansion and new customer sales.</li>
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
      <h2 className="text-3xl font-bold text-white mb-8 text-center">Professional Experience</h2>
      <div className="space-y-6">
        {experiences.map((exp, index) => (
          <Card key={index} className="hover:shadow-lg transition-shadow duration-300 border-0 bg-[#e6e6e9]/60 dark:bg-[#66666e]/60 backdrop-blur-sm">
            <CardHeader>
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2">
                <div className="flex items-center gap-3">
                  {exp.logo && (
                    <img
                      src={exp.logo}
                      alt={`${exp.company} Logo`}
                      className="w-8 h-8 object-contain shrink-0"
                    />
                  )}
                  <div>
                    <CardTitle className="text-xl text-white">{exp.title}</CardTitle>
                    <CardDescription className="text-lg font-medium text-white">{exp.company}</CardDescription>
                  </div>
                </div>
                <Badge variant="secondary" className="bg-[#9999a1]/20 dark:bg-[#66666e]/50 text-white self-start sm:self-auto whitespace-nowrap">
                  {exp.period}
                </Badge>
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-white mb-4">
                {typeof exp.description === 'string' ? exp.description : exp.description}
              </div>
              <div className="flex flex-wrap gap-2">
                {exp.skills.map((skill, skillIndex) => (
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

export default ExperienceSection;
