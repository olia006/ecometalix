import React, { useState } from 'react';
import Image from 'next/image';
import PropTypes from 'prop-types';

const LazyImage = ({ 
  src, 
  alt, 
  className = '',
  width = 400,
  height = 300,
  priority = false,
  ...props 
}) => {
  const [isLoaded, setIsLoaded] = useState(false);

  const handleLoad = () => {
    setIsLoaded(true);
  };

  return (
    <div className={className} {...props}>
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        onLoad={handleLoad}
        priority={priority}
        loading={priority ? "eager" : "lazy"}
        style={{
          opacity: isLoaded ? 1 : 0,
          transition: 'opacity 0.3s ease',
          width: '100%',
          height: '100%',
          objectFit: 'cover'
        }}
      />
    </div>
  );
};

LazyImage.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  className: PropTypes.string,
  width: PropTypes.number,
  height: PropTypes.number,
  priority: PropTypes.bool,
};

export default LazyImage; 