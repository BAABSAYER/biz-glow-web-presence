import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useCases } from '@/data/useCases';

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

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {useCases.map((useCase) => (
            <Card key={useCase.id} className="group hover:shadow-2xl transition-all duration-500 border-0 shadow-lg overflow-hidden bg-white">
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={useCase.heroImage} 
                  alt={useCase.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent"></div>
                <div className="absolute bottom-4 left-4">
                  <h3 className="text-white font-bold text-lg">{useCase.title}</h3>
                </div>
              </div>
              
              <CardHeader className="pb-4">
                <CardDescription className="text-muted-foreground text-sm leading-relaxed">
                  {useCase.summary}
                </CardDescription>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <h4 className="font-semibold text-primary text-sm">Key Benefits:</h4>
                  <ul className="space-y-2">
                    {useCase.benefits.slice(0, 3).map((benefit, index) => (
                      <li key={index} className="flex items-center text-sm text-muted-foreground">
                        <div className="w-3 h-3 bg-gradient-to-r from-accent to-secondary rounded-full mr-3 flex-shrink-0 shadow-sm"></div>
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <Link to={`/use-cases/${useCase.slug}`}>
                  <Button 
                    variant="outline" 
                    className="w-full border-2 border-accent text-accent hover:bg-accent hover:text-white group-hover:scale-105 transition-all duration-300 font-semibold"
                  >
                    Explore Solutions
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action Section */}
        <div className="text-center bg-gradient-to-r from-primary via-primary to-accent rounded-3xl p-12 text-white shadow-2xl">
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
    </section>
  );
};

export default UseCases;