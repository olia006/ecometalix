// src/components/SEO/CanonicalLink.jsx
import React from 'react';
import Head from 'next/head';

const CanonicalLink = ({ url }) => {
  if (!url) return null;

  return (
    <Head>
      <link rel="canonical" href={url} />
    </Head>
  );
};

export default CanonicalLink;
