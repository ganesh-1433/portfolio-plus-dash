import Navigation from "@/components/Navigation";
import Dashboards from "@/components/Dashboards";
import Footer from "@/components/Footer";

const DashboardsPage = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <div className="pt-16">
        <Dashboards />
      </div>
      <Footer />
    </div>
  );
};

export default DashboardsPage;
