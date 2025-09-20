
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import heroBackground from '@/assets/talah-hero-background.jpg';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center relative overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBackground})` }}
      />
      
      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/30 via-transparent to-transparent" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-screen py-20">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">
                Growing Future
                <span className="block text-white/90">Through Technology</span>
              </h1>
              <p className="text-xl md:text-2xl text-white/80 leading-relaxed max-w-2xl">
                Empowering businesses with cutting-edge IT solutions. From POS systems to IoT innovations 
                and enterprise mobility - we transform your digital vision into reality.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button 
                size="lg"
                className="bg-white text-primary hover:bg-white/90 px-10 py-4 text-lg font-semibold shadow-lg"
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
                className="border-2 border-white text-white hover:bg-white hover:text-primary px-10 py-4 text-lg font-semibold"
                onClick={() => {
                  const contactSection = document.getElementById('contact');
                  if (contactSection) {
                    contactSection.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
              >
                Get in Touch
              </Button>
            </div>
          </div>

          {/* Right side - Logo area (already in background image) */}
          <div className="hidden lg:block">
            {/* This space is intentionally left for the logo in the background image */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
