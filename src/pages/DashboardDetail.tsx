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
    "bike-sales-analysis": {
      title: "Bike Sales Analysis",
      description:
        "Comprehensive bike sales performance tracking with real-time metrics, trend analysis, and forecasting capabilities.",
      image: bikeSalesImage,
      tools: ["Tableau", "SQL", "Python"],
      link: "https://app.powerbi.com/links/QuVSZEAkvL?ctid=9ff218eb-de4f-4e3e-95c4-d3cae83d933a&pbi_source=linkShare&bookmarkGuid=0029af8b-ed3c-42a6-b51c-a04f69b60351",
      longDescription: `
        This comprehensive bike sales analytics dashboard provides real-time insights into business performance, 
        enabling data-driven decision making. Built with Tableau, it integrates multiple data sources to 
        deliver actionable insights on revenue, customer behavior, and sales trends in the cycling industry.
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
        { name: "Product Performance", description: "Track best-selling bike models and categories" },
      ],
    },
    "blinkit-sales-dashboard": {
      title: "Blinkit Sales Dashboard",
      description:
        "Track Blinkit sales performance, order metrics, and customer insights across multiple regions.",
      image: blinkitDashboardImage,
      tools: ["Power BI", "SQL", "Excel"],
      link: "#",
      longDescription: `
        A comprehensive Blinkit sales dashboard that provides deep insights into order performance,
        customer engagement, and regional sales metrics. Built with Power BI, this dashboard
        enables teams to optimize operations and maximize sales impact across different markets.
      `,
      features: [
        "Multi-region sales tracking and analysis",
        "Order volume and value metrics",
        "Customer engagement and retention analysis",
        "Delivery performance tracking",
        "Category-wise sales breakdown",
        "Peak hours and demand patterns",
        "Inventory turnover analysis",
        "Customer feedback and ratings integration",
      ],
      insights: [
        "Improved order fulfillment time by 35%",
        "Increased customer retention by 42% through targeted campaigns",
        "Reduced delivery costs by 22% with route optimization",
        "Enhanced inventory management with predictive analytics",
      ],
      metrics: [
        { name: "Order Metrics", description: "Track order volume, value, and completion rates" },
        { name: "Regional Performance", description: "Analyze sales performance across different regions" },
        { name: "Customer Behavior", description: "Monitor customer purchase patterns and preferences" },
        { name: "Delivery Efficiency", description: "Track delivery times and operational efficiency" },
      ],
    },
    "customer-analytics": {
      title: "Customer Analytics Dashboard",
      description:
        "Deep dive into customer behavior, segmentation, and lifetime value analysis.",
      image: bikeSalesImage,
      tools: ["Power BI", "Python", "SQL"],
      link: "#",
      longDescription: `
        A detailed customer analytics dashboard that reveals deep insights into customer behavior, 
        preferences, and value. This dashboard helps businesses understand their customers better 
        and make data-driven decisions for improved customer experiences.
      `,
      features: [
        "Customer lifetime value (CLV) calculation",
        "Behavioral segmentation analysis",
        "Purchase frequency and recency tracking",
        "Customer churn prediction",
        "Demographic analysis and profiling",
        "Customer journey mapping",
        "Retention rate monitoring",
        "Personalization recommendations",
      ],
      insights: [
        "Identified high-value customer segments contributing 60% of revenue",
        "Reduced churn rate by 18% with predictive interventions",
        "Improved customer satisfaction scores by 25%",
        "Optimized marketing spend based on customer value",
      ],
      metrics: [
        { name: "Customer LTV", description: "Calculate and track customer lifetime value" },
        { name: "Churn Analysis", description: "Predict and prevent customer churn" },
        { name: "Segmentation", description: "Understand different customer segments" },
        { name: "Engagement Score", description: "Measure customer engagement levels" },
      ],
    },
    "financial-insights": {
      title: "Financial Insights Dashboard",
      description:
        "Monitor revenue streams, expenses, and profitability metrics with predictive analytics.",
      image: blinkitDashboardImage,
      tools: ["Tableau", "Excel", "SQL"],
      link: "#",
      longDescription: `
        A comprehensive financial dashboard that provides real-time visibility into financial health,
        revenue trends, and profitability metrics. Built to support strategic financial planning
        and data-driven decision making for business growth.
      `,
      features: [
        "Revenue and expense tracking",
        "Profit margin analysis",
        "Cash flow forecasting",
        "Budget vs actual comparisons",
        "Cost center analysis",
        "Financial ratio calculations",
        "Trend analysis and predictions",
        "Custom financial reports",
      ],
      insights: [
        "Identified cost-saving opportunities worth $2M annually",
        "Improved profit margins by 15% through expense optimization",
        "Enhanced budget accuracy with predictive models",
        "Reduced financial reporting time by 60%",
      ],
      metrics: [
        { name: "Revenue Streams", description: "Track revenue from different sources" },
        { name: "Expense Analysis", description: "Monitor and optimize business expenses" },
        { name: "Profitability", description: "Measure profit margins and ROI" },
        { name: "Cash Flow", description: "Forecast and manage cash flow" },
      ],
    },
    "inventory-management": {
      title: "Inventory Management Dashboard",
      description:
        "Real-time inventory tracking, stock optimization, and supply chain analytics.",
      image: bikeSalesImage,
      tools: ["Power BI", "SQL", "Python"],
      link: "#",
      longDescription: `
        A powerful inventory management dashboard that provides real-time visibility into stock levels,
        turnover rates, and supply chain efficiency. Helps optimize inventory costs while ensuring
        product availability and minimizing stockouts.
      `,
      features: [
        "Real-time stock level monitoring",
        "Inventory turnover analysis",
        "Stockout and overstock alerts",
        "Demand forecasting",
        "Supplier performance tracking",
        "Warehouse efficiency metrics",
        "ABC analysis for inventory prioritization",
        "Reorder point calculations",
      ],
      insights: [
        "Reduced inventory holding costs by 30%",
        "Decreased stockouts by 45% with predictive models",
        "Improved inventory turnover ratio by 28%",
        "Optimized reorder points saving $500K annually",
      ],
      metrics: [
        { name: "Stock Levels", description: "Monitor current inventory levels in real-time" },
        { name: "Turnover Rate", description: "Track how quickly inventory moves" },
        { name: "Stockout Risk", description: "Predict and prevent stockout situations" },
        { name: "Carrying Costs", description: "Calculate and optimize inventory costs" },
      ],
    },
    "operational-efficiency": {
      title: "Operational Efficiency Dashboard",
      description:
        "Track operational KPIs, process efficiency, and resource utilization metrics.",
      image: blinkitDashboardImage,
      tools: ["Tableau", "SQL", "Excel"],
      link: "#",
      longDescription: `
        An operational efficiency dashboard that provides comprehensive insights into business operations,
        process performance, and resource utilization. Enables continuous improvement and operational
        excellence through data-driven monitoring and analysis.
      `,
      features: [
        "Process efficiency metrics",
        "Resource utilization tracking",
        "Productivity analysis",
        "Bottleneck identification",
        "Cycle time monitoring",
        "Quality metrics tracking",
        "Operational cost analysis",
        "Performance benchmarking",
      ],
      insights: [
        "Improved overall operational efficiency by 32%",
        "Reduced process cycle time by 40%",
        "Increased resource utilization by 25%",
        "Identified and eliminated 3 major bottlenecks",
      ],
      metrics: [
        { name: "Efficiency Ratio", description: "Measure overall operational efficiency" },
        { name: "Resource Usage", description: "Track utilization of resources" },
        { name: "Process Time", description: "Monitor process cycle times" },
        { name: "Quality Metrics", description: "Track quality and error rates" },
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
