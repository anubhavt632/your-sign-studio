import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Heart, Users, Award, Target } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-brand text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">About Maa Baglamukhi Sadhna Sansthan</h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto opacity-90">
            Dedicated to spiritual growth, community service, and spreading the divine blessings of Maa Pitambara
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-foreground">Our Mission</h2>
              <p className="text-lg text-muted-foreground mb-6">
                To serve humanity through spiritual guidance, community welfare, and preserving the ancient wisdom of Maa Baglamukhi and Maa Pitambara. We strive to create a harmonious society where spiritual values and modern progress coexist.
              </p>
              <p className="text-lg text-muted-foreground">
                Our foundation works tirelessly to provide spiritual education, organize religious ceremonies, and support those in need through various welfare programs.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <Card className="text-center p-6">
                <CardContent className="p-0">
                  <Heart className="w-12 h-12 mx-auto mb-4 text-primary" />
                  <h3 className="text-xl font-semibold mb-2">Compassion</h3>
                  <p className="text-sm text-muted-foreground">Serving with love and kindness</p>
                </CardContent>
              </Card>
              <Card className="text-center p-6">
                <CardContent className="p-0">
                  <Users className="w-12 h-12 mx-auto mb-4 text-primary" />
                  <h3 className="text-xl font-semibold mb-2">Community</h3>
                  <p className="text-sm text-muted-foreground">Building stronger communities</p>
                </CardContent>
              </Card>
              <Card className="text-center p-6">
                <CardContent className="p-0">
                  <Award className="w-12 h-12 mx-auto mb-4 text-primary" />
                  <h3 className="text-xl font-semibold mb-2">Excellence</h3>
                  <p className="text-sm text-muted-foreground">Maintaining highest standards</p>
                </CardContent>
              </Card>
              <Card className="text-center p-6">
                <CardContent className="p-0">
                  <Target className="w-12 h-12 mx-auto mb-4 text-primary" />
                  <h3 className="text-xl font-semibold mb-2">Purpose</h3>
                  <p className="text-sm text-muted-foreground">Guided by divine purpose</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* History Section */}
      <section className="py-16 bg-secondary/20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-8 text-foreground">Our Journey</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Founded with the divine blessings of Maa Pitambara, our foundation has been a beacon of hope and spiritual guidance for devotees worldwide. From humble beginnings, we have grown into a trusted institution that bridges ancient wisdom with contemporary needs.
            </p>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">1000+</div>
                <p className="text-muted-foreground">Devotees Served</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">50+</div>
                <p className="text-muted-foreground">Events Organized</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">25+</div>
                <p className="text-muted-foreground">Years of Service</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6 text-foreground">Join Our Mission</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Be part of our spiritual journey and help us serve the community with divine blessings
          </p>
          <Button size="lg" className="mr-4">
            Become a Volunteer
          </Button>
          <Button variant="outline" size="lg">
            Make a Donation
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;