import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Star, Clock, MapPin, Phone } from "lucide-react";

const Services = () => {
  const services = [
    {
      title: "Kundali Paramarsh",
      description: "Comprehensive astrological consultation with detailed birth chart analysis and life predictions",
      category: "Astrological Services",
      duration: "60-90 minutes",
      location: "Center & Home",
      price: "Contact for pricing"
    },
    {
      title: "Chandi Paath",
      description: "Sacred recitation of Durga Saptashati for protection, prosperity and spiritual empowerment",
      category: "Sacred Recitations",
      duration: "2-3 hours",
      location: "Center & Home",
      price: "Contact for pricing"
    },
    {
      title: "Rudra Abhishek",
      description: "Divine ablution of Lord Shiva for health, prosperity and spiritual upliftment",
      category: "Ritualistic Services",
      duration: "1-2 hours",
      location: "Center & Home",
      price: "Contact for pricing"
    },
    {
      title: "Satyanarayan Pooja",
      description: "Auspicious worship of Lord Vishnu for blessings, prosperity and family harmony",
      category: "Home Services",
      duration: "2-3 hours",
      location: "Your Home",
      price: "Contact for pricing"
    },
    {
      title: "Maha Mrityunjay Jaap",
      description: "Powerful chanting for health, longevity and protection from negative energies",
      category: "Healing Services",
      duration: "2-4 hours",
      location: "Center & Home",
      price: "Contact for pricing"
    },
    {
      title: "Sundarkand Path",
      description: "Divine recitation from Hanuman Chalisa for strength, courage and obstacle removal",
      category: "Sacred Recitations",
      duration: "1-2 hours",
      location: "Center & Home",
      price: "Contact for pricing"
    },
    {
      title: "Pooja & Havan Services",
      description: "Complete ritualistic services including fire ceremonies at your convenient location",
      category: "Home Services",
      duration: "2-4 hours",
      location: "Your Home",
      price: "Contact for pricing"
    },
    {
      title: "Festive Rituals",
      description: "Traditional celebration of festivals with proper rituals and ceremonies",
      category: "Seasonal Services",
      duration: "Variable",
      location: "Center & Home",
      price: "Contact for pricing"
    },
    {
      title: "Jaap & Anushthan",
      description: "Intensive spiritual practices and ritualistic observances for specific objectives",
      category: "Intensive Services",
      duration: "Multiple days",
      location: "Center",
      price: "Contact for pricing"
    },
    {
      title: "Vrat Kathas",
      description: "Sacred storytelling sessions accompanying fasting rituals for spiritual merit",
      category: "Spiritual Education",
      duration: "1-2 hours",
      location: "Center & Home",
      price: "Contact for pricing"
    },
    {
      title: "Sankalp Puja",
      description: "Personalized worship ceremonies with specific intentions and spiritual goals",
      category: "Personalized Services",
      duration: "1-3 hours",
      location: "Center & Home",
      price: "Contact for pricing"
    },
    {
      title: "Navgraha Shanti",
      description: "Planetary peace rituals for harmonizing celestial influences in your life",
      category: "Astrological Services",
      duration: "2-3 hours",
      location: "Center & Home",
      price: "Contact for pricing"
    }
  ];

  const categories = [...new Set(services.map(service => service.category))];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-brand text-primary-foreground py-16">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Our Sacred Services</h1>
            <p className="text-xl md:text-2xl mb-8 opacity-90">
              Spiritual guidance and ritualistic services tailored to your personal journey
            </p>
            <div className="flex flex-wrap justify-center gap-2 mb-8">
              {categories.map((category) => (
                <Badge key={category} variant="secondary" className="text-sm">
                  {category}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <div className="flex justify-between items-start mb-2">
                    <Badge variant="outline">{service.category}</Badge>
                    <div className="flex items-center text-yellow-500">
                      <Star className="w-4 h-4 fill-current" />
                      <Star className="w-4 h-4 fill-current" />
                      <Star className="w-4 h-4 fill-current" />
                      <Star className="w-4 h-4 fill-current" />
                      <Star className="w-4 h-4 fill-current" />
                    </div>
                  </div>
                  <CardTitle className="text-xl text-primary">{service.title}</CardTitle>
                  <CardDescription className="text-base">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Clock className="w-4 h-4 mr-2" />
                      <span>{service.duration}</span>
                    </div>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <MapPin className="w-4 h-4 mr-2" />
                      <span>{service.location}</span>
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="font-semibold text-primary">{service.price}</span>
                    <Button size="sm">
                      <Phone className="w-4 h-4 mr-2" />
                      Book Now
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-secondary py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Need Personalized Spiritual Guidance?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Contact us for customized spiritual solutions tailored to your specific needs and circumstances
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="text-lg px-8">
              Schedule Consultation
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8">
              Call Us: +91-XXXXXXXXXX
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;