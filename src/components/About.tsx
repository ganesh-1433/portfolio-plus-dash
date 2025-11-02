import { Card } from "@/components/ui/card";
import { GraduationCap } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-20 pt-32 bg-transparent">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            About <span className="text-gradient">Me</span>
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-12">
            {/* Journey Section */}
            <div className="p-8">
              <h3 className="text-2xl font-bold mb-4 text-primary">
                My Journey into Data Science
              </h3>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  My journey into Data Science began during high school when I first 
                  explored Python. What started as simple coding soon transformed into 
                  a deep fascination with data-driven insights and intelligent systems.
                </p>
                <p>
                  Discovering how raw data could unveil meaningful patterns and influence 
                  decision-making sparked my passion for AI and ML — a curiosity that 
                  continues to shape my academic and professional path.
                </p>
                <p>
                  Currently, I serve as the <span className="text-foreground font-semibold">Technical Head for the Data Science Students Association</span> and 
                  the <span className="text-foreground font-semibold">Technical Head for the Geeks for Geeks Student Chapter LTCoE</span>, where I 
                  actively contribute towards technical growth and community engagement.
                </p>
              </div>
            </div>

            {/* Education Section */}
            <Card className="p-8 bg-card/50 backdrop-blur-sm border-border card-glow">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <GraduationCap className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-2xl font-bold text-primary">Education</h3>
              </div>
              <div className="space-y-4">
                <div>
                  <h4 className="text-xl font-semibold mb-2">Bachelor of Technology</h4>
                  <p className="text-muted-foreground mb-1">
                    Computer Science and Engineering
                  </p>
                  <p className="text-sm text-primary font-medium mb-2">
                    Specialization in Data Science
                  </p>
                  <p className="text-muted-foreground mb-1">
                    Lokmanya Tilak College of Engineering
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Pre-final year
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
