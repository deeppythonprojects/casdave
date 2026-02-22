import React from 'react';
import { Link } from 'react-router-dom';
import { 
  FaFileInvoiceDollar, 
  FaReceipt, 
  FaChartLine, 
  FaHandHoldingUsd, 
  FaBuilding, 
  FaClipboardCheck, 
  FaUserTie, 
  FaLightbulb 
} from 'react-icons/fa';

const iconMap = {
  FaFileInvoiceDollar,
  FaReceipt,
  FaChartLine,
  FaHandHoldingUsd,
  FaBuilding,
  FaClipboardCheck,
  FaUserTie,
  FaLightbulb
};

const ServiceCard = ({ service }) => {
  const Icon = iconMap[service.icon] || FaLightbulb;

  return (
    <Link 
      to={`/services/${service.slug}`} 
      className="service-card group bg-white p-8 rounded-lg border border-neutral-border shadow-card hover:shadow-hover hover:border-primary/20 block h-full"
      data-testid={`service-card-${service.slug}`}
    >
      <div className="flex flex-col h-full">
        {/* Icon */}
        <div className="w-14 h-14 bg-accent rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary transition-colors duration-300">
          <Icon className="w-7 h-7 text-primary group-hover:text-white transition-colors duration-300" />
        </div>

        {/* Title */}
        <h3 className="text-xl font-semibold text-neutral-text-primary mb-3 group-hover:text-primary transition-colors">
          {service.title}
        </h3>

        {/* Description */}
        <p className="text-neutral-text-secondary leading-relaxed mb-4 flex-grow">
          {service.shortDescription}
        </p>

        {/* Learn More Link */}
        <div className="flex items-center text-primary font-medium group-hover:translate-x-1 transition-transform">
          Learn More
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
      </div>
    </Link>
  );
};

export default ServiceCard;
