import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";

const Skills = () => {
  const skillCategories = [
    {
      title: "Data Analysis",
      skills: ["Python", "SQL", "Excel", "Power BI", "Tableau", "Pandas", "NumPy"],
    },
    {
      title: "Web Development",
      skills: ["React", "TypeScript", "JavaScript", "HTML/CSS", "Tailwind CSS", "Node.js"],
    },
    {
      title: "Tools & Technologies",
      skills: ["Git", "GitHub", "VS Code", "Jupyter", "PostgreSQL", "REST APIs"],
    },
    {
      title: "Soft Skills",
      skills: ["Problem Solving", "Communication", "Team Collaboration", "Critical Thinking"],
    },
  ];

  return (
    <section id="skills" className="py-20 bg-card/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            My <span className="text-gradient">Skills</span>
          </h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            A diverse toolkit for data analysis and web development
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {skillCategories.map((category, index) => (
              <Card key={index} className="p-6 bg-card border-border">
                <h3 className="text-2xl font-semibold mb-4 text-primary">
                  {category.title}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <Badge
                      key={skillIndex}
                      variant="secondary"
                      className="text-sm py-1 px-3 bg-primary/10 text-foreground border border-primary/20 hover:bg-primary/20 transition-colors"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
