import { Button } from "@/components/ui/button";
import { Facebook, Twitter, Instagram, Youtube } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
          {/* Company info */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <img 
                src="/logo-main/logo.png" 
                alt="Maa Baglamukhi Sadhna Sansthan" 
                className="w-10 h-10 object-contain"
              />
              <span className="text-lg font-bold text-foreground">Maa Baglamukhi Sadhna Sansthan</span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Dedicated to spiritual growth, divine blessings, and community service. 
              Spreading the sacred teachings of Maa Baglamukhi through devotion and seva.
            </p>
            <div className="mt-4">
              <p className="text-sm text-muted-foreground">
                <span className="font-medium">Address:</span><br />
                Maa Baglamukhi Yoga and Sadhana Center<br />
                MIJ 71, Juhi Enclave, Siktour Chauraha<br />
                Khorabar, Gorakhpur, Uttar Pradesh, 273010
              </p>
            </div>
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

          {/* Spiritual Services */}
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">Spiritual Services</h3>
            <ul className="space-y-2">
              {["Pooja Items", "Spiritual Guidance", "Yoga Classes", "Meditation Sessions", "Religious Ceremonies", "Divine Blessings"].map((item) => (
                <li key={item}>
                  <Button variant="link" className="p-0 h-auto text-sm text-muted-foreground hover:text-primary">
                    {item}
                  </Button>
                </li>
              ))}
            </ul>
          </div>

          {/* Community */}
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">Community</h3>
            <ul className="space-y-2">
              {["Donations", "Volunteer Programs", "Events", "Gallery", "Spiritual Teachings", "Community Seva"].map((item) => (
                <li key={item}>
                  <Button variant="link" className="p-0 h-auto text-sm text-muted-foreground hover:text-primary">
                    {item}
                  </Button>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">Quick Links</h3>
            <ul className="space-y-2">
              {["About Us", "Contact Us", "Privacy Policy", "Terms of Service", "Sitemap", "Help Center"].map((item) => (
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
              © 2025 Maa Baglamukhi Sadhna Sansthan. All rights reserved.
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