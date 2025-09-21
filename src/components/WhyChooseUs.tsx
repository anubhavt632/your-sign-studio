import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Flower2, Sun, Moon, Star, Flame, Trees } from "lucide-react";

const WhyChooseUs = () => {
  const practices = [
    {
      icon: Flower2,
      title: "Spiritual Awakening",
      description: "Awaken your inner consciousness through ancient mantras and sacred rituals that connect you with divine energy."
    },
    {
      icon: Sun,
      title: "Inner Peace",
      description: "Find tranquility and mental clarity through meditation practices and spiritual guidance from experienced gurus."
    },
    {
      icon: Moon,
      title: "Emotional Balance",
      description: "Achieve harmony in relationships and emotional stability through Vedic wisdom and divine blessings."
    },
    {
      icon: Star,
      title: "Life Guidance",
      description: "Receive cosmic insights and astrological guidance to navigate life's challenges with confidence and wisdom."
    },
    {
      icon: Flame,
      title: "Purification",
      description: "Cleanse negative energies and past karma through sacred fire ceremonies and powerful spiritual practices."
    },
    {
      icon: Trees,
      title: "Prosperity & Growth",
      description: "Attract abundance and success in all life aspects through authentic rituals and divine intervention."
    }
  ];

  return (
    <section className="py-16 bg-gradient-hero">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Sacred Practices & Divine Benefits</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Discover the transformative power of ancient Vedic practices and experience divine blessings in every aspect of your life
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {practices.map((practice, index) => (
            <Card key={index} className="text-center hover:shadow-brand transition-all duration-300 bg-card/80 backdrop-blur-sm border-primary/20">
              <CardHeader>
                <div className="mx-auto w-16 h-16 bg-gradient-brand rounded-full flex items-center justify-center mb-4 shadow-brand">
                  <practice.icon className="w-8 h-8 text-primary-foreground" />
                </div>
                <CardTitle className="text-xl text-foreground">{practice.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">{practice.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;