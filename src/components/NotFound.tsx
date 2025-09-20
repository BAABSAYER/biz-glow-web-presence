import { AlertCircle, ArrowLeft, Home, Search } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { SearchBar } from '@/components/SearchBar';

const NotFound = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-primary/5 to-accent/10 flex items-center justify-center">
      <div className="text-center p-8 max-w-lg mx-4">
        <div className="mb-8">
          <AlertCircle className="h-24 w-24 text-accent mx-auto mb-6" />
          <h1 className="text-6xl font-bold text-primary mb-4">404</h1>
          <h2 className="text-2xl font-bold text-primary mb-4">Page Not Found</h2>
          <p className="text-lg text-muted-foreground mb-8">
            Sorry, we couldn't find the page you're looking for. It might have been moved, deleted, or you entered the wrong URL.
          </p>
        </div>

        {/* Search Bar */}
        <div className="mb-8">
          <p className="text-sm text-muted-foreground mb-3">Try searching for what you need:</p>
          <SearchBar placeholder="Search products, solutions..." />
        </div>

        {/* Navigation Options */}
        <div className="space-y-3">
          <Button 
            onClick={() => window.history.back()}
            className="w-full"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Go Back
          </Button>
          
          <Button 
            variant="outline"
            onClick={() => window.location.href = '/'}
            className="w-full"
          >
            <Home className="mr-2 h-4 w-4" />
            Return Home
          </Button>
        </div>

        {/* Quick Links */}
        <div className="mt-8 pt-6 border-t border-border">
          <p className="text-sm text-muted-foreground mb-3">Quick Links:</p>
          <div className="flex flex-wrap gap-2 justify-center">
            <Button variant="ghost" size="sm" asChild>
              <a href="/#services">Services</a>
            </Button>
            <Button variant="ghost" size="sm" asChild>
              <a href="/#use-cases">Solutions</a>
            </Button>
            <Button variant="ghost" size="sm" asChild>
              <a href="/products">Products</a>
            </Button>
            <Button variant="ghost" size="sm" asChild>
              <a href="/#contact">Contact</a>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;