
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
    <section id="about" className="py-20 bg-gradient-to-br from-primary/5 via-background to-accent/5">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
                {t('about.title')}
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                {t('about.description1')}
              </p>
            </div>

            <div className="space-y-6">
              <p className="text-muted-foreground leading-relaxed">
                {t('about.description2')}
              </p>
              
              <p className="text-muted-foreground leading-relaxed">
                {t('about.description3')}
              </p>
            </div>

            <div className="flex items-center space-x-4 pt-4">
              <div className="w-16 h-1 bg-gradient-to-r from-accent to-secondary rounded-full"></div>
              <span className="text-primary font-semibold">Growing Future Through Technology</span>
            </div>
          </div>

          {/* Right Content - Values */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {values.map((value, index) => (
              <Card key={index} className="text-center hover:shadow-2xl transition-all duration-500 border-0 shadow-lg group bg-white/80 backdrop-blur-sm hover:bg-white">
                <CardContent className="p-8 space-y-4">
                  <div className="mx-auto w-fit p-4 bg-gradient-to-br from-accent/20 to-primary/20 rounded-2xl group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <value.icon className="h-10 w-10 text-accent" />
                  </div>
                  <h3 className="font-bold text-primary text-lg">{value.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{value.description}</p>
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
