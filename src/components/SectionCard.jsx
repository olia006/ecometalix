"use client";

import React from 'react';
import Link from 'next/link';
import PropTypes from 'prop-types';
import styles from './SectionCard.module.css';

const SectionCard = ({ 
  title, 
  preview, 
  href, 
  variant = 'primary',
  backgroundImage,
  onClick,
  className = '',
  isFlippable = false,
  isFlipped = false,
  backContent,
  animatedPrice,
  statsText,
  ctaText
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

  const renderContent = (previewText, showStats = true) => (
    <div className={styles.contentContainer}>
      {/* Preview Content */}
      <div className={styles.previewContent}>
        <h3 className={styles.title}>{title}</h3>
        {previewText && <p className={styles.preview}>{previewText}</p>}
        {showStats && statsText && <div className={styles.statsText}>{statsText}</div>}
      </div>
      
      {/* "See More" Indicator */}
      <div className={styles.seeMoreIndicator}>
        <span className={styles.seeMoreText}>
          {title.includes('How it works') || title.includes('Cómo funciona') ? 
            (title.includes('How') ? 'See full process →' : 'Ver proceso completo →') :
            title.includes('Materials') || title.includes('Materiales') ?
            (title.includes('Materials') ? 'Browse catalog →' : 'Explorar catálogo →') :
            (title.includes('Why') ? 'See all benefits →' : 'Ver todas las ventajas →')
          }
        </span>
        <div className={styles.arrow}>
          <svg viewBox="0 0 24 24" fill="currentColor">
            <path d="M8.59 16.59L13.17 12L8.59 7.41L10 6l6 6-6 6l-1.41-1.41z"/>
          </svg>
        </div>
      </div>
    </div>
  );

  // Flippable card
  if (isFlippable) {
    return (
      <div 
        className={`${cardClasses} ${styles.flippableCard} ${isFlipped ? styles.flipped : ''}`}
        style={cardStyle}
        onClick={handleClick}
        onKeyDown={handleKeyDown}
        tabIndex={0}
        role="button"
        aria-label={`Flip card: ${title}`}
      >
        <div className={styles.flipInner}>
          <div className={styles.flipFront}>
            <div className={styles.overlay}>
              {renderContent(preview)}
            </div>
          </div>
          <div className={styles.flipBack}>
            <div className={styles.overlay}>
              {renderContent(backContent, false)}
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Link card
  if (href) {
    return (
      <a 
        href={href}
        className={cardClasses}
        style={cardStyle}
        onClick={handleClick}
        onKeyDown={handleKeyDown}
        role="link"
        aria-label={`Navigate to: ${title}`}
      >
        <div className={styles.overlay}>
          {renderContent(preview)}
        </div>
      </a>
    );
  }

  // Regular div card
  return (
    <div 
      className={cardClasses}
      style={cardStyle}
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      tabIndex={onClick ? 0 : undefined}
      role={onClick ? "button" : undefined}
      aria-label={onClick ? `Action: ${title}` : undefined}
    >
      <div className={styles.overlay}>
        {renderContent(preview)}
      </div>
    </div>
  );
};

SectionCard.propTypes = {
  title: PropTypes.string.isRequired,
  preview: PropTypes.string,
  href: PropTypes.string,
  variant: PropTypes.oneOf(['primary', 'secondary', 'accent', 'neutral']),
  backgroundImage: PropTypes.string,
  onClick: PropTypes.func,
  className: PropTypes.string,
  isFlippable: PropTypes.bool,
  isFlipped: PropTypes.bool,
  backContent: PropTypes.string,
  animatedPrice: PropTypes.string,
  statsText: PropTypes.string,
  ctaText: PropTypes.string
};

export default SectionCard; 