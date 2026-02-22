import { useEffect } from 'react';

const SEO = ({ title, description, keywords }) => {
  const defaultTitle = 'Dave & Associates Chartered Accountants | CA Firm Ahmedabad';
  const defaultDescription = 'Leading Chartered Accountant firm in Ahmedabad offering direct tax, GST, audit, virtual CFO, project financing and business advisory services.';
  
  const pageTitle = title || defaultTitle;
  const pageDescription = description || defaultDescription;
  
  useEffect(() => {
    // Set document title
    document.title = pageTitle;
    
    // Update meta description
    let metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', pageDescription);
    }
    
    // Update OG tags
    let ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) {
      ogTitle.setAttribute('content', pageTitle);
    }
    
    let ogDescription = document.querySelector('meta[property="og:description"]');
    if (ogDescription) {
      ogDescription.setAttribute('content', pageDescription);
    }
  }, [pageTitle, pageDescription]);
  
  return null;
};

export default SEO;
