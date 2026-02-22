import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/common/SEO';
import Button from '../components/common/Button';
import { FeatureCard } from '../components/common/Card';
import { teamData } from '../data/teamData';
import { FaAward, FaCheckCircle, FaHandshake, FaLightbulb, FaLinkedin } from 'react-icons/fa';

const About = () => {
  const schemaMarkup = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "mainEntity": {
      "@type": "Organization",
      "name": "Dave & Associates Chartered Accountants",
      "description": "Leading chartered accountancy firm in Ahmedabad providing expert financial services",
      "founder": {
        "@type": "Person",
        "name": "CA Sarang Dave",
        "jobTitle": "Founder",
        "hasCredential": "FCA, M.Com., DISA"
      }
    }
  };

  return (
    <>
      <SEO 
        title="About Us | Dave & Associates Chartered Accountants"
        description="Learn about Dave & Associates, a leading CA firm in Ahmedabad with 10+ years of experience. Meet our expert team of chartered accountants."
        keywords="about dave and associates, CA firm ahmedabad, chartered accountants team, CA Sarang Dave"
        schemaMarkup={schemaMarkup}
      />

      {/* Page Hero with Background Image */}
      <section className="relative py-20 overflow-hidden" style={{
        backgroundImage: 'linear-gradient(to right, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url("https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1600&q=80")',
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}>
        <div className="container-custom text-center relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white drop-shadow-lg">Dave & Associates</h1>
          <p className="text-xl text-white/95 drop-shadow-md">Chartered Accountants</p>
        </div>
      </section>

      {/* Company Overview */}
      <section className="section-spacing bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-text-primary mb-8 text-center">
              About the Firm
            </h2>
            
            <div className="prose prose-lg max-w-none text-neutral-text-secondary space-y-6">
              <p className="leading-relaxed">
                Dave & Associates, Chartered Accountants is a leading chartered accountancy firm located in Ahmedabad, Gujarat, India headed by young and dynamic team of Chartered Accountants. Our core objective is to provide services with utmost accuracy and integrity that one can rely on. We provide expert and professional services with that extra personal touch which makes our goodwill strong.
              </p>
              
              <p className="leading-relaxed">
                The firm is founded by CA Sarang M. Dave, who is the backbone of the firm. He has been working as a Practicing Chartered Accountant since more than a decade and he is having wide experience in almost every area of professional work. He has maintained certain qualities at a firm level as a whole which include high level of expertise and competence of the team, straightforwardness and transparency that reflects in the way we advocate the issues of our clients at different platforms.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-12">
                <div className="bg-accent p-6 rounded-lg border border-primary/20">
                  <h3 className="text-xl font-bold text-primary mb-3">Our Mission</h3>
                  <p className="text-neutral-text-secondary">
                    To build high quality trusted organization that deliver ethical, insightful and value-driven best in class services to its international as well as domestic clients.
                  </p>
                </div>
                
                <div className="bg-accent p-6 rounded-lg border border-primary/20">
                  <h3 className="text-xl font-bold text-primary mb-3">Our Vision</h3>
                  <p className="text-neutral-text-secondary">
                    We envision developing an organization in future years on the foundation of expertise, technical excellence, transparency, credibility and commitment.
                  </p>
                </div>
                
                <div className="bg-accent p-6 rounded-lg border border-primary/20">
                  <h3 className="text-xl font-bold text-primary mb-3">Our Values</h3>
                  <p className="text-neutral-text-secondary">
                    We endeavor to constantly improve the quality of our services through adhering to integrity, professional excellence and proactive client centric approach.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-spacing bg-neutral-surface">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-text-primary mb-4">
              Key Differentiators
            </h2>
            <p className="text-lg text-neutral-text-secondary max-w-3xl mx-auto">
              What sets us apart in the chartered accountancy profession
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FeatureCard 
              icon={FaAward}
              title="Comprehensive Range of Services"
              description="We offer end-to-end financial solutions covering taxation, audit, compliance, and advisory services under one roof."
            />
            <FeatureCard 
              icon={FaLightbulb}
              title="Specialization with Cross Functional Expertise"
              description="Our team brings specialized knowledge across multiple domains including direct tax, GST, corporate law, and project financing."
            />
            <FeatureCard 
              icon={FaCheckCircle}
              title="Proactive and Preventive Advisory"
              description="We don't just react to issues; we anticipate challenges and provide strategic guidance to prevent problems before they arise."
            />
            <FeatureCard 
              icon={FaHandshake}
              title="Punctual Completion and Delivery"
              description="We respect deadlines and ensure timely delivery of all services, helping you stay compliant and stress-free."
            />
            <FeatureCard 
              icon={FaAward}
              title="Experienced and Expert Chartered Accountants"
              description="Our team comprises qualified CAs with extensive practical experience and deep industry knowledge."
            />
            <FeatureCard 
              icon={FaHandshake}
              title="Founder-Level Attention with Modern Outlook"
              description="We combine the personal touch of founder involvement with modern technology and contemporary business practices."
            />
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="section-spacing bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-text-primary mb-4">
              Meet Our Team
            </h2>
            <p className="text-lg text-neutral-text-secondary max-w-3xl mx-auto">
              Experienced professionals dedicated to your financial success
            </p>
          </div>

          <div className="space-y-32 max-w-6xl mx-auto">
            {teamData.map((member, index) => (
              <div key={member.id} className="bg-white rounded-xl border border-neutral-border shadow-card hover:shadow-hover transition-shadow overflow-hidden">
                <div className={`flex flex-col md:flex-row ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}`}>
                  {/* Image with LinkedIn Hover - Equal width for both */}
                  <div className="md:w-2/5 relative group flex-shrink-0">
                    <img 
                      src={member.image} 
                      alt={member.name}
                      className="w-full h-full object-cover min-h-[350px] md:min-h-[450px]"
                    />
                    {/* LinkedIn Hover Overlay */}
                    <a 
                      href={member.linkedin} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="absolute inset-0 bg-gray-800/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center"
                      data-testid={`team-image-linkedin-${member.id}`}
                    >
                      <div className="bg-white/90 p-4 rounded-full shadow-lg transform scale-75 group-hover:scale-100 transition-transform duration-300">
                        <FaLinkedin className="text-[#0077B5] text-4xl" />
                      </div>
                    </a>
                  </div>
                  {/* Content */}
                  <div className="md:w-3/5 p-8 md:p-10 flex flex-col justify-center">
                    <h3 className="text-2xl font-bold text-neutral-text-primary mb-1">
                      {member.name}
                    </h3>
                    <p className="text-lg text-primary font-semibold mb-2">
                      {member.title}
                    </p>
                    <p className="text-sm text-neutral-text-muted mb-4">
                      {member.qualifications}
                    </p>
                    <p className="text-neutral-text-secondary leading-relaxed mb-4">
                      {member.bio}
                    </p>
                    <div className="space-y-2">
                      <p className="text-sm font-semibold text-neutral-text-primary">Specializations:</p>
                      <ul className="text-sm text-neutral-text-secondary space-y-1">
                        {member.specializations.map((spec, idx) => (
                          <li key={idx} className="flex items-start">
                            <FaCheckCircle className="text-primary mr-2 mt-1 flex-shrink-0" size={12} />
                            {spec}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <a 
                      href={member.linkedin} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-primary hover:text-primary-hover mt-4"
                      data-testid={`team-linkedin-${member.id}`}
                    >
                      <FaLinkedin className="mr-2" />
                      Connect on LinkedIn
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section with Background Image */}
      <section className="relative section-spacing text-white overflow-hidden" style={{
        backgroundImage: 'linear-gradient(to right, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url("https://images.unsplash.com/photo-1556761175-b413da4baf72?w=1600&q=80")',
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}>
        <div className="container-custom text-center relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 drop-shadow-lg">
            Let's Work Together
          </h2>
          <p className="text-xl mb-8 text-white/95 max-w-2xl mx-auto drop-shadow-md">
            Experience the difference of working with dedicated professionals who truly care about your success.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/services">
              <Button variant="secondary" size="lg" dataTestId="about-cta-services" className="w-full sm:w-auto bg-white text-primary hover:bg-white/90">
                Explore Our Services
              </Button>
            </Link>
            <Link to="/contact">
              <Button variant="primary" size="lg" dataTestId="about-cta-contact" className="w-full sm:w-auto bg-secondary hover:bg-secondary-hover border-2 border-white">
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
