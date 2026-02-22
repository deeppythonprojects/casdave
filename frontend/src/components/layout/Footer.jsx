import React from 'react';
import { Link } from 'react-router-dom';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaFacebook, FaLinkedin } from 'react-icons/fa';
import { contactData } from '../../data/contactData';
import { servicesData } from '../../data/servicesData';

const Footer = () => {
  return (
    <footer className="bg-white text-neutral-text-primary border-t border-neutral-border">
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Column 1: About */}
          <div className="lg:col-span-1">
            <h2 className="text-xl font-bold mb-4 text-neutral-text-primary">DAVE & ASSOCIATES</h2>
            <p className="text-sm text-neutral-text-secondary mb-4">
              Chartered Accountants
            </p>
            <p className="text-sm text-neutral-text-secondary mb-6 leading-relaxed">
              Leading chartered accountancy firm in Ahmedabad providing expert financial services with utmost accuracy and integrity.
            </p>
            <div className="flex space-x-4">
              <a 
                href={contactData.social.facebook} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-10 h-10 bg-neutral-surface rounded-full flex items-center justify-center hover:bg-primary hover:text-white transition-colors text-neutral-text-secondary"
                data-testid="footer-facebook"
              >
                <FaFacebook size={18} />
              </a>
              <a 
                href={contactData.social.linkedin} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-10 h-10 bg-neutral-surface rounded-full flex items-center justify-center hover:bg-primary hover:text-white transition-colors text-neutral-text-secondary"
                data-testid="footer-linkedin"
              >
                <FaLinkedin size={18} />
              </a>
            </div>
          </div>

          {/* Column 2: Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-neutral-text-primary">Contact Us</h3>
            <div className="space-y-3 text-sm text-neutral-text-secondary">
              <div className="flex items-start">
                <FaMapMarkerAlt className="mr-3 mt-1 flex-shrink-0 text-primary" />
                <div>
                  <p>{contactData.address.line1}</p>
                  <p>{contactData.address.line2}</p>
                  <p>{contactData.address.state}, {contactData.address.city}</p>
                  <p>{contactData.address.pincode}</p>
                </div>
              </div>
              <a href={`tel:${contactData.phone}`} className="flex items-center hover:text-primary transition-colors" data-testid="footer-phone">
                <FaPhone className="mr-3 text-primary" />
                {contactData.phone}
              </a>
              <a href={`mailto:${contactData.email}`} className="flex items-center hover:text-primary transition-colors" data-testid="footer-email">
                <FaEnvelope className="mr-3 text-primary" />
                {contactData.email}
              </a>
            </div>
          </div>

          {/* Column 3: Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-neutral-text-primary">Quick Links</h3>
            <nav className="space-y-2 text-sm">
              <Link to="/" className="block text-neutral-text-secondary hover:text-primary transition-colors" data-testid="footer-link-home">
                Home
              </Link>
              <Link to="/about" className="block text-neutral-text-secondary hover:text-primary transition-colors" data-testid="footer-link-about">
                About Us
              </Link>
              <Link to="/services" className="block text-neutral-text-secondary hover:text-primary transition-colors" data-testid="footer-link-services">
                Services
              </Link>
              <Link to="/resources" className="block text-neutral-text-secondary hover:text-primary transition-colors" data-testid="footer-link-resources">
                Resources
              </Link>
              <Link to="/contact" className="block text-neutral-text-secondary hover:text-primary transition-colors" data-testid="footer-link-contact">
                Contact Us
              </Link>
            </nav>
          </div>

          {/* Column 4: Services */}
          {/* <div>
            <h3 className="text-lg font-semibold mb-4 text-neutral-text-primary">Our Services</h3>
            <nav className="space-y-2 text-sm">
              {servicesData.slice(0, 6).map((service) => (
                <Link 
                  key={service.id}
                  to={`/services/${service.slug}`} 
                  className="block text-neutral-text-secondary hover:text-primary transition-colors"
                  data-testid={`footer-service-${service.slug}`}
                >
                  {service.title}
                </Link>
              ))}
            </nav>
          </div> */}

          {/* Column 5: Map */}
          <div className='lg:col-span-2'>
            <h3 className="text-lg font-semibold mb-4 text-neutral-text-primary">Find Us</h3>
            <div className="rounded-lg overflow-hidden border border-neutral-border shadow-sm">
              <iframe
                src={contactData.mapEmbedUrl}
                width="100%"
                height="160"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Dave & Associates Office Location"
                data-testid="footer-map"
              ></iframe>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright Bar */}
      <div className="bg-neutral-surface py-4 border-t border-neutral-border">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-neutral-text-secondary">
            <p>© 2026 Dave & Associates Chartered Accountants. All Rights Reserved.</p>
            <p className="mt-2 md:mt-0">
              Developed by <span className="text-neutral-text-primary font-medium">Deep M. Bhatt</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
