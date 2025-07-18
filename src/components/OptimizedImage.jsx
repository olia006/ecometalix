import React, { useState } from 'react';
import PropTypes from 'prop-types';

const OptimizedImage = ({ 
  src, 
  alt, 
  className = '', 
  width, 
  height,
  fallbackSrc,
  ...props 
}) => {
  const [imageSrc, setImageSrc] = useState(src);
  const [hasError, setHasError] = useState(false);

  // Handle image load errors with fallback
  const handleError = () => {
    if (!hasError) {
      setHasError(true);
      if (fallbackSrc) {
        setImageSrc(fallbackSrc);
      } else if (src.includes('.webp')) {
        // Try JPG version if WebP fails
        setImageSrc(src.replace('.webp', '.jpg'));
      } else if (src.includes('.avif')) {
        // Try WebP, then JPG if AVIF fails
        setImageSrc(src.replace('.avif', '.webp'));
      }
    }
  };

  // Only generate optimized sources if we know they exist
  // For now, let's disable this to prevent loading errors
  const getOptimizedSources = () => {
    // Disable auto-generation of optimized sources to prevent 404 errors
    return null;
  };

  return (
    <picture className={className}>
      {getOptimizedSources()}
      <img 
        src={imageSrc} 
        alt={alt} 
        width={width}
        height={height}
        loading="lazy"
        decoding="async"
        onError={handleError}
        {...props}
      />
    </picture>
  );
};

OptimizedImage.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  className: PropTypes.string,
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  fallbackSrc: PropTypes.string,
};

export default OptimizedImage; 