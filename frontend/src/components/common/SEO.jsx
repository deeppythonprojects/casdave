import React from 'react';
import { Helmet } from 'react-helmet-async';

const SEO = (props) => {
  const {
    title,
    description,
    keywords,
    canonicalUrl,
    ogImage,
    schemaMarkup
  } = props || {};
  
  const defaultTitle = 'Dave & Associates Chartered Accountants | CA Firm Ahmedabad';
  const defaultDescription = 'Leading Chartered Accountant firm in Ahmedabad offering direct tax, GST, audit, virtual CFO, project financing and business advisory services.';
  const defaultKeywords = 'chartered accountants ahmedabad, CA firm ahmedabad, tax consultancy, audit services, GST services, virtual CFO';
  
  // Ensure we always have valid strings
  const pageTitle = title || defaultTitle;
  const pageDescription = description || defaultDescription;
  const pageKeywords = keywords || defaultKeywords;
  
  return (
    <Helmet>
      <title>{String(pageTitle)}</title>
      <meta name="description" content={String(pageDescription)} />
      <meta name="keywords" content={String(pageKeywords)} />
      <meta name="author" content="Dave and Associates" />
      <meta name="robots" content="index, follow" />
      <meta httpEquiv="Content-Language" content="en" />
      
      <meta name="geo.region" content="IN-GJ" />
      <meta name="geo.placename" content="Ahmedabad" />
      <meta name="geo.position" content="23.0225;72.5714" />
      <meta name="ICBM" content="23.0225, 72.5714" />
      
      <meta property="og:title" content={String(pageTitle)} />
      <meta property="og:description" content={String(pageDescription)} />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="Dave & Associates" />
      <meta property="og:locale" content="en_IN" />
      
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={String(pageTitle)} />
      <meta name="twitter:description" content={String(pageDescription)} />
      
      {schemaMarkup && typeof schemaMarkup === 'object' && (
        <script type="application/ld+json">
          {JSON.stringify(schemaMarkup)}
        </script>
      )}
    </Helmet>
  );
};

export default SEO;
