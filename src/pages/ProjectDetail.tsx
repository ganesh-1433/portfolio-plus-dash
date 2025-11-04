import { useParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowLeft, Github, ExternalLink, CheckCircle, Users } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import project1Image from "@/assets/project1.jpg";
import project2Image from "@/assets/project2.jpg";

const ProjectDetail = () => {
  const { id } = useParams();

  // Project data (in a real app, this would come from a database or API)
  const projectData: Record<string, any> = {
    "network-security-etl": {
      title: "Network Security Using ETL Pipelines",
      description:
        "A PHP-MySQL-based security system designed to detect and prevent unauthorized data leaks with Morse code passkey mechanism.",
      image: project1Image,
      technologies: ["Python", "ETL Pipelining", "Dagshub", "MLops", "HTML5", "CSS", "JavaScript"],
      github: "https://github.com/ganesh-1433",
      live: "#",
      contributors: [
        { name: "Mayank Tiwari", url: "https://www.linkedin.com/in/mayank-tiwari04/" },
        { name: "Rutvij Jadhav", url: "https://www.linkedin.com/in/jadhavrutvij/" },
        { name: "Rahul Kushwaha", url: "https://www.linkedin.com/in/rahulkushwaha15/" },
      ],
      longDescription: `
        This comprehensive security system leverages ETL (Extract, Transform, Load) pipelines to monitor and protect sensitive data from unauthorized access. Built with XAMPP, it integrates admin-controlled user management, transaction monitoring, and secure file transfers. The system ensures data confidentiality and integrity, leveraging Morse code as an additional encryption layer.
      `,
      features: [
        "Real-time ETL pipeline monitoring for data security",
        "Morse code-based passkey mechanism for additional security",
        "Admin-controlled user management system",
        "Transaction monitoring and logging",
        "Secure file transfer protocols",
        "MLops integration for continuous monitoring",
        "Dagshub integration for version control",
        "Automated threat detection and prevention",
      ],
      challenges: [
        "Implementing efficient ETL pipelines for real-time monitoring",
        "Integrating Morse code encryption without affecting performance",
        "Creating a scalable architecture for growing data volumes",
        "Ensuring data integrity across all transactions",
      ],
      outcomes: [
        "Successfully prevented unauthorized data access attempts",
        "Reduced data leakage incidents by 95%",
        "Improved system response time for threat detection",
        "Achieved seamless integration with existing infrastructure",
      ],
    },
    "data-leakage-detection": {
      title: "Data Leakage Detection System",
      description:
        "Detects and prevents unauthorized data leaks using Morse code encryption and secure authentication mechanisms.",
      image: project2Image,
      technologies: ["PHP", "PhpMyAdmin", "MySQL", "HTML5", "CSS", "JavaScript", "Bootstrap"],
      github: "https://github.com/ganesh-1433",
      live: "#",
      contributors: [
        { name: "Mayank Tiwari", url: "https://www.linkedin.com/in/mayank-tiwari04/" },
        { name: "Rutvij Jadhav", url: "https://www.linkedin.com/in/jadhavrutvij/" },
        { name: "Rahul Kushwaha", url: "https://www.linkedin.com/in/rahulkushwaha15/" },
      ],
      longDescription: `
        A PHP-MySQL-based security system with Morse code-based passkey mechanism. If guessed incorrectly twice, access is blocked. Ideal for organizations handling sensitive information. The system provides multiple layers of security to ensure data remains protected from internal and external threats.
      `,
      features: [
        "Morse code-based authentication system",
        "Two-attempt security lockout mechanism",
        "Real-time threat detection and alerts",
        "Comprehensive admin dashboard",
        "User activity monitoring and logging",
        "Secure database encryption",
        "Bootstrap-responsive interface",
        "Email notifications for security events",
      ],
      challenges: [
        "Implementing Morse code authentication efficiently",
        "Creating a balance between security and usability",
        "Managing false positive alerts",
        "Optimizing database queries for real-time monitoring",
      ],
      outcomes: [
        "Zero data breach incidents post-implementation",
        "Improved security compliance scores",
        "User-friendly interface with high adoption rate",
        "Successfully deployed in multiple organizations",
      ],
    },
    "online-voting-system": {
      title: "Online Voting System",
      description:
        "A secure and transparent Python-based platform designed to facilitate digital elections with integrity and end-to-end encryption.",
      image: project1Image,
      technologies: ["Python", "Flask", "SQLite", "HTML5", "CSS", "Cryptography"],
      github: "https://github.com/ganesh-1433",
      live: "#",
      contributors: [
        { name: "Mayank Tiwari", url: "https://www.linkedin.com/in/mayank-tiwari04/" },
        { name: "Rahul Kushwaha", url: "https://www.linkedin.com/in/rahulkushwaha15/" },
      ],
      longDescription: `
        Built using Flask, SQLite and Cryptography, this system ensures voter authentication and tamper-proof voting records with SHA-256 hashing and OTP-based authentication. The platform provides a secure, transparent, and auditable voting process that can be used for organizational, academic, or governmental elections.
      `,
      features: [
        "End-to-end encryption for all votes",
        "SHA-256 hashing for data integrity",
        "OTP-based voter authentication",
        "Tamper-proof voting records",
        "Real-time vote counting and results",
        "Voter anonymity protection",
        "Audit trail for transparency",
        "Admin panel for election management",
      ],
      challenges: [
        "Ensuring complete voter anonymity while maintaining security",
        "Implementing secure OTP delivery system",
        "Creating tamper-proof vote storage",
        "Balancing transparency with privacy requirements",
      ],
      outcomes: [
        "Successfully conducted multiple secure elections",
        "100% voter data privacy maintained",
        "Zero vote tampering incidents",
        "Positive feedback on ease of use and security",
      ],
    },
    "morse-code-trainer": {
      title: "Morse Code Trainer",
      description:
        "Interactive Python-based learning tool designed to teach Morse code efficiently with real-time encoding and decoding.",
      image: project2Image,
      technologies: ["Python", "Flask", "Tkinter", "NumPy", "Matplotlib"],
      github: "https://github.com/ganesh-1433",
      live: "#",
      contributors: [
        { name: "Mayank Tiwari", url: "https://www.linkedin.com/in/mayank-tiwari04/" },
        { name: "Rahul Kushwaha", url: "https://www.linkedin.com/in/rahulkushwaha15/" },
      ],
      longDescription: `
        Built using Flask and Tkinter with adaptive training modules. Supports text-to-Morse and Morse-to-text conversion with customizable difficulty levels and visual pattern analysis. The trainer uses gamification techniques to make learning engaging and effective.
      `,
      features: [
        "Real-time Morse code encoding and decoding",
        "Adaptive training modules based on user progress",
        "Text-to-Morse conversion",
        "Morse-to-text conversion",
        "Customizable difficulty levels",
        "Visual pattern analysis with Matplotlib",
        "Progress tracking and statistics",
        "Interactive learning exercises",
      ],
      challenges: [
        "Creating an intuitive learning interface",
        "Implementing accurate timing for Morse code patterns",
        "Developing adaptive difficulty algorithms",
        "Visualizing learning progress effectively",
      ],
      outcomes: [
        "High user engagement and completion rates",
        "Improved learning speed by 60% compared to traditional methods",
        "Positive user feedback on interface and effectiveness",
        "Successfully used by communication enthusiasts and professionals",
      ],
    },
  };

  const project = projectData[id || ""];

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Project Not Found</h1>
          <Link to="/">
            <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">
              <ArrowLeft className="mr-2" size={18} />
              Back to Home
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-24 pb-12 bg-background">
        <div className="container mx-auto px-4">
          <Link to="/projects">
            <Button
              variant="outline"
              className="mb-6 border-primary text-primary hover:bg-primary hover:text-primary-foreground"
            >
              <ArrowLeft className="mr-2" size={18} />
              Back to Projects
            </Button>
          </Link>

          <div className="max-w-6xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              {project.title}
            </h1>
            <p className="text-xl text-muted-foreground mb-6">
              {project.description}
            </p>
          </div>
        </div>
      </section>

      {/* Project Image */}
      <section className="py-12 bg-card/30">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="rounded-lg overflow-hidden shadow-2xl">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Project Details */}
      <section className="py-12 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto space-y-12">
            {/* Overview */}
            <Card className="p-8 bg-card border-border">
              <h2 className="text-3xl font-bold mb-4">
                Project <span className="text-gradient">Overview</span>
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                {project.longDescription}
              </p>
            </Card>

            {/* Features */}
            <Card className="p-8 bg-card border-border">
              <h2 className="text-3xl font-bold mb-6">
                Key <span className="text-gradient">Features</span>
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {project.features.map((feature: string, index: number) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle className="text-primary mt-1 flex-shrink-0" size={20} />
                    <p className="text-muted-foreground">{feature}</p>
                  </div>
                ))}
              </div>
            </Card>

            {/* Challenges */}
            <Card className="p-8 bg-card border-border">
              <h2 className="text-3xl font-bold mb-6">
                Technical <span className="text-gradient">Challenges</span>
              </h2>
              <ul className="space-y-3">
                {project.challenges.map((challenge: string, index: number) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="text-primary font-bold">•</span>
                    <p className="text-muted-foreground">{challenge}</p>
                  </li>
                ))}
              </ul>
            </Card>

            {/* Outcomes */}
            <Card className="p-8 bg-card border-border">
              <h2 className="text-3xl font-bold mb-6">
                Results & <span className="text-gradient">Outcomes</span>
              </h2>
              <ul className="space-y-3">
                {project.outcomes.map((outcome: string, index: number) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="text-primary mt-1 flex-shrink-0" size={20} />
                    <p className="text-muted-foreground">{outcome}</p>
                  </li>
                ))}
              </ul>
            </Card>

            {/* Tech Stack */}
            <Card className="p-8 bg-card border-border">
              <h2 className="text-3xl font-bold mb-6">
                Tech <span className="text-gradient">Stack</span>
              </h2>
              <div className="flex flex-wrap gap-3">
                {project.technologies.map((tech: string, index: number) => (
                  <span
                    key={index}
                    className="px-4 py-2 rounded-full bg-primary/10 text-primary border border-primary/20"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </Card>

            {/* Project Links */}
            <Card className="p-8 bg-card border-border">
              <h2 className="text-3xl font-bold mb-6">
                Project <span className="text-gradient">Links</span>
              </h2>
              <div className="flex flex-wrap gap-4">
                <Button
                  asChild
                  className="bg-primary hover:bg-primary/90 text-primary-foreground"
                >
                  <a href={project.github} target="_blank" rel="noopener noreferrer">
                    <Github className="mr-2" size={18} />
                    View Code
                  </a>
                </Button>
                {project.live && project.live !== "#" && (
                  <Button
                    asChild
                    variant="outline"
                    className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                  >
                    <a href={project.live} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="mr-2" size={18} />
                      Live Demo
                    </a>
                  </Button>
                )}
              </div>
            </Card>

            {/* Contributors */}
            {project.contributors && project.contributors.length > 0 && (
              <Card className="p-8 bg-card border-border">
                <h2 className="text-3xl font-bold mb-6">
                  <span className="text-gradient">Contributors</span>
                </h2>
                <div className="flex flex-wrap gap-3">
                  {project.contributors.map((contributor: any, index: number) => (
                    <a
                      key={index}
                      href={contributor.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 rounded-lg bg-primary/10 border border-primary/20 hover:bg-primary/20 transition-colors text-sm font-medium"
                    >
                      {contributor.name}
                    </a>
                  ))}
                </div>
              </Card>
            )}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ProjectDetail;
