// src/components/SEO/StructuredData.jsx
import React from 'react';
import Head from 'next/head';

const StructuredData = ({ jsonLd }) => {
  return (
    <Head>
      <script 
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </Head>
  );
};

export default StructuredData;
