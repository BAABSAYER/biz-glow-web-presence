
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X, Globe } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'ar' : 'en');
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm border-b border-gray-200 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo - Made bigger */}
          <div className="flex items-center">
            <img 
              src="/lovable-uploads/ce904701-aa22-4496-93eb-6f03bd8fcf0d.png" 
              alt="Talah Tech Logo" 
              className="h-12 w-auto"
            />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-talah-primary hover:text-talah-accent transition-colors font-medium">
              {t('nav.home')}
            </a>
            <a href="#services" className="text-talah-primary hover:text-talah-accent transition-colors font-medium">
              {t('nav.services')}
            </a>
            <a href="#products" className="text-talah-primary hover:text-talah-accent transition-colors font-medium">
              {t('nav.products')}
            </a>
            <a href="#about" className="text-talah-primary hover:text-talah-accent transition-colors font-medium">
              {t('nav.about')}
            </a>
            <a href="#contact" className="text-talah-primary hover:text-talah-accent transition-colors font-medium">
              {t('nav.contact')}
            </a>
            
            {/* Language Toggle */}
            <Button
              variant="outline"
              size="sm"
              onClick={toggleLanguage}
              className="flex items-center gap-2 border-talah-accent text-talah-accent hover:bg-talah-accent hover:text-white"
            >
              <Globe size={16} />
              {language.toUpperCase()}
            </Button>
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center gap-2">
            <Button
              variant="outline"
              size="sm"
              onClick={toggleLanguage}
              className="flex items-center gap-1 border-talah-accent text-talah-accent hover:bg-talah-accent hover:text-white"
            >
              <Globe size={14} />
              {language.toUpperCase()}
            </Button>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-talah-primary"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-gray-200 py-4">
            <nav className="flex flex-col space-y-4">
              <a 
                href="#home" 
                className="text-talah-primary hover:text-talah-accent transition-colors font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                {t('nav.home')}
              </a>
              <a 
                href="#services" 
                className="text-talah-primary hover:text-talah-accent transition-colors font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                {t('nav.services')}
              </a>
              <a 
                href="#products" 
                className="text-talah-primary hover:text-talah-accent transition-colors font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                {t('nav.products')}
              </a>
              <a 
                href="#about" 
                className="text-talah-primary hover:text-talah-accent transition-colors font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                {t('nav.about')}
              </a>
              <a 
                href="#contact" 
                className="text-talah-primary hover:text-talah-accent transition-colors font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                {t('nav.contact')}
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
