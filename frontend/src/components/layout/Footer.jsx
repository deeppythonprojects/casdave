import React from 'react';
import { Link } from 'react-router-dom';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaFacebook, FaLinkedin } from 'react-icons/fa';
import { contactData } from '../../data/contactData';
import { servicesData } from '../../data/servicesData';

const Footer = () => {
  return (
    <footer className="bg-primary text-white">
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Column 1: About */}
          <div>
            <h2 className="text-xl font-bold mb-4">DAVE & ASSOCIATES</h2>
            <p className="text-sm text-white/80 mb-4">
              Chartered Accountants
            </p>
            <p className="text-sm text-white/80 mb-6 leading-relaxed">
              Leading chartered accountancy firm in Ahmedabad providing expert financial services with utmost accuracy and integrity.
            </p>
            <div className="flex space-x-4">
              <a 
                href={contactData.social.facebook} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-secondary transition-colors"
                data-testid="footer-facebook"
              >
                <FaFacebook size={18} />
              </a>
              <a 
                href={contactData.social.linkedin} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-secondary transition-colors"
                data-testid="footer-linkedin"
              >
                <FaLinkedin size={18} />
              </a>
            </div>
          </div>

          {/* Column 2: Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <div className="space-y-3 text-sm text-white/80">
              <div className="flex items-start">
                <FaMapMarkerAlt className="mr-3 mt-1 flex-shrink-0" />
                <div>
                  <p>{contactData.address.line1}</p>
                  <p>{contactData.address.line2}</p>
                  <p>{contactData.address.city} - {contactData.address.pincode}</p>
                  <p>{contactData.address.state}, {contactData.address.country}</p>
                </div>
              </div>
              <a href={`tel:${contactData.phone}`} className="flex items-center hover:text-secondary transition-colors" data-testid="footer-phone">
                <FaPhone className="mr-3" />
                {contactData.phone}
              </a>
              <a href={`mailto:${contactData.email}`} className="flex items-center hover:text-secondary transition-colors" data-testid="footer-email">
                <FaEnvelope className="mr-3" />
                {contactData.email}
              </a>
            </div>
          </div>

          {/* Column 3: Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <nav className="space-y-2 text-sm">
              <Link to="/" className="block text-white/80 hover:text-secondary transition-colors" data-testid="footer-link-home">
                Home
              </Link>
              <Link to="/about" className="block text-white/80 hover:text-secondary transition-colors" data-testid="footer-link-about">
                About Us
              </Link>
              <Link to="/services" className="block text-white/80 hover:text-secondary transition-colors" data-testid="footer-link-services">
                Services
              </Link>
              <Link to="/resources" className="block text-white/80 hover:text-secondary transition-colors" data-testid="footer-link-resources">
                Resources
              </Link>
              <Link to="/contact" className="block text-white/80 hover:text-secondary transition-colors" data-testid="footer-link-contact">
                Contact Us
              </Link>
            </nav>
          </div>

          {/* Column 4: Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Our Services</h3>
            <nav className="space-y-2 text-sm">
              {servicesData.slice(0, 6).map((service) => (
                <Link 
                  key={service.id}
                  to={`/services/${service.slug}`} 
                  className="block text-white/80 hover:text-secondary transition-colors"
                  data-testid={`footer-service-${service.slug}`}
                >
                  {service.title}
                </Link>
              ))}
            </nav>
          </div>
        </div>
      </div>

      {/* Copyright Bar */}
      <div className="bg-neutral-text-primary py-4">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-white/60">
            <p>© 2026 Dave & Associates Chartered Accountants. All Rights Reserved.</p>
            <p className="mt-2 md:mt-0">
              Developed by <span className="text-white/80 font-medium">Deep M. Bhatt</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
