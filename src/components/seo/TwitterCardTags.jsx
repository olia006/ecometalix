// src/components/SEO/TwitterCardTags.jsx
import React from 'react';
import Head from 'next/head';

const TwitterCardTags = ({
  title,
  description,
  image,
  site = '@ecometalix',
  cardType = 'summary_large_image',
}) => {
  return (
    <Head>
      <meta name="twitter:card" content={cardType} />
      <meta name="twitter:site" content={site} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
    </Head>
  );
};

export default TwitterCardTags;
