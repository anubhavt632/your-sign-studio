import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Play, Calendar, Users, Youtube } from "lucide-react";

const YouTubeSection = () => {
  const videos = [
    {
      id: 1,
      title: "Maa Baglamukhi Aarti & Mantra",
      description: "Experience the divine energy with our daily aarti and powerful mantras",
      thumbnail: "https://img.youtube.com/vi/dQw4w9WgXcQ/hqdefault.jpg",
      duration: "15:30",
      views: "12K",
      uploadDate: "2 days ago"
    },
    {
      id: 2,
      title: "Chandi Path Live Session",
      description: "Join our live Chandi Path session for spiritual purification",
      thumbnail: "https://img.youtube.com/vi/dQw4w9WgXcQ/hqdefault.jpg",
      duration: "45:20",
      views: "8.5K",
      uploadDate: "5 days ago"
    },
    {
      id: 3,
      title: "Gau Seva - Serving Sacred Cows",
      description: "Witness our daily gau seva activities and learn about its importance",
      thumbnail: "https://img.youtube.com/vi/dQw4w9WgXcQ/hqdefault.jpg",
      duration: "12:45",
      views: "15K",
      uploadDate: "1 week ago"
    }
  ];

  const liveUpdates = [
    {
      icon: Calendar,
      title: "Weekly Satsang",
      description: "Every Saturday 6 PM - Join us for spiritual discourse",
      color: "text-primary"
    },
    {
      icon: Users,
      title: "Community Service",
      description: "Monthly food distribution drive - Next on 15th",
      color: "text-secondary"
    },
    {
      icon: Youtube,
      title: "Live Streaming",
      description: "Daily morning aarti streamed live on YouTube",
      color: "text-primary"
    }
  ];

  return (
    <section className="py-16 px-4 bg-background">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Latest Videos & Live Updates
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Stay connected with our spiritual journey through divine videos and live sessions
          </p>
        </div>

        {/* YouTube Videos Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {videos.map((video) => (
            <Card key={video.id} className="overflow-hidden hover:shadow-brand transition-all duration-300 bg-gradient-card">
              <div className="relative">
                <img 
                  src={video.thumbnail} 
                  alt={video.title}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute inset-0 bg-black/20 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                  <Button size="lg" className="rounded-full w-16 h-16">
                    <Play className="w-6 h-6" />
                  </Button>
                </div>
                <div className="absolute bottom-2 right-2 bg-black/80 text-white text-xs px-2 py-1 rounded">
                  {video.duration}
                </div>
              </div>
              <CardContent className="p-4">
                <h3 className="font-semibold text-foreground mb-2 line-clamp-2">
                  {video.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-3 line-clamp-2">
                  {video.description}
                </p>
                <div className="flex justify-between items-center text-xs text-muted-foreground">
                  <span>{video.views} views</span>
                  <span>{video.uploadDate}</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Live Updates */}
        <div className="bg-gradient-hero rounded-lg p-8">
          <h3 className="text-2xl font-bold text-center mb-8">Live Updates & Announcements</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {liveUpdates.map((update, index) => (
              <Card key={index} className="text-center border-0 shadow-soft bg-card/80 backdrop-blur-sm">
                <CardContent className="p-6">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-muted mb-4">
                    <update.icon className={`w-6 h-6 ${update.color}`} />
                  </div>
                  <h4 className="font-semibold text-foreground mb-2">
                    {update.title}
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    {update.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default YouTubeSection;