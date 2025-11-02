import { Card } from "@/components/ui/card";
import { Code, Database, LineChart, Lightbulb } from "lucide-react";

const About = () => {
  const highlights = [
    {
      icon: Database,
      title: "Data Analysis",
      description: "Expert in transforming raw data into actionable insights",
    },
    {
      icon: Code,
      title: "Web Development",
      description: "Building modern, responsive web applications",
    },
    {
      icon: LineChart,
      title: "Visualization",
      description: "Creating compelling data visualizations and dashboards",
    },
    {
      icon: Lightbulb,
      title: "Problem Solving",
      description: "Innovative solutions for complex challenges",
    },
  ];

  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            About <span className="text-gradient">Me</span>
          </h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            I'm a passionate data analyst and web developer with a keen eye for detail
            and a love for creating meaningful solutions.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {highlights.map((item, index) => (
              <Card
                key={index}
                className="p-6 bg-card border-border card-glow text-center"
              >
                <div className="flex justify-center mb-4">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                    <item.icon className="w-8 h-8 text-primary" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-muted-foreground text-sm">{item.description}</p>
              </Card>
            ))}
          </div>

          <div className="mt-12 text-center max-w-3xl mx-auto">
            <p className="text-lg text-muted-foreground leading-relaxed">
              With a strong foundation in data analytics and web development, I specialize
              in creating data-driven solutions and beautiful user interfaces. My work
              combines technical expertise with creative problem-solving to deliver
              impactful results.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
