import { useLanguage } from '@/contexts/LanguageContext';
import { Card, CardContent } from '@/components/ui/card';
import { Handshake } from 'lucide-react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const Partnerships = () => {
  const { t } = useLanguage();

  const partners = [
    { name: 'Urovo', logo: '/lovable-uploads/urovo-logo.png' },
    { name: 'Hikvision', logo: '/lovable-uploads/hikvision-logo.png' },
    { name: 'Huawei', logo: '/lovable-uploads/huawei-logo.png' }
  ];

  return (
    <section id="partnerships" className="py-20 bg-muted/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-4">
            <Handshake className="h-12 w-12 text-primary mr-3" />
            <h2 className="text-4xl font-bold text-foreground">
              {t('partnerships.title')}
            </h2>
          </div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            {t('partnerships.subtitle')}
          </p>
        </div>

        <div className="relative max-w-5xl mx-auto mb-16">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-4">
              {partners.map((partner, index) => (
                <CarouselItem key={index} className="pl-4 basis-1/2 md:basis-1/3 lg:basis-1/4">
                  <div className="h-24 flex items-center justify-center bg-white rounded-lg p-4 hover:shadow-lg transition-shadow">
                    <img 
                      src={partner.logo} 
                      alt={`${partner.name} logo`}
                      className="max-w-full max-h-full object-contain hover:scale-105 transition-all duration-300"
                      style={{ maxWidth: '150px', maxHeight: '80px' }}
                      onLoad={() => console.log(`${partner.name} logo loaded`)}
                      onError={(e) => {
                        console.error(`Failed to load ${partner.name} logo`);
                        const target = e.currentTarget as HTMLImageElement;
                        target.style.display = 'none';
                        target.insertAdjacentHTML('afterend', `<div class="text-sm text-gray-600">${partner.name}</div>`);
                      }}
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden sm:flex" />
            <CarouselNext className="hidden sm:flex" />
          </Carousel>
        </div>

        <div className="text-center bg-card p-8 rounded-lg border">
          <h3 className="text-2xl font-bold text-foreground mb-4">
            {t('partnerships.join.title')}
          </h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            {t('partnerships.join.description')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#contact"
              className="inline-flex items-center justify-center px-6 py-3 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors font-medium"
            >
              {t('partnerships.join.partner_cta')}
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center px-6 py-3 border border-input bg-background hover:bg-accent hover:text-accent-foreground rounded-md transition-colors font-medium"
            >
              {t('partnerships.join.distributor_cta')}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Partnerships;