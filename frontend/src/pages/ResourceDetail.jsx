import React, { useState, useEffect } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import SEO from '../components/common/SEO';
import Button from '../components/common/Button';
import ResourceCard from '../components/resources/ResourceCard';
import { FaArrowRight, FaClock, FaUser, FaTag } from 'react-icons/fa';

const ResourceDetail = () => {
  const { slug } = useParams();
  const [resource, setResource] = useState(null);
  const [relatedResources, setRelatedResources] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Load resource from JSON
    fetch('/data/resources.json')
      .then(res => res.json())
      .then(data => {
        const foundResource = data.resources.find(r => r.slug === slug);
        if (foundResource) {
          setResource(foundResource);
          // Get related resources (same category, excluding current)
          const related = data.resources
            .filter(r => r.category === foundResource.category && r.id !== foundResource.id)
            .slice(0, 3);
          setRelatedResources(related);
        }
        setLoading(false);
      })
      .catch(err => {
        console.error('Error loading resource:', err);
        setLoading(false);
      });
  }, [slug]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
      </div>
    );
  }

  if (!resource) {
    return <Navigate to="/resources" replace />;
  }

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
  };

  const schemaMarkup = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": resource.title,
    "description": resource.excerpt,
    "image": resource.image,
    "datePublished": resource.date,
    "author": {
      "@type": "Person",
      "name": resource.author
    },
    "publisher": {
      "@type": "Organization",
      "name": "Dave & Associates Chartered Accountants"
    }
  };

  return (
    <>
      <SEO 
        title={`${resource.title} | Dave & Associates`}
        description={resource.excerpt}
        keywords={resource.tags.join(', ')}
        ogImage={resource.image}
        schemaMarkup={schemaMarkup}
      />

      {/* Breadcrumb */}
      <div className="bg-neutral-surface py-4 border-b border-neutral-border">
        <div className="container-custom">
          <nav className="flex items-center text-sm text-neutral-text-secondary">
            <Link to="/" className="hover:text-primary" data-testid="breadcrumb-home">Home</Link>
            <FaArrowRight className="mx-2" size={10} />
            <Link to="/resources" className="hover:text-primary" data-testid="breadcrumb-resources">Resources</Link>
            <FaArrowRight className="mx-2" size={10} />
            <span className="text-neutral-text-primary">{resource.title}</span>
          </nav>
        </div>
      </div>

      {/* Article Header */}
      <section className="section-spacing bg-white">
        <div className="container-custom">
          <article className="max-w-4xl mx-auto">
            {/* Category Badge */}
            <div className="mb-6">
              <span className="inline-block bg-primary text-white text-sm font-semibold px-4 py-2 rounded-full">
                {resource.category}
              </span>
            </div>

            {/* Title */}
            <h1 className="text-4xl md:text-5xl font-bold text-neutral-text-primary mb-6">
              {resource.title}
            </h1>

            {/* Meta Information */}
            <div className="flex flex-wrap items-center gap-6 text-neutral-text-secondary mb-8 pb-8 border-b border-neutral-border">
              <div className="flex items-center">
                <FaUser className="mr-2" />
                <span>{resource.author}</span>
              </div>
              <div className="flex items-center">
                <FaClock className="mr-2" />
                <span>{formatDate(resource.date)}</span>
              </div>
              {resource.tags && resource.tags.length > 0 && (
                <div className="flex items-center">
                  <FaTag className="mr-2" />
                  <span>{resource.tags.join(', ')}</span>
                </div>
              )}
            </div>

            {/* Featured Image */}
            {resource.image && (
              <div className="mb-12">
                <img 
                  src={resource.image} 
                  alt={resource.title}
                  className="w-full rounded-lg shadow-hover"
                />
              </div>
            )}

            {/* Article Content */}
            <div 
              className="prose prose-lg max-w-none"
              style={{
                color: '#475569',
                lineHeight: '1.8'
              }}
              dangerouslySetInnerHTML={{ __html: resource.content }}
            />

            {/* Tags */}
            {resource.tags && resource.tags.length > 0 && (
              <div className="mt-12 pt-8 border-t border-neutral-border">
                <p className="text-sm font-semibold text-neutral-text-primary mb-3">Tags:</p>
                <div className="flex flex-wrap gap-2">
                  {resource.tags.map((tag, index) => (
                    <span 
                      key={index}
                      className="bg-neutral-surface text-neutral-text-secondary px-4 py-2 rounded-full text-sm border border-neutral-border"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* CTA Box */}
            <div className="mt-12 bg-accent p-8 rounded-lg border border-primary/20">
              <h3 className="text-2xl font-bold text-primary mb-4">
                Need Professional Assistance?
              </h3>
              <p className="text-neutral-text-secondary mb-6 leading-relaxed">
                Our expert team at Dave & Associates is here to help you navigate complex financial and tax matters. Contact us for personalized consultation.
              </p>
              <Link to="/contact">
                <Button variant="primary" dataTestId="resource-detail-contact">
                  Contact Us Today
                </Button>
              </Link>
            </div>
          </article>
        </div>
      </section>

      {/* Related Resources */}
      {relatedResources.length > 0 && (
        <section className="section-spacing bg-neutral-surface">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-neutral-text-primary mb-4">
                Related Articles
              </h2>
              <p className="text-lg text-neutral-text-secondary">
                More insights from our experts
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {relatedResources.map((relatedResource) => (
                <ResourceCard key={relatedResource.id} resource={relatedResource} />
              ))}
            </div>

            <div className="text-center mt-12">
              <Link to="/resources">
                <Button variant="secondary" dataTestId="view-all-resources">
                  View All Resources
                </Button>
              </Link>
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default ResourceDetail;
