import { Mail, MapPin, Phone, Send, MessageSquare } from "lucide-react";
import { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";

const Join = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    interest: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // In a real application, this would send to a backend
    toast({
      title: "Application Submitted!",
      description: "Thank you for your interest in ANANDAVANAM. We'll review your application and get back to you within 5-7 business days.",
    });

    // Reset form
    setFormData({
      name: "",
      email: "",
      phone: "",
      interest: "",
      message: ""
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen">
      <Navigation />

      <Hero
        title="Join ANANDAVANAM"
        subtitle="Take the First Step Toward a Sustainable, Conscious Future"
        height="medium"
      />

      {/* Introduction */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <MessageSquare className="h-12 w-12 text-primary mx-auto mb-4" />
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Ready to Join the Movement?
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Whether you want to become a citizen, partner with us, invest in our vision, or simply
              learn more about what we're building, we'd love to hear from you. Fill out the form below,
              and our team will get back to you as soon as possible.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20 gradient-peace">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Form */}
            <Card className="shadow-glow">
              <CardHeader>
                <CardTitle className="text-2xl">Get in Touch</CardTitle>
                <CardDescription>
                  Fill out the form and we'll respond within 5-7 business days
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name *</Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your full name"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address *</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="your.email@example.com"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+1 (555) 123-4567"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="interest">I'm Interested In *</Label>
                    <Select
                      value={formData.interest}
                      onValueChange={(value) => setFormData({ ...formData, interest: value })}
                      required
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select your interest" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="citizen">Becoming a Citizen</SelectItem>
                        <SelectItem value="partner">Partnership Opportunities</SelectItem>
                        <SelectItem value="invest">Investment Opportunities</SelectItem>
                        <SelectItem value="visit">Visiting the Community</SelectItem>
                        <SelectItem value="volunteer">Volunteering</SelectItem>
                        <SelectItem value="research">Research Collaboration</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Your Message *</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us about yourself, your interest in ANANDAVANAM, relevant experience, and any questions you have..."
                      rows={6}
                      required
                    />
                  </div>

                  <Button type="submit" size="lg" className="w-full">
                    <Send className="mr-2 h-5 w-5" />
                    Submit Application
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Contact Info */}
            <div className="space-y-6">
              <Card className="shadow-soft">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="bg-primary/10 p-3 rounded-lg">
                      <Mail className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-foreground mb-2">Email Us</h3>
                      <a
                        href="mailto:connect@anandavanam.eco"
                        className="text-primary hover:underline transition-smooth"
                      >
                        connect@anandavanam.eco
                      </a>
                      <p className="text-sm text-muted-foreground mt-1">
                        We respond within 5-7 business days
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="shadow-soft">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="bg-primary/10 p-3 rounded-lg">
                      <Phone className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-foreground mb-2">Call Us</h3>
                      <p className="text-foreground">+91 (0) 123-456-7890</p>
                      <p className="text-sm text-muted-foreground mt-1">
                        Mon-Fri, 9:00 AM - 5:00 PM IST
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="shadow-soft">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="bg-primary/10 p-3 rounded-lg">
                      <MapPin className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-foreground mb-2">Visit Us</h3>
                      <p className="text-muted-foreground">
                        50-Acre Eco City Zone<br />
                        Sustainable Living District<br />
                        [Location TBD]
                      </p>
                      <p className="text-sm text-muted-foreground mt-2">
                        Visits by appointment only
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="shadow-soft bg-card">
                <CardContent className="p-6">
                  <h3 className="text-lg font-bold text-foreground mb-3">What Happens Next?</h3>
                  <ol className="space-y-3 text-muted-foreground">
                    <li className="flex items-start">
                      <span className="bg-primary text-primary-foreground w-6 h-6 rounded-full flex items-center justify-center mr-3 flex-shrink-0 text-sm font-bold">1</span>
                      <span>We review your application and assess fit with community values</span>
                    </li>
                    <li className="flex items-start">
                      <span className="bg-primary text-primary-foreground w-6 h-6 rounded-full flex items-center justify-center mr-3 flex-shrink-0 text-sm font-bold">2</span>
                      <span>You'll receive an email within 5-7 days with next steps</span>
                    </li>
                    <li className="flex items-start">
                      <span className="bg-primary text-primary-foreground w-6 h-6 rounded-full flex items-center justify-center mr-3 flex-shrink-0 text-sm font-bold">3</span>
                      <span>If it's a good match, we schedule a video call to discuss further</span>
                    </li>
                    <li className="flex items-start">
                      <span className="bg-primary text-primary-foreground w-6 h-6 rounded-full flex items-center justify-center mr-3 flex-shrink-0 text-sm font-bold">4</span>
                      <span>Final decisions (especially citizenship) go through DAO voting</span>
                    </li>
                  </ol>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Frequently Asked Questions
              </h2>
            </div>

            <div className="space-y-4">
              <Card className="shadow-soft">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-foreground mb-3">
                    Do I need blockchain knowledge to become a citizen?
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    No! While we use blockchain for governance and economics, you don't need technical
                    knowledge. We provide training and user-friendly interfaces for all citizens.
                  </p>
                </CardContent>
              </Card>

              <Card className="shadow-soft">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-foreground mb-3">
                    What's the initial investment required?
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Citizens need financial stability for the first 3-6 months while they integrate into
                    the community. After that, your work earns ANVD tokens for all needs. Specific amounts
                    are discussed during the application process.
                  </p>
                </CardContent>
              </Card>

              <Card className="shadow-soft">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-foreground mb-3">
                    Can I visit before committing?
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Yes! We encourage prospective citizens to visit for a week or two to experience
                    community life firsthand. Contact us to arrange a visit.
                  </p>
                </CardContent>
              </Card>

              <Card className="shadow-soft">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-foreground mb-3">
                    Is this suitable for families with children?
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Absolutely! We have holistic education programs, safe spaces for children, and a
                    community that supports parents. Many families find it ideal for raising conscious,
                    connected children.
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

export default Join;
