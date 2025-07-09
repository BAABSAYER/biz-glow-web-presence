# Header Component Documentation

## Overview
The Header component provides the main navigation for the Talah Tech website, including desktop and mobile navigation menus, language switching, and branding.

## Features
- Responsive navigation (desktop/mobile)
- Language switcher (English/Arabic)
- Smooth scroll navigation
- Mobile hamburger menu
- Sticky header with background blur

## Technical Implementation

### Component Location
`src/components/Header.tsx`

### Dependencies
- `lucide-react` - Icons (Menu, X, Globe)
- `@/contexts/LanguageContext` - Internationalization
- `@/components/ui/button` - UI components

### Key Functions

#### Navigation Items
```typescript
const navItems = [
  { href: '#home', key: 'nav.home' },
  { href: '#services', key: 'nav.services' },
  { href: '#products', key: 'nav.products' },
  { href: '#about', key: 'nav.about' },
  { href: '#contact', key: 'nav.contact' }
];
```

#### Language Toggle
```typescript
const toggleLanguage = () => {
  setLanguage(language === 'en' ? 'ar' : 'en');
};
```

## Content Management

### Logo
- **File**: `/lovable-uploads/ce904701-aa22-4496-93eb-6f03bd8fcf0d.png`
- **Size**: Height 12 (h-12)
- **Alt Text**: "Talah Tech Logo"

### Navigation Links
All navigation uses smooth scrolling to corresponding page sections:
- Home (`#home`)
- Services (`#services`)
- Products (`#products`)
- About (`#about`)
- Contact (`#contact`)

### Language Support
- English (default)
- Arabic with RTL support
- Globe icon for language switcher

## Styling

### Desktop Navigation
- Fixed position with backdrop blur
- Primary brand colors
- Hover effects with accent colors

### Mobile Navigation
- Collapsible hamburger menu
- Full-screen overlay
- Smooth animations

### RTL Support
- Automatic text direction for Arabic
- Proper spacing and alignment

## Customization

### Brand Colors
Defined in design system:
- `text-talah-primary` - Main brand color
- `text-talah-accent` - Accent color for hover states
- `bg-talah-primary` - Background for mobile menu

### Responsive Breakpoints
- Mobile: `< 768px`
- Desktop: `>= 768px`

## Maintenance

### Adding New Navigation Items
1. Add to `navItems` array
2. Add translation keys to `LanguageContext`
3. Ensure corresponding section exists

### Updating Logo
1. Replace image in `/public/lovable-uploads/`
2. Update `src` attribute in component
3. Maintain aspect ratio and sizing

### Language Updates
1. Modify translations in `LanguageContext.tsx`
2. Add new language codes if needed
3. Test RTL layout for new languages