import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import rigidSignsImage from "@/assets/rigid-signs.jpg";
import bannersDisplaysImage from "@/assets/banners-displays.jpg";
import decalsMagnetsImage from "@/assets/decals-magnets.jpg";

const ProductCategories = () => {
  const categories = [
    {
      title: "Rigid Signs",
      description: "Durable indoor and outdoor signage for businesses",
      image: rigidSignsImage,
      popular: true,
    },
    {
      title: "Banners & Displays",
      description: "Eye-catching promotional materials for events",
      image: bannersDisplaysImage,
      popular: false,
    },
    {
      title: "Decals & Magnets",
      description: "Versatile adhesive solutions for vehicles and more",
      image: decalsMagnetsImage,
      popular: false,
    },
    {
      title: "Trade Shows",
      description: "Professional displays for exhibitions and events",
      image: bannersDisplaysImage,
      popular: false,
    },
  ];

  return (
    <section className="py-16 px-4 bg-muted/30">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Shop By Category
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore our comprehensive range of custom signage solutions designed for every need
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category, index) => (
            <Card key={index} className="group cursor-pointer hover:shadow-brand transition-all duration-300 border-0 bg-gradient-card">
              <CardContent className="p-0">
                <div className="relative overflow-hidden rounded-t-lg">
                  {category.popular && (
                    <div className="absolute top-3 left-3 z-10">
                      <span className="bg-secondary text-secondary-foreground text-xs px-2 py-1 rounded-full font-medium">
                        Popular
                      </span>
                    </div>
                  )}
                  <img
                    src={category.image}
                    alt={category.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    {category.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    {category.description}
                  </p>
                  <Button variant="ghost" className="p-0 h-auto text-primary hover:bg-transparent group">
                    Shop Now
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductCategories;