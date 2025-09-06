import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const CallToAction = () => {
  return (
    <section className="py-20 px-4 bg-gradient-brand">
      <div className="container mx-auto text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl lg:text-4xl font-bold text-primary-foreground mb-6">
            Ready to Create Your Custom Sign?
          </h2>
          <p className="text-lg text-primary-foreground/90 mb-8 leading-relaxed">
            Join thousands of satisfied customers who trust SquareSigns for their signage needs. 
            Get 10% off your first order when you sign up today!
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto mb-8">
            <Input
              placeholder="Enter your email address"
              className="bg-white/10 border-white/20 text-primary-foreground placeholder:text-primary-foreground/60"
            />
            <Button variant="secondary" size="lg" className="whitespace-nowrap">
              Get 10% Off
            </Button>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="outline" className="bg-white/10 border-white/20 text-primary-foreground hover:bg-white/20">
              Start Designing Now
            </Button>
            <Button size="lg" variant="secondary">
              Browse Templates
            </Button>
          </div>
          
          <p className="text-sm text-primary-foreground/70 mt-6">
            No spam, unsubscribe at any time. By signing up, you agree to our terms and privacy policy.
          </p>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;