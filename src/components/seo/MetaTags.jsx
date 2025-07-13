// src/components/SEO/MetaTags.jsx
import React from 'react';
import { Helmet } from 'react-helmet-async';

const MetaTags = ({
  title = 'Página sin título',
  description = 'Descripción no disponible',
  keywords = '',
  robots = 'index, follow',
  lang = 'es',
  children,
}) => {
  return (
    <Helmet htmlAttributes={{ lang }}>
      {/* ✅ Primary Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      <meta name="robots" content={robots} />

      {/* ✅ Mobile Friendly */}
      <meta name="viewport" content="width=device-width, initial-scale=1" />

      {/* ✅ Charset */}
      <meta charSet="utf-8" />

      {/* ✅ Custom */}
      {children}
    </Helmet>
  );
};

export default MetaTags;
