import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Menu, X } from 'lucide-react';
import Logo from '../ui/Logo';

const Header: React.FC = () => {
  const { t } = useTranslation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  
  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container-custom flex items-center justify-between">
        <NavLink to="/" className="z-50">
          <Logo size={isScrolled ? 'small' : 'default'} />
        </NavLink>
        
        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-8">
          <NavLink to="/" className={({ isActive }) => 
            isActive ? 'nav-link-active' : 'nav-link'
          }>
            {t('nav.home')}
          </NavLink>
          <NavLink to="/booking" className={({ isActive }) => 
            isActive ? 'nav-link-active' : 'nav-link'
          }>
            {t('nav.booking')}
          </NavLink>
          <NavLink to="/classes" className={({ isActive }) => 
            isActive ? 'nav-link-active' : 'nav-link'
          }>
            {t('nav.classes')}
          </NavLink>
          <NavLink to="/shop" className={({ isActive }) => 
            isActive ? 'nav-link-active' : 'nav-link'
          }>
            {t('nav.shop')}
          </NavLink>
          <NavLink to="/about" className={({ isActive }) => 
            isActive ? 'nav-link-active' : 'nav-link'
          }>
            {t('nav.about')}
          </NavLink>
          <NavLink to="/contact" className={({ isActive }) => 
            isActive ? 'nav-link-active' : 'nav-link'
          }>
            {t('nav.contact')}
          </NavLink>
          
          <NavLink to="/booking" className="btn-primary">
            {t('home.hero.cta')}
          </NavLink>
        </nav>
        
        {/* Mobile Menu Button */}
        <div className="flex items-center lg:hidden space-x-4">
          <button 
            onClick={toggleMenu}
            className="text-dark focus:outline-none"
            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
        
        {/* Mobile Navigation */}
        <div 
          className={`fixed inset-0 bg-white z-40 flex flex-col justify-center items-center transition-transform duration-300 ${
            isMenuOpen ? 'transform translate-x-0' : 'transform translate-x-full'
          }`}
        >
          <nav className="flex flex-col items-center space-y-6">
            <NavLink 
              to="/" 
              className={({ isActive }) => 
                isActive ? 'nav-link-active text-xl' : 'nav-link text-xl'
              }
              onClick={() => setIsMenuOpen(false)}
            >
              {t('nav.home')}
            </NavLink>
            <NavLink 
              to="/booking" 
              className={({ isActive }) => 
                isActive ? 'nav-link-active text-xl' : 'nav-link text-xl'
              }
              onClick={() => setIsMenuOpen(false)}
            >
              {t('nav.booking')}
            </NavLink>
            <NavLink 
              to="/classes" 
              className={({ isActive }) => 
                isActive ? 'nav-link-active text-xl' : 'nav-link text-xl'
              }
              onClick={() => setIsMenuOpen(false)}
            >
              {t('nav.classes')}
            </NavLink>
            <NavLink 
              to="/shop" 
              className={({ isActive }) => 
                isActive ? 'nav-link-active text-xl' : 'nav-link text-xl'
              }
              onClick={() => setIsMenuOpen(false)}
            >
              {t('nav.shop')}
            </NavLink>
            <NavLink 
              to="/about" 
              className={({ isActive }) => 
                isActive ? 'nav-link-active text-xl' : 'nav-link text-xl'
              }
              onClick={() => setIsMenuOpen(false)}
            >
              {t('nav.about')}
            </NavLink>
            <NavLink 
              to="/contact" 
              className={({ isActive }) => 
                isActive ? 'nav-link-active text-xl' : 'nav-link text-xl'
              }
              onClick={() => setIsMenuOpen(false)}
            >
              {t('nav.contact')}
            </NavLink>
            
            <NavLink 
              to="/booking" 
              className="btn-primary mt-6"
              onClick={() => setIsMenuOpen(false)}
            >
              {t('home.hero.cta')}
            </NavLink>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;