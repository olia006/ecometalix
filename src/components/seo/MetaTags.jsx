// src/components/SEO/MetaTags.jsx
import React from 'react';
import Head from 'next/head';

const MetaTags = ({
  title = 'Página sin título',
  description = 'Descripción no disponible',
  keywords = '',
  robots = 'index, follow',
  lang = 'es',
  children,
}) => {
  return (
    <Head>
      {/* ✅ Primary Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      <meta name="robots" content={robots} />

      {/* ✅ Mobile Friendly */}
      <meta name="viewport" content="width=device-width, initial-scale=1" />

      {/* ✅ Charset */}
      <meta charSet="utf-8" />

      {/* ✅ Language */}
      <html lang={lang} />

      {/* ✅ Custom */}
      {children}
    </Head>
  );
};

export default MetaTags;
