// src/components/SEO/OpenGraphTags.jsx
import React from 'react';
import Head from 'next/head';

const OpenGraphTags = ({
  title,
  description,
  image,
  url,
  type = 'website',
  siteName = 'Tu Planta de Reciclaje',
  locale = 'es_CL',
}) => {
  return (
    <Head>
      <meta property="og:title" content={title} />
      {description && <meta property="og:description" content={description} />}
      {image && <meta property="og:image" content={image} />}
      {url && <meta property="og:url" content={url} />}
      <meta property="og:type" content={type} />
      <meta property="og:site_name" content={siteName} />
      <meta property="og:locale" content={locale} />
    </Head>
  );
};

export default OpenGraphTags;
