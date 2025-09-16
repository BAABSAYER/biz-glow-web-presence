import { useParams, Link } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { ArrowLeft, ArrowRight, Download, ShoppingCart, MessageCircle, Star } from 'lucide-react';
import { products } from '@/data/products';
import { useCases } from '@/data/useCases';
import { useState } from 'react';

const ProductPage = () => {
  const { slug } = useParams();
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [selectedVariants, setSelectedVariants] = useState<{[key: string]: string}>({});
  
  const product = products.find(p => p.slug === slug);
  
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

  const handleVariantChange = (variantName: string, option: string) => {
    setSelectedVariants(prev => ({
      ...prev,
      [variantName]: option
    }));
  };

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white border-b">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <nav className="flex items-center space-x-2 text-sm text-gray-500">
            <Link to="/" className="hover:text-talah-primary">Home</Link>
            <span>/</span>
            <Link to="/products" className="hover:text-talah-primary">Products</Link>
            <span>/</span>
            <span className="text-talah-primary">{product.name}</span>
          </nav>
        </div>
      </header>

      {/* Product Hero */}
      <section className="py-8">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Image Gallery */}
            <div className="space-y-4">
              <div className="relative h-96 bg-gray-100 rounded-lg overflow-hidden">
                <img 
                  src={product.gallery[selectedImageIndex]} 
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 right-4">
                  <Badge variant={product.availability === 'in-stock' ? 'default' : 'secondary'}>
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
                      className={`flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden border-2 ${
                        selectedImageIndex === index ? 'border-talah-accent' : 'border-gray-200'
                      }`}
                    >
                      <img src={image} alt={`${product.name} ${index + 1}`} className="w-full h-full object-cover" />
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Product Info */}
            <div className="space-y-6">
              <div>
                <div className="flex items-center space-x-2 mb-2">
                  <span className="text-sm text-gray-500">{product.brand}</span>
                  <span className="text-sm text-gray-400">•</span>
                  <span className="text-sm text-gray-500">SKU: {product.sku}</span>
                </div>
                <h1 className="text-3xl font-bold text-talah-primary mb-4">{product.name}</h1>
                <p className="text-lg text-gray-600 mb-6">{product.shortDescription}</p>
                
                <div className="flex items-center space-x-4 mb-6">
                  <div className="flex items-center space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    ))}
                    <span className="text-sm text-gray-500 ml-2">4.8 (24 reviews)</span>
                  </div>
                </div>

                <div className="text-2xl font-bold text-talah-primary mb-6">
                  {product.price || 'Contact for pricing'}
                </div>
              </div>

              {/* Variants */}
              {product.variants.length > 0 && (
                <div className="space-y-4">
                  {product.variants.map((variant) => (
                    <div key={variant.name}>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        {variant.name}
                      </label>
                      <div className="flex flex-wrap gap-2">
                        {variant.options.map((option) => (
                          <button
                            key={option}
                            onClick={() => handleVariantChange(variant.name, option)}
                            className={`px-3 py-2 text-sm border rounded-md transition-colors ${
                              selectedVariants[variant.name] === option
                                ? 'border-talah-accent bg-talah-accent text-white'
                                : 'border-gray-300 hover:border-talah-accent'
                            }`}
                          >
                            {option}
                          </button>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {/* CTAs */}
              <div className="space-y-3">
                {product.ctaType === 'buy' ? (
                  <Button 
                    size="lg" 
                    className="w-full bg-talah-accent hover:bg-talah-accent/90"
                    onClick={() => window.open(product.ctaLink, '_blank')}
                  >
                    <ShoppingCart className="mr-2 h-5 w-5" />
                    Add to Cart
                  </Button>
                ) : (
                  <Button 
                    size="lg" 
                    className="w-full bg-talah-accent hover:bg-talah-accent/90"
                    onClick={scrollToContact}
                  >
                    <MessageCircle className="mr-2 h-5 w-5" />
                    Get Quote
                  </Button>
                )}
                
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="w-full border-talah-primary text-talah-primary hover:bg-talah-primary hover:text-white"
                  onClick={scrollToContact}
                >
                  Contact Sales Team
                </Button>
              </div>

              {/* Use Cases */}
              {relatedUseCases.length > 0 && (
                <div>
                  <h3 className="font-medium text-gray-900 mb-3">Perfect for:</h3>
                  <div className="flex flex-wrap gap-2">
                    {relatedUseCases.map((useCase) => (
                      <Link key={useCase.id} to={`/use-cases/${useCase.slug}`}>
                        <Badge variant="outline" className="hover:bg-talah-accent hover:text-white transition-colors">
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
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Tabs defaultValue="features" className="w-full">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="features">Key Features</TabsTrigger>
              <TabsTrigger value="specs">Specifications</TabsTrigger>
              <TabsTrigger value="downloads">Downloads</TabsTrigger>
              <TabsTrigger value="accessories">Accessories</TabsTrigger>
            </TabsList>
            
            <TabsContent value="features" className="mt-8">
              <Card>
                <CardHeader>
                  <CardTitle>Key Features</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-4">
                    {product.keyFeatures.map((feature, index) => (
                      <div key={index} className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-talah-accent rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="specs" className="mt-8">
              <div className="space-y-6">
                {product.specs.map((specGroup, index) => (
                  <Card key={index}>
                    <CardHeader>
                      <CardTitle className="text-lg">{specGroup.category}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="grid gap-3">
                        {Object.entries(specGroup.specs).map(([key, value]) => (
                          <div key={key} className="flex justify-between items-center py-2 border-b border-gray-100 last:border-b-0">
                            <span className="font-medium text-gray-600">{key}</span>
                            <span className="text-gray-900">{value}</span>
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
                <Card>
                  <CardHeader>
                    <CardTitle>Datasheets</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    {product.datasheets.map((datasheet, index) => (
                      <a
                        key={index}
                        href={datasheet.url}
                        className="flex items-center justify-between p-3 border rounded-lg hover:bg-gray-50 transition-colors"
                      >
                        <span className="font-medium">{datasheet.name}</span>
                        <Download className="h-4 w-4 text-talah-accent" />
                      </a>
                    ))}
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader>
                    <CardTitle>Manuals & Documentation</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    {product.manuals.map((manual, index) => (
                      <a
                        key={index}
                        href={manual.url}
                        className="flex items-center justify-between p-3 border rounded-lg hover:bg-gray-50 transition-colors"
                      >
                        <span className="font-medium">{manual.name}</span>
                        <Download className="h-4 w-4 text-talah-accent" />
                      </a>
                    ))}
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
            
            <TabsContent value="accessories" className="mt-8">
              <Card>
                <CardHeader>
                  <CardTitle>Compatible Accessories</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {product.accessories.map((accessory, index) => (
                      <div key={index} className="p-4 border rounded-lg hover:shadow-md transition-shadow">
                        <h4 className="font-medium text-gray-900 mb-2">{accessory}</h4>
                        <Button size="sm" variant="outline" onClick={scrollToContact}>
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
        <section className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-talah-primary mb-8">Related Products</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {relatedProducts.map((relatedProduct) => (
                <Card key={relatedProduct.id} className="group hover:shadow-lg transition-all duration-300">
                  <div className="relative h-48 overflow-hidden rounded-t-lg">
                    <img 
                      src={relatedProduct.heroImage} 
                      alt={relatedProduct.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <CardContent className="p-4">
                    <h3 className="font-semibold text-lg mb-2 group-hover:text-talah-accent transition-colors">
                      {relatedProduct.name}
                    </h3>
                    <p className="text-sm text-gray-600 mb-4">{relatedProduct.shortDescription}</p>
                    <Link to={`/products/${relatedProduct.slug}`}>
                      <Button size="sm" variant="outline" className="w-full">
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
      <div className="lg:hidden fixed bottom-0 left-0 right-0 bg-white border-t p-4 z-50">
        <div className="flex space-x-3">
          {product.ctaType === 'buy' ? (
            <Button 
              className="flex-1 bg-talah-accent hover:bg-talah-accent/90"
              onClick={() => window.open(product.ctaLink, '_blank')}
            >
              <ShoppingCart className="mr-2 h-4 w-4" />
              Add to Cart
            </Button>
          ) : (
            <Button 
              className="flex-1 bg-talah-accent hover:bg-talah-accent/90"
              onClick={scrollToContact}
            >
              <MessageCircle className="mr-2 h-4 w-4" />
              Get Quote
            </Button>
          )}
          <Button 
            variant="outline" 
            className="flex-1 border-talah-primary text-talah-primary"
            onClick={scrollToContact}
          >
            Contact Sales
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;