import { useLanguage } from '@/contexts/LanguageContext';
import { Handshake } from 'lucide-react';

const Partnerships = () => {
  const { t } = useLanguage();

  const partners = [
    { name: 'Hikvision', logo: '/lovable-uploads/hikvision-logo.png' },
    { name: 'Urovo', logo: '/lovable-uploads/urovo-logo.png' }
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

        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 lg:gap-16 max-w-6xl mx-auto mb-16">
          {partners.map((partner, index) => (
            <div key={index} className="flex items-center justify-center">
              <img 
                src={partner.logo} 
                alt={`${partner.name} logo`}
                className="h-16 md:h-20 lg:h-24 object-contain opacity-70 hover:opacity-100 transition-opacity duration-300"
                style={{ maxWidth: '200px' }}
                onLoad={() => console.log(`✓ ${partner.name} PNG logo loaded successfully`)}
                onError={(e) => {
                  console.error(`✗ Failed to load ${partner.name} PNG logo:`, e);
                  const target = e.currentTarget as HTMLImageElement;
                  target.style.display = 'none';
                  target.insertAdjacentHTML('afterend', `<div class="text-sm text-muted-foreground">${partner.name}</div>`);
                }}
              />
            </div>
          ))}
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