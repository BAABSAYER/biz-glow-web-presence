
const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative min-h-[400px] bg-primary">
      {/* Additional dark overlay to match the navy color */}
      <div className="absolute inset-0 bg-primary/90" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 relative z-10">
        {/* Logo positioned in top left */}
        <div className="mb-8">
          <img 
            src="/talah-tech-logo.png" 
            alt="Talah Tech Logo" 
            className="h-16 w-auto filter brightness-0 invert"
          />
        </div>

        {/* Footer content */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 text-white">
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="text-gray-300 hover:text-accent transition-colors text-sm">
                  Home
                </a>
              </li>
              <li>
                <a href="#services" className="text-gray-300 hover:text-accent transition-colors text-sm">
                  Services
                </a>
              </li>
              <li>
                <a href="#about" className="text-gray-300 hover:text-accent transition-colors text-sm">
                  About Us
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-300 hover:text-accent transition-colors text-sm">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li className="text-gray-300 text-sm">POS Systems</li>
              <li className="text-gray-300 text-sm">IoT Solutions</li>
              <li className="text-gray-300 text-sm">Enterprise Mobility</li>
              <li className="text-gray-300 text-sm">24/7 Support</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <div className="space-y-3">
              <div className="text-gray-300 text-sm">info@talahtech.com</div>
              <div className="text-gray-300 text-sm">+966 54 007 9024</div>
              <div className="text-gray-300 text-sm">Riyadh, Saudi Arabia</div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-300 text-sm">
            © {currentYear} Talah Tech. All rights reserved. Growing Future Through Technology.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
