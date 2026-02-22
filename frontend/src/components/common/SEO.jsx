import React from 'react';

// Temporary simplified SEO component without Helmet
const SEO = ({ title, description, keywords, canonicalUrl, ogImage, schemaMarkup }) => {
  // Just update document title directly
  React.useEffect(() => {
    if (title) {
      document.title = title;
    }
  }, [title]);
  
  return null;
};

export default SEO;
