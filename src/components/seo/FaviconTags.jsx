// src/components/seo/FaviconTags.jsx
import React from 'react';
import Head from 'next/head';

const FaviconTags = ({ 
  themeColor = '#22c55e' 
}) => {
  return (
    <Head>
      {/* Modern Favicon (SVG for better scalability) */}
      <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
      
      {/* Fallback PNG for older browsers */}
      <link rel="icon" href="/favicon.png" type="image/png" />
      
      {/* Traditional shortcut icon */}
      <link rel="shortcut icon" href="/favicon.svg" />
      
      {/* Apple Touch Icon for iOS */}
      <link rel="apple-touch-icon" href="/favicon.png" />
      
      {/* PWA Theme Color */}
      <meta name="theme-color" content={themeColor} />
      
      {/* Microsoft Tile */}
      <meta name="msapplication-TileColor" content={themeColor} />
      <meta name="msapplication-TileImage" href="/favicon.png" />
    </Head>
  );
};

export default FaviconTags; 