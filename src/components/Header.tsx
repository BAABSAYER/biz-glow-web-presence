
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X, Phone, Mail } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { SearchBar } from '@/components/SearchBar';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const { t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      const heroHeight = window.innerHeight;
      setIsScrolled(window.scrollY > heroHeight - 100);
      
      // Track active section for navigation highlighting
      const sections = ['home', 'services', 'use-cases', 'partnerships', 'about', 'contact'];
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      
      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const getNavLinkClass = (section: string) => {
    const baseClass = `transition-colors font-medium story-link`;
    const activeClass = activeSection === section ? 'text-accent font-semibold' : '';
    const colorClass = isScrolled 
      ? 'text-primary hover:text-accent' 
      : 'text-white hover:text-accent';
    return `${baseClass} ${activeClass} ${colorClass}`.trim();
  };

  return (
    <>
      {/* Contact Bar */}
      <div className="bg-primary text-white py-2 text-sm">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-2">
                <Phone size={14} />
                <span>+966 11 123 4567</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail size={14} />
                <span>info@talahtech.com</span>
              </div>
            </div>
            <div className="hidden md:block">
              <span>Growing Future Technology Solutions</span>
            </div>
          </div>
        </div>
      </div>

      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-sm border-b border-gray-200 mt-10' 
          : 'bg-transparent mt-10'
      }`}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <div className="flex items-center">
              <img 
                src="/talah-tech-logo.png" 
                alt="Talah Tech Logo" 
                className="h-32 w-auto"
              />
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <a href="#home" className={getNavLinkClass('home')}>
                {t('nav.home')}
              </a>
              <a href="#services" className={getNavLinkClass('services')}>
                {t('nav.services')}
              </a>
              <a href="#use-cases" className={getNavLinkClass('use-cases')}>
                Use Cases
              </a>
              <a href="#partnerships" className={getNavLinkClass('partnerships')}>
                {t('nav.partnerships')}
              </a>
              <a href="#about" className={getNavLinkClass('about')}>
                {t('nav.about')}
              </a>
              <a href="#contact" className={getNavLinkClass('contact')}>
                {t('nav.contact')}
              </a>
            </nav>

            {/* Search Bar for Desktop */}
            {isScrolled && (
              <div className="hidden lg:block w-64">
                <SearchBar placeholder="Search..." />
              </div>
            )}

            {/* Mobile menu button */}
            <div className="md:hidden">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className={isScrolled ? 'text-primary' : 'text-white'}
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </Button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden border-t border-gray-200 py-4">
              <div className="mb-4">
                <SearchBar placeholder="Search..." />
              </div>
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
                href="#use-cases" 
                className="text-talah-primary hover:text-talah-accent transition-colors font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Use Cases
              </a>
              <a 
                href="#partnerships" 
                className="text-talah-primary hover:text-talah-accent transition-colors font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                {t('nav.partnerships')}
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
    </>
  );
};

export default Header;
