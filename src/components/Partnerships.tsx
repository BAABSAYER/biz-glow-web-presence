import { useLanguage } from '@/contexts/LanguageContext';
import { Handshake } from 'lucide-react';

const Partnerships = () => {
  const { t } = useLanguage();

  const partners = [
    { name: 'Hikvision', logo: '/lovable-uploads/hikvision-logo.png' },
    { name: 'Urovo', logo: '/lovable-uploads/urovo-logo.png' },
    { name: 'Huawei', logo: '/lovable-uploads/huawei-logo.png' }
  ];

  return (
    <section id="partnerships" className="py-20 bg-gradient-to-br from-accent/5 via-background to-primary/5">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-6">
            <div className="p-4 bg-gradient-to-br from-accent/20 to-primary/20 rounded-2xl mr-4 shadow-lg">
              <Handshake className="h-12 w-12 text-accent" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-primary">
              {t('partnerships.title')}
            </h2>
          </div>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            {t('partnerships.subtitle')}
          </p>
        </div>

        <div className="flex flex-wrap justify-center items-center gap-12 md:gap-16 lg:gap-20 max-w-6xl mx-auto mb-16">
          {partners.map((partner, index) => (
            <div key={index} className="flex items-center justify-center p-6 bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105">
              <img 
                src={partner.logo} 
                alt={`${partner.name} logo`}
                className="h-20 md:h-24 lg:h-28 object-contain"
                style={{ maxWidth: '180px' }}
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

        <div className="text-center bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10 p-12 rounded-3xl border border-accent/20 shadow-xl">
          <h3 className="text-2xl md:text-3xl font-bold text-primary mb-6">
            {t('partnerships.join.title')}
          </h3>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto text-lg leading-relaxed">
            {t('partnerships.join.description')}
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a
              href="#contact"
              className="inline-flex items-center justify-center px-10 py-4 bg-primary text-white rounded-xl hover:bg-primary/90 transition-all duration-300 font-semibold text-lg shadow-lg hover:shadow-xl hover:scale-105"
            >
              {t('partnerships.join.partner_cta')}
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center px-10 py-4 border-2 border-accent text-accent bg-white hover:bg-accent hover:text-white rounded-xl transition-all duration-300 font-semibold text-lg shadow-lg hover:shadow-xl hover:scale-105"
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