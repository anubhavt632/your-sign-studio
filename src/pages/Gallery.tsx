import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Play, Eye, Calendar, Tag } from "lucide-react";

const Gallery = () => {
  const galleryItems = [
    {
      id: 1,
      title: "Maa Baglamukhi Main Temple",
      category: "Temple",
      type: "image",
      src: "/placeholder.svg",
      date: "2024-03-15",
      description: "Beautiful view of our main temple dedicated to Maa Baglamukhi"
    },
    {
      id: 2,
      title: "Navratri Celebration 2024",
      category: "Festival",
      type: "image",
      src: "/placeholder.svg",
      date: "2024-03-25",
      description: "Grand Navratri celebration with thousands of devotees"
    },
    {
      id: 3,
      title: "Daily Aarti Ceremony",
      category: "Rituals",
      type: "video",
      src: "/placeholder.svg",
      date: "2024-03-20",
      description: "Daily evening aarti at the main temple"
    },
    {
      id: 4,
      title: "Community Kitchen",
      category: "Service",
      type: "image",
      src: "/placeholder.svg",
      date: "2024-03-10",
      description: "Our community kitchen serving free meals to devotees"
    },
    {
      id: 5,
      title: "Spiritual Discourse",
      category: "Education",
      type: "video",
      src: "/placeholder.svg",
      date: "2024-02-28",
      description: "Enlightening spiritual discourse by our respected Guru Ji"
    },
    {
      id: 6,
      title: "Medical Camp",
      category: "Service",
      type: "image",
      src: "/placeholder.svg",
      date: "2024-03-10",
      description: "Free medical checkup camp for community members"
    },
    {
      id: 7,
      title: "Temple Architecture",
      category: "Temple",
      type: "image",
      src: "/placeholder.svg",
      date: "2024-03-05",
      description: "Intricate architecture and design of our temple complex"
    },
    {
      id: 8,
      title: "Youth Program",
      category: "Education",
      type: "image",
      src: "/placeholder.svg",
      date: "2024-02-20",
      description: "Spiritual education program for young devotees"
    },
    {
      id: 9,
      title: "Baglamukhi Havan",
      category: "Rituals",
      type: "video",
      src: "/placeholder.svg",
      date: "2024-02-15",
      description: "Sacred fire ceremony dedicated to Maa Baglamukhi"
    },
    {
      id: 10,
      title: "Devotee Gathering",
      category: "Community",
      type: "image",
      src: "/placeholder.svg",
      date: "2024-02-10",
      description: "Monthly gathering of devotees from across the region"
    },
    {
      id: 11,
      title: "Prasad Distribution",
      category: "Service",
      type: "image",
      src: "/placeholder.svg",
      date: "2024-02-05",
      description: "Distribution of blessed prasad to devotees"
    },
    {
      id: 12,
      title: "Temple Festivities",
      category: "Festival",
      type: "video",
      src: "/placeholder.svg",
      date: "2024-01-30",
      description: "Joyous festivities during special occasions"
    }
  ];

  const categories = ["All", "Temple", "Festival", "Rituals", "Service", "Education", "Community"];

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "Temple": return "bg-purple-500";
      case "Festival": return "bg-pink-500";
      case "Rituals": return "bg-orange-500";
      case "Service": return "bg-green-500";
      case "Education": return "bg-blue-500";
      case "Community": return "bg-indigo-500";
      default: return "bg-gray-500";
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-brand text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Our Gallery</h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto opacity-90">
            Witness the divine moments and community spirit through our collection
          </p>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 border-b border-border">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((category) => (
              <Button
                key={category}
                variant={category === "All" ? "default" : "outline"}
                size="sm"
                className="text-sm"
              >
                <Tag className="w-4 h-4 mr-2" />
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {galleryItems.map((item) => (
              <Dialog key={item.id}>
                <DialogTrigger asChild>
                  <Card className="overflow-hidden hover:shadow-lg transition-all duration-300 cursor-pointer group">
                    <div className="relative">
                      <img 
                        src={item.src} 
                        alt={item.title}
                        className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      
                      {/* Overlay */}
                      <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                        {item.type === "video" ? (
                          <Play className="w-12 h-12 text-white" />
                        ) : (
                          <Eye className="w-12 h-12 text-white" />
                        )}
                      </div>
                      
                      {/* Badges */}
                      <Badge className={`absolute top-2 right-2 ${getCategoryColor(item.category)} text-white`}>
                        {item.category}
                      </Badge>
                      
                      {item.type === "video" && (
                        <Badge className="absolute top-2 left-2 bg-red-600 text-white">
                          <Play className="w-3 h-3 mr-1" />
                          Video
                        </Badge>
                      )}
                    </div>
                    
                    <CardContent className="p-4">
                      <h3 className="font-semibold text-lg mb-2 line-clamp-1">{item.title}</h3>
                      <p className="text-sm text-muted-foreground mb-3 line-clamp-2">{item.description}</p>
                      <div className="flex items-center text-xs text-muted-foreground">
                        <Calendar className="w-3 h-3 mr-1" />
                        {new Date(item.date).toLocaleDateString('en-IN', { 
                          year: 'numeric', 
                          month: 'short', 
                          day: 'numeric' 
                        })}
                      </div>
                    </CardContent>
                  </Card>
                </DialogTrigger>
                
                <DialogContent className="max-w-4xl">
                  <div className="space-y-4">
                    {item.type === "video" ? (
                      <div className="aspect-video bg-black rounded-lg flex items-center justify-center">
                        <Play className="w-16 h-16 text-white" />
                      </div>
                    ) : (
                      <img 
                        src={item.src} 
                        alt={item.title}
                        className="w-full rounded-lg"
                      />
                    )}
                    
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <Badge className={`${getCategoryColor(item.category)} text-white`}>
                          {item.category}
                        </Badge>
                        <span className="text-sm text-muted-foreground">
                          {new Date(item.date).toLocaleDateString('en-IN', { 
                            year: 'numeric', 
                            month: 'long', 
                            day: 'numeric' 
                          })}
                        </span>
                      </div>
                      <h2 className="text-2xl font-bold">{item.title}</h2>
                      <p className="text-muted-foreground">{item.description}</p>
                    </div>
                  </div>
                </DialogContent>
              </Dialog>
            ))}
          </div>
        </div>
      </section>

      {/* Load More */}
      <section className="py-8 border-t border-border">
        <div className="container mx-auto px-4 text-center">
          <Button variant="outline" size="lg">
            Load More
          </Button>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-secondary/20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-4 text-foreground">Our Journey in Numbers</h2>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">500+</div>
              <p className="text-muted-foreground">Photos Captured</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">100+</div>
              <p className="text-muted-foreground">Videos Recorded</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">50+</div>
              <p className="text-muted-foreground">Events Documented</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">25+</div>
              <p className="text-muted-foreground">Years of Memories</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Gallery;