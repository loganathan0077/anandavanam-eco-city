import { UserPlus, Award, CheckCircle, Clock, Target, BookOpen } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import citizenHero from "@/assets/citizen-hero.jpg";

const Citizen = () => {
  const contributionTypes = [
    {
      icon: Target,
      title: "Physical Labor",
      description: "Farming, construction, maintenance, infrastructure work — the foundation of community operations.",
      examples: ["Organic farming", "Building maintenance", "Solar panel installation", "Landscaping"]
    },
    {
      icon: BookOpen,
      title: "Knowledge Work",
      description: "Education, research, administration, technology development — intellectual contributions.",
      examples: ["Teaching classes", "Software development", "Financial planning", "Research projects"]
    },
    {
      icon: Award,
      title: "Creative & Cultural",
      description: "Art, music, storytelling, event organization — nurturing the community's soul.",
      examples: ["Organizing festivals", "Creating art", "Music performances", "Storytelling sessions"]
    },
    {
      icon: CheckCircle,
      title: "Care & Wellness",
      description: "Healthcare, counseling, childcare, eldercare — supporting the community's wellbeing.",
      examples: ["Medical services", "Mental health support", "Childcare", "Elderly assistance"]
    }
  ];

  const verificationSteps = [
    {
      step: 1,
      title: "Log Your Work",
      description: "Citizens record their contributions using the community blockchain app. Include time spent, type of work, and any relevant details."
    },
    {
      step: 2,
      title: "Peer Verification",
      description: "Two community members who witnessed or benefited from the work verify its completion and quality."
    },
    {
      step: 3,
      title: "Smart Contract Processing",
      description: "Once verified, smart contracts automatically calculate appropriate SUZHI tokens based on work type, skill level, and time invested."
    },
    {
      step: 4,
      title: "Token Distribution",
      description: "Tokens are instantly deposited to your wallet. No delays, no bureaucracy — just fair, transparent compensation."
    }
  ];

  const requirements = [
    "Alignment with SUZHI's values of sustainability, equality, and consciousness",
    "Willingness to participate in community governance and decision-making",
    "Commitment to contribute meaningful work to the collective",
    "Respect for all community members and natural ecosystems",
    "Openness to learning and personal growth",
    "Financial stability for initial transition period (3-6 months recommended)"
  ];

  return (
    <div className="min-h-screen">
      <Navigation />

      <Hero
        title="Citizen Model"
        subtitle="Earn, Contribute, and Thrive — The Proof of Contribution System"
        height="medium"
        image={citizenHero}
      />

      {/* Introduction */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <UserPlus className="h-12 w-12 text-primary mx-auto mb-4" />
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              SUZHI Citizen Model
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              In SUZHI, citizenship is earned, not bought.
              We operate on a "Proof of Contribution" model where your value to the community
              is measured by what you give, not what you own.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {contributionTypes.map((type, index) => (
              <Card key={index} className="shadow-luxury hover:shadow-gold transition-smooth">
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <type.icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>{type.title}</CardTitle>
                  <CardDescription>{type.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <p className="text-sm font-semibold text-foreground mb-2">Examples:</p>
                    <ul className="space-y-1">
                      {type.examples.map((example, idx) => (
                        <li key={idx} className="text-sm text-muted-foreground flex items-center">
                          <CheckCircle className="h-4 w-4 text-primary mr-2 flex-shrink-0" />
                          {example}
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Verification Process */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <Clock className="h-12 w-12 text-primary mx-auto mb-4" />
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                How Work is Verified
              </h2>
              <p className="text-lg text-muted-foreground">
                Transparency and fairness are at the heart of our verification system.
              </p>
            </div>

            <div className="space-y-6">
              {verificationSteps.map((item, index) => (
                <Card key={index} className="shadow-soft">
                  <CardContent className="p-8">
                    <div className="flex items-start">
                      <div className="bg-primary text-primary-foreground w-12 h-12 rounded-full flex items-center justify-center mr-6 flex-shrink-0 text-xl font-bold">
                        {item.step}
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-foreground mb-3">{item.title}</h3>
                        <p className="text-muted-foreground leading-relaxed">{item.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Token Calculation */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <Award className="h-12 w-12 text-primary mx-auto mb-4" />
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Token Calculation
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                SUZHI tokens are calculated based on multiple factors to ensure fair compensation.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="shadow-luxury">
                <CardContent className="p-6 text-center">
                  <div className="text-4xl font-bold text-primary mb-2">Time</div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">Hours Invested</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Base compensation calculated by time spent on verified work.
                  </p>
                </CardContent>
              </Card>

              <Card className="shadow-luxury">
                <CardContent className="p-6 text-center">
                  <div className="text-4xl font-bold text-primary mb-2">Skill</div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">Expertise Level</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Specialized skills earn multipliers based on training required.
                  </p>
                </CardContent>
              </Card>

              <Card className="shadow-luxury">
                <CardContent className="p-6 text-center">
                  <div className="text-4xl font-bold text-primary mb-2">Impact</div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">Community Value</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Work that benefits many or has lasting impact earns bonuses.
                  </p>
                </CardContent>
              </Card>
            </div>

            <Card className="mt-8 shadow-glow border-primary/30">
              <CardContent className="p-8">
                <h3 className="text-xl font-bold text-foreground mb-4 text-center">Example Calculation</h3>
                <div className="space-y-3 text-muted-foreground">
                  <p className="flex justify-between">
                    <span>Base Rate (5 hours of farming):</span>
                    <span className="font-semibold">50 SUZHI</span>
                  </p>
                  <p className="flex justify-between">
                    <span>Skill Multiplier (organic certification):</span>
                    <span className="font-semibold">× 1.2</span>
                  </p>
                  <p className="flex justify-between">
                    <span>Impact Bonus (feeds 20 people):</span>
                    <span className="font-semibold">+10 SUZHI</span>
                  </p>
                  <div className="border-t border-border pt-3 mt-3">
                    <p className="flex justify-between text-lg font-bold text-foreground">
                      <span>Total Earned:</span>
                      <span className="text-primary">70 SUZHI</span>
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Becoming a Citizen */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <UserPlus className="h-12 w-12 text-primary mx-auto mb-4" />
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Path to Citizenship
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Becoming a citizen of SUZHI is a journey of alignment and commitment
              </p>
            </div>

            <Card className="shadow-soft mb-8">
              <CardHeader>
                <CardTitle>Requirements</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {requirements.map((req, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-primary mr-3 flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground leading-relaxed">{req}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <div className="text-center">
              <Link to="/join">
                <Button size="lg" className="text-lg px-8">
                  Apply to Become a Citizen
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

export default Citizen;
