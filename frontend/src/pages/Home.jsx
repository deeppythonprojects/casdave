import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/common/SEO';
import Button from '../components/common/Button';
import ServiceCard from '../components/services/ServiceCard';
import ResourceCard from '../components/resources/ResourceCard';
import { servicesData } from '../data/servicesData';
import { FaCheckCircle, FaAward, FaUsers, FaHandshake } from 'react-icons/fa';

const Home = () => {
  const [resources, setResources] = React.useState([]);

  React.useEffect(() => {
    // Load resources from JSON
    fetch('/data/resources.json')
      .then(res => res.json())
      .then(data => {
        const featured = data.resources.filter(r => r.featured).slice(0, 3);
        setResources(featured);
      })
      .catch(err => console.error('Error loading resources:', err));
  }, []);

  const schemaMarkup = {
    "@context": "https://schema.org",
    "@type": "AccountingService",
    "name": "Dave & Associates Chartered Accountants",
    "image": window.location.origin + "/logo.png",
    "description": "Leading Chartered Accountant firm in Ahmedabad offering direct tax, GST, audit, virtual CFO, project financing and business advisory services.",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "208, Maurya Complex, Navjeevan Press Road, Nr. Incometax Cross Road",
      "addressLocality": "Ahmedabad",
      "addressRegion": "Gujarat",
      "postalCode": "380014",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "23.0225",
      "longitude": "72.5714"
    },
    "telephone": "+91 79 40329623",
    "email": "office@casdave.co.in",
    "url": window.location.origin,
    "priceRange": "$$",
    "areaServed": {
      "@type": "City",
      "name": "Ahmedabad"
    }
  };

  return (
    <>
      <SEO 
        title="Dave & Associates Chartered Accountants | CA Firm Ahmedabad"
        description="Leading Chartered Accountant firm in Ahmedabad offering direct tax, GST, audit, virtual CFO, project financing and business advisory services."
        keywords="chartered accountants ahmedabad, CA firm ahmedabad, tax consultancy, audit services, GST services, virtual CFO, best CA in ahmedabad"
        schemaMarkup={schemaMarkup}
      />

      {/* Hero Section */}
      <section className="relative text-white section-spacing overflow-hidden" style={{
        backgroundImage: 'url("https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1600&q=80")',
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}>
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/80 to-primary/70" />
        
        <div className="container-custom relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight">
              Your Trusted Financial Partners in Ahmedabad
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-white/95 leading-relaxed">
              Expert Chartered Accountants providing comprehensive tax, audit, and business advisory services with utmost accuracy and integrity.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link to="/services">
                <Button variant="secondary" size="lg" dataTestId="hero-services-button" className="w-full sm:w-auto bg-white text-primary hover:bg-white/90">
                  Explore Our Services
                </Button>
              </Link>
              <Link to="/contact">
                <Button variant="primary" size="lg" dataTestId="hero-contact-button" className="w-full sm:w-auto bg-secondary hover:bg-secondary-hover border-2 border-white">
                  Get In Touch
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* About Preview Section */}
      <section className="section-spacing bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-neutral-text-primary mb-6">
                About Dave & Associates
              </h2>
              <p className="text-lg text-neutral-text-secondary leading-relaxed mb-6">
                Dave & Associates, Chartered Accountants is a leading chartered accountancy firm located in Ahmedabad, Gujarat, India headed by young and dynamic team of Chartered Accountants. Our core objective is to provide services with utmost accuracy and integrity that one can rely on.
              </p>
              <p className="text-lg text-neutral-text-secondary leading-relaxed mb-8">
                We provide expert and professional services with that extra personal touch which makes our goodwill strong. The firm is founded by CA Sarang M. Dave, who brings over a decade of experience in almost every area of professional work.
              </p>
              <Link to="/about">
                <Button variant="primary" dataTestId="about-learn-more">
                  Learn More About Us
                </Button>
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-accent p-6 rounded-lg border border-primary/20">
                <FaAward className="w-10 h-10 text-primary mb-4" />
                <h3 className="text-2xl font-bold text-primary mb-2">10+</h3>
                <p className="text-neutral-text-secondary">Years of Excellence</p>
              </div>
              <div className="bg-accent p-6 rounded-lg border border-primary/20">
                <FaUsers className="w-10 h-10 text-primary mb-4" />
                <h3 className="text-2xl font-bold text-primary mb-2">500+</h3>
                <p className="text-neutral-text-secondary">Satisfied Clients</p>
              </div>
              <div className="bg-accent p-6 rounded-lg border border-primary/20">
                <FaCheckCircle className="w-10 h-10 text-primary mb-4" />
                <h3 className="text-2xl font-bold text-primary mb-2">100%</h3>
                <p className="text-neutral-text-secondary">Client Satisfaction</p>
              </div>
              <div className="bg-accent p-6 rounded-lg border border-primary/20">
                <FaHandshake className="w-10 h-10 text-primary mb-4" />
                <h3 className="text-2xl font-bold text-primary mb-2">8+</h3>
                <p className="text-neutral-text-secondary">Service Categories</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid Section */}
      <section className="section-spacing bg-neutral-surface">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-text-primary mb-4">
              Our Comprehensive Services
            </h2>
            <p className="text-lg text-neutral-text-secondary max-w-3xl mx-auto leading-relaxed">
              From taxation to financial advisory, we offer a complete range of professional services tailored to your business needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {servicesData.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/services">
              <Button variant="primary" size="lg" dataTestId="view-all-services">
                View All Services
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Resources Showcase Section */}
      {resources.length > 0 && (
        <section className="section-spacing bg-white">
          <div className="container-custom">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-neutral-text-primary mb-4">
                Latest Resources & Insights
              </h2>
              <p className="text-lg text-neutral-text-secondary max-w-3xl mx-auto leading-relaxed">
                Stay updated with the latest tax updates, guides, and articles from our experts.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {resources.map((resource) => (
                <ResourceCard key={resource.id} resource={resource} />
              ))}
            </div>

            <div className="text-center mt-12">
              <Link to="/resources">
                <Button variant="primary" size="lg" dataTestId="view-all-resources">
                  View All Resources
                </Button>
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* Quote Section */}
      <section className="relative section-spacing text-white overflow-hidden" style={{
        backgroundImage: 'url("https://images.unsplash.com/photo-1497366216548-37526070297c?w=1600&q=80")',
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}>
        <div className="absolute inset-0 bg-primary/85" />
        <div className="container-custom relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <svg className="w-16 h-16 mx-auto mb-6 text-white/40" fill="currentColor" viewBox="0 0 24 24">
              <path d="M6 17h3l2-4V7H5v6h3zm8 0h3l2-4V7h-6v6h3z" />
            </svg>
            <blockquote className="text-2xl md:text-3xl font-medium mb-6 leading-relaxed">
              "We endeavor to constantly improve the quality of our services through adhering to integrity, professional excellence and proactive client centric approach."
            </blockquote>
            <p className="text-xl text-white/90">Our Commitment to Excellence</p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-spacing bg-neutral-surface">
        <div className="container-custom">
          <div className="bg-white rounded-2xl shadow-hover p-12 text-center border border-primary/10">
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-text-primary mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-lg text-neutral-text-secondary mb-8 max-w-2xl mx-auto leading-relaxed">
              Let's discuss how our expert chartered accountants can help your business thrive. Contact us today for a consultation.
            </p>
            <Link to="/contact">
              <Button variant="primary" size="lg" dataTestId="cta-contact-button">
                Contact Us Today
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
