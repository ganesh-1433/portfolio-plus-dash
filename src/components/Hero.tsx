import { Button } from "@/components/ui/button";
import { ArrowRight, Github, Linkedin, Mail, ChevronDown } from "lucide-react";
import heroImage from "@/assets/ganesh.jpg";

import { useNavigate } from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate();

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with gradient */}
      <div className="absolute inset-0 z-0 bg-gradient-to-br from-background via-background to-purple-900/20"></div>

      {/* Content */}
      <div className="container mx-auto px-4 z-10 text-center">
        <div className="max-w-4xl mx-auto space-y-8 animate-fade-in">
          {/* Profile Image with Glow */}
          <div className="flex justify-center mb-8">
            <div className="relative">
              <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-primary glow-ring">
                <img 
                  src={heroImage} 
                  alt="Ganesh Pawar"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-4">
            Hi, I'm <span className="text-gradient">Ganesh Pawar</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-6">
            Data Science Student | AI/ML Enthusiast | Technical Leader
          </p>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            Pre-final year Computer Science student specializing in Data Science at Lokmanya Tilak College of Engineering. Technical Head for Data Science Students Association and Geeks for Geeks Student Chapter LTCoE.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              onClick={() => navigate("/dashboards")}
              className="bg-primary hover:bg-primary/90 text-primary-foreground group"
              size="lg"
            >
              View My Work
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              onClick={() => navigate("/contact")}
              variant="outline"
              size="lg"
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
            >
              Get in Touch
            </Button>
          </div>

        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown className="text-primary" size={32} />
      </div>
    </section>
  );
};

export default Hero;
