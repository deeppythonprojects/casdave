import React, { useState, useEffect } from 'react';
import SEO from '../components/common/SEO';
import ResourceCard from '../components/resources/ResourceCard';

const Resources = () => {
  const [resources, setResources] = useState([]);
  const [filteredResources, setFilteredResources] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Load resources from JSON
    fetch('/data/resources.json')
      .then(res => res.json())
      .then(data => {
        setResources(data.resources);
        setFilteredResources(data.resources);
        setLoading(false);
      })
      .catch(err => {
        console.error('Error loading resources:', err);
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    if (selectedCategory === 'All') {
      setFilteredResources(resources);
    } else {
      setFilteredResources(resources.filter(r => r.category === selectedCategory));
    }
  }, [selectedCategory, resources]);

  const categories = ['All', ...new Set(resources.map(r => r.category))];

  const schemaMarkup = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": "Resources & Insights",
    "description": "Latest tax updates, guides, and articles from Dave & Associates"
  };

  return (
    <>
      <SEO 
        title="Resources & Insights | Dave & Associates CA"
        description="Stay updated with latest tax updates, GST news, finance articles and professional guides from Dave & Associates Chartered Accountants."
        keywords="tax updates, GST news, finance articles, tax news india, CA resources, business guides"
        schemaMarkup={schemaMarkup}
      />

      {/* Page Hero with Background Image */}
      <section className="relative py-20 overflow-hidden" style={{
        backgroundImage: 'linear-gradient(to right, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url("https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=1600&q=80")',
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}>
        <div className="container-custom text-center relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white drop-shadow-lg">Resources & Insights</h1>
          <p className="text-xl text-white/95 max-w-3xl mx-auto drop-shadow-md">
            Stay informed with the latest updates, guides, and expert articles
          </p>
        </div>
      </section>

      {/* Category Filter */}
      <section className="bg-neutral-surface py-8 border-b border-neutral-border">
        <div className="container-custom">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-full font-medium transition-colors ${
                  selectedCategory === category
                    ? 'bg-primary text-white'
                    : 'bg-white text-neutral-text-secondary hover:bg-primary/10 hover:text-primary border border-neutral-border'
                }`}
                data-testid={`category-filter-${category.toLowerCase().replace(/\s+/g, '-')}`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Resources Grid */}
      <section className="section-spacing bg-white">
        <div className="container-custom">
          {loading ? (
            <div className="text-center py-20">
              <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
              <p className="mt-4 text-neutral-text-secondary">Loading resources...</p>
            </div>
          ) : filteredResources.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredResources.map((resource) => (
                <ResourceCard key={resource.id} resource={resource} />
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <p className="text-xl text-neutral-text-secondary">No resources found in this category.</p>
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default Resources;
