import { Card } from "@/components/ui/card";
import { Database, Code, Wrench, BookOpen } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: Code,
      skills: ["Python", "SQL"],
    },
    {
      title: "Libraries & Frameworks",
      icon: BookOpen,
      skills: ["NumPy", "Pandas", "Matplotlib", "Seaborn", "Scikit-Learn"],
    },
    {
      title: "Tools & Platforms",
      icon: Wrench,
      skills: ["Power BI", "VS Code", "Tableau", "Excel"],
    },
    {
      title: "Databases",
      icon: Database,
      skills: ["MySQL", "MongoDB", "Oracle", "SQLite", "PostgreSQL"],
    },
  ];

  return (
    <section id="skills" className="py-20 bg-card/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            Technical <span className="text-gradient">Skills</span>
          </h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Technologies and tools I work with
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {skillCategories.map((category, index) => {
              const IconComponent = category.icon;
              return (
                <Card key={index} className="p-6 bg-card border-border hover:border-primary/50 transition-all">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <IconComponent className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold text-foreground">
                      {category.title}
                    </h3>
                  </div>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                    {category.skills.map((skill, skillIndex) => (
                      <div
                        key={skillIndex}
                        className="flex items-center justify-center p-3 rounded-lg bg-primary/5 border border-primary/20 hover:bg-primary/10 hover:border-primary/40 transition-all"
                      >
                        <span className="text-sm font-medium text-foreground">{skill}</span>
                      </div>
                    ))}
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
