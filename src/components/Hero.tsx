import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-eco-city.jpg";

interface HeroProps {
  title: string;
  subtitle: string;
  showCTA?: boolean;
  height?: "full" | "medium" | "small";
  image?: string;
  children?: React.ReactNode;
}

const Hero = ({
  title,
  subtitle,
  showCTA = false,
  height = "full",
  image = heroImage,
  children
}: HeroProps) => {
  const heightClasses = {
    full: "min-h-screen",
    medium: "min-h-[70vh]",
    small: "min-h-[50vh]"
  };

  return (
    <section className={`relative ${heightClasses[height]} flex items-center justify-center overflow-hidden`}>
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src={image}
          alt="Anandavanam Eco City"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 gradient-hero" />
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 bg-mint/20 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-gold/20 rounded-full blur-3xl animate-float" style={{ animationDelay: "2s" }} />
        <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-emerald/20 rounded-full blur-2xl animate-float" style={{ animationDelay: "4s" }} />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto animate-fade-in">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-cream mb-6 leading-tight">
            {title}
          </h1>
          <p className="text-lg md:text-xl lg:text-2xl text-cream/90 mb-8 leading-relaxed max-w-3xl mx-auto">
            {subtitle}
          </p>

          {showCTA && (
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link to="/join">
                <Button size="lg" className="text-lg px-8 shadow-glow">
                  Join the Movement
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link to="/about">
                <Button size="lg" variant="outline" className="text-lg px-8 bg-cream/10 border-cream text-cream hover:bg-cream hover:text-forest">
                  Learn More
                </Button>
              </Link>
            </div>
          )}

          {children}
        </div>
      </div>

      {/* Scroll Indicator */}
      {
        height === "full" && (
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <div className="w-6 h-10 border-2 border-cream/50 rounded-full flex items-start justify-center p-2">
              <div className="w-1 h-3 bg-cream/50 rounded-full animate-pulse" />
            </div>
          </div>
        )
      }
    </section >
  );
};

export default Hero;
