import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import Carousel from "./Carousel";

const Hero = () => {
  const navigate = useNavigate();

  return (
    <section className="relative bg-gradient-hero py-12 px-4 overflow-hidden">
      <div className="container mx-auto">
        {/* ✅ Responsive grid: 1 column on mobile, 2 on large screens */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Left content */}
          <div className="space-y-6 text-center lg:text-left">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
              Spreading{" "}
              <span className="bg-gradient-brand bg-clip-text text-transparent">
                Seva & Devotion
              </span>{" "}
              with Maa Baglamukhi Sadhna Sansthan
            </h1>

            <p className="text-base sm:text-lg text-muted-foreground max-w-xl mx-auto lg:mx-0">
              Dedicated to <span className="font-semibold">spread Sanatan Dharma</span>, 
              uplifting humanity, and connecting devotees with divine energy.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button 
                size="lg" 
                className="shadow-brand w-full sm:w-auto"
                onClick={() => navigate('/donation')}
              >
                Donate Now
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="w-full sm:w-auto"
                onClick={() => navigate('/pooja-items')}
              >
                Explore Pooja Items
              </Button>
            </div>
          </div>

          {/* Right content - Carousel */}
          <div className="relative w-full flex justify-center lg:justify-end">
            <Carousel />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
