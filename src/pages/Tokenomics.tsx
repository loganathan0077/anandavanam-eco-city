import { Coins, TrendingUp, Users, Shield, Zap, Target } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import tokenomicsBg from "@/assets/tokenomics-bg.jpg";

const Tokenomics = () => {
  const tokenFeatures = [
    {
      icon: Coins,
      title: "SUZHI Token",
      description: "Our native blockchain token serves as the primary currency within SUZHI. Earned through contribution, spent on goods and services."
    },
    {
      icon: TrendingUp,
      title: "Proof of Contribution",
      description: "Work verification system ensures fair token distribution. Every hour of meaningful work equals tokens based on skill and community need."
    },
    {
      icon: Shield,
      title: "Stable & Secure",
      description: "Built on proven blockchain infrastructure with transparent smart contracts. Immune to inflation and external manipulation."
    }
  ];

  const distribution = [
    { category: "Community Pool", percentage: 40, description: "Reserved for ongoing operations, emergency funds, and community projects" },
    { category: "Founder Allocation", percentage: 15, description: "For initial development, land acquisition, and infrastructure setup" },
    { category: "Citizens' Earnings", percentage: 35, description: "Distributed to citizens based on their verified contributions" },
    { category: "Development Fund", percentage: 10, description: "For continuous innovation, research, and expansion projects" }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />

      <Hero
        title="SUZHI Tokenomics"
        subtitle="A Regenerative Economic Model for a Thriving Community"
        height="medium"
        image={tokenomicsBg}
      />

      {/* Token Overview */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <Coins className="h-12 w-12 text-primary mx-auto mb-4" />
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              The SUZHI Token Economy
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              At the heart of SUZHI lies the SUZHI token — a digital currency designed
              to incentivize sustainable behavior, reward contribution, and facilitate fair trade.
              Unlike traditional fiat currencies, SUZHI is backed by real value: the land, resources,
              and productive output of our eco-city.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {tokenFeatures.map((feature, index) => (
              <Card key={index} className="shadow-soft hover:shadow-glow transition-smooth">
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

      {/* How It Works */}
      <section className="py-20 gradient-peace">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <Zap className="h-12 w-12 text-primary mx-auto mb-4" />
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                How SUZHI Works
              </h2>
            </div>

            <div className="space-y-8">
              <Card className="shadow-soft">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-foreground mb-4 flex items-center">
                    <span className="bg-primary text-primary-foreground w-10 h-10 rounded-full flex items-center justify-center mr-4">1</span>
                    Earn Through Contribution
                  </h3>
                  <p className="text-muted-foreground leading-relaxed pl-14">
                    Citizens earn SUZHI tokens by contributing to the community. This includes farming,
                    building, teaching, creating art, maintaining systems, caring for others, and any
                    work that adds value. The Proof of Contribution system tracks and verifies all work
                    through smart contracts, ensuring fair compensation.
                  </p>
                </CardContent>
              </Card>

              <Card className="shadow-soft">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-foreground mb-4 flex items-center">
                    <span className="bg-primary text-primary-foreground w-10 h-10 rounded-full flex items-center justify-center mr-4">2</span>
                    Spend Within the Ecosystem
                  </h3>
                  <p className="text-muted-foreground leading-relaxed pl-14">
                    SUZHI tokens can be used to purchase goods and services within SUZHI. From fresh
                    produce at the community market to housing credits, education programs, and wellness
                    services — all can be accessed using tokens. External purchases are facilitated through
                    a community-managed exchange.
                  </p>
                </CardContent>
              </Card>

              <Card className="shadow-soft">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-foreground mb-4 flex items-center">
                    <span className="bg-primary text-primary-foreground w-10 h-10 rounded-full flex items-center justify-center mr-4">3</span>
                    Participate in Governance
                  </h3>
                  <p className="text-muted-foreground leading-relaxed pl-14">
                    Token holders have voting rights in the DAO. The more you contribute and earn, the
                    more influence you have on community decisions. This incentivizes active participation
                    and ensures those most invested in the community have proportional say in its direction.
                  </p>
                </CardContent>
              </Card>

              <Card className="shadow-soft">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-foreground mb-4 flex items-center">
                    <span className="bg-primary text-primary-foreground w-10 h-10 rounded-full flex items-center justify-center mr-4">4</span>
                    Save and Grow
                  </h3>
                  <p className="text-muted-foreground leading-relaxed pl-14">
                    Unlike inflationary fiat currencies, SUZHI maintains stable value through algorithmic
                    supply management. Citizens can save tokens knowing their purchasing power is protected.
                    As the community grows and productivity increases, token value appreciates organically.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Token Distribution */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <Target className="h-12 w-12 text-primary mx-auto mb-4" />
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Token Distribution
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Total Supply: 10,000,000 SUZHI • Fair and Transparent Allocation
              </p>
            </div>

            <div className="space-y-6">
              {distribution.map((item, index) => (
                <Card key={index} className="shadow-soft hover:shadow-glow transition-smooth">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <h3 className="text-xl font-bold text-foreground mb-2">{item.category}</h3>
                        <p className="text-muted-foreground text-sm leading-relaxed">{item.description}</p>
                      </div>
                      <div className="text-right ml-4">
                        <div className="text-3xl font-bold text-primary">{item.percentage}%</div>
                        <div className="text-sm text-muted-foreground">
                          {(10000000 * item.percentage / 100).toLocaleString()} SUZHI
                        </div>
                      </div>
                    </div>
                    <div className="w-full bg-muted rounded-full h-2 mt-4">
                      <div
                        className="gradient-nature h-2 rounded-full transition-all duration-1000"
                        style={{ width: `${item.percentage}%` }}
                      />
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Economic Principles */}
      <section className="py-20 gradient-peace">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <Users className="h-12 w-12 text-primary mx-auto mb-4" />
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Economic Principles
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
              <Card className="shadow-soft">
                <CardContent className="p-6 text-left">
                  <h3 className="text-xl font-bold text-foreground mb-3">No Inflation</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Fixed token supply prevents devaluation. Your earnings maintain purchasing power over time.
                  </p>
                </CardContent>
              </Card>

              <Card className="shadow-soft">
                <CardContent className="p-6 text-left">
                  <h3 className="text-xl font-bold text-foreground mb-3">Fair Distribution</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Tokens are earned through verified work, not speculation or initial wealth advantages.
                  </p>
                </CardContent>
              </Card>

              <Card className="shadow-soft">
                <CardContent className="p-6 text-left">
                  <h3 className="text-xl font-bold text-foreground mb-3">Transparent Supply</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    All token creation, distribution, and spending is recorded immutably on the blockchain.
                  </p>
                </CardContent>
              </Card>

              <Card className="shadow-soft">
                <CardContent className="p-6 text-left">
                  <h3 className="text-xl font-bold text-foreground mb-3">Community Control</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Economic policies are decided through DAO governance, not by central authorities.
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

export default Tokenomics;
