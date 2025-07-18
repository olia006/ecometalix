// src/components/SEO/TwitterCardTags.jsx
import React from 'react';
import Head from 'next/head';

const TwitterCardTags = ({
  title,
  description,
  image,
  site = '@ecometalix',
  cardType = 'summary_large_image',
  creator = '@ecometalix',
}) => {
  return (
    <Head>
      <meta name="twitter:card" content={cardType} />
      <meta name="twitter:site" content={site} />
      <meta name="twitter:creator" content={creator} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      {image && <meta name="twitter:image" content={image} />}
      {image && <meta name="twitter:image:alt" content={title} />}
    </Head>
  );
};

export default TwitterCardTags;
