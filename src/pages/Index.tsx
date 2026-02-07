import { Link } from "react-router-dom";
import { Leaf, Coins, Users, Globe, ArrowRight, Sparkles, Heart, TreePine } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ScrollSequence from "@/components/ScrollSequence";
import FeatureCard from "@/components/FeatureCard";
import { Button } from "@/components/ui/button";
import visionImage from "@/assets/vision-site.jpg";

const Index = () => {
  const features = [
    {
      icon: Leaf,
      title: "100% Sustainable",
      description: "Powered entirely by solar energy, organic farming, and zero-waste systems. Living in harmony with nature.",
      gradient: false,
    },
    {
      icon: Coins,
      title: "SUZHI Token Economy",
      description: "Fair, transparent blockchain-based currency system where work directly translates to earned tokens.",
      gradient: false,
    },
    {
      icon: Users,
      title: "DAO Governance",
      description: "True democracy through decentralized decision-making. Every citizen has a voice in shaping our future.",
      gradient: false,
    },
    {
      icon: Globe,
      title: "Global Community",
      description: "A diverse, conscious collective united by shared values of sustainability, spirituality, and innovation.",
      gradient: false,
    },
  ];

  return (
    <div className="min-h-screen">
      <Navigation />

      <ScrollSequence frameCount={208}>
        {/* Gradient Overlay for Readability & Premium Feel */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-background/90 z-0" />

        <div className="container mx-auto px-4 h-full flex items-center justify-center relative z-10">
          <div className="text-center space-y-8 animate-slide-up max-w-4xl mx-auto">
            {/* Main Title */}
            <div className="relative inline-block">
              <span
                className="relative z-50 inline-block font-handwritten text-[6rem] md:text-[9rem] lg:text-[12rem] xl:text-[14rem] 2xl:text-[16rem] leading-normal bg-clip-text text-transparent bg-gradient-to-r from-[#AE8625] via-[#F7EF8A] to-[#EDC967] py-12 drop-shadow-2xl"
                style={{ backgroundImage: 'linear-gradient(to right, #AE8625, #F7EF8A, #D2AC47, #EDC967)' }}
              >
                சுழி
              </span>
              <div className="absolute -inset-8 bg-gold/10 blur-[60px] rounded-full opacity-60 -z-10" />
            </div>

            <div className="space-y-8">
              <h2 className="text-3xl md:text-5xl font-light tracking-wide text-white drop-shadow-lg">
                The Future Rooted in Nature
              </h2>
              <p className="text-xl md:text-2xl text-white/90 leading-relaxed max-w-2xl mx-auto drop-shadow-md font-light">
                A Decentralized Spiritual City Built on Blockchain and Sustainability.
                Where ancient wisdom meets modern technology.
              </p>

              <div className="flex flex-col sm:flex-row gap-6 justify-center pt-8">
                <Link to="/join">
                  <Button size="lg" className="text-xl px-8 md:px-10 h-16 rounded-full shadow-[0_0_30px_rgba(237,201,103,0.3)] hover:shadow-[0_0_50px_rgba(237,201,103,0.5)] transition-all duration-300 bg-gradient-to-r from-gold to-[#AE8625] text-black font-semibold border-none">
                    Join the Movement
                    <ArrowRight className="ml-2 h-6 w-6" />
                  </Button>
                </Link>
                <Link to="/about">
                  <Button size="lg" variant="outline" className="text-xl px-8 md:px-10 h-16 rounded-full border-2 border-white/30 text-white hover:bg-white/10 hover:border-white transition-all duration-300 backdrop-blur-sm">
                    Discover More
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce z-20">
          <div className="w-8 h-12 border-2 border-white/30 rounded-full flex items-start justify-center p-2 backdrop-blur-sm">
            <div className="w-1.5 h-2 bg-gold/80 rounded-full animate-scroll-dot" />
          </div>
        </div>
      </ScrollSequence>

      {/* Vision Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16 animate-fade-in">
            <div className="inline-flex items-center justify-center p-2 bg-primary/10 rounded-full mb-4">
              <Sparkles className="h-5 w-5 text-primary" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              A New Civilization of Conscious Living
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              SUZHI is more than a city — it's a living experiment in creating a balanced,
              equitable, and spiritually-aware society. We combine ancient wisdom with cutting-edge
              blockchain technology to build a self-sustaining community designed for the next 100 years.
            </p>
          </div>

          {/* Vision Image */}
          <div className="max-w-4xl mx-auto mb-12 animate-slide-up">
            <div className="relative rounded-2xl overflow-hidden shadow-luxury">
              <img
                src={visionImage}
                alt="Sustainable Eco City Vision"
                className="w-full h-[400px] object-cover"
              />
              <div className="absolute inset-0 gradient-hero opacity-40" />
            </div>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {features.map((feature, index) => (
              <div key={index} className="animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <FeatureCard {...feature} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="bg-card rounded-xl shadow-luxury transition-smooth hover:shadow-gold overflow-hidden">
              <div className="relative h-48">
                <img
                  src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=600&q=80"
                  alt="Community Balance and Equality"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent" />
              </div>
              <div className="p-8 text-center">
                <Heart className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-foreground mb-4">Balance & Equality</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Every member contributes based on their ability and receives based on their needs.
                  True equality through fair distribution and mutual respect.
                </p>
              </div>
            </div>

            <div className="bg-card rounded-xl shadow-luxury transition-smooth hover:shadow-gold overflow-hidden">
              <div className="relative h-48">
                <img
                  src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=600&q=80"
                  alt="Ecological Harmony with Nature"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent" />
              </div>
              <div className="p-8 text-center">
                <TreePine className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-foreground mb-4">Ecological Harmony</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Living systems that regenerate rather than deplete. Our 50-acre land is designed
                  to coexist with nature, not dominate it.
                </p>
              </div>
            </div>

            <div className="bg-card rounded-xl shadow-luxury transition-smooth hover:shadow-gold overflow-hidden">
              <div className="relative h-48">
                <img
                  src="https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=600&q=80"
                  alt="Spiritual Growth and Meditation"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent" />
              </div>
              <div className="p-8 text-center">
                <Sparkles className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-foreground mb-4">Spiritual Growth</h3>
                <p className="text-muted-foreground leading-relaxed">
                  A community that nurtures consciousness, meditation, and inner peace. Technology
                  serves humanity, not the other way around.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center bg-card rounded-2xl p-12 shadow-gold border border-primary/20">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Be Part of the Future
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Join us in building a sustainable, equitable, and spiritually conscious society.
              Whether you want to become a citizen, partner with us, or simply learn more,
              we welcome you to the SUZHI family.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/join">
                <Button size="lg" className="text-lg px-8">
                  Apply to Live Here
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link to="/partners">
                <Button size="lg" variant="outline" className="text-lg px-8">
                  Partner With Us
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
