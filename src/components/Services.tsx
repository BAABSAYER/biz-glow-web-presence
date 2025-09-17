
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Monitor, Wifi, Smartphone, Database, Headphones } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const Services = () => {
  const { t } = useLanguage();
  
  const services = [
    {
      icon: Monitor,
      title: t('services.pos.title'),
      description: t('services.pos.description'),
      features: [
        t('services.pos.feature1'),
        t('services.pos.feature2'),
        t('services.pos.feature3'),
        t('services.pos.feature4')
      ]
    },
    {
      icon: Wifi,
      title: t('services.iot.title'),
      description: t('services.iot.description'),
      features: [
        t('services.iot.feature1'),
        t('services.iot.feature2'),
        t('services.iot.feature3'),
        t('services.iot.feature4')
      ]
    },
    {
      icon: Smartphone,
      title: t('services.mobility.title'),
      description: t('services.mobility.description'),
      features: [
        t('services.mobility.feature1'),
        t('services.mobility.feature2'),
        t('services.mobility.feature3'),
        t('services.mobility.feature4')
      ]
    },
    {
      icon: Database,
      title: t('services.data.title'),
      description: t('services.data.description'),
      features: [
        t('services.data.feature1'),
        t('services.data.feature2'),
        t('services.data.feature3'),
        t('services.data.feature4')
      ]
    },
    {
      icon: Headphones,
      title: t('services.support.title'),
      description: t('services.support.description'),
      features: [
        t('services.support.feature1'),
        t('services.support.feature2'),
        t('services.support.feature3'),
        t('services.support.feature4')
      ]
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-talah-primary mb-4">
            {t('services.title')}
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {t('services.subtitle')}
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
