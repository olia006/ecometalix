import React from 'react';

/* eslint-disable react/prop-types */
const OptimizedImage = ({ 
  src, 
  alt, 
  className = '', 
  width, 
  height,
  ...props 
}) => {
  // For now, just use the original image to prevent loading issues
  // TODO: Add proper error handling for webp/avif versions later
  return (
    <img 
      src={src} 
      alt={alt} 
      className={className}
      width={width}
      height={height}
      loading="lazy"
      decoding="async"
      {...props}
    />
  );
};

export default OptimizedImage; 