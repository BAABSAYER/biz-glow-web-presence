
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Monitor, Wifi, Smartphone, Database, Shield, Headphones } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Monitor,
      title: "POS Systems",
      description: "Modern, intuitive point-of-sale solutions that streamline your retail operations and enhance customer experience.",
      features: ["Cloud-based management", "Real-time analytics", "Multi-payment support", "Inventory tracking"]
    },
    {
      icon: Wifi,
      title: "IoT Solutions",
      description: "Smart, connected devices and sensors that optimize operations and provide valuable insights for your business.",
      features: ["Smart sensors", "Data analytics", "Remote monitoring", "Automated controls"]
    },
    {
      icon: Smartphone,
      title: "Enterprise Mobility",
      description: "Comprehensive mobile solutions that enable your workforce to be productive anywhere, anytime.",
      features: ["Mobile apps", "Device management", "Security protocols", "Remote access"]
    },
    {
      icon: Database,
      title: "Data Management",
      description: "Secure, scalable data solutions that help you store, analyze, and leverage your business information.",
      features: ["Cloud storage", "Data backup", "Analytics platform", "Data security"]
    },
    {
      icon: Shield,
      title: "Cybersecurity",
      description: "Comprehensive security solutions to protect your business from digital threats and ensure compliance.",
      features: ["Threat detection", "Security audits", "Compliance support", "Employee training"]
    },
    {
      icon: Headphones,
      title: "24/7 Support",
      description: "Round-the-clock technical support to ensure your systems run smoothly and efficiently.",
      features: ["Remote assistance", "On-site support", "Maintenance plans", "Emergency response"]
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-talah-primary mb-4">
            Our Services
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Comprehensive IT solutions designed to drive your business forward in the digital age
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="hover:shadow-xl transition-all duration-300 border-0 shadow-lg group">
              <CardHeader className="text-center pb-4">
                <div className="mx-auto mb-4 p-3 bg-gradient-to-br from-talah-accent/10 to-talah-primary/10 rounded-xl w-fit group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="h-8 w-8 text-talah-accent" />
                </div>
                <CardTitle className="text-xl font-semibold text-talah-primary">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <CardDescription className="text-gray-600 text-center">
                  {service.description}
                </CardDescription>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                      <div className="w-2 h-2 bg-talah-accent rounded-full mr-3 flex-shrink-0"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
