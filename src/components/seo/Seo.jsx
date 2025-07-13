// src/components/SEO/Seo.jsx
import MetaTags from './MetaTags';
import CanonicalLink from './CanonicalLink';
import HreflangTags from './HreflangTags';
import OpenGraphTags from './OpenGraphTags';
import TwitterCardTags from './TwitterCardTags';
import StructuredData from './StructuredData';

const Seo = ({
  title,
  description,
  keywords,
  canonical,
  canonicalUrl,
  hreflangs = [],
  ogImage,
  ogUrl,
  ogType = 'website',
  ogSiteName = 'MetalRecycla',
  locale = 'es_CL', // <-- Added default locale (Chilean Spanish)
  structuredData,
  children,
  // Twitter Card props
  twitterCardType = 'summary_large_image',
  twitterSite = '@ecometalix',
  twitterImage,
}) => {
  // Support both 'canonical' and 'canonicalUrl' props for backward compatibility
  const canonicalLink = canonical || canonicalUrl;
  
  return (
    <>
      <MetaTags title={title} description={description} keywords={keywords} />
      <CanonicalLink url={canonicalLink} />
      <HreflangTags links={hreflangs} />
      <OpenGraphTags
        title={title}
        description={description}
        image={ogImage}
        url={ogUrl || canonicalLink}
        type={ogType}
        siteName={ogSiteName}
        locale={locale}
      />
      <TwitterCardTags
        title={title}
        description={description}
        image={twitterImage || ogImage}
        site={twitterSite}
        cardType={twitterCardType}
      />
      {structuredData && <StructuredData jsonLd={structuredData} />}
      {children}
    </>
  );
};

export default Seo;

