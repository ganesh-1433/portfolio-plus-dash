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
      title: "Libraries & Frameworks",
      skills: [
        { name: "NumPy", icon: numpyIcon },
        { name: "Pandas", icon: pandasIcon },
        { name: "Matplotlib", icon: matplotlibIcon },
        { name: "Seaborn", icon: seabornIcon },
        { name: "Scikit-Learn", icon: pythonIcon },
      ],
    },
    {
      title: "Tools & Platforms",
      skills: [
        { name: "Power BI", icon: powerbiIcon },
        { name: "VS Code", icon: vscodeIcon },
        { name: "Tableau", icon: tableauIcon },
        { name: "Excel", icon: excelIcon },
      ],
    },
    {
      title: "Databases",
      skills: [
        { name: "MySQL", icon: mysqlIcon },
        { name: "MongoDB", icon: mongodbIcon },
        { name: "Oracle", icon: oracleIcon },
        { name: "SQLite", icon: sqliteIcon },
        { name: "PostgreSQL", icon: postgresqlIcon },
      ],
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

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {skillCategories.map((category, index) => (
              <Card key={index} className="p-8 bg-card border-border hover:border-primary/50 transition-all">
                <h3 className="text-2xl font-semibold mb-6 text-foreground">
                  {category.title}
                </h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
                  {category.skills.map((skill, skillIndex) => (
                    <div
                      key={skillIndex}
                      className="flex flex-col items-center gap-3 p-4 rounded-lg hover:bg-primary/5 transition-all group"
                    >
                      <div className="w-16 h-16 flex items-center justify-center">
                        <img 
                          src={skill.icon} 
                          alt={skill.name}
                          className="w-full h-full object-contain group-hover:scale-110 transition-transform"
                        />
                      </div>
                      <span className="text-sm font-medium text-center text-foreground">
                        {skill.name}
                      </span>
                    </div>
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
