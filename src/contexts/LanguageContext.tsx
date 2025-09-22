
import React, { createContext, useContext, useState, ReactNode } from 'react';

export type Language = 'en';

interface LanguageContextType {
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations = {
  // Header
  'nav.home': 'Home',
  'nav.services': 'Services',
  'nav.products': 'Products',
  'nav.partnerships': 'Partnerships',
  'nav.about': 'About',
  'nav.contact': 'Contact',
  
  // Hero
  'hero.title': 'Growing Future',
  'hero.subtitle': 'Empowering businesses with cutting-edge technology solutions',
  'hero.description': 'At Talah Tech, we specialize in POS systems and enterprise mobility technologies that drive innovation and growth for your business.',
  'hero.cta': 'Explore Our Solutions',
  'hero.contact': 'Contact Us',
  
  // Services
  'services.title': 'Our Services',
  'services.subtitle': 'Comprehensive IT solutions designed to drive your business forward in the digital age',
  'services.pos.title': 'POS Systems',
  'services.pos.description': 'Modern, intuitive point-of-sale solutions that streamline your retail operations and enhance customer experience.',
  'services.pos.feature1': 'Cloud-based management',
  'services.pos.feature2': 'Real-time analytics',
  'services.pos.feature3': 'Multi-payment support',
  'services.pos.feature4': 'Inventory tracking',
  'services.mobility.title': 'Enterprise Mobility',
  'services.mobility.description': 'Comprehensive mobile solutions that enable your workforce to be productive anywhere, anytime.',
  'services.mobility.feature1': 'Mobile apps',
  'services.mobility.feature2': 'Device management',
  'services.mobility.feature3': 'Security protocols',
  'services.mobility.feature4': 'Remote access',
  'services.data.title': 'Data Management',
  'services.data.description': 'Secure, scalable data solutions that help you store, analyze, and leverage your business information.',
  'services.data.feature1': 'Cloud storage',
  'services.data.feature2': 'Data backup',
  'services.data.feature3': 'Analytics platform',
  'services.data.feature4': 'Data security',
  'services.security.title': 'Cybersecurity',
  'services.security.description': 'Comprehensive security solutions to protect your business from digital threats and ensure compliance.',
  'services.security.feature1': 'Threat detection',
  'services.security.feature2': 'Security audits',
  'services.security.feature3': 'Compliance support',
  'services.security.feature4': 'Employee training',
  'services.support.title': '24/7 Support',
  'services.support.description': 'Round-the-clock technical support to ensure your systems run smoothly and efficiently.',
  'services.support.feature1': 'Remote assistance',
  'services.support.feature2': 'On-site support',
  'services.support.feature3': 'Maintenance plans',
  'services.support.feature4': 'Emergency response',
  
  // Products
  'products.title': 'Our Products',
  'products.subtitle': 'Discover our comprehensive range of enterprise-grade technology solutions designed to accelerate your business transformation',
  'products.pos_terminals.title': 'POS Terminals',
  'products.pos_terminals.description': 'Advanced point-of-sale systems for retail and hospitality',
  'products.pos_terminals.product1': 'Desktop POS',
  'products.pos_terminals.product2': 'All-in-One Terminals',
  'products.pos_terminals.product3': 'Touchscreen Systems',
  'products.mobile.title': 'Mobile Computers',
  'products.mobile.description': 'Rugged handheld devices for enterprise mobility',
  'products.mobile.product1': 'Handheld Scanners',
  'products.mobile.product2': 'Mobile PDAs',
  'products.mobile.product3': 'Rugged Smartphones',
  'products.tablet.title': 'Tablet Solutions',
  'products.tablet.description': 'Industrial tablets for various business applications',
  'products.tablet.product1': 'Industrial Tablets',
  'products.tablet.product2': 'Kiosk Tablets',
  'products.tablet.product3': 'Field Service Tablets',
  'products.learn_more': 'Learn More',
  'products.custom.title': 'Need a Custom Solution?',
  'products.custom.description': 'Our team can design and develop tailored products to meet your specific business requirements',
  'products.custom.cta': 'Contact Our Experts',
  
  // About
  'about.title': 'About Talah Tech',
  'about.description1': 'At Talah Tech, we believe in the power of technology to transform businesses and shape the future. With years of experience in the IT industry, we specialize in delivering comprehensive solutions that meet the evolving needs of modern enterprises.',
  'about.description2': 'Our expertise spans across POS systems and enterprise mobility technologies, making us your one-stop destination for all IT needs. We pride ourselves on understanding each client\'s unique requirements and delivering tailored solutions that drive real business value.',
  'about.description3': 'From consultation and implementation to ongoing support and maintenance, we ensure your technology infrastructure remains robust, secure, and scalable as your business grows.',
  'about.mission.title': 'Mission',
  'about.mission.description': 'To empower businesses with innovative technology solutions that drive growth and efficiency in the digital era.',
  'about.team.title': 'Team',
  'about.team.description': 'Expert professionals with deep industry knowledge and passion for delivering exceptional IT solutions.',
  'about.innovation.title': 'Innovation',
  'about.innovation.description': 'Constantly evolving with the latest technologies to provide cutting-edge solutions for our clients.',
  'about.quality.title': 'Quality',
  'about.quality.description': 'Committed to delivering superior quality solutions with comprehensive support and maintenance.',
  
  // Partnerships
  'partnerships.title': 'Our Partnerships',
  'partnerships.subtitle': 'Building strong relationships with leading technology partners to deliver exceptional solutions and expand our global reach',
  'partnerships.technology.title': 'Technology Partners',
  'partnerships.technology.description': 'Collaborating with industry leaders to integrate cutting-edge technologies into our solutions',
  'partnerships.global.title': 'Global Network',
  'partnerships.global.description': 'Expanding our reach through strategic partnerships across different markets and regions',
  'partnerships.certified.title': 'Certified Excellence',
  'partnerships.certified.description': 'Maintaining the highest standards through certified partnerships and quality assurance programs',
  'partnerships.join.title': 'Join Our Partner Network',
  'partnerships.join.description': 'Become part of our growing ecosystem of partners and distributors. Together, we can drive innovation and create value for businesses worldwide.',
  'partnerships.join.partner_cta': 'Become a Partner',
  'partnerships.join.distributor_cta': 'Become a Distributor',
};

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const t = (key: string): string => {
    return translations[key] || key;
  };

  return (
    <LanguageContext.Provider value={{ t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
