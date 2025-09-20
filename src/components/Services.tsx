
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { Button } from '@/components/ui/button';
import { Monitor, Wifi, Smartphone, Database, Headphones, ArrowRight } from 'lucide-react';
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
    <TooltipProvider>
      <section id="services" className="py-20 bg-gradient-to-br from-background via-primary/5 to-accent/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              {t('services.title')}
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {t('services.subtitle')}
            </p>
          </div>

          <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-8">
            {services.map((service, index) => (
              <Tooltip key={index}>
                <TooltipTrigger asChild>
                  <Card className="hover:shadow-2xl transition-all duration-500 border-0 shadow-lg group bg-white/80 backdrop-blur-sm hover:bg-white text-center cursor-pointer animate-fade-in hover-scale">
                    <CardContent className="p-8 space-y-4">
                      <div className="mx-auto mb-4 p-4 bg-gradient-to-br from-accent/20 to-primary/20 rounded-2xl w-fit group-hover:scale-110 transition-transform duration-300 shadow-lg">
                        <service.icon className="h-12 w-12 text-accent" />
                      </div>
                      <CardTitle className="text-lg font-bold text-primary">
                        {service.title}
                      </CardTitle>
                      <p className="text-sm text-muted-foreground">
                        {service.description.substring(0, 60)}...
                      </p>
                      <Button 
                        variant="ghost" 
                        size="sm"
                        className="opacity-0 group-hover:opacity-100 transition-opacity text-accent hover:text-accent"
                        onClick={() => {
                          const useCasesSection = document.getElementById('use-cases');
                          if (useCasesSection) {
                            useCasesSection.scrollIntoView({ behavior: 'smooth' });
                          }
                        }}
                      >
                        Learn More <ArrowRight className="ml-1 h-4 w-4" />
                      </Button>
                    </CardContent>
                  </Card>
                </TooltipTrigger>
                <TooltipContent>
                  <p className="max-w-xs">{service.description}</p>
                </TooltipContent>
              </Tooltip>
            ))}
          </div>
        </div>
      </section>
    </TooltipProvider>
  );
};

export default Services;
