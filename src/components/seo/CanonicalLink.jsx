// src/components/SEO/CanonicalLink.jsx
import React from 'react';
import { Helmet } from 'react-helmet-async';

const CanonicalLink = ({ url }) => {
  if (!url) return null;

  return (
    <Helmet>
      <link rel="canonical" href={url} />
    </Helmet>
  );
};

export default CanonicalLink;
