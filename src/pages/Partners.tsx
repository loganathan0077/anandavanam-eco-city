import { Handshake, TrendingUp, Globe, Lightbulb, Award, Target } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Partners = () => {
  const partnershipTypes = [
    {
      icon: Globe,
      title: "Eco-Communities",
      description: "Connect with other sustainable communities worldwide. Share knowledge, resources, and best practices for regenerative living.",
      benefits: ["Knowledge exchange", "Resource sharing", "Joint advocacy", "Collaborative projects"]
    },
    {
      icon: Lightbulb,
      title: "Technology Partners",
      description: "Collaborate with blockchain developers, renewable energy companies, and sustainable tech innovators.",
      benefits: ["Technical expertise", "Infrastructure support", "Innovation opportunities", "Pilot programs"]
    },
    {
      icon: TrendingUp,
      title: "Impact Investors",
      description: "Partner with investors who prioritize sustainability and social impact over pure profit.",
      benefits: ["Funding opportunities", "Strategic guidance", "Network access", "Credibility boost"]
    },
    {
      icon: Award,
      title: "Educational Institutions",
      description: "Work with universities and research centers studying sustainable living and decentralized governance.",
      benefits: ["Research collaboration", "Student programs", "Academic validation", "Grant opportunities"]
    }
  ];

  const benefits = [
    {
      title: "Access to Innovation",
      description: "Be part of cutting-edge experiments in sustainable living, blockchain governance, and community economics."
    },
    {
      title: "Real-World Testing",
      description: "Test your technologies, products, or services in a live, committed community setting with detailed feedback."
    },
    {
      title: "Brand Alignment",
      description: "Associate your organization with a groundbreaking project focused on sustainability and social good."
    },
    {
      title: "Knowledge Co-Creation",
      description: "Contribute to and learn from a unique experiment that could shape future human settlements."
    },
    {
      title: "Network Effects",
      description: "Connect with other forward-thinking partners, investors, and communities in our growing ecosystem."
    },
    {
      title: "Documentation Rights",
      description: "Document and showcase your involvement in this pioneering project for marketing and research purposes."
    }
  ];

  const criteria = [
    "Alignment with our values of sustainability, equality, and consciousness",
    "Transparent operations and ethical business practices",
    "Genuine commitment to positive social and environmental impact",
    "Willingness to engage in collaborative, non-exploitative partnerships",
    "Long-term thinking and patience (we're building for 100 years)",
    "Respect for community autonomy and DAO governance decisions"
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      <Hero
        title="Partner With Us"
        subtitle="Building the Future Together — Collaborate on the World's First Blockchain Eco-City"
        height="medium"
      />

      {/* Introduction */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <Handshake className="h-12 w-12 text-primary mx-auto mb-4" />
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Why Partner with ANANDAVANAM?
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              ANANDAVANAM is more than an eco-city — it's a living laboratory for the future of 
              human civilization. We're seeking partners who share our vision of sustainability, 
              equality, and innovation. Whether you're a technology company, impact investor, 
              educational institution, or fellow eco-community, there are many ways we can 
              collaborate for mutual benefit and planetary good.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {partnershipTypes.map((type, index) => (
              <Card key={index} className="shadow-soft hover:shadow-glow transition-smooth">
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <type.icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>{type.title}</CardTitle>
                  <CardDescription>{type.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <p className="text-sm font-semibold text-foreground mb-2">Partnership Benefits:</p>
                    <ul className="space-y-1">
                      {type.benefits.map((benefit, idx) => (
                        <li key={idx} className="text-sm text-muted-foreground flex items-center">
                          <Target className="h-3 w-3 text-primary mr-2 flex-shrink-0" />
                          {benefit}
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

      {/* Benefits for Partners */}
      <section className="py-20 gradient-peace">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <TrendingUp className="h-12 w-12 text-primary mx-auto mb-4" />
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                What Partners Gain
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {benefits.map((benefit, index) => (
                <Card key={index} className="shadow-soft hover:shadow-glow transition-smooth">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold text-foreground mb-3">{benefit.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{benefit.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Current Opportunities */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <Lightbulb className="h-12 w-12 text-primary mx-auto mb-4" />
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Current Partnership Opportunities
              </h2>
            </div>

            <div className="space-y-6">
              <Card className="shadow-soft">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-foreground mb-3">Solar Energy Providers</h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Seeking partnerships with solar panel manufacturers and renewable energy companies 
                    for installation, maintenance, and ongoing innovation of our 100% solar infrastructure.
                  </p>
                  <div className="flex items-center space-x-2">
                    <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-semibold">Phase 1 Priority</span>
                    <span className="bg-accent/10 text-accent-foreground px-3 py-1 rounded-full text-sm font-semibold">Technical Partnership</span>
                  </div>
                </CardContent>
              </Card>

              <Card className="shadow-soft">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-foreground mb-3">Blockchain Developers</h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Looking for blockchain experts to help optimize our DAO infrastructure, smart contracts, 
                    and token economics. Opportunity to showcase your technology in a real-world community setting.
                  </p>
                  <div className="flex items-center space-x-2">
                    <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-semibold">Ongoing Need</span>
                    <span className="bg-accent/10 text-accent-foreground px-3 py-1 rounded-full text-sm font-semibold">Technology Partnership</span>
                  </div>
                </CardContent>
              </Card>

              <Card className="shadow-soft">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-foreground mb-3">Permaculture Organizations</h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Interested in collaborating with permaculture designers, organic farming experts, and 
                    regenerative agriculture advocates to maximize our 25-acre farming operations.
                  </p>
                  <div className="flex items-center space-x-2">
                    <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-semibold">Phase 2 Focus</span>
                    <span className="bg-accent/10 text-accent-foreground px-3 py-1 rounded-full text-sm font-semibold">Knowledge Partnership</span>
                  </div>
                </CardContent>
              </Card>

              <Card className="shadow-soft">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-foreground mb-3">Impact Investors & Funds</h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Seeking strategic investments from individuals and organizations committed to sustainability 
                    and social impact. Offering transparent returns through token appreciation and governance participation.
                  </p>
                  <div className="flex items-center space-x-2">
                    <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-semibold">Active Fundraising</span>
                    <span className="bg-accent/10 text-accent-foreground px-3 py-1 rounded-full text-sm font-semibold">Financial Partnership</span>
                  </div>
                </CardContent>
              </Card>

              <Card className="shadow-soft">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-foreground mb-3">Research Universities</h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Partner with us for research on sustainable living, decentralized governance, community 
                    economics, and alternative social structures. Opportunity for publications and student projects.
                  </p>
                  <div className="flex items-center space-x-2">
                    <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-semibold">Long-term Opportunity</span>
                    <span className="bg-accent/10 text-accent-foreground px-3 py-1 rounded-full text-sm font-semibold">Academic Partnership</span>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Partnership Criteria */}
      <section className="py-20 gradient-peace">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <Award className="h-12 w-12 text-primary mx-auto mb-4" />
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Partnership Criteria
              </h2>
              <p className="text-lg text-muted-foreground">
                We carefully select partners who share our values and long-term vision
              </p>
            </div>

            <Card className="shadow-soft">
              <CardContent className="p-8">
                <ul className="space-y-4">
                  {criteria.map((criterion, index) => (
                    <li key={index} className="flex items-start">
                      <Target className="h-5 w-5 text-primary mr-3 flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground leading-relaxed">{criterion}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Let's Build the Future Together
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              If you're interested in partnering with ANANDAVANAM, we'd love to hear from you. 
              Submit your partnership proposal through our contact form, and our team will review 
              it with the community. All major partnerships are approved through DAO governance.
            </p>
            <Link to="/join">
              <Button size="lg" className="text-lg px-8">
                Submit Partnership Proposal
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Partners;
