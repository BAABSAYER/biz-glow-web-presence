import { useState } from 'react';
import { Search, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { products } from '@/data/products';
import { useCases } from '@/data/useCases';

interface SearchBarProps {
  onResults?: (results: any[]) => void;
  placeholder?: string;
  className?: string;
}

export const SearchBar = ({ onResults, placeholder = "Search products, services, or solutions...", className }: SearchBarProps) => {
  const [query, setQuery] = useState('');
  const [isExpanded, setIsExpanded] = useState(false);
  const [results, setResults] = useState<any[]>([]);

  const handleSearch = (searchQuery: string) => {
    setQuery(searchQuery);
    
    if (!searchQuery.trim()) {
      setResults([]);
      onResults?.([]);
      return;
    }

    const productResults = products.filter(product => 
      product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.shortDescription.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.keyFeatures.some(feature => feature.toLowerCase().includes(searchQuery.toLowerCase()))
    ).map(product => ({ ...product, type: 'product' }));

    const useCaseResults = useCases.filter(useCase =>
      useCase.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      useCase.summary.toLowerCase().includes(searchQuery.toLowerCase()) ||
      useCase.industries.some(industry => industry.toLowerCase().includes(searchQuery.toLowerCase()))
    ).map(useCase => ({ ...useCase, type: 'useCase' }));

    const combinedResults = [...productResults, ...useCaseResults];
    setResults(combinedResults);
    onResults?.(combinedResults);
  };

  const clearSearch = () => {
    setQuery('');
    setResults([]);
    setIsExpanded(false);
    onResults?.([]);
  };

  return (
    <div className={`relative ${className}`}>
      <div className="flex items-center gap-2">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            type="text"
            placeholder={placeholder}
            value={query}
            onChange={(e) => handleSearch(e.target.value)}
            onFocus={() => setIsExpanded(true)}
            className="pl-10 pr-10"
          />
          {query && (
            <Button
              variant="ghost"
              size="sm"
              onClick={clearSearch}
              className="absolute right-1 top-1/2 transform -translate-y-1/2 h-6 w-6 p-0"
            >
              <X className="h-4 w-4" />
            </Button>
          )}
        </div>
      </div>

      {/* Search Results Dropdown */}
      {isExpanded && results.length > 0 && (
        <div className="absolute top-full left-0 right-0 mt-2 bg-white border rounded-lg shadow-lg z-50 max-h-80 overflow-y-auto">
          {results.map((result, index) => (
            <div
              key={`${result.type}-${result.id}-${index}`}
              className="p-3 hover:bg-gray-50 cursor-pointer border-b last:border-b-0"
              onClick={() => {
                if (result.type === 'product') {
                  window.location.href = `/products/${result.slug}`;
                } else {
                  window.location.href = `/use-cases/${result.slug}`;
                }
              }}
            >
              <div className="flex items-start gap-3">
                <div className="flex-1">
                  <h4 className="font-medium text-primary">{result.name || result.title}</h4>
                  <p className="text-sm text-muted-foreground line-clamp-2">
                    {result.shortDescription || result.summary}
                  </p>
                  <span className="inline-block px-2 py-1 text-xs bg-accent/10 text-accent rounded mt-1">
                    {result.type === 'product' ? 'Product' : 'Solution'}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};