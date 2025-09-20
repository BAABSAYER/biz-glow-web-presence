import { Button } from '@/components/ui/button';
import { ArrowRight, Phone, Mail } from 'lucide-react';

interface CTASectionProps {
  title?: string;
  description?: string;
  primaryCTA?: {
    text: string;
    action: () => void;
  };
  secondaryCTA?: {
    text: string;
    action: () => void;
  };
  variant?: 'default' | 'gradient' | 'minimal';
}

const CTASection = ({ 
  title = "Ready to Transform Your Business?",
  description = "Get in touch with our experts to find the perfect technology solution for your needs.",
  primaryCTA = {
    text: "Get Free Consultation",
    action: () => {
      const contactSection = document.getElementById('contact');
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: 'smooth' });
      }
    }
  },
  secondaryCTA = {
    text: "Call Us Now",
    action: () => {
      window.open('tel:+1234567890', '_self');
    }
  },
  variant = 'default'
}: CTASectionProps) => {
  const variantClasses = {
    default: "bg-gradient-to-r from-primary to-primary/80",
    gradient: "bg-gradient-to-br from-accent/20 via-primary/10 to-accent/20",
    minimal: "bg-white/80 backdrop-blur-sm border"
  };

  const textClasses = {
    default: "text-white",
    gradient: "text-primary",
    minimal: "text-primary"
  };

  return (
    <section className={`py-16 ${variantClasses[variant]}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto">
          <h2 className={`text-3xl md:text-4xl font-bold mb-6 ${textClasses[variant]}`}>
            {title}
          </h2>
          <p className={`text-lg mb-8 ${variant === 'default' ? 'text-white/90' : 'text-muted-foreground'}`}>
            {description}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              size="lg"
              onClick={primaryCTA.action}
              className={`px-8 py-3 text-lg font-semibold group ${
                variant === 'default' 
                  ? 'bg-accent hover:bg-accent/90 text-primary' 
                  : 'bg-primary hover:bg-primary/90 text-white'
              }`}
            >
              {primaryCTA.text}
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            
            <Button
              variant="outline"
              size="lg"
              onClick={secondaryCTA.action}
              className={`px-8 py-3 text-lg font-semibold ${
                variant === 'default'
                  ? 'border-white text-white hover:bg-white hover:text-primary'
                  : 'border-primary text-primary hover:bg-primary hover:text-white'
              }`}
            >
              <Phone className="mr-2 h-5 w-5" />
              {secondaryCTA.text}
            </Button>
          </div>

          {/* Contact Info */}
          <div className="mt-8 flex flex-col sm:flex-row gap-6 justify-center items-center text-sm">
            <div className={`flex items-center gap-2 ${variant === 'default' ? 'text-white/80' : 'text-muted-foreground'}`}>
              <Phone size={16} />
              <span>+966 11 123 4567</span>
            </div>
            <div className={`flex items-center gap-2 ${variant === 'default' ? 'text-white/80' : 'text-muted-foreground'}`}>
              <Mail size={16} />
              <span>info@talahtech.com</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;