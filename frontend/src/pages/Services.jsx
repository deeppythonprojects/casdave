import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/common/SEO';
import ServiceCard from '../components/services/ServiceCard';
import Button from '../components/common/Button';
import { servicesData } from '../data/servicesData';

const Services = () => {
  const schemaMarkup = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "itemListElement": servicesData.map((service, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "item": {
        "@type": "Service",
        "name": service.title,
        "description": service.shortDescription,
        "url": `${window.location.origin}/services/${service.slug}`
      }
    }))
  };

  return (
    <>
      <SEO 
        title="Our Services | Dave & Associates Chartered Accountants"
        description="Comprehensive CA services including direct tax, GST, audit, virtual CFO, project financing, ROC compliance and business advisory in Ahmedabad."
        keywords="CA services ahmedabad, accounting services, tax services, audit services, GST services, virtual CFO services"
        schemaMarkup={schemaMarkup}
      />

      {/* Page Hero with Background Image */}
      <section className="relative py-20 overflow-hidden" style={{
        backgroundImage: 'linear-gradient(to right, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url("https://images.unsplash.com/photo-1554224154-26032ffc0d07?w=1600&q=80")',
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}>
        <div className="container-custom text-center relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white drop-shadow-lg">Our Services</h1>
          <p className="text-xl text-white/95 max-w-3xl mx-auto drop-shadow-md">
            Comprehensive professional services to meet your diverse business needs
          </p>
        </div>
      </section>

      {/* Services Alternating Layout */}
      <section className="section-spacing bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <p className="text-lg text-neutral-text-secondary max-w-4xl mx-auto leading-relaxed">
              From taxation and compliance to strategic financial advisory, we offer a complete suite of professional services designed to help your business thrive. Our expert team brings decades of combined experience across diverse areas of taxation, compliance, and business advisory.
            </p>
          </div>

          <div className="space-y-16">
            {servicesData.map((service, index) => (
              <div key={service.id} className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-8 items-center`}>
                <div className="w-full md:w-1/2">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-[400px] object-cover rounded-lg shadow-hover"
                  />
                </div>
                <div className="w-full md:w-1/2">
                  <h2 className="text-3xl font-bold text-neutral-text-primary mb-4">
                    {service.title}
                  </h2>
                  <p className="text-lg text-neutral-text-secondary leading-relaxed mb-6">
                    {service.shortDescription}
                  </p>
                  <Link to={`/services/${service.slug}`}>
                    <Button variant="primary" dataTestId={`service-link-${service.slug}`}>
                      Learn More
                    </Button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How We Work Section */}
      <section className="section-spacing bg-neutral-surface">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-text-primary mb-4">
              How We Work
            </h2>
            <p className="text-lg text-neutral-text-secondary max-w-3xl mx-auto">
              From strategic planning to continuous support, we partner with you to drive growth, manage risks, and achieve your goals.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            <div className="bg-white p-6 rounded-lg border border-neutral-border shadow-card text-center">
              <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                1
              </div>
              <h3 className="text-lg font-semibold text-neutral-text-primary mb-2">
                Client Understanding
              </h3>
              <p className="text-sm text-neutral-text-secondary">
                We thoroughly understand your business model, financial structure, and specific requirements through detailed consultations.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg border border-neutral-border shadow-card text-center">
              <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                2
              </div>
              <h3 className="text-lg font-semibold text-neutral-text-primary mb-2">
                Strategic Planning
              </h3>
              <p className="text-sm text-neutral-text-secondary">
                Our experts provide tailored advice for taxation, project finance, compliance, or structuring—ensuring optimized and compliant planning.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg border border-neutral-border shadow-card text-center">
              <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                3
              </div>
              <h3 className="text-lg font-semibold text-neutral-text-primary mb-2">
                Documentation
              </h3>
              <p className="text-sm text-neutral-text-secondary">
                We handle all end-to-end documentation, statutory filings, legal drafts, and ensure full compliance with applicable laws.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg border border-neutral-border shadow-card text-center">
              <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                4
              </div>
              <h3 className="text-lg font-semibold text-neutral-text-primary mb-2">
                Execution
              </h3>
              <p className="text-sm text-neutral-text-secondary">
                Our team implements the plan efficiently and represents you before banks, government departments, and tax authorities.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg border border-neutral-border shadow-card text-center">
              <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                5
              </div>
              <h3 className="text-lg font-semibold text-neutral-text-primary mb-2">
                Continuous Support
              </h3>
              <p className="text-sm text-neutral-text-secondary">
                We provide ongoing monitoring, review, and continuous support to ensure sustained compliance and performance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section with Background Image */}
      <section className="relative section-spacing overflow-hidden" style={{
        backgroundImage: 'linear-gradient(to right, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url("https://images.unsplash.com/photo-1553877522-43269d4ea984?w=1600&q=80")',
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}>
        <div className="container-custom relative z-10">
          <div className="text-center text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 drop-shadow-lg">
              Need Expert Financial Guidance?
            </h2>
            <p className="text-lg mb-8 text-white/95 max-w-2xl mx-auto drop-shadow-md">
              Our team is ready to help you navigate complex financial challenges and achieve your business goals.
            </p>
            <Link to="/contact">
              <Button variant="secondary" size="lg" dataTestId="services-cta-contact" className="bg-white text-primary hover:bg-white/90">
                Get In Touch
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;
