import { Button } from "@/components/ui/button";
import { Facebook, Twitter, Instagram, Youtube } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
          {/* Company info */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-gradient-brand rounded-lg flex items-center justify-center">
                <span className="text-white font-bold">S</span>
              </div>
              <span className="text-lg font-bold text-foreground">SquareSigns</span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Professional custom signage solutions for businesses, events, and personal use. 
              Quality you can trust, service you can count on.
            </p>
            <div className="flex items-center gap-3">
              <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-primary">
                <Facebook className="w-4 h-4" />
              </Button>
              <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-primary">
                <Twitter className="w-4 h-4" />
              </Button>
              <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-primary">
                <Instagram className="w-4 h-4" />
              </Button>
              <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-primary">
                <Youtube className="w-4 h-4" />
              </Button>
            </div>
          </div>

          {/* Products */}
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">Products</h3>
            <ul className="space-y-2">
              {["Rigid Signs", "Banners & Displays", "Decals & Magnets", "Trade Show Displays", "Office Signs", "Outdoor Signs"].map((item) => (
                <li key={item}>
                  <Button variant="link" className="p-0 h-auto text-sm text-muted-foreground hover:text-primary">
                    {item}
                  </Button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">Services</h3>
            <ul className="space-y-2">
              {["Custom Design", "Templates", "Rush Orders", "Bulk Pricing", "Design Services", "Installation"].map((item) => (
                <li key={item}>
                  <Button variant="link" className="p-0 h-auto text-sm text-muted-foreground hover:text-primary">
                    {item}
                  </Button>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">Support</h3>
            <ul className="space-y-2">
              {["Contact Us", "FAQ", "Shipping Info", "Returns", "Track Order", "Help Center"].map((item) => (
                <li key={item}>
                  <Button variant="link" className="p-0 h-auto text-sm text-muted-foreground hover:text-primary">
                    {item}
                  </Button>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground">
              © 2024 SquareSigns. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <Button variant="link" className="p-0 h-auto text-sm text-muted-foreground hover:text-primary">
                Privacy Policy
              </Button>
              <Button variant="link" className="p-0 h-auto text-sm text-muted-foreground hover:text-primary">
                Terms of Service
              </Button>
              <Button variant="link" className="p-0 h-auto text-sm text-muted-foreground hover:text-primary">
                Cookie Policy
              </Button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;