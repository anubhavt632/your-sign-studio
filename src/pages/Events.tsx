import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, Clock, Users, ArrowRight } from "lucide-react";

const Events = () => {
  const upcomingEvents = [
    {
      id: 1,
      title: "Maa Baglamukhi Jayanti Celebration",
      date: "2024-04-15",
      time: "6:00 AM - 10:00 PM",
      location: "Main Temple, Datia",
      description: "Grand celebration of Maa Baglamukhi's birthday with special pujas, bhajans, and community feast.",
      attendees: 500,
      image: "/placeholder.svg",
      type: "Festival",
      status: "upcoming"
    },
    {
      id: 2,
      title: "Weekly Satsang",
      date: "2024-04-01",
      time: "7:00 PM - 9:00 PM",
      location: "Community Hall",
      description: "Weekly spiritual gathering with divine discourse, bhajans, and prasad distribution.",
      attendees: 100,
      image: "/placeholder.svg",
      type: "Weekly",
      status: "upcoming"
    },
    {
      id: 3,
      title: "Spiritual Healing Workshop",
      date: "2024-04-08",
      time: "10:00 AM - 4:00 PM",
      location: "Meditation Center",
      description: "Learn ancient healing techniques and meditation practices from experienced gurus.",
      attendees: 50,
      image: "/placeholder.svg",
      type: "Workshop",
      status: "upcoming"
    }
  ];

  const pastEvents = [
    {
      id: 4,
      title: "Maha Navratri Celebration 2024",
      date: "2024-03-25",
      time: "All Day",
      location: "Main Temple Complex",
      description: "Nine days of divine celebration with special pujas, cultural programs, and community participation.",
      attendees: 1200,
      image: "/placeholder.svg",
      type: "Festival",
      status: "completed"
    },
    {
      id: 5,
      title: "Medical Camp & Free Health Checkup",
      date: "2024-03-10",
      time: "9:00 AM - 5:00 PM",
      location: "Community Center",
      description: "Free medical consultation and health checkup for the community members.",
      attendees: 300,
      image: "/placeholder.svg",
      type: "Social Service",
      status: "completed"
    },
    {
      id: 6,
      title: "Spiritual Discourse by Guru Ji",
      date: "2024-02-28",
      time: "6:00 PM - 8:00 PM",
      location: "Main Temple",
      description: "Enlightening discourse on the teachings of Maa Pitambara and spiritual life.",
      attendees: 200,
      image: "/placeholder.svg",
      type: "Discourse",
      status: "completed"
    }
  ];

  const getTypeColor = (type: string) => {
    switch (type) {
      case "Festival": return "bg-purple-500";
      case "Workshop": return "bg-blue-500";
      case "Weekly": return "bg-green-500";
      case "Social Service": return "bg-orange-500";
      case "Discourse": return "bg-indigo-500";
      default: return "bg-gray-500";
    }
  };

  const EventCard = ({ event, isPast = false }: { event: any, isPast?: boolean }) => (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow">
      <div className="relative">
        <img 
          src={event.image} 
          alt={event.title}
          className="w-full h-48 object-cover"
        />
        <Badge className={`absolute top-2 right-2 ${getTypeColor(event.type)} text-white`}>
          {event.type}
        </Badge>
        {isPast && (
          <Badge className="absolute top-2 left-2 bg-gray-600 text-white">
            Completed
          </Badge>
        )}
      </div>
      
      <CardHeader>
        <CardTitle className="text-xl line-clamp-2">{event.title}</CardTitle>
        <div className="flex flex-wrap gap-2 text-sm text-muted-foreground">
          <div className="flex items-center gap-1">
            <Calendar className="w-4 h-4" />
            {new Date(event.date).toLocaleDateString('en-IN', { 
              year: 'numeric', 
              month: 'long', 
              day: 'numeric' 
            })}
          </div>
          <div className="flex items-center gap-1">
            <Clock className="w-4 h-4" />
            {event.time}
          </div>
        </div>
      </CardHeader>
      
      <CardContent>
        <div className="flex items-start gap-1 mb-3">
          <MapPin className="w-4 h-4 mt-0.5 text-muted-foreground flex-shrink-0" />
          <span className="text-sm text-muted-foreground">{event.location}</span>
        </div>
        
        <p className="text-sm text-muted-foreground mb-4 line-clamp-3">{event.description}</p>
        
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1 text-sm text-muted-foreground">
            <Users className="w-4 h-4" />
            {event.attendees} {isPast ? 'attended' : 'expected'}
          </div>
          <Button variant={isPast ? "outline" : "default"} size="sm">
            {isPast ? 'View Details' : 'Register'}
            <ArrowRight className="w-4 h-4 ml-1" />
          </Button>
        </div>
      </CardContent>
    </Card>
  );

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-brand text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Our Events</h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto opacity-90">
            Join us in celebrating divine occasions and community gatherings
          </p>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-foreground">Upcoming Events</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Don't miss our upcoming spiritual gatherings and celebrations
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {upcomingEvents.map((event) => (
              <EventCard key={event.id} event={event} />
            ))}
          </div>
          
          <div className="text-center">
            <Button size="lg">
              View All Upcoming Events
            </Button>
          </div>
        </div>
      </section>

      {/* Past Events */}
      <section className="py-16 bg-secondary/20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-foreground">Recent Events</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Relive the moments from our recent spiritual gatherings
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {pastEvents.map((event) => (
              <EventCard key={event.id} event={event} isPast={true} />
            ))}
          </div>
        </div>
      </section>

      {/* Event Categories */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-foreground">Event Categories</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Explore different types of events we organize
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <CardContent className="p-0">
                <div className="w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Calendar className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Festivals</h3>
                <p className="text-sm text-muted-foreground">Religious festivals and celebrations</p>
              </CardContent>
            </Card>
            
            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <CardContent className="p-0">
                <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Workshops</h3>
                <p className="text-sm text-muted-foreground">Spiritual learning and development</p>
              </CardContent>
            </Card>
            
            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <CardContent className="p-0">
                <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Weekly Satsang</h3>
                <p className="text-sm text-muted-foreground">Regular spiritual gatherings</p>
              </CardContent>
            </Card>
            
            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <CardContent className="p-0">
                <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MapPin className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Social Service</h3>
                <p className="text-sm text-muted-foreground">Community welfare activities</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Events;