import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-signage.jpg";

const Hero = () => {
  return (
    <section className="relative bg-gradient-hero py-20 px-4 overflow-hidden">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-6xl font-bold text-foreground leading-tight">
                Make And Print Your{" "}
                <span className="bg-gradient-brand bg-clip-text text-transparent">
                  Custom Sign
                </span>{" "}
                Online
              </h1>
              <p className="text-xl text-muted-foreground max-w-lg">
                Professional custom signage solutions for businesses, events, and personal use. 
                High-quality materials, expert design, and fast turnaround.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="shadow-brand">
                Start Designing
              </Button>
              <Button variant="outline" size="lg">
                Browse Templates
              </Button>
            </div>

            {/* Trust signals */}
            <div className="flex items-center gap-6 pt-8">
              <div className="flex items-center gap-2">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-yellow-400 text-lg">★</span>
                  ))}
                </div>
                <span className="text-sm text-muted-foreground">Excellent</span>
              </div>
              <div className="text-sm text-muted-foreground">
                2,714 reviews on Trustpilot
              </div>
            </div>
          </div>

          {/* Right content - Hero image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-brand">
              <img
                src={heroImage}
                alt="Professional custom signage showcase"
                className="w-full h-96 lg:h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent" />
            </div>
            
            {/* Floating elements */}
            <div className="absolute -top-4 -right-4 bg-card rounded-lg p-4 shadow-soft border">
              <div className="text-sm font-medium text-foreground">Free Shipping</div>
              <div className="text-xs text-muted-foreground">On orders over $99</div>
            </div>
            
            <div className="absolute -bottom-4 -left-4 bg-secondary text-secondary-foreground rounded-lg p-4 shadow-soft">
              <div className="text-sm font-medium">24-48hr</div>
              <div className="text-xs opacity-90">Fast Turnaround</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;