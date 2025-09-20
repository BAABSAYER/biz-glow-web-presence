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
      product.useCases.some(ucId => {
        const useCase = useCases.find(uc => uc.id === ucId);
        return useCase?.title.toLowerCase().includes(filter.toLowerCase());
      })
    );

    return matchesSearch && matchesFilters;
  });

  const availableFilters = [
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
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-white/95 backdrop-blur-sm border-b shadow-sm">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <nav className="flex items-center space-x-2 text-sm text-muted-foreground">
            <Link to="/" className="hover:text-primary transition-colors">Home</Link>
            <span>/</span>
            <span className="text-primary font-medium">Products</span>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-primary via-primary to-accent">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">All Products</h1>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Explore our complete range of enterprise-grade technology solutions
          </p>
          
          {/* Search Bar */}
          <div className="max-w-2xl mx-auto relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
            <Input
              type="text"
              placeholder="Search products..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-12 pr-4 py-3 text-lg bg-white text-primary border-0 shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* Filters */}
      <section className="py-8 bg-gradient-to-br from-background via-primary/5 to-accent/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center space-x-4 overflow-x-auto">
            <Filter className="h-5 w-5 text-muted-foreground flex-shrink-0" />
            <div className="flex space-x-2">
              {availableFilters.map((filter) => (
                <button
                  key={filter}
                  onClick={() => toggleFilter(filter)}
                  className={`px-4 py-2 rounded-full text-sm border-2 transition-all duration-300 whitespace-nowrap font-medium ${
                    selectedFilters.includes(filter)
                      ? 'bg-accent text-white border-accent shadow-lg'
                      : 'bg-white text-muted-foreground border-muted hover:border-accent hover:bg-accent/10'
                  }`}
                >
                  {filter}
                </button>
              ))}
            </div>
          </div>
          
          {selectedFilters.length > 0 && (
            <div className="mt-4 flex items-center space-x-2">
              <span className="text-sm text-muted-foreground">Active filters:</span>
              {selectedFilters.map((filter) => (
                <Badge key={filter} variant="secondary" className="cursor-pointer hover:bg-accent hover:text-white transition-colors" onClick={() => toggleFilter(filter)}>
                  {filter} ×
                </Badge>
              ))}
              <Button 
                variant="ghost" 
                size="sm" 
                onClick={() => setSelectedFilters([])}
                className="text-accent hover:text-accent hover:bg-accent/10"
              >
                Clear all
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-bold text-primary">
              {filteredProducts.length} Products Found
            </h2>
          </div>

          {filteredProducts.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProducts.map((product) => {
                const productUseCases = useCases.filter(uc => product.useCases.includes(uc.id));
                
                return (
                  <Card key={product.id} className="group hover:shadow-2xl transition-all duration-500 border-0 shadow-lg bg-white/80 backdrop-blur-sm hover:bg-white">
                    <div className="relative h-48 overflow-hidden rounded-t-lg">
                      <img 
                        src={product.heroImage} 
                        alt={product.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute top-4 right-4">
                        <Badge variant={product.availability === 'in-stock' ? 'default' : 'secondary'} className="shadow-lg">
                          {product.availability === 'in-stock' ? 'In Stock' : 
                           product.availability === 'pre-order' ? 'Pre-order' : 'Out of Stock'}
                        </Badge>
                      </div>
                    </div>
                    
                    <CardHeader>
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-xs text-muted-foreground font-medium">{product.brand}</span>
                        <span className="text-xs text-muted-foreground">{product.sku}</span>
                      </div>
                      <CardTitle className="text-lg group-hover:text-accent transition-colors">
                        {product.name}
                      </CardTitle>
                      <p className="text-sm text-muted-foreground">{product.shortDescription}</p>
                    </CardHeader>
                    
                    <CardContent className="space-y-4">
                      <ul className="space-y-1">
                        {product.keyFeatures.slice(0, 3).map((feature, index) => (
                          <li key={index} className="flex items-start text-sm text-muted-foreground">
                            <div className="w-3 h-3 bg-gradient-to-r from-accent to-secondary rounded-full mr-3 mt-1.5 flex-shrink-0 shadow-sm"></div>
                            {feature}
                          </li>
                        ))}
                      </ul>
                      
                      {productUseCases.length > 0 && (
                        <div>
                          <p className="text-xs text-muted-foreground mb-2 font-medium">Perfect for:</p>
                          <div className="flex flex-wrap gap-1">
                            {productUseCases.slice(0, 2).map((useCase) => (
                              <Badge key={useCase.id} variant="outline" className="text-xs border-accent text-accent">
                                {useCase.title}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      )}
                      
                      <div className="flex items-center justify-between pt-4">
                        <span className="text-sm font-medium text-primary">
                          {product.price || 'Contact for pricing'}
                        </span>
                        <Link to={`/products/${product.slug}`}>
                          <Button size="sm" variant="outline" className="border-2 border-accent text-accent hover:bg-accent hover:text-white font-semibold">
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
              <p className="text-muted-foreground text-lg mb-4">No products match your search criteria.</p>
              <Button 
                variant="outline" 
                onClick={() => {
                  setSearchTerm('');
                  setSelectedFilters([]);
                }}
                className="border-accent text-accent hover:bg-accent hover:text-white"
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