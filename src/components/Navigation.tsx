import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, Leaf } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Tokenomics", path: "/tokenomics" },
    { name: "Exchange", path: "/exchange" },
    { name: "DAO", path: "/dao" },
    { name: "The Land", path: "/land" },
    { name: "Citizen Model", path: "/citizen" },
    { name: "Roadmap", path: "/roadmap" },
    { name: "Community", path: "/community" },
    { name: "Partners", path: "/partners" },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 bg-background/95 backdrop-blur-md border-b border-border shadow-soft">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 transition-smooth hover:opacity-80">
            <Leaf className="h-8 w-8 text-primary" />
            <span className="text-xl font-bold text-foreground">ANANDAVANAM</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className="px-3 py-2 text-sm font-medium text-foreground/80 hover:text-primary transition-smooth rounded-md hover:bg-muted"
              >
                {link.name}
              </Link>
            ))}
            <Link to="/join">
              <Button size="sm" className="ml-4">
                Join Us
              </Button>
            </Link>
            <a href="https://anandavanam-gj2.caffeine.xyz/" target="_blank" rel="noopener noreferrer">
              <Button size="sm" variant="outline" className="ml-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                Work Tracking
              </Button>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 text-foreground hover:text-primary transition-smooth"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden py-4 animate-fade-in">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className="block px-4 py-2 text-foreground/80 hover:text-primary hover:bg-muted transition-smooth rounded-md"
              >
                {link.name}
              </Link>
            ))}
            <Link to="/join" onClick={() => setIsOpen(false)}>
              <Button className="w-full mt-4" size="sm">
                Join Us
              </Button>
            </Link>
            <a href="https://anandavanam-gj2.caffeine.xyz/" target="_blank" rel="noopener noreferrer">
              <Button className="w-full mt-2" size="sm" variant="outline">
                Work Tracking
              </Button>
            </a>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
