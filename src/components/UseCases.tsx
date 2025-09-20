import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useCases } from '@/data/useCases';
import ctaBackground from '@/assets/cta-background.png';

const UseCases = () => {
  return (
    <section id="use-cases" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Use Cases & Solutions
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover how our technology solutions address specific industry challenges and drive business success
          </p>
        </div>

        <div className="grid md:grid-cols-3 lg:grid-cols-3 gap-8 mb-12">
          {useCases.map((useCase) => (
            <Link key={useCase.id} to={`/use-cases/${useCase.slug}`} className="h-full">
              <Card className="group hover:shadow-2xl transition-all duration-500 border-0 shadow-lg bg-white/80 backdrop-blur-sm hover:bg-white text-center cursor-pointer h-full">
                <CardContent className="p-8 space-y-4 flex flex-col items-center justify-center h-full">
                  <div className="relative h-16 w-16 mx-auto mb-4">
                    <img 
                      src={useCase.heroImage} 
                      alt={useCase.title}
                      className="w-full h-full object-cover rounded-xl group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <CardTitle className="text-lg font-bold text-primary group-hover:text-accent transition-colors duration-300">
                    {useCase.title}
                  </CardTitle>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>

        {/* Call to Action Section */}
        <div 
          className="relative text-center rounded-3xl p-12 text-white shadow-2xl overflow-hidden"
          style={{ backgroundImage: `url(${ctaBackground})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
        >
          {/* Optional overlay for better text readability */}
          <div className="absolute inset-0 bg-primary/20 rounded-3xl"></div>
          
          <div className="relative z-10">
            <h3 className="text-3xl font-bold mb-4">Need a Custom Solution?</h3>
            <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
              Our experts can design tailored technology solutions to meet your specific industry requirements
            </p>
            <Button 
              size="lg"
              variant="secondary"
              className="bg-white text-primary hover:bg-background px-10 py-4 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
              onClick={() => {
                const contactSection = document.getElementById('contact');
                if (contactSection) {
                  contactSection.scrollIntoView({ behavior: 'smooth' });
                }
              }}
            >
              Contact Our Experts
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UseCases;