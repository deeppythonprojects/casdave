import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaBars, FaTimes, FaPhone, FaEnvelope, FaFacebook, FaLinkedin, FaChevronDown } from 'react-icons/fa';
import { contactData } from '../../data/contactData';
import { servicesData } from '../../data/servicesData';

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesMenuOpen, setServicesMenuOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
    if (mobileMenuOpen) {
      document.body.style.overflow = 'auto';
    } else {
      document.body.style.overflow = 'hidden';
    }
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
    document.body.style.overflow = 'auto';
  };

  return (
    <>
      {/* Top Bar */}
      <div className="bg-neutral-text-primary text-white py-2 hidden md:block">
        <div className="container-custom">
          <div className="flex justify-between items-center text-sm">
            <div className="flex items-center space-x-6">
              <a href={`tel:${contactData.phone}`} className="flex items-center hover:text-secondary transition-colors" data-testid="header-phone">
                <FaPhone className="mr-2" size={12} />
                {contactData.phone}
              </a>
              <a href={`mailto:${contactData.email}`} className="flex items-center hover:text-secondary transition-colors" data-testid="header-email">
                <FaEnvelope className="mr-2" size={12} />
                {contactData.email}
              </a>
            </div>
            <div className="flex items-center space-x-4">
              <a href={contactData.social.facebook} target="_blank" rel="noopener noreferrer" className="hover:text-secondary transition-colors" data-testid="header-facebook">
                <FaFacebook size={16} />
              </a>
              <a href={contactData.social.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-secondary transition-colors" data-testid="header-linkedin">
                <FaLinkedin size={16} />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <header className="bg-primary text-white sticky top-0 z-50 shadow-lg">
        <nav className="container-custom">
          <div className="flex justify-between items-center py-4">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-3" onClick={closeMobileMenu} data-testid="header-logo">
              <div>
                <h1 className="text-xl md:text-2xl font-bold tracking-tight">DAVE & ASSOCIATES</h1>
                <p className="text-xs text-white/80">Chartered Accountants</p>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-1">
              <Link
                to="/"
                className={`nav-link px-4 py-2 rounded-md text-sm font-medium tracking-wide uppercase ${
                  isActive('/') ? 'font-bold underline underline-offset-4' : ''
                } transition-all`}
                data-testid="nav-link-home"
              >
                Home
              </Link>
              <Link
                to="/about"
                className={`nav-link px-4 py-2 rounded-md text-sm font-medium tracking-wide uppercase ${
                  isActive('/about') ? 'font-bold underline underline-offset-4' : ''
                } transition-all`}
                data-testid="nav-link-about"
              >
                About Us
              </Link>
              
              {/* Services Dropdown */}
              <div 
                className="relative group"
                onMouseEnter={() => setServicesMenuOpen(true)}
                onMouseLeave={() => setServicesMenuOpen(false)}
              >
                <Link
                  to="/services"
                  className={`nav-link px-4 py-2 rounded-md text-sm font-medium tracking-wide uppercase inline-flex items-center ${
                    isActive('/services') || location.pathname.startsWith('/services/') ? 'bg-white/10' : 'hover:bg-white/10'
                  } transition-colors`}
                  data-testid="nav-link-services"
                >
                  Services
                  <FaChevronDown className="ml-2" size={12} />
                </Link>
                
                {/* Mega Menu */}
                {servicesMenuOpen && (
                  <div className="absolute left-1/2 transform -translate-x-1/2 top-full mt-0 w-auto min-w-[400px] bg-white shadow-dropdown border-t-2 border-primary rounded-b-lg z-50">
                    <div className="py-4 px-4">
                      <div className="flex flex-col gap-1">
                        {servicesData.map((service) => (
                          <Link
                            key={service.id}
                            to={`/services/${service.slug}`}
                            className="px-4 py-3 rounded-md hover:bg-primary hover:text-white transition-all text-neutral-text-primary font-medium text-left"
                            onClick={() => setServicesMenuOpen(false)}
                            data-testid={`mega-menu-${service.slug}`}
                          >
                            {service.title}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>

              <Link
                to="/resources"
                className={`nav-link px-4 py-2 rounded-md text-sm font-medium tracking-wide uppercase ${
                  isActive('/resources') || location.pathname.startsWith('/resources/') ? 'bg-white/10' : 'hover:bg-white/10'
                } transition-colors`}
                data-testid="nav-link-resources"
              >
                Resources
              </Link>
              <Link
                to="/contact"
                className="bg-secondary hover:bg-secondary-hover px-6 py-2.5 rounded-md text-sm font-semibold tracking-wide uppercase transition-colors ml-2"
                data-testid="nav-link-contact"
              >
                Contact Us
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMobileMenu}
              className="lg:hidden text-white focus:outline-none"
              data-testid="mobile-menu-button"
            >
              {mobileMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile Overlay */}
      <div
        className={`mobile-overlay ${mobileMenuOpen ? 'show' : ''}`}
        onClick={closeMobileMenu}
      />

      {/* Mobile Menu */}
      <div className={`mobile-menu ${mobileMenuOpen ? 'open' : ''}`}>
        <div className="p-6">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-xl font-bold text-primary">Menu</h2>
            <button onClick={closeMobileMenu} data-testid="mobile-menu-close">
              <FaTimes className="text-neutral-text-primary" size={24} />
            </button>
          </div>

          <nav className="space-y-2">
            <Link
              to="/"
              className="block px-4 py-3 text-neutral-text-primary hover:bg-neutral-surface rounded-md transition-colors"
              onClick={closeMobileMenu}
              data-testid="mobile-nav-home"
            >
              Home
            </Link>
            <Link
              to="/about"
              className="block px-4 py-3 text-neutral-text-primary hover:bg-neutral-surface rounded-md transition-colors"
              onClick={closeMobileMenu}
              data-testid="mobile-nav-about"
            >
              About Us
            </Link>
            
            {/* Mobile Services Accordion */}
            <div>
              <button
                onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                className="w-full flex justify-between items-center px-4 py-3 text-neutral-text-primary hover:bg-neutral-surface rounded-md transition-colors"
                data-testid="mobile-nav-services"
              >
                <span>Services</span>
                <FaChevronDown className={`transition-transform ${mobileServicesOpen ? 'rotate-180' : ''}`} />
              </button>
              {mobileServicesOpen && (
                <div className="ml-4 mt-2 space-y-2">
                  {servicesData.map((service) => (
                    <Link
                      key={service.id}
                      to={`/services/${service.slug}`}
                      className="block px-4 py-2 text-sm text-neutral-text-secondary hover:bg-neutral-surface rounded-md transition-colors"
                      onClick={closeMobileMenu}
                      data-testid={`mobile-nav-${service.slug}`}
                    >
                      {service.title}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link
              to="/resources"
              className="block px-4 py-3 text-neutral-text-primary hover:bg-neutral-surface rounded-md transition-colors"
              onClick={closeMobileMenu}
              data-testid="mobile-nav-resources"
            >
              Resources
            </Link>
            <Link
              to="/contact"
              className="block px-4 py-3 bg-primary text-white hover:bg-primary-hover rounded-md transition-colors text-center font-semibold mt-4"
              onClick={closeMobileMenu}
              data-testid="mobile-nav-contact"
            >
              Contact Us
            </Link>
          </nav>

          {/* Mobile Contact Info */}
          <div className="mt-8 pt-8 border-t border-neutral-border">
            <div className="space-y-3 text-sm">
              <a href={`tel:${contactData.phone}`} className="flex items-center text-neutral-text-secondary hover:text-primary">
                <FaPhone className="mr-3" />
                {contactData.phone}
              </a>
              <a href={`mailto:${contactData.email}`} className="flex items-center text-neutral-text-secondary hover:text-primary">
                <FaEnvelope className="mr-3" />
                {contactData.email}
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
