
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Mail, Phone, MapPin, MessageCircle } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    toast({
      title: "Message Sent!",
      description: "Thank you for your message. We'll get back to you soon.",
    });
    setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const openWhatsApp = () => {
    const phoneNumber = "+966540079024";
    const message = "Hello! I'm interested in your IT services.";
    window.open(`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-background via-primary/5 to-accent/10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Get in Touch
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Ready to transform your business with our IT solutions? Contact us today for a consultation.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Contact Information */}
          <div className="space-y-6">
            <Card className="border-0 shadow-xl bg-white/80 backdrop-blur-sm hover:bg-white transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-primary font-bold">Contact Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-gradient-to-br from-accent/20 to-primary/20 rounded-xl">
                    <Mail className="h-6 w-6 text-accent" />
                  </div>
                  <div>
                    <div className="font-semibold text-primary">Email</div>
                    <div className="text-muted-foreground">info@talahtech.com</div>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-gradient-to-br from-accent/20 to-primary/20 rounded-xl">
                    <Phone className="h-6 w-6 text-accent" />
                  </div>
                  <div>
                    <div className="font-semibold text-primary">Phone</div>
                    <div className="text-muted-foreground">+966 54 007 9024</div>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-gradient-to-br from-accent/20 to-primary/20 rounded-xl">
                    <MapPin className="h-6 w-6 text-accent" />
                  </div>
                  <div>
                    <div className="font-semibold text-primary">Address</div>
                    <div className="text-muted-foreground">Riyadh, Saudi Arabia</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* WhatsApp Chat */}
            <Card className="border-0 shadow-xl bg-white/80 backdrop-blur-sm hover:bg-white transition-all duration-300">
              <CardContent className="p-8 text-center">
                <div className="p-4 bg-green-50 rounded-2xl w-fit mx-auto mb-4">
                  <MessageCircle className="h-12 w-12 text-green-500" />
                </div>
                <h3 className="font-bold text-primary mb-3">Chat with us</h3>
                <p className="text-muted-foreground text-sm mb-6">
                  Get instant support via WhatsApp
                </p>
                <Button 
                  onClick={openWhatsApp}
                  className="bg-green-500 hover:bg-green-600 text-white w-full font-semibold py-3 shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  Start WhatsApp Chat
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="border-0 shadow-xl bg-white/80 backdrop-blur-sm hover:bg-white transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-primary font-bold text-xl">Send us a Message</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="name" className="font-semibold text-primary">Full Name</Label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="border-2 border-muted focus:border-accent transition-colors duration-300"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email" className="font-semibold text-primary">Email</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="border-2 border-muted focus:border-accent transition-colors duration-300"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="phone" className="font-semibold text-primary">Phone Number</Label>
                      <Input
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="border-2 border-muted focus:border-accent transition-colors duration-300"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="subject" className="font-semibold text-primary">Subject</Label>
                      <Input
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        className="border-2 border-muted focus:border-accent transition-colors duration-300"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message" className="font-semibold text-primary">Message</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="border-2 border-muted focus:border-accent transition-colors duration-300"
                    />
                  </div>

                  <Button 
                    type="submit" 
                    className="w-full bg-primary hover:bg-primary/90 text-white font-semibold py-4 text-lg shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
