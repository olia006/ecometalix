"use client";

import React from 'react';
import Link from 'next/link';
import PropTypes from 'prop-types';
import styles from './FAQInternalLink.module.css';

export default function FAQInternalLink({ 
  href, 
  children, 
  trackingEvent = 'faq_internal_link',
  className = '',
  ...props 
}) {
  
  // Analytics tracking for internal links
  const handleClick = () => {
    try {
      // Google Analytics 4 tracking
      if (typeof window !== 'undefined' && window.gtag) {
        window.gtag('event', trackingEvent, {
          link_url: href,
          link_text: typeof children === 'string' ? children : href,
          source_section: 'faq',
          timestamp: Date.now()
        });
      }
      
      // Console logging for development
      if (process.env.NODE_ENV === 'development') {
        console.log('FAQ Internal Link Click:', { 
          href, 
          text: typeof children === 'string' ? children : 'link', 
          event: trackingEvent 
        });
      }
    } catch (error) {
      // Silently handle any tracking errors
      console.warn('FAQ link tracking error:', error);
    }
  };

  return (
    <Link 
      href={href}
      className={`${styles.faqInternalLink} ${className}`}
      onClick={handleClick}
      {...props}
    >
      {children}
    </Link>
  );
}

FAQInternalLink.propTypes = {
  href: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  trackingEvent: PropTypes.string,
  className: PropTypes.string,
}; 