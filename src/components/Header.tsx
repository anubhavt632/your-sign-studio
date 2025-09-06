import { Search, ShoppingCart, User, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Header = () => {
  return (
    <header className="w-full bg-background border-b border-border">
      {/* Top promotional banner */}
      <div className="bg-gradient-brand text-primary-foreground py-2 px-4">
        <div className="container mx-auto flex items-center justify-between text-sm">
          <div className="flex items-center gap-4">
            <span className="font-medium">🎃 Get the scariest signs at the sweetest prices!</span>
            <Button variant="ghost" size="sm" className="text-primary-foreground hover:bg-white/20">
              Shop Now
            </Button>
          </div>
          <div className="hidden md:block">
            <span>Offer ends in 56d 3h 10m 17s</span>
          </div>
        </div>
      </div>

      {/* Main header */}
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-gradient-brand rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">S</span>
            </div>
            <span className="text-xl font-bold text-foreground">SquareSigns</span>
          </div>

          {/* Search bar */}
          <div className="hidden md:flex items-center flex-1 max-w-md mx-8">
            <div className="relative w-full">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
              <Input
                placeholder="Search for products or templates"
                className="pl-10 pr-4"
              />
            </div>
          </div>

          {/* Right actions */}
          <div className="flex items-center gap-4">
            <Button variant="secondary" size="sm" className="hidden md:flex">
              Design Tool
            </Button>
            <Button variant="ghost" size="icon">
              <ShoppingCart className="w-5 h-5" />
            </Button>
            <Button variant="ghost" size="icon">
              <User className="w-5 h-5" />
            </Button>
            <Button variant="ghost" size="icon" className="md:hidden">
              <Menu className="w-5 h-5" />
            </Button>
          </div>
        </div>

        {/* Navigation */}
        <nav className="hidden md:flex items-center gap-8 mt-4 pt-4 border-t border-border">
          <Button variant="link" className="text-foreground font-medium">All Products</Button>
          <Button variant="link" className="text-muted-foreground">Rigid Signs</Button>
          <Button variant="link" className="text-muted-foreground">Banners & Displays</Button>
          <Button variant="link" className="text-muted-foreground">Decals & Magnets</Button>
          <Button variant="link" className="text-muted-foreground">Trade Shows & Events</Button>
          <Button variant="link" className="text-muted-foreground">Office Signs</Button>
          <Button variant="link" className="text-muted-foreground">Outdoor Signs</Button>
        </nav>
      </div>
    </header>
  );
};

export default Header;