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
        backgroundImage: 'linear-gradient(to right, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.4)), url("https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1600&q=80")',
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}>
        <div className="container-custom relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight drop-shadow-lg">
              Beyond Compliance{" "}
              <span className="inline-flex items-end gap-1 ml-1">
                <span className="w-2 h-2 rounded-full bg-orange-500 translate-y-1"></span>
                <span className="w-2 h-2 rounded-full bg-white translate-y-1"></span>
                <span className="w-2 h-2 rounded-full bg-green-500 translate-y-1"></span>
              </span>
              <br />
              Delivering Value{" "}
              <span className="inline-flex items-end gap-1 ml-1">
                <span className="w-2 h-2 rounded-full bg-orange-500 translate-y-1"></span>
                <span className="w-2 h-2 rounded-full bg-white translate-y-1"></span>
                <span className="w-2 h-2 rounded-full bg-green-500 translate-y-1"></span>
              </span>
            </h1>
            <p><br /></p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link to="/services">
                <Button variant="secondary" size="lg" dataTestId="hero-services-button" className="w-full sm:w-auto bg-white text-primary hover:bg-white/90">
                  Explore Our Services
                </Button>
              </Link>
              <Link to="/about">
                <Button variant="primary" size="lg" dataTestId="hero-contact-button" className="w-full sm:w-auto bg-primary hover:bg-primary-hover border-2 border-white">
                  Know More About Us
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
                Dave & Associates,<br/> Chartered Accountants
              </h2>
              <p className="text-lg text-neutral-text-secondary leading-relaxed mb-6 text-justify">
                <b>"Your Trusted Financial Advisors"</b><br></br> We are a leading Chartered Accountant firm in Ahmedabad, Gujarat, India led by a young and dynamic team of Chartered Accountants. Our practice is built on the fundamental values of integrity, transparency, and professional excellence, which form the cornerstone of every client relationship we undertake. We believe that trust and clarity are essential in financial matters, and therefore strive to maintain the highest standards of ethical conduct and openness in all our engagements.
              </p>
              {/* <p className="text-lg text-neutral-text-secondary leading-relaxed mb-8 text-justify">
                We provide expert and professional services with that extra personal touch which makes our goodwill strong. The firm is founded by CA Sarang M. Dave, who brings over a decade of experience in almost every area of professional work.
              </p> */}
              <Link to="/about">
                <Button variant="primary" dataTestId="about-learn-more">
                  Learn More About Us
                </Button>
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-lg border border-blue-200 text-center hover:shadow-lg hover:scale-105 hover:border-primary transition-all duration-300 cursor-default">
                <FaAward className="w-10 h-10 text-primary mb-4 mx-auto" />
                <h3 className="text-2xl font-bold text-primary mb-2">10+</h3>
                <p className="text-neutral-text-secondary">Years of Experience</p>
              </div>
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-lg border border-blue-200 text-center hover:shadow-lg hover:scale-105 hover:border-primary transition-all duration-300 cursor-default">
                <FaUsers className="w-10 h-10 text-primary-700 mb-4 mx-auto" />
                <h3 className="text-2xl font-bold text-primary-700 mb-2">100%</h3>
                <p className="text-neutral-text-secondary">Client Data Confidentiality</p>
              </div>
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-lg border border-blue-200 text-center hover:shadow-lg hover:scale-105 hover:border-primary transition-all duration-300 cursor-default">
                <FaCheckCircle className="w-10 h-10 text-primary-700 mb-4 mx-auto" />
                <h3 className="text-2xl font-bold text-primary-700 mb-2">10+</h3>
                <p className="text-neutral-text-secondary">Industry Verticals served</p>
              </div>
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-lg border border-blue-200 text-center hover:shadow-lg hover:scale-105 hover:border-primary transition-all duration-300 cursor-default">
                <FaHandshake className="w-10 h-10 text-primary mb-4 mx-auto" />
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
              By combining strong technical expertise with a practical and solution-oriented approach, we offer a comprehensive range of services to our clients:
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

      {/* Quote Section with CTA */}
      <section
        className="relative py-16 text-white overflow-hidden"
        style={{
          backgroundImage:
            'linear-gradient(to right, rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url("https://images.unsplash.com/photo-1497366216548-37526070297c?w=1600&q=80")',
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="container-custom relative z-10">
          <div className="max-w-7xl mx-auto bg-primary/30 backdrop-blur-lg rounded-2xl shadow-2xl px-10 py-8 border border-white/20">
            
            <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
              
              {/* Left Content */}
              <div className="flex-1">
                <blockquote className="text-xl md:text-2xl font-medium leading-relaxed">
                  "We endeavor to constantly improve the quality of our services through
                  adhering to integrity, professional excellence and a proactive
                  client-centric approach."
                </blockquote>

                <p className="mt-4 text-lg text-white/90 font-semibold">
                  Our Commitment to Excellence
                </p>
              </div>

              {/* Right Button */}
              <div>
                <Link to="/contact">
                  <Button
                    variant="secondary"
                    size="lg"
                    dataTestId="quote-cta-contact"
                    className="bg-white text-primary hover:bg-white/90 px-8 py-3 rounded-xl shadow-xl transition-all duration-300 hover:scale-105"
                  >
                    Contact Us
                  </Button>
                </Link>
              </div>

            </div>

          </div>
        </div>
      </section>

    </>
  );
};

export default Home;