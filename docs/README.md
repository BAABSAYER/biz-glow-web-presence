# Talah Tech Website Documentation

## Table of Contents
1. [Project Overview](#project-overview)
2. [Technical Architecture](#technical-architecture)
3. [Section Documentation](#section-documentation)
4. [Deployment Guide](#deployment-guide)
5. [Maintenance Guide](#maintenance-guide)
6. [User Guide](#user-guide)

## Project Overview

Talah Tech is a modern, responsive website for an IT services company specializing in POS systems, IoT solutions, and enterprise mobility. The website features bilingual support (English/Arabic) with RTL layout support.

### Key Features
- Responsive design for all devices
- Bilingual support (English/Arabic)
- Modern UI with Tailwind CSS
- Contact form integration
- WhatsApp integration
- Product showcase
- Service descriptions

### Technology Stack
- **Frontend**: React 18 with TypeScript
- **Styling**: Tailwind CSS with custom design system
- **UI Components**: Shadcn/ui
- **Icons**: Lucide React
- **Build Tool**: Vite
- **Routing**: React Router DOM

## Technical Architecture

### Project Structure
```
src/
├── components/          # React components
│   ├── ui/             # Reusable UI components
│   ├── Header.tsx      # Navigation header
│   ├── Hero.tsx        # Hero section
│   ├── Services.tsx    # Services showcase
│   ├── Products.tsx    # Products catalog
│   ├── About.tsx       # About company
│   ├── Contact.tsx     # Contact form
│   └── Footer.tsx      # Footer with links
├── contexts/           # React contexts
│   └── LanguageContext.tsx # i18n support
├── hooks/              # Custom hooks
├── lib/                # Utilities
├── pages/              # Page components
└── styles/             # Global styles
```

### Design System
The project uses a custom design system defined in:
- `src/index.css` - CSS custom properties
- `tailwind.config.ts` - Tailwind configuration

### Component Architecture
- **Header**: Navigation with language switcher
- **Hero**: Main landing section with CTAs
- **Services**: Service cards with icons
- **Products**: Product categories with descriptions
- **About**: Company information
- **Contact**: Contact form with WhatsApp integration
- **Footer**: Links and contact information

## Section Documentation

For detailed documentation of each section, see:
- [Header Documentation](./sections/header.md)
- [Hero Documentation](./sections/hero.md)
- [Services Documentation](./sections/services.md)
- [Products Documentation](./sections/products.md)
- [About Documentation](./sections/about.md)
- [Contact Documentation](./sections/contact.md)
- [Footer Documentation](./sections/footer.md)

## Quick Start

1. **Installation**
   ```bash
   npm install
   ```

2. **Development**
   ```bash
   npm run dev
   ```

3. **Build for Production**
   ```bash
   npm run build
   ```

4. **Preview Production Build**
   ```bash
   npm run preview
   ```

## Contact Information
- **Phone**: +966 54 007 9024
- **Email**: info@talahtech.com
- **Location**: Riyadh, Saudi Arabia