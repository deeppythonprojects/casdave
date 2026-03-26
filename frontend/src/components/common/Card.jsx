import React from 'react';
import { FaCheckCircle } from 'react-icons/fa';

const Card = ({ children, className = '', hover = false }) => {
  const hoverClasses = hover ? 'hover:shadow-hover hover:border-primary/20 transition-all duration-300' : '';
  
  return (
    <div className={`bg-white p-8 rounded-lg border border-neutral-border shadow-card ${hoverClasses} ${className}`}>
      {children}
    </div>
  );
};

export const FeatureCard = ({ icon: Icon, title, description }) => {
  return (
    <Card hover={true} className="text-left">
      <div className="flex items-start space-x-4">
        <div className="flex-shrink-0">
          <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center">
            {Icon ? <Icon className="w-6 h-6 text-primary" /> : <FaCheckCircle className="w-6 h-6 text-primary" />}
          </div>
        </div>
        <div className="flex-1">
          <h3 className="text-xl font-semibold text-neutral-text-primary mb-2 ">{title}</h3>
          <p className="text-neutral-text-secondary leading-relaxed text-justify">{description}</p>
        </div>
      </div>
    </Card>
  );
};

export default Card;
