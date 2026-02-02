import { Calendar, CheckCircle2, Circle, Clock } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import { Card, CardContent } from "@/components/ui/card";
import roadmapHero from "@/assets/roadmap-hero.jpg";

const Roadmap = () => {
  const phases = [
    {
      phase: "Phase 1",
      timeline: "Q1-Q2 2025",
      status: "in-progress",
      title: "Foundation & Planning",
      milestones: [
        { completed: true, text: "Whitepaper publication and community building" },
        { completed: true, text: "Land acquisition and legal structure formation" },
        { completed: false, text: "Initial funding through token pre-sale" },
        { completed: false, text: "Architectural planning and permitting" }
      ]
    },
    {
      phase: "Phase 2",
      timeline: "Q3-Q4 2025",
      status: "upcoming",
      title: "Infrastructure Development",
      milestones: [
        { completed: false, text: "Solar panel installation and energy infrastructure" },
        { completed: false, text: "Water harvesting and treatment systems" },
        { completed: false, text: "Basic residential units construction (20 homes)" },
        { completed: false, text: "Organic farming operations begin" }
      ]
    },
    {
      phase: "Phase 3",
      timeline: "Q1-Q2 2026",
      status: "upcoming",
      title: "Community Launch",
      milestones: [
        { completed: false, text: "First 50 citizens welcomed" },
        { completed: false, text: "DAO governance officially activated" },
        { completed: false, text: "SUZHI token mainnet launch" },
        { completed: false, text: "Community center and meditation spaces opened" }
      ]
    },
    {
      phase: "Phase 4",
      timeline: "Q3-Q4 2026",
      status: "upcoming",
      title: "Growth & Expansion",
      milestones: [
        { completed: false, text: "Expand to 100+ citizens" },
        { completed: false, text: "Launch educational programs and workshops" },
        { completed: false, text: "Establish partnerships with other eco-communities" },
        { completed: false, text: "Achieve 90% food self-sufficiency" }
      ]
    },
    {
      phase: "Phase 5",
      timeline: "2027",
      status: "future",
      title: "Maturity & Replication",
      milestones: [
        { completed: false, text: "Full operational capacity with 150-200 citizens" },
        { completed: false, text: "Research center and innovation hub launched" },
        { completed: false, text: "Blueprint sharing for replication in other locations" },
        { completed: false, text: "Carbon negative certification achieved" }
      ]
    },
    {
      phase: "Long-Term Vision",
      timeline: "2028-2124",
      status: "future",
      title: "Legacy & Network",
      milestones: [
        { completed: false, text: "Network of 10+ connected eco-cities globally" },
        { completed: false, text: "Continuous innovation in sustainable living" },
        { completed: false, text: "Educational programs training thousands annually" },
        { completed: false, text: "Model for 22nd-century human settlements" }
      ]
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "in-progress":
        return "border-primary bg-primary/5";
      case "upcoming":
        return "border-accent bg-accent/5";
      case "future":
        return "border-muted bg-muted/5";
      default:
        return "border-border";
    }
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "in-progress":
        return <span className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-xs font-semibold">In Progress</span>;
      case "upcoming":
        return <span className="bg-accent text-accent-foreground px-3 py-1 rounded-full text-xs font-semibold">Upcoming</span>;
      case "future":
        return <span className="bg-muted text-muted-foreground px-3 py-1 rounded-full text-xs font-semibold">Future</span>;
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen">
      <Navigation />

      <Hero
        title="Roadmap"
        subtitle="Our Journey from Vision to Reality — Building the Future, One Milestone at a Time"
        height="medium"
        image={roadmapHero}
      />

      {/* Introduction */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <Calendar className="h-12 w-12 text-primary mx-auto mb-4" />
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              The Path Forward
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Building a self-sustaining spiritual eco-city is an ambitious undertaking that requires
              careful planning, community input, and patient execution. Our roadmap balances pragmatic
              milestones with visionary long-term goals. Progress is tracked transparently on the
              blockchain, and all major decisions go through DAO governance.
            </p>
          </div>
        </div>
      </section>

      {/* Roadmap Timeline */}
      <section className="py-20 gradient-peace">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            {phases.map((phase, index) => (
              <div key={index} className="mb-12 last:mb-0">
                <Card className={`shadow-soft border-2 ${getStatusColor(phase.status)} transition-smooth hover:shadow-glow`}>
                  <CardContent className="p-8">
                    {/* Phase Header */}
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
                      <div>
                        <div className="flex items-center space-x-3 mb-2">
                          <h3 className="text-2xl font-bold text-foreground">{phase.phase}</h3>
                          {getStatusBadge(phase.status)}
                        </div>
                        <p className="text-xl font-semibold text-primary mb-1">{phase.title}</p>
                        <div className="flex items-center text-muted-foreground">
                          <Clock className="h-4 w-4 mr-2" />
                          <span className="text-sm">{phase.timeline}</span>
                        </div>
                      </div>
                    </div>

                    {/* Milestones */}
                    <div className="space-y-3">
                      {phase.milestones.map((milestone, idx) => (
                        <div key={idx} className="flex items-start space-x-3 p-3 rounded-lg hover:bg-background/50 transition-smooth">
                          {milestone.completed ? (
                            <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                          ) : (
                            <Circle className="h-5 w-5 text-muted-foreground flex-shrink-0 mt-0.5" />
                          )}
                          <p className={`leading-relaxed ${milestone.completed ? 'text-foreground font-medium' : 'text-muted-foreground'}`}>
                            {milestone.text}
                          </p>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                {/* Connector Line */}
                {index < phases.length - 1 && (
                  <div className="flex justify-center my-6">
                    <div className="w-0.5 h-12 bg-border" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Dates */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Key Milestones
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card className="shadow-soft text-center">
                <CardContent className="p-6">
                  <div className="text-4xl font-bold text-primary mb-2">2025</div>
                  <p className="text-lg font-semibold text-foreground mb-2">Foundation Year</p>
                  <p className="text-muted-foreground text-sm">Land, infrastructure, and legal framework established</p>
                </CardContent>
              </Card>

              <Card className="shadow-soft text-center">
                <CardContent className="p-6">
                  <div className="text-4xl font-bold text-primary mb-2">2026</div>
                  <p className="text-lg font-semibold text-foreground mb-2">Community Launch</p>
                  <p className="text-muted-foreground text-sm">First citizens arrive, DAO activates, city comes alive</p>
                </CardContent>
              </Card>

              <Card className="shadow-soft text-center">
                <CardContent className="p-6">
                  <div className="text-4xl font-bold text-primary mb-2">2027</div>
                  <p className="text-lg font-semibold text-foreground mb-2">Full Operation</p>
                  <p className="text-muted-foreground text-sm">Self-sufficient community thriving with 150+ citizens</p>
                </CardContent>
              </Card>

              <Card className="shadow-soft text-center">
                <CardContent className="p-6">
                  <div className="text-4xl font-bold text-primary mb-2">2030</div>
                  <p className="text-lg font-semibold text-foreground mb-2">Expansion Network</p>
                  <p className="text-muted-foreground text-sm">Multiple eco-cities connected and collaborating</p>
                </CardContent>
              </Card>

              <Card className="shadow-soft text-center">
                <CardContent className="p-6">
                  <div className="text-4xl font-bold text-primary mb-2">2050</div>
                  <p className="text-lg font-semibold text-foreground mb-2">Global Movement</p>
                  <p className="text-muted-foreground text-sm">Hundreds of communities worldwide following our model</p>
                </CardContent>
              </Card>

              <Card className="shadow-soft text-center">
                <CardContent className="p-6">
                  <div className="text-4xl font-bold text-primary mb-2">2124</div>
                  <p className="text-lg font-semibold text-foreground mb-2">Centennial Vision</p>
                  <p className="text-muted-foreground text-sm">A proven model for sustainable human civilization</p>
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

export default Roadmap;
