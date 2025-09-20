
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
        <div className="flex items-center justify-start min-h-screen py-20">
          <div className="ml-8 lg:ml-16">
            {/* Growing Future Tagline */}
            <div className="mb-8">
              <h1 className="text-6xl lg:text-7xl font-bold text-white mb-4">
                TALAH TECH
              </h1>
              <p className="text-2xl lg:text-3xl text-accent font-light tracking-wide">
                for growing future
              </p>
            </div>
            
            {/* CTA Button */}
            <Button 
              size="lg"
              className="bg-accent text-primary hover:bg-accent/90 px-12 py-6 text-xl font-semibold shadow-lg rounded-full"
              onClick={() => {
                const useCasesSection = document.getElementById('use-cases');
                if (useCasesSection) {
                  useCasesSection.scrollIntoView({ behavior: 'smooth' });
                }
              }}
            >
              Explore Solutions
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
