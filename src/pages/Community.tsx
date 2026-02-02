import { Heart, Users, Sparkles, Calendar, Music, BookOpen } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import communityImage from "@/assets/community-life.jpg";

const Community = () => {
  const dailyLife = [
    {
      icon: Calendar,
      title: "Daily Rhythm",
      description: "Days begin with optional sunrise meditation, followed by community breakfast. Work shifts vary based on skills and needs. Evenings feature shared meals, workshops, and relaxation."
    },
    {
      icon: Heart,
      title: "Mutual Care",
      description: "Healthcare, childcare, eldercare, and mental wellness support are woven into community life. We care for each other holistically."
    },
    {
      icon: Music,
      title: "Culture & Arts",
      description: "Regular music circles, art exhibitions, storytelling nights, and cultural celebrations keep our spirits alive and creativity flowing."
    },
    {
      icon: BookOpen,
      title: "Continuous Learning",
      description: "Weekly workshops on sustainable living, blockchain technology, spiritual practices, permaculture, and personal development."
    }
  ];

  const events = [
    {
      title: "Full Moon Gatherings",
      frequency: "Monthly",
      description: "Community meditation, music, and reflection under the full moon. A sacred tradition connecting us with natural cycles."
    },
    {
      title: "Harvest Festivals",
      frequency: "Seasonal",
      description: "Celebrating the abundance of each season with feasts, performances, and gratitude rituals."
    },
    {
      title: "Skill-Sharing Workshops",
      frequency: "Weekly",
      description: "Citizens teach each other everything from solar panel maintenance to pottery to blockchain development."
    },
    {
      title: "Community Councils",
      frequency: "Bi-weekly",
      description: "In-person DAO meetings where citizens discuss proposals, share concerns, and make decisions together."
    },
    {
      title: "Wellness Retreats",
      frequency: "Quarterly",
      description: "Intensive periods focused on meditation, yoga, healing practices, and spiritual deepening."
    },
    {
      title: "Children's Programs",
      frequency: "Daily",
      description: "Holistic education for children emphasizing creativity, nature connection, and conscious living."
    }
  ];

  const spaces = [
    {
      name: "Meditation Hall",
      description: "Peaceful sanctuary with natural acoustics for group meditations, yoga, and spiritual practices."
    },
    {
      name: "Community Kitchen",
      description: "Large, well-equipped kitchen where citizens prepare shared meals from our organic harvests."
    },
    {
      name: "Maker Space",
      description: "Workshop area with tools for woodworking, crafts, repairs, and creative projects."
    },
    {
      name: "Library & Learning Center",
      description: "Extensive collection of books on sustainability, spirituality, technology, and permaculture."
    },
    {
      name: "Amphitheater",
      description: "Outdoor performance space for concerts, gatherings, ceremonies, and stargazing."
    },
    {
      name: "Wellness Center",
      description: "Facilities for healing, therapy, massage, and holistic health consultations."
    }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />

      <Hero
        title="Community Life in SUZHI"
        subtitle="Living Together in Harmony — Where Every Day is Sacred"
        height="medium"
        image={communityImage}
      />

      {/* Introduction */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <Users className="h-12 w-12 text-primary mx-auto mb-4" />
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              A Day in SUZHI
            </h2>
            <p className="text-lg text-muted-foreground mb-8 text-center max-w-3xl mx-auto">
              Life in SUZHI is designed to be vibrant, connected, and deeply fulfilling.
              We've reimagined daily living to prioritize human connection, health, and harmony with nature.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {dailyLife.map((aspect, index) => (
              <Card key={index} className="shadow-luxury hover:shadow-gold transition-smooth">
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <aspect.icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>{aspect.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="leading-relaxed">{aspect.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Sample Schedule */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <Calendar className="h-12 w-12 text-primary mx-auto mb-4" />
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Typical Daily Flow
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                While every day is unique, here's a glimpse of what community life might look like
              </p>
            </div>

            <Card className="shadow-luxury">
              <CardContent className="p-8">
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="bg-primary/10 px-4 py-2 rounded-lg mr-6 flex-shrink-0 min-w-[100px] text-center">
                      <div className="text-lg font-bold text-primary">6:00 AM</div>
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-foreground mb-2">Sunrise Meditation (Optional)</h3>
                      <p className="text-muted-foreground">Gentle start to the day with group meditation and breathing exercises</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="bg-primary/10 px-4 py-2 rounded-lg mr-6 flex-shrink-0 min-w-[100px] text-center">
                      <div className="text-lg font-bold text-primary">7:30 AM</div>
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-foreground mb-2">Community Breakfast</h3>
                      <p className="text-muted-foreground">Fresh organic food, conversation, and planning the day ahead</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="bg-primary/10 px-4 py-2 rounded-lg mr-6 flex-shrink-0 min-w-[100px] text-center">
                      <div className="text-lg font-bold text-primary">9:00 AM</div>
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-foreground mb-2">Morning Work Shift</h3>
                      <p className="text-muted-foreground">Farming, building, teaching, creating — contributing based on skills and rotation</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="bg-primary/10 px-4 py-2 rounded-lg mr-6 flex-shrink-0 min-w-[100px] text-center">
                      <div className="text-lg font-bold text-primary">1:00 PM</div>
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-foreground mb-2">Lunch & Rest</h3>
                      <p className="text-muted-foreground">Midday meal and siesta — respecting natural rhythms and energy levels</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="bg-primary/10 px-4 py-2 rounded-lg mr-6 flex-shrink-0 min-w-[100px] text-center">
                      <div className="text-lg font-bold text-primary">3:00 PM</div>
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-foreground mb-2">Afternoon Activities</h3>
                      <p className="text-muted-foreground">Workshops, personal projects, childcare, maintenance tasks, or creative pursuits</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="bg-primary/10 px-4 py-2 rounded-lg mr-6 flex-shrink-0 min-w-[100px] text-center">
                      <div className="text-lg font-bold text-primary">6:30 PM</div>
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-foreground mb-2">Community Dinner</h3>
                      <p className="text-muted-foreground">Shared evening meal with storytelling, music, and connection</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="bg-primary/10 px-4 py-2 rounded-lg mr-6 flex-shrink-0 min-w-[100px] text-center">
                      <div className="text-lg font-bold text-primary">8:00 PM</div>
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-foreground mb-2">Evening Programs</h3>
                      <p className="text-muted-foreground">Workshops, performances, DAO discussions, or simply relaxation under the stars</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Events & Celebrations */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <Sparkles className="h-12 w-12 text-primary mx-auto mb-4" />
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Events & Celebrations
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {events.map((event, index) => (
                <Card key={index} className="shadow-luxury hover:shadow-gold transition-smooth">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-3">
                      <h3 className="text-xl font-bold text-foreground">{event.title}</h3>
                      <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-xs font-semibold">
                        {event.frequency}
                      </span>
                    </div>
                    <p className="text-muted-foreground leading-relaxed">{event.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Community Spaces */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <Heart className="h-12 w-12 text-primary mx-auto mb-4" />
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Community Spaces
              </h2>
              <p className="text-lg text-muted-foreground">
                Thoughtfully designed areas for every aspect of community life
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {spaces.map((space, index) => (
                <Card key={index} className="shadow-luxury hover:shadow-gold transition-smooth">
                  <CardContent className="p-6">
                    <h3 className="text-lg font-bold text-foreground mb-3">{space.name}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{space.description}</p>
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

export default Community;
