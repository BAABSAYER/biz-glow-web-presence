
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight, Smartphone, Monitor, Tablet, Wifi } from 'lucide-react';

const Products = () => {
  const productCategories = [
    {
      icon: Monitor,
      title: "POS Terminals",
      description: "Advanced point-of-sale systems for retail and hospitality",
      image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=600&h=400&fit=crop",
      products: ["Desktop POS", "All-in-One Terminals", "Touchscreen Systems"]
    },
    {
      icon: Smartphone,
      title: "Mobile Computers",
      description: "Rugged handheld devices for enterprise mobility",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=600&h=400&fit=crop",
      products: ["Handheld Scanners", "Mobile PDAs", "Rugged Smartphones"]
    },
    {
      icon: Tablet,
      title: "Tablet Solutions",
      description: "Industrial tablets for various business applications",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
      products: ["Industrial Tablets", "Kiosk Tablets", "Field Service Tablets"]
    },
    {
      icon: Wifi,
      title: "IoT Devices",
      description: "Smart connected devices for the Internet of Things",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&h=400&fit=crop",
      products: ["Smart Sensors", "Gateway Devices", "Connectivity Solutions"]
    }
  ];

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="products" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-talah-primary mb-4">
            Our Products
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover our comprehensive range of enterprise-grade technology solutions designed 
            to accelerate your business transformation
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 mb-12">
          {productCategories.map((category, index) => (
            <Card key={index} className="group hover:shadow-2xl transition-all duration-500 border-0 shadow-lg overflow-hidden">
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={category.image} 
                  alt={category.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-4 left-4">
                  <category.icon className="h-8 w-8 text-white mb-2" />
                </div>
              </div>
              
              <CardHeader className="pb-4">
                <CardTitle className="text-xl font-semibold text-talah-primary group-hover:text-talah-accent transition-colors">
                  {category.title}
                </CardTitle>
                <CardDescription className="text-gray-600">
                  {category.description}
                </CardDescription>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <ul className="space-y-2">
                  {category.products.map((product, productIndex) => (
                    <li key={productIndex} className="flex items-center text-sm text-gray-600">
                      <div className="w-2 h-2 bg-talah-accent rounded-full mr-3 flex-shrink-0"></div>
                      {product}
                    </li>
                  ))}
                </ul>
                
                <Button 
                  onClick={scrollToContact}
                  variant="outline" 
                  className="w-full border-talah-accent text-talah-accent hover:bg-talah-accent hover:text-white group-hover:scale-105 transition-all duration-300"
                >
                  Learn More
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action Section */}
        <div className="text-center bg-gradient-to-r from-talah-primary to-talah-accent rounded-2xl p-8 text-white">
          <h3 className="text-2xl font-bold mb-4">Need a Custom Solution?</h3>
          <p className="text-lg mb-6 opacity-90">
            Our team can design and develop tailored products to meet your specific business requirements
          </p>
          <Button 
            onClick={scrollToContact}
            size="lg"
            variant="secondary"
            className="bg-white text-talah-primary hover:bg-gray-100 px-8 py-3"
          >
            Contact Our Experts
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Products;
