import { Search, ShoppingCart, User, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Header = () => {
  const NavLink = ({ children }) => {
    return (
      <Button 
        variant="link" 
        className="text-muted-foreground font-medium hover:text-orange-500 transition-colors"
      >
        {children}
      </Button>
    );
  };
  return (
    <header className="w-full bg-background border-b border-border">
      {/* Top promotional banner */}
      <div className="bg-gradient-brand text-primary-foreground py-2 px-4">
        {/* Main header */}
      <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <img 
              src="/logo-main/logo.png" 
              alt="Divya Pitambara Foundation" 
              className="w-16 h-16 object-contain"
            />
            <span className="text-xl font-bold text-foreground">Maa Baglamukhi Sadhna Sansthan</span>
          </div>

          {/* Search bar */}
          <div className="hidden md:flex  items-center flex-1 max-w-md mx-8">
            <div className="relative w-full">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
              <Input
                placeholder="Search..."
                className="pl-10 pr-4"
              />
            </div>
          </div>

          {/* Right actions */}
          <div className="flex items-center gap-4">
            <Button variant="outline" size="lg">
              Join hands Today
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
        
      </div>

      
      <div className="container mx-auto px-2 py-2">
        
       

        {/* Navigation */}
        <nav className="hidden md:flex justify-center items-center gap-8">
         <NavLink>Home</NavLink>
          <NavLink>About Us</NavLink>
          <NavLink>Seva & Initiatives</NavLink>
          <NavLink>Products / Shop</NavLink>
          <NavLink>Blog</NavLink>
          <NavLink>Contact Us</NavLink>
          <NavLink>Donate Now</NavLink>
        </nav>
      </div>
    </header>
  );
};

export default Header;