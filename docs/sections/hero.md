# Hero Section Documentation

## Overview
The Hero section is the main landing area that introduces Talah Tech and its core value proposition. It features a compelling headline, description, call-to-action buttons, and feature highlights.

## Features
- Responsive layout with grid system
- Animated call-to-action buttons
- Feature highlight cards with icons
- Bilingual content support
- Modern gradient background

## Technical Implementation

### Component Location
`src/components/Hero.tsx`

### Dependencies
- `lucide-react` - Icons (ArrowRight, Monitor, Wifi, Smartphone)
- `@/contexts/LanguageContext` - Internationalization
- `@/components/ui/button` - UI components

### Key Functions

#### Scroll to Contact
```typescript
const scrollToContact = () => {
  const contactSection = document.getElementById('contact');
  if (contactSection) {
    contactSection.scrollIntoView({ behavior: 'smooth' });
  }
};
```

#### Feature Cards
```typescript
const features = [
  {
    icon: Monitor,
    titleKey: 'hero.feature1.title',
    descKey: 'hero.feature1.desc'
  },
  // ... additional features
];
```

## Content Structure

### Main Content
- **Headline**: Company tagline and mission
- **Description**: Brief overview of services
- **Primary CTA**: "Get Started" button
- **Secondary CTA**: "Contact Us" button

### Feature Highlights
Three key features showcased:
1. **Advanced POS Systems** (Monitor icon)
2. **IoT Connectivity** (Wifi icon)
3. **Mobile Solutions** (Smartphone icon)

## Content Management

### Headlines and Text
All text content is managed through the `LanguageContext`:
- `hero.title` - Main headline
- `hero.subtitle` - Subheading
- `hero.description` - Main description
- `hero.getStarted` - Primary CTA text
- `hero.contact` - Secondary CTA text

### Feature Content
Each feature has:
- Icon component from Lucide React
- Title key for translation
- Description key for translation

## Styling

### Layout
- Two-column grid on desktop
- Single column on mobile
- Responsive spacing and typography

### Visual Elements
- Gradient background
- Card shadows and hover effects
- Icon styling with brand colors
- Button styling with hover states

### Color Scheme
- Primary text: `text-talah-primary`
- Accent elements: `text-talah-accent`
- Muted text: `text-gray-600`
- Background: Custom gradient

## Responsive Design

### Breakpoints
- Mobile: `< 768px` - Single column layout
- Tablet: `768px - 1024px` - Adjusted spacing
- Desktop: `> 1024px` - Full two-column layout

### Typography Scale
- Headline: `text-4xl md:text-5xl lg:text-6xl`
- Subheading: `text-xl md:text-2xl`
- Body text: `text-lg`

## Animations and Interactions

### Button Hover Effects
- Scale transform on hover
- Color transitions
- Icon animations (ArrowRight)

### Card Interactions
- Subtle hover effects
- Icon color changes
- Shadow elevation

## Customization

### Updating Content
1. Modify translation keys in `LanguageContext.tsx`
2. Ensure both English and Arabic translations
3. Test text length in both languages

### Adding Features
1. Add new feature object to `features` array
2. Include appropriate Lucide React icon
3. Add translation keys for title and description

### Styling Changes
1. Modify Tailwind classes in component
2. Update design system variables if needed
3. Test across all breakpoints

## SEO Considerations
- Semantic HTML structure
- Proper heading hierarchy
- Alt text for icons (handled by Lucide React)
- Descriptive button text

## Performance
- Optimized images and icons
- Minimal JavaScript for interactions
- Efficient re-renders with React