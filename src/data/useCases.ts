import fleetTransportationHero from '@/assets/fleet-transportation-hero.jpg';

export interface UseCase {
  id: string;
  slug: string;
  title: string;
  summary: string;
  longDescription: string;
  heroImage: string;
  industries: string[];
  benefits: string[];
  featuredProducts: string[]; // Product IDs
  seoMetaTitle: string;
  seoMetaDescription: string;
}

export const useCases: UseCase[] = [
  {
    id: 'retail-pos',
    slug: 'retail-pos',
    title: 'Retail & POS',
    summary: 'Complete point-of-sale solutions for modern retail environments',
    longDescription: 'Transform your retail operations with our comprehensive POS solutions designed for speed, reliability, and customer satisfaction. From traditional retail stores to quick-service restaurants, our systems integrate seamlessly with your existing infrastructure.',
    heroImage: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=400&fit=crop',
    industries: ['Retail', 'Restaurant', 'Hospitality', 'Quick Service'],
    benefits: [
      'Faster checkout processes',
      'Real-time inventory management',
      'Customer analytics and insights',
      'Integrated payment processing',
      'Staff productivity optimization'
    ],
    featuredProducts: ['mobile-pos-scanner', 'all-in-one-terminal'],
    seoMetaTitle: 'Retail POS Solutions | Point of Sale Systems | Talah Tech',
    seoMetaDescription: 'Modern POS terminals, barcode scanners, and mobile payment solutions for retail and hospitality businesses. Streamline operations with Talah Tech.'
  },
  {
    id: 'logistics-warehousing',
    slug: 'logistics-warehousing',
    title: 'Logistics & Warehousing',
    summary: 'Rugged mobile solutions for warehouse and logistics operations',
    longDescription: 'Optimize your supply chain with rugged handheld computers, industrial tablets, and advanced scanning solutions built to withstand demanding warehouse environments while maintaining peak performance.',
    heroImage: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&h=400&fit=crop',
    industries: ['Warehousing', 'Distribution', 'Manufacturing', 'Supply Chain'],
    benefits: [
      'Improved inventory accuracy',
      'Faster picking and packing',
      'Reduced operational costs',
      'Real-time warehouse visibility',
      'Enhanced worker productivity'
    ],
    featuredProducts: ['industrial-tablet-it2', 'warehouse-scanner-ws3'],
    seoMetaTitle: 'Warehouse Management Solutions | Rugged Mobile Computers | Talah Tech',
    seoMetaDescription: 'Industrial tablets, rugged handhelds, and warehouse scanners for logistics operations. Built tough for demanding environments.'
  },
  {
    id: 'healthcare-medical',
    slug: 'healthcare-medical',
    title: 'Healthcare & Medical',
    summary: 'Medical-grade devices for healthcare environments',
    longDescription: 'Enhance patient care with medical-grade tablets, antimicrobial accessories, and healthcare-specific solutions designed to meet strict hygiene and regulatory requirements in medical environments.',
    heroImage: 'https://images.unsplash.com/photo-1551601651-2a8555f1a136?w=800&h=400&fit=crop',
    industries: ['Hospitals', 'Clinics', 'Long-term Care', 'Home Healthcare'],
    benefits: [
      'Improved patient care quality',
      'Enhanced data accuracy',
      'Streamlined workflows',
      'Regulatory compliance',
      'Infection control support'
    ],
    featuredProducts: ['antimicrobial-cart-ac2', 'vitals-peripheral-vp3'],
    seoMetaTitle: 'Healthcare Technology Solutions | Medical Tablets | Talah Tech',
    seoMetaDescription: 'Medical-grade tablets, antimicrobial accessories, and healthcare devices for hospitals and clinics. Compliant with healthcare standards.'
  },
  {
    id: 'fleet-transportation',
    slug: 'fleet-transportation',
    title: 'Fleet & Transportation',
    summary: 'In-vehicle technology for fleet management and safety',
    longDescription: 'Enhance fleet safety and efficiency with dashcams, mobile data video recorders, GPS tracking, and rugged in-vehicle computing solutions designed for transportation and logistics fleets.',
    heroImage: fleetTransportationHero,
    industries: ['Transportation', 'Logistics', 'Public Safety', 'Construction'],
    benefits: [
      'Enhanced driver safety',
      'Real-time fleet tracking',
      'Reduced insurance costs',
      'Improved compliance',
      'Optimized routing'
    ],
    featuredProducts: ['dashcam-dc1', 'mdvr-system-ms2', 'gps-tracker-gt3', 'vehicle-dock-vd4'],
    seoMetaTitle: 'Fleet Management Technology | Vehicle Tracking Systems | Talah Tech',
    seoMetaDescription: 'Dashcams, GPS trackers, and in-vehicle computing solutions for fleet management. Improve safety and efficiency with Talah Tech.'
  }
];