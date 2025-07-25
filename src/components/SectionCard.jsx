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
  onClick,
  className = '',
  isFlippable = false,
  isFlipped = false,
  backContent,
  animatedPrice,
  statsText,
  ctaText,
  isActive = false
}) => {
  const cardClasses = `${styles.sectionCard} ${styles[variant]} ${className} ${isActive ? styles.active : ''}`;

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

  // Function to get appropriate CTA text based on card content
  const getCtaText = () => {
    if (ctaText) return ctaText;
    
    if (title.includes('How it works') || title.includes('Cómo funciona')) {
      return title.includes('How') ? 'View Process' : 'Ver Proceso';
    } else if (title.includes('Materials') || title.includes('Materiales')) {
      return title.includes('Materials') ? 'Browse Materials' : 'Ver Materiales';
    } else if (title.includes('Why') || title.includes('Por qué')) {
      return title.includes('Why') ? 'Learn More' : 'Saber Más';
    }
    
    return title.includes('English') || title.includes('How') || title.includes('Materials') || title.includes('Why') 
      ? 'Learn More' : 'Saber Más';
  };

  const renderContent = (previewText, showStats = true) => (
    <>
      {/* Stats badge positioned absolutely in top-right */}
      {showStats && statsText && <div className={styles.statsText}>{statsText}</div>}
      
      <div className={styles.contentContainer}>
        {/* Preview Content */}
        <div className={styles.previewContent}>
          <h3 className={styles.title}>{title}</h3>
          {previewText && <p className={styles.preview}>{previewText}</p>}
        </div>
        
        {/* Prominent CTA Button - Only the button is clickable */}
        <div className={styles.ctaContainer}>
          {href ? (
            <Link href={href} className={styles.ctaButton}>
              {getCtaText()}
            </Link>
          ) : (
            <span className={styles.ctaButton}>
              {getCtaText()}
            </span>
          )}
        </div>
      </div>
    </>
  );

  // Flippable card
  if (isFlippable) {
    return (
      <div 
        className={`${cardClasses} ${styles.flippableCard} ${isFlipped ? styles.flipped : ''}`}
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

  // Regular card with clickable button (href handled in renderContent)
  if (href) {
    return (
      <div className={cardClasses}>
        <div className={styles.overlay}>
          <span className="sr-only">Industrial scrap metal processing facility</span>
          {renderContent(preview)}
        </div>
      </div>
    );
  }

  // Regular div card
  return (
    <div 
      className={cardClasses}
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
  onClick: PropTypes.func,
  className: PropTypes.string,
  isFlippable: PropTypes.bool,
  isFlipped: PropTypes.bool,
  backContent: PropTypes.string,
  animatedPrice: PropTypes.string,
  statsText: PropTypes.string,
  ctaText: PropTypes.string,
  isActive: PropTypes.bool
};

export default SectionCard; 