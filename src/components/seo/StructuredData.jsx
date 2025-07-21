// src/components/SEO/StructuredData.jsx
import React from 'react';

export default function StructuredData({ jsonLd }) {
  if (!jsonLd) return null;

  // In App Router, we render script tags directly without next/head
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(jsonLd, null, 0)
      }}
    />
  );
}
