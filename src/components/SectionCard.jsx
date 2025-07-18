"use client";

import React from 'react';
import Link from 'next/link';
import PropTypes from 'prop-types';
import styles from './SectionCard.module.css';

const SectionCard = ({ 
  title, 
  description, 
  href, 
  variant = 'primary',
  backgroundImage,
  onClick,
  className = '',
  isFlippable = false,
  isFlipped = false,
  backContent,
  animatedPrice
}) => {
  const cardClasses = `${styles.sectionCard} ${styles[variant]} ${className}`;
  
  const cardStyle = backgroundImage ? {
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center'
  } : {};

  const handleClick = (e) => {
    if (onClick) {
      e.preventDefault();
      onClick();
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      if (onClick) {
        onClick();
      }
    }
  };

  // For flippable cards, we use a 3D flip structure
  if (isFlippable) {
    return (
      <div 
        className={`${cardClasses} ${styles.flippableCard} ${isFlipped ? styles.flipped : ''}`}
        onClick={handleClick}
        onKeyDown={handleKeyDown}
        role="button"
        tabIndex={0}
      >
        <div className={styles.flipInner}>
          {/* Front face */}
          <div className={styles.flipFront} style={cardStyle}>
            <div className={styles.overlay}>
              <div className={styles.content}>
                {animatedPrice && <div className={styles.animatedPrice}>{animatedPrice}</div>}
                <h3 className={styles.title}>{title}</h3>
                {description && <p className={styles.description}>{description}</p>}
                <div className={styles.arrow}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8 4L16 12L8 20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              </div>
            </div>
          </div>
          
          {/* Back face */}
          <div className={styles.flipBack} style={cardStyle}>
            <div className={styles.overlay}>
              <div className={styles.content}>
                <p className={styles.description}>{backContent}</p>
                <div className={styles.arrow}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20 12L4 12M12 4L4 12L12 20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (href) {
    return (
      <a 
        href={href} 
        className={cardClasses}
        style={cardStyle}
        onClick={handleClick}
      >
        <div className={styles.overlay}>
          <div className={styles.content}>
            {animatedPrice && <div className={styles.animatedPrice}>{animatedPrice}</div>}
            <h3 className={styles.title}>{title}</h3>
            {description && <p className={styles.description}>{description}</p>}
            <div className={styles.arrow}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8 4L16 12L8 20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
          </div>
        </div>
      </a>
    );
  }

  return (
    <div 
      className={cardClasses}
      style={cardStyle}
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      role="button"
      tabIndex={0}
    >
      <div className={styles.overlay}>
        <div className={styles.content}>
          {animatedPrice && <div className={styles.animatedPrice}>{animatedPrice}</div>}
          <h3 className={styles.title}>{title}</h3>
          {description && <p className={styles.description}>{description}</p>}
          <div className={styles.arrow}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M8 4L16 12L8 20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

SectionCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  href: PropTypes.string,
  variant: PropTypes.oneOf(['primary', 'secondary', 'accent', 'neutral']),
  backgroundImage: PropTypes.string,
  onClick: PropTypes.func,
  className: PropTypes.string,
  isFlippable: PropTypes.bool,
  isFlipped: PropTypes.bool,
  backContent: PropTypes.string,
  animatedPrice: PropTypes.string
};

export default SectionCard; 