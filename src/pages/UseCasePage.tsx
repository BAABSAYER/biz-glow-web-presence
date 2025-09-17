import { useParams, Link } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowLeft, ArrowRight, ChevronRight } from 'lucide-react';
import { useCases } from '@/data/useCases';
import { products } from '@/data/products';
import { useState, useEffect } from 'react';

const UseCasePage = () => {
  const { slug } = useParams();
  
  
  // Scroll to top when component mounts or slug changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);
  
  const useCase = useCases.find(uc => uc.slug === slug);
  
  if (!useCase) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-talah-primary mb-4">Use Case Not Found</h1>
          <Link to="/use-cases">
            <Button variant="outline">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Use Cases
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  const relatedProducts = products.filter(product => 
    product.useCases.includes(useCase.id)
  );


  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white border-b sticky top-0 z-40">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <nav className="flex items-center space-x-2 text-sm text-gray-500">
              <Link to="/" className="hover:text-talah-primary transition-colors">Home</Link>
              <ChevronRight className="h-4 w-4" />
              <Link to="/" className="hover:text-talah-primary transition-colors">Use Cases</Link>
              <ChevronRight className="h-4 w-4" />
              <span className="text-talah-primary font-medium">{useCase.title}</span>
            </nav>
            <Link to="/">
              <Button variant="ghost" size="sm">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Home
              </Button>
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-8 pb-16 bg-gradient-to-br from-talah-primary via-talah-primary to-talah-accent">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="text-white order-2 lg:order-1">
              <div className="inline-flex items-center px-3 py-2 bg-white/10 rounded-full text-sm font-medium mb-6 backdrop-blur-sm">
                <span>Use Case Solution</span>
              </div>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 leading-tight">{useCase.title}</h1>
              <p className="text-lg md:text-xl mb-6 opacity-90 leading-relaxed">{useCase.summary}</p>
              <p className="text-base md:text-lg opacity-80 leading-relaxed mb-8">{useCase.longDescription}</p>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold mb-3">Industries Served:</h3>
                  <div className="flex flex-wrap gap-2">
                    {useCase.industries.map((industry, index) => (
                      <Badge key={index} variant="secondary" className="bg-white/15 text-white border-white/20 backdrop-blur-sm hover:bg-white/25 transition-colors">
                        {industry}
                      </Badge>
                    ))}
                  </div>
                </div>
                
                <Button 
                  size="lg"
                  variant="secondary"
                  className="bg-white text-talah-primary hover:bg-white/90 font-semibold px-8"
                  onClick={() => document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Explore Solutions
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </div>
            </div>
            
            <div className="relative order-1 lg:order-2">
              <div className="relative">
                <img 
                  src={useCase.heroImage} 
                  alt={useCase.title}
                  className="rounded-2xl shadow-2xl w-full h-64 md:h-80 lg:h-96 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-talah-primary mb-8 text-center">Key Benefits</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {useCase.benefits.map((benefit, index) => (
              <div key={index} className="flex items-center space-x-3 bg-white p-4 rounded-lg shadow-sm">
                <div className="w-3 h-3 bg-talah-accent rounded-full flex-shrink-0"></div>
                <span className="text-gray-700">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="py-16 bg-gray-50/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-talah-primary mb-4">Recommended Products</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Curated solutions specifically designed for {useCase.title.toLowerCase()} applications
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {relatedProducts.map((product) => (
              <Card key={product.id} className="group hover:shadow-lg transition-all duration-300">
                <div className="relative h-48 overflow-hidden rounded-t-lg">
                  <img 
                    src={product.heroImage} 
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 right-4">
                    <Badge variant={product.availability === 'in-stock' ? 'default' : 'secondary'}>
                      {product.availability === 'in-stock' ? 'In Stock' : 
                       product.availability === 'pre-order' ? 'Pre-order' : 'Out of Stock'}
                    </Badge>
                  </div>
                </div>
                
                <CardHeader>
                  <CardTitle className="text-lg group-hover:text-talah-accent transition-colors">
                    {product.name}
                  </CardTitle>
                  <CardDescription className="text-sm">
                    {product.shortDescription}
                  </CardDescription>
                </CardHeader>
                
                <CardContent className="space-y-4">
                  <ul className="space-y-1">
                    {product.keyFeatures.slice(0, 3).map((feature, index) => (
                      <li key={index} className="flex items-start text-sm text-gray-600">
                        <div className="w-2 h-2 bg-talah-accent rounded-full mr-3 mt-1.5 flex-shrink-0"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <div className="flex items-center justify-between pt-4">
                    <span className="text-sm font-medium text-talah-primary">
                      {product.price || 'Contact for pricing'}
                    </span>
                    <Link to={`/products/${product.slug}`}>
                      <Button size="sm" variant="outline" className="border-talah-accent text-talah-accent hover:bg-talah-accent hover:text-white">
                        View Details
                        <ArrowRight className="ml-2 h-3 w-3" />
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-talah-primary to-talah-accent">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h2 className="text-2xl font-bold mb-4">Need Help Choosing the Right Solution?</h2>
          <p className="text-lg mb-8 opacity-90">
            Our experts can recommend the perfect products for your specific {useCase.title.toLowerCase()} requirements
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
            Get Expert Consultation
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>
    </div>
  );
};

export default UseCasePage;