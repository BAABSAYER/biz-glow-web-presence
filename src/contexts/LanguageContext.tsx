
import React, { createContext, useContext, useState, ReactNode } from 'react';

export type Language = 'en' | 'ar';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations = {
  en: {
    // Header
    'nav.home': 'Home',
    'nav.services': 'Services',
    'nav.products': 'Products',
    'nav.about': 'About',
    'nav.contact': 'Contact',
    
    // Hero
    'hero.title': 'Growing Future',
    'hero.subtitle': 'Empowering businesses with cutting-edge technology solutions',
    'hero.description': 'At Talah Tech, we specialize in POS systems, IoT solutions, and enterprise mobility technologies that drive innovation and growth for your business.',
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
    'services.iot.title': 'IoT Solutions',
    'services.iot.description': 'Smart, connected devices and sensors that optimize operations and provide valuable insights for your business.',
    'services.iot.feature1': 'Smart sensors',
    'services.iot.feature2': 'Data analytics',
    'services.iot.feature3': 'Remote monitoring',
    'services.iot.feature4': 'Automated controls',
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
    'products.iot_devices.title': 'IoT Devices',
    'products.iot_devices.description': 'Smart connected devices for the Internet of Things',
    'products.iot_devices.product1': 'Smart Sensors',
    'products.iot_devices.product2': 'Gateway Devices',
    'products.iot_devices.product3': 'Connectivity Solutions',
    'products.learn_more': 'Learn More',
    'products.custom.title': 'Need a Custom Solution?',
    'products.custom.description': 'Our team can design and develop tailored products to meet your specific business requirements',
    'products.custom.cta': 'Contact Our Experts',
    
    // About
    'about.title': 'About Talah Tech',
    'about.description1': 'At Talah Tech, we believe in the power of technology to transform businesses and shape the future. With years of experience in the IT industry, we specialize in delivering comprehensive solutions that meet the evolving needs of modern enterprises.',
    'about.description2': 'Our expertise spans across POS systems, IoT solutions, and enterprise mobility technologies, making us your one-stop destination for all IT needs. We pride ourselves on understanding each client\'s unique requirements and delivering tailored solutions that drive real business value.',
    'about.description3': 'From consultation and implementation to ongoing support and maintenance, we ensure your technology infrastructure remains robust, secure, and scalable as your business grows.',
    'about.mission.title': 'Mission',
    'about.mission.description': 'To empower businesses with innovative technology solutions that drive growth and efficiency in the digital era.',
    'about.team.title': 'Team',
    'about.team.description': 'Expert professionals with deep industry knowledge and passion for delivering exceptional IT solutions.',
    'about.innovation.title': 'Innovation',
    'about.innovation.description': 'Constantly evolving with the latest technologies to provide cutting-edge solutions for our clients.',
    'about.quality.title': 'Quality',
    'about.quality.description': 'Committed to delivering superior quality solutions with comprehensive support and maintenance.',
  },
  ar: {
    // Header
    'nav.home': 'الرئيسية',
    'nav.services': 'الخدمات',
    'nav.products': 'المنتجات',
    'nav.about': 'من نحن',
    'nav.contact': 'اتصل بنا',
    
    // Hero
    'hero.title': 'تنمية المستقبل',
    'hero.subtitle': 'تمكين الشركات بحلول تقنية متطورة',
    'hero.description': 'في طلاح تك، نتخصص في أنظمة نقاط البيع وحلول إنترنت الأشياء وتقنيات التنقل المؤسسي التي تدفع الابتكار والنمو لأعمالك.',
    'hero.cta': 'استكشف حلولنا',
    'hero.contact': 'اتصل بنا',
    
    // Services
    'services.title': 'خدماتنا',
    'services.subtitle': 'حلول تقنية شاملة مصممة لدفع أعمالك قدماً في العصر الرقمي',
    'services.pos.title': 'أنظمة نقاط البيع',
    'services.pos.description': 'حلول حديثة وبديهية لنقاط البيع تعمل على تبسيط عمليات البيع بالتجزئة وتعزيز تجربة العملاء.',
    'services.pos.feature1': 'إدارة قائمة على السحابة',
    'services.pos.feature2': 'تحليلات في الوقت الفعلي',
    'services.pos.feature3': 'دعم دفع متعدد',
    'services.pos.feature4': 'تتبع المخزون',
    'services.iot.title': 'حلول إنترنت الأشياء',
    'services.iot.description': 'أجهزة ذكية ومتصلة وأجهزة استشعار تعمل على تحسين العمليات وتقديم رؤى قيمة لأعمالك.',
    'services.iot.feature1': 'أجهزة استشعار ذكية',
    'services.iot.feature2': 'تحليل البيانات',
    'services.iot.feature3': 'مراقبة عن بُعد',
    'services.iot.feature4': 'ضوابط آلية',
    'services.mobility.title': 'التنقل المؤسسي',
    'services.mobility.description': 'حلول متنقلة شاملة تمكن قوتك العاملة من الإنتاجية في أي مكان وفي أي وقت.',
    'services.mobility.feature1': 'تطبيقات محمولة',
    'services.mobility.feature2': 'إدارة الأجهزة',
    'services.mobility.feature3': 'بروتوكولات الأمان',
    'services.mobility.feature4': 'وصول عن بُعد',
    'services.data.title': 'إدارة البيانات',
    'services.data.description': 'حلول بيانات آمنة وقابلة للتوسع تساعدك على تخزين وتحليل والاستفادة من معلومات أعمالك.',
    'services.data.feature1': 'تخزين سحابي',
    'services.data.feature2': 'نسخ احتياطي للبيانات',
    'services.data.feature3': 'منصة التحليلات',
    'services.data.feature4': 'أمان البيانات',
    'services.security.title': 'الأمن السيبراني',
    'services.security.description': 'حلول أمنية شاملة لحماية أعمالك من التهديدات الرقمية وضمان الامتثال.',
    'services.security.feature1': 'كشف التهديدات',
    'services.security.feature2': 'عمليات تدقيق الأمان',
    'services.security.feature3': 'دعم الامتثال',
    'services.security.feature4': 'تدريب الموظفين',
    'services.support.title': 'دعم ٢٤/٧',
    'services.support.description': 'دعم فني على مدار الساعة لضمان تشغيل أنظمتك بسلاسة وكفاءة.',
    'services.support.feature1': 'مساعدة عن بُعد',
    'services.support.feature2': 'دعم في الموقع',
    'services.support.feature3': 'خطط الصيانة',
    'services.support.feature4': 'استجابة طوارئ',
    
    // Products
    'products.title': 'منتجاتنا',
    'products.subtitle': 'اكتشف مجموعتنا الشاملة من الحلول التقنية على مستوى المؤسسات المصممة لتسريع التحول الرقمي لأعمالك',
    'products.pos_terminals.title': 'محطات نقاط البيع',
    'products.pos_terminals.description': 'أنظمة نقاط بيع متقدمة للبيع بالتجزئة والضيافة',
    'products.pos_terminals.product1': 'نقاط بيع سطح المكتب',
    'products.pos_terminals.product2': 'محطات الكل في واحد',
    'products.pos_terminals.product3': 'أنظمة شاشة اللمس',
    'products.mobile.title': 'أجهزة الكمبيوتر المحمولة',
    'products.mobile.description': 'أجهزة محمولة قوية للتنقل المؤسسي',
    'products.mobile.product1': 'ماسحات محمولة',
    'products.mobile.product2': 'مساعدات رقمية شخصية محمولة',
    'products.mobile.product3': 'هواتف ذكية قوية',
    'products.tablet.title': 'حلول الأجهزة اللوحية',
    'products.tablet.description': 'أجهزة لوحية صناعية لتطبيقات الأعمال المختلفة',
    'products.tablet.product1': 'أجهزة لوحية صناعية',
    'products.tablet.product2': 'أجهزة لوحية للأكشاك',
    'products.tablet.product3': 'أجهزة لوحية لخدمة الميدان',
    'products.iot_devices.title': 'أجهزة إنترنت الأشياء',
    'products.iot_devices.description': 'أجهزة ذكية متصلة لإنترنت الأشياء',
    'products.iot_devices.product1': 'أجهزة استشعار ذكية',
    'products.iot_devices.product2': 'أجهزة البوابة',
    'products.iot_devices.product3': 'حلول الاتصال',
    'products.learn_more': 'تعلم المزيد',
    'products.custom.title': 'تحتاج حلاً مخصصاً؟',
    'products.custom.description': 'يمكن لفريقنا تصميم وتطوير منتجات مخصصة لتلبية متطلبات أعمالك المحددة',
    'products.custom.cta': 'اتصل بخبرائنا',
    
    // About
    'about.title': 'حول طلاح تك',
    'about.description1': 'في طلاح تك، نؤمن بقوة التكنولوجيا في تحويل الأعمال وتشكيل المستقبل. مع سنوات من الخبرة في صناعة تكنولوجيا المعلومات، نتخصص في تقديم حلول شاملة تلبي الاحتياجات المتطورة للمؤسسات الحديثة.',
    'about.description2': 'تمتد خبرتنا عبر أنظمة نقاط البيع وحلول إنترنت الأشياء وتقنيات التنقل المؤسسي، مما يجعلنا وجهتك الشاملة لجميع احتياجات تكنولوجيا المعلومات. نفتخر بفهم المتطلبات الفريدة لكل عميل وتقديم حلول مخصصة تحقق قيمة تجارية حقيقية.',
    'about.description3': 'من الاستشارة والتنفيذ إلى الدعم والصيانة المستمرة، نضمن أن تبقى البنية التحتية التقنية قوية وآمنة وقابلة للتوسع مع نمو أعمالك.',
    'about.mission.title': 'المهمة',
    'about.mission.description': 'تمكين الشركات بحلول تقنية مبتكرة تدفع النمو والكفاءة في العصر الرقمي.',
    'about.team.title': 'الفريق',
    'about.team.description': 'محترفون خبراء بمعرفة صناعية عميقة وشغف لتقديم حلول تقنية استثنائية.',
    'about.innovation.title': 'الابتكار',
    'about.innovation.description': 'نتطور باستمرار مع أحدث التقنيات لتوفير حلول متطورة لعملائنا.',
    'about.quality.title': 'الجودة',
    'about.quality.description': 'ملتزمون بتقديم حلول عالية الجودة مع دعم وصيانة شاملة.',
  }
};

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('en');

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      <div className={language === 'ar' ? 'rtl' : 'ltr'} dir={language === 'ar' ? 'rtl' : 'ltr'}>
        {children}
      </div>
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
