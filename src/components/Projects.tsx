import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, ExternalLink, Github } from "lucide-react";
import { Link } from "react-router-dom";
import project1Image from "@/assets/project1.jpg";
import project2Image from "@/assets/project2.jpg";

const Projects = () => {
  const projects = [
    {
      id: "network-security-etl",
      title: "Network Security Using ETL Pipelines",
      description:
        "A PHP-MySQL-based security system designed to detect and prevent unauthorized data leaks with Morse code passkey mechanism. Built with XAMPP, it integrates admin-controlled user management, transaction monitoring, and secure file transfers.",
      image: project1Image,
      technologies: ["Python", "ETL Pipelining", "Dagshub", "MLops", "HTML5", "CSS", "JavaScript"],
      github: "https://github.com/ganesh-1433",
      live: "#",
      contributors: [
        { name: "Mayank Tiwari", url: "https://www.linkedin.com/in/mayank-tiwari04/" },
        { name: "Rutvij Jadhav", url: "https://www.linkedin.com/in/jadhavrutvij/" },
        { name: "Rahul Kushwaha", url: "https://www.linkedin.com/in/rahulkushwaha15/" },
      ],
    },
    {
      id: "data-leakage-detection",
      title: "Data Leakage Detection System",
      description:
        "Detects and prevents unauthorized data leaks using Morse code encryption and secure authentication mechanisms. A PHP-MySQL-based security system with Morse code-based passkey mechanism. If guessed incorrectly twice, access is blocked.",
      image: project2Image,
      technologies: ["PHP", "PhpMyAdmin", "MySQL", "HTML5", "CSS", "JavaScript", "Bootstrap"],
      github: "https://github.com/ganesh-1433",
      live: "#",
      contributors: [
        { name: "Mayank Tiwari", url: "https://www.linkedin.com/in/mayank-tiwari04/" },
        { name: "Rutvij Jadhav", url: "https://www.linkedin.com/in/jadhavrutvij/" },
        { name: "Rahul Kushwaha", url: "https://www.linkedin.com/in/rahulkushwaha15/" },
      ],
    },
    {
      id: "online-voting-system",
      title: "Online Voting System",
      description:
        "A secure and transparent Python-based platform designed to facilitate digital elections with integrity and end-to-end encryption. Built using Flask, SQLite and Cryptography, it ensures voter authentication and tamper-proof voting records with SHA-256 hashing and OTP-based authentication.",
      image: project1Image,
      technologies: ["Python", "Flask", "SQLite", "HTML5", "CSS", "Cryptography"],
      github: "https://github.com/ganesh-1433",
      live: "#",
      contributors: [
        { name: "Mayank Tiwari", url: "https://www.linkedin.com/in/mayank-tiwari04/" },
        { name: "Rahul Kushwaha", url: "https://www.linkedin.com/in/rahulkushwaha15/" },
      ],
    },
    {
      id: "morse-code-trainer",
      title: "Morse Code Trainer",
      description:
        "Interactive Python-based learning tool designed to teach Morse code efficiently with real-time encoding and decoding. Built using Flask and Tkinter with adaptive training modules. Supports text-to-Morse and Morse-to-text conversion with customizable difficulty levels.",
      image: project2Image,
      technologies: ["Python", "Flask", "Tkinter", "NumPy", "Matplotlib"],
      github: "https://github.com/ganesh-1433",
      live: "#",
      contributors: [
        { name: "Mayank Tiwari", url: "https://www.linkedin.com/in/mayank-tiwari04/" },
        { name: "Rahul Kushwaha", url: "https://www.linkedin.com/in/rahulkushwaha15/" },
      ],
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
            Explore my portfolio of data science and security projects
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
