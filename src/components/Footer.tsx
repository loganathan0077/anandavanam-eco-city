import { Link } from "react-router-dom";
import { Leaf, Mail, MapPin, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-forest text-cream">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Leaf className="h-6 w-6 text-mint" />
              <span className="text-lg font-bold">ANANDAVANAM</span>
            </div>
            <p className="text-cream/80 text-sm leading-relaxed">
              Building the world's first decentralized spiritual eco-city. A harmonious blend of
              sustainability, blockchain innovation, and conscious living.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/about" className="text-cream/80 hover:text-mint transition-smooth">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/tokenomics" className="text-cream/80 hover:text-mint transition-smooth">
                  Tokenomics
                </Link>
              </li>
              <li>
                <Link to="/dao" className="text-cream/80 hover:text-mint transition-smooth">
                  DAO Governance
                </Link>
              </li>
              <li>
                <Link to="/roadmap" className="text-cream/80 hover:text-mint transition-smooth">
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
                <Link to="/citizen" className="text-cream/80 hover:text-mint transition-smooth">
                  Become a Citizen
                </Link>
              </li>
              <li>
                <Link to="/community" className="text-cream/80 hover:text-mint transition-smooth">
                  Community Life
                </Link>
              </li>
              <li>
                <Link to="/partners" className="text-cream/80 hover:text-mint transition-smooth">
                  Partner With Us
                </Link>
              </li>
              <li>
                <Link to="/join" className="text-cream/80 hover:text-mint transition-smooth">
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
                <MapPin className="h-4 w-4 text-mint mt-1 flex-shrink-0" />
                <span className="text-cream/80">50-Acre Eco City Zone, Sustainable Living District</span>
              </li>
              <li className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-mint flex-shrink-0" />
                <a
                  href="mailto:connect@anandavanam.eco"
                  className="text-cream/80 hover:text-mint transition-smooth"
                >
                  connect@anandavanam.eco
                </a>
              </li>
              <li className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-mint flex-shrink-0" />
                <span className="text-cream/80">+91 (0) 123-456-7890</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-cream/20 mt-8 pt-8 text-center">
          <p className="text-cream/60 text-sm">
            © {new Date().getFullYear()} Anandavanam Eco City. All rights reserved. Built with ❤️ for
            a sustainable future.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
