import { Link } from "react-router-dom";
import { Mail, MapPin, Phone } from "lucide-react";
import logo from "@/assets/logo.png";

const Footer = () => {
  return (
    <footer className="bg-muted text-foreground border-t border-gold/10">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <img src={logo} alt="Suzhi Logo" className="h-10 w-10 object-contain" />
              <span className="text-lg font-bold">SUZHI</span>
            </div>
            <p className="text-foreground/80 text-sm leading-relaxed">
              Building the world's first decentralized spiritual eco-city. A harmonious blend of
              sustainability, blockchain innovation, and conscious living.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/about" className="text-foreground/80 hover:text-gold transition-smooth">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/tokenomics" className="text-foreground/80 hover:text-gold transition-smooth">
                  Tokenomics
                </Link>
              </li>
              <li>
                <Link to="/dao" className="text-foreground/80 hover:text-gold transition-smooth">
                  DAO Governance
                </Link>
              </li>
              <li>
                <Link to="/roadmap" className="text-foreground/80 hover:text-gold transition-smooth">
                  Roadmap
                </Link>
              </li>
            </ul>
          </div>

          {/* Community */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Community</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/citizen" className="text-foreground/80 hover:text-gold transition-smooth">
                  Become a Citizen
                </Link>
              </li>
              <li>
                <Link to="/community" className="text-foreground/80 hover:text-gold transition-smooth">
                  Community Life
                </Link>
              </li>
              <li>
                <Link to="/partners" className="text-foreground/80 hover:text-gold transition-smooth">
                  Partner With Us
                </Link>
              </li>
              <li>
                <Link to="/join" className="text-foreground/80 hover:text-gold transition-smooth">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start space-x-2">
                <MapPin className="h-4 w-4 text-gold mt-1 flex-shrink-0" />
                <span className="text-foreground/80">SUZHI Eco City, Manamadurai, Sivaganga District, Tamilnadu, India-630606</span>
              </li>
              <li className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-gold flex-shrink-0" />
                <a
                  href="mailto:connect@suzhi.eco"
                  className="text-foreground/80 hover:text-gold transition-smooth"
                >
                  connect@suzhi.eco
                </a>
              </li>
              <li className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-gold flex-shrink-0" />
                <span className="text-foreground/80">+91 9999999999</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gold/20 mt-8 pt-8 text-center">
          <p className="text-foreground/60 text-sm">
            © {new Date().getFullYear()} Suzhi Eco City. All rights reserved. Built with ❤️ for
            a sustainable future.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
