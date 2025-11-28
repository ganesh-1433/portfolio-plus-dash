import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import bikeSalesImage from "@/assets/Bike_Sales_Analysis.png";
import blinkitDashboardImage from "@/assets/Blinkit_Dashboard.png";

const Dashboards = () => {
  const dashboards = [
    {
      id: "sales-analytics",
      title: "Sales Analytics Dashboard",
      description:
        "Comprehensive sales performance tracking with real-time metrics, trend analysis, and forecasting capabilities.",
      image: bikeSalesImage,
    },
    {
      id: "marketing-performance",
      title: "Marketing Performance Dashboard",
      description:
        "Track marketing campaign effectiveness, ROI analysis, and audience engagement metrics in one place.",
      image: blinkitDashboardImage,
    },
  ];

  return (
    <section id="dashboards" className="py-20 pt-32 bg-transparent">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            Data Analysis <span className="text-gradient">Dashboards</span>
          </h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Interactive dashboards transforming complex data into actionable insights
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {dashboards.map((dashboard, index) => (
              <Card
                key={index}
                className="overflow-hidden bg-card/50 backdrop-blur-sm border-border card-glow"
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={dashboard.image}
                    alt={dashboard.title}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-2">{dashboard.title}</h3>
                  <p className="text-muted-foreground mb-4">{dashboard.description}</p>

                  <Link to={`/dashboard/${dashboard.id}`}>
                    <Button
                      className="w-full bg-primary hover:bg-primary/90 text-primary-foreground group"
                    >
                      Learn More
                      <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={16} />
                    </Button>
                  </Link>
                </div>
              </Card>
            ))}
          </div>

          {/* Navigation to Projects */}
          <div className="flex justify-center mt-12">
            <Link to="/projects">
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground group"
              >
                View Projects
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Dashboards;
