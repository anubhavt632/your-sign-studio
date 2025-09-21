import { Card, CardContent } from "@/components/ui/card";

const Stats = () => {
  const stats = [
    {
      number: "1000+",
      label: "Devotees Guided",
      description: "Happy devotees on their spiritual journey"
    },
    {
      number: "15+",
      label: "Years Experience",
      description: "Of dedicated spiritual service"
    },
    {
      number: "500+",
      label: "Home Services",
      description: "Successful poojas and ceremonies conducted"
    },
    {
      number: "50+",
      label: "Spiritual Events",
      description: "Organized for community spiritual growth"
    }
  ];

  return (
    <section className="py-16 bg-gradient-brand text-primary-foreground">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Spiritual Impact</h2>
          <p className="text-xl opacity-90 max-w-2xl mx-auto">
            Measuring our commitment to spreading divine blessings and spiritual guidance
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <Card key={index} className="bg-white/10 border-white/20 text-center">
              <CardContent className="p-6">
                <div className="text-4xl md:text-5xl font-bold mb-2 text-white">
                  {stat.number}
                </div>
                <h3 className="text-xl font-semibold mb-2 text-white">
                  {stat.label}
                </h3>
                <p className="text-white/80">
                  {stat.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;