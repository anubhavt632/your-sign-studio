import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Heart, Gift, Users, Building } from "lucide-react";

const Donation = () => {
  const donationPlans = [
    {
      title: "Seva Donation",
      amount: "₹501",
      icon: Heart,
      description: "Support daily temple activities and community services",
      features: ["Daily Aarti support", "Community kitchen", "Basic maintenance"]
    },
    {
      title: "Blessing Donation",
      amount: "₹1,108",
      icon: Gift,
      description: "Contribute to special pujas and religious ceremonies",
      features: ["Special puja sponsorship", "Festival celebrations", "Devotee services"]
    },
    {
      title: "Patron Donation",
      amount: "₹5,100",
      icon: Users,
      description: "Major support for temple development and welfare programs",
      features: ["Temple development", "Educational programs", "Medical assistance"]
    },
    {
      title: "Benefactor Donation",
      amount: "₹11,000+",
      icon: Building,
      description: "Significant contribution to infrastructure and long-term projects",
      features: ["Infrastructure development", "Scholarship programs", "Community center support"]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-brand text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Support Our Divine Mission</h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto opacity-90">
            Your generous donations help us serve the community and spread the divine blessings of Maa Pitambara
          </p>
        </div>
      </section>

      {/* Donation Plans */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-foreground">Choose Your Contribution</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Every donation, big or small, helps us continue our spiritual and social service
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {donationPlans.map((plan, index) => {
              const IconComponent = plan.icon;
              return (
                <Card key={index} className="relative overflow-hidden hover:shadow-lg transition-shadow">
                  <CardHeader className="text-center">
                    <IconComponent className="w-12 h-12 mx-auto mb-4 text-primary" />
                    <CardTitle className="text-xl mb-2">{plan.title}</CardTitle>
                    <div className="text-3xl font-bold text-primary">{plan.amount}</div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4 text-center">{plan.description}</p>
                    <ul className="space-y-2 mb-6">
                      {plan.features.map((feature, idx) => (
                        <li key={idx} className="text-sm text-muted-foreground flex items-center">
                          <Heart className="w-4 h-4 mr-2 text-primary flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <Button className="w-full">Donate Now</Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Custom Donation Form */}
      <section className="py-16 bg-secondary/20">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <Card>
              <CardHeader className="text-center">
                <CardTitle className="text-2xl">Custom Donation</CardTitle>
                <p className="text-muted-foreground">Choose your own donation amount and purpose</p>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="donor-name">Full Name</Label>
                    <Input id="donor-name" placeholder="Enter your name" />
                  </div>
                  <div>
                    <Label htmlFor="donor-email">Email</Label>
                    <Input id="donor-email" type="email" placeholder="Enter your email" />
                  </div>
                </div>
                
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="donor-phone">Phone Number</Label>
                    <Input id="donor-phone" placeholder="Enter your phone" />
                  </div>
                  <div>
                    <Label htmlFor="donation-amount">Donation Amount (₹)</Label>
                    <Input id="donation-amount" type="number" placeholder="Enter amount" />
                  </div>
                </div>
                
                <div>
                  <Label htmlFor="donation-purpose">Purpose of Donation</Label>
                  <Textarea 
                    id="donation-purpose" 
                    placeholder="Share your intention or specific purpose for this donation"
                    rows={3}
                  />
                </div>
                
                <Button className="w-full" size="lg">
                  Proceed to Payment
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-foreground">Your Impact</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              See how your donations make a difference in our community
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">₹10,00,000+</div>
              <p className="text-muted-foreground">Total Donations Received</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">500+</div>
              <p className="text-muted-foreground">Families Helped</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">25+</div>
              <p className="text-muted-foreground">Ongoing Projects</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Donation;