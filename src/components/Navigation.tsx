import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-card/95 backdrop-blur-md shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="text-2xl font-bold text-gradient">
            Ganesh Pawar
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              to="/"
              className="text-foreground hover:text-primary transition-colors"
            >
              Home
            </Link>
            <Link
              to="/about"
              className="text-foreground hover:text-primary transition-colors"
            >
              About
            </Link>
            <Link
              to="/skills"
              className="text-foreground hover:text-primary transition-colors"
            >
              Skills
            </Link>
            <Link
              to="/dashboards"
              className="text-foreground hover:text-primary transition-colors"
            >
              Dashboards
            </Link>
            <Link
              to="/projects"
              className="text-foreground hover:text-primary transition-colors"
            >
              Projects
            </Link>
            <Link to="/contact">
              <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">
                Get in Touch
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-foreground"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 space-y-4">
            <Link
              to="/"
              onClick={closeMobileMenu}
              className="block w-full text-left text-foreground hover:text-primary transition-colors"
            >
              Home
            </Link>
            <Link
              to="/about"
              onClick={closeMobileMenu}
              className="block w-full text-left text-foreground hover:text-primary transition-colors"
            >
              About
            </Link>
            <Link
              to="/skills"
              onClick={closeMobileMenu}
              className="block w-full text-left text-foreground hover:text-primary transition-colors"
            >
              Skills
            </Link>
            <Link
              to="/dashboards"
              onClick={closeMobileMenu}
              className="block w-full text-left text-foreground hover:text-primary transition-colors"
            >
              Dashboards
            </Link>
            <Link
              to="/projects"
              onClick={closeMobileMenu}
              className="block w-full text-left text-foreground hover:text-primary transition-colors"
            >
              Projects
            </Link>
            <Link to="/contact" onClick={closeMobileMenu}>
              <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                Get in Touch
              </Button>
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
