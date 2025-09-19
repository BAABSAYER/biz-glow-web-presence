import { useLanguage } from '@/contexts/LanguageContext';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Building2, Handshake, Globe, Award } from 'lucide-react';

const Partnerships = () => {
  const { t } = useLanguage();

  const partnerCategories = [
    {
      icon: Building2,
      title: t('partnerships.technology.title'),
      description: t('partnerships.technology.description'),
      partners: [
        'Urovo',
        'Hikvision', 
        'Huawei',
        'Microsoft Partner',
        'Intel Authorized',
        'Android Enterprise'
      ]
    },
    {
      icon: Globe,
      title: t('partnerships.global.title'),
      description: t('partnerships.global.description'),
      partners: [
        'Middle East Distributors',
        'European Partners',
        'Asian Markets',
        'African Network'
      ]
    },
    {
      icon: Award,
      title: t('partnerships.certified.title'),
      description: t('partnerships.certified.description'),
      partners: [
        'ISO 9001 Certified',
        'Industry Standards',
        'Quality Assurance',
        'Best Practices'
      ]
    }
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

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {partnerCategories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <Card key={index} className="h-full hover:shadow-lg transition-shadow">
                <CardContent className="p-8 text-center">
                  <div className="flex justify-center mb-6">
                    <div className="p-4 bg-primary/10 rounded-full">
                      <IconComponent className="h-8 w-8 text-primary" />
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold text-foreground mb-4">
                    {category.title}
                  </h3>
                  <p className="text-muted-foreground mb-6">
                    {category.description}
                  </p>
                  <div className="flex flex-wrap gap-2 justify-center">
                    {category.partners.map((partner, partnerIndex) => (
                      <Badge key={partnerIndex} variant="secondary" className="text-sm">
                        {partner}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            );
          })}
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