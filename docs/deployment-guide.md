# Deployment Guide

## Overview
This guide covers the complete deployment process for the Talah Tech website, from development to production deployment.

## Pre-Deployment Checklist

### Content Review
- [ ] All text content is finalized in both languages
- [ ] Contact information is accurate (+966 54 007 9024)
- [ ] Email address is configured (info@talahtech.com)
- [ ] WhatsApp integration is tested
- [ ] All images are optimized and properly sized

### Technical Review
- [ ] All components render correctly
- [ ] Responsive design works on all devices
- [ ] Form validation is functioning
- [ ] Navigation links work properly
- [ ] Language switching operates correctly
- [ ] Toast notifications display properly

### Performance Optimization
- [ ] Images are compressed and optimized
- [ ] Bundle size is minimized
- [ ] Loading times are acceptable
- [ ] No console errors in production build

## Build Process

### Development Build
```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Access at http://localhost:5173
```

### Production Build
```bash
# Create production build
npm run build

# Preview production build locally
npm run preview

# Build output will be in /dist directory
```

### Build Verification
- Check `/dist` folder is created
- Verify all assets are included
- Test production build locally
- Confirm no build errors

## Deployment Options

### Option 1: Lovable Hosting (Recommended)
1. **Automatic Deployment**
   - Changes deploy automatically via Lovable platform
   - Built-in hosting and CDN
   - SSL certificates included
   - Custom domain support available

2. **Custom Domain Setup**
   - Access Project > Settings > Domains
   - Add your custom domain
   - Configure DNS settings as instructed
   - SSL certificate will be provisioned automatically

### Option 2: Manual Hosting Platforms

#### Netlify Deployment
1. **Setup**
   ```bash
   # Build the project
   npm run build
   ```

2. **Deploy**
   - Upload `/dist` folder to Netlify
   - Configure build settings:
     - Build command: `npm run build`
     - Publish directory: `dist`

3. **Environment Configuration**
   - No environment variables required
   - Static site deployment

#### Vercel Deployment
1. **Setup**
   ```bash
   # Install Vercel CLI
   npm i -g vercel
   
   # Deploy
   vercel --prod
   ```

2. **Configuration**
   - Build command: `npm run build`
   - Output directory: `dist`
   - Framework preset: Vite

#### Traditional Web Hosting
1. **Build Production Files**
   ```bash
   npm run build
   ```

2. **Upload Files**
   - Upload entire `/dist` folder contents
   - Ensure proper file permissions
   - Configure web server for SPA routing

## Domain Configuration

### DNS Settings
For custom domain (e.g., talahtech.com):
```
Type: A Record
Name: @
Value: [Your hosting provider's IP]

Type: CNAME
Name: www
Value: talahtech.com
```

### SSL Certificate
- Ensure SSL/TLS certificate is configured
- Force HTTPS redirects
- Verify certificate covers both www and non-www versions

## Post-Deployment Configuration

### Analytics Setup (Optional)
Add Google Analytics or similar:
1. Create tracking code
2. Add to `index.html` in public folder
3. Rebuild and redeploy

### SEO Configuration
1. **Sitemap Generation**
   - Add sitemap.xml to public folder
   - Submit to Google Search Console

2. **Meta Tags Verification**
   - Verify Open Graph tags
   - Check Twitter Card metadata
   - Confirm structured data markup

### Performance Monitoring
- Set up performance monitoring
- Configure error tracking
- Monitor loading times
- Track user interactions

## Backend Integration (Future)

### Email Service Setup
For contact form functionality:
1. **Choose Email Service**
   - SendGrid (recommended)
   - AWS SES
   - Mailgun
   - Custom SMTP

2. **API Endpoint Creation**
   - Create backend API endpoint
   - Configure email templates
   - Add form validation
   - Implement spam protection

3. **Form Integration**
   - Update form submission handler
   - Add proper error handling
   - Configure success/failure messages

### Database Integration (Optional)
For form submissions storage:
1. **Database Selection**
   - MongoDB
   - PostgreSQL
   - Firebase Firestore

2. **API Development**
   - Create CRUD endpoints
   - Add authentication if needed
   - Configure data validation

## Security Considerations

### Basic Security Headers
Configure web server with security headers:
```
Content-Security-Policy: default-src 'self' 'unsafe-inline' 'unsafe-eval' https:
X-Frame-Options: DENY
X-Content-Type-Options: nosniff
Referrer-Policy: strict-origin-when-cross-origin
```

### HTTPS Configuration
- Force HTTPS redirects
- Update any hardcoded HTTP links
- Verify all external resources use HTTPS

## Monitoring and Maintenance

### Regular Monitoring
- **Performance**: Page load times, Core Web Vitals
- **Functionality**: Form submissions, navigation
- **Content**: Accuracy of contact information
- **Security**: SSL certificate expiration

### Backup Strategy
- Regular backups of deployment files
- Version control with Git
- Database backups (if applicable)

### Update Process
1. **Development Testing**
   - Test changes locally
   - Verify responsive design
   - Check both language versions

2. **Staging Deployment**
   - Deploy to staging environment
   - Comprehensive testing
   - Stakeholder approval

3. **Production Deployment**
   - Deploy during low-traffic hours
   - Monitor for any issues
   - Verify all functionality works

## Troubleshooting

### Common Issues

#### Build Failures
- Check Node.js version compatibility
- Verify all dependencies are installed
- Review build logs for specific errors

#### Routing Issues
- Configure server for SPA routing
- Add proper redirects for 404 handling
- Verify base URL configuration

#### Performance Issues
- Optimize images and assets
- Enable gzip compression
- Configure CDN if needed

### Support Contacts
- **Technical Issues**: Development team
- **Hosting Issues**: Hosting provider support
- **Domain Issues**: Domain registrar support

## Go-Live Checklist

### Final Verification
- [ ] All functionality tested
- [ ] Contact information verified
- [ ] WhatsApp integration working
- [ ] Both languages display correctly
- [ ] Mobile responsiveness confirmed
- [ ] Performance metrics acceptable
- [ ] SEO elements in place
- [ ] Analytics configured
- [ ] SSL certificate active
- [ ] Custom domain configured
- [ ] Backup strategy implemented

### Post-Launch
- [ ] Submit sitemap to search engines
- [ ] Monitor initial traffic and performance
- [ ] Address any immediate issues
- [ ] Schedule first maintenance review
- [ ] Document any configuration changes