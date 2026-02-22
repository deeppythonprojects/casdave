import React from 'react';
import { Helmet } from 'react-helmet-async';

const SEO = ({ 
  title = '', 
  description = '', 
  keywords = '', 
  canonicalUrl = '', 
  ogImage = '',
  schemaMarkup = null
}) => {
  const defaultTitle = 'Dave & Associates Chartered Accountants | CA Firm Ahmedabad';
  const defaultDescription = 'Leading Chartered Accountant firm in Ahmedabad offering direct tax, GST, audit, virtual CFO, project financing and business advisory services.';
  const defaultKeywords = 'chartered accountants ahmedabad, CA firm ahmedabad, tax consultancy, audit services, GST services, virtual CFO';
  
  // Ensure title is always a non-empty string
  const pageTitle = (title && title.trim()) ? title.trim() : defaultTitle;
  const pageDescription = (description && description.trim()) ? description.trim() : defaultDescription;
  const pageKeywords = (keywords && keywords.trim()) ? keywords.trim() : defaultKeywords;
  
  return (
    <Helmet>
      <title>{pageTitle}</title>
      <meta name="description" content={pageDescription} />
      <meta name="keywords" content={pageKeywords} />
      <meta name="author" content="Dave and Associates" />
      <meta name="robots" content="index, follow" />
      <meta httpEquiv="Content-Language" content="en" />
      
      <meta name="geo.region" content="IN-GJ" />
      <meta name="geo.placename" content="Ahmedabad" />
      <meta name="geo.position" content="23.0225;72.5714" />
      <meta name="ICBM" content="23.0225, 72.5714" />
      
      <meta property="og:title" content={pageTitle} />
      <meta property="og:description" content={pageDescription} />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="Dave & Associates" />
      <meta property="og:locale" content="en_IN" />
      
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={pageTitle} />
      <meta name="twitter:description" content={pageDescription} />
      
      {schemaMarkup && (
        <script type="application/ld+json">
          {JSON.stringify(schemaMarkup)}
        </script>
      )}
    </Helmet>
  );
};

export default SEO;
