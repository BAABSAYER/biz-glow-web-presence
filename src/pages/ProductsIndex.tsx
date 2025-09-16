import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, Search, Filter } from 'lucide-react';
import { products } from '@/data/products';
import { useCases } from '@/data/useCases';

const ProductsIndex = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedFilters, setSelectedFilters] = useState<string[]>([]);

  const filteredProducts = products.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         product.shortDescription.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         product.brand.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesFilters = selectedFilters.length === 0 || selectedFilters.every(filter => 
      product.brand.toLowerCase().includes(filter.toLowerCase()) ||
      product.availability === filter.toLowerCase().replace(' ', '-') ||
      product.certifications.some(cert => cert.toLowerCase().includes(filter.toLowerCase())) ||
      product.useCases.some(ucId => {
        const useCase = useCases.find(uc => uc.id === ucId);
        return useCase?.title.toLowerCase().includes(filter.toLowerCase());
      })
    );

    return matchesSearch && matchesFilters;
  });

  const availableFilters = [
    'In Stock', 'Pre-order', 'Talah Tech', 'Medical Grade', 'Rugged',
    'Retail & POS', 'Logistics & Warehousing', 'Healthcare & Medical', 'Fleet & Transportation', 'Smart IoT'
  ];

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
            <span className="text-talah-primary">Products</span>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-r from-talah-primary to-talah-accent">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">All Products</h1>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Explore our complete range of enterprise-grade technology solutions
          </p>
          
          {/* Search Bar */}
          <div className="max-w-2xl mx-auto relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
            <Input
              type="text"
              placeholder="Search products..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-12 pr-4 py-3 text-lg bg-white text-gray-900"
            />
          </div>
        </div>
      </section>

      {/* Filters */}
      <section className="py-8 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center space-x-4 overflow-x-auto">
            <Filter className="h-5 w-5 text-gray-500 flex-shrink-0" />
            <div className="flex space-x-2">
              {availableFilters.map((filter) => (
                <button
                  key={filter}
                  onClick={() => toggleFilter(filter)}
                  className={`px-4 py-2 rounded-full text-sm border transition-colors whitespace-nowrap ${
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
          
          {selectedFilters.length > 0 && (
            <div className="mt-4 flex items-center space-x-2">
              <span className="text-sm text-gray-500">Active filters:</span>
              {selectedFilters.map((filter) => (
                <Badge key={filter} variant="secondary" className="cursor-pointer" onClick={() => toggleFilter(filter)}>
                  {filter} ×
                </Badge>
              ))}
              <Button 
                variant="ghost" 
                size="sm" 
                onClick={() => setSelectedFilters([])}
                className="text-talah-accent hover:text-talah-accent"
              >
                Clear all
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-bold text-talah-primary">
              {filteredProducts.length} Products Found
            </h2>
          </div>

          {filteredProducts.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProducts.map((product) => {
                const productUseCases = useCases.filter(uc => product.useCases.includes(uc.id));
                
                return (
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
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-xs text-gray-500">{product.brand}</span>
                        <span className="text-xs text-gray-500">{product.sku}</span>
                      </div>
                      <CardTitle className="text-lg group-hover:text-talah-accent transition-colors">
                        {product.name}
                      </CardTitle>
                      <p className="text-sm text-gray-600">{product.shortDescription}</p>
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
                      
                      {productUseCases.length > 0 && (
                        <div>
                          <p className="text-xs text-gray-500 mb-2">Perfect for:</p>
                          <div className="flex flex-wrap gap-1">
                            {productUseCases.slice(0, 2).map((useCase) => (
                              <Badge key={useCase.id} variant="outline" className="text-xs">
                                {useCase.title}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      )}
                      
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
                );
              })}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg mb-4">No products match your search criteria.</p>
              <Button 
                variant="outline" 
                onClick={() => {
                  setSearchTerm('');
                  setSelectedFilters([]);
                }}
              >
                Clear Search & Filters
              </Button>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default ProductsIndex;