import React from 'react';
import { Helmet } from 'react-helmet-async';

const SEO = ({ 
  title, 
  description, 
  keywords, 
  canonicalUrl, 
  ogImage,
  schemaMarkup 
}) => {
  const defaultTitle = 'Dave & Associates Chartered Accountants | CA Firm Ahmedabad';
  const defaultDescription = 'Leading Chartered Accountant firm in Ahmedabad offering direct tax, GST, audit, virtual CFO, project financing and business advisory services.';
  const defaultKeywords = 'chartered accountants ahmedabad, CA firm ahmedabad, tax consultancy, audit services, GST services, virtual CFO';
  const siteUrl = window.location.origin;
  
  const pageTitle = String(title || defaultTitle);
  
  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{pageTitle}</title>
      <meta name="description" content={description || defaultDescription} />
      <meta name="keywords" content={keywords || defaultKeywords} />
      <meta name="author" content="Dave and Associates" />
      <link rel="canonical" href={canonicalUrl || window.location.href} />
      <meta name="robots" content="index, follow" />
      <meta httpEquiv="Content-Language" content="en" />
      
      {/* Geo Tags */}
      <meta name="geo.region" content="IN-GJ" />
      <meta name="geo.placename" content="Ahmedabad" />
      <meta name="geo.position" content="23.0225;72.5714" />
      <meta name="ICBM" content="23.0225, 72.5714" />
      
      {/* Open Graph Tags */}
      <meta property="og:title" content={title || defaultTitle} />
      <meta property="og:description" content={description || defaultDescription} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={canonicalUrl || window.location.href} />
      <meta property="og:image" content={ogImage || `${siteUrl}/logo.png`} />
      <meta property="og:site_name" content="Dave & Associates" />
      <meta property="og:locale" content="en_IN" />
      
      {/* Twitter Card Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title || defaultTitle} />
      <meta name="twitter:description" content={description || defaultDescription} />
      <meta name="twitter:image" content={ogImage || `${siteUrl}/logo.png`} />
      
      {/* Schema Markup */}
      {schemaMarkup && (
        <script type="application/ld+json">
          {JSON.stringify(schemaMarkup)}
        </script>
      )}
    </Helmet>
  );
};

export default SEO;
