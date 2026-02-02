import { Vote, Users, Shield, CheckCircle, FileText, TrendingUp } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";
import daoHero from "@/assets/dao-hero.jpg";

const DAO = () => {
  const governanceFeatures = [
    {
      icon: Vote,
      title: "One Token, One Vote",
      description: "Every SUZHI token represents voting power. The more you contribute to the community, the more influence you have."
    },
    {
      icon: Shield,
      title: "Transparent & Immutable",
      description: "All proposals, votes, and decisions are recorded on the blockchain. No hidden agendas, no manipulation."
    },
    {
      icon: CheckCircle,
      title: "Smart Contract Execution",
      description: "Approved proposals are automatically executed through smart contracts, eliminating bureaucratic delays."
    }
  ];

  const proposalTypes = [
    {
      title: "Budget Allocation",
      description: "Vote on how community funds are spent — infrastructure, education, healthcare, events, etc."
    },
    {
      title: "Policy Changes",
      description: "Propose and vote on community rules, regulations, and operational procedures."
    },
    {
      title: "New Projects",
      description: "Suggest new initiatives like renewable energy installations, educational programs, or cultural events."
    },
    {
      title: "Member Admission",
      description: "Community votes on accepting new citizens based on alignment with values and available capacity."
    },
    {
      title: "Resource Management",
      description: "Decide on land use, water distribution, food production priorities, and resource allocation."
    },
    {
      title: "Conflict Resolution",
      description: "Fair and transparent dispute resolution through community consensus when conflicts arise."
    }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />

      <Hero
        title="SUZHI Governance (DAO)"
        subtitle="Democratic Governance Powered by the People, for the People"
        height="medium"
        image={daoHero}
      >
        <div className="flex justify-center mt-8">
          <a href="https://anandavanamdao-7re.caffeine.xyz/" target="_blank" rel="noopener noreferrer">
            <Button size="lg" className="text-lg px-8 shadow-glow bg-primary hover:bg-primary/90 text-primary-foreground">
              Access DAO
              <ExternalLink className="ml-2 h-5 w-5" />
            </Button>
          </a>
        </div>
      </Hero>

      {/* Introduction */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <Users className="h-12 w-12 text-primary mx-auto mb-4" />
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Decentralized Autonomous Organization
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              SUZHI is governed by a Decentralized Autonomous Organization (DAO),
              ensuring that every decision — from budget allocation to community rules — is made
              transparently and democratically by its citizens. Every citizen has a voice, every vote counts,
              and every decision is recorded immutably.
            </p>
          </div>

          <div className="grid grid-cols-1 md://grid-cols-3 gap-6">
            {governanceFeatures.map((feature, index) => (
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

      {/* How It Works */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <FileText className="h-12 w-12 text-primary mx-auto mb-4" />
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                How Governance Works
              </h2>
            </div>

            <div className="space-y-6">
              <Card className="shadow-luxury">
                <CardContent className="p-8">
                  <div className="flex items-start">
                    <div className="bg-primary text-primary-foreground w-12 h-12 rounded-full flex items-center justify-center mr-6 flex-shrink-0 text-xl font-bold">
                      1
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-foreground mb-3">Proposal Submission</h3>
                      <p className="text-muted-foreground leading-relaxed">
                        Any citizen can submit a proposal to the DAO. Proposals must include a clear
                        description, expected outcomes, required resources, and implementation timeline.
                        A small token fee prevents spam submissions.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="shadow-luxury">
                <CardContent className="p-8">
                  <div className="flex items-start">
                    <div className="bg-primary text-primary-foreground w-12 h-12 rounded-full flex items-center justify-center mr-6 flex-shrink-0 text-xl font-bold">
                      2
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-foreground mb-3">Community Review</h3>
                      <p className="text-muted-foreground leading-relaxed">
                        Proposals enter a 7-day discussion period where citizens can ask questions, suggest
                        modifications, and debate merits. This ensures informed voting and community
                        consensus-building before formal voting begins.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="shadow-luxury">
                <CardContent className="p-8">
                  <div className="flex items-start">
                    <div className="bg-primary text-primary-foreground w-12 h-12 rounded-full flex items-center justify-center mr-6 flex-shrink-0 text-xl font-bold">
                      3
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-foreground mb-3">Voting Period</h3>
                      <p className="text-muted-foreground leading-relaxed">
                        Citizens cast their votes using their SUZHI tokens. Voting power is proportional
                        to token holdings, incentivizing active contribution. The voting period lasts
                        5 days, and all votes are permanently recorded on the blockchain.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="shadow-luxury">
                <CardContent className="p-8">
                  <div className="flex items-start">
                    <div className="bg-primary text-primary-foreground w-12 h-12 rounded-full flex items-center justify-center mr-6 flex-shrink-0 text-xl font-bold">
                      4
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-foreground mb-3">Execution</h3>
                      <p className="text-muted-foreground leading-relaxed">
                        If a proposal receives majority approval (over 50% of votes), it's automatically
                        executed by smart contracts. Budget allocations happen instantly, policies are
                        updated, and implementation begins. No bureaucratic delays, no gatekeepers.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Proposal Types */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <TrendingUp className="h-12 w-12 text-primary mx-auto mb-4" />
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                What Citizens Can Vote On
              </h2>
              <p className="text-lg text-muted-foreground">
                The DAO governs virtually every aspect of community life — from finances to philosophy.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {proposalTypes.map((type, index) => (
                <Card key={index} className="shadow-luxury hover:shadow-gold transition-smooth">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold text-foreground mb-3">{type.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{type.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Governance Principles */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <Shield className="h-12 w-12 text-primary mx-auto mb-4" />
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Governance Principles
              </h2>
            </div>

            <div className="space-y-4">
              {[
                "Transparency: All proposals, votes, and transactions are publicly visible on the blockchain.",
                "Inclusivity: Every citizen has the right to propose and vote, regardless of tenure or background.",
                "Accountability: Proposal creators are responsible for implementation and reporting outcomes.",
                "Flexibility: Governance rules themselves can be modified through DAO proposals.",
                "Protection: Emergency protocols exist for urgent situations requiring rapid response.",
                "Education: Regular workshops ensure all citizens understand how to participate effectively."
              ].map((principle, index) => (
                <Card key={index} className="shadow-soft">
                  <CardContent className="p-6 flex items-start">
                    <CheckCircle className="h-6 w-6 text-primary mr-4 flex-shrink-0 mt-1" />
                    <p className="text-muted-foreground leading-relaxed">{principle}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default DAO;
