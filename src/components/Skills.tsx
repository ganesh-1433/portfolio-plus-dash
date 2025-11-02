import { Card } from "@/components/ui/card";
import pythonIcon from "@/assets/skills/python.svg";
import sqlIcon from "@/assets/skills/sql.svg";
import numpyIcon from "@/assets/skills/numpy.svg";
import pandasIcon from "@/assets/skills/pandas.svg";
import matplotlibIcon from "@/assets/skills/matplotlib.svg";
import seabornIcon from "@/assets/skills/seaborn.png";
import powerbiIcon from "@/assets/skills/powerbi.png";
import vscodeIcon from "@/assets/skills/vscode.svg";
import tableauIcon from "@/assets/skills/tableau.png";
import excelIcon from "@/assets/skills/excel.png";
import mysqlIcon from "@/assets/skills/sql.svg";
import mongodbIcon from "@/assets/skills/mongodb.svg";
import oracleIcon from "@/assets/skills/oracle.svg";
import sqliteIcon from "@/assets/skills/sqlite.svg";
import postgresqlIcon from "@/assets/skills/postgresql.svg";

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      skills: [
        { name: "Python", icon: pythonIcon },
        { name: "SQL", icon: sqlIcon },
      ],
    },
    {
      title: "Libraries/Frameworks",
      skills: [
        { name: "NumPy", icon: numpyIcon },
        { name: "Pandas", icon: pandasIcon },
        { name: "Matplotlib", icon: matplotlibIcon },
        { name: "Seaborn", icon: seabornIcon },
        { name: "Scikit-learn", icon: pythonIcon },
      ],
    },
    {
      title: "Tools / Platforms",
      skills: [
        { name: "Microsoft Power BI", icon: powerbiIcon },
        { name: "VS Code", icon: vscodeIcon },
        { name: "Tableau", icon: tableauIcon },
        { name: "Microsoft Excel", icon: excelIcon },
      ],
    },
    {
      title: "Databases",
      skills: [
        { name: "MySQL", icon: mysqlIcon },
        { name: "PostgreSQL", icon: postgresqlIcon },
        { name: "MongoDB", icon: mongodbIcon },
        { name: "Oracle", icon: oracleIcon },
        { name: "SQLite", icon: sqliteIcon },
      ],
    },
  ];

  return (
    <section id="skills" className="py-20 pt-32 bg-transparent">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            Technical <span className="text-gradient">Skills</span>
          </h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Technologies and tools I work with
          </p>

          <div className="space-y-12">
            {skillCategories.map((category, categoryIndex) => (
              <div key={categoryIndex}>
                <h3 className="text-2xl font-semibold mb-6 text-primary">
                  {category.title}
                </h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
                  {category.skills.map((skill, skillIndex) => (
                    <Card 
                      key={skillIndex} 
                      className="p-6 bg-card/50 backdrop-blur-sm border-border card-glow hover:scale-105 transition-all duration-300 group"
                    >
                      <div className="flex flex-col items-center gap-4">
                        <div className="w-16 h-16 flex items-center justify-center">
                          <img 
                            src={skill.icon} 
                            alt={skill.name}
                            className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-300"
                          />
                        </div>
                        <div className="text-center">
                          <h4 className="text-sm font-semibold text-foreground">
                            {skill.name}
                          </h4>
                        </div>
                      </div>
                    </Card>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
