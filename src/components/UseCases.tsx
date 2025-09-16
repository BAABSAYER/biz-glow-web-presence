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
          <h2 className="text-3xl md:text-4xl font-bold text-talah-primary mb-4">
            Use Cases & Solutions
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover how our technology solutions address specific industry challenges and drive business success
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {useCases.map((useCase) => (
            <Card key={useCase.id} className="group hover:shadow-2xl transition-all duration-500 border-0 shadow-lg overflow-hidden">
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={useCase.heroImage} 
                  alt={useCase.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-4 left-4">
                  <h3 className="text-white font-semibold text-lg">{useCase.title}</h3>
                </div>
              </div>
              
              <CardHeader className="pb-4">
                <CardDescription className="text-gray-600 text-sm">
                  {useCase.summary}
                </CardDescription>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <h4 className="font-medium text-talah-primary text-sm">Key Benefits:</h4>
                  <ul className="space-y-1">
                    {useCase.benefits.slice(0, 3).map((benefit, index) => (
                      <li key={index} className="flex items-center text-sm text-gray-600">
                        <div className="w-2 h-2 bg-talah-accent rounded-full mr-3 flex-shrink-0"></div>
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <Link to={`/use-cases/${useCase.slug}`}>
                  <Button 
                    variant="outline" 
                    className="w-full border-talah-accent text-talah-accent hover:bg-talah-accent hover:text-white group-hover:scale-105 transition-all duration-300"
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
        <div className="text-center bg-gradient-to-r from-talah-primary to-talah-accent rounded-2xl p-8 text-white">
          <h3 className="text-2xl font-bold mb-4">Need a Custom Solution?</h3>
          <p className="text-lg mb-6 opacity-90">
            Our experts can design tailored technology solutions to meet your specific industry requirements
          </p>
          <Button 
            size="lg"
            variant="secondary"
            className="bg-white text-talah-primary hover:bg-gray-100 px-8 py-3"
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