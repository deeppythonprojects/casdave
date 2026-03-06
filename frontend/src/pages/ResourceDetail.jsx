import React, { useState, useEffect } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import parse, { domToReact } from 'html-react-parser';
import SEO from '../components/common/SEO';
import Button from '../components/common/Button';
import ResourceCard from '../components/resources/ResourceCard';
import { FaArrowRight, FaClock, FaUser, FaCheckCircle } from 'react-icons/fa';

const ResourceDetail = () => {
  const { slug } = useParams();
  const [resource, setResource] = useState(null);
  const [relatedResources, setRelatedResources] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/data/resources.json')
      .then(res => res.json())
      .then(data => {
        const foundResource = data.resources.find(r => r.slug === slug);
        if (foundResource) {
          setResource(foundResource);
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

  const parseOptions = {
    replace: ({ name, children, attribs }) => {
      if (!name) return;

      if (name === 'p') return (
        <p className="text-neutral-text-secondary leading-relaxed mb-5">
          {domToReact(children, parseOptions)}
        </p>
      );

      if (name === 'h2') return (
        <h2 className="text-2xl font-bold text-neutral-text-primary mt-10 mb-4 pb-2 border-b border-neutral-border">
          {domToReact(children, parseOptions)}
        </h2>
      );

      if (name === 'h3') return (
        <h3 className="text-lg font-semibold text-primary mt-6 mb-3">
          {domToReact(children, parseOptions)}
        </h3>
      );

      if (name === 'ul') return (
        <ul className="space-y-2 mb-6 list-none pl-0">
          {domToReact(children, parseOptions)}
        </ul>
      );

      if (name === 'ol') return (
        <ol className="space-y-2 mb-6 list-none pl-0">
          {domToReact(children, parseOptions)}
        </ol>
      );

      if (name === 'li') return (
        <li className="flex items-start gap-3 text-neutral-text-secondary">
          <FaCheckCircle className="text-primary flex-shrink-0 mt-1" size={14} />
          <span>{domToReact(children, parseOptions)}</span>
        </li>
      );

      if (name === 'strong') return (
        <strong className="font-semibold text-neutral-text-primary">
          {domToReact(children, parseOptions)}
        </strong>
      );

      if (name === 'a') return (
        <a {...attribs} className="text-primary hover:underline">
          {domToReact(children, parseOptions)}
        </a>
      );

      if (name === 'blockquote') return (
        <blockquote className="border-l-4 border-primary bg-neutral-surface rounded-r-lg px-6 py-4 my-6 text-neutral-text-secondary">
          {domToReact(children, parseOptions)}
        </blockquote>
      );
    }
  };

  const schemaMarkup = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": resource.title,
    "description": resource.excerpt,
    "image": resource.image,
    "datePublished": resource.date,
    "author": { "@type": "Person", "name": resource.author },
    "publisher": { "@type": "Organization", "name": "Dave & Associates Chartered Accountants" }
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
      <section className="py-12 bg-white">
        <div className="container-custom">
          <article className="max-w-5xl mx-auto">

            {/* Hero Section */}
            <div className="flex flex-col lg:flex-row gap-8 lg:gap-10 mb-10 pb-10 border-b border-neutral-border">
              {resource.image && (
                <div className="lg:w-2/5 flex-shrink-0">
                  <img
                    src={resource.image}
                    alt={resource.title}
                    className="w-full h-auto object-cover rounded-xl shadow-card aspect-[4/3]"
                  />
                </div>
              )}
              <div className="lg:w-3/5 flex flex-col justify-center">
                <div className="mb-3">
                  <span className="inline-block bg-primary text-white text-xs font-semibold px-3 py-1.5 rounded-full uppercase tracking-wide">
                    {resource.category}
                  </span>
                </div>
                <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-neutral-text-primary mb-4 leading-tight">
                  {resource.title}
                </h1>
                <p className="text-neutral-text-secondary text-base mb-5 leading-relaxed">
                  {resource.excerpt}
                </p>
                <div className="flex flex-wrap items-center gap-4 text-sm text-neutral-text-muted mb-4">
                  <div className="flex items-center">
                    <FaUser className="mr-2 text-primary" size={14} />
                    <span className="font-medium">{resource.author}</span>
                  </div>
                  <div className="flex items-center">
                    <FaClock className="mr-2 text-primary" size={14} />
                    <span>{formatDate(resource.date)}</span>
                  </div>
                </div>
                {resource.tags && resource.tags.length > 0 && (
                  <div className="flex flex-wrap gap-2">
                    {resource.tags.map((tag, index) => (
                      <span key={index} className="bg-primary/10 text-primary px-3 py-1 rounded-full text-xs font-medium">
                        #{tag}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* Article Content */}
          <div className="max-w-none">
            {resource.content && parse(resource.content, parseOptions)}
          </div>

            {/* Share & Tags */}
            <div className="mt-10 pt-8 border-t border-neutral-border">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <div>
                  <p className="text-sm font-semibold text-neutral-text-primary mb-2">Share this article:</p>
                  <div className="flex gap-3">
                    < a
                      href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(resource.title)}&url=${encodeURIComponent(window.location.href)}`}
                      target="_blank" rel="noopener noreferrer"
                      className="w-10 h-10 bg-neutral-surface rounded-full flex items-center justify-center hover:bg-primary hover:text-white transition-colors text-neutral-text-secondary"
                      data-testid="share-twitter"
                    >
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
                    </a>
                    <a 
                      href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(window.location.href)}`}
                      target="_blank" rel="noopener noreferrer"
                      className="w-10 h-10 bg-neutral-surface rounded-full flex items-center justify-center hover:bg-[#0077B5] hover:text-white transition-colors text-neutral-text-secondary"
                      data-testid="share-linkedin"
                    >
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                    </a>
                    <a
                      href={`mailto:?subject=${encodeURIComponent(resource.title)}&body=${encodeURIComponent('Check out this article: ' + window.location.href)}`}
                      className="w-10 h-10 bg-neutral-surface rounded-full flex items-center justify-center hover:bg-primary hover:text-white transition-colors text-neutral-text-secondary"
                      data-testid="share-email"
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                    </a>
                  </div>
                </div>
                {resource.tags && resource.tags.length > 0 && (
                  <div>
                    <p className="text-sm font-semibold text-neutral-text-primary mb-2">Topics:</p>
                    <div className="flex flex-wrap gap-2">
                      {resource.tags.map((tag, index) => (
                        <span key={index} className="bg-neutral-surface text-neutral-text-secondary px-3 py-1.5 rounded-lg text-sm border border-neutral-border hover:border-primary hover:text-primary transition-colors cursor-pointer">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* CTA Box */}
            <div className="mt-10 bg-gradient-to-r from-primary to-primary-hover rounded-xl p-8 md:p-10 text-white">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
                <div>
                  <h3 className="text-2xl font-bold mb-2">Need Professional Assistance?</h3>
                  <p className="text-white/90 leading-relaxed max-w-lg">
                    Our expert team at Dave & Associates is here to help you navigate complex financial and tax matters.
                  </p>
                </div>
                <Link to="/contact" className="flex-shrink-0">
                  <Button variant="secondary" size="lg" dataTestId="resource-detail-contact" className="bg-white text-primary hover:bg-white/90 shadow-lg">
                    Get Consultation
                  </Button>
                </Link>
              </div>
            </div>

          </article>
        </div>
      </section>

      {/* Related Resources */}
      {relatedResources.length > 0 && (
        <section className="section-spacing bg-neutral-surface">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-neutral-text-primary mb-4">Related Articles</h2>
              <p className="text-lg text-neutral-text-secondary">More insights from our experts</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {relatedResources.map((relatedResource) => (
                <ResourceCard key={relatedResource.id} resource={relatedResource} />
              ))}
            </div>
            <div className="text-center mt-12">
              <Link to="/resources">
                <Button variant="secondary" dataTestId="view-all-resources">View All Resources</Button>
              </Link>
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default ResourceDetail;