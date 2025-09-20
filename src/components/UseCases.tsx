import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useCases } from '@/data/useCases';
import ctaBackground from '@/assets/cta-background.png';

const UseCases = () => {
  return (
    <TooltipProvider>
      <section id="use-cases" className="py-20 bg-gradient-to-br from-primary/5 via-background to-accent/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Industry Solutions
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Specialized technology solutions tailored for your industry needs
            </p>
          </div>

          <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-8 mb-20">
            {useCases.map((useCase, index) => (
              <Tooltip key={useCase.id}>
                <TooltipTrigger asChild>
                  <Link to={`/use-cases/${useCase.slug}`}>
                    <Card className="group cursor-pointer hover:shadow-2xl transition-all duration-500 border-0 shadow-lg bg-white/80 backdrop-blur-sm hover:bg-white text-center animate-fade-in hover-scale">
                      <CardContent className="p-8 space-y-4">
                        <div className="mx-auto mb-4 p-4 bg-gradient-to-br from-accent/20 to-primary/20 rounded-2xl w-fit group-hover:scale-110 transition-transform duration-300 shadow-lg overflow-hidden">
                          <img 
                            src={useCase.heroImage} 
                            alt={useCase.title}
                            className="h-12 w-12 object-cover rounded-lg"
                          />
                        </div>
                        <CardTitle className="text-lg font-bold text-primary">
                          {useCase.title}
                        </CardTitle>
                        <p className="text-sm text-muted-foreground">
                          {useCase.summary.substring(0, 60)}...
                        </p>
                        <Button 
                          variant="ghost" 
                          size="sm"
                          className="opacity-0 group-hover:opacity-100 transition-opacity text-accent hover:text-accent"
                        >
                          View Details <ArrowRight className="ml-1 h-4 w-4" />
                        </Button>
                      </CardContent>
                    </Card>
                  </Link>
                </TooltipTrigger>
                <TooltipContent>
                  <div className="max-w-xs">
                    <p className="font-medium">{useCase.title}</p>
                    <p className="text-sm text-muted-foreground">{useCase.summary}</p>
                    <p className="text-xs mt-1 text-accent">Industries: {useCase.industries.slice(0, 2).join(', ')}</p>
                  </div>
                </TooltipContent>
              </Tooltip>
            ))}
          </div>

          {/* Enhanced CTA Section */}
          <div 
            className="relative rounded-3xl overflow-hidden bg-cover bg-center bg-no-repeat shadow-2xl"
            style={{ backgroundImage: `url(${ctaBackground})` }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/70 to-accent/80" />
            <div className="relative z-10 px-8 py-16 text-center">
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Need a Custom Solution?
              </h3>
              <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                Our technology experts are ready to design the perfect solution for your unique business requirements.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  size="lg"
                  className="bg-accent hover:bg-accent/90 text-primary px-8 py-3 text-lg font-semibold group"
                  onClick={() => {
                    const contactSection = document.getElementById('contact');
                    if (contactSection) {
                      contactSection.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                >
                  Get Free Consultation
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button 
                  variant="outline"
                  size="lg"
                  className="border-white text-white hover:bg-white hover:text-primary px-8 py-3 text-lg font-semibold"
                  onClick={() => window.open('tel:+966111234567', '_self')}
                >
                  Call Expert Now
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </TooltipProvider>
  );
};

export default UseCases;