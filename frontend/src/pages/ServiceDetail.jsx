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

      {/* Service Hero with Background Image */}
      <section 
        className="relative py-24 md:py-32 text-white overflow-hidden"
        style={{
          backgroundImage: service.image 
            ? `linear-gradient(to right, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.5)), url("${service.image}")`
            : 'linear-gradient(to right, rgba(30, 64, 175, 0.9), rgba(30, 64, 175, 0.7))',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="container-custom text-center relative z-10">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 drop-shadow-lg">{service.title}</h1>
          <p className="text-xl md:text-2xl text-white/95 max-w-3xl mx-auto drop-shadow-md">
            {service.shortDescription}
          </p>
        </div>
      </section>

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
            <div className="flex flex-col gap-4 mb-12">
              {service.features.map((feature, index) => {
                const parts = feature.split('—');
                const hasSplit = parts.length > 1;
                return (
                  <div
                    key={index}
                    className="flex items-start bg-neutral-surface p-5 rounded-lg border border-neutral-border hover:border-primary hover:scale-[1.01] transition-all duration-200"
                  >
                    <FaCheckCircle className="text-primary mr-4 mt-1 flex-shrink-0" size={20} />
                    <p className="text-neutral-text-secondary leading-relaxed">
                      {hasSplit ? (
                        <>
                          <span className="font-semibold text-neutral-text-primary">{parts[0].trim()} —</span>
                          {parts.slice(1).join('—')}
                        </>
                      ) : (
                        feature
                      )}
                    </p>
                  </div>
                );
              })}
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

      {/* CTA Section with Background Image */}
      <section className="section-spacing">
        <div className="container-custom">
          <div 
            className="rounded-2xl shadow-hover p-12 text-center text-white overflow-hidden relative"
            style={{
              backgroundImage: 'linear-gradient(to right, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.5)), url("/images/books.webp")',
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 drop-shadow-lg">
              Ready to Get Started?
            </h2>
            <p className="text-lg mb-8 text-white/95 max-w-2xl mx-auto drop-shadow-md">
              Contact us today to discuss how we can help with your {service.title.toLowerCase()} needs.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link to="/contact">
                <Button variant="secondary" size="lg" dataTestId="service-detail-cta-contact" className="w-full sm:w-auto bg-white text-primary hover:bg-white/90">
                  Contact Us
                </Button>
              </Link>
              <Link to="/services">
                <Button variant="primary" size="lg" dataTestId="service-detail-cta-all-services" className="w-full sm:w-auto bg-transparent border-2 border-white hover:bg-white/10">
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
