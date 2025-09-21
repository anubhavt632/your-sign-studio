import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Priya Sharma",
      location: "Gorakhpur",
      text: "The Kundali consultation was incredibly accurate and helped me understand my life's direction. Highly recommended!",
      rating: 5,
      service: "Kundali Paramarsh"
    },
    {
      name: "Rajesh Kumar",
      location: "Lucknow",
      text: "The Satyanarayan Pooja at our home was conducted with great devotion. The positive energy was palpable.",
      rating: 5,
      service: "Home Pooja Services"
    },
    {
      name: "Meera Devi",
      location: "Varanasi",
      text: "Maha Mrityunjay Jaap helped during my family's difficult time. We experienced miraculous positive changes.",
      rating: 5,
      service: "Healing Services"
    }
  ];

  return (
    <section className="py-16 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Devotee Experiences</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Read what our devotees say about their spiritual journey with us
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-4 italic">"{testimonial.text}"</p>
                <div className="border-t pt-4">
                  <p className="font-semibold text-primary">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.location}</p>
                  <p className="text-sm text-accent font-medium mt-1">{testimonial.service}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;