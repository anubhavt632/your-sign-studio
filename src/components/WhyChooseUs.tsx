import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Shield, Heart, Clock, Award, Users, Sparkles } from "lucide-react";

const WhyChooseUs = () => {
  const features = [
    {
      icon: Shield,
      title: "Authentic Traditions",
      description: "Following ancient Vedic traditions with complete authenticity and spiritual purity in all our practices."
    },
    {
      icon: Heart,
      title: "Devoted Service",
      description: "Our team of experienced spiritual guides provide personalized attention with genuine care and devotion."
    },
    {
      icon: Clock,
      title: "Timely Guidance",
      description: "Available for consultations and services at your convenience, including emergency spiritual support."
    },
    {
      icon: Award,
      title: "Proven Results",
      description: "Years of experience helping devotees achieve spiritual growth, peace, and positive life transformations."
    },
    {
      icon: Users,
      title: "Community Support",
      description: "Join our spiritual community of devotees who support each other's journey towards enlightenment."
    },
    {
      icon: Sparkles,
      title: "Divine Blessings",
      description: "Experience the powerful blessings of Maa Baglamukhi through our dedicated spiritual practices."
    }
  ];

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose Maa Baglamukhi Sadhna Sansthan</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Experience authentic spiritual guidance rooted in ancient wisdom and modern understanding
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="text-center hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <feature.icon className="w-8 h-8 text-primary" />
                </div>
                <CardTitle className="text-xl">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;