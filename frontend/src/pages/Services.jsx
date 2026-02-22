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

      {/* Page Hero */}
      <section className="bg-primary text-white py-20">
        <div className="container-custom text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Services</h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Comprehensive financial services tailored to meet your business needs
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-spacing bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <p className="text-lg text-neutral-text-secondary max-w-4xl mx-auto leading-relaxed">
              From taxation and compliance to strategic financial advisory, we offer a complete suite of professional services designed to help your business thrive. Our expert team brings decades of combined experience across all areas of chartered accountancy.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {servicesData.map((service) => (
              <ServiceCard key={service.id} service={service} />
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

      {/* CTA Section */}
      <section className="section-spacing bg-white">
        <div className="container-custom">
          <div className="bg-primary rounded-2xl shadow-hover p-12 text-center text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Need Expert Financial Guidance?
            </h2>
            <p className="text-lg mb-8 text-white/90 max-w-2xl mx-auto">
              Our team is ready to help you navigate complex financial challenges and achieve your business goals.
            </p>
            <Link to="/contact">
              <Button variant="secondary" size="lg" dataTestId="services-cta-contact">
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
