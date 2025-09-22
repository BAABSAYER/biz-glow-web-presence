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
    accessories: [],
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
  },
  {
    id: 'urovo-i9000s',
    slug: 'urovo-i9000s',
    name: 'UROVO i9000S Rugged Smart POS Terminal',
    shortDescription: 'Professional all-powerful rugged design POS terminal to redefine smart payment with industrial quality',
    heroImage: 'http://en-urovo.oss-ap-southeast-1.aliyuncs.com/image/2024-10-24/6719ab20f18cb.png',
    gallery: [
      'http://en-urovo.oss-ap-southeast-1.aliyuncs.com/image/2024-10-24/6719ab20f18cb.png',
      'http://en-urovo.oss-ap-southeast-1.aliyuncs.com/image/2024-10-24/6719ab1a89c70.png',
      'http://en-urovo.oss-ap-southeast-1.aliyuncs.com/image/2024-10-16/670f959256be0.png'
    ],
    keyFeatures: [
      '5" HD capacitive touchscreen (720×1280)',
      'Octa-core 2.0GHz processor for superior performance',
      'Android OS with professional applications',
      'Industrial-grade 1.5m drop resistance',
      'Professional 2D scan engine with high sensitivity',
      'Built-in thermal printer (58mm, 203dpi)',
      '5000mAh high-capacity battery',
      'eSIM communication support',
      'Advanced NFC technology for contactless payments',
      'Complete payment solution (magnetic, IC, contactless)',
      'Financial certifications (PCI PTS V6, EMV, PayWave)'
    ],
    specs: [
      {
        category: 'Display & Interface',
        specs: {
          'Screen Size': '5.0 inches capacitive touchscreen',
          'Resolution': '720 × 1280 HD',
          'Dimensions': '184mm × 81mm × 51mm (32mm thinnest)',
          'Weight': '521g',
          'Buttons': 'Volume +/-, Power, Scan x2, Custom, Fn, Cancel, Delete, Enter'
        }
      },
      {
        category: 'Performance',
        specs: {
          'Processor': 'Octa-core 2.0GHz',
          'Memory': '3GB RAM / 32GB ROM (4GB/64GB optional)',
          'Operating System': 'Android',
          'Battery': '3.8V / 5000mAh (Low-temperature battery optional)',
          'Durability': 'Industrial-grade 1.5m drop resistance'
        }
      },
      {
        category: 'Payment & Scanning',
        specs: {
          'Payment Methods': 'Magnetic stripe, IC Card, Contactless Card (NFC)',
          'Scanning': '2D scan engine, 1D/2D barcode reading',
          'Camera': '5MP AF rear camera (13MP AF optional)',
          'NFC': 'NFC Forum and EMVCo compliant',
          'Printer': '58mm thermal printing, 203dpi, 30mm roll size'
        }
      },
      {
        category: 'Connectivity',
        specs: {
          'Cellular': '4G, 3G, 2G networks with eSIM support',
          'WiFi': '2.4G/5G dual-band, IEEE 802.11 a/b/g/n/ac',
          'Positioning': 'GPS, A-GPS, Beidou, GLONASS, Galileo',
          'Interfaces': 'USB Type-C, DC Jack, 3.5mm Audio, 8-pin Pogopin',
          'Wireless': 'Advanced NFC for expanded applications'
        }
      },
      {
        category: 'Environmental & Certifications',
        specs: {
          'Operating Temperature': '0°C to 50°C',
          'Storage Temperature': '-20°C to 70°C',
          'Humidity': '5%RH to 95%RH (non-condensing)',
          'Certifications': 'PCI PTS V6, EMV L1&L2, EMV Contactless L1, MasterCard Contactless, Visa PayWave, TQM, ATEX'
        }
      }
    ],
    variants: [
      { name: 'Memory', options: ['3GB/32GB', '4GB/64GB'] },
      { name: 'Camera', options: ['5MP AF', '13MP AF'] },
      { name: 'Battery', options: ['Standard 5000mAh', 'Low-temperature Battery'] }
    ],
    compatibility: [
      'Charging cradles and docks',
      'POS stands and holders',
      'Vehicle mounts',
      'Protective holsters',
      'Multi-function HUBs'
    ],
    accessories: [],
    datasheets: [
      { name: 'Product Specifications', url: '/datasheets/urovo-i9000s-specs.pdf' },
      { name: 'Payment Certifications', url: '/datasheets/urovo-i9000s-certifications.pdf' }
    ],
    manuals: [
      { name: 'User Manual', url: '/manuals/urovo-i9000s-manual.pdf' },
      { name: 'Quick Start Guide', url: '/manuals/urovo-i9000s-quickstart.pdf' }
    ],
    certifications: ['PCI PTS V6', 'EMV L1&L2', 'EMV Contactless L1', 'MasterCard Contactless', 'Visa PayWave', 'TQM', 'ATEX'],
    useCases: ['retail-pos'],
    ctaType: 'quote',
    sku: 'UROVO-I9000S-001',
    brand: 'UROVO',
    model: 'i9000S',
    availability: 'in-stock',
    price: 'Contact for pricing',
    seoMetaTitle: 'UROVO i9000S Rugged Smart POS Terminal | Industrial Payment Solution',
    seoMetaDescription: 'Rugged smart POS terminal with 5" HD display, octa-core processor, industrial durability, and complete payment certifications. Built for demanding environments.',
    structuredDataEnabled: true
  },
  {
    id: 'urovo-dt66',
    slug: 'urovo-dt66',
    name: 'UROVO DT66 Rugged Mobile Computer',
    shortDescription: 'Ultra-rugged 6.5" mobile computer with 5G connectivity for logistics and warehousing operations',
    heroImage: 'http://en-urovo.oss-ap-southeast-1.aliyuncs.com/image/2024-08-27/66cd8025612a7.png',
    gallery: [
      'http://en-urovo.oss-ap-southeast-1.aliyuncs.com/image/2024-08-27/66cd8025612a7.png',
      'http://en-urovo.oss-ap-southeast-1.aliyuncs.com/image/2024-06-14/666be04b48e5b.png',
      'http://en-urovo.oss-ap-southeast-1.aliyuncs.com/image/2024-08-07/66b2d4c63520e.png'
    ],
    keyFeatures: [
      '6.5" HD+ display (720×1600 or 1080×2408 optional)',
      'Qualcomm Octa-core processor for high performance',
      '5G/4G/3G/2G cellular connectivity',
      'WiFi 6E with 2x2 MU-MIMO support',
      'Professional 1D/2D barcode scanning engine',
      'IP68 rated with 1.5m drop resistance',
      '5000mAh hot-swappable battery',
      'Dual cameras (5MP front, 13MP rear with PDAF)',
      'Multi-positioning systems (GPS, BEIDOU, GLONASS, Galileo)',
      'Gorilla Glass with glove and wet finger support'
    ],
    specs: [
      {
        category: 'Display & Interface',
        specs: {
          'Screen Size': '6.5 inches',
          'Resolution': '720 × 1600 (1080 × 2408 optional)',
          'Touch Technology': 'Gorilla Glass capacitive multi-touch',
          'Brightness': 'At least 450 nits',
          'Dimensions': '175.8mm L × 76.5mm W × 14.5mm D',
          'Weight': '283g (Standard), 277g (Optional)'
        }
      },
      {
        category: 'Performance',
        specs: {
          'Processor': 'Qualcomm Octa-core',
          'Memory': '4GB RAM / 64GB ROM (8GB/128GB optional)',
          'Storage Expansion': 'Micro-SD up to 256GB',
          'Operating System': 'Android',
          'Battery': '3.85V / 5000mAh with hot swap support'
        }
      },
      {
        category: 'Scanning & Cameras',
        specs: {
          'Scan Engine': 'Professional 1D/2D barcode engine',
          'Scan Support': 'International standard barcodes, screen display',
          'Front Camera': '5MP FF',
          'Rear Camera': '13MP PDAF (Optional iToF camera)',
          'Audio': 'Dual-microphone noise cancellation, 1.5W speaker'
        }
      },
      {
        category: 'Connectivity',
        specs: {
          'Cellular': '5G/4G/3G/2G networks',
          'WiFi': 'WiFi 6E, 2.4G/5G dual-band, 2x2 MU-MIMO',
          'Standards': 'IEEE 802.11a/b/g/n/ac/d/e/h/i/k/r/v/w/ax',
          'SIM': 'Nano-SIM × 2 (eSIM reserved support)',
          'Positioning': 'GPS, BEIDOU, GLONASS, Galileo'
        }
      },
      {
        category: 'Durability',
        specs: {
          'IP Rating': 'IP68',
          'Drop Spec': '1.5m drop resistance',
          'Operating Temperature': '-20°C to +60°C',
          'Storage Temperature': '-40°C to +70°C',
          'Humidity': '5%RH to 95%RH (non-condensing)',
          'ESD': '±15kV Air, ±8kV contact'
        }
      }
    ],
    variants: [
      { name: 'Memory', options: ['4GB/64GB', '8GB/128GB'] },
      { name: 'Display', options: ['720×1600 HD+', '1080×2408 Full HD'] },
      { name: 'Camera', options: ['Standard', 'Optional iToF Camera'] }
    ],
    compatibility: [
      'Trigger handle accessories',
      'Rugged protective boots',
      'USB/Ethernet charging cradles',
      'Vehicle mounts and docks',
      'Holsters and carrying cases'
    ],
    accessories: [],
    datasheets: [
      { name: 'Product Specifications', url: '/datasheets/urovo-dt66-specs.pdf' },
      { name: 'Technical Datasheet', url: '/datasheets/urovo-dt66-datasheet.pdf' }
    ],
    manuals: [
      { name: 'User Manual', url: '/manuals/urovo-dt66-manual.pdf' },
      { name: 'Quick Start Guide', url: '/manuals/urovo-dt66-quickstart.pdf' }
    ],
    certifications: ['IP68', 'FCC', 'CE'],
    useCases: ['logistics-warehousing'],
    ctaType: 'quote',
    sku: 'UROVO-DT66-001',
    brand: 'UROVO',
    model: 'DT66',
    availability: 'in-stock',
    price: 'Contact for pricing',
    seoMetaTitle: 'UROVO DT66 Rugged Mobile Computer | 5G Logistics Scanner',
    seoMetaDescription: 'Ultra-rugged 6.5" mobile computer with 5G connectivity, professional barcode scanning, and IP68 rating. Perfect for logistics and warehousing operations.',
    structuredDataEnabled: true
  },
  {
    id: 'urovo-ct48',
    slug: 'urovo-ct48',
    name: 'UROVO CT48 Enterprise Mobile Computer',
    shortDescription: 'Lightweight enterprise mobile computer with professional scanning for efficient warehouse operations',
    heroImage: 'http://en-urovo.oss-ap-southeast-1.aliyuncs.com/image/2023-06-21/6492a4f565ab4.png',
    gallery: [
      'http://en-urovo.oss-ap-southeast-1.aliyuncs.com/image/2023-06-21/6492a4f565ab4.png',
      'http://en-urovo.oss-ap-southeast-1.aliyuncs.com/image/2023-06-21/6492a4f9bee0e.png',
      'http://en-urovo.oss-ap-southeast-1.aliyuncs.com/image/2023-06-27/649a9fd2702ab.png'
    ],
    keyFeatures: [
      '4.0" touch screen display (480×800)',
      'Lightweight design at only 252g for comfortable one-handed use',
      'Octa-core 2.2GHz processor for fast performance',
      'Professional scan engine with 25° scanning angle',
      'Millisecond-level 1D/2D barcode recognition',
      'IP67 rated with 1.5m drop resistance',
      '5000mAh removable battery for full-shift operation',
      '13MP autofocus rear camera',
      'Large keypad design prevents accidental touches',
      '100dB+ speaker for noisy environments'
    ],
    specs: [
      {
        category: 'Display & Interface',
        specs: {
          'Screen Size': '4.0 inches',
          'Resolution': '480 × 800',
          'Touch Technology': 'Capacitive touchscreen',
          'Dimensions': '66mm width (ergonomic design)',
          'Weight': '252g'
        }
      },
      {
        category: 'Performance',
        specs: {
          'Processor': 'Octa-core 2.2GHz',
          'Memory': '4GB RAM',
          'Storage': '64GB ROM',
          'Storage Expansion': 'Micro SD up to 256GB',
          'Operating System': 'Android',
          'Battery': '5000mAh removable battery'
        }
      },
      {
        category: 'Scanning & Camera',
        specs: {
          'Scan Engine': 'Professional scan engine',
          'Barcode Support': '1D/2D standard barcodes',
          'Scanning Angle': '25° for easy operation',
          'Response Speed': 'Millisecond-level recognition',
          'Rear Camera': '13MP with fast autofocus'
        }
      },
      {
        category: 'Connectivity',
        specs: {
          'SIM Support': 'Nano-SIM × 1',
          'Positioning': 'GPS, A-GPS, BEIDOU, GLONASS, Galileo',
          'Audio': '1.5W speaker, microphone with noise cancellation',
          'Volume': '100dB+ for noisy environments',
          'Receiver': 'Optional'
        }
      },
      {
        category: 'Durability',
        specs: {
          'IP Rating': 'IP67 (dust-proof & water-proof)',
          'Drop Spec': '1.5m drop resistance',
          'Build Quality': 'Industrial-grade protection',
          'Applications': 'Logistics, retail, manufacturing (indoor/outdoor)'
        }
      }
    ],
    variants: [
      { name: 'Storage', options: ['4GB/64GB Standard'] },
      { name: 'SIM', options: ['Nano-SIM', 'Micro SD Slot'] },
      { name: 'Receiver', options: ['Standard', 'Optional Receiver'] }
    ],
    compatibility: [
      'Charging cradles and docks',
      'Battery charging stations',
      'Hand straps and carrying accessories',
      'Protective covers and cases',
      'Screen protectors'
    ],
    accessories: [],
    datasheets: [
      { name: 'Product Specifications', url: '/datasheets/urovo-ct48-specs.pdf' },
      { name: 'Technical Datasheet', url: '/datasheets/urovo-ct48-datasheet.pdf' }
    ],
    manuals: [
      { name: 'User Manual', url: '/manuals/urovo-ct48-manual.pdf' },
      { name: 'Quick Start Guide', url: '/manuals/urovo-ct48-quickstart.pdf' }
    ],
    certifications: ['IP67', 'FCC', 'CE'],
    useCases: ['logistics-warehousing'],
    ctaType: 'quote',
    sku: 'UROVO-CT48-001',
    brand: 'UROVO',
    model: 'CT48',
    availability: 'in-stock',
    price: 'Contact for pricing',
    seoMetaTitle: 'UROVO CT48 Enterprise Mobile Computer | Lightweight Warehouse Scanner',
    seoMetaDescription: 'Lightweight 252g enterprise mobile computer with 4" display, professional barcode scanning, and IP67 rating. Perfect for warehouse and logistics operations.',
    structuredDataEnabled: true
  },
  {
    id: 'urovo-p8100-4g',
    slug: 'urovo-p8100-4g',
    name: 'UROVO P8100 4G',
    shortDescription: '8-inch rugged Android tablet with integrated barcode scanning, 4G connectivity, and enterprise-grade durability for demanding logistics operations',
    heroImage: '/lovable-uploads/urovo-logo.png',
    gallery: ['/lovable-uploads/urovo-logo.png'],
    keyFeatures: [
      '8-inch HD display (1280×800) with capacitive touch',
      'Professional 1D/2D barcode scanner built-in',
      'Dual-SIM 4G connectivity with global band support',
      'IP67 protection rating with 1.2m drop resistance',
      '8400mAh battery with Quick Charge support',
      'Multi-positioning system (GPS, GLONASS, Galileo)',
      'Lightweight 600g design for all-day use',
      'Android OS with enterprise management'
    ],
    specs: [
      {
        category: 'Performance',
        specs: {
          'Processor': 'Qualcomm Octa-core 2.45GHz',
          'Operating System': 'Android',
          'Memory': '4GB RAM / 64GB ROM (8GB/128GB optional)',
          'Display': '8-inch IPS LCD, 1280×800 resolution',
          'Touch Screen': 'Capacitive multi-touch, glove/wet finger support'
        }
      },
      {
        category: 'Data Capture',
        specs: {
          'Barcode Scanning': 'Professional 1D/2D barcode engine',
          'Camera': 'Front 5MP, Rear 13MP with LED flash',
          'Supported Codes': 'International standard 1D/2D barcodes',
          'Special Features': 'On-screen and colored barcode scanning'
        }
      },
      {
        category: 'Connectivity',
        specs: {
          'Cellular': 'Dual-SIM 4G/3G/2G, Dual-Standby',
          'WiFi': '2.4G/5G IEEE 802.11a/b/g/n/ac/ax ready',
          'GPS': 'GPS, A-GPS, BEIDOU, GLONASS, Galileo',
          'Ports': '3.5mm audio jack, USB-C charging',
          'Storage': 'Micro SD/TF slot, dual Nano-SIM'
        }
      },
      {
        category: 'Durability',
        specs: {
          'Protection Rating': 'IP67 dust and water protection',
          'Drop Resistance': '1.2m drop test certified',
          'Operating Temperature': '-20°C to +60°C',
          'Storage Temperature': '-40°C to +70°C',
          'Humidity': '5%RH to 95%RH (non-condensing)'
        }
      },
      {
        category: 'Physical',
        specs: {
          'Dimensions': '253.8 × 146 × 16.5mm',
          'Weight': 'Approximately 600g',
          'Battery': '3.85V 8400mAh Li-ion with QC charging',
          'Audio': 'Dual microphone, dual speaker (1.2W)',
          'Buttons': 'Power, Volume +/-, Scan trigger, P1-P8 optional'
        }
      }
    ],
    variants: [
      { name: 'Memory', options: ['4GB/64GB', '8GB/128GB'] },
      { name: 'Buttons', options: ['Standard', 'P1-P8 Programmable Keys'] },
      { name: 'Security', options: ['Standard', 'PSAM Slot Option'] }
    ],
    compatibility: [
      'Vehicle docking stations',
      'Desktop charging cradles',
      'Protective cases and covers',
      'Hand straps and lanyards',
      'Screen protectors'
    ],
    accessories: [],
    datasheets: [
      { name: 'Product Specifications', url: '/datasheets/urovo-p8100-specs.pdf' },
      { name: 'Technical Datasheet', url: '/datasheets/urovo-p8100-datasheet.pdf' }
    ],
    manuals: [
      { name: 'User Manual', url: '/manuals/urovo-p8100-manual.pdf' },
      { name: 'Quick Start Guide', url: '/manuals/urovo-p8100-quickstart.pdf' }
    ],
    certifications: ['IP67', 'FCC', 'CE', 'GMS'],
    useCases: ['logistics-warehousing'],
    ctaType: 'quote',
    sku: 'UROVO-P8100-001',
    brand: 'UROVO',
    model: 'P8100 4G',
    availability: 'in-stock',
    price: 'Contact for pricing',
    seoMetaTitle: 'UROVO P8100 4G Rugged Tablet | 8-inch Logistics Android Tablet',
    seoMetaDescription: '8-inch rugged Android tablet with professional barcode scanning, 4G connectivity, and IP67 protection. Perfect for logistics, warehousing, and field operations.',
    structuredDataEnabled: true
  },
  {
    id: 'urovo-k200',
    slug: 'urovo-k200',
    name: 'UROVO K200 Industrial Wired Barcode Scanner',
    shortDescription: 'Ultra-rugged industrial wired barcode scanner with powerful DPM decoding capabilities and dual-color variable illumination for harsh manufacturing environments',
    heroImage: '/lovable-uploads/urovo-logo.png',
    gallery: ['/lovable-uploads/urovo-logo.png'],
    keyFeatures: [
      'Professional scanning engine with 1280×1080 high-pixel sensor',
      'Superior DPM code reading on various marking methods',
      'Dual-color variable illumination (red and white LEDs)',
      'Ultra-rugged design with 1.8m drop resistance',
      'IP54 dust and water protection rating',
      'Triple scanning feedback modes (vibration, buzzer, LED)',
      'Multi-system compatibility (Windows, Android, Linux)',
      'Ergonomic design for extended use comfort'
    ],
    specs: [
      {
        category: 'Performance',
        specs: {
          'Sensor': '1280×1080, 1.3MP CMOS, 60 fps',
          'Resolution': '≧3mil',
          'Illumination': 'Warm white LED & red LED',
          'Aimer': '650nm laser',
          'Scan Angle': 'Roll 360°, pitch ±60°, skew ±60°'
        }
      },
      {
        category: 'Decode Capabilities',
        specs: {
          '1D Codes': 'UPC-A/E, EAN-8/13, Code 128, GS1-128, Code 39/93/11, Interleaved 2 of 5, Codabar, MSI Plessey, GS1 DataBar',
          '2D Codes': 'QR Code, Data Matrix, PDF417',
          'DPM Support': 'Laser engraving, dot peening, chemical etching, ink marking',
          'Special Features': 'Low-contrast, reflective, curved surfaces'
        }
      },
      {
        category: 'Connectivity',
        specs: {
          'Interface': 'USB-HID, USB virtual serial port, RS232',
          'Compatibility': 'Windows XP/7/8/10, Android, Linux',
          'Connection': 'Plug and play functionality',
          'Cable': 'Wired connection with durable cable'
        }
      },
      {
        category: 'Durability',
        specs: {
          'Protection Rating': 'IP54 dust and water proof',
          'Drop Resistance': '1.8m drop test certified',
          'Operating Temperature': '-20°C to +50°C',
          'Storage Temperature': '-40°C to +70°C',
          'Humidity': '5% to 95% (non-condensing)'
        }
      },
      {
        category: 'Physical',
        specs: {
          'Dimensions': '72 × 98 × 186mm',
          'Weight': '200g',
          'Feedback': 'Vibration motor, buzzer, LED indicator',
          'Design': 'Ergonomic grip for extended use',
          'Color': 'Industrial grade finish'
        }
      }
    ],
    variants: [
      { name: 'Interface', options: ['USB-HID', 'USB Virtual Serial', 'RS232'] },
      { name: 'Cable Length', options: ['Standard 2m', 'Extended 3m'] }
    ],
    compatibility: [
      'Manufacturing execution systems (MES)',
      'Enterprise resource planning (ERP)',
      'Warehouse management systems (WMS)',
      'Quality control applications',
      'Production line tracking'
    ],
    accessories: [],
    datasheets: [
      { name: 'Product Specifications', url: '/datasheets/urovo-k200-specs.pdf' },
      { name: 'Technical Datasheet', url: '/datasheets/urovo-k200-datasheet.pdf' }
    ],
    manuals: [
      { name: 'User Manual', url: '/manuals/urovo-k200-manual.pdf' },
      { name: 'Programming Guide', url: '/manuals/urovo-k200-programming.pdf' }
    ],
    certifications: ['IP54', 'FCC', 'CE', 'RoHS'],
    useCases: ['logistics-warehousing'],
    ctaType: 'quote',
    sku: 'UROVO-K200-001',
    brand: 'UROVO',
    model: 'K200',
    availability: 'in-stock',
    price: 'Contact for pricing',
    seoMetaTitle: 'UROVO K200 Industrial Barcode Scanner | DPM Code Reader',
    seoMetaDescription: 'Ultra-rugged industrial wired barcode scanner with superior DPM decoding, dual-color illumination, and IP54 protection. Perfect for manufacturing and logistics.',
    structuredDataEnabled: true
  },
  {
    id: 'urovo-t3-nursing-station',
    slug: 'urovo-t3-nursing-station',
    name: 'UROVO T3 Series Medical Nursing Mobile Station',
    shortDescription: 'Advanced all-in-one medical-grade mobile workstation designed for healthcare professionals with ergonomic features and antibacterial protection',
    heroImage: 'http://en-urovo.oss-ap-southeast-1.aliyuncs.com/image/2025-01-02/67764a838ffab.png',
    gallery: [
      'http://en-urovo.oss-ap-southeast-1.aliyuncs.com/image/2025-01-02/67764a838ffab.png',
      'http://en-urovo.oss-ap-southeast-1.aliyuncs.com/image/2025-01-02/67764a84b2157.jpg',
      'http://en-urovo.oss-ap-southeast-1.aliyuncs.com/image/2025-01-02/67764a85cb5dd.jpg'
    ],
    keyFeatures: [
      'Medical-grade ABS antibacterial plastic construction',
      'Adjustable height with electric lifting mechanism',
      'High-strength aluminum alloy column (110kg capacity)',
      'Natural convection cooling system (fanless design)',
      'Hidden keyboard and mouse tray for ergonomic workspace',
      'Silent casters for smooth mobility in any direction',
      'Modular design with customizable drawers and accessories',
      'Compatible with medical disinfection solutions',
      'Bio-hazard waste container and storage options',
      'Sealed design for quiet, reliable operation'
    ],
    specs: [
      {
        category: 'Design & Mobility',
        specs: {
          'Height Adjustment': 'Electric lifting mechanism with adjustable height',
          'Mobility': 'Silent casters with countertop handle for directional control',
          'Weight Capacity': 'Up to 110kg total loading capacity',
          'Column Material': 'High-strength aluminum alloy',
          'Ergonomics': 'Optimized positioning for maximum efficiency and comfort'
        }
      },
      {
        category: 'Medical-Grade Computing',
        specs: {
          'Housing Material': 'ABS antibacterial plastic',
          'Cooling System': 'Natural convection cooling (fanless)',
          'Design': 'Complete sealed fanless design',
          'Operation': 'Quiet, reliable operation for healthcare environments',
          'Medical Compliance': 'Built for hygiene and performance standards'
        }
      },
      {
        category: 'Hygienic Properties',
        specs: {
          'Antibacterial Protection': 'ABS plastic inhibits bacterial growth',
          'Disinfection Compatibility': 'Alcohol and povidone-iodine resistant',
          'Cleaning': 'Resistant to everyday medical disinfection',
          'Hygiene Standards': 'Superior hygiene maintenance',
          'Safety': 'Safe and clean healthcare environment'
        }
      },
      {
        category: 'Workspace Features',
        specs: {
          'Keyboard Storage': 'Hidden keyboard and mouse tray',
          'Workspace': 'Clutter-free, streamlined environment',
          'Ergonomic Comfort': 'Enhanced typing and workspace comfort',
          'Organization': 'Clean and organized workspace design',
          'Accessibility': 'Easy access to computing peripherals'
        }
      },
      {
        category: 'Modular Customization',
        specs: {
          'Design Type': 'Highly flexible modular design',
          'Storage Options': 'Wide range of customizable drawers',
          'Accessories': 'Bio-hazard waste containers, side storage, trash bins',
          'Adaptability': 'Customizable to meet specific healthcare needs',
          'Maintenance': 'Easy maintenance and component replacement',
          'Upgrades': 'Seamless upgrades and modifications'
        }
      }
    ],
    variants: [
      { name: 'Configuration', options: ['Standard Nursing Station', 'Extended Storage Configuration'] },
      { name: 'Accessories', options: ['Basic Setup', 'Full Accessory Package'] },
      { name: 'Drawer Configuration', options: ['Standard Drawers', 'Customized Drawer Layout'] }
    ],
    compatibility: [
      'Hospital information systems',
      'Electronic medical records (EMR) systems',
      'Medical monitoring equipment',
      'Healthcare software applications',
      'Point-of-care systems'
    ],
    accessories: [],
    datasheets: [
      { name: 'Medical Station Specifications', url: '/datasheets/urovo-t3-nursing-specs.pdf' },
      { name: 'Hygiene and Safety Certifications', url: '/datasheets/urovo-t3-medical-certifications.pdf' }
    ],
    manuals: [
      { name: 'Setup and Installation Guide', url: '/manuals/urovo-t3-nursing-setup.pdf' },
      { name: 'Maintenance and Cleaning Manual', url: '/manuals/urovo-t3-nursing-maintenance.pdf' }
    ],
    certifications: ['Medical Grade', 'Antibacterial Certified', 'Healthcare Standards Compliant'],
    useCases: ['healthcare-medical'],
    ctaType: 'quote',
    sku: 'UROVO-T3-NURSING-001',
    brand: 'UROVO',
    model: 'T3 Series Nursing Mobile Station',
    availability: 'in-stock',
    price: 'Contact for pricing',
    seoMetaTitle: 'UROVO T3 Medical Nursing Mobile Station | Healthcare Workstation',
    seoMetaDescription: 'Advanced medical-grade mobile nursing station with antibacterial protection, adjustable height, 110kg capacity, and modular design for healthcare professionals.',
    structuredDataEnabled: true
  }
  // Add more products as needed...
];