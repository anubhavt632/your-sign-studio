import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { ShoppingCart, Star, Search, Filter } from "lucide-react";

const PoojaItems = () => {
  const categories = [
    "All Items", "Puja Essentials", "Idols & Statues", "Incense & Dhoop", 
    "Lamps & Diyas", "Yantras", "Rudraksha", "Books & Literature"
  ];

  const products = [
    {
      id: 1,
      name: "Maa Baglamukhi Yantra",
      price: 2100,
      originalPrice: 2500,
      image: "/placeholder.svg",
      rating: 4.8,
      reviews: 156,
      category: "Yantras",
      description: "Energized Baglamukhi Yantra for protection and victory",
      inStock: true
    },
    {
      id: 2,
      name: "Brass Deepak Set",
      price: 850,
      originalPrice: 1200,
      image: "/placeholder.svg",
      rating: 4.6,
      reviews: 89,
      category: "Lamps & Diyas",
      description: "Traditional brass lamps for daily puja",
      inStock: true
    },
    {
      id: 3,
      name: "Sandalwood Incense Sticks",
      price: 150,
      originalPrice: 200,
      image: "/placeholder.svg",
      rating: 4.9,
      reviews: 234,
      category: "Incense & Dhoop",
      description: "Pure sandalwood incense for spiritual atmosphere",
      inStock: true
    },
    {
      id: 4,
      name: "Maa Pitambara Idol",
      price: 5600,
      originalPrice: 7000,
      image: "/placeholder.svg",
      rating: 4.7,
      reviews: 67,
      category: "Idols & Statues",
      description: "Beautiful Maa Pitambara brass idol",
      inStock: false
    },
    {
      id: 5,
      name: "Rudraksha Mala",
      price: 1800,
      originalPrice: 2200,
      image: "/placeholder.svg",
      rating: 4.8,
      reviews: 145,
      category: "Rudraksha",
      description: "Authentic 108 bead Rudraksha mala",
      inStock: true
    },
    {
      id: 6,
      name: "Baglamukhi Chalisa Book",
      price: 80,
      originalPrice: 120,
      image: "/placeholder.svg",
      rating: 4.5,
      reviews: 98,
      category: "Books & Literature",
      description: "Complete Baglamukhi Chalisa with translation",
      inStock: true
    },
    {
      id: 7,
      name: "Puja Thali Set",
      price: 1200,
      originalPrice: 1500,
      image: "/placeholder.svg",
      rating: 4.6,
      reviews: 112,
      category: "Puja Essentials",
      description: "Complete brass puja thali with all essentials",
      inStock: true
    },
    {
      id: 8,
      name: "Camphor Tablets",
      price: 45,
      originalPrice: 60,
      image: "/placeholder.svg",
      rating: 4.4,
      reviews: 187,
      category: "Puja Essentials",
      description: "Pure camphor tablets for aarti",
      inStock: true
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-16 bg-gradient-brand text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Sacred Pooja Items</h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto opacity-90">
            Authentic spiritual items blessed for your devotional practices
          </p>
        </div>
      </section>

      {/* Filters Section */}
      <section className="py-8 border-b border-border">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={category === "All Items" ? "default" : "outline"}
                  size="sm"
                  className="text-sm"
                >
                  {category}
                </Button>
              ))}
            </div>
            
            <div className="flex gap-2 w-full md:w-auto">
              <div className="relative flex-1 md:w-80">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                <Input placeholder="Search products..." className="pl-10" />
              </div>
              <Select>
                <SelectTrigger className="w-40">
                  <Filter className="w-4 h-4 mr-2" />
                  <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="popular">Most Popular</SelectItem>
                  <SelectItem value="price-low">Price: Low to High</SelectItem>
                  <SelectItem value="price-high">Price: High to Low</SelectItem>
                  <SelectItem value="rating">Highest Rated</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {products.map((product) => (
              <Card key={product.id} className="overflow-hidden hover:shadow-lg transition-shadow group">
                <div className="relative">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  {!product.inStock && (
                    <Badge className="absolute top-2 left-2 bg-destructive">Out of Stock</Badge>
                  )}
                  {product.originalPrice > product.price && (
                    <Badge className="absolute top-2 right-2 bg-green-600">
                      {Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}% Off
                    </Badge>
                  )}
                </div>
                
                <CardHeader className="pb-2">
                  <div className="flex items-center justify-between">
                    <Badge variant="secondary" className="text-xs">{product.category}</Badge>
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      <span className="text-sm font-medium">{product.rating}</span>
                      <span className="text-xs text-muted-foreground">({product.reviews})</span>
                    </div>
                  </div>
                  <CardTitle className="text-lg line-clamp-1">{product.name}</CardTitle>
                </CardHeader>
                
                <CardContent className="pt-0">
                  <p className="text-sm text-muted-foreground mb-3 line-clamp-2">{product.description}</p>
                  
                  <div className="flex items-center gap-2 mb-4">
                    <span className="text-2xl font-bold text-primary">₹{product.price}</span>
                    {product.originalPrice > product.price && (
                      <span className="text-lg text-muted-foreground line-through">₹{product.originalPrice}</span>
                    )}
                  </div>
                  
                  <Button 
                    className="w-full" 
                    disabled={!product.inStock}
                    variant={product.inStock ? "default" : "secondary"}
                  >
                    <ShoppingCart className="w-4 h-4 mr-2" />
                    {product.inStock ? "Add to Cart" : "Out of Stock"}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Load More Section */}
      <section className="py-8 border-t border-border">
        <div className="container mx-auto px-4 text-center">
          <Button variant="outline" size="lg">
            Load More Products
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default PoojaItems;