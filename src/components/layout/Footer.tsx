import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Instagram, Facebook, Twitter, MapPin, Phone, Mail, Clock } from 'lucide-react';
import Logo from '../ui/Logo';

const Footer: React.FC = () => {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-dark text-white pt-16 pb-8">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo and Info */}
          <div className="space-y-4">
            <Logo variant="light" size="small" />
            <p className="mt-4 text-gray-300">
              PixieCoffeePlace is a magical space where children play, learn, and have fun while parents enjoy quality time.
            </p>
            <div className="flex space-x-4 mt-6">
              <a 
                href="https://instagram.com/pixiecoffeeplace" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-secondary transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a 
                href="https://facebook.com/pixiecoffeeplace" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-secondary transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
              <a 
                href="https://twitter.com/pixiecoffeeplace" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-secondary transition-colors"
                aria-label="Twitter"
              >
                <Twitter size={20} />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-4 text-accent">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-white transition-colors">
                  {t('nav.home')}
                </Link>
              </li>
              <li>
                <Link to="/booking" className="text-gray-300 hover:text-white transition-colors">
                  {t('nav.booking')}
                </Link>
              </li>
              <li>
                <Link to="/classes" className="text-gray-300 hover:text-white transition-colors">
                  {t('nav.classes')}
                </Link>
              </li>
              <li>
                <Link to="/shop" className="text-gray-300 hover:text-white transition-colors">
                  {t('nav.shop')}
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 hover:text-white transition-colors">
                  {t('nav.about')}
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-white transition-colors">
                  {t('nav.contact')}
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-bold mb-4 text-accent">{t('contact.title')}</h4>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin size={18} className="text-primary mt-1 mr-2 flex-shrink-0" />
                <span>{t('contact.address')}</span>
              </li>
              <li className="flex items-center">
                <Phone size={18} className="text-primary mr-2 flex-shrink-0" />
                <span>{t('contact.phone')}</span>
              </li>
              <li className="flex items-center">
                <Mail size={18} className="text-primary mr-2 flex-shrink-0" />
                <span>{t('contact.email')}</span>
              </li>
              <li className="flex items-start">
                <Clock size={18} className="text-primary mt-1 mr-2 flex-shrink-0" />
                <span>{t('contact.hours')}</span>
              </li>
            </ul>
          </div>
          
          {/* Newsletter */}
          <div>
            <h4 className="text-lg font-bold mb-4 text-accent">Newsletter</h4>
            <p className="text-gray-300 mb-4">Subscribe to receive news and exclusive promotions</p>
            <form className="space-y-3">
              <div>
                <input 
                  type="email" 
                  placeholder="Your email" 
                  className="w-full px-4 py-2 rounded-lg bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary"
                  required
                />
              </div>
              <button 
                type="submit" 
                className="w-full btn-primary"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
        
        <hr className="border-gray-700 my-8" />
        
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © {currentYear} PixieCoffeePlace. All rights reserved.
          </p>
          <div className="flex space-x-4 mt-4 md:mt-0 text-sm text-gray-400">
            <Link to="/privacy" className="hover:text-gray-300 transition-colors">
              {t('footer.privacy')}
            </Link>
            <Link to="/terms" className="hover:text-gray-300 transition-colors">
              {t('footer.terms')}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;