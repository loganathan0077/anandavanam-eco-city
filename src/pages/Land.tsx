import { MapPin, Sun, Droplet, Wind, Sprout, Home } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import landImage from "@/assets/sustainable-land.jpg";

const Land = () => {
  const landFeatures = [
    {
      icon: Sun,
      title: "100% Solar Powered",
      description: "Massive solar panel arrays generate all our electricity. Excess energy is stored in advanced battery systems for 24/7 clean power."
    },
    {
      icon: Droplet,
      title: "Water Harvesting",
      description: "Rainwater collection, greywater recycling, and natural filtration systems provide all our water needs sustainably."
    },
    {
      icon: Sprout,
      title: "Organic Farming",
      description: "50% of land dedicated to permaculture, organic vegetables, fruit orchards, and medicinal herb gardens."
    },
    {
      icon: Wind,
      title: "Carbon Negative",
      description: "Through reforestation, composting, and renewable energy, we sequester more carbon than we emit."
    },
    {
      icon: Home,
      title: "Eco-Housing",
      description: "Sustainable homes built with natural materials, excellent insulation, and designed for passive cooling/heating."
    },
    {
      icon: MapPin,
      title: "Strategic Location",
      description: "50 acres of prime land chosen for climate, soil quality, water access, and proximity to natural ecosystems."
    }
  ];

  const zones = [
    {
      name: "Residential Zone",
      area: "15 acres",
      description: "Eco-friendly homes and community living spaces designed for comfort and sustainability. Each dwelling integrates solar panels, rainwater harvesting, and composting systems."
    },
    {
      name: "Agricultural Zone",
      area: "25 acres",
      description: "Organic farms, orchards, greenhouses, and permaculture gardens. Produces 90% of the community's food needs with zero chemical inputs."
    },
    {
      name: "Energy & Infrastructure",
      area: "3 acres",
      description: "Solar panel fields, battery storage facilities, water treatment plants, and waste management systems. The technological backbone of self-sufficiency."
    },
    {
      name: "Community Center",
      area: "2 acres",
      description: "Gathering halls, meditation spaces, workshops, libraries, and wellness centers. The social and spiritual heart of SUZHI."
    },
    {
      name: "Nature Reserve",
      area: "5 acres",
      description: "Protected forest area maintained as wildlife habitat and carbon sink. Walking trails for meditation and nature connection."
    }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />

      <Hero
        title="The Land of SUZHI"
        subtitle="50 Acres of Pristine Nature, Designed for Regeneration"
        height="medium"
        image={landImage}
      />

      {/* Overview */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <MapPin className="h-12 w-12 text-primary mx-auto mb-4" />
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Our Sustainable Sanctuary
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Our 50-acre site is located in the lush Western Ghats, chosen specifically for its
              biodiversity, water resources, and energetic potential. SUZHI is designed
              not just to sit on the land, but to emerge from it — preserving 70% of the area
              as wild nature and productive food forests.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {landFeatures.map((feature, index) => (
              <Card key={index} className="shadow-luxury hover:shadow-gold transition-smooth">
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <feature.icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="leading-relaxed">{feature.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Land Zones */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Land Allocation
              </h2>
              <p className="text-lg text-muted-foreground">
                Each zone is carefully designed to serve specific functions while maintaining
                ecological balance and aesthetic beauty.
              </p>
            </div>

            <div className="space-y-6">
              {zones.map((zone, index) => (
                <Card key={index} className="shadow-luxury hover:shadow-gold transition-smooth">
                  <CardContent className="p-8">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                      <h3 className="text-2xl font-bold text-foreground mb-2 md:mb-0">{zone.name}</h3>
                      <div className="bg-primary text-primary-foreground px-4 py-2 rounded-full text-sm font-semibold inline-block">
                        {zone.area}
                      </div>
                    </div>
                    <p className="text-muted-foreground leading-relaxed">{zone.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Sustainability Metrics */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <Sprout className="h-12 w-12 text-primary mx-auto mb-4" />
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Sustainability Goals
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="shadow-luxury">
                <CardContent className="p-8">
                  <div className="text-center mb-4">
                    <div className="text-5xl font-bold text-primary mb-2">100%</div>
                    <h3 className="text-xl font-semibold text-foreground">Renewable Energy</h3>
                  </div>
                  <p className="text-muted-foreground text-center leading-relaxed">
                    All electricity generated from solar panels. Zero fossil fuel dependency.
                  </p>
                </CardContent>
              </Card>

              <Card className="shadow-luxury">
                <CardContent className="p-8">
                  <div className="text-center mb-4">
                    <div className="text-5xl font-bold text-primary mb-2">90%</div>
                    <h3 className="text-xl font-semibold text-foreground">Food Self-Sufficiency</h3>
                  </div>
                  <p className="text-muted-foreground text-center leading-relaxed">
                    Nearly all food grown on-site using organic, regenerative methods.
                  </p>
                </CardContent>
              </Card>

              <Card className="shadow-luxury">
                <CardContent className="p-8">
                  <div className="text-center mb-4">
                    <div className="text-5xl font-bold text-primary mb-2">0%</div>
                    <h3 className="text-xl font-semibold text-foreground">Waste to Landfill</h3>
                  </div>
                  <p className="text-muted-foreground text-center leading-relaxed">
                    Complete composting and recycling systems. Zero waste philosophy.
                  </p>
                </CardContent>
              </Card>

              <Card className="shadow-luxury">
                <CardContent className="p-8">
                  <div className="text-center mb-4">
                    <div className="text-5xl font-bold text-primary mb-2">-50%</div>
                    <h3 className="text-xl font-semibold text-foreground">Carbon Footprint</h3>
                  </div>
                  <p className="text-muted-foreground text-center leading-relaxed">
                    We sequester more carbon through trees than we emit. Net negative.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Future Expansion */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Future Expansion
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              While our current 50 acres serve as the foundation, we envision gradual expansion
              as our community grows. Future phases may include:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
              <Card className="shadow-luxury">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-foreground mb-3">Educational Campus</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Schools teaching sustainable living, blockchain technology, and spiritual practices.
                  </p>
                </CardContent>
              </Card>

              <Card className="shadow-luxury">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-foreground mb-3">Research Center</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Labs experimenting with new renewable technologies and regenerative agriculture.
                  </p>
                </CardContent>
              </Card>

              <Card className="shadow-luxury">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-foreground mb-3">Wellness Retreat</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Facilities for yoga, meditation, and holistic healing accessible to visitors.
                  </p>
                </CardContent>
              </Card>

              <Card className="shadow-luxury">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-foreground mb-3">Innovation Hub</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Co-working spaces for remote workers and blockchain developers.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Land;
