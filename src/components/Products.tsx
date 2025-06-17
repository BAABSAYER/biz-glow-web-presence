
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight, Smartphone, Monitor, Tablet, Wifi } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const Products = () => {
  const { t } = useLanguage();
  
  const productCategories = [
    {
      icon: Monitor,
      title: t('products.pos_terminals.title'),
      description: t('products.pos_terminals.description'),
      image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=600&h=400&fit=crop",
      products: [
        t('products.pos_terminals.product1'),
        t('products.pos_terminals.product2'),
        t('products.pos_terminals.product3')
      ]
    },
    {
      icon: Smartphone,
      title: t('products.mobile.title'),
      description: t('products.mobile.description'),
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=600&h=400&fit=crop",
      products: [
        t('products.mobile.product1'),
        t('products.mobile.product2'),
        t('products.mobile.product3')
      ]
    },
    {
      icon: Tablet,
      title: t('products.tablet.title'),
      description: t('products.tablet.description'),
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
      products: [
        t('products.tablet.product1'),
        t('products.tablet.product2'),
        t('products.tablet.product3')
      ]
    },
    {
      icon: Wifi,
      title: t('products.iot_devices.title'),
      description: t('products.iot_devices.description'),
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&h=400&fit=crop",
      products: [
        t('products.iot_devices.product1'),
        t('products.iot_devices.product2'),
        t('products.iot_devices.product3')
      ]
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
            {t('products.title')}
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {t('products.subtitle')}
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
                  {t('products.learn_more')}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action Section */}
        <div className="text-center bg-gradient-to-r from-talah-primary to-talah-accent rounded-2xl p-8 text-white">
          <h3 className="text-2xl font-bold mb-4">{t('products.custom.title')}</h3>
          <p className="text-lg mb-6 opacity-90">
            {t('products.custom.description')}
          </p>
          <Button 
            onClick={scrollToContact}
            size="lg"
            variant="secondary"
            className="bg-white text-talah-primary hover:bg-gray-100 px-8 py-3"
          >
            {t('products.custom.cta')}
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Products;
