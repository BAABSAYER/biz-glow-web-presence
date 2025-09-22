export interface ProductVariant {
  name: string;
  options: string[];
}

export interface ProductSpec {
  category: string;
  specs: { [key: string]: string };
}

export interface Product {
  id: string;
  slug: string;
  name: string;
  shortDescription: string;
  heroImage: string;
  gallery: string[];
  keyFeatures: string[];
  specs: ProductSpec[];
  variants: ProductVariant[];
  compatibility: string[];
  accessories: string[];
  datasheets: { name: string; url: string }[];
  manuals: { name: string; url: string }[];
  certifications: string[];
  useCases: string[]; // Use Case IDs
  ctaType: 'buy' | 'quote';
  ctaLink?: string;
  sku: string;
  brand: string;
  model: string;
  availability: 'in-stock' | 'pre-order' | 'out-of-stock';
  price?: string;
  seoMetaTitle: string;
  seoMetaDescription: string;
  structuredDataEnabled: boolean;
}

export const products: Product[] = [
  {
    id: 'desktop-pos-x1',
    slug: 'desktop-pos-x1',
    name: 'Desktop POS Terminal X1',
    shortDescription: 'High-performance all-in-one POS terminal for retail environments',
    heroImage: 'https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=600&h=400&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=600&h=400&fit=crop',
      'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop',
      'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=600&h=400&fit=crop'
    ],
    keyFeatures: [
      '15.6" capacitive touchscreen display',
      'Intel Core i5 processor for fast performance',
      'Built-in thermal receipt printer',
      'Multiple connectivity options (WiFi, Ethernet, USB)',
      'Compact footprint design',
      'Windows 11 IoT Enterprise ready'
    ],
    specs: [
      {
        category: 'Display',
        specs: {
          'Screen Size': '15.6 inches',
          'Resolution': '1920 × 1080 Full HD',
          'Touch Technology': 'Projected Capacitive',
          'Brightness': '350 cd/m²'
        }
      },
      {
        category: 'Performance',
        specs: {
          'Processor': 'Intel Core i5-1135G7',
          'Memory': '8GB DDR4 (expandable to 32GB)',
          'Storage': '256GB SSD',
          'Operating System': 'Windows 11 IoT Enterprise'
        }
      },
      {
        category: 'Connectivity',
        specs: {
          'WiFi': '802.11ac dual-band',
          'Ethernet': 'Gigabit Ethernet',
          'USB Ports': '4 × USB 3.0',
          'Serial Ports': '2 × RS-232'
        }
      },
      {
        category: 'Environmental',
        specs: {
          'Operating Temperature': '0°C to 40°C',
          'Storage Temperature': '-20°C to 60°C',
          'Humidity': '10% to 90% RH',
          'Certifications': 'FCC, CE, RoHS'
        }
      }
    ],
    variants: [
      { name: 'Memory', options: ['8GB', '16GB', '32GB'] },
      { name: 'Storage', options: ['256GB SSD', '512GB SSD', '1TB SSD'] },
      { name: 'Region', options: ['North America', 'Europe', 'APAC'] }
    ],
    compatibility: [
      'Cash drawers (RJ-11 interface)',
      'Barcode scanners (USB/Serial)',
      'Customer displays',
      'Payment terminals'
    ],
    accessories: ['Cash Drawer CD-100', 'Barcode Scanner BS-2D', 'Customer Display LCD-8'],
    datasheets: [
      { name: 'Product Datasheet', url: '/datasheets/desktop-pos-x1-datasheet.pdf' },
      { name: 'Technical Specifications', url: '/datasheets/desktop-pos-x1-specs.pdf' }
    ],
    manuals: [
      { name: 'User Manual', url: '/manuals/desktop-pos-x1-manual.pdf' },
      { name: 'Quick Start Guide', url: '/manuals/desktop-pos-x1-quickstart.pdf' }
    ],
    certifications: ['FCC', 'CE', 'RoHS', 'Energy Star'],
    useCases: ['retail-pos'],
    ctaType: 'quote',
    sku: 'TPT-DPX1-001',
    brand: 'Talah Tech',
    model: 'Desktop POS X1',
    availability: 'in-stock',
    price: 'Contact for pricing',
    seoMetaTitle: 'Desktop POS Terminal X1 | All-in-One Point of Sale System',
    seoMetaDescription: 'High-performance desktop POS terminal with 15.6" touchscreen, Intel Core i5, and built-in printer. Perfect for retail environments.',
    structuredDataEnabled: true
  },
  {
    id: 'rugged-handheld-wh1',
    slug: 'rugged-handheld-wh1',
    name: 'Rugged Handheld WH1',
    shortDescription: 'Ultra-rugged handheld computer for warehouse and logistics operations',
    heroImage: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=600&h=400&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=600&h=400&fit=crop',
      'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=600&h=400&fit=crop'
    ],
    keyFeatures: [
      'IP67 rated for dust and water resistance',
      '6-foot drop spec onto concrete',
      'Advanced 2D barcode scanning',
      'Long-lasting 4000mAh battery',
      'Android 13 with GMS certification',
      'Ergonomic pistol grip design'
    ],
    specs: [
      {
        category: 'Display',
        specs: {
          'Screen Size': '4.0 inches',
          'Resolution': '800 × 480 WVGA',
          'Touch Technology': 'Capacitive multi-touch',
          'Brightness': '500 cd/m²'
        }
      },
      {
        category: 'Performance',
        specs: {
          'Processor': 'Qualcomm Snapdragon 660',
          'Memory': '4GB RAM',
          'Storage': '64GB Flash',
          'Operating System': 'Android 13'
        }
      },
      {
        category: 'Scanning',
        specs: {
          'Scan Engine': 'Honeywell N6603 2D',
          'Symbologies': '1D/2D barcodes, DPM',
          'Scan Range': '2" to 50" (depending on barcode)',
          'Scan Rate': 'Up to 60 fps'
        }
      },
      {
        category: 'Durability',
        specs: {
          'Drop Spec': '6 ft (1.8m) to concrete',
          'IP Rating': 'IP67',
          'Operating Temperature': '-20°C to 50°C',
          'Tumble Spec': '2000 × 1m tumbles'
        }
      }
    ],
    variants: [
      { name: 'Memory', options: ['4GB/64GB', '6GB/128GB'] },
      { name: 'Connectivity', options: ['WiFi Only', 'WiFi + 4G LTE'] },
      { name: 'Scanner', options: ['Standard Range', 'Extended Range'] }
    ],
    compatibility: [
      'Vehicle mounts and docks',
      'Charging cradles',
      'Holsters and cases',
      'Wrist straps'
    ],
    accessories: ['Vehicle Mount VM-WH1', 'Charging Cradle CC-WH1', 'Holster HL-WH1'],
    datasheets: [
      { name: 'Product Datasheet', url: '/datasheets/rugged-handheld-wh1-datasheet.pdf' }
    ],
    manuals: [
      { name: 'User Manual', url: '/manuals/rugged-handheld-wh1-manual.pdf' }
    ],
    certifications: ['IP67', 'MIL-STD-810H', 'FCC', 'CE', 'GMS'],
    useCases: ['logistics-warehousing'],
    ctaType: 'quote',
    sku: 'TPT-RHW1-001',
    brand: 'Talah Tech',
    model: 'Rugged Handheld WH1',
    availability: 'in-stock',
    seoMetaTitle: 'Rugged Handheld Computer WH1 | Warehouse Mobile Scanner',
    seoMetaDescription: 'Ultra-rugged handheld computer with 2D barcode scanning, IP67 rating, and Android 13. Built for warehouse and logistics operations.',
    structuredDataEnabled: true
  },
  {
    id: 'medical-tablet-mt1',
    slug: 'medical-tablet-mt1',
    name: 'Medical Tablet MT1',
    shortDescription: 'Medical-grade tablet with antimicrobial coating for healthcare environments',
    heroImage: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop',
      'https://images.unsplash.com/photo-1551601651-2a8555f1a136?w=600&h=400&fit=crop'
    ],
    keyFeatures: [
      'Antimicrobial Corning Gorilla Glass',
      'Medical-grade IP65 sealing',
      'Hot-swappable battery system',
      'Disinfectant-ready housing',
      'Windows 11 IoT Enterprise LTSC',
      'Healthcare-specific accessories'
    ],
    specs: [
      {
        category: 'Display',
        specs: {
          'Screen Size': '10.1 inches',
          'Resolution': '1920 × 1200 WUXGA',
          'Touch Technology': 'Capacitive 10-point multi-touch',
          'Surface Treatment': 'Antimicrobial Corning Gorilla Glass'
        }
      },
      {
        category: 'Performance',
        specs: {
          'Processor': 'Intel Core i5-1135G7',
          'Memory': '8GB LPDDR4x',
          'Storage': '256GB SSD',
          'Operating System': 'Windows 11 IoT Enterprise LTSC'
        }
      },
      {
        category: 'Medical Features',
        specs: {
          'Antimicrobial Coating': 'Yes, housing and screen',
          'Disinfectant Compatibility': 'Bleach, alcohol, hydrogen peroxide',
          'Medical Standards': 'IEC 60601-1, FDA 510(k) pending',
          'HIPAA Compliance': 'Yes'
        }
      },
      {
        category: 'Durability',
        specs: {
          'IP Rating': 'IP65',
          'Drop Spec': '4 ft (1.2m)',
          'Operating Temperature': '0°C to 40°C',
          'Relative Humidity': '10% to 90% RH'
        }
      }
    ],
    variants: [
      { name: 'Memory', options: ['8GB', '16GB'] },
      { name: 'Storage', options: ['256GB SSD', '512GB SSD'] },
      { name: 'Connectivity', options: ['WiFi Only', 'WiFi + 4G LTE'] }
    ],
    compatibility: [
      'Medical cart mounting systems',
      'VESA mounting brackets',
      'Charging docks',
      'Barcode scanners'
    ],
    accessories: ['Medical Cart Mount MCM-MT1', 'Charging Dock CD-MT1', 'Protective Case PC-MT1'],
    datasheets: [
      { name: 'Medical Tablet Datasheet', url: '/datasheets/medical-tablet-mt1-datasheet.pdf' },
      { name: 'Antimicrobial Test Results', url: '/datasheets/medical-tablet-mt1-antimicrobial.pdf' }
    ],
    manuals: [
      { name: 'Healthcare User Manual', url: '/manuals/medical-tablet-mt1-manual.pdf' },
      { name: 'Cleaning & Disinfection Guide', url: '/manuals/medical-tablet-mt1-cleaning.pdf' }
    ],
    certifications: ['IEC 60601-1', 'FCC', 'CE', 'RoHS', 'FDA 510(k) Pending'],
    useCases: ['healthcare-medical'],
    ctaType: 'quote',
    sku: 'TPT-MMT1-001',
    brand: 'Talah Tech',
    model: 'Medical Tablet MT1',
    availability: 'pre-order',
    seoMetaTitle: 'Medical Tablet MT1 | Healthcare-Grade Tablet Computer',
    seoMetaDescription: 'Medical-grade tablet with antimicrobial coating, IP65 rating, and healthcare compliance. Designed for hospitals and clinical environments.',
    structuredDataEnabled: true
  },
  {
    id: 'urovo-i9100',
    slug: 'urovo-i9100',
    name: 'UROVO i9100 Smart POS Terminal',
    shortDescription: 'All-powerful smart point of sales terminal with complete payment support and financial certifications',
    heroImage: 'https://enoss.urovo.com/images/i9100/img204.jpg',
    gallery: [
      'https://enoss.urovo.com/images/i9100/img204.jpg',
      'https://enoss.urovo.com/images/i9100/i9100_02.png',
      'https://enoss.urovo.com/images/i9100/img233.jpg'
    ],
    keyFeatures: [
      '5.5" HD capacitive touchscreen (1280×720)',
      'Quad-core ARM Cortex-A53 2.0GHz processor',
      'Android OS with smooth user experience',
      'Complete payment support (IC, contactless, magnetic stripe, QR)',
      'Built-in thermal printer (58mm, 203dpi)',
      '1D/2D barcode scanning capability',
      '5200mAh large-capacity battery',
      'EMV, PCI, PayPass, PayWave certified',
      'Multiple connectivity options (4G LTE, WiFi, GPS)',
      'Expandable docking base with USB and LAN ports'
    ],
    specs: [
      {
        category: 'Display & Interface',
        specs: {
          'Screen Size': '5.5 inches TFT-LCD HD',
          'Resolution': '1280 × 720',
          'Touch Technology': 'Ultra sensitive capacitive touch screen',
          'Dimensions': '188mm × 81mm × 35mm (max 61mm)',
          'Weight': '457g (Battery included)'
        }
      },
      {
        category: 'Performance',
        specs: {
          'Processor': 'Quad-core ARM Cortex-A53 2.0GHz',
          'Memory': '2GB RAM',
          'Storage': '8GB ROM (32GB optional)',
          'Operating System': 'Android',
          'Battery': '3.6V / 5200mAh (Typ.)'
        }
      },
      {
        category: 'Payment & Scanning',
        specs: {
          'Magnetic Card': 'Supports ISO7811/7812/7813, triple track, bi-directional',
          'Chip Card': 'Meets ISO7816 standard',
          'Contactless Card': 'Supports 14443A&14443B, MifareCard',
          'Barcode Scanning': '1D/2D barcode scanning (Camera decoding)',
          'Printer': '58mm thermal printing, 203dpi, 50-70mm/s'
        }
      },
      {
        category: 'Connectivity',
        specs: {
          'Cellular': 'FDD-LTE, TDD-LTE, WCDMA, GSM/EDGE/GPRS',
          'WiFi': 'IEEE 802.11 a/b/g/n/ac 2.4GHz/5GHz',
          'GPS': 'GPS, A-GPS, GLONASS, BD, Galileo',
          'Camera': 'Rear 2MP FF (5MP AF optional), Front camera optional',
          'Buttons': 'Home, Menu, Back, Volume +/-, Power'
        }
      },
      {
        category: 'Environmental',
        specs: {
          'Operating Temperature': '0°C to 50°C (32°F to 122°F)',
          'Storage Temperature': '-20°C to 70°C (-4°F to 158°F)',
          'Humidity': '5%RH to 95%RH (non-condensing)',
          'Certifications': 'EMV, PCI, PayPass, PayWave'
        }
      }
    ],
    variants: [
      { name: 'Memory', options: ['2GB/8GB', '2GB/32GB'] },
      { name: 'Camera', options: ['Standard 2MP', 'Enhanced 5MP AF'] },
      { name: 'Fingerprint', options: ['Standard', 'Optional Fingerprint', 'Capacitive Fingerprint'] }
    ],
    compatibility: [
      'Charging cradles and docks',
      'Desktop stands',
      'Vehicle mounts',
      'Protective cases and holsters',
      'Magic Box accessory'
    ],
    accessories: [
      'Charging Cradle',
      'Desktop Stand', 
      'Holster',
      'Silicone Rubber Protective Case',
      'TPU Protective Case',
      'Magic Box',
      'Fingerprint Module (Optional)'
    ],
    datasheets: [
      { name: 'Product Specifications', url: '/datasheets/urovo-i9100-specs.pdf' },
      { name: 'Payment Certifications', url: '/datasheets/urovo-i9100-certifications.pdf' }
    ],
    manuals: [
      { name: 'User Manual', url: '/manuals/urovo-i9100-manual.pdf' },
      { name: 'Quick Start Guide', url: '/manuals/urovo-i9100-quickstart.pdf' }
    ],
    certifications: ['EMV', 'PCI', 'PayPass', 'PayWave', 'FCC', 'CE'],
    useCases: ['retail-pos'],
    ctaType: 'quote',
    sku: 'UROVO-I9100-001',
    brand: 'UROVO',
    model: 'i9100',
    availability: 'in-stock',
    price: 'Contact for pricing',
    seoMetaTitle: 'UROVO i9100 Smart POS Terminal | Complete Payment Solution',
    seoMetaDescription: 'Professional smart POS terminal with 5.5" HD display, complete payment support, thermal printer, and financial certifications. Perfect for retail businesses.',
    structuredDataEnabled: true
  }
  // Add more products as needed...
];