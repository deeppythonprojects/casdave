import React, { useState } from 'react';
import SEO from '../components/common/SEO';
import Button from '../components/common/Button';
import { contactData } from '../data/contactData';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock } from 'react-icons/fa';
import { toast } from 'sonner';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    service: '',
    message: ''
  });
  const [submitting, setSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);

    try {
      const response = await fetch('https://formsubmit.co/ajax/office@casdave.co.in', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          subject: formData.subject,
          service: formData.service,
          message: formData.message,
          _subject: `New Contact Form Submission from ${formData.name}`,
          _template: 'table'
        })
      });

      if (response.ok) {
        toast.success('Message sent successfully! We will get back to you soon.');
        setFormData({
          name: '',
          email: '',
          phone: '',
          subject: '',
          service: '',
          message: ''
        });
      } else {
        toast.error('Failed to send message. Please try again or contact us directly.');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      toast.error('An error occurred. Please try again or contact us directly.');
    } finally {
      setSubmitting(false);
    }
  };

  const schemaMarkup = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "mainEntity": {
      "@type": "Organization",
      "name": "Dave & Associates Chartered Accountants",
      "telephone": contactData.phone,
      "email": contactData.email,
      "address": {
        "@type": "PostalAddress",
        "streetAddress": contactData.address.line1 + ", " + contactData.address.line2,
        "addressLocality": contactData.address.city,
        "addressRegion": contactData.address.state,
        "postalCode": contactData.address.pincode,
        "addressCountry": "IN"
      }
    }
  };

  return (
    <>
      <SEO 
        title="Contact Us | Dave & Associates Chartered Accountants"
        description="Get in touch with Dave & Associates CA for expert financial services. Visit our office in Ahmedabad or contact us by phone or email."
        keywords="contact chartered accountant, CA firm ahmedabad contact, chartered accountant consultation"
        schemaMarkup={schemaMarkup}
      />

      {/* Page Hero with Background Image */}
      <section className="relative py-20 overflow-hidden" style={{
        backgroundImage: 'linear-gradient(to right, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url("https://images.unsplash.com/photo-1423666639041-f56000c27a9a?w=1600&q=80")',
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}>
        <div className="container-custom text-center relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white drop-shadow-lg">Contact Us</h1>
          <p className="text-xl text-white/95 max-w-3xl mx-auto drop-shadow-md">
            Let's discuss how we can help your business succeed
          </p>
        </div>
      </section>

      {/* Contact Form & Info Section */}
      <section className="section-spacing bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold text-neutral-text-primary mb-6">
                Send Us a Message
              </h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-neutral-text-primary mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-neutral-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                    placeholder="Your full name"
                    data-testid="contact-form-name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-neutral-text-primary mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-neutral-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                    placeholder="your.email@example.com"
                    data-testid="contact-form-email"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-neutral-text-primary mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    pattern="[0-9+\-\s()]+"
                    className="w-full px-4 py-3 border border-neutral-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                    placeholder="+91 XXXXXXXXXX"
                    data-testid="contact-form-phone"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-neutral-text-primary mb-2">
                    Subject *
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-neutral-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                    placeholder="Brief subject of your inquiry"
                    data-testid="contact-form-subject"
                  />
                </div>

                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-neutral-text-primary mb-2">
                    Service Interest *
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-neutral-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent bg-white"
                    data-testid="contact-form-service"
                  >
                    <option value="">Select a service</option>
                    {contactData.serviceInterests.map((service) => (
                      <option key={service} value={service}>{service}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-neutral-text-primary mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="6"
                    minLength="20"
                    className="w-full px-4 py-3 border border-neutral-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent resize-none"
                    placeholder="Please provide details about your inquiry (minimum 20 characters)"
                    data-testid="contact-form-message"
                  ></textarea>
                </div>

                <Button 
                  type="submit" 
                  variant="primary" 
                  size="lg" 
                  disabled={submitting}
                  dataTestId="contact-form-submit"
                  className="w-full"
                >
                  {submitting ? 'Sending...' : 'Send Message'}
                </Button>
              </form>
            </div>

            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-bold text-neutral-text-primary mb-6">
                Get In Touch
              </h2>
              
              <div className="space-y-6 mb-8">
                <div className="flex items-start bg-neutral-surface p-6 rounded-lg border border-neutral-border">
                  <FaPhone className="text-primary mr-4 mt-1 flex-shrink-0" size={20} />
                  <div>
                    <h3 className="font-semibold text-neutral-text-primary mb-2">Phone</h3>
                    <a 
                      href={`tel:${contactData.phone}`} 
                      className="text-neutral-text-secondary hover:text-primary transition-colors"
                      data-testid="contact-info-phone"
                    >
                      {contactData.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-start bg-neutral-surface p-6 rounded-lg border border-neutral-border">
                  <FaEnvelope className="text-primary mr-4 mt-1 flex-shrink-0" size={20} />
                  <div>
                    <h3 className="font-semibold text-neutral-text-primary mb-2">Email</h3>
                    <a 
                      href={`mailto:${contactData.email}`} 
                      className="text-neutral-text-secondary hover:text-primary transition-colors break-all"
                      data-testid="contact-info-email"
                    >
                      {contactData.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start bg-neutral-surface p-6 rounded-lg border border-neutral-border">
                  <FaMapMarkerAlt className="text-primary mr-4 mt-1 flex-shrink-0" size={20} />
                  <div>
                    <h3 className="font-semibold text-neutral-text-primary mb-2">Office Address</h3>
                    <p className="text-neutral-text-secondary leading-relaxed">
                      {contactData.address.line1}<br />
                      {contactData.address.line2}<br />
                      {contactData.address.city} - {contactData.address.pincode}<br />
                      {contactData.address.state}, {contactData.address.country}
                    </p>
                  </div>
                </div>

                <div className="flex items-start bg-neutral-surface p-6 rounded-lg border border-neutral-border">
                  <FaClock className="text-primary mr-4 mt-1 flex-shrink-0" size={20} />
                  <div>
                    <h3 className="font-semibold text-neutral-text-primary mb-2">Office Hours</h3>
                    <p className="text-neutral-text-secondary">
                      {contactData.officeHours}
                    </p>
                  </div>
                </div>
              </div>

              {/* Website */}
              <div className="bg-accent p-6 rounded-lg border border-primary/20">
                <h3 className="font-semibold text-primary mb-2">Website</h3>
                <p className="text-neutral-text-secondary">{contactData.website}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="section-spacing bg-neutral-surface">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-neutral-text-primary mb-8 text-center">
            Find Us on Map
          </h2>
          <div className="aspect-video rounded-lg overflow-hidden shadow-hover border border-neutral-border">
            <iframe
              src={contactData.mapEmbedUrl}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Office Location"
            ></iframe>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
