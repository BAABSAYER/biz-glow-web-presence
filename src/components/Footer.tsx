
import { Mail, Phone, MapPin, Linkedin, Twitter, Facebook } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-talah-primary text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div>
              <img 
                src="/lovable-uploads/ce904701-aa22-4496-93eb-6f03bd8fcf0d.png" 
                alt="Talah Tech Logo" 
                className="h-8 w-auto mb-4 filter brightness-0 invert"
              />
              <p className="text-gray-300 text-sm leading-relaxed">
                Empowering businesses with innovative IT solutions for a digital future.
              </p>
            </div>
            
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-talah-accent transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-talah-accent transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-talah-accent transition-colors">
                <Facebook size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="text-gray-300 hover:text-talah-accent transition-colors text-sm">
                  Home
                </a>
              </li>
              <li>
                <a href="#services" className="text-gray-300 hover:text-talah-accent transition-colors text-sm">
                  Services
                </a>
              </li>
              <li>
                <a href="#about" className="text-gray-300 hover:text-talah-accent transition-colors text-sm">
                  About Us
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-300 hover:text-talah-accent transition-colors text-sm">
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
              <div className="flex items-center space-x-3">
                <Mail size={16} className="text-talah-accent" />
                <span className="text-gray-300 text-sm">info@talahtech.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone size={16} className="text-talah-accent" />
                <span className="text-gray-300 text-sm">+966 XX XXX XXXX</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin size={16} className="text-talah-accent" />
                <span className="text-gray-300 text-sm">Riyadh, Saudi Arabia</span>
              </div>
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
