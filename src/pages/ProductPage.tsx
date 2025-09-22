import { useParams, Link } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { ArrowLeft, ArrowRight, Download, MessageCircle, ChevronRight } from 'lucide-react';
import { products } from '@/data/products';
import { useCases } from '@/data/useCases';
import { useState, useEffect } from 'react';

const ProductPage = () => {
  const { slug } = useParams();
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  
  
  // Scroll to top when component mounts or slug changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);
  
  console.log('Looking for product with slug:', slug);
  console.log('Available products:', products.map(p => ({ id: p.id, slug: p.slug, name: p.name })));
  
  const product = products.find(p => p.slug === slug);
  console.log('Found product:', product ? product.name : 'Not found');
  
  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-talah-primary mb-4">Product Not Found</h1>
          <Link to="/products">
            <Button variant="outline">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Products
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  const relatedUseCases = useCases.filter(uc => product.useCases.includes(uc.id));
  const relatedProducts = products.filter(p => 
    p.id !== product.id && 
    p.useCases.some(ucId => product.useCases.includes(ucId))
  ).slice(0, 3);


  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-white/95 backdrop-blur-sm border-b sticky top-0 z-40 shadow-sm">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <nav className="flex items-center space-x-2 text-sm text-muted-foreground">
              <Link to="/" className="hover:text-primary transition-colors">Home</Link>
              <ChevronRight className="h-4 w-4" />
              <Link to="/products" className="hover:text-primary transition-colors">Products</Link>
              <ChevronRight className="h-4 w-4" />
              <span className="text-primary font-medium truncate max-w-[200px]">{product.name}</span>
            </nav>
            <Link to="/products">
              <Button variant="ghost" size="sm" className="hover:bg-primary/10">
                <ArrowLeft className="mr-2 h-4 w-4" />
                <span className="hidden sm:inline">Back to Products</span>
                <span className="sm:hidden">Back</span>
              </Button>
            </Link>
          </div>
        </div>
      </header>

      {/* Product Hero */}
      <section className="py-6 md:py-8 bg-gradient-to-br from-background via-primary/5 to-accent/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Image Gallery */}
            <div className="space-y-4 order-2 lg:order-1">
              <div className="relative h-96 bg-white/80 backdrop-blur-sm rounded-2xl overflow-hidden shadow-xl">
                <img 
                  src={product.gallery[selectedImageIndex]} 
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 right-4">
                  <Badge variant={product.availability === 'in-stock' ? 'default' : 'secondary'} className="shadow-lg">
                    {product.availability === 'in-stock' ? 'In Stock' : 
                     product.availability === 'pre-order' ? 'Pre-order' : 'Out of Stock'}
                  </Badge>
                </div>
              </div>
              
              {product.gallery.length > 1 && (
                <div className="flex space-x-2 overflow-x-auto">
                  {product.gallery.map((image, index) => (
                    <button
                      key={index}
                      onClick={() => setSelectedImageIndex(index)}
                      className={`flex-shrink-0 w-20 h-20 rounded-xl overflow-hidden border-2 transition-all duration-300 ${
                        selectedImageIndex === index ? 'border-accent shadow-lg' : 'border-muted'
                      }`}
                    >
                      <img src={image} alt={`${product.name} ${index + 1}`} className="w-full h-full object-cover" />
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Product Info */}
            <div className="space-y-6 order-1 lg:order-2">
              <div>
                <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-primary mb-4 leading-tight">{product.name}</h1>
                <p className="text-base md:text-lg text-muted-foreground mb-6 leading-relaxed">{product.shortDescription}</p>
                
                <div className="text-2xl font-bold text-primary mb-6">
                  {product.price || 'Contact for pricing'}
                </div>
              </div>

              {/* Variants - Display Only */}
              {product.variants.length > 0 && (
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-primary">Available Configurations</h3>
                  {product.variants.map((variant) => (
                    <div key={variant.name}>
                      <label className="block text-sm font-medium text-muted-foreground mb-2">
                        {variant.name}
                      </label>
                      <div className="flex flex-wrap gap-2">
                        {variant.options.map((option) => (
                          <div
                            key={option}
                            className="px-3 py-2 text-sm border border-muted rounded-lg bg-white/80 backdrop-blur-sm text-muted-foreground shadow-sm"
                          >
                            {option}
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {/* CTAs */}
              <div className="space-y-3">
                <Button 
                  size="lg" 
                  className="w-full bg-accent hover:bg-accent/90 font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
                  onClick={scrollToContact}
                >
                  <MessageCircle className="mr-2 h-5 w-5" />
                  Contact Sales Team
                </Button>
              </div>

              {/* Use Cases */}
              {relatedUseCases.length > 0 && (
                <div>
                  <h3 className="font-semibold text-primary mb-3">Perfect for:</h3>
                  <div className="flex flex-wrap gap-2">
                    {relatedUseCases.map((useCase) => (
                      <Link key={useCase.id} to={`/use-cases/${useCase.slug}`}>
                        <Badge variant="outline" className="hover:bg-accent hover:text-white transition-colors border-accent text-accent">
                          {useCase.title}
                        </Badge>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Product Details */}
      <section className="py-12 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Tabs defaultValue="features" className="w-full">
            <TabsList className="grid w-full grid-cols-4 bg-white/80 backdrop-blur-sm shadow-lg">
              <TabsTrigger value="features" className="data-[state=active]:bg-accent data-[state=active]:text-white">Key Features</TabsTrigger>
              <TabsTrigger value="specs" className="data-[state=active]:bg-accent data-[state=active]:text-white">Specifications</TabsTrigger>
              <TabsTrigger value="downloads" className="data-[state=active]:bg-accent data-[state=active]:text-white">Downloads</TabsTrigger>
              <TabsTrigger value="accessories" className="data-[state=active]:bg-accent data-[state=active]:text-white">Accessories</TabsTrigger>
            </TabsList>
            
            <TabsContent value="features" className="mt-8">
              <Card className="border-0 shadow-xl bg-white/80 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-primary">Key Features</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-4">
                    {product.keyFeatures.map((feature, index) => (
                      <div key={index} className="flex items-start space-x-3">
                        <div className="w-3 h-3 bg-gradient-to-r from-accent to-secondary rounded-full mt-2 flex-shrink-0 shadow-sm"></div>
                        <span className="text-muted-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="specs" className="mt-8">
              <div className="space-y-6">
                {product.specs.map((specGroup, index) => (
                  <Card key={index} className="border-0 shadow-xl bg-white/80 backdrop-blur-sm">
                    <CardHeader>
                      <CardTitle className="text-lg text-primary">{specGroup.category}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="grid gap-3">
                        {Object.entries(specGroup.specs).map(([key, value]) => (
                          <div key={key} className="flex justify-between items-center py-2 border-b border-muted/30 last:border-b-0">
                            <span className="font-medium text-muted-foreground">{key}</span>
                            <span className="text-primary font-medium">{value}</span>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="downloads" className="mt-8">
              <div className="grid md:grid-cols-2 gap-6">
                <Card className="border-0 shadow-xl bg-white/80 backdrop-blur-sm">
                  <CardHeader>
                    <CardTitle className="text-primary">Datasheets</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    {product.datasheets.map((datasheet, index) => (
                      <a
                        key={index}
                        href={datasheet.url}
                        className="flex items-center justify-between p-3 border border-muted rounded-lg hover:bg-accent/10 transition-colors"
                      >
                        <span className="font-medium text-muted-foreground">{datasheet.name}</span>
                        <Download className="h-4 w-4 text-accent" />
                      </a>
                    ))}
                  </CardContent>
                </Card>
                
                <Card className="border-0 shadow-xl bg-white/80 backdrop-blur-sm">
                  <CardHeader>
                    <CardTitle className="text-primary">Manuals & Documentation</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    {product.manuals.map((manual, index) => (
                      <a
                        key={index}
                        href={manual.url}
                        className="flex items-center justify-between p-3 border border-muted rounded-lg hover:bg-accent/10 transition-colors"
                      >
                        <span className="font-medium text-muted-foreground">{manual.name}</span>
                        <Download className="h-4 w-4 text-accent" />
                      </a>
                    ))}
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
            
            <TabsContent value="accessories" className="mt-8">
              <Card className="border-0 shadow-xl bg-white/80 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-primary">Compatible Accessories</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {product.accessories.map((accessory, index) => (
                      <div key={index} className="p-4 border border-muted rounded-lg hover:shadow-lg transition-all duration-300 bg-white/50">
                        <h4 className="font-medium text-primary mb-2">{accessory}</h4>
                        <Button size="sm" variant="outline" onClick={scrollToContact} className="border-accent text-accent hover:bg-accent hover:text-white">
                          Get Quote
                        </Button>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Related Products */}
      {relatedProducts.length > 0 && (
        <section className="py-16 bg-gradient-to-br from-background via-primary/5 to-accent/10">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-primary mb-8">Related Products</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {relatedProducts.map((relatedProduct) => (
                <Card key={relatedProduct.id} className="group hover:shadow-2xl transition-all duration-500 border-0 shadow-lg bg-white/80 backdrop-blur-sm hover:bg-white">
                  <div className="relative h-48 overflow-hidden rounded-t-lg">
                    <img 
                      src={relatedProduct.heroImage} 
                      alt={relatedProduct.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <CardContent className="p-4">
                    <h3 className="font-semibold text-lg mb-2 group-hover:text-accent transition-colors">
                      {relatedProduct.name}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-4">{relatedProduct.shortDescription}</p>
                    <Link to={`/products/${relatedProduct.slug}`}>
                      <Button size="sm" variant="outline" className="w-full border-accent text-accent hover:bg-accent hover:text-white">
                        View Details
                        <ArrowRight className="ml-2 h-3 w-3" />
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Sticky Mobile CTA */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 bg-white/95 backdrop-blur-sm border-t p-4 z-50 shadow-lg">
        <Button 
          className="w-full bg-accent hover:bg-accent/90 font-semibold"
          onClick={scrollToContact}
        >
          <MessageCircle className="mr-2 h-4 w-4" />
          Contact Sales Team
        </Button>
      </div>
    </div>
  );
};

export default ProductPage;