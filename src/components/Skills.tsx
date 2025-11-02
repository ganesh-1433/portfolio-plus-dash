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
  const skills = [
    { name: "Python", icon: pythonIcon, category: "Programming" },
    { name: "SQL", icon: sqlIcon, category: "Programming" },
    { name: "NumPy", icon: numpyIcon, category: "Libraries" },
    { name: "Pandas", icon: pandasIcon, category: "Libraries" },
    { name: "Matplotlib", icon: matplotlibIcon, category: "Libraries" },
    { name: "Seaborn", icon: seabornIcon, category: "Libraries" },
    { name: "Scikit-Learn", icon: pythonIcon, category: "Libraries" },
    { name: "Power BI", icon: powerbiIcon, category: "Tools" },
    { name: "VS Code", icon: vscodeIcon, category: "Tools" },
    { name: "Tableau", icon: tableauIcon, category: "Tools" },
    { name: "Excel", icon: excelIcon, category: "Tools" },
    { name: "MySQL", icon: mysqlIcon, category: "Database" },
    { name: "MongoDB", icon: mongodbIcon, category: "Database" },
    { name: "Oracle", icon: oracleIcon, category: "Database" },
    { name: "SQLite", icon: sqliteIcon, category: "Database" },
    { name: "PostgreSQL", icon: postgresqlIcon, category: "Database" },
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

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
            {skills.map((skill, index) => (
              <Card 
                key={index} 
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
                    <h3 className="text-sm font-semibold text-foreground mb-1">
                      {skill.name}
                    </h3>
                    <span className="text-xs text-muted-foreground">
                      {skill.category}
                    </span>
                  </div>
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
