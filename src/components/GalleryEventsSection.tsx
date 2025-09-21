import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, Eye, Heart, Users } from "lucide-react";
import heroSignageImage from "@/assets/hero-signage.png";
import bannersDisplaysImage from "@/assets/banners-displays.jpg";
import rigidSignsImage from "@/assets/rigid-signs.jpg";
import decalsMagnetsImage from "@/assets/decals-magnets.jpg";

const GalleryEventsSection = () => {
  const galleryItems = [
    {
      id: 1,
      image: heroSignageImage,
      title: "Gau Seva Program",
      type: "event",
      description: "Monthly cow feeding and care program organized by our sansthan",
      date: "15 Nov 2024",
    },
    {
      id: 2,
      image: bannersDisplaysImage,
      title: "Sacred Pooja Setup",
      type: "gallery",
      description: "Beautiful arrangements for Maha Mrityunjay Jaap ceremony",
      views: 850,
    },
    {
      id: 3,
      image: rigidSignsImage,
      title: "Community Satsang",
      type: "event",
      description: "Weekly spiritual gathering for devotees and seekers",
      date: "Every Sunday",
    },
    {
      id: 4,
      image: decalsMagnetsImage,
      title: "Temple Decoration",
      type: "gallery",
      description: "Festive decorations during Navratri celebrations",
      views: 1200,
    },
  ];

  return (
    <section className="py-16 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Our Sacred Journey
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Witness the divine moments and sacred events that bring our community together in devotion and service. 
            From spiritual ceremonies to community service, every moment is a step towards enlightenment.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {galleryItems.map((item) => (
            <Card key={item.id} className="group cursor-pointer hover:shadow-brand transition-all duration-300 overflow-hidden">
              <CardContent className="p-0">
                <div className="relative overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                  
                  {/* Type Badge */}
                  <div className="absolute top-3 left-3">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                      item.type === 'event' 
                        ? 'bg-secondary text-secondary-foreground' 
                        : 'bg-primary text-primary-foreground'
                    }`}>
                      {item.type === 'event' ? 'Event' : 'Gallery'}
                    </span>
                  </div>

                  {/* Overlay Content */}
                  <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                    <h3 className="font-semibold mb-1 text-sm">{item.title}</h3>
                    <div className="flex items-center text-xs opacity-90">
                      {item.type === 'event' ? (
                        <>
                          <Calendar className="w-3 h-3 mr-1" />
                          <span>{item.date}</span>
                        </>
                      ) : (
                        <>
                          <Eye className="w-3 h-3 mr-1" />
                          <span>{item.views} views</span>
                        </>
                      )}
                    </div>
                  </div>
                </div>
                
                <div className="p-4">
                  <p className="text-sm text-muted-foreground line-clamp-2">
                    {item.description}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center bg-gradient-hero rounded-2xl p-8">
          <div className="max-w-2xl mx-auto">
            <Heart className="w-12 h-12 text-primary mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Join Our Sacred Community
            </h3>
            <p className="text-muted-foreground mb-6">
              Be part of our spiritual journey and witness the divine transformation. 
              Participate in our events, explore our gallery, and connect with fellow devotees.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="shadow-brand">
                <Users className="w-4 h-4 mr-2" />
                View All Events
              </Button>
              <Button variant="outline" size="lg">
                <Eye className="w-4 h-4 mr-2" />
                Explore Gallery
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GalleryEventsSection;