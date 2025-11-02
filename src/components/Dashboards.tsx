import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BarChart3, ExternalLink, TrendingUp } from "lucide-react";
import dashboardImage from "@/assets/dashboard-preview.jpg";

const Dashboards = () => {
  const dashboards = [
    {
      title: "Sales Analytics Dashboard",
      description:
        "Comprehensive sales performance tracking with real-time metrics, trend analysis, and forecasting capabilities.",
      image: dashboardImage,
      metrics: ["Revenue Tracking", "Customer Insights", "Sales Trends"],
      tools: ["Power BI", "SQL", "Python"],
      link: "#",
    },
    {
      title: "Marketing Performance Dashboard",
      description:
        "Track marketing campaign effectiveness, ROI analysis, and audience engagement metrics in one place.",
      image: dashboardImage,
      metrics: ["Campaign ROI", "Engagement Rates", "Conversion Tracking"],
      tools: ["Tableau", "Google Analytics", "Excel"],
      link: "#",
    },
  ];

  return (
    <section id="dashboards" className="py-20 bg-card/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            Data Analysis <span className="text-gradient">Dashboards</span>
          </h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Interactive dashboards transforming complex data into actionable insights
          </p>

          <div className="space-y-8">
            {dashboards.map((dashboard, index) => (
              <Card
                key={index}
                className="overflow-hidden bg-card border-border card-glow"
              >
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  <div className="relative h-64 lg:h-auto overflow-hidden">
                    <img
                      src={dashboard.image}
                      alt={dashboard.title}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <div className="p-6 flex flex-col justify-center">
                    <div className="flex items-center gap-2 mb-3">
                      <BarChart3 className="text-primary" size={24} />
                      <h3 className="text-2xl font-bold">{dashboard.title}</h3>
                    </div>

                    <p className="text-muted-foreground mb-4">
                      {dashboard.description}
                    </p>

                    <div className="mb-4">
                      <h4 className="text-sm font-semibold mb-2 flex items-center gap-2">
                        <TrendingUp size={16} className="text-primary" />
                        Key Metrics
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {dashboard.metrics.map((metric, metricIndex) => (
                          <span
                            key={metricIndex}
                            className="text-xs px-3 py-1 rounded-full bg-primary/10 text-primary border border-primary/20"
                          >
                            {metric}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="mb-4">
                      <h4 className="text-sm font-semibold mb-2">Tools Used</h4>
                      <div className="flex flex-wrap gap-2">
                        {dashboard.tools.map((tool, toolIndex) => (
                          <span
                            key={toolIndex}
                            className="text-xs px-3 py-1 rounded-full bg-secondary text-secondary-foreground"
                          >
                            {tool}
                          </span>
                        ))}
                      </div>
                    </div>

                    <Button
                      asChild
                      className="w-full sm:w-auto bg-primary hover:bg-primary/90 text-primary-foreground group"
                    >
                      <a
                        href={dashboard.link}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        View Dashboard
                        <ExternalLink className="ml-2 group-hover:translate-x-1 transition-transform" size={16} />
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

export default Dashboards;
