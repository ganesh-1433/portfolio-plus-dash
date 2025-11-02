import { useParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowLeft, Github, ExternalLink, CheckCircle } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import project1Image from "@/assets/project1.jpg";
import project2Image from "@/assets/project2.jpg";

const ProjectDetail = () => {
  const { id } = useParams();

  // Project data (in a real app, this would come from a database or API)
  const projectData: Record<string, any> = {
    "e-commerce-platform": {
      title: "E-Commerce Platform",
      description:
        "A comprehensive e-commerce solution built with modern web technologies, featuring a complete shopping experience from product browsing to checkout.",
      image: project1Image,
      technologies: ["React", "TypeScript", "Tailwind CSS", "REST API", "Stripe"],
      github: "https://github.com/ganesh-1433",
      live: "#",
      longDescription: `
        This e-commerce platform represents a full-stack solution designed to provide
        an exceptional online shopping experience. The project showcases modern web
        development practices and user-centered design principles.
      `,
      features: [
        "Responsive design that works seamlessly across all devices",
        "Product catalog with advanced search and filtering",
        "Shopping cart with real-time updates",
        "Secure payment processing integration",
        "User authentication and profile management",
        "Order tracking and history",
        "Admin dashboard for product management",
        "Performance optimized with lazy loading and code splitting",
      ],
      challenges: [
        "Implementing secure payment processing while maintaining a smooth user experience",
        "Optimizing performance for large product catalogs",
        "Creating an intuitive cart and checkout flow",
        "Ensuring responsive design across various screen sizes",
      ],
      outcomes: [
        "Successfully launched with 99.9% uptime",
        "Achieved excellent performance scores (90+ on Lighthouse)",
        "Received positive user feedback on interface and usability",
        "Scalable architecture ready for future enhancements",
      ],
    },
    "mobile-app-design": {
      title: "Mobile App Design",
      description:
        "A modern mobile application interface showcasing cutting-edge UI/UX design principles with smooth animations and intuitive user flows.",
      image: project2Image,
      technologies: ["React Native", "JavaScript", "Firebase", "UI/UX Design"],
      github: "https://github.com/ganesh-1433",
      live: "#",
      longDescription: `
        This mobile app project focuses on delivering an exceptional user experience
        through thoughtful design and smooth interactions. Every element has been
        carefully crafted to provide intuitive navigation and delightful animations.
      `,
      features: [
        "Modern, clean interface following Material Design principles",
        "Smooth animations and transitions",
        "Dark mode support with seamless switching",
        "Offline functionality with data synchronization",
        "Push notifications for important updates",
        "Biometric authentication for enhanced security",
        "Social sharing capabilities",
        "Analytics integration for user behavior tracking",
      ],
      challenges: [
        "Creating smooth animations without impacting performance",
        "Implementing offline functionality with reliable syncing",
        "Designing an interface that appeals to diverse user demographics",
        "Balancing feature richness with simplicity",
      ],
      outcomes: [
        "Achieved high user engagement rates",
        "Maintained excellent app store ratings (4.5+ stars)",
        "Smooth performance on both iOS and Android",
        "Successfully onboarded thousands of users",
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
          <Link to="/">
            <Button
              variant="outline"
              className="mb-6 border-primary text-primary hover:bg-primary hover:text-primary-foreground"
            >
              <ArrowLeft className="mr-2" size={18} />
              Back to Portfolio
            </Button>
          </Link>

          <div className="max-w-6xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              {project.title}
            </h1>
            <p className="text-xl text-muted-foreground mb-6">
              {project.description}
            </p>

            <div className="flex flex-wrap gap-3 mb-8">
              {project.technologies.map((tech: string, index: number) => (
                <span
                  key={index}
                  className="px-4 py-2 rounded-full bg-primary/10 text-primary border border-primary/20"
                >
                  {tech}
                </span>
              ))}
            </div>

            <div className="flex gap-4">
              <Button
                asChild
                className="bg-primary hover:bg-primary/90 text-primary-foreground"
              >
                <a href={project.github} target="_blank" rel="noopener noreferrer">
                  <Github className="mr-2" size={18} />
                  View on GitHub
                </a>
              </Button>
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
            </div>
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
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ProjectDetail;
