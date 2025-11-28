import { useParams, Link } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowLeft, ExternalLink, CheckCircle, TrendingUp } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import bikeSalesImage from "@/assets/Bike_Sales_Analysis.png";
import blinkitDashboardImage from "@/assets/Blinkit_Dashboard.png";

const DashboardDetail = () => {
  const { id } = useParams();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  // Dashboard data
  const dashboardData: Record<string, any> = {
    "sales-analytics": {
      title: "Sales Analytics Dashboard",
      description:
        "Comprehensive sales performance tracking with real-time metrics, trend analysis, and forecasting capabilities.",
      image: bikeSalesImage,
      tools: ["Power BI", "SQL", "Python"],
      link: "https://app.powerbi.com/links/QuVSZEAkvL?ctid=9ff218eb-de4f-4e3e-95c4-d3cae83d933a&pbi_source=linkShare&bookmarkGuid=0029af8b-ed3c-42a6-b51c-a04f69b60351",
      longDescription: `
        This comprehensive sales analytics dashboard provides real-time insights into business performance, 
        enabling data-driven decision making. Built with Power BI, it integrates multiple data sources to 
        deliver actionable insights on revenue, customer behavior, and sales trends.
      `,
      features: [
        "Real-time revenue tracking and forecasting",
        "Customer segmentation and behavioral analysis",
        "Sales trend identification and pattern recognition",
        "Interactive visualizations with drill-down capabilities",
        "Automated report generation and scheduling",
        "Multi-dimensional data analysis",
        "KPI monitoring and alerts",
        "Export capabilities for presentations",
      ],
      insights: [
        "Identified 25% increase in Q4 sales performance",
        "Optimized inventory management based on demand patterns",
        "Improved customer retention through targeted insights",
        "Reduced reporting time by 70% with automation",
      ],
      metrics: [
        { name: "Revenue Tracking", description: "Monitor daily, weekly, and monthly revenue trends" },
        { name: "Customer Insights", description: "Understand customer demographics and purchase patterns" },
        { name: "Sales Trends", description: "Identify seasonal patterns and growth opportunities" },
        { name: "Product Performance", description: "Track best-selling products and categories" },
      ],
    },
    "marketing-performance": {
      title: "Marketing Performance Dashboard",
      description:
        "Track marketing campaign effectiveness, ROI analysis, and audience engagement metrics in one place.",
      image: blinkitDashboardImage,
      tools: ["Tableau", "Google Analytics", "Excel"],
      link: "#",
      longDescription: `
        A comprehensive marketing performance dashboard that provides deep insights into campaign effectiveness,
        audience engagement, and ROI. Built with Tableau and integrated with Google Analytics, this dashboard
        enables marketing teams to optimize their strategies and maximize campaign impact.
      `,
      features: [
        "Multi-channel campaign tracking and analysis",
        "ROI calculation and optimization insights",
        "Audience engagement metrics and trends",
        "Conversion funnel visualization",
        "A/B testing results and recommendations",
        "Social media performance tracking",
        "Email campaign analytics",
        "Budget allocation recommendations",
      ],
      insights: [
        "Improved campaign ROI by 40% through data-driven optimization",
        "Increased engagement rates by 35% across channels",
        "Reduced customer acquisition cost by 28%",
        "Enhanced targeting precision with audience segmentation",
      ],
      metrics: [
        { name: "Campaign ROI", description: "Measure return on investment for marketing campaigns" },
        { name: "Engagement Rates", description: "Track user interactions and engagement across platforms" },
        { name: "Conversion Tracking", description: "Monitor conversion rates and optimize funnels" },
        { name: "Audience Growth", description: "Analyze audience growth and retention metrics" },
      ],
    },
  };

  const dashboard = dashboardData[id || ""];

  if (!dashboard) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Dashboard Not Found</h1>
          <Link to="/dashboards">
            <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">
              <ArrowLeft className="mr-2" size={18} />
              Back to Dashboards
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
          <Link to="/dashboards">
            <Button
              variant="outline"
              className="mb-6 border-primary text-primary hover:bg-primary hover:text-primary-foreground"
            >
              <ArrowLeft className="mr-2" size={18} />
              Back to Dashboards
            </Button>
          </Link>

          <div className="max-w-6xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              {dashboard.title}
            </h1>
            <p className="text-xl text-muted-foreground mb-6">
              {dashboard.description}
            </p>
          </div>
        </div>
      </section>

      {/* Dashboard Image */}
      <section className="py-12 bg-card/30">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="rounded-lg overflow-hidden shadow-2xl">
              <img
                src={dashboard.image}
                alt={dashboard.title}
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Dashboard Details */}
      <section className="py-12 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto space-y-12">
            {/* Overview */}
            <Card className="p-8 bg-card border-border">
              <h2 className="text-3xl font-bold mb-4">
                Dashboard <span className="text-gradient">Overview</span>
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                {dashboard.longDescription}
              </p>
            </Card>

            {/* Key Metrics */}
            <Card className="p-8 bg-card border-border">
              <h2 className="text-3xl font-bold mb-6">
                Key <span className="text-gradient">Metrics</span>
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {dashboard.metrics.map((metric: any, index: number) => (
                  <div key={index} className="flex items-start gap-3">
                    <TrendingUp className="text-primary mt-1 flex-shrink-0" size={20} />
                    <div>
                      <h3 className="font-semibold mb-1">{metric.name}</h3>
                      <p className="text-sm text-muted-foreground">{metric.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </Card>

            {/* Features */}
            <Card className="p-8 bg-card border-border">
              <h2 className="text-3xl font-bold mb-6">
                Dashboard <span className="text-gradient">Features</span>
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {dashboard.features.map((feature: string, index: number) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle className="text-primary mt-1 flex-shrink-0" size={20} />
                    <p className="text-muted-foreground">{feature}</p>
                  </div>
                ))}
              </div>
            </Card>

            {/* Insights */}
            <Card className="p-8 bg-card border-border">
              <h2 className="text-3xl font-bold mb-6">
                Key <span className="text-gradient">Insights</span>
              </h2>
              <ul className="space-y-3">
                {dashboard.insights.map((insight: string, index: number) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="text-primary mt-1 flex-shrink-0" size={20} />
                    <p className="text-muted-foreground">{insight}</p>
                  </li>
                ))}
              </ul>
            </Card>

            {/* Tools Used */}
            <Card className="p-8 bg-card border-border">
              <h2 className="text-3xl font-bold mb-6">
                Tools <span className="text-gradient">Used</span>
              </h2>
              <div className="flex flex-wrap gap-3">
                {dashboard.tools.map((tool: string, index: number) => (
                  <span
                    key={index}
                    className="px-4 py-2 rounded-full bg-primary/10 text-primary border border-primary/20"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </Card>

            {/* Dashboard Link */}
            {dashboard.link && dashboard.link !== "#" && (
              <Card className="p-8 bg-card border-border">
                <h2 className="text-3xl font-bold mb-6">
                  View <span className="text-gradient">Live Dashboard</span>
                </h2>
                <Button
                  asChild
                  className="bg-primary hover:bg-primary/90 text-primary-foreground"
                >
                  <a href={dashboard.link} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="mr-2" size={18} />
                    Open Dashboard
                  </a>
                </Button>
              </Card>
            )}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default DashboardDetail;
