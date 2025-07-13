// src/components/SEO/TwitterCardTags.jsx
import React from 'react';
import { Helmet } from 'react-helmet-async';

const TwitterCardTags = ({
  title,
  description,
  image,
  site = '@ecometalix',
  cardType = 'summary_large_image',
}) => {
  return (
    <Helmet>
      <meta name="twitter:card" content={cardType} />
      <meta name="twitter:site" content={site} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
    </Helmet>
  );
};

export default TwitterCardTags;
