// src/components/SEO/HreflangTags.jsx
import React from 'react';
import Head from 'next/head';

const HreflangTags = ({ links = [] }) => {
  return (
    <Head>
      {links.map(({ hrefLang, href }) => (
        <link
          key={hrefLang}
          rel="alternate"
          hrefLang={hrefLang}
          href={href}
        />
      ))}
    </Head>
  );
};

export default HreflangTags;
