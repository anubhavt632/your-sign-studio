import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, Search, X, ShoppingCart, User } from "lucide-react";

const Header = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const navigationItems = [
    { label: "Home", href: "#" },
    { label: "About", href: "#" },
    { label: "Donations", href: "#" },
    { label: "Pooja Items", href: "#" },
    { label: "Events", href: "#" },
    { label: "Gallery", href: "#" },
    { label: "Contact", href: "#" },
  ];

  return (
    <header className="w-full bg-background border-b border-border sticky top-0 z-50 backdrop-blur-sm">
      {/* Top promotional banner */}
      <div className="bg-gradient-brand text-primary-foreground py-2 px-4">
        <div className="container mx-auto flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-2 sm:gap-3">
            <img
              src="/logo-main/logo.png"
              alt="Maa Baglamukhi Sadhna Sansthan"
              className="w-12 h-12 sm:w-16 sm:h-16 object-contain"
            />
            <div className="flex flex-col">
              <span className="text-sm sm:text-xl font-bold text-foreground">
                Maa Baglamukhi Sadhna Sansthan
              </span>
            </div>
          </div>

          {/* Desktop Search bar */}
          <div className="hidden lg:flex items-center flex-1 max-w-md mx-8">
            <div className="relative w-full">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
              <Input
                placeholder="Search..."
                className="pl-10 pr-4"
              />
            </div>
          </div>

          {/* Right actions */}
          <div className="flex items-center gap-2 sm:gap-4">
            <Button variant="outline" size="sm" className="hidden sm:flex">
              Join hands Today
            </Button>
            <Button size="sm" variant="ghost" className="relative hidden sm:flex">
              <ShoppingCart className="w-5 h-5" />
              <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                3
              </span>
            </Button>
            <Button size="sm" variant="ghost" className="hidden sm:flex">
              <User className="w-5 h-5" />
            </Button>

            
            {/* Mobile Search Toggle */}
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsSearchOpen(!isSearchOpen)}
              className="lg:hidden"
            >
              {isSearchOpen ? <X className="w-4 h-4" /> : <Search className="w-4 h-4" />}
            </Button>

            {/* Mobile Menu */}
            <Sheet>
              <SheetTrigger asChild>
                <Button size="sm" variant="ghost" className="lg:hidden">
                  <Menu className="w-5 h-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-80 bg-background border-l border-border">
                <div className="flex flex-col space-y-6 mt-8">
                  {/* Mobile Navigation */}
                  <nav className="flex flex-col space-y-2">
                    <h3 className="font-semibold text-foreground mb-4 text-lg">Navigation</h3>
                    {navigationItems.map((item) => (
                      <a
                        key={item.label}
                        href={item.href}
                        className="text-muted-foreground font-medium hover:text-accent transition-colors py-2 block"
                      >
                        {item.label}
                      </a>
                    ))}
                  </nav>

                  {/* Mobile Actions */}
                  <div className="pt-4 border-t border-border space-y-3">
                    <h3 className="font-semibold text-foreground mb-4 text-lg">Quick Actions</h3>
                    <Button className="w-full" size="lg">
                      Join hands Today
                    </Button>
                    <div className="flex gap-2">
                      <Button variant="outline" size="sm" className="flex-1">
                        <ShoppingCart className="w-4 h-4 mr-2" />
                        Cart (3)
                      </Button>
                      <Button variant="outline" size="sm" className="flex-1">
                        <User className="w-4 h-4 mr-2" />
                        Account
                      </Button>
                    </div>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>

      {/* Mobile Search Bar (when toggled) */}
      {isSearchOpen && (
        <div className="lg:hidden border-t border-border bg-background p-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search..."
              className="pl-10"
              autoFocus
            />
          </div>
        </div>
      )}

      {/* Desktop Navigation */}
      <nav className="px-4 py-3 bg-background hidden lg:block">
        <div className="container mx-auto">
          <div className="flex items-center justify-center gap-20">
            {navigationItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-muted-foreground font-medium hover:text-accent transition-colors"
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;