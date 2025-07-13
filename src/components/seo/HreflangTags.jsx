// src/components/SEO/HreflangTags.jsx
import React from 'react';
import { Helmet } from 'react-helmet-async';

const HreflangTags = ({ links = [] }) => {
  return (
    <Helmet>
      {links.map(({ hrefLang, href }) => (
        <link
          key={hrefLang} // ✅ better than index
          rel="alternate"
          hrefLang={hrefLang}
          href={href}
        />
      ))}
    </Helmet>
  );
};

export default HreflangTags;
