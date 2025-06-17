
import { Card, CardContent } from '@/components/ui/card';
import { Target, Users, Lightbulb, Award } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const About = () => {
  const { t } = useLanguage();
  
  const values = [
    {
      icon: Target,
      title: t('about.mission.title'),
      description: t('about.mission.description')
    },
    {
      icon: Users,
      title: t('about.team.title'),
      description: t('about.team.description')
    },
    {
      icon: Lightbulb,
      title: t('about.innovation.title'),
      description: t('about.innovation.description')
    },
    {
      icon: Award,
      title: t('about.quality.title'),
      description: t('about.quality.description')
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-talah-primary mb-4">
                {t('about.title')}
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                {t('about.description1')}
              </p>
            </div>

            <div className="space-y-4">
              <p className="text-gray-600">
                {t('about.description2')}
              </p>
              
              <p className="text-gray-600">
                {t('about.description3')}
              </p>
            </div>
          </div>

          {/* Right Content - Values */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {values.map((value, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-all duration-300 border-0 shadow-md">
                <CardContent className="p-6 space-y-4">
                  <div className="mx-auto w-fit p-3 bg-gradient-to-br from-talah-accent/10 to-talah-primary/10 rounded-xl">
                    <value.icon className="h-8 w-8 text-talah-accent" />
                  </div>
                  <h3 className="font-semibold text-talah-primary text-lg">{value.title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
