import { Target, Eye, Heart, Compass } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import aboutHero from "@/assets/about-hero.jpg";

const About = () => {
  return (
    <div className="min-h-screen">
      <Navigation />

      <Hero
        title="About SUZHI"
        subtitle="Building a Self-Sustaining Conscious Eco-City for the Next Generation"
        height="medium"
        image={aboutHero}
      />

      {/* Mission & Vision */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <Card className="shadow-luxury">
              <CardHeader>
                <Target className="h-10 w-10 text-primary mb-4" />
                <CardTitle className="text-2xl">Our Mission</CardTitle>
              </CardHeader>
              <CardContent className="text-muted-foreground leading-relaxed space-y-4">
                <p>
                  To create a living model of sustainable, equitable, and conscious
                  living that can inspire communities worldwide. SUZHI demonstrates that
                  modern technology and ancient wisdom can coexist harmoniously.
                </p>
                <p>
                  We aim to prove that a decentralized governance model powered by blockchain
                  can eliminate inequality, reduce waste, and create true community ownership.
                </p>
                <p>
                  Our mission extends beyond our 50 acres — we're building a blueprint for
                  the future of human settlements in the 21st century and beyond.
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-luxury">
              <CardHeader>
                <Eye className="h-10 w-10 text-primary mb-4" />
                <CardTitle className="text-2xl">Our Vision</CardTitle>
              </CardHeader>
              <CardContent className="text-muted-foreground leading-relaxed space-y-4">
                <p>
                  A world where cities are regenerative ecosystems, where governance is truly
                  democratic, and where inner growth is as valued as material prosperity.
                </p>
                <p>
                  We envision SUZHI as the first of many such communities — networked
                  eco-cities that collaborate, share resources, and collectively work toward
                  planetary healing.
                </p>
                <p>
                  By 2124, we see a global network of self-sustaining conscious cities, each
                  unique yet united by shared values of sustainability, equality, and consciousness.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <Heart className="h-12 w-12 text-primary mx-auto mb-4" />
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Our Philosophy
              </h2>
              <p className="text-lg text-muted-foreground">
                SUZHI is built on four foundational pillars that guide every decision we make.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-card p-8 rounded-lg shadow-luxury">
                <h3 className="text-xl font-bold text-foreground mb-4">1. Ecological Sustainability</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Every building, every system, every practice is designed to regenerate rather
                  than extract. We work with natural cycles, use renewable energy, practice
                  organic farming, and maintain zero-waste operations.
                </p>
              </div>

              <div className="bg-card p-8 rounded-lg shadow-luxury">
                <h3 className="text-xl font-bold text-foreground mb-4">2. Economic Equality</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Through our SUZHI token system and Proof of Contribution model, we ensure that
                  everyone receives fair compensation for their work. No exploitation, no unfair
                  hierarchies — just transparent, equitable distribution.
                </p>
              </div>

              <div className="bg-card p-8 rounded-lg shadow-luxury">
                <h3 className="text-xl font-bold text-foreground mb-4">3. Democratic Governance</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Our DAO-based governance ensures every citizen has a voice. Decisions are made
                  collectively, transparently, and recorded immutably on the blockchain. Power
                  belongs to the people, not to a select few.
                </p>
              </div>

              <div className="bg-card p-8 rounded-lg shadow-luxury">
                <h3 className="text-xl font-bold text-foreground mb-4">4. Inner Growth</h3>
                <p className="text-muted-foreground leading-relaxed">
                  We believe material progress must be balanced with inner growth. Regular
                  meditation, mindfulness practices, community gatherings, and consciousness
                  cultivation are woven into daily life.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Principles Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <Compass className="h-12 w-12 text-primary mx-auto mb-4" />
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Guiding Principles
            </h2>
          </div>

          <div className="max-w-4xl mx-auto space-y-6">
            {[
              {
                title: "Community Over Individual",
                description: "While we honor individual sovereignty, the collective good takes precedence. We thrive together."
              },
              {
                title: "Transparency Above All",
                description: "All decisions, transactions, and governance activities are recorded on the blockchain for complete transparency."
              },
              {
                title: "Nature as Teacher",
                description: "We learn from natural systems — resilience, diversity, cycles, and interdependence guide our designs."
              },
              {
                title: "Technology with Wisdom",
                description: "We embrace innovation but always ask: Does this serve humanity and the planet?"
              },
              {
                title: "Long-Term Thinking",
                description: "Our planning horizon is 100 years. We make decisions that future generations will thank us for."
              },
              {
                title: "Inclusivity and Diversity",
                description: "We welcome people of all backgrounds, beliefs, and cultures. Our strength lies in our diversity."
              }
            ].map((principle, index) => (
              <Card key={index} className="shadow-luxury hover:shadow-gold transition-smooth">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-foreground mb-3">{principle.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{principle.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
