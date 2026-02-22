import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import SEO from '../components/common/SEO';
import Button from '../components/common/Button';
import { getServiceBySlug, servicesData } from '../data/servicesData';
import { FaCheckCircle, FaArrowRight } from 'react-icons/fa';

const ServiceDetail = () => {
  const { slug } = useParams();
  const service = getServiceBySlug(slug);

  if (!service) {
    return <Navigate to="/services" replace />;
  }

  // Get related services (excluding current)
  const relatedServices = servicesData
    .filter(s => s.id !== service.id)
    .slice(0, 3);

  const schemaMarkup = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": service.title,
    "provider": {
      "@type": "Organization",
      "name": "Dave & Associates Chartered Accountants"
    },
    "description": service.fullDescription,
    "areaServed": {
      "@type": "City",
      "name": "Ahmedabad"
    }
  };

  return (
    <>
      <SEO 
        title={service.metaTitle}
        description={service.metaDescription}
        keywords={`${service.title}, ${service.slug}, CA services ahmedabad`}
        schemaMarkup={schemaMarkup}
      />

      {/* Breadcrumb */}
      <div className="bg-neutral-surface py-4 border-b border-neutral-border">
        <div className="container-custom">
          <nav className="flex items-center text-sm text-neutral-text-secondary">
            <Link to="/" className="hover:text-primary" data-testid="breadcrumb-home">Home</Link>
            <FaArrowRight className="mx-2" size={10} />
            <Link to="/services" className="hover:text-primary" data-testid="breadcrumb-services">Services</Link>
            <FaArrowRight className="mx-2" size={10} />
            <span className="text-neutral-text-primary">{service.title}</span>
          </nav>
        </div>
      </div>

      {/* Service Hero */}
      <section className="bg-primary text-white py-20">
        <div className="container-custom text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{service.title}</h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            {service.shortDescription}
          </p>
        </div>
      </section>

      {/* Service Image */}
      {service.image && (
        <section className="-mt-12 relative z-10">
          <div className="container-custom">
            <div className="aspect-video rounded-lg overflow-hidden shadow-hover border-4 border-white">
              <img 
                src={service.image} 
                alt={service.title}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </section>
      )}

      {/* Service Details */}
      <section className="section-spacing bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-neutral-text-primary mb-6">
              Overview
            </h2>
            <p className="text-lg text-neutral-text-secondary leading-relaxed mb-12">
              {service.fullDescription}
            </p>

            <h2 className="text-3xl font-bold text-neutral-text-primary mb-6">
              Key Features & Offerings
            </h2>
            <div className="space-y-4 mb-12">
              {service.features.map((feature, index) => (
                <div key={index} className="flex items-start bg-neutral-surface p-4 rounded-lg border border-neutral-border">
                  <FaCheckCircle className="text-primary mr-4 mt-1 flex-shrink-0" size={20} />
                  <p className="text-neutral-text-secondary leading-relaxed">{feature}</p>
                </div>
              ))}
            </div>

            <div className="bg-accent p-8 rounded-lg border border-primary/20">
              <h3 className="text-2xl font-bold text-primary mb-4">
                Why Choose Dave & Associates for {service.title}?
              </h3>
              <p className="text-neutral-text-secondary leading-relaxed mb-6">
                Our team brings extensive experience and deep expertise in {service.title.toLowerCase()}. We combine technical knowledge with practical insights to deliver solutions that are not just compliant but strategically advantageous for your business. With our proactive approach and commitment to excellence, we ensure you stay ahead of regulatory changes and maximize opportunities.
              </p>
              <Link to="/contact">
                <Button variant="primary" dataTestId={`service-detail-contact-${slug}`}>
                  Get Expert Consultation
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Related Services */}
      {relatedServices.length > 0 && (
        <section className="section-spacing bg-neutral-surface">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-neutral-text-primary mb-4">
                Related Services
              </h2>
              <p className="text-lg text-neutral-text-secondary">
                Explore our other professional services
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {relatedServices.map((relatedService) => (
                <Link
                  key={relatedService.id}
                  to={`/services/${relatedService.slug}`}
                  className="bg-white p-6 rounded-lg border border-neutral-border shadow-card hover:shadow-hover hover:border-primary/20 transition-all"
                  data-testid={`related-service-${relatedService.slug}`}
                >
                  <h3 className="text-xl font-semibold text-neutral-text-primary mb-3 hover:text-primary transition-colors">
                    {relatedService.title}
                  </h3>
                  <p className="text-neutral-text-secondary mb-4 line-clamp-3">
                    {relatedService.shortDescription}
                  </p>
                  <span className="text-primary font-medium flex items-center">
                    Learn More
                    <FaArrowRight className="ml-2" size={12} />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="section-spacing bg-white">
        <div className="container-custom">
          <div className="bg-primary rounded-2xl shadow-hover p-12 text-center text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-lg mb-8 text-white/90 max-w-2xl mx-auto">
              Contact us today to discuss how we can help with your {service.title.toLowerCase()} needs.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link to="/contact">
                <Button variant="secondary" size="lg" dataTestId="service-detail-cta-contact" className="w-full sm:w-auto">
                  Contact Us
                </Button>
              </Link>
              <Link to="/services">
                <Button variant="primary" size="lg" dataTestId="service-detail-cta-all-services" className="w-full sm:w-auto bg-white text-primary hover:bg-white/90">
                  View All Services
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ServiceDetail;
