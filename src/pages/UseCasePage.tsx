import { useParams, Link } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowLeft, ArrowRight, Filter } from 'lucide-react';
import { useCases } from '@/data/useCases';
import { products } from '@/data/products';
import { useState } from 'react';

const UseCasePage = () => {
  const { slug } = useParams();
  const [selectedFilters, setSelectedFilters] = useState<string[]>([]);
  
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

  // Filter products based on selected filters
  const filteredProducts = relatedProducts.filter(product => {
    if (selectedFilters.length === 0) return true;
    return selectedFilters.every(filter => 
      product.brand.toLowerCase().includes(filter.toLowerCase()) ||
      product.name.toLowerCase().includes(filter.toLowerCase()) ||
      product.certifications.some(cert => cert.toLowerCase().includes(filter.toLowerCase()))
    );
  });

  const availableFilters = ['In Stock', 'Pre-order', 'Talah Tech', 'Medical Grade', 'Rugged'];

  const toggleFilter = (filter: string) => {
    setSelectedFilters(prev => 
      prev.includes(filter) 
        ? prev.filter(f => f !== filter)
        : [...prev, filter]
    );
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white border-b">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <nav className="flex items-center space-x-2 text-sm text-gray-500">
            <Link to="/" className="hover:text-talah-primary">Home</Link>
            <span>/</span>
            <Link to="/use-cases" className="hover:text-talah-primary">Use Cases</Link>
            <span>/</span>
            <span className="text-talah-primary">{useCase.title}</span>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-r from-talah-primary to-talah-accent">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">{useCase.title}</h1>
              <p className="text-xl mb-6 opacity-90">{useCase.summary}</p>
              <p className="text-lg opacity-80 leading-relaxed">{useCase.longDescription}</p>
              
              <div className="mt-8">
                <h3 className="text-lg font-semibold mb-4">Industries Served:</h3>
                <div className="flex flex-wrap gap-2">
                  {useCase.industries.map((industry, index) => (
                    <Badge key={index} variant="secondary" className="bg-white/20 text-white border-white/30">
                      {industry}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
            
            <div className="relative">
              <img 
                src={useCase.heroImage} 
                alt={useCase.title}
                className="rounded-lg shadow-2xl w-full h-80 object-cover"
              />
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
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold text-talah-primary">Recommended Products</h2>
            
            {/* Filters */}
            <div className="flex items-center space-x-4">
              <Filter className="h-5 w-5 text-gray-500" />
              <div className="flex flex-wrap gap-2">
                {availableFilters.map((filter) => (
                  <button
                    key={filter}
                    onClick={() => toggleFilter(filter)}
                    className={`px-3 py-1 rounded-full text-sm border transition-colors ${
                      selectedFilters.includes(filter)
                        ? 'bg-talah-accent text-white border-talah-accent'
                        : 'bg-white text-gray-600 border-gray-300 hover:border-talah-accent'
                    }`}
                  >
                    {filter}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product) => (
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

          {filteredProducts.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500">No products match the selected filters.</p>
              <Button 
                variant="outline" 
                onClick={() => setSelectedFilters([])}
                className="mt-4"
              >
                Clear Filters
              </Button>
            </div>
          )}
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