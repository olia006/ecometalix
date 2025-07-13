// src/components/SEO/StructuredData.jsx
import React from 'react';
import { Helmet } from 'react-helmet-async';

const StructuredData = ({ jsonLd }) => {
  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(jsonLd)}
      </script>
    </Helmet>
  );
};

export default StructuredData;
