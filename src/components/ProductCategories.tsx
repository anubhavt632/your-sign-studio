import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Star, Heart, Clock, Users } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import kundliImage from "@/assets/kundli.png";
import jyotishImage from "@/assets/jyotish.png";
import vastuImage from "@/assets/vastu.png";

const ProductCategories = () => {
  const services = [
    {
      title: "Kundali Paramarsh",
      description: "Expert astrological consultation for life guidance",
      image: kundliImage,
      icon: Star,
      popular: true,
    },
    {
      title: "Chandi Paath",
      description: "Sacred recitation for divine blessings and protection",
      image: jyotishImage,
      icon: Heart,
      popular: false,
    },
    {
      title: "Rudra Abhishek",
      description: "Divine ritual for Lord Shiva's blessings",
      image: vastuImage,
      icon: Clock,
      popular: false,
    },
    {
      title: "Satyanarayan Pooja",
      description: "Home pooja service for prosperity and peace",
      image: kundliImage,
      icon: Users,
      popular: false,
    },
    {
      title: "Maha Mrityunjay Jaap",
      description: "Powerful mantra chanting for health and longevity",
      image: jyotishImage,
      icon: Star,
      popular: true,
    },
    {
      title: "Navgraha Shanti",
      description: "Planetary peace rituals for harmony",
      image: vastuImage,
      icon: Heart,
      popular: false,
    },
  ];

  return (
    <section className="py-16 px-4 bg-muted/30">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Our Divine Services
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Experience authentic spiritual guidance and sacred rituals for inner peace and divine blessings
          </p>
        </div>

        <div className="relative">
          <Swiper
            modules={[Autoplay, Navigation]}
            spaceBetween={24}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            navigation={{
              nextEl: '.swiper-button-next-custom',
              prevEl: '.swiper-button-prev-custom',
            }}
            breakpoints={{
              0: { slidesPerView: 1 },
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
              1280: { slidesPerView: 4 },
            }}
            className="!overflow-visible"
          >
            {services.map((service, index) => (
              <SwiperSlide key={index}>
                <Card className="group cursor-pointer hover:shadow-brand transition-all duration-300 border-0 bg-gradient-card h-full">
                  <CardContent className="p-0">
                    <div className="relative overflow-hidden rounded-t-lg">
                      {service.popular && (
                        <div className="absolute top-3 left-3 z-10">
                          <span className="bg-secondary text-secondary-foreground text-xs px-2 py-1 rounded-full font-medium">
                            Popular
                          </span>
                        </div>
                      )}
                      <img
                        src={service.image}
                        alt={service.title}
                        className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      <div className="absolute top-3 right-3">
                        <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                          <service.icon className="w-5 h-5 text-primary" />
                        </div>
                      </div>
                    </div>
                    
                    <div className="p-6">
                      <h3 className="text-lg font-semibold text-foreground mb-2">
                        {service.title}
                      </h3>
                      <p className="text-sm text-muted-foreground mb-4">
                        {service.description}
                      </p>
                      <Button variant="ghost" className="p-0 h-auto text-primary hover:bg-transparent group">
                        Learn More
                        <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </SwiperSlide>
            ))}
          </Swiper>
          
          {/* Custom Navigation Buttons */}
          <div className="swiper-button-prev-custom absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 w-10 h-10 bg-primary rounded-full flex items-center justify-center cursor-pointer hover:bg-primary/80 transition-colors shadow-lg">
            <ArrowRight className="w-5 h-5 text-primary-foreground rotate-180" />
          </div>
          <div className="swiper-button-next-custom absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 w-10 h-10 bg-primary rounded-full flex items-center justify-center cursor-pointer hover:bg-primary/80 transition-colors shadow-lg">
            <ArrowRight className="w-5 h-5 text-primary-foreground" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductCategories;