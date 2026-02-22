import React from 'react';
import { Link } from 'react-router-dom';

const ResourceCard = ({ resource }) => {
  const categoryColors = {
    'Tax Update': 'bg-blue-100 text-blue-800',
    'Guide': 'bg-green-100 text-green-800',
    'Article': 'bg-purple-100 text-purple-800',
    'News': 'bg-orange-100 text-orange-800',
  };

  const categoryColor = categoryColors[resource.category] || 'bg-gray-100 text-gray-800';

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
  };

  return (
    <Link 
      to={`/resources/${resource.slug}`} 
      className="group bg-white rounded-lg border border-neutral-border shadow-card hover:shadow-hover hover:border-primary/20 overflow-hidden transition-all duration-300 block h-full"
      data-testid={`resource-card-${resource.slug}`}
    >
      {/* Image */}
      <div className="aspect-video overflow-hidden">
        <img 
          src={resource.image} 
          alt={resource.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>

      {/* Content */}
      <div className="p-6">
        {/* Category Badge */}
        <div className="flex items-center justify-between mb-3">
          <span className={`text-xs font-semibold px-3 py-1 rounded-full ${categoryColor}`}>
            {resource.category}
          </span>
          <span className="text-sm text-neutral-text-muted">
            {formatDate(resource.date)}
          </span>
        </div>

        {/* Title */}
        <h3 className="text-xl font-semibold text-neutral-text-primary mb-3 group-hover:text-primary transition-colors line-clamp-2">
          {resource.title}
        </h3>

        {/* Excerpt */}
        <p className="text-neutral-text-secondary leading-relaxed mb-4 line-clamp-3">
          {resource.excerpt}
        </p>

        {/* Read More Link */}
        <div className="flex items-center text-primary font-medium group-hover:translate-x-1 transition-transform">
          Read More
          <svg 
            className="w-4 h-4 ml-2" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M9 5l7 7-7 7" 
            />
          </svg>
        </div>

        {/* Author */}
        {resource.author && (
          <p className="text-sm text-neutral-text-muted mt-4 pt-4 border-t border-neutral-border">
            By {resource.author}
          </p>
        )}
      </div>
    </Link>
  );
};

export default ResourceCard;
