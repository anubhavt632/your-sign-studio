import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const CallToAction = () => {
  return (
    <section className="py-20 px-4 bg-gradient-brand">
  <div className="container mx-auto text-center">
    <div className="max-w-3xl mx-auto">
      <h2 className="text-3xl lg:text-4xl font-bold text-primary-foreground mb-6">
        Join Hands in Seva & Devotion
      </h2>
      <p className="text-lg text-primary-foreground/90 mb-8 leading-relaxed">
        Be a part of <span className="font-semibold">Divya Pitambara Foundation</span> 
        — serving cows, feeding the needy, and spreading devotion. 
        Support our cause or explore sacred Pooja items to bring blessings home.
      </p>
      
      <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto mb-8">
        <Input
          placeholder="Enter your email to stay connected"
          className="bg-white/10 border-white/20 text-primary-foreground placeholder:text-primary-foreground/60"
        />
        <Button variant="secondary" size="lg" className="whitespace-nowrap">
          Stay Connected
        </Button>
      </div>
      
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <Button size="lg" variant="outline" className="bg-white/10 border-white/20 text-primary-foreground hover:bg-white/20">
          Donate for Gau Seva
        </Button>
        <Button size="lg" variant="secondary">
          Explore Pooja Items
        </Button>
      </div>
      
      <p className="text-sm text-primary-foreground/70 mt-6">
        Every contribution brings blessings. Together, let’s spread love, seva, and devotion.
      </p>
    </div>
  </div>
</section>

  );
};

export default CallToAction;