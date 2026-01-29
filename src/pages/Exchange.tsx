import { Link } from "react-router-dom";
import { ArrowDownUp, TrendingUp, Shield, Zap, ArrowRight, Sparkles, DollarSign, BarChart3 } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useState } from "react";

const Exchange = () => {
  const [fromToken, setFromToken] = useState("ANVD");
  const [toToken, setToToken] = useState("USDT");
  const [amount, setAmount] = useState("");

  const tokens = [
    { symbol: "ANVD", name: "Anandavanam Token", rate: 1 },
    { symbol: "ETH", name: "Ethereum", rate: 0.00025 },
    { symbol: "USDT", name: "Tether USD", rate: 1.5 },
    { symbol: "BTC", name: "Bitcoin", rate: 0.000015 },
  ];

  const calculateExchange = () => {
    if (!amount) return "0.00";
    const fromRate = tokens.find(t => t.symbol === fromToken)?.rate || 1;
    const toRate = tokens.find(t => t.symbol === toToken)?.rate || 1;
    const result = (parseFloat(amount) * fromRate) / toRate;
    return result.toFixed(6);
  };

  const features = [
    {
      icon: Shield,
      title: "Secure Trading",
      description: "Bank-level security with multi-signature wallets and encrypted transactions.",
    },
    {
      icon: Zap,
      title: "Instant Swaps",
      description: "Lightning-fast token exchanges with real-time price updates.",
    },
    {
      icon: DollarSign,
      title: "Low Fees",
      description: "Minimal transaction fees to maximize your trading profits.",
    },
    {
      icon: BarChart3,
      title: "Deep Liquidity",
      description: "Access to deep liquidity pools for seamless large trades.",
    },
  ];

  return (
    <div className="min-h-screen">
      <Navigation />

      <Hero
        title="ANVD Token Exchange"
        subtitle="Swap ANVD tokens seamlessly with major cryptocurrencies. Fast, secure, and transparent."
        showCTA={false}
        height="medium"
        image="https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=1920&q=80"
      />

      {/* Exchange Interface */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            {/* Visual Image */}
            <div className="order-2 lg:order-1 animate-slide-up">
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1621761191319-c6fb62004040?w=800&q=80"
                  alt="Cryptocurrency Trading"
                  className="rounded-2xl shadow-intense w-full"
                />
                <div className="absolute inset-0 gradient-glow rounded-2xl opacity-30" />
              </div>
            </div>

            {/* Swap Card */}
            <div className="order-1 lg:order-2">
              <Card className="shadow-intense border-2 border-primary/20 animate-slide-up">
                <CardHeader className="gradient-sunshine text-white rounded-t-lg">
                  <div className="flex items-center justify-center mb-2">
                    <ArrowDownUp className="h-8 w-8" />
                  </div>
                  <CardTitle className="text-3xl text-center">Token Swap</CardTitle>
                  <CardDescription className="text-white/90 text-center">
                    Exchange your tokens instantly
                  </CardDescription>
                </CardHeader>
                <CardContent className="p-8 space-y-6">
                  {/* From Token */}
                  <div className="space-y-2">
                    <Label htmlFor="from-amount" className="text-lg font-semibold">From</Label>
                    <div className="flex gap-3">
                      <Input
                        id="from-amount"
                        type="number"
                        placeholder="0.00"
                        value={amount}
                        onChange={(e) => setAmount(e.target.value)}
                        className="text-2xl h-14 border-2 border-primary/30 focus:border-primary"
                      />
                      <Select value={fromToken} onValueChange={setFromToken}>
                        <SelectTrigger className="w-[180px] h-14 border-2 border-primary/30">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          {tokens.map((token) => (
                            <SelectItem key={token.symbol} value={token.symbol}>
                              <div className="flex items-center gap-2">
                                <span className="font-bold">{token.symbol}</span>
                              </div>
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  {/* Swap Icon */}
                  <div className="flex justify-center">
                    <div className="bg-primary/10 p-3 rounded-full">
                      <ArrowDownUp className="h-6 w-6 text-primary" />
                    </div>
                  </div>

                  {/* To Token */}
                  <div className="space-y-2">
                    <Label htmlFor="to-amount" className="text-lg font-semibold">To</Label>
                    <div className="flex gap-3">
                      <Input
                        id="to-amount"
                        type="text"
                        value={calculateExchange()}
                        readOnly
                        className="text-2xl h-14 bg-muted border-2 border-primary/30"
                      />
                      <Select value={toToken} onValueChange={setToToken}>
                        <SelectTrigger className="w-[180px] h-14 border-2 border-primary/30">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          {tokens.map((token) => (
                            <SelectItem key={token.symbol} value={token.symbol}>
                              <div className="flex items-center gap-2">
                                <span className="font-bold">{token.symbol}</span>
                              </div>
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  {/* Exchange Rate */}
                  <div className="bg-gradient-fresh p-4 rounded-lg border border-primary/20">
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-muted-foreground">Exchange Rate</span>
                      <span className="font-bold text-foreground">
                        1 {fromToken} = {(tokens.find(t => t.symbol === fromToken)?.rate || 1) / (tokens.find(t => t.symbol === toToken)?.rate || 1)} {toToken}
                      </span>
                    </div>
                  </div>

                  {/* Swap Button */}
                  <Button
                    size="lg"
                    className="w-full h-14 text-lg font-bold gradient-energy hover:shadow-glow transition-all animate-pulse-glow"
                  >
                    Swap Tokens
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>

                  <p className="text-xs text-center text-muted-foreground">
                    By swapping, you agree to our terms of service and privacy policy
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-16 gradient-fresh">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center p-6 bg-card rounded-xl shadow-soft">
              <TrendingUp className="h-10 w-10 text-primary mx-auto mb-3" />
              <h3 className="text-3xl font-bold text-foreground mb-2">$2.5M+</h3>
              <p className="text-muted-foreground">24h Trading Volume</p>
            </div>
            <div className="text-center p-6 bg-card rounded-xl shadow-soft">
              <DollarSign className="h-10 w-10 text-primary mx-auto mb-3" />
              <h3 className="text-3xl font-bold text-foreground mb-2">$10M+</h3>
              <p className="text-muted-foreground">Total Liquidity</p>
            </div>
            <div className="text-center p-6 bg-card rounded-xl shadow-soft">
              <Sparkles className="h-10 w-10 text-primary mx-auto mb-3" />
              <h3 className="text-3xl font-bold text-foreground mb-2">15,000+</h3>
              <p className="text-muted-foreground">Active Traders</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center p-2 bg-primary/10 rounded-full mb-4">
              <Sparkles className="h-5 w-5 text-primary" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Why Choose Our Exchange?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Experience the best-in-class token exchange platform built for the Anandavanam community
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className="p-6 bg-card rounded-xl shadow-soft hover:shadow-glow transition-smooth border border-primary/10 animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="bg-gradient-sunshine p-3 rounded-lg w-fit mb-4">
                  <feature.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 gradient-sunshine">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Start Trading ANVD Today
            </h2>
            <p className="text-lg text-white/90 mb-8">
              Join thousands of traders in the Anandavanam ecosystem. Buy, sell, and swap ANVD tokens with ease.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/join">
                <Button size="lg" variant="secondary" className="text-lg px-8 bg-white hover:bg-white/90">
                  Become a Citizen
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link to="/tokenomics">
                <Button size="lg" variant="outline" className="text-lg px-8 border-2 border-white text-white hover:bg-white/10">
                  Learn About ANVD
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

export default Exchange;
