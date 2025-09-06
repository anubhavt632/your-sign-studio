import { Card, CardContent } from "@/components/ui/card";
import { Palette, Clock, Shield, Truck } from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: Palette,
      title: "Custom Design Tool",
      description: "Easy-to-use online designer with thousands of templates and fonts",
      color: "text-primary",
    },
    {
      icon: Clock,
      title: "Fast Turnaround",
      description: "24-48 hour production time for most products with rush options available",
      color: "text-secondary",
    },
    {
      icon: Shield,
      title: "Quality Guarantee",
      description: "Premium materials and printing processes with 100% satisfaction guarantee",
      color: "text-primary",
    },
    {
      icon: Truck,
      title: "Free Shipping",
      description: "Complimentary ground shipping on orders over $99 within the US",
      color: "text-secondary",
    },
  ];

  return (
    <section className="py-16 px-4 bg-background">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Why Choose Divya Pitambara Foundation?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We make custom signage simple with professional quality, fast service, and unbeatable value
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Card key={index} className="text-center border-0 shadow-soft hover:shadow-brand transition-all duration-300 bg-gradient-card">
              <CardContent className="p-8">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-muted mb-6">
                  <feature.icon className={`w-8 h-8 ${feature.color}`} />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-3">
                  {feature.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;