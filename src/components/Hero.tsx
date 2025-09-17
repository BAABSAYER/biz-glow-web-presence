
import { Button } from '@/components/ui/button';
import { ArrowRight, Monitor, Wifi, Smartphone } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center bg-gradient-to-br from-white via-blue-50/30 to-cyan-50/50 pt-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-talah-primary leading-tight">
                Growing Future
                <span className="block text-talah-accent">Through Technology</span>
              </h1>
              <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
                Empowering businesses with cutting-edge IT solutions. From POS systems to IoT innovations 
                and enterprise mobility - we transform your digital vision into reality.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg"
                className="bg-talah-primary hover:bg-talah-primary/90 text-white px-8 py-3 text-lg"
                onClick={() => {
                  const useCasesSection = document.getElementById('use-cases');
                  if (useCasesSection) {
                    useCasesSection.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
              >
                Explore Solutions
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="border-talah-accent text-talah-accent hover:bg-talah-accent hover:text-white px-8 py-3 text-lg"
              >
                Get in Touch
              </Button>
            </div>
          </div>

          {/* Right Content - Visual Elements */}
          <div className="relative">
            <div className="relative z-10 bg-white rounded-2xl shadow-2xl p-8 border border-gray-100">
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center p-4 bg-blue-50 rounded-xl hover:shadow-lg transition-all duration-300 cursor-pointer float-animation">
                  <Monitor className="h-12 w-12 text-talah-primary mx-auto mb-3" />
                  <h3 className="font-semibold text-talah-primary">POS Systems</h3>
                  <p className="text-sm text-gray-600 mt-1">Modern retail solutions</p>
                </div>
                
                <div className="text-center p-4 bg-cyan-50 rounded-xl hover:shadow-lg transition-all duration-300 cursor-pointer float-animation" style={{animationDelay: '0.5s'}}>
                  <Wifi className="h-12 w-12 text-talah-accent mx-auto mb-3" />
                  <h3 className="font-semibold text-talah-primary">IoT Solutions</h3>
                  <p className="text-sm text-gray-600 mt-1">Connected devices</p>
                </div>
                
                <div className="text-center p-4 bg-cyan-50 rounded-xl hover:shadow-lg transition-all duration-300 cursor-pointer float-animation" style={{animationDelay: '1s'}}>
                  <Smartphone className="h-12 w-12 text-talah-accent mx-auto mb-3" />
                  <h3 className="font-semibold text-talah-primary">Enterprise Mobility</h3>
                  <p className="text-sm text-gray-600 mt-1">Mobile solutions</p>
                </div>
                
                <div className="text-center p-4 bg-blue-50 rounded-xl hover:shadow-lg transition-all duration-300 cursor-pointer float-animation" style={{animationDelay: '1.5s'}}>
                  <div className="h-12 w-12 bg-talah-primary rounded-full mx-auto mb-3 flex items-center justify-center">
                    <span className="text-white font-bold text-xs">24/7</span>
                  </div>
                  <h3 className="font-semibold text-talah-primary">Support</h3>
                  <p className="text-sm text-gray-600 mt-1">Always available</p>
                </div>
              </div>
            </div>
            
            {/* Background decorative elements */}
            <div className="absolute -top-4 -right-4 w-72 h-72 bg-gradient-to-br from-talah-accent/20 to-talah-primary/20 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-8 -left-8 w-96 h-96 bg-gradient-to-tr from-cyan-200/30 to-blue-200/30 rounded-full blur-3xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
