import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Mail, Clock, Facebook, Instagram, Youtube, Twitter } from "lucide-react";

const Contact = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-brand text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Contact Us</h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto opacity-90">
            Connect with us for spiritual guidance, donations, or any inquiries
          </p>
        </div>
      </section>

      {/* Contact Information & Form */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            
            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold mb-6 text-foreground">Get in Touch</h2>
                <p className="text-lg text-muted-foreground mb-8">
                  We're here to assist you on your spiritual journey. Reach out to us through any of the following ways.
                </p>
              </div>

              <div className="space-y-6">
                <Card className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Our Address</h3>
                      <p className="text-muted-foreground">
                        Divya Pitambara Foundation<br />
                        Baglamukhi Temple Complex<br />
                        Datia, Madhya Pradesh - 475661<br />
                        India
                      </p>
                    </div>
                  </div>
                </Card>

                <Card className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Phone className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Phone Numbers</h3>
                      <p className="text-muted-foreground">
                        Main Office: +91 98765 43210<br />
                        Temple: +91 98765 43211<br />
                        Emergency: +91 98765 43212
                      </p>
                    </div>
                  </div>
                </Card>

                <Card className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Mail className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Email Addresses</h3>
                      <p className="text-muted-foreground">
                        General: info@divyapitambara.org<br />
                        Donations: donations@divyapitambara.org<br />
                        Events: events@divyapitambara.org
                      </p>
                    </div>
                  </div>
                </Card>

                <Card className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Clock className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Temple Timings</h3>
                      <p className="text-muted-foreground">
                        Morning: 5:00 AM - 12:00 PM<br />
                        Evening: 4:00 PM - 9:00 PM<br />
                        Special occasions: 24 hours
                      </p>
                    </div>
                  </div>
                </Card>
              </div>

              {/* Social Media */}
              <div>
                <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
                <div className="flex gap-4">
                  <Button variant="outline" size="icon">
                    <Facebook className="w-5 h-5" />
                  </Button>
                  <Button variant="outline" size="icon">
                    <Instagram className="w-5 h-5" />
                  </Button>
                  <Button variant="outline" size="icon">
                    <Youtube className="w-5 h-5" />
                  </Button>
                  <Button variant="outline" size="icon">
                    <Twitter className="w-5 h-5" />
                  </Button>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl">Send us a Message</CardTitle>
                  <p className="text-muted-foreground">
                    Fill out the form below and we'll get back to you as soon as possible.
                  </p>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="first-name">First Name *</Label>
                      <Input id="first-name" placeholder="Enter your first name" required />
                    </div>
                    <div>
                      <Label htmlFor="last-name">Last Name *</Label>
                      <Input id="last-name" placeholder="Enter your last name" required />
                    </div>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="email">Email Address *</Label>
                      <Input id="email" type="email" placeholder="Enter your email" required />
                    </div>
                    <div>
                      <Label htmlFor="phone">Phone Number *</Label>
                      <Input id="phone" type="tel" placeholder="Enter your phone number" required />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="instagram">Instagram Username</Label>
                      <Input id="instagram" placeholder="@yourusername" />
                    </div>
                    <div>
                      <Label htmlFor="facebook">Facebook Username</Label>
                      <Input id="facebook" placeholder="Your Facebook profile" />
                    </div>
                  </div>
                  
                  <div>
                    <Label htmlFor="subject">Subject *</Label>
                    <Input id="subject" placeholder="What is this regarding?" required />
                  </div>
                  
                  <div>
                    <Label htmlFor="message">Message *</Label>
                    <Textarea 
                      id="message" 
                      placeholder="Please provide details about your inquiry, how you'd like to connect with us, or any specific requirements"
                      rows={5}
                      required 
                    />
                  </div>

                  <div>
                    <Label htmlFor="how-connect">How would you like us to connect with you?</Label>
                    <Textarea 
                      id="how-connect" 
                      placeholder="Please specify your preferred method of communication and best time to reach you"
                      rows={3}
                    />
                  </div>
                  
                  <Button className="w-full" size="lg">
                    Send Message
                  </Button>
                  
                  <p className="text-sm text-muted-foreground text-center">
                    We typically respond within 24 hours during business days.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-secondary/20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-4 text-foreground">Find Us</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Visit our temple and experience the divine presence of Maa Pitambara
            </p>
          </div>
          
          <div className="bg-gray-200 rounded-lg h-96 flex items-center justify-center">
            <div className="text-center">
              <MapPin className="w-16 h-16 mx-auto mb-4 text-gray-500" />
              <p className="text-lg font-semibold text-gray-600">Interactive Map Coming Soon</p>
              <p className="text-gray-500">Datia, Madhya Pradesh</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-foreground">Frequently Asked Questions</h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="p-6">
              <h3 className="text-xl font-semibold mb-3">What are the temple visiting hours?</h3>
              <p className="text-muted-foreground">
                Our temple is open from 5:00 AM to 12:00 PM and 4:00 PM to 9:00 PM daily. 
                During special festivals, we remain open 24 hours.
              </p>
            </Card>
            
            <Card className="p-6">
              <h3 className="text-xl font-semibold mb-3">How can I make a donation?</h3>
              <p className="text-muted-foreground">
                You can donate through our website, visit our donation page, or contact us directly. 
                We accept both online and offline donations.
              </p>
            </Card>
            
            <Card className="p-6">
              <h3 className="text-xl font-semibold mb-3">Do you organize spiritual programs?</h3>
              <p className="text-muted-foreground">
                Yes, we regularly organize satsangs, spiritual discourses, festivals, and educational 
                programs. Check our events page for upcoming programs.
              </p>
            </Card>
            
            <Card className="p-6">
              <h3 className="text-xl font-semibold mb-3">How can I volunteer?</h3>
              <p className="text-muted-foreground">
                We welcome volunteers for various activities. Please contact us through this form 
                or call our office to learn about volunteer opportunities.
              </p>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;