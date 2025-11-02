import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, ExternalLink, Github } from "lucide-react";
import { Link } from "react-router-dom";
import project1Image from "@/assets/project1.jpg";
import project2Image from "@/assets/project2.jpg";

const Projects = () => {
  const projects = [
    {
      id: "e-commerce-platform",
      title: "E-Commerce Platform",
      description:
        "A full-featured e-commerce platform with product management, shopping cart, and payment integration. Built with React and modern web technologies.",
      image: project1Image,
      technologies: ["React", "TypeScript", "Tailwind CSS", "REST API"],
      github: "https://github.com/ganesh-1433",
      live: "#",
    },
    {
      id: "mobile-app-design",
      title: "Mobile App Design",
      description:
        "A sleek mobile application interface focusing on user experience and modern design principles. Features smooth animations and intuitive navigation.",
      image: project2Image,
      technologies: ["React Native", "UI/UX", "JavaScript", "Firebase"],
      github: "https://github.com/ganesh-1433",
      live: "#",
    },
  ];

  return (
    <section id="projects" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Showcasing my latest work in web development and design
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <Card
                key={index}
                className="overflow-hidden bg-card border-border card-glow"
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                  <p className="text-muted-foreground mb-4">{project.description}</p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="text-xs px-3 py-1 rounded-full bg-primary/10 text-primary border border-primary/20"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-3">
                    <Link to={`/project/${project.id}`} className="flex-1">
                      <Button
                        className="w-full bg-primary hover:bg-primary/90 text-primary-foreground group"
                      >
                        Learn More
                        <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={16} />
                      </Button>
                    </Link>
                    <Button
                      variant="outline"
                      size="icon"
                      asChild
                      className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                    >
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Github size={18} />
                      </a>
                    </Button>
                    <Button
                      variant="outline"
                      size="icon"
                      asChild
                      className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                    >
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink size={18} />
                      </a>
                    </Button>
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

export default Projects;
